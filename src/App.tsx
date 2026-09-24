import React, { useState, useEffect } from 'react';
import { INITIAL_SLIDES } from './data/slidesData';
import { SlideData } from './types/presentation';
import { Header } from './components/Header';
import { SlideViewer } from './components/SlideViewer';
import { SlideCardView } from './components/SlideCardView';
import { ContentManagerModal } from './components/ContentManagerModal';

// Upgraded version key to invalidate outdated cached slide contents
const STORAGE_KEY = 'araucania_comex_slides_v6';

export default function App() {
  const [slides, setSlides] = useState<SlideData[]>(() => {
    // If older storage exists, clean it up so new CRTIC content is immediate
    try {
      localStorage.removeItem('araucania_comex_slides_v1');
      localStorage.removeItem('araucania_comex_slides_v2');
      localStorage.removeItem('araucania_comex_slides_v3');
      localStorage.removeItem('araucania_comex_slides_v4');
      localStorage.removeItem('araucania_comex_slides_v5');
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Safety check: ensure Slide 1 has '¿Qué es CRTIC?'
        if (parsed?.[0]?.corePillars?.[0]?.title?.includes('CRTIC')) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_SLIDES;
  });

  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'presentation' | 'scroll'>('presentation');
  const [isContentManagerOpen, setIsContentManagerOpen] = useState<boolean>(false);
  const [managerInitialSlideId, setManagerInitialSlideId] = useState<number>(1);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(slides));
  }, [slides]);

  const handleUpdateSlide = (updatedSlide: SlideData) => {
    setSlides((prev) => prev.map((s) => (s.id === updatedSlide.id ? updatedSlide : s)));
  };

  const handleResetDefaults = () => {
    if (window.confirm('¿Deseas restablecer las 5 diapositivas al contenido oficial?')) {
      setSlides(INITIAL_SLIDES);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_SLIDES));
    }
  };

  const handleOpenManager = (slideId?: number) => {
    if (slideId) {
      setManagerInitialSlideId(slideId);
    } else {
      setManagerInitialSlideId(slides[currentSlideIndex]?.id || 1);
    }
    setIsContentManagerOpen(true);
  };

  const handleSelectSlide = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
    if (viewMode === 'scroll') {
      const el = document.getElementById(`slide-${slides[slideIndex]?.id}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleJumpToSlide = (slideIndex: number) => {
    setCurrentSlideIndex(slideIndex);
    setViewMode('presentation');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col selection:bg-[#48e5d8] selection:text-black">
      <Header
        currentSlide={currentSlideIndex}
        totalSlides={slides.length}
        viewMode={viewMode}
        onToggleViewMode={() => setViewMode((m) => (m === 'presentation' ? 'scroll' : 'presentation'))}
        onOpenContentManager={() => handleOpenManager()}
        onSelectSlide={handleSelectSlide}
      />

      <main className="flex-1 flex flex-col">
        {viewMode === 'presentation' ? (
          <SlideViewer
            slides={slides}
            currentIndex={currentSlideIndex}
            onNavigate={setCurrentSlideIndex}
            onOpenContentManager={handleOpenManager}
          />
        ) : (
          <SlideCardView
            slides={slides}
            onOpenContentManager={handleOpenManager}
            onJumpToSlide={handleJumpToSlide}
          />
        )}
      </main>

      <ContentManagerModal
        isOpen={isContentManagerOpen}
        onClose={() => setIsContentManagerOpen(false)}
        slides={slides}
        onUpdateSlide={handleUpdateSlide}
        onResetDefaults={handleResetDefaults}
        initialSlideId={managerInitialSlideId}
      />
    </div>
  );
}
