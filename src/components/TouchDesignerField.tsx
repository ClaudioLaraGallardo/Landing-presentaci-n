import React, { useEffect, useRef } from 'react';

interface TouchDesignerFieldProps {
  intensity?: number;
  interactive?: boolean;
  className?: string;
}

export function TouchDesignerField({
  interactive = true,
  className = '',
}: TouchDesignerFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    let mouse = {
      x: width * 0.7,
      y: height * 0.4,
      targetX: width * 0.7,
      targetY: height * 0.4,
      radius: 200,
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Generate TouchDesigner 3D Sphere / Torus Point Cloud
    const numPoints = 850;
    interface Point3D {
      u: number;
      v: number;
      origX: number;
      origY: number;
      origZ: number;
      size: number;
      alpha: number;
      color: string;
      speed: number;
    }

    const points: Point3D[] = [];
    for (let i = 0; i < numPoints; i++) {
      // Golden spiral distribution on sphere / torus
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(Math.random() * 2 - 1);
      const radius = 220 + (Math.random() - 0.5) * 60;

      const origX = radius * Math.sin(v) * Math.cos(u);
      const origY = radius * Math.sin(v) * Math.sin(u);
      const origZ = radius * Math.cos(v);

      const isOrange = Math.random() > 0.82;
      points.push({
        u,
        v,
        origX,
        origY,
        origZ,
        size: Math.random() * 1.6 + 0.8,
        alpha: Math.random() * 0.65 + 0.25,
        color: isOrange ? '#ff5e14' : '#48e5d8',
        speed: (Math.random() * 0.002 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
      });
    }

    let angleX = 0;
    let angleY = 0;
    let time = 0;

    const render = () => {
      time += 0.015;
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Sphere center anchored toward right side like ÁGORA Summit
      const centerX = width > 768 ? width * 0.68 : width * 0.5;
      const centerY = height * 0.48;

      angleY += 0.0035;
      angleX = Math.sin(time * 0.5) * 0.2;

      // Mouse parallax tilt
      const tiltX = (mouse.y - height / 2) * 0.0003;
      const tiltY = (mouse.x - width / 2) * 0.0003;

      const cosY = Math.cos(angleY + tiltY);
      const sinY = Math.sin(angleY + tiltY);
      const cosX = Math.cos(angleX + tiltX);
      const sinX = Math.sin(angleX + tiltX);

      // Render connecting lines for close points (TouchDesigner plexus)
      const projectedPoints: { x: number; y: number; z: number; color: string; alpha: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Organic wave displacement (TouchDesigner noise)
        const wave = Math.sin(time * 2 + p.origY * 0.02) * 14;
        let px = p.origX + wave * 0.3;
        let py = p.origY + Math.cos(time + p.origX * 0.02) * 12;
        let pz = p.origZ;

        // Y-axis rotation
        let x1 = px * cosY + pz * sinY;
        let z1 = -px * sinY + pz * cosY;

        // X-axis rotation
        let y1 = py * cosX - z1 * sinX;
        let z2 = py * sinX + z1 * cosX;

        // Perspective projection
        const fov = 460;
        const scale = fov / (fov + z2);
        const screenX = centerX + x1 * scale;
        const screenY = centerY + y1 * scale;

        // Distance to mouse ripple effect
        const dx = screenX - mouse.x;
        const dy = screenY - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let finalAlpha = p.alpha * Math.max(0.1, (z2 + 250) / 500);
        let finalSize = p.size * scale;

        if (dist < mouse.radius) {
          const repel = (1 - dist / mouse.radius) * 18;
          screenX + (dx / dist) * repel;
          screenY + (dy / dist) * repel;
          finalAlpha = Math.min(1, finalAlpha + 0.4);
          finalSize *= 1.4;
        }

        projectedPoints.push({
          x: screenX,
          y: screenY,
          z: z2,
          color: p.color,
          alpha: finalAlpha,
        });

        // Draw particle point
        ctx.beginPath();
        ctx.arc(screenX, screenY, finalSize, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = finalAlpha;
        ctx.fill();
      }

      // Draw subtle connecting lines (Plexus/Network) for nearest neighbours
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedPoints.length; i += 3) {
        for (let j = i + 1; j < projectedPoints.length; j += 6) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const distSq = (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;

          if (distSq < 2800) {
            const lineAlpha = (1 - Math.sqrt(distSq) / 53) * 0.18 * p1.alpha;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p1.color === '#ff5e14' ? '#ff5e14' : '#48e5d8';
            ctx.globalAlpha = lineAlpha;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
