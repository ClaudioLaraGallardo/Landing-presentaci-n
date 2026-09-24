import React, { useState } from 'react';
import { Layers, Cpu, Sparkles, Binary, CheckCircle2, TrendingUp } from 'lucide-react';

export function ValueChainDiagram() {
  const [selectedLayer, setSelectedLayer] = useState<'layer2' | 'layer1'>('layer2');

  return (
    <div className="w-full bg-slate-900/90 border border-slate-800 rounded-xl p-5 backdrop-blur-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
        <div>
          <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
            Arquitectura de Valor Agregado
          </span>
          <h4 className="text-base font-bold text-white">De la Logística de Paso al Ecosistema de Conocimiento</h4>
        </div>

        {/* Layer Selector */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 text-xs">
          <button
            onClick={() => setSelectedLayer('layer2')}
            className={`px-3 py-1.5 rounded font-medium transition-colors ${
              selectedLayer === 'layer2'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Segunda Capa (CRTIC + COTESMA)
          </button>
          <button
            onClick={() => setSelectedLayer('layer1')}
            className={`px-3 py-1.5 rounded font-medium transition-colors ${
              selectedLayer === 'layer1'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Primera Capa (Logística Básica)
          </button>
        </div>
      </div>

      {/* Visual Stack Diagram */}
      <div className="my-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Layer 2: High Value Card */}
        <div
          onClick={() => setSelectedLayer('layer2')}
          className={`cursor-pointer rounded-xl p-4 border transition-all ${
            selectedLayer === 'layer2'
              ? 'bg-cyan-950/40 border-cyan-500/60 ring-2 ring-cyan-500/20'
              : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 opacity-75'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 font-semibold tracking-wider">
                  CAPA 02 · ALTO VALOR AGREGADO
                </span>
                <h5 className="text-sm font-bold text-white">Capital Humano, Tecnología y Creatividad</h5>
              </div>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-900/30 px-2 py-0.5 rounded border border-cyan-500/20">
              Retención de Valor
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            Transforma la posición geográfica en un polo de exportación de servicios globales, propiedad intelectual y
            soluciones tecnológicas especializadas para la industria energética e internacional.
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 text-slate-200 bg-slate-900/80 p-2 rounded border border-slate-800/60">
              <Cpu className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Software y Telemetría:</strong> Gemelos digitales, IoT en transporte y
                sensores de monitoreo ambiental para Vaca Muerta.
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-200 bg-slate-900/80 p-2 rounded border border-slate-800/60">
              <Binary className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Industrias Creativas:</strong> Contenidos audiovisuales, diseño
                arquitectónico sustentable y branding binacional.
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-200 bg-slate-900/80 p-2 rounded border border-slate-800/60">
              <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Atracción de Talento:</strong> Nómades digitales de alto poder
                adquisitivo residiendo y consumiendo en la región.
              </div>
            </div>
          </div>
        </div>

        {/* Layer 1: Base Logistics Card */}
        <div
          onClick={() => setSelectedLayer('layer1')}
          className={`cursor-pointer rounded-xl p-4 border transition-all ${
            selectedLayer === 'layer1'
              ? 'bg-amber-950/30 border-amber-500/60 ring-2 ring-amber-500/20'
              : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700 opacity-75'
          }`}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-amber-400 font-semibold tracking-wider">
                  CAPA 01 · INFRAESTRUCTURA BASE
                </span>
                <h5 className="text-sm font-bold text-white">Logística y Transporte Físico</h5>
              </div>
            </div>
            <span className="text-xs font-mono text-amber-300 bg-amber-900/30 px-2 py-0.5 rounded border border-amber-500/20">
              Flujo de Carga
            </span>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed mb-4">
            El canal fundamental de paso territorial: movimiento de insumos mineros, arenas de fractura, repuestos y
            salida de hidrocarburos hacia terminales del Océano Pacífico.
          </p>

          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 text-slate-200 bg-slate-900/80 p-2 rounded border border-slate-800/60">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Corredor de Carga:</strong> Reducción de distancias respecto a los
                puertos atlánticos argentinos (&lt; 450 km).
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-200 bg-slate-900/80 p-2 rounded border border-slate-800/60">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Pasos Fronterizos:</strong> Articulación vial entre Pino Hachado, Mamuil
                Malal e Icalma.
              </div>
            </div>
            <div className="flex items-start gap-2 text-slate-200 bg-slate-900/80 p-2 rounded border border-slate-800/60">
              <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white">Servicios de Puerto:</strong> Operaciones aduaneras, bodegaje y
                embarque marítimo al Asia.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Takeaway */}
      <div className="bg-slate-950/70 border border-slate-800 rounded-lg p-3 text-xs text-slate-300 flex items-center justify-between">
        <span className="text-slate-400">
          Enfoque Mesa Comex: La Capa 1 sostiene el flujo, pero la <strong className="text-cyan-300">Capa 2</strong> es la que
          multiplica el PIB per cápita y diversifica la matriz exportadora de La Araucanía.
        </span>
        <span className="shrink-0 ml-4 font-mono text-cyan-400 font-bold tabular-nums">Multiplicador x4</span>
      </div>
    </div>
  );
}
