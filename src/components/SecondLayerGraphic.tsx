import React, { useState } from 'react';
import { Cpu, Users, Code2, ShieldCheck, Flame } from 'lucide-react';

export function SecondLayerGraphic() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      id: 0,
      code: '01',
      title: 'Software Industrial & IoT',
      sub: 'Telemetría de pozo y mantenimiento predictivo',
      detail:
        'Sistemas SCADA distribuidos, algoritmos de predicción de fractura y sensorización de ductos con procesamiento Edge en terreno.',
      impact: 'Monitoreo telemático continuo y automatización avanzada de operaciones.',
      icon: Cpu,
    },
    {
      id: 1,
      code: '02',
      title: 'Simulaciones XR & Realidad Virtual',
      sub: 'Entornos de capacitación de alto riesgo',
      detail:
        'CRTIC aporta laboratorios inmersivos (XR/VR) para entrenamiento seguro en torres de perforación, operación de válvulas y protocolos de emergencia.',
      impact: 'Cero accidentabilidad en inducción de operarios y técnicos.',
      icon: Code2,
    },
    {
      id: 2,
      code: '03',
      title: 'Capital Humano & Academia Binacional',
      sub: 'Formación dual y certificación transfronteriza',
      detail:
        'Alianza entre universidades de La Araucanía e institutos de Neuquén en ingeniería de datos, automatización y ciberseguridad industrial.',
      impact: 'Oferta de especialistas locales sin depender de capital de Buenos Aires o Santiago.',
      icon: Users,
    },
    {
      id: 3,
      code: '04',
      title: 'Infraestructura de Datos & Nube Verde',
      sub: 'COTESMA Fibra Simétrica & Data Centers',
      detail:
        'Aprovechamiento de la matriz energética limpia del sur y la red de fibra óptica cordillerana para procesar analítica de datos a baja latencia.',
      impact: 'Soberanía y resiliencia de datos para operadoras energéticas.',
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full bg-black border border-white/15 p-6 sm:p-8">
      {/* Brutalist Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 border-b border-white/10 pb-5">
        <div>
          <span className="venue-line text-[11px]">Estrategia CRTIC + COTESMA</span>
          <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display mt-1 tracking-tight">
            Arquitectura de la Segunda Capa de Valor
          </h3>
        </div>
        <span className="text-[11px] font-mono uppercase text-[#ff5e14] font-bold">
          Superar el modelo extractivo tradicional
        </span>
      </div>

      {/* Brutalist Dual Contrast Matrix: Capa 01 vs Capa 02 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-white/10 my-6">
        {/* Capa 01 (Limpia, sin flete/transito/combustibles) */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-white/10 bg-[#08080a]">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/40">
              [ Capa 01 Tradicional ]
            </span>
            <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-white/5 text-white/50 border border-white/10">
              Commodity Físico
            </span>
          </div>
          <h4 className="text-lg font-black uppercase text-white font-display">
            Infraestructura Básica y Paso Fronterizo
          </h4>
          <p className="text-xs text-white/60 mt-2 leading-relaxed">
            Operaciones logísticas primarias y tránsito vehicular estándar supeditados a oscilaciones de mercado. Retención de valor local limitada sin agregación tecnológica.
          </p>
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
            <span>Retorno Económico Local:</span>
            <span className="text-amber-500 font-bold">Bajo / Transitorio</span>
          </div>
        </div>

        {/* Capa 02 */}
        <div className="p-6 bg-[#0e0e14] border-t md:border-t-0 border-[#48e5d8]/40">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#48e5d8]">
              [ Capa 02 · Segunda Capa ]
            </span>
            <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 bg-[#48e5d8] text-black font-extrabold">
              Conocimiento & Software
            </span>
          </div>
          <h4 className="text-lg font-black uppercase text-white font-display flex items-center gap-2">
            Tecnología, Creatividad & Talento
            <Flame className="w-4 h-4 text-[#ff5e14]" />
          </h4>
          <p className="text-xs text-white/80 mt-2 leading-relaxed">
            Exportación de software embebido, telemetría, realidad virtual para faenas, gemelos digitales y atracción de nómades digitales en el eje Araucanía - San Martín de los Andes.
          </p>
          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono">
            <span className="text-white/50">Retorno Económico Local:</span>
            <span className="text-[#48e5d8] font-black">Exponencial / Escalable</span>
          </div>
        </div>
      </div>

      {/* 4 Pillars Clean Selector */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-0 border border-white/10 mb-6">
        {pillars.map((p, idx) => {
          const isSelected = activeTab === idx;
          return (
            <button
              key={p.id}
              onClick={() => setActiveTab(idx)}
              className={`p-4 text-left border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0 transition-all ${
                isSelected
                  ? 'bg-[#48e5d8] text-black'
                  : 'bg-black text-white hover:bg-[#121216]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-xs font-bold ${isSelected ? 'text-black' : 'text-white/40'}`}>
                  {p.code}
                </span>
              </div>
              <h5 className="font-display font-black text-xs sm:text-sm uppercase leading-tight">
                {p.title}
              </h5>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Showcase */}
      <div className="bg-[#0c0c10] border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="venue-line text-[10px]">Pilar Seleccionado · Foco de Exportación Comex</span>
          <h4 className="text-base sm:text-lg font-black uppercase text-white font-display mt-0.5">
            {pillars[activeTab].title}
          </h4>
          <p className="text-xs text-white/80 mt-1.5 max-w-2xl leading-relaxed">
            {pillars[activeTab].detail}
          </p>
        </div>
        <div className="shrink-0 bg-black border border-white/10 px-4 py-3 text-right">
          <span className="text-[10px] font-mono text-white/40 uppercase block">Impacto en la Cuenca:</span>
          <span className="text-xs font-mono font-bold text-[#48e5d8] block mt-0.5">
            {pillars[activeTab].impact}
          </span>
        </div>
      </div>
    </div>
  );
}
