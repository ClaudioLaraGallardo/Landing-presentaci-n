import React from 'react';
import { Presentation, LayoutList, Upload } from 'lucide-react';

interface HeaderProps {
  currentSlide: number;
  totalSlides: number;
  viewMode: 'presentation' | 'scroll';
  onToggleViewMode: () => void;
  onOpenContentManager: () => void;
  onSelectSlide: (slideIndex: number) => void;
}

export function Header({
  currentSlide,
  viewMode,
  onToggleViewMode,
  onOpenContentManager,
  onSelectSlide,
}: HeaderProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 h-[68px] sm:h-[72px] bg-black/85 backdrop-blur-[24px] border-b border-white/10 px-4 sm:px-8 flex items-center justify-between transition-colors">
      {/* Brand: CRTIC Naranjo + Araucanía Comex */}
      <div className="flex items-center gap-4 sm:gap-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onSelectSlide(0);
          }}
          className="flex items-center gap-3.5 group"
        >
          <img
            src="/assets/logo-crtic-orange.png"
            alt="CRTIC"
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="h-5 w-px bg-white/20 hidden sm:block" />
          <div className="flex flex-col">
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-tight text-white font-display leading-none">
              Araucanía Comex
            </span>
            <span className="text-[10px] text-white/50 tracking-widest uppercase font-mono mt-0.5">
              Corredor Binacional
            </span>
          </div>
        </a>
      </div>

      {/* Brutalist Slide Direct Jump (01 · 02 · 03 · 04 · 05) */}
      <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold font-display uppercase tracking-tight">
        {[
          { idx: 0, label: '01. Alianza CRTIC-COTESMA' },
          { idx: 1, label: '02. Vaca Muerta & Pacífico' },
          { idx: 2, label: '03. Segunda Capa' },
          { idx: 3, label: '04. Hub de Talento' },
          { idx: 4, label: '05. Gobernanza Comex' },
        ].map((item) => (
          <button
            key={item.idx}
            onClick={() => onSelectSlide(item.idx)}
            className={`transition-colors duration-150 relative py-1 ${
              currentSlide === item.idx
                ? 'text-[#48e5d8] font-extrabold'
                : 'text-white/60 hover:text-white'
            }`}
          >
            {item.label}
            {currentSlide === item.idx && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#48e5d8]" />
            )}
          </button>
        ))}
      </nav>

      {/* ÁGORA Pill Action Buttons */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onOpenContentManager}
          title="Gestor de imágenes y documentos"
          className="inline-flex items-center justify-center gap-1.5 rounded-pill border border-white/20 font-display font-bold tracking-tight text-xs px-3.5 sm:px-4 py-2 bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        >
          <Upload className="w-3.5 h-3.5 text-[#ff5e14]" />
          <span className="hidden sm:inline">Fotos & Minutas</span>
          <span className="sm:hidden">Subir</span>
        </button>

        <button
          onClick={onToggleViewMode}
          className="inline-flex items-center justify-center gap-2 rounded-pill border-2 font-display font-bold tracking-tight text-xs sm:text-[13px] px-4 sm:px-5 py-2 bg-[#48e5d8] text-black border-[#48e5d8] hover:bg-[#33cfc2] hover:border-[#33cfc2] transition-transform active:scale-[0.97]"
        >
          {viewMode === 'presentation' ? (
            <>
              <LayoutList className="w-3.5 h-3.5" />
              <span>Ver Landing</span>
            </>
          ) : (
            <>
              <Presentation className="w-3.5 h-3.5" />
              <span>Modo Slides</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
}
