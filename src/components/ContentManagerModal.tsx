import React, { useState, useRef } from 'react';
import { SlideData, SlideDocument } from '../types/presentation';
import {
  X,
  Upload,
  Image as ImageIcon,
  FileText,
  Plus,
  Trash2,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface ContentManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  slides: SlideData[];
  onUpdateSlide: (updatedSlide: SlideData) => void;
  onResetDefaults: () => void;
  initialSlideId?: number;
}

export function ContentManagerModal({
  isOpen,
  onClose,
  slides,
  onUpdateSlide,
  onResetDefaults,
  initialSlideId = 1,
}: ContentManagerModalProps) {
  const [activeSlideId, setActiveSlideId] = useState<number>(initialSlideId);
  const [tab, setTab] = useState<'photos' | 'documents' | 'text'>('photos');

  // New document form state
  const [docName, setDocName] = useState('');
  const [docDescription, setDocDescription] = useState('');
  const [docType, setDocType] = useState<'pdf' | 'doc' | 'sheet' | 'link'>('pdf');
  const [docSize, setDocSize] = useState('1.5 MB');

  // Custom Image URL input
  const [customImageUrl, setCustomImageUrl] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const activeSlide = slides.find((s) => s.id === activeSlideId) || slides[0];

  // Handle local file image upload
  const handleImageFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const newUrl = event.target.result as string;
          const updatedSlide: SlideData = {
            ...activeSlide,
            heroImage: newUrl,
            imageCaption: `Foto cargada: ${file.name}`,
          };
          onUpdateSlide(updatedSlide);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyCustomImageUrl = () => {
    if (!customImageUrl.trim()) return;
    const updatedSlide: SlideData = {
      ...activeSlide,
      heroImage: customImageUrl.trim(),
      imageCaption: 'Imagen personalizada',
    };
    onUpdateSlide(updatedSlide);
    setCustomImageUrl('');
  };

  const handleAddDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!docName.trim()) return;

    const newDoc: SlideDocument = {
      id: `doc-${Date.now()}`,
      name: docName.trim(),
      type: docType,
      size: docSize.trim() || '1.0 MB',
      date: new Date().toLocaleDateString('es-CL', { month: 'short', year: 'numeric' }),
      description: docDescription.trim() || 'Documento adjunto para la Mesa Araucanía Comex',
    };

    const updatedSlide: SlideData = {
      ...activeSlide,
      documents: [...(activeSlide.documents || []), newDoc],
    };

    onUpdateSlide(updatedSlide);
    setDocName('');
    setDocDescription('');
  };

  const handleDeleteDocument = (docId: string) => {
    const updatedSlide: SlideData = {
      ...activeSlide,
      documents: (activeSlide.documents || []).filter((d) => d.id !== docId),
    };
    onUpdateSlide(updatedSlide);
  };

  const handleUpdateTextFields = (field: keyof SlideData, value: string) => {
    const updatedSlide: SlideData = {
      ...activeSlide,
      [field]: value,
    };
    onUpdateSlide(updatedSlide);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#121216] border border-white/10 rounded-tile shadow-2xl overflow-hidden text-white my-8">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/60">
          <div className="flex items-center gap-3">
            <img
              src="/assets/logo-crtic-orange.png"
              alt="CRTIC"
              className="h-7 w-auto object-contain"
            />
            <div>
              <span className="venue-line text-[11px]">
                Gestor de Fotos & Documentos · Mesa Comex
              </span>
              <h3 className="text-base sm:text-lg font-black uppercase font-display text-white">
                Administrar Recursos de las 5 Diapositivas
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onResetDefaults}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-pill border border-white/10 text-xs text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              title="Restaurar datos predeterminados"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Restablecer</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Selector Buttons */}
        <div className="px-6 py-3 bg-black/90 border-b border-white/10 flex items-center gap-2 overflow-x-auto">
          <span className="text-xs text-white/50 font-bold uppercase tracking-wider shrink-0 mr-1">
            Diapositiva:
          </span>
          {slides.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSlideId(s.id)}
              className={`px-3.5 py-1.5 rounded-pill text-xs font-display font-bold transition-all shrink-0 ${
                activeSlideId === s.id
                  ? 'bg-[#48e5d8] text-black shadow-md'
                  : 'bg-[#18181e] text-white/60 hover:text-white border border-white/10'
              }`}
            >
              Slide {s.editorialIndex}: {s.primaryTag}
            </button>
          ))}
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-white/10 flex items-center gap-6 text-xs sm:text-sm font-display font-semibold">
          <button
            onClick={() => setTab('photos')}
            className={`py-3 flex items-center gap-2 border-b-2 transition-colors ${
              tab === 'photos'
                ? 'border-[#48e5d8] text-[#48e5d8]'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Fotos & Imágenes ({activeSlide.editorialIndex})</span>
          </button>
          <button
            onClick={() => setTab('documents')}
            className={`py-3 flex items-center gap-2 border-b-2 transition-colors ${
              tab === 'documents'
                ? 'border-[#48e5d8] text-[#48e5d8]'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Documentos Adjuntos ({activeSlide.documents?.length || 0})</span>
          </button>
          <button
            onClick={() => setTab('text')}
            className={`py-3 flex items-center gap-2 border-b-2 transition-colors ${
              tab === 'text'
                ? 'border-[#48e5d8] text-[#48e5d8]'
                : 'border-transparent text-white/50 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Editar Títulos & Notas</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {/* TAB 1: PHOTOS */}
          {tab === 'photos' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Current Image Preview */}
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
                    Foto Actual de la Slide {activeSlide.editorialIndex}:
                  </span>
                  <div className="rounded-tile-sm overflow-hidden border border-white/10 bg-black aspect-video relative group">
                    <img
                      src={activeSlide.heroImage}
                      alt="Preview"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 right-2 bg-black/80 backdrop-blur-sm p-2 rounded-tile-sm text-[11px] text-white/80 truncate">
                      {activeSlide.imageCaption}
                    </div>
                  </div>
                </div>

                {/* Upload & Replacement Options */}
                <div className="space-y-4">
                  {/* File Upload Drop Area */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
                      Subir Imagen desde tu Equipo:
                    </span>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageFileUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="cursor-pointer border-2 border-dashed border-white/20 hover:border-[#48e5d8] rounded-tile-sm p-6 text-center transition-colors bg-black/40 group"
                    >
                      <Upload className="w-8 h-8 text-[#ff5e14] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-sm font-bold text-white font-display">Haz clic para subir una foto</p>
                      <p className="text-xs text-white/50 mt-1">PNG, JPG, WEBP hasta 10MB</p>
                    </div>
                  </div>

                  {/* URL Input */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-1">
                      O pegar URL de imagen:
                    </span>
                    <div className="flex gap-2">
                      <input
                        type="url"
                        value={customImageUrl}
                        onChange={(e) => setCustomImageUrl(e.target.value)}
                        placeholder="https://ejemplo.com/foto.jpg"
                        className="flex-1 bg-black border border-white/10 rounded-pill px-4 py-2 text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-[#48e5d8]"
                      />
                      <button
                        onClick={handleApplyCustomImageUrl}
                        className="px-4 py-2 bg-[#48e5d8] hover:bg-[#33cfc2] text-black font-bold rounded-pill text-xs font-display transition-colors"
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>

                  {/* Caption Editor */}
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-1">
                      Epígrafe / Pie de Foto:
                    </label>
                    <input
                      type="text"
                      value={activeSlide.imageCaption}
                      onChange={(e) => handleUpdateTextFields('imageCaption', e.target.value)}
                      className="w-full bg-black border border-white/10 rounded-pill px-4 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DOCUMENTS */}
          {tab === 'documents' && (
            <div className="space-y-6">
              {/* Existing Documents */}
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
                  Documentos vinculados a la Slide {activeSlide.editorialIndex}:
                </span>
                {(!activeSlide.documents || activeSlide.documents.length === 0) && (
                  <p className="text-xs text-white/50 italic p-4 bg-black/60 rounded-tile-sm border border-white/10">
                    No hay documentos adjuntos en esta slide. Agrega uno a continuación.
                  </p>
                )}
                <div className="space-y-2">
                  {activeSlide.documents?.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-start justify-between p-3.5 rounded-tile-sm bg-black/60 border border-white/10 text-xs"
                    >
                      <div className="flex items-start gap-2.5">
                        <FileText className="w-4 h-4 text-[#48e5d8] shrink-0 mt-0.5" />
                        <div>
                          <div className="font-bold text-white flex items-center gap-2 font-display">
                            <span>{doc.name}</span>
                            <span className="text-[10px] font-mono text-[#48e5d8] bg-[#48e5d8]/10 px-2 py-0.5 rounded-pill border border-[#48e5d8]/20">
                              {doc.type.toUpperCase()} · {doc.size}
                            </span>
                          </div>
                          <p className="text-white/60 text-[11px] mt-0.5">{doc.description}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleDeleteDocument(doc.id)}
                        className="text-red-400 hover:text-red-300 p-1 rounded hover:bg-white/10 transition-colors"
                        title="Eliminar documento"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Add New Document Form */}
              <form onSubmit={handleAddDocument} className="p-5 rounded-tile-sm bg-black/80 border border-white/10 space-y-3.5">
                <span className="text-xs font-bold text-white flex items-center gap-1.5 uppercase font-display">
                  <Plus className="w-4 h-4 text-[#ff5e14]" />
                  Agregar Nuevo Documento o Minuta
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] text-white/60 block mb-1">Nombre del Archivo / Minuta:</label>
                    <input
                      type="text"
                      value={docName}
                      onChange={(e) => setDocName(e.target.value)}
                      placeholder="Ej: Minuta_Reunion_Mesa_Comex_2024.pdf"
                      required
                      className="w-full bg-[#18181e] border border-white/10 rounded-pill px-4 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-white/60 block mb-1">Tipo:</label>
                      <select
                        value={docType}
                        onChange={(e) => setDocType(e.target.value as any)}
                        className="w-full bg-[#18181e] border border-white/10 rounded-pill px-3 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                      >
                        <option value="pdf">PDF</option>
                        <option value="doc">Word / Doc</option>
                        <option value="sheet">Excel / Planilla</option>
                        <option value="link">Enlace Web</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[11px] text-white/60 block mb-1">Tamaño:</label>
                      <input
                        type="text"
                        value={docSize}
                        onChange={(e) => setDocSize(e.target.value)}
                        placeholder="Ej: 2.4 MB"
                        className="w-full bg-[#18181e] border border-white/10 rounded-pill px-4 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-white/60 block mb-1">Descripción / Propósito:</label>
                  <input
                    type="text"
                    value={docDescription}
                    onChange={(e) => setDocDescription(e.target.value)}
                    placeholder="Ej: Acuerdos preliminares de conectividad y logística"
                    className="w-full bg-[#18181e] border border-white/10 rounded-pill px-4 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 bg-[#48e5d8] hover:bg-[#33cfc2] text-black font-extrabold rounded-pill text-xs font-display transition-colors"
                >
                  Registrar Documento en Slide {activeSlide.editorialIndex}
                </button>
              </form>
            </div>
          )}

          {/* TAB 3: EDIT TEXT */}
          {tab === 'text' && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-1">
                  Kicker / Categoría:
                </label>
                <input
                  type="text"
                  value={activeSlide.kicker}
                  onChange={(e) => handleUpdateTextFields('kicker', e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-pill px-4 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-1">
                  Título Principal:
                </label>
                <input
                  type="text"
                  value={activeSlide.title}
                  onChange={(e) => handleUpdateTextFields('title', e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-pill px-4 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-1">
                  Subtítulo / Bajada Estratégica:
                </label>
                <textarea
                  rows={2}
                  value={activeSlide.subtitle}
                  onChange={(e) => handleUpdateTextFields('subtitle', e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-tile-sm px-4 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-1">
                  Notas para el Expositor (Mesa Comex):
                </label>
                <textarea
                  rows={3}
                  value={activeSlide.presenterNotes}
                  onChange={(e) => handleUpdateTextFields('presenterNotes', e.target.value)}
                  className="w-full bg-black border border-white/10 rounded-tile-sm px-4 py-2 text-xs text-white focus:outline-none focus:border-[#48e5d8]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-black border-t border-white/10 flex items-center justify-between text-xs">
          <span className="text-white/50">
            Los cambios se guardan automáticamente en tu sesión local.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#48e5d8] hover:bg-[#33cfc2] text-black font-extrabold rounded-pill transition-colors font-display"
          >
            Listo / Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
