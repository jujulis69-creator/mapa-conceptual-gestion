import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
  MessageSquare,
  Sparkles,
  CheckCircle2,
  Lightbulb,
  Clock,
  BookOpen
} from 'lucide-react';
import { CENTRAL_CONCEPT, SATELLITE_NODES } from '../data/conceptMapData';
import { ConceptNode } from '../types/conceptMap';
import { ConceptIcon } from './ConceptIcon';

// The presentation order through the 7 academic topics
const PRESENTATION_STEPS: { stepNumber: number; node: ConceptNode; phaseTitle: string }[] = [
  {
    stepNumber: 1,
    node: CENTRAL_CONCEPT,
    phaseTitle: '1. Fundamento Central: Gestión de la Información'
  },
  {
    stepNumber: 2,
    node: SATELLITE_NODES[0], // Sistema Documental
    phaseTitle: '2. Pilar Operativo: Sistema Documental'
  },
  {
    stepNumber: 3,
    node: SATELLITE_NODES[1], // SGC
    phaseTitle: '3. Marco Estratégico: Sistema de Gestión de la Calidad (ISO 9001)'
  },
  {
    stepNumber: 4,
    node: SATELLITE_NODES[2], // Cualidades
    phaseTitle: '4. Requisitos del Dato: Cualidades de la Información'
  },
  {
    stepNumber: 5,
    node: SATELLITE_NODES[3], // Relación
    phaseTitle: '5. Articulación: Relación entre Ambos Sistemas'
  },
  {
    stepNumber: 6,
    node: SATELLITE_NODES[4], // PHVA
    phaseTitle: '6. Motor de Evolución: Ciclo de Mejora Continua (PHVA)'
  },
  {
    stepNumber: 7,
    node: SATELLITE_NODES[5], // Beneficios
    phaseTitle: '7. Impacto y Retorno: Beneficios Organizacionales'
  }
];

export const PresentationMode: React.FC = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [secondsElapsed, setSecondsElapsed] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  // Timer effect for presentation practice
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setSecondsElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentStepIndex((prev) => Math.min(prev + 1, PRESENTATION_STEPS.length - 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const currentStep = PRESENTATION_STEPS[currentStepIndex];
  const node = currentStep.node;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const handleNext = () => {
    setCurrentStepIndex((prev) => Math.min(prev + 1, PRESENTATION_STEPS.length - 1));
  };

  const handlePrev = () => {
    setCurrentStepIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100/70 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-5xl mx-auto w-full space-y-4">
        {/* Step Progress & Presentation Bar */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-wrap items-center justify-between gap-4">
          {/* Breadcrumb / Step counter */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold bg-teal-50 text-teal-800 px-3 py-1 rounded-lg border border-teal-100">
              Diapositiva {currentStepIndex + 1} de {PRESENTATION_STEPS.length}
            </span>
            <span className="text-sm font-bold text-slate-800 hidden sm:inline">
              {currentStep.phaseTitle}
            </span>
          </div>

          {/* Stepper dots */}
          <div className="flex items-center gap-1.5">
            {PRESENTATION_STEPS.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStepIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  idx === currentStepIndex
                    ? 'w-7 bg-teal-600'
                    : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                }`}
                title={step.phaseTitle}
              />
            ))}
          </div>

          {/* Practice Timer */}
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 px-3 py-1.5 rounded-xl text-xs font-mono">
            <Clock className="w-3.5 h-3.5 text-slate-500" />
            <span className="font-semibold text-slate-700">{formatTimer(secondsElapsed)}</span>
            <button
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="p-1 text-slate-600 hover:text-slate-900 transition-colors"
              title={isTimerRunning ? 'Pausar cronómetro' : 'Iniciar cronómetro'}
            >
              {isTimerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              onClick={() => {
                setSecondsElapsed(0);
                setIsTimerRunning(false);
              }}
              className="p-1 text-slate-400 hover:text-slate-600 transition-colors"
              title="Reiniciar cronómetro"
            >
              <RotateCcw className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Main Presentation Slide Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
          {/* Slide Header */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-600 text-white rounded-2xl shadow-sm">
                <ConceptIcon name={node.icon} className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">
                  {node.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {node.title}
                </h2>
                <p className="text-sm text-slate-500 font-medium">{node.subtitle}</p>
              </div>
            </div>

            <div className="hidden sm:block text-right">
              <span className="text-xs font-semibold text-slate-400 block">Palabra de enlace</span>
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-200/60 inline-block mt-0.5">
                "{node.relationWord}"
              </span>
            </div>
          </div>

          {/* Core concept summary */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Definición y Enfoque Académico
            </span>
            <p className="text-sm font-medium text-slate-800 leading-relaxed">{node.summary}</p>
          </div>

          {/* Keypoints Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {node.keyPoints.map((pt, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200 rounded-xl p-3.5 hover:border-teal-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900">{pt.label}</span>
                  {pt.keyword && (
                    <span className="text-[11px] font-semibold text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded">
                      {pt.keyword}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{pt.detail}</p>
              </div>
            ))}
          </div>

          {/* Practical Example if available */}
          {node.practicalExample && (
            <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-1.5">
                <Lightbulb className="w-4 h-4 text-amber-600" />
                <span>Ejemplo Práctico para la Audiencia</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900">
                {node.practicalExample.title}
              </h4>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                {node.practicalExample.description}
              </p>
              <div className="mt-2 text-xs font-semibold text-amber-800">
                Resultado clave: {node.practicalExample.highlight}
              </div>
            </div>
          )}

          {/* SPEAKER SCRIPT (Guión del expositor para lucirse en la exposición) */}
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 shadow-sm space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-teal-300 text-xs font-bold uppercase tracking-wider">
                <MessageSquare className="w-4 h-4" />
                <span>Guión sugerido para el expositor (30 - 45 segundos)</span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Lectura recomendada</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed italic">
              "{node.speakerScript}"
            </p>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrev}
            disabled={currentStepIndex === 0}
            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-xl transition-all ${
              currentStepIndex === 0
                ? 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-500'
                : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-xs'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Diapositiva Anterior</span>
          </button>

          <span className="text-xs text-slate-500 hidden sm:inline">
            Usa las teclas de flecha ← / → para avanzar
          </span>

          <button
            onClick={handleNext}
            disabled={currentStepIndex === PRESENTATION_STEPS.length - 1}
            className={`flex items-center gap-2 px-6 py-2.5 text-xs font-bold rounded-xl transition-all ${
              currentStepIndex === PRESENTATION_STEPS.length - 1
                ? 'opacity-40 cursor-not-allowed bg-slate-200 text-slate-500'
                : 'bg-teal-700 hover:bg-teal-800 text-white shadow-xs'
            }`}
          >
            <span>Siguiente Diapositiva</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
