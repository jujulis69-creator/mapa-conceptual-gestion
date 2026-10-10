import React, { useState } from 'react';
import {
  Database,
  Layers,
  Users,
  Settings,
  Award,
  TrendingUp,
  Sparkles,
  Cpu,
  Network,
  ArrowRight,
  ShieldCheck,
  FileText,
  Printer,
  Compass,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  Sliders,
  Workflow,
  X
} from 'lucide-react';
import { CENTRAL_CONCEPT_INFO, BRANCHES_DATA, InformationNode } from './data/informationResourceData';

export default function App() {
  const [activeBranchId, setActiveBranchId] = useState<string | null>(null);
  const [selectedNodeModal, setSelectedNodeModal] = useState<InformationNode | null>(null);

  const handlePrint = () => {
    window.print();
  };

  const branch1 = BRANCHES_DATA[0]; // Introducción
  const branch2 = BRANCHES_DATA[1]; // Panorama general
  const branch3 = BRANCHES_DATA[2]; // Información y organización
  const branch4 = BRANCHES_DATA[3]; // Factores clave
  const branch5 = BRANCHES_DATA[4]; // Arma competitiva

  return (
    <div className="w-screen h-screen min-h-[660px] max-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-2 sm:p-2.5 font-sans overflow-hidden select-none relative perspective-1000">
      {/* 3D Ambient Tech Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-orange-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-cyan-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415512_1px,transparent_1px),linear-gradient(to_bottom,#33415512_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
      </div>

      {/* Top Header Navbar */}
      <header className="relative z-20 flex items-center justify-between px-3 py-1 border-b border-slate-800/90 bg-slate-900/80 backdrop-blur-md rounded-xl shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-cyan-500/30 ring-1 ring-white/20">
            <Cpu className="w-3.5 h-3.5 text-white" />
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>MAPA CONCEPTUAL 3D AUTOMATIZADO</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/80 px-1.5 py-0.2 rounded border border-cyan-800/40">
                Capítulo 1
              </span>
            </h1>
            <p className="text-[10px] text-slate-400 leading-tight">
              Diseño de Sistemas de Información: Fundamentos — El Recurso de la Información
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 rounded-lg transition-all shadow-xs"
            title="Imprimir mapa conceptual en una sola página horizontal"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Imprimir / PDF</span>
          </button>
        </div>
      </header>

      {/* Main Single-Page 3D Conceptual Canvas */}
      <div className="relative flex-1 w-full my-1 sm:my-1.5 flex items-center justify-center z-10">
        {/* SVG Curved 3D Flow Connectors with Linking Labels */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="flow-blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="flow-purple-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="flow-green-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="flow-orange-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="flow-turq-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
            </linearGradient>

            <marker id="marker-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#3b82f6" />
            </marker>
            <marker id="marker-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#a855f7" />
            </marker>
            <marker id="marker-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#10b981" />
            </marker>
            <marker id="marker-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#f97316" />
            </marker>
            <marker id="marker-turq" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#14b8a6" />
            </marker>
          </defs>

          {/* Central to Rama 1 (Top-Left: Introducción) */}
          <path
            d="M 460 170 C 360 150, 310 130, 240 120"
            fill="none"
            stroke="url(#flow-blue-grad)"
            strokeWidth="2.5"
            strokeDasharray={activeBranchId === 'branch-1' ? 'none' : '5 4'}
            markerEnd="url(#marker-blue)"
            className="transition-all duration-300"
          />

          {/* Central to Rama 2 (Bottom-Left: Panorama General) */}
          <path
            d="M 460 220 C 370 260, 310 330, 240 400"
            fill="none"
            stroke="url(#flow-purple-grad)"
            strokeWidth="2.5"
            strokeDasharray={activeBranchId === 'branch-2' ? 'none' : '5 4'}
            markerEnd="url(#marker-purple)"
            className="transition-all duration-300"
          />

          {/* Central to Rama 3 (Top-Right: La Información y la Organización) */}
          <path
            d="M 740 170 C 840 150, 890 130, 960 120"
            fill="none"
            stroke="url(#flow-green-grad)"
            strokeWidth="2.5"
            strokeDasharray={activeBranchId === 'branch-3' ? 'none' : '5 4'}
            markerEnd="url(#marker-green)"
            className="transition-all duration-300"
          />

          {/* Central to Rama 4 (Bottom-Right: Factores Clave) */}
          <path
            d="M 740 220 C 830 260, 890 330, 960 400"
            fill="none"
            stroke="url(#flow-orange-grad)"
            strokeWidth="2.5"
            strokeDasharray={activeBranchId === 'branch-4' ? 'none' : '5 4'}
            markerEnd="url(#marker-orange)"
            className="transition-all duration-300"
          />

          {/* Central to Rama 5 (Bottom-Center: Arma Competitiva) */}
          <path
            d="M 600 240 C 600 270, 600 300, 600 330"
            fill="none"
            stroke="url(#flow-turq-grad)"
            strokeWidth="2.5"
            strokeDasharray={activeBranchId === 'branch-5' ? 'none' : '5 4'}
            markerEnd="url(#marker-turq)"
            className="transition-all duration-300"
          />
        </svg>

        {/* 12-Column Symmetrical Layout (Cols 1-4: Left | Cols 5-8: Center | Cols 9-12: Right) */}
        <div className="relative w-full h-full max-w-7xl mx-auto grid grid-cols-12 grid-rows-6 gap-2 sm:gap-2.5 p-1 z-10">

          {/* ------------------------------------------------------------- */}
          {/* RAMA 1: INTRODUCCIÓN (Top-Left: cols 1-4, rows 1-2)          */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranchId('branch-1')}
            onMouseLeave={() => setActiveBranchId(null)}
            onClick={() => setSelectedNodeModal(branch1)}
            className={`col-span-4 row-span-2 rounded-2xl p-2.5 sm:p-3 card-3d-electric-blue transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden backdrop-blur-md ${
              activeBranchId === 'branch-1' ? 'scale-[1.02] ring-2 ring-blue-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/40 ring-1 ring-blue-300/40">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-blue-400 font-bold block leading-none">
                      Rama 01 · Fundamento
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      {branch1.title}
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-blue-300 bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-700/50">
                  {branch1.badgeText}
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                La información es el <strong className="text-blue-300">recurso fundamental</strong> indispensable para las organizaciones modernas.
              </p>
            </div>

            <div className="pt-1.5 border-t border-slate-800 text-[10.5px] space-y-0.5">
              <div className="flex items-start gap-1 text-slate-300">
                <span className="text-blue-400 font-bold">· Conocer situaciones:</span>
                <span>Diagnosticar realidades y anticipar cambios.</span>
              </div>
              <div className="flex items-start gap-1 text-slate-300">
                <span className="text-blue-400 font-bold">· Coordinar actividades:</span>
                <span>Sincronizar y alinear áreas de trabajo.</span>
              </div>
              <div className="flex items-start gap-1 text-slate-300">
                <span className="text-blue-400 font-bold">· Resolver problemas:</span>
                <span>Reducir la incertidumbre y apoyar decisiones.</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* NÚCLEO CENTRAL 3D: EL RECURSO DE LA INFORMACIÓN               */}
          {/* (Center: cols 5-8, rows 1-3)                                  */}
          {/* ------------------------------------------------------------- */}
          <div
            className="col-span-4 col-start-5 row-span-3 rounded-3xl p-3.5 sm:p-4 card-3d-floating-prism flex flex-col justify-between items-center text-center relative z-20 overflow-hidden backdrop-blur-xl border border-indigo-400/40 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400" />
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-purple-500/10 blur-xl pointer-events-none" />

            {/* Glowing Center Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-cyan-950/90 via-indigo-950/90 to-purple-950/90 border border-indigo-500/40 text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>TEMA CENTRAL</span>
              <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
            </div>

            {/* Main Central 3D Title */}
            <div>
              <h1 className="text-sm sm:text-base md:text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-slate-200 leading-snug drop-shadow-md">
                {CENTRAL_CONCEPT_INFO.title}
              </h1>
              <p className="text-[10px] text-cyan-300/90 font-mono mt-0.5">
                {CENTRAL_CONCEPT_INFO.subtitle}
              </p>
              <p className="text-[11px] text-slate-300 mt-1.5 max-w-sm leading-relaxed font-normal">
                {CENTRAL_CONCEPT_INFO.description}
              </p>
            </div>

            {/* Quick Micro-Badge Indicators */}
            <div className="flex items-center justify-around w-full pt-1.5 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
              <span className="text-blue-400">● 5 Dimensiones</span>
              <span className="text-slate-600">|</span>
              <span className="text-purple-400">● Datos a Decisión</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400">● Ventaja</span>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* RAMA 3: LA INFORMACIÓN Y LA ORGANIZACIÓN (Top-Right: cols 9-12, rows 1-2) */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranchId('branch-3')}
            onMouseLeave={() => setActiveBranchId(null)}
            onClick={() => setSelectedNodeModal(branch3)}
            className={`col-span-4 col-start-9 row-span-2 rounded-2xl p-2.5 sm:p-3 card-3d-emerald transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden backdrop-blur-md ${
              activeBranchId === 'branch-3' ? 'scale-[1.02] ring-2 ring-emerald-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white shadow-md shadow-emerald-500/40 ring-1 ring-emerald-300/40">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-bold block leading-none">
                      Rama 03 · Estructura
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      {branch3.title}
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-700/50">
                  {branch3.badgeText}
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                Conecta a las <strong className="text-emerald-300">personas, los procesos y las áreas</strong> de la organización.
              </p>
            </div>

            <div className="pt-1.5 border-t border-slate-800 text-[10.5px] space-y-0.5">
              <div className="flex items-start gap-1 text-slate-300">
                <span className="text-emerald-400 font-bold">· Trabajadores:</span>
                <span>Operativos (ejecutan) y De información (analizan).</span>
              </div>
              <div className="flex items-start gap-1 text-slate-300">
                <span className="text-emerald-400 font-bold">· Cultura y activos:</span>
                <span>Formas de trabajar y recursos intangibles.</span>
              </div>
              <div className="flex items-start gap-1 text-slate-300">
                <span className="text-emerald-400 font-bold">· Niveles gerenciales:</span>
                <span>Operativo, táctico y estratégico (decisiones).</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* RAMA 2: PANORAMA GENERAL (Bottom-Left: cols 1-4, rows 3-6)    */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranchId('branch-2')}
            onMouseLeave={() => setActiveBranchId(null)}
            onClick={() => setSelectedNodeModal(branch2)}
            className={`col-span-4 row-span-4 row-start-3 rounded-2xl p-2.5 sm:p-3 card-3d-vivid-purple transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden backdrop-blur-md ${
              activeBranchId === 'branch-2' ? 'scale-[1.01] ring-2 ring-purple-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/40 ring-1 ring-purple-300/40">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-purple-400 font-bold block leading-none">
                      Rama 02 · Conceptos Clave
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      {branch2.title}
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-purple-300 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-700/50">
                  {branch2.badgeText}
                </span>
              </div>

              <div className="space-y-1 mt-1 text-[11px] text-slate-200">
                <p>
                  <strong className="text-purple-300">Datos:</strong> elementos que adquieren significado cuando se organizan e interpretan en contexto.
                </p>
                <p>
                  <strong className="text-purple-300">Información:</strong> datos procesados y presentados de forma útil para un receptor.
                </p>
                <p>
                  <strong className="text-purple-300">Utilidad y necesidad:</strong> permite comprender situaciones, reconocer alternativas, planear y controlar.
                </p>
                <p>
                  <strong className="text-purple-300">Evolución:</strong> creciente manejo organizacional y desarrollo tecnológico.
                </p>
              </div>

              {/* Calidad de la Información */}
              <div className="mt-1.5 p-1.5 rounded-xl bg-purple-950/80 border border-purple-700/40">
                <span className="text-[9.5px] font-bold text-purple-300 uppercase tracking-wider block mb-0.5">
                  Calidad de la Información:
                </span>
                <div className="grid grid-cols-3 gap-1 text-[9.5px] text-center font-medium">
                  <span className="p-0.5 bg-purple-900/60 rounded text-purple-200 border border-purple-600/30">
                    <strong>Exactitud</strong> (corrección)
                  </span>
                  <span className="p-0.5 bg-purple-900/60 rounded text-purple-200 border border-purple-600/30">
                    <strong>Oportunidad</strong> (a tiempo)
                  </span>
                  <span className="p-0.5 bg-purple-900/60 rounded text-purple-200 border border-purple-600/30">
                    <strong>Relevancia</strong> (utilidad)
                  </span>
                </div>
              </div>
            </div>

            {/* Requested Visual Sequence: DATOS → ORGANIZACIÓN Y CONTEXTO → INFORMACIÓN ÚTIL → TOMA DE DECISIONES */}
            <div className="pt-1.5 border-t border-slate-800">
              <span className="text-[9px] font-bold text-purple-400 uppercase tracking-wider block mb-1">
                Secuencia de Transformación:
              </span>
              <div className="flex items-center justify-between text-[8.5px] font-bold text-slate-200 bg-slate-900/90 p-1.5 rounded-lg border border-purple-600/40">
                <span className="text-cyan-400">DATOS</span>
                <ArrowRight className="w-3 h-3 text-purple-400 shrink-0" />
                <span className="text-purple-300">ORGANIZACIÓN & CONTEXTO</span>
                <ArrowRight className="w-3 h-3 text-purple-400 shrink-0" />
                <span className="text-emerald-400">INFORMACIÓN ÚTIL</span>
                <ArrowRight className="w-3 h-3 text-purple-400 shrink-0" />
                <span className="text-amber-400">DECISIONES</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* RAMA 5: LA INFORMACIÓN COMO ARMA COMPETITIVA (Center-Bottom) */}
          {/* (Cols 5-8, rows 4-6)                                          */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranchId('branch-5')}
            onMouseLeave={() => setActiveBranchId(null)}
            onClick={() => setSelectedNodeModal(branch5)}
            className={`col-span-4 col-start-5 row-span-3 row-start-4 rounded-2xl p-2.5 sm:p-3 card-3d-cyan-blue transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden backdrop-blur-md ${
              activeBranchId === 'branch-5' ? 'scale-[1.01] ring-2 ring-teal-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-teal-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md shadow-teal-500/40 ring-1 ring-teal-300/40">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-teal-400 font-bold block leading-none">
                      Rama 05 · Estrategia
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      {branch5.title}
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-teal-300 bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-700/50">
                  {branch5.badgeText}
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                El uso adecuado de la información genera una <strong className="text-teal-300">ventaja competitiva</strong> frente al entorno.
              </p>

              <div className="grid grid-cols-2 gap-1 mt-1.5 text-[10px]">
                <div className="p-1 rounded bg-teal-950/70 border border-teal-700/40 text-slate-200">
                  <strong className="text-teal-300 block">Planeación estratégica:</strong>
                  Identificar oportunidades y anticipar cambios.
                </div>
                <div className="p-1 rounded bg-teal-950/70 border border-teal-700/40 text-slate-200">
                  <strong className="text-teal-300 block">Diferenciación:</strong>
                  Distinguir productos y servicios con valor.
                </div>
                <div className="p-1 rounded bg-teal-950/70 border border-teal-700/40 text-slate-200">
                  <strong className="text-teal-300 block">Productividad:</strong>
                  Mejorar procesos y aprovechar recursos.
                </div>
                <div className="p-1 rounded bg-teal-950/70 border border-teal-700/40 text-slate-200">
                  <strong className="text-teal-300 block">Tecnología informática:</strong>
                  Facilita el procesamiento y explotación.
                </div>
              </div>
            </div>

            {/* Requested Visual Sequence: INFORMACIÓN ÚTIL → MEJORES DECISIONES → PRODUCTIVIDAD → VENTAJA COMPETITIVA */}
            <div className="pt-1.5 border-t border-slate-800">
              <span className="text-[9px] font-bold text-teal-400 uppercase tracking-wider block mb-1">
                Cadena de Valor Competitivo:
              </span>
              <div className="flex items-center justify-between text-[8.5px] font-bold text-slate-200 bg-slate-900/90 p-1.5 rounded-lg border border-teal-600/40">
                <span className="text-cyan-300">INFORMACIÓN ÚTIL</span>
                <ArrowRight className="w-3 h-3 text-teal-400 shrink-0" />
                <span className="text-blue-300">MEJORES DECISIONES</span>
                <ArrowRight className="w-3 h-3 text-teal-400 shrink-0" />
                <span className="text-emerald-300">PRODUCTIVIDAD</span>
                <ArrowRight className="w-3 h-3 text-teal-400 shrink-0" />
                <span className="text-amber-300">VENTAJA COMPETITIVA</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* RAMA 4: FACTORES CLAVE DE LAS ORGANIZACIONES (Bottom-Right)   */}
          {/* (Cols 9-12, rows 3-6)                                         */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranchId('branch-4')}
            onMouseLeave={() => setActiveBranchId(null)}
            onClick={() => setSelectedNodeModal(branch4)}
            className={`col-span-4 col-start-9 row-span-4 row-start-3 rounded-2xl p-2.5 sm:p-3 card-3d-vivid-orange transition-all duration-300 flex flex-col justify-between cursor-pointer relative overflow-hidden backdrop-blur-md ${
              activeBranchId === 'branch-4' ? 'scale-[1.01] ring-2 ring-orange-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-md shadow-orange-500/40 ring-1 ring-orange-300/40">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-orange-400 font-bold block leading-none">
                      Rama 04 · Determinantes
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      {branch4.title}
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-orange-300 bg-orange-950/80 px-1.5 py-0.5 rounded border border-orange-700/50">
                  {branch4.badgeText}
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                Factores que influyen y moldean las <strong className="text-orange-300">necesidades específicas de información</strong>:
              </p>

              {/* 6 Key Factors explicitly developed */}
              <div className="grid grid-cols-2 gap-1.5 mt-2 text-[10px]">
                <div className="p-1 rounded bg-orange-950/70 border border-orange-700/40 text-slate-200">
                  <strong className="text-orange-300 block">Naturaleza y categoría:</strong>
                  Tipo de organización y actividades que realiza.
                </div>
                <div className="p-1 rounded bg-orange-950/70 border border-orange-700/40 text-slate-200">
                  <strong className="text-orange-300 block">Tamaño:</strong>
                  Cantidad y complejidad de la información requerida.
                </div>
                <div className="p-1 rounded bg-orange-950/70 border border-orange-700/40 text-slate-200">
                  <strong className="text-orange-300 block">Estructura organizacional:</strong>
                  Cargos, responsabilidades, autoridad y jerarquía.
                </div>
                <div className="p-1 rounded bg-orange-950/70 border border-orange-700/40 text-slate-200">
                  <strong className="text-orange-300 block">Estilo gerencial:</strong>
                  Forma de dirigir, administrar y tomar decisiones.
                </div>
                <div className="p-1 rounded bg-orange-950/70 border border-orange-700/40 text-slate-200">
                  <strong className="text-orange-300 block">Planeación estratégica:</strong>
                  Información para fijar objetivos y guiar el futuro.
                </div>
                <div className="p-1 rounded bg-orange-950/70 border border-orange-700/40 text-slate-200">
                  <strong className="text-orange-300 block">Control y decisiones:</strong>
                  Revisar resultados, detectar fallas y actuar.
                </div>
              </div>
            </div>

            <div className="pt-1.5 border-t border-slate-800 text-[10px] text-orange-200 font-mono text-center">
              Condicionan los requerimientos informativos de cada empresa
            </div>
          </div>

        </div>
      </div>

      {/* Mandatory Student Identification Strip */}
      <footer className="relative z-20 plate-3d rounded-xl px-4 py-1.5 flex flex-col sm:flex-row items-center justify-between gap-1 border border-amber-500/30 text-xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-white font-mono tracking-wide text-xs">
            <span className="text-amber-400 font-bold">Elaborado por:</span>{' '}
            <strong className="text-white">Julian Esteban Maca Saenz</strong>
          </div>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <div className="text-white font-mono tracking-wide text-xs">
            <span className="text-amber-400 font-bold">Ficha:</span>{' '}
            <strong className="text-white">3232345</strong>
          </div>
        </div>

        <div className="text-[10px] text-slate-400 font-mono hidden md:flex items-center gap-2">
          <span>Diseño de Sistemas de Información: Fundamentos</span>
          <span>·</span>
          <span className="text-cyan-400">Capítulo 1</span>
        </div>
      </footer>

      {/* Interactive Detail Modal on Click (for class presentations) */}
      {selectedNodeModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <div
                  className="p-2 rounded-xl text-white shadow-md"
                  style={{ backgroundColor: selectedNodeModal.accentColor }}
                >
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Rama {selectedNodeModal.number} · {selectedNodeModal.badgeText}
                  </span>
                  <h3 className="text-base font-bold text-white">
                    {selectedNodeModal.title}
                  </h3>
                </div>
              </div>
              <button
                onClick={() => setSelectedNodeModal(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {selectedNodeModal.description}
            </p>

            <div className="space-y-2">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Conceptos y Fundamentos:
              </span>
              <div className="space-y-1.5">
                {selectedNodeModal.keyPoints.map((pt, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs flex flex-col gap-0.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white">{pt.label}</span>
                      {pt.keyword && (
                        <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded">
                          {pt.keyword}
                        </span>
                      )}
                    </div>
                    <span className="text-slate-300">{pt.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {selectedNodeModal.sequenceFlow && (
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 block mb-1 uppercase tracking-wider">
                  Secuencia del Proceso:
                </span>
                <div className="flex items-center justify-between text-[10px] font-bold text-cyan-300">
                  {selectedNodeModal.sequenceFlow.map((step, idx) => (
                    <React.Fragment key={idx}>
                      <span>{step}</span>
                      {idx < selectedNodeModal.sequenceFlow!.length - 1 && (
                        <ArrowRight className="w-3 h-3 text-slate-500" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setSelectedNodeModal(null)}
                className="px-4 py-1.5 text-xs font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-colors"
              >
                Cerrar Detalle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
