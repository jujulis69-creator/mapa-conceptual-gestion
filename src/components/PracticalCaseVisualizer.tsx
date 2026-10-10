import React, { useState } from 'react';
import {
  GitFork,
  ArrowRight,
  FileCheck2,
  AlertTriangle,
  Search,
  FileEdit,
  TrendingUp,
  CheckCircle2,
  Layers,
  FolderKanban,
  Settings,
  RotateCw
} from 'lucide-react';
import { PRACTICAL_CASE_STEPS } from '../data/conceptMapData';

export const PracticalCaseVisualizer: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getSystemIcon = (system: string) => {
    switch (system) {
      case 'Gestión de la Información':
        return <Layers className="w-4 h-4 text-cyan-600" />;
      case 'Sistema Documental':
        return <FolderKanban className="w-4 h-4 text-blue-600" />;
      case 'SGC':
        return <Settings className="w-4 h-4 text-teal-600" />;
      case 'Mejora Continua':
        return <RotateCw className="w-4 h-4 text-amber-600" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-slate-600" />;
    }
  };

  const currentStep = PRACTICAL_CASE_STEPS[activeStepIndex];

  return (
    <div className="flex-1 flex flex-col bg-slate-100/70 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full space-y-6">
        {/* Header Introduction */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
            <GitFork className="w-4 h-4" />
            <span>Demostración de Sinergia Aplicada</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Caso Práctico: De la Queja del Cliente a la Mejora Continua
          </h2>
          <p className="text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
            Este caso real demuestra cómo interactúan en la práctica la{' '}
            <strong className="text-slate-900">Gestión de la Información</strong>, el{' '}
            <strong className="text-slate-900">Sistema Documental</strong> y el{' '}
            <strong className="text-slate-900">Sistema de Gestión de la Calidad (ISO 9001)</strong> para resolver un problema de raíz y blindar a la empresa.
          </p>
        </div>

        {/* Step Indicator Flow (Timeline) */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2">
          {PRACTICAL_CASE_STEPS.map((s, idx) => {
            const isActive = idx === activeStepIndex;
            const isCompleted = idx < activeStepIndex;

            return (
              <button
                key={s.step}
                onClick={() => setActiveStepIndex(idx)}
                className={`text-left p-3 rounded-2xl border transition-all ${
                  isActive
                    ? 'bg-teal-700 text-white border-teal-700 shadow-md scale-102'
                    : isCompleted
                    ? 'bg-white text-slate-800 border-teal-200 hover:border-teal-400'
                    : 'bg-white/80 text-slate-600 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[11px] font-bold ${
                      isActive ? 'text-teal-200' : 'text-slate-400'
                    }`}
                  >
                    Paso {s.step}
                  </span>
                  {isCompleted && <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />}
                </div>
                <div className="text-xs font-bold truncate">{s.stage}</div>
                <div
                  className={`text-[10px] mt-0.5 truncate ${
                    isActive ? 'text-teal-100' : 'text-slate-500'
                  }`}
                >
                  {s.system}
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Detail Stage Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-1">
                <span>Fase {currentStep.step} de 5</span>
                <span>·</span>
                <span className="flex items-center gap-1 font-bold text-slate-700">
                  {getSystemIcon(currentStep.system)}
                  {currentStep.system}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                {currentStep.stage}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStepIndex((prev) => Math.max(prev - 1, 0))}
                disabled={activeStepIndex === 0}
                className="px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 disabled:opacity-40"
              >
                Anterior
              </button>
              <button
                onClick={() =>
                  setActiveStepIndex((prev) =>
                    Math.min(prev + 1, PRACTICAL_CASE_STEPS.length - 1)
                  )
                }
                disabled={activeStepIndex === PRACTICAL_CASE_STEPS.length - 1}
                className="px-4 py-1.5 text-xs font-bold rounded-lg bg-teal-700 hover:bg-teal-800 text-white disabled:opacity-40"
              >
                Siguiente
              </button>
            </div>
          </div>

          {/* Action details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 md:col-span-2 space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
                ¿Qué sucede en esta fase?
              </span>
              <p className="text-sm font-medium text-slate-800 leading-relaxed">
                {currentStep.action}
              </p>
            </div>

            <div className="p-4 bg-blue-50/70 rounded-2xl border border-blue-200/80 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-800 block">
                Documento / Herramienta
              </span>
              <div className="text-xs font-mono font-bold text-blue-950">
                {currentStep.docOrTool}
              </div>
              <p className="text-[11px] text-blue-800/80">
                Garantiza respaldo auditable y control de versión.
              </p>
            </div>
          </div>

          {/* Impact & Outcome */}
          <div className="p-4 bg-emerald-50/70 border border-emerald-200/90 rounded-2xl flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">
                Impacto en la Calidad y la Empresa
              </span>
              <p className="text-xs font-medium text-emerald-950 mt-0.5 leading-relaxed">
                {currentStep.impact}
              </p>
            </div>
          </div>

          {/* Visual summary of the entire chain */}
          <div className="pt-4 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-500 block mb-3 uppercase tracking-wider">
              Flujo Interconectado del Caso
            </span>
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-2xl">
              <span className="font-semibold text-slate-800">1. Queja capturada</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800">2. Registro FOR-CAL-042</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800">3. Análisis 5 Por Qués</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-slate-800">4. Instructivo v3.0</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-semibold text-emerald-700">5. Cero no conformidades</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
