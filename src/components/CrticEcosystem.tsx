import React, { useState } from 'react';
import {
  Sparkles,
  Layers,
  Cpu,
  Globe2,
  GraduationCap,
  Rocket,
  Wrench,
  Users,
  ExternalLink,
  ChevronRight,
  Terminal,
  Compass,
} from 'lucide-react';

export function CrticEcosystem() {
  const [activeTab, setActiveTab] = useState<'pilares' | 'tecnologias' | 'impacto' | 'manifiesto'>('pilares');

  const pillars = [
    {
      num: '01',
      title: 'Formación de Vanguardia',
      desc: 'Desarrollo de nuevas habilidades tecnológicas en IA aplicada, automatización y narrativas digitales para nuevas generaciones.',
      icon: GraduationCap,
      metric: 'Formación Continua',
    },
    {
      num: '02',
      title: 'Emprendimiento Tecnocreativo',
      desc: 'Acompañamiento, mentorías de alto nivel e incubación para modelos de negocio basados en creatividad, software y tecnología.',
      icon: Rocket,
      metric: 'Incubación Activa',
    },
    {
      num: '03',
      title: 'Experimentación & Prototipado',
      desc: 'Acceso a infraestructura de última generación en CRTIC Lab Sur (Pucón / Temuco) para validar prototipos antes de salir a mercado.',
      icon: Wrench,
      metric: 'Laboratorios XR & IoT',
    },
    {
      num: '04',
      title: 'Internacionalización',
      desc: 'Conexión con redes globales y apertura de canales comerciales hacia la cuenca del Pacífico y el eje binacional con Argentina.',
      icon: Globe2,
      metric: 'Eje Transfronterizo',
    },
    {
      num: '05',
      title: 'Articulación Estratégica',
      desc: 'Puente operativo entre universidades regionales, sector público (CORFO / GORE) y empresas industriales de alta demanda.',
      icon: Users,
      metric: 'Plataforma CTI',
    },
  ];

  const technologies = [
    { name: 'IA Generativa', app: 'Contenidos, diseño, productividad y análisis predictivo' },
    { name: 'XR / VR / AR', app: 'Simulación industrial, gemelos digitales, turismo y educación inmersiva' },
    { name: 'Unreal Engine', app: 'Modelado 3D interactivo, visualización arquitectónica y videojuegos' },
    { name: 'TouchDesigner', app: 'Visuales generativos, telemetría de datos en tiempo real y nuevos medios' },
    { name: 'Dolby Atmos', app: 'Audio espacial, producción sonora y postproducción inmersiva' },
    { name: 'IA Audiovisual', app: 'Pipelines automatizados de producción, edición y VFX' },
    { name: 'Diseño Digital', app: 'Productos digitales, interfaces de software y branding interactivo' },
    { name: 'Hardware / IoT', app: 'Sensorización de ductos, telemetría y experiencias interactivas' },
  ];

  const impacts = [
    {
      code: '01',
      title: 'Nuevas Generaciones',
      quote: 'No se trata solamente de enseñar a usar IA. Se trata de enseñar a crear con IA.',
      sub: 'Narrativas digitales, diseño algorítmico y experiencias inmersivas nativas.',
    },
    {
      code: '02',
      title: 'El Nuevo Trabajo',
      quote: 'Antes: aprender una herramienta. Hoy: aprender a adaptarse, combinar herramientas y crear soluciones.',
      sub: 'IA aplicada, automatización de procesos industriales y exportación de servicios calificados.',
    },
    {
      code: '03',
      title: 'Desarrollo Territorial',
      quote: 'La Araucanía no necesita esperar que las industrias del futuro lleguen desde Santiago. Podemos desarrollarlas desde el territorio.',
      sub: 'Retención del talento universitario y generación de empleo de alto valor en La Araucanía.',
    },
  ];

  return (
    <div className="w-full bg-black border border-white/20 p-5 sm:p-7 text-white">
      {/* Top Banner with CRTIC Official Branding & Landing Link */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/15 pb-5">
        <div className="flex items-center gap-4">
          <img
            src="/assets/logo-crtic-orange.png"
            alt="CRTIC"
            className="h-10 sm:h-12 w-auto object-contain"
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#ff5e14]">
                CRTIC SUR · INFRAESTRUCTURA CTI
              </span>
              <span className="px-1.5 py-0.2 bg-white/10 text-white/60 font-mono text-[9px] uppercase">
                La Araucanía
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-black uppercase text-white font-display leading-tight">
              Centro para la Revolución Tecnológica en Industrias Creativas
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://landing-crtic-sur.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold uppercase bg-white/5 border border-white/20 text-white/80 hover:text-white hover:border-[#48e5d8] transition-colors"
          >
            <span>Ver Portal CRTIC Sur</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#48e5d8]" />
          </a>
        </div>
      </div>

      {/* The Central Manifesto Box (Verbatim from reference) */}
      <div className="my-5 p-4 sm:p-5 bg-[#09090d] border-l-4 border-[#ff5e14] border-y border-r border-white/10">
        <div className="flex items-center gap-2 mb-2 font-mono text-[11px] text-[#ff5e14] font-bold uppercase tracking-wider">
          <Terminal className="w-3.5 h-3.5" />
          <span>Tesis Central CRTIC</span>
        </div>
        <p className="text-sm sm:text-base text-white/90 leading-relaxed font-sans font-medium">
          «Creatividad, tecnología e innovación para la <strong className="text-white bg-white/10 px-2 py-0.5">transformación productiva</strong> de La Araucanía. En un mundo donde la IA democratiza el acceso a la técnica, la <strong className="text-[#48e5d8]">creatividad humana se transforma en una ventaja estratégica irrepetible</strong>.»
        </p>

        {/* High-Impact Axioms */}
        <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
          <div className="bg-black/60 p-2.5 border border-white/10">
            <span className="text-white/40 block text-[10px] uppercase">01 // Inteligencia Artificial</span>
            <span className="text-white font-bold">Democratiza herramientas de alto nivel para todos.</span>
          </div>
          <div className="bg-black/60 p-2.5 border border-white/10">
            <span className="text-white/40 block text-[10px] uppercase">02 // Automatización</span>
            <span className="text-white font-bold">Transforma procesos, faenas y modelos productivos.</span>
          </div>
          <div className="bg-black/60 p-2.5 border border-[#48e5d8]/40">
            <span className="text-[#48e5d8] block text-[10px] uppercase">03 // Creatividad Humana</span>
            <span className="text-white font-black">Diferencia e imagina las soluciones del futuro.</span>
          </div>
        </div>
      </div>

      {/* Tab Switcher */}
      <div className="flex items-center gap-2 border-b border-white/15 pb-3 mb-5 overflow-x-auto">
        <button
          onClick={() => setActiveTab('pilares')}
          className={`px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-tight transition-colors shrink-0 ${
            activeTab === 'pilares'
              ? 'bg-[#48e5d8] text-black'
              : 'bg-[#121216] text-white/70 hover:text-white border border-white/10'
          }`}
        >
          [ 5 Pilares de Operación ]
        </button>

        <button
          onClick={() => setActiveTab('tecnologias')}
          className={`px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-tight transition-colors shrink-0 ${
            activeTab === 'tecnologias'
              ? 'bg-[#48e5d8] text-black'
              : 'bg-[#121216] text-white/70 hover:text-white border border-white/10'
          }`}
        >
          [ 8 Tecnologías & SYS ]
        </button>

        <button
          onClick={() => setActiveTab('impacto')}
          className={`px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-tight transition-colors shrink-0 ${
            activeTab === 'impacto'
              ? 'bg-[#48e5d8] text-black'
              : 'bg-[#121216] text-white/70 hover:text-white border border-white/10'
          }`}
        >
          [ Líneas de Impacto ]
        </button>

        <button
          onClick={() => setActiveTab('manifiesto')}
          className={`px-3.5 py-1.5 text-xs font-display font-bold uppercase tracking-tight transition-colors shrink-0 ${
            activeTab === 'manifiesto'
              ? 'bg-[#48e5d8] text-black'
              : 'bg-[#121216] text-white/70 hover:text-white border border-white/10'
          }`}
        >
          [ Conclusiones & Visión Territorial ]
        </button>
      </div>

      {/* Tab 1: 5 Pillars */}
      {activeTab === 'pilares' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-4 bg-[#0a0a0f] border border-white/10 hover:border-[#48e5d8] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="text-[#48e5d8] font-bold">{p.num} //</span>
                    <span className="text-[10px] text-white/40 uppercase">{p.metric}</span>
                  </div>
                  <Icon className="w-5 h-5 text-[#ff5e14] mb-3" />
                  <h4 className="font-display font-black text-sm uppercase text-white leading-snug mb-2">
                    {p.title}
                  </h4>
                  <p className="text-[12px] text-white/70 leading-relaxed font-sans">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: 8 Technologies & SYS */}
      {activeTab === 'tecnologias' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {technologies.map((t, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-[#09090d] border border-white/10 hover:border-white/30 transition-colors"
            >
              <div className="flex items-center justify-between mb-2 text-[10px] font-mono">
                <span className="text-white/40 uppercase font-bold">SYS.{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#48e5d8]" />
              </div>
              <h5 className="font-display font-black text-sm uppercase text-white mb-1">
                {t.name}
              </h5>
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                {t.app}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Impact Lines */}
      {activeTab === 'impacto' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {impacts.map((imp, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#0a0a10] border border-white/15 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#ff5e14] block mb-2">
                  LÍNEA DE IMPACTO {imp.code} //
                </span>
                <h4 className="font-display font-black text-base uppercase text-white mb-3">
                  {imp.title}
                </h4>
                <blockquote className="text-xs sm:text-sm text-white/90 italic border-l-2 border-[#48e5d8] pl-3 my-2 leading-relaxed">
                  «{imp.quote}»
                </blockquote>
              </div>
              <p className="text-xs text-white/60 font-sans mt-3 pt-3 border-t border-white/10">
                {imp.sub}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Manifesto & Territorial Vision */}
      {activeTab === 'manifiesto' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 bg-[#0a0a0f] border border-white/15">
          <div className="space-y-4">
            <span className="venue-line text-[10px]">Visión Territorial y Descentralización</span>
            <h4 className="text-xl font-black uppercase text-white font-display leading-tight">
              Desarrollar industrias del futuro desde el territorio
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              «La Araucanía no necesita esperar que las industrias del futuro lleguen desde Santiago. Podemos desarrollarlas desde el territorio, articulando el talento de nuestras universidades con infraestructura física y de telecomunicaciones simétrica.»
            </p>
            <div className="p-3 bg-black border border-white/10 text-xs font-mono text-white/70">
              <span className="text-[#48e5d8] font-bold block mb-1">// PROPÓSITO REGIONAL:</span>
              Diversificación de la matriz económica, retención de capital humano calificado y exportación de servicios basados en conocimiento a través del corredor transcordillerano.
            </div>
          </div>

          <div className="space-y-4 border-t md:border-t-0 md:border-l border-white/15 md:pl-6">
            <span className="venue-line-orange text-[10px]">Intersección: Cultura + Tecnología</span>
            <h4 className="text-xl font-black uppercase text-white font-display leading-tight">
              El arte y la creatividad como herramientas de innovación
            </h4>
            <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
              «Las nuevas industrias no nacen solamente de la tecnología. Nacen cuando la tecnología se encuentra con nuevas formas de imaginar. La tecnología puede generar respuestas; la creatividad humana sigue siendo absolutamente necesaria para formular nuevas preguntas.»
            </p>
            <div className="p-3 bg-black border border-white/10 text-xs font-mono text-white/70">
              <span className="text-[#ff5e14] font-bold block mb-1">// LABORATORIOS CRTIC SUR:</span>
              Espacios de experimentación inmersiva, prototipado rápido y vinculación con la red de fibra óptica cordillerana de COTESMA.
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
