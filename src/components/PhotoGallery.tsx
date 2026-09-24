import React, { useState } from 'react';
import { Sparkles, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

interface PhotoGalleryProps {
  images: {
    src: string;
    caption: string;
    tag?: string;
  }[];
  title?: string;
}

export function PhotoGallery({
  images,
  title = 'Registro Fotográfico del Trabajo en Terreno y Alianzas',
}: PhotoGalleryProps) {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);

  return (
    <div className="w-full bg-black border border-white/15 p-6 sm:p-8 mt-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-white/10 pb-4 mb-6">
        <div>
          <span className="venue-line text-[11px]">Evidencia & Trabajo en Terreno</span>
          <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display mt-1 tracking-tight">
            {title}
          </h3>
        </div>
        <span className="text-[11px] font-mono text-white/50 uppercase tracking-wider">
          {images.length} Fotografías Oficiales
        </span>
      </div>

      {/* Brutalist Grid of Uploaded Photos */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => setActiveModalIndex(idx)}
            className="group relative cursor-pointer aspect-[4/3] bg-[#0c0c10] border border-white/15 overflow-hidden hover:border-[#48e5d8] transition-all"
          >
            <img
              src={img.src}
              alt={img.caption}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

            <div className="absolute top-2 left-2">
              <span className="font-mono text-[9px] uppercase font-bold px-1.5 py-0.5 bg-black/90 text-[#48e5d8] border border-white/10">
                {img.tag || `FOTO 0${idx + 1}`}
              </span>
            </div>

            <div className="absolute bottom-2 left-2 right-2 p-1.5 bg-black/90 border border-white/10 backdrop-blur-sm">
              <p className="text-[10px] sm:text-[11px] text-white/90 font-medium truncate font-display">
                {img.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeModalIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-150"
          onClick={() => setActiveModalIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalIndex(null)}
              className="absolute -top-10 right-0 p-2 text-white/70 hover:text-white flex items-center gap-1.5 font-mono text-xs uppercase"
            >
              <span>[Cerrar]</span>
              <X className="w-4 h-4" />
            </button>

            {/* Prev / Next controls */}
            {images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setActiveModalIndex((prev) =>
                      prev !== null && prev > 0 ? prev - 1 : images.length - 1
                    )
                  }
                  className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 border border-white/20 text-white hover:bg-[#48e5d8] hover:text-black transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() =>
                    setActiveModalIndex((prev) =>
                      prev !== null && prev < images.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/80 border border-white/20 text-white hover:bg-[#48e5d8] hover:text-black transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Full Image */}
            <div className="border border-white/20 bg-black max-h-[75vh] overflow-hidden flex items-center justify-center">
              <img
                src={images[activeModalIndex].src}
                alt={images[activeModalIndex].caption}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            {/* Caption bar */}
            <div className="w-full mt-3 p-3 bg-[#0e0e12] border border-white/15 flex items-center justify-between text-xs">
              <div>
                <span className="font-mono text-[#48e5d8] font-bold mr-2 uppercase text-[10px]">
                  {images[activeModalIndex].tag || `FOTO 0${activeModalIndex + 1}`}
                </span>
                <span className="text-white font-medium">
                  {images[activeModalIndex].caption}
                </span>
              </div>
              <span className="font-mono text-white/50 text-[11px]">
                {activeModalIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
