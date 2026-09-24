import React, { useState } from 'react';
import { Network, Home, Laptop, Globe, Compass, GraduationCap, Building2 } from 'lucide-react';

export function TalentHubDiagram() {
  const [activeTab, setActiveTab] = useState<'districts' | 'nomads' | 'startups'>('districts');

  const content = {
    districts: {
      title: 'Distritos y Parques Tecnológicos & Creativos',
      badge: 'Infraestructura Urbana & Coworking',
      summary:
        'Creación de dos polos nodales complementarios: el Distrito Tecnológico de La Araucanía (conectado a universidades y sector productivo) y el Parque de Innovación en San Martín de los Andes (inmerso en el entorno patagónico de alta calidad de vida).',
      points: [
        'Zonas con conectividad de fibra óptica simétrica ultrarrápida respaldada por COTESMA y CRTIC.',
        'Espacios modulares para empresas extranjeras, startups y centros de desarrollo de software.',
        'Modelo colaborativo: laboratorios de prototipado, estudios audiovisuales y salas de conferencia binacionales.',
      ],
      icon: Building2,
    },
    nomads: {
      title: 'Atracción de Talento & Emprendimiento Nómade',
      badge: 'Lifestyle & Economía del Conocimiento',
      summary:
        'Estrategia de posicionamiento de la macrozona La Araucanía – San Martín de los Andes como el destino número uno en Sudamérica para nómades digitales, desarrolladores y fundadores internacionales.',
      points: [
        'Propuesta de valor única: trabajo remoto de estándar mundial rodeado de volcanes, lagos y parques nacionales.',
        'Articulación con programas de visado de nómades digitales y convenios de residencia temporal transfronteriza.',
        'Impacto económico local directo: consumo en gastronomía de autor, hotelería boutique, turismo de naturaleza y arriendos.',
      ],
      icon: Laptop,
    },
    startups: {
      title: 'Incubación Binacional & Doble Plataforma',
      badge: 'Escalamiento e Inversión',
      summary:
        'Permite a emprendimientos tecnológicos nacer con presencia simultánea en Chile y Argentina, accediendo al financiamiento de riesgo (Venture Capital), programas CORFO y el mercado energético de Vaca Muerta.',
      points: [
        'Desarrollo de soluciones de telemetría e inteligencia artificial probadas en el terreno de Añelo y comercializadas globalmente.',
        'Intercambio de estudiantes y pasantías entre facultades de ingeniería de Temuco y la Patagonia argentina.',
        'Misiones comerciales conjuntas a ferias de innovación en Norteamérica y Europa.',
      ],
      icon: Globe,
    },
  };

  const current = content[activeTab];

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-5 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            Alianza Territorial CRTIC + COTESMA
          </span>
          <h4 className="text-base font-bold text-white">Ecosistema Binacional de Atracción de Talento</h4>
        </div>

        {/* Tab buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setActiveTab('districts')}
            className={`px-3 py-1.5 rounded font-medium transition-colors ${
              activeTab === 'districts'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Distritos Tecnológicos
          </button>
          <button
            onClick={() => setActiveTab('nomads')}
            className={`px-3 py-1.5 rounded font-medium transition-colors ${
              activeTab === 'nomads'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Polo Nómade Digital
          </button>
          <button
            onClick={() => setActiveTab('startups')}
            className={`px-3 py-1.5 rounded font-medium transition-colors ${
              activeTab === 'startups'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Incubación Binacional
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-5 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Visual Map / Core Schema */}
        <div className="lg:col-span-1 bg-slate-950/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3 text-xs">
              <span className="text-slate-400">Nodo 1: San Martín (ARG)</span>
              <span className="text-emerald-400 font-mono">COTESMA</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300 mb-3">
              <strong className="text-white block mb-1">San Martín de los Andes</strong>
              Epicentro de estilo de vida, naturaleza andina y red de telecomunicaciones cooperativa de fibra simétrica.
            </div>

            <div className="flex items-center justify-center my-2 text-slate-500">
              <Network className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono text-cyan-400 mx-2">Enlace Binacional CRTIC-COTESMA</span>
            </div>

            <div className="flex items-center justify-between mb-1 text-xs">
              <span className="text-slate-400">Nodo 2: La Araucanía (CHL)</span>
              <span className="text-cyan-400 font-mono">CRTIC</span>
            </div>
            <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 text-xs text-slate-300">
              <strong className="text-white block mb-1">Temuco / La Araucanía</strong>
              Nodo universitario, laboratorios de prototipado CRTIC, ecosistema exportador Mesa Comex y salida marítima.
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Unión inédita entre cooperativismo patagónico y centros tecnológicos regionales.</span>
          </div>
        </div>

        {/* Detail Panel */}
        <div className="lg:col-span-2 bg-slate-950/40 border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h5 className="text-base font-bold text-white">{current.title}</h5>
              <span className="text-xs font-mono text-emerald-300 bg-emerald-950/40 px-2.5 py-0.5 rounded border border-emerald-500/20">
                {current.badge}
              </span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">{current.summary}</p>

            <div className="space-y-2.5">
              {current.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-lg border border-slate-800/60 text-xs">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-500/30 font-mono text-[11px]">
                    {idx + 1}
                  </div>
                  <span className="text-slate-200 leading-relaxed">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Objetivo: +500 nómadas digitales y 30 startups binacionales radicadas al 2026</span>
            <span className="font-mono text-emerald-400 font-semibold">Meta de Impacto</span>
          </div>
        </div>
      </div>
    </div>
  );
}
