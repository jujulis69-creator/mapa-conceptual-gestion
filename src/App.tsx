import React, { useState } from 'react';
import {
  Database,
  FolderKanban,
  Settings,
  ShieldCheck,
  TrendingUp,
  RotateCw,
  Award,
  FileText,
  CheckCircle2,
  Sparkles,
  Printer,
  Eye,
  Sliders,
  CheckCheck,
  Layers,
  ArrowRight,
  Maximize2
} from 'lucide-react';

export default function App() {
  const [activeBranch, setActiveBranch] = useState<number | null>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-screen h-screen min-h-[660px] max-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-2.5 sm:p-3 font-sans overflow-hidden select-none relative perspective-1000">
      {/* 3D Ambient Tech Lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl" />
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/10 rounded-full blur-3xl" />
        {/* Subtle 3D grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415512_1px,transparent_1px),linear-gradient(to_bottom,#33415512_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]" />
      </div>

      {/* Header Strip */}
      <header className="relative z-20 flex items-center justify-between px-3 py-1.5 border-b border-slate-800/80 bg-slate-900/70 backdrop-blur-md rounded-xl shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 flex items-center justify-center shadow-md shadow-cyan-500/30 ring-1 ring-white/20">
            <Sparkles className="w-3.5 h-3.5 text-slate-950 font-bold" />
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-extrabold tracking-tight text-white flex items-center gap-2">
              <span>MAPA CONCEPTUAL 3D</span>
              <span className="text-[10px] font-mono text-cyan-400 font-normal">· Calidad & Gestión</span>
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 no-print">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1 text-[11px] font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/80 rounded-lg transition-all shadow-xs"
            title="Imprimir mapa conceptual en una sola página"
          >
            <Printer className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Imprimir / PDF</span>
          </button>
        </div>
      </header>

      {/* Main Single-Page 3D Conceptual Canvas */}
      <div className="relative flex-1 w-full my-1.5 flex items-center justify-center z-10">
        {/* 3D SVG Flow Connectors */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1200 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="flow-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="flow-purple" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="flow-green" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="flow-orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="flow-turquoise" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="flow-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
            </linearGradient>

            <marker id="dot-blue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#3b82f6" />
            </marker>
            <marker id="dot-purple" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#a855f7" />
            </marker>
            <marker id="dot-green" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#10b981" />
            </marker>
            <marker id="dot-orange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#f97316" />
            </marker>
            <marker id="dot-turquoise" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#14b8a6" />
            </marker>
            <marker id="dot-cyan" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
              <circle cx="5" cy="5" r="4" fill="#06b6d4" />
            </marker>
          </defs>

          {/* Center to Branch 1 (Gestión de la Información) */}
          <path
            d="M 450 270 C 360 250, 310 190, 240 145"
            fill="none"
            stroke="url(#flow-blue)"
            strokeWidth="2.5"
            strokeDasharray={activeBranch === 1 ? 'none' : '6 4'}
            markerEnd="url(#dot-blue)"
            className="transition-all duration-300"
          />

          {/* Center to Branch 6 (Mejora Continua PHVA) */}
          <path
            d="M 600 240 C 600 200, 600 170, 600 145"
            fill="none"
            stroke="url(#flow-orange)"
            strokeWidth="2.5"
            strokeDasharray={activeBranch === 6 ? 'none' : '6 4'}
            markerEnd="url(#dot-orange)"
            className="transition-all duration-300"
          />

          {/* Center to Branch 3 (SGC) */}
          <path
            d="M 750 270 C 840 250, 890 190, 960 145"
            fill="none"
            stroke="url(#flow-green)"
            strokeWidth="2.5"
            strokeDasharray={activeBranch === 3 ? 'none' : '6 4'}
            markerEnd="url(#dot-green)"
            className="transition-all duration-300"
          />

          {/* Center to Branch 2 (Sistema Documental) */}
          <path
            d="M 450 330 C 360 360, 310 420, 240 460"
            fill="none"
            stroke="url(#flow-purple)"
            strokeWidth="2.5"
            strokeDasharray={activeBranch === 2 ? 'none' : '6 4'}
            markerEnd="url(#dot-purple)"
            className="transition-all duration-300"
          />

          {/* Center to Branch 5 (Beneficios) */}
          <path
            d="M 600 360 C 600 400, 600 425, 600 455"
            fill="none"
            stroke="url(#flow-cyan)"
            strokeWidth="2.5"
            strokeDasharray={activeBranch === 5 ? 'none' : '6 4'}
            markerEnd="url(#dot-cyan)"
            className="transition-all duration-300"
          />

          {/* Center to Branch 4 (Características) */}
          <path
            d="M 750 330 C 840 360, 890 420, 960 460"
            fill="none"
            stroke="url(#flow-turquoise)"
            strokeWidth="2.5"
            strokeDasharray={activeBranch === 4 ? 'none' : '6 4'}
            markerEnd="url(#dot-turquoise)"
            className="transition-all duration-300"
          />
        </svg>

        {/* Strict 1-Page Responsive Balanced 3x3 Grid */}
        <div className="relative w-full h-full max-w-7xl mx-auto grid grid-cols-12 grid-rows-6 gap-2 sm:gap-2.5 p-1 z-10">

          {/* ------------------------------------------------------------- */}
          {/* TOP-LEFT: 1. GESTIÓN DE LA INFORMACIÓN (Azul Eléctrico 3D)   */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranch(1)}
            onMouseLeave={() => setActiveBranch(null)}
            className={`col-span-4 row-span-2 rounded-2xl p-2.5 sm:p-3 card-3d-electric-blue transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-md ${
              activeBranch === 1 ? 'scale-[1.02] ring-2 ring-blue-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md shadow-blue-500/40 ring-1 ring-blue-300/40">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-blue-400 font-bold block leading-none">
                      Rama 01
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      Gestión de la Información
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-blue-300 bg-blue-950/80 px-1.5 py-0.5 rounded border border-blue-700/50">
                  Activo
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                Es el proceso de <strong className="text-blue-300">recopilar, organizar, almacenar, proteger y actualizar</strong> la información.
              </p>
            </div>

            <div className="pt-1.5 border-t border-slate-800 text-[10.5px] space-y-0.5">
              <p className="text-slate-300">
                <strong className="text-blue-400">· Toma de decisiones:</strong> Facilita la toma de decisiones ágil y acertada.
              </p>
              <p className="text-slate-300">
                <strong className="text-blue-400">· Ventaja competitiva:</strong> Puede convertirse en una ventaja competitiva clave.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TOP-CENTER: 6. MEJORA CONTINUA (PHVA) (Naranja 3D)           */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranch(6)}
            onMouseLeave={() => setActiveBranch(null)}
            className={`col-span-4 col-start-5 row-span-2 rounded-2xl p-2.5 sm:p-3 card-3d-vivid-orange transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-md ${
              activeBranch === 6 ? 'scale-[1.02] ring-2 ring-orange-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/40 ring-1 ring-orange-300/40">
                    <RotateCw className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-orange-400 font-bold block leading-none">
                      Rama 06
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      Mejora Continua (PHVA)
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-orange-300 bg-orange-950/80 px-1.5 py-0.5 rounded border border-orange-700/50">
                  Ciclo Deming
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                Permite <strong className="text-orange-300">evaluar los resultados, corregir fallas y mejorar los procesos</strong> de manera sistemática.
              </p>
            </div>

            {/* 4 PHVA 3D Micro-Cubes */}
            <div className="grid grid-cols-4 gap-1 pt-1.5 border-t border-slate-800 text-[9.5px] font-bold text-center">
              <div className="p-1 rounded bg-orange-950/80 border border-orange-600/40 text-orange-200">
                <span className="block font-mono text-orange-400">P</span>
                <span>Planear</span>
              </div>
              <div className="p-1 rounded bg-orange-950/80 border border-orange-600/40 text-orange-200">
                <span className="block font-mono text-orange-400">H</span>
                <span>Hacer</span>
              </div>
              <div className="p-1 rounded bg-orange-950/80 border border-orange-600/40 text-orange-200">
                <span className="block font-mono text-orange-400">V</span>
                <span>Verificar</span>
              </div>
              <div className="p-1 rounded bg-orange-950/80 border border-orange-600/40 text-orange-200">
                <span className="block font-mono text-orange-400">A</span>
                <span>Actuar</span>
              </div>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* TOP-RIGHT: 3. SISTEMA DE GESTIÓN DE LA CALIDAD (Verde 3D)     */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranch(3)}
            onMouseLeave={() => setActiveBranch(null)}
            className={`col-span-4 col-start-9 row-span-2 rounded-2xl p-2.5 sm:p-3 card-3d-emerald transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-md ${
              activeBranch === 3 ? 'scale-[1.02] ring-2 ring-emerald-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/40 ring-1 ring-emerald-300/40">
                    <Settings className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-400 font-bold block leading-none">
                      Rama 03
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      Sistema de Gestión de la Calidad (SGC)
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-emerald-300 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-700/50">
                  ISO 9001
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                <strong className="text-emerald-300">Organiza y evalúa los procesos</strong> para cumplir los requisitos y satisfacer al cliente.
              </p>
            </div>

            <div className="pt-1.5 border-t border-slate-800 text-[10.5px] space-y-0.5">
              <p className="text-slate-300">
                <strong className="text-emerald-400">· Norma ISO 9001:</strong> Marco de referencia internacional exigible.
              </p>
              <p className="text-slate-300">
                <strong className="text-emerald-400">· Evolución constante:</strong> Promueve activamente la mejora continua.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* NÚCLEO CENTRAL 3D: SISTEMA DOCUMENTAL Y SGC                   */}
          {/* (Center: cols 4-9, rows 3-4)                                  */}
          {/* ------------------------------------------------------------- */}
          <div
            className="col-span-6 col-start-4 row-span-2 row-start-3 rounded-2xl sm:rounded-3xl p-3 sm:p-4 card-3d-floating-prism flex flex-col justify-between items-center text-center relative z-20 overflow-hidden backdrop-blur-xl border border-indigo-400/40 hover:border-cyan-400 transition-all duration-300"
          >
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400" />

            <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-indigo-950/90 border border-indigo-500/40 text-[10px] font-bold uppercase tracking-wider text-cyan-300 shadow-sm">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>CONCEPTO CENTRAL</span>
              <Sparkles className="w-3 h-3 text-emerald-400" />
            </div>

            <div>
              <h2 className="text-sm sm:text-base md:text-lg font-black tracking-tight text-white leading-snug drop-shadow-md">
                Sistema Documental y Sistema de Gestión de la Calidad
              </h2>
              <p className="text-[11px] text-slate-300 mt-1 max-w-lg leading-relaxed font-normal">
                Son sistemas que ayudan a las empresas a <strong className="text-cyan-300">organizar su información</strong>, <strong className="text-purple-300">controlar sus actividades</strong>, <strong className="text-emerald-300">cumplir los requisitos de calidad</strong> y <strong className="text-orange-300">mejorar sus procesos</strong>.
              </p>
            </div>

            <div className="flex items-center justify-around w-full pt-1 border-t border-slate-800 text-[10px] text-slate-400 font-mono">
              <span className="text-cyan-400">● Control Documental</span>
              <span className="text-slate-600">|</span>
              <span className="text-emerald-400">● Satisfacción del Cliente</span>
              <span className="text-slate-600">|</span>
              <span className="text-orange-400">● Ciclo PHVA</span>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* BOTTOM-LEFT: 2. SISTEMA DOCUMENTAL (Morado 3D)                */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranch(2)}
            onMouseLeave={() => setActiveBranch(null)}
            className={`col-span-4 row-span-2 row-start-5 rounded-2xl p-2.5 sm:p-3 card-3d-vivid-purple transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-md ${
              activeBranch === 2 ? 'scale-[1.02] ring-2 ring-purple-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-purple-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white shadow-md shadow-purple-500/40 ring-1 ring-purple-300/40">
                    <FolderKanban className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-purple-400 font-bold block leading-none">
                      Rama 02
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      Sistema Documental
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-purple-300 bg-purple-950/80 px-1.5 py-0.5 rounded border border-purple-700/50">
                  Control
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                <strong className="text-purple-300">Organiza y controla los documentos</strong> de la empresa, como manuales, políticas, procedimientos y registros.
              </p>
            </div>

            <div className="pt-1.5 border-t border-slate-800 text-[10.5px] space-y-0.5">
              <p className="text-slate-300">
                <strong className="text-purple-400">· Fiabilidad:</strong> Permite encontrar información confiable.
              </p>
              <p className="text-slate-300">
                <strong className="text-purple-400">· Cero desactualización:</strong> Evita errores por documentos desactualizados.
              </p>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* BOTTOM-CENTER: 5. BENEFICIOS (Cian / Azul 3D)                 */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranch(5)}
            onMouseLeave={() => setActiveBranch(null)}
            className={`col-span-4 col-start-5 row-span-2 row-start-5 rounded-2xl p-2.5 sm:p-3 card-3d-cyan-blue transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-md ${
              activeBranch === 5 ? 'scale-[1.02] ring-2 ring-cyan-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/40 ring-1 ring-cyan-300/40">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-cyan-400 font-bold block leading-none">
                      Rama 05
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      Beneficios
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-cyan-300 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-700/50">
                  Impacto
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                La articulación de ambos sistemas maximiza el valor y la eficiencia organizacional:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-1 pt-1.5 border-t border-slate-800 text-[10px]">
              <span className="bg-cyan-950/60 border border-cyan-700/40 text-cyan-200 px-1.5 py-0.5 rounded">
                ✓ Reduce errores
              </span>
              <span className="bg-cyan-950/60 border border-cyan-700/40 text-cyan-200 px-1.5 py-0.5 rounded">
                ✓ Ahorra tiempo y recursos
              </span>
              <span className="bg-cyan-950/60 border border-cyan-700/40 text-cyan-200 px-1.5 py-0.5 rounded">
                ✓ Mejora la comunicación
              </span>
              <span className="bg-cyan-950/60 border border-cyan-700/40 text-cyan-200 px-1.5 py-0.5 rounded">
                ✓ Facilita las decisiones
              </span>
              <span className="col-span-2 bg-cyan-950/60 border border-cyan-700/40 text-cyan-200 px-1.5 py-0.5 rounded text-center font-semibold">
                ★ Aumenta la satisfacción del cliente
              </span>
            </div>
          </div>

          {/* ------------------------------------------------------------- */}
          {/* BOTTOM-RIGHT: 4. CARACTERÍSTICAS DE LA INFORMACIÓN (Turquesa 3D) */}
          {/* ------------------------------------------------------------- */}
          <div
            onMouseEnter={() => setActiveBranch(4)}
            onMouseLeave={() => setActiveBranch(null)}
            className={`col-span-4 col-start-9 row-span-2 row-start-5 rounded-2xl p-2.5 sm:p-3 card-3d-turquoise transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-md ${
              activeBranch === 4 ? 'scale-[1.02] ring-2 ring-teal-400' : ''
            }`}
          >
            <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-teal-400 to-transparent" />

            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white shadow-md shadow-teal-500/40 ring-1 ring-teal-300/40">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-teal-400 font-bold block leading-none">
                      Rama 04
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white tracking-tight leading-tight">
                      Características de la Información
                    </h2>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-teal-300 bg-teal-950/80 px-1.5 py-0.5 rounded border border-teal-700/50">
                  Cualidades
                </span>
              </div>

              <p className="text-[11px] text-slate-200 leading-snug mt-1">
                Para que la información sea útil en la empresa debe ser:
              </p>
            </div>

            {/* 6 Attributes Badges */}
            <div className="grid grid-cols-3 gap-1 pt-1.5 border-t border-slate-800 text-[10px] text-center font-medium">
              <span className="p-1 bg-teal-950/70 border border-teal-600/40 rounded text-teal-200">
                Clara
              </span>
              <span className="p-1 bg-teal-950/70 border border-teal-600/40 rounded text-teal-200">
                Confiable
              </span>
              <span className="p-1 bg-teal-950/70 border border-teal-600/40 rounded text-teal-200">
                Actualizada
              </span>
              <span className="p-1 bg-teal-950/70 border border-teal-600/40 rounded text-teal-200">
                Accesible
              </span>
              <span className="p-1 bg-teal-950/70 border border-teal-600/40 rounded text-teal-200">
                Segura
              </span>
              <span className="p-1 bg-teal-950/70 border border-teal-600/40 rounded text-teal-200">
                Fácil de consultar
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Mandatory Student Identification Plate */}
      <footer className="relative z-20 plate-3d rounded-xl px-4 py-2 flex items-center justify-center border border-amber-500/30 text-xs shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div className="text-white font-mono tracking-wide text-xs">
            <span className="text-amber-400 font-bold">Elaborado por:</span>{' '}
            <strong className="text-white">Julian Esteban Maca Saenz</strong>
          </div>
          <span className="text-slate-600">|</span>
          <div className="text-white font-mono tracking-wide text-xs">
            <span className="text-amber-400 font-bold">Ficha:</span>{' '}
            <strong className="text-white">3232345</strong>
          </div>
        </div>
      </footer>
    </div>
  );
}
