import React, { useState } from 'react';
import { CheckSquare, Calendar, Award, Users2, ArrowUpRight } from 'lucide-react';

export function ActionMatrix() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      phase: 'Fase 01 · Q4 2024',
      title: 'Acuerdo Marco y Protocolo Comex',
      description:
        'Aprobación formal en la Mesa de Comercio Internacional de La Araucanía para respaldar la alianza CRTIC - COTESMA como proyecto de interés regional prioritario.',
      deliverables: [
        'Firma de protocolo de intención Mesa Comex · CRTIC · COTESMA.',
        'Constitución del Comité Técnico de Corredor Binacional.',
        'Mapeo de oferta exportable de servicios tecnológicos regionales.',
      ],
      lead: 'Mesa Comex & CRTIC',
    },
    {
      phase: 'Fase 02 · Q1 2025',
      title: 'Levantamiento de Demanda Vaca Muerta',
      description:
        'Rondas técnicas con operadoras, contratistas y proveedores de servicios en Añelo/Neuquén para identificar cuellos de botella logísticos y necesidades de software.',
      deliverables: [
        'Catálogo de requerimientos de insumos y telemetría para Vaca Muerta.',
        'Simulación de costos y tiempos de tránsito por pasos de La Araucanía.',
        'Definición de protocolos aduaneros ágiles y ventanilla única binacional.',
      ],
      lead: 'Gremios Logísticos & Operadores',
    },
    {
      phase: 'Fase 03 · Q2 2025',
      title: 'Lanzamiento del Distrito Piloto',
      description:
        'Habilitación de los primeros espacios de coworking y laboratorios compartidos entre Temuco y San Martín de los Andes, con red de conectividad unificada.',
      deliverables: [
        'Apertura del nodo coworking binacional para nómades digitales.',
        'Puesta en marcha de la red de fibra óptica dedicada COTESMA-CRTIC.',
        'Primer llamado a startups para incubación con doble domicilio comercial.',
      ],
      lead: 'CRTIC & COTESMA',
    },
    {
      phase: 'Fase 04 · Q3-Q4 2025',
      title: 'Misión Comercial & Ronda de Inversión',
      description:
        'Encuentro binacional de alto nivel en La Araucanía convocando a inversionistas, autoridades nacionales de Chile y Argentina, y empresas de tecnología.',
      deliverables: [
        'Presentación de resultados del flujo comercial y logístico inicial.',
        'Ronda de negocios de exportación de servicios y contenidos creativos.',
        'Propuesta legislativa o arancelaria de incentivo a distritos binacionales.',
      ],
      lead: 'Araucanía Comex & ProChile',
    },
  ];

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-5 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Hoja de Ruta Estratégica
          </span>
          <h4 className="text-base font-bold text-white">Plan de Implementación y Gobernanza 2024–2026</h4>
        </div>
        <span className="text-xs text-slate-400 font-mono">
          4 Hitos Clave para la Mesa Comex
        </span>
      </div>

      {/* Steps Selector Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-4">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          return (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`p-3 rounded-lg border text-left transition-all ${
                isActive
                  ? 'bg-cyan-950/40 border-cyan-500/60 ring-2 ring-cyan-500/20'
                  : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="text-[10px] font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-1">
                {step.phase}
              </div>
              <div className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-300'}`}>
                {step.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Details */}
      <div className="bg-slate-950/70 border border-slate-800/90 rounded-xl p-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-800/60">
          <div>
            <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
              {steps[activeStep].phase}
            </span>
            <h5 className="text-lg font-bold text-white mt-0.5">{steps[activeStep].title}</h5>
          </div>
          <div className="text-xs font-medium text-slate-300 bg-slate-900 px-3 py-1 rounded border border-slate-800">
            Liderazgo: <span className="text-cyan-300 font-semibold">{steps[activeStep].lead}</span>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
          {steps[activeStep].description}
        </p>

        <div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
            Entregables & Compromisos:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            {steps[activeStep].deliverables.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/80 border border-slate-800/60 rounded-lg p-3 text-xs text-slate-200 flex items-start gap-2"
              >
                <CheckSquare className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
