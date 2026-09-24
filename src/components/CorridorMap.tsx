import React, { useState } from 'react';
import { Truck, Wifi, Anchor, Mountain, Zap, ArrowUpRight, Map, Network, Maximize2, X } from 'lucide-react';

export function CorridorMap() {
  const [selectedNode, setSelectedNode] = useState<string>('vm');
  const [viewMode, setViewMode] = useState<'map' | 'nodes'>('map');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nodes = [
    {
      id: 'vm',
      code: '01',
      name: 'Vaca Muerta (Añelo)',
      region: 'Neuquén, Argentina',
      category: 'CUENCA ENERGÉTICA',
      stat: '2° Gas / 4° Petróleo no convencional',
      description:
        'Principal polo de hidrocarburos del cono sur con inversión proyectada sobre US$ 10.000M/año. Exige masivas cadenas de suministro de insumos industriales, válvulas, repuestos y telemetría de pozo.',
      tag: 'Origen Flujo Primario',
    },
    {
      id: 'sm',
      code: '02',
      name: 'San Martín de los Andes',
      region: 'Neuquén · COTESMA',
      category: 'HUB TECNOLÓGICO CORDILLERANO',
      stat: 'Fibra óptica simétrica & Lifestyle',
      description:
        'Sede de COTESMA. Conectividad troncal de fibra de altísima capacidad, calidad de vida para nómades digitales y nodo de articulación del ecosistema tecnológico y creativo.',
      tag: 'Nodo Binacional',
    },
    {
      id: 'pasos',
      code: '03',
      name: 'Pasos Pino Hachado & Mamuil Malal',
      region: 'Frontera Chile - Argentina',
      category: 'CORREDOR ADUANERO & MULTIMODAL',
      stat: '< 450 km Distancia a Puertos',
      description:
        'Conexión logística directa con altitud moderada y transitabilidad garantizada. Reduce en más de 700 km la distancia frente al transporte tradicional hacia los puertos del Atlántico.',
      tag: 'Paso Fronterizo',
    },
    {
      id: 'araucania',
      code: '04',
      name: 'La Araucanía (Temuco / CRTIC)',
      region: 'Chile · Mesa Araucanía Comex',
      category: 'PLATAFORMA CTI & SEGUNDA CAPA',
      stat: 'Universidades + Infraestructura CRTIC',
      description:
        'Epicentro de capital humano, desarrollo de software embebido, laboratorios de simulación y articulación de la Mesa de Comercio Internacional.',
      tag: 'Plataforma Estratégica',
    },
    {
      id: 'puertos',
      code: '05',
      name: 'Puertos del Pacífico',
      region: 'Macrozona Sur (Chile)',
      category: 'SALIDA A MERCADOS GLOBALES',
      stat: 'Ruta directa Asia-Pacífico',
      description:
        'Terminales marítimos con capacidad para grandes buques mercantes, permitiendo la importación directa de maquinaria pesada y exportación hacia el Pacífico sin cruzar por Buenos Aires.',
      tag: 'Destino Ultramar',
    },
  ];

  const current = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <div className="w-full bg-black border border-white/15 p-6 sm:p-8">
      {/* Brutalist Section Header with View Mode Toggles */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="venue-line text-[11px]">Cartografía Operativa Binacional</span>
          <h3 className="text-xl sm:text-2xl font-black uppercase text-white font-display mt-1 tracking-tight">
            Eje Multimodal: Vaca Muerta ➔ Araucanía ➔ Océano Pacífico
          </h3>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('map')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase font-bold border transition-colors ${
              viewMode === 'map'
                ? 'bg-[#48e5d8] text-black border-[#48e5d8]'
                : 'bg-black text-white/70 border-white/20 hover:border-white hover:text-white'
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            <span>Mapa Oficial</span>
          </button>
          <button
            onClick={() => setViewMode('nodes')}
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase font-bold border transition-colors ${
              viewMode === 'nodes'
                ? 'bg-[#48e5d8] text-black border-[#48e5d8]'
                : 'bg-black text-white/70 border-white/20 hover:border-white hover:text-white'
            }`}
          >
            <Network className="w-3.5 h-3.5" />
            <span>5 Nodos Clave</span>
          </button>
        </div>
      </div>

      {/* VIEW 1: OFFICIAL CARTOGRAPHIC MAP */}
      {viewMode === 'map' && (
        <div className="my-6 space-y-4 animate-in fade-in duration-200">
          <div className="relative border border-white/20 bg-[#08080c] overflow-hidden group">
            <img
              src="/assets/corredor.png"
              alt="Cartografía Oficial del Corredor Binacional"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[550px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
            />
            
            {/* Overlay controls */}
            <div className="absolute top-3 left-3 flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase font-bold px-2 py-1 bg-black/90 text-[#48e5d8] border border-white/20 backdrop-blur-sm">
                Cartografía Oficial · Corredor
              </span>
            </div>

            <div className="absolute bottom-3 right-3">
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-black/90 hover:bg-[#48e5d8] hover:text-black text-white text-xs font-mono uppercase font-bold border border-white/30 backdrop-blur-sm transition-colors"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Ampliar Mapa</span>
              </button>
            </div>
          </div>

          <div className="p-4 bg-[#0c0c10] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[#ff5e14] font-bold uppercase text-[10px]">
                TRAZADO ESTRATÉGICO:
              </span>
              <span className="text-white/80">
                Conexión Neuquén – San Martín de los Andes – Pasos Cordilleranos – La Araucanía – Puertos del Pacífico.
              </span>
            </div>
            <button
              onClick={() => setViewMode('nodes')}
              className="text-[#48e5d8] hover:underline font-mono uppercase text-[11px] shrink-0 font-bold"
            >
              Ver Desglose de Nodos Logísticos ➔
            </button>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Map */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute -top-10 right-0 p-2 text-white/70 hover:text-white flex items-center gap-1.5 font-mono text-xs uppercase"
            >
              <span>[Cerrar]</span>
              <X className="w-4 h-4" />
            </button>
            <div className="border border-white/20 bg-black overflow-hidden flex items-center justify-center">
              <img
                src="/assets/corredor.png"
                alt="Cartografía Oficial del Corredor Binacional"
                referrerPolicy="no-referrer"
                className="max-h-[80vh] w-auto object-contain"
              />
            </div>
            <div className="w-full mt-3 p-3 bg-[#0e0e12] border border-white/15 flex items-center justify-between text-xs">
              <span className="text-[#48e5d8] font-mono font-bold uppercase">
                Cartografía de Alta Resolución · Corredor Binacional Tecnológico y Creativo
              </span>
              <span className="text-white/50 font-mono text-[11px]">1672 × 941 PX</span>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: NODES GRID AND DETAIL */}
      {viewMode === 'nodes' && (
        <div className="animate-in fade-in duration-200">
          {/* Brutalist Grid Route Flow (Clean step-by-step nodes) */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 border-y border-white/10 my-6">
            {nodes.map((n) => {
              const isSelected = n.id === selectedNode;
              return (
                <button
                  key={n.id}
                  onClick={() => setSelectedNode(n.id)}
                  className={`p-4 sm:p-5 text-left border-b sm:border-b-0 sm:border-r border-white/10 last:border-r-0 transition-all group ${
                    isSelected
                      ? 'bg-[#48e5d8] text-black'
                      : 'bg-black text-white hover:bg-[#121216]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-black' : 'text-white/40'
                      }`}
                    >
                      {n.code}
                    </span>
                    <span
                      className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-black text-[#48e5d8] font-bold'
                          : 'bg-white/10 text-white/70'
                      }`}
                    >
                      {n.tag}
                    </span>
                  </div>
                  <h4 className="font-display font-black text-sm uppercase leading-tight tracking-tight">
                    {n.name}
                  </h4>
                  <p
                    className={`text-[11px] mt-1 line-clamp-1 ${
                      isSelected ? 'text-black/80 font-medium' : 'text-white/50'
                    }`}
                  >
                    {n.region}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Node Detail Brutalist Card */}
          <div className="grid sm:grid-cols-12 gap-6 bg-[#0c0c10] border border-white/10 p-6 sm:p-7">
            <div className="sm:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-[#ff5e14] uppercase tracking-wider">
                    {current.category}
                  </span>
                  <span className="text-white/30">/</span>
                  <span className="text-xs text-white/60">{current.region}</span>
                </div>
                <h4 className="text-xl sm:text-2xl font-black uppercase text-white font-display mb-3">
                  {current.name}
                </h4>
                <p className="text-sm text-white/80 leading-relaxed max-w-2xl font-normal">
                  {current.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#48e5d8]">
                <ArrowUpRight className="w-4 h-4" />
                <span>Mesa Araucanía Comex: Nodo prioritario en acuerdo binacional</span>
              </div>
            </div>

            <div className="sm:col-span-4 flex flex-col justify-center border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
              <span className="text-[10px] font-mono uppercase text-white/50 tracking-wider">
                Capacidad Clave:
              </span>
              <span className="text-lg sm:text-xl font-black font-display text-white mt-1 leading-snug">
                {current.stat}
              </span>
              <span className="text-xs text-white/50 mt-2">
                Interconexión directa mediante corredores viales y red troncal de fibra óptica de alta disponibilidad.
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
