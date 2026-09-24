import React from 'react';
import { SlideData } from '../types/presentation';
import { CorridorMap } from './CorridorMap';
import { SecondLayerGraphic } from './SecondLayerGraphic';
import { TouchDesignerField } from './TouchDesignerField';
import { PhotoGallery } from './PhotoGallery';
import { CrticEcosystem } from './CrticEcosystem';
import {
  FileDown,
  ArrowRight,
  Upload,
} from 'lucide-react';

interface SlideCardViewProps {
  slides: SlideData[];
  onOpenContentManager: (slideId?: number) => void;
  onJumpToSlide: (slideIndex: number) => void;
}

export function SlideCardView({
  slides,
  onOpenContentManager,
  onJumpToSlide,
}: SlideCardViewProps) {
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
    <div className="relative min-h-screen bg-black text-white selection:bg-[#48e5d8] selection:text-black">
      {/* Interactive TouchDesigner 3D Point Cloud Background */}
      <div className="fixed inset-0 pointer-events-none -z-0">
        <TouchDesignerField className="opacity-60" />
      </div>

      {/* Hero Section styled strictly in ÁGORA Summit Brutalism */}
      <section className="relative z-10 pt-28 pb-20 md:pt-36 md:pb-28 border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <span className="venue-line-orange">CRTIC · COTESMA</span>
                <span className="text-white/30">/</span>
                <span className="venue-line">Corredor Binacional</span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white font-display leading-[0.94] tracking-tight">
                Corredor Binacional <br />
                <span className="text-[#48e5d8]">Tecnológico y Creativo</span>
              </h1>

              <p className="text-lg sm:text-2xl font-normal text-white/80 max-w-3xl leading-snug">
                Conectando el desarrollo de <strong className="text-white">Vaca Muerta</strong> con los terminales del{' '}
                <strong className="text-white">Pacífico chileno</strong>, impulsando la{' '}
                <span className="text-[#ff5e14] font-bold">segunda capa de valor</span>: capital humano, tecnología aplicada y servicios de conocimiento.
              </p>

              {/* Action Buttons: ÁGORA Pill design */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onJumpToSlide(0)}
                  className="inline-flex items-center justify-center gap-2 rounded-pill border-2 font-display font-bold tracking-tight text-sm sm:text-base px-8 py-4 bg-[#48e5d8] text-black border-[#48e5d8] hover:bg-[#33cfc2] hover:border-[#33cfc2] transition-transform active:scale-[0.97]"
                >
                  <span>Iniciar Presentación (5 Slides)</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onOpenContentManager(1)}
                  className="inline-flex items-center justify-center gap-2 rounded-pill border-2 font-display font-bold tracking-tight text-sm sm:text-base px-7 py-4 bg-transparent text-white border-white/30 hover:border-white hover:bg-white hover:text-black transition-colors"
                >
                  <Upload className="w-4 h-4 text-[#ff5e14]" />
                  <span>Subir Fotos & Minutas</span>
                </button>
              </div>

              {/* Organizer mark with orange logo */}
              <div className="pt-4 flex items-center gap-4 text-xs font-mono text-white/50">
                <span className="uppercase tracking-widest">Iniciativa:</span>
                <img
                  src="/assets/logo-crtic-orange.png"
                  alt="CRTIC"
                  className="h-8 w-auto object-contain"
                />
                <span className="text-white/30">|</span>
                <span className="text-white/80 font-display font-bold">COTESMA · San Martín de los Andes</span>
              </div>
            </div>

            {/* Brutalist Executive Summary Box */}
            <div className="lg:col-span-4 bg-black/90 border border-white/20 p-6 sm:p-7 backdrop-blur-md">
              <span className="venue-line text-[10px] block mb-2">Resumen Ejecutivo</span>
              <h3 className="text-xl font-black uppercase text-white font-display mb-3">
                5 Ejes de Decisión
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-sans mb-4">
                Estrategia para convertir el tránsito bioceánico en un polo de desarrollo tecnológico, software y atracción de talento calificado.
              </p>

              <div className="border-t border-white/15 pt-4 space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-white/50">Alcance:</span>
                  <span className="text-[#48e5d8] font-bold">Binacional (Chile / Arg)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Ventaja:</span>
                  <span className="text-white font-bold">&lt; 450 km al Pacífico</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/50">Eje de Valor:</span>
                  <span className="text-[#ff5e14] font-bold">Servicios Basados en Conocimiento</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Clean Brutalist Continuous Slides */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-16 space-y-20">
        {slides.map((slide, idx) => (
          <section
            key={slide.id}
            id={`slide-${slide.id}`}
            className="scroll-mt-28 bg-black border border-white/20 p-6 sm:p-10 transition-colors hover:border-white/40"
          >
            {/* Header of each slide */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-white/15 pb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-xs font-bold px-2 py-0.5 bg-[#48e5d8] text-black">
                    SLIDE {slide.editorialIndex}
                  </span>
                  <span className="venue-line">{slide.kicker}</span>
                </div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase text-white font-display leading-[0.98]">
                  {slide.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onOpenContentManager(slide.id)}
                  className="px-3.5 py-1.5 text-xs font-mono uppercase font-bold border border-white/20 text-white/80 hover:text-white hover:border-[#ff5e14]"
                >
                  + Recursos
                </button>
                <button
                  onClick={() => onJumpToSlide(idx)}
                  className="px-4 py-1.5 text-xs font-display font-bold uppercase tracking-tight bg-[#48e5d8] text-black hover:bg-[#33cfc2]"
                >
                  Pantalla Completa ↗
                </button>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/80 my-5 max-w-4xl leading-relaxed">
              {slide.subtitle}
            </p>

            {/* Slide 1 Comprehensive CRTIC Ecosystem Section */}
            {slide.id === 1 && (
              <div className="my-6">
                <CrticEcosystem />
              </div>
            )}

            {/* Custom Interactive Elements or Standard Columns */}
            {slide.graphicType === 'corridor-map' ? (
              <div className="my-6">
                <CorridorMap />
              </div>
            ) : slide.graphicType === 'value-chain' ? (
              <div className="my-6">
                <SecondLayerGraphic />
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-6">
                {/* Core Pillars */}
                <div className="lg:col-span-7 space-y-3">
                  {slide.corePillars.map((point, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-5 bg-[#0a0a0e] border border-white/10"
                    >
                      <div className="flex items-baseline justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#48e5d8]">
                            0{pIdx + 1} /
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
                      <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-sans">
                        {point.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Hero Image & Documents */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="border border-white/15 bg-black aspect-[16/10] overflow-hidden relative group">
                    <img
                      src={slide.heroImage}
                      alt={slide.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80" />
                    <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/90 border border-white/15 text-[11px] text-white/80 flex items-center justify-between">
                      <span className="truncate pr-2 font-mono">{slide.imageCaption}</span>
                      <button
                        onClick={() => onOpenContentManager(slide.id)}
                        className="text-[10px] text-[#48e5d8] font-bold uppercase hover:underline"
                      >
                        Editar
                      </button>
                    </div>
                  </div>

                  {/* Documents list */}
                  <div className="p-4 bg-[#0a0a0e] border border-white/10 text-xs">
                    <div className="flex items-center justify-between mb-2 font-mono text-[10px] text-white/50 uppercase font-bold">
                      <span>Documentos ({slide.documents?.length || 0})</span>
                      <button
                        onClick={() => onOpenContentManager(slide.id)}
                        className="text-[#ff5e14] hover:underline"
                      >
                        + Adjuntar
                      </button>
                    </div>
                    {slide.documents && slide.documents.length > 0 ? (
                      <div className="space-y-1.5">
                        {slide.documents.map((d) => (
                          <div
                            key={d.id}
                            className="flex items-center justify-between p-2 bg-black border border-white/10 text-[11px]"
                          >
                            <span className="truncate text-white font-mono">{d.name}</span>
                            <span className="text-[10px] font-mono uppercase text-[#48e5d8]">
                              {d.type}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-[11px] text-white/40 italic">Sin documentos adjuntos.</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Slide 5 Exclusive: Photo Gallery */}
            {slide.id === 5 && (
              <PhotoGallery
                images={slide5Photos}
                title="Registro Fotográfico de Trabajo en Terreno y Articulación CRTIC - COTESMA"
              />
            )}

            {/* Key Insights Bar */}
            <div className="mt-6 pt-5 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {slide.keyInsights.map((insight, iIdx) => (
                <div key={iIdx} className="p-3 bg-[#0a0a0e] border border-white/10 flex items-start gap-2">
                  <span className="font-mono text-xs font-bold text-[#48e5d8]">
                    0{iIdx + 1}
                  </span>
                  <span className="text-xs text-white/80 font-sans leading-relaxed">{insight}</span>
                </div>
              ))}
            </div>

            {/* Speaker Notes Snippet */}
            <div className="mt-5 p-4 bg-black border border-white/15 text-xs">
              <span className="venue-line text-[10px] block mb-1">
                Guion Oficial:
              </span>
              <p className="text-white/70 italic font-sans leading-relaxed">{slide.presenterNotes}</p>
            </div>
          </section>
        ))}
      </div>

      {/* Brutalist Footer */}
      <footer className="relative z-10 bg-black text-white border-t border-white/15 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col gap-10">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img
                  src="/assets/logo-crtic-orange.png"
                  alt="CRTIC"
                  className="h-9 w-auto object-contain"
                />
                <span className="text-base font-black uppercase tracking-tight text-white font-display">
                  CRTIC · Centro para la Revolución Tecnológica en Industrias Creativas
                </span>
              </div>
              <p className="venue-line text-xs">
                Iniciativa Binacional · Alianza con COTESMA San Martín de los Andes
              </p>
              <p className="text-xs text-white/60 font-sans max-w-md">
                Propuesta de desarrollo estratégico para consolidar el corredor bioceánico de segunda capa de valor entre La Araucanía y Neuquén.
              </p>
            </div>

            <div className="flex flex-col gap-3 md:items-end">
              <div className="flex gap-3">
                <button
                  onClick={() => onOpenContentManager(1)}
                  className="inline-flex items-center gap-2 rounded-pill border border-white/30 text-xs px-5 py-2.5 font-display font-bold uppercase hover:bg-white hover:text-black transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-[#ff5e14]" />
                  <span>Gestionar Fotos & Minutas</span>
                </button>
                <button
                  onClick={() => onJumpToSlide(0)}
                  className="inline-flex items-center gap-2 rounded-pill bg-[#48e5d8] text-black text-xs px-6 py-2.5 font-display font-black uppercase hover:bg-[#33cfc2] transition-colors"
                >
                  <span>Ver Diapositivas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-white/40 gap-2">
            <span>© 2026 CRTIC · Alianza COTESMA</span>
            <span>Estética Brutalista & Ágora Summit</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
