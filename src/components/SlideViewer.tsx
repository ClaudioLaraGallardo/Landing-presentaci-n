import React, { useState, useEffect } from 'react';
import { SlideData } from '../types/presentation';
import { CorridorMap } from './CorridorMap';
import { SecondLayerGraphic } from './SecondLayerGraphic';
import { TouchDesignerField } from './TouchDesignerField';
import { PhotoGallery } from './PhotoGallery';
import { CrticEcosystem } from './CrticEcosystem';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  FileDown,
  MessageSquareQuote,
  Upload,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface SlideViewerProps {
  slides: SlideData[];
  currentIndex: number;
  onNavigate: (index: number) => void;
  onOpenContentManager: (slideId?: number) => void;
}

export function SlideViewer({
  slides,
  currentIndex,
  onNavigate,
  onOpenContentManager,
}: SlideViewerProps) {
  const currentSlide = slides[currentIndex];
  const [showNotes, setShowNotes] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [slide1Tab, setSlide1Tab] = useState<'crtic-deep' | 'binational-columns'>('crtic-deep');

  useEffect(() => {
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        if (currentIndex < slides.length - 1) onNavigate(currentIndex + 1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (currentIndex > 0) onNavigate(currentIndex - 1);
      } else if (e.key === 'n' || e.key === 'N') {
        setShowNotes((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, slides.length, onNavigate]);

  const slide5Photos = [
    {
      src: '/assets/isi_argentina.jpg',
      caption: 'Delegación y articulación de equipos técnicos en San Martín de los Andes.',
      tag: 'REGISTRO 01',
    },
    {
      src: '/assets/gallardo_argentina.jpg',
      caption: 'Mesa de trabajo y coordinación estratégica binacional.',
      tag: 'REGISTRO 02',
    },
    {
      src: '/assets/leal_argentina.jpg',
      caption: 'Presentación y acuerdos de colaboración estratégica bilateral.',
      tag: 'REGISTRO 03',
    },
    {
      src: '/assets/slide5_foto_4.jpg',
      caption: 'Comitiva binacional en San Martín de los Andes avanzando en la agenda 2024-2026.',
      tag: 'REGISTRO 04',
    },
    {
      src: '/assets/slide5_foto_5.jpg',
      caption: 'Jornada de coordinación estratégica público-privada para el Corredor Bioceánico.',
      tag: 'REGISTRO 05',
    },
    {
      src: '/assets/slide5_foto_6.jpg',
      caption: 'Reunión de acuerdo institucional y registro oficial de la alianza CRTIC-COTESMA.',
      tag: 'REGISTRO 06',
    },
  ];

  return (
    <div className="relative min-h-[calc(100vh-72px)] mt-[72px] bg-black text-white flex flex-col justify-between overflow-x-hidden">
      {/* TouchDesigner 3D point cloud background */}
      <TouchDesignerField className="opacity-70" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 py-6 flex-1 flex flex-col justify-between">
        {/* Top Meta Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#48e5d8] text-black">
              SLIDE {currentSlide.editorialIndex} / 05
            </span>
            <span className="venue-line">{currentSlide.kicker}</span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#121216] border border-white/10 font-mono text-[11px] text-white/70">
              <Clock className="w-3.5 h-3.5 text-[#ff5e14]" />
              <span>{formatTimer(seconds)}</span>
            </div>

            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold font-display uppercase tracking-tight transition-colors ${
                showNotes ? 'bg-[#48e5d8] text-black' : 'bg-transparent text-white/70 hover:text-white border border-white/20'
              }`}
            >
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>Notas Expositor</span>
            </button>

            <button
              onClick={() => onOpenContentManager(currentSlide.id)}
              className="flex items-center gap-1.5 px-3.5 py-1 text-xs font-bold font-display uppercase tracking-tight bg-transparent text-white/80 hover:text-white border border-white/20 hover:border-[#ff5e14]"
            >
              <Upload className="w-3.5 h-3.5 text-[#ff5e14]" />
              <span>Gestionar Slide</span>
            </button>
          </div>
        </div>

        {/* Slide Title & Hero Header */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-black uppercase text-white font-display leading-[0.98] tracking-tight max-w-5xl">
            {currentSlide.title}
          </h2>
          <p className="text-base sm:text-xl font-normal text-white/80 mt-4 max-w-4xl leading-relaxed">
            {currentSlide.subtitle}
          </p>
        </div>

        {/* Slide 1 Mode Switcher */}
        {currentSlide.id === 1 && (
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5 border-b border-white/15 pb-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSlide1Tab('crtic-deep')}
                className={`px-4 py-2 text-xs font-display font-black uppercase tracking-tight transition-colors ${
                  slide1Tab === 'crtic-deep'
                    ? 'bg-[#ff5e14] text-white shadow-lg shadow-[#ff5e14]/20'
                    : 'bg-[#121216] text-white/70 hover:text-white border border-white/20'
                }`}
              >
                ★ Ecosistema Completo CRTIC Sur
              </button>
              <button
                onClick={() => setSlide1Tab('binational-columns')}
                className={`px-4 py-2 text-xs font-display font-black uppercase tracking-tight transition-colors ${
                  slide1Tab === 'binational-columns'
                    ? 'bg-[#48e5d8] text-black'
                    : 'bg-[#121216] text-white/70 hover:text-white border border-white/20'
                }`}
              >
                Visión Alianza CRTIC · COTESMA
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-white/50">
              <span>Fuente Oficial:</span>
              <a
                href="https://landing-crtic-sur.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#48e5d8] hover:underline flex items-center gap-1 font-bold"
              >
                <span>landing-crtic-sur.vercel.app</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}

        {/* Dynamic Graphic or Dual Column */}
        <div className="my-auto py-2">
          {currentSlide.id === 1 && slide1Tab === 'crtic-deep' ? (
            <CrticEcosystem />
          ) : currentSlide.graphicType === 'corridor-map' ? (
            <CorridorMap />
          ) : currentSlide.graphicType === 'value-chain' ? (
            <SecondLayerGraphic />
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              {/* Left Column: Key Points */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                {currentSlide.corePillars.map((point, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-black/80 border border-white/15 hover:border-white/40 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3 mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-[#48e5d8]">
                          0{idx + 1} //
                        </span>
                        <h4 className="text-sm sm:text-base font-black uppercase text-white font-display">
                          {point.title}
                        </h4>
                      </div>
                      {point.metrics && (
                        <span className="text-[10px] font-mono uppercase font-bold text-[#ff5e14] border border-[#ff5e14]/40 px-2 py-0.5">
                          {point.metrics}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column: Hero Image Card & Docs */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="relative border border-white/15 bg-black aspect-[16/10] overflow-hidden group">
                  <img
                    src={currentSlide.heroImage}
                    alt={currentSlide.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-90" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="text-white/80 font-mono text-[11px] truncate pr-2">
                      {currentSlide.imageCaption}
                    </span>
                    <button
                      onClick={() => onOpenContentManager(currentSlide.id)}
                      className="shrink-0 px-2.5 py-1 bg-[#48e5d8] text-black font-extrabold text-[10px] font-display uppercase tracking-wider"
                    >
                      Cambiar
                    </button>
                  </div>
                </div>

                {/* Attached Docs */}
                <div className="p-4 bg-black/90 border border-white/15 text-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono uppercase font-bold text-white/50 tracking-wider">
                      Minutas & Documentos Vinculados ({currentSlide.documents?.length || 0})
                    </span>
                    <button
                      onClick={() => onOpenContentManager(currentSlide.id)}
                      className="text-[10px] font-mono text-[#ff5e14] font-bold hover:underline"
                    >
                      + Adjuntar
                    </button>
                  </div>

                  {!currentSlide.documents || currentSlide.documents.length === 0 ? (
                    <p className="text-[11px] text-white/40 italic py-1">
                      No hay archivos adjuntos para esta slide.
                    </p>
                  ) : (
                    <div className="space-y-1.5">
                      {currentSlide.documents.map((doc) => (
                        <div
                          key={doc.id}
                          className="flex items-center justify-between p-2 bg-[#121216] border border-white/10 text-[11px]"
                        >
                          <div className="flex items-center gap-2 truncate pr-2">
                            <span className="font-mono text-[9px] uppercase px-1 bg-white/10 text-white/70">
                              {doc.type}
                            </span>
                            <span className="text-white truncate">{doc.name}</span>
                          </div>
                          <button
                            onClick={() => alert(`Descargando minuta: ${doc.name}`)}
                            className="p-1 hover:text-[#48e5d8]"
                            title="Descargar"
                          >
                            <FileDown className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Slide 5 Exclusive: Photo Gallery of Fieldwork & Meetings */}
        {currentSlide.id === 5 && (
          <PhotoGallery
            images={slide5Photos}
            title="Registro Fotográfico de Trabajo en Terreno y Articulación CRTIC - COTESMA"
          />
        )}

        {/* Presenter Notes Box */}
        {showNotes && (
          <div className="my-4 p-5 bg-black border-2 border-[#48e5d8] text-xs leading-relaxed animate-in fade-in">
            <div className="flex items-center justify-between mb-1.5">
              <span className="venue-line text-[10px]">Guion del Expositor:</span>
              <button
                onClick={() => setShowNotes(false)}
                className="text-[10px] font-mono uppercase text-white/50 hover:text-white"
              >
                [ Cerrar ]
              </button>
            </div>
            <p className="text-white/90 text-sm font-sans">{currentSlide.presenterNotes}</p>
          </div>
        )}

        {/* Bottom Brutalist Controls */}
        <div className="pt-4 mt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Direct Slide Selectors */}
          <div className="flex items-center gap-1.5">
            {slides.map((s, idx) => {
              const active = idx === currentIndex;
              return (
                <button
                  key={s.id}
                  onClick={() => onNavigate(idx)}
                  className={`px-3 py-1.5 font-mono text-xs font-bold border transition-colors ${
                    active
                      ? 'bg-[#48e5d8] text-black border-[#48e5d8]'
                      : 'bg-black text-white/60 border-white/15 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {s.editorialIndex}
                </button>
              );
            })}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate(currentIndex - 1)}
              disabled={currentIndex === 0}
              className={`inline-flex items-center gap-2 rounded-pill border-2 font-display font-bold text-xs uppercase px-5 py-2.5 transition-colors ${
                currentIndex === 0
                  ? 'opacity-20 cursor-not-allowed border-white/10 text-white/30'
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </button>

            <button
              onClick={() => onNavigate(currentIndex + 1)}
              disabled={currentIndex === slides.length - 1}
              className={`inline-flex items-center gap-2 rounded-pill border-2 font-display font-bold text-xs uppercase px-6 py-2.5 transition-colors ${
                currentIndex === slides.length - 1
                  ? 'opacity-20 cursor-not-allowed border-white/10 text-white/30'
                  : 'bg-[#48e5d8] text-black border-[#48e5d8] hover:bg-[#33cfc2]'
              }`}
            >
              <span>Siguiente</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
