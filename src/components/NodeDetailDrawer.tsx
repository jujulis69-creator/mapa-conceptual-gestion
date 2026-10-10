import React from 'react';
import { X, CheckCircle2, Lightbulb, MessageSquare, Tag, ArrowRight } from 'lucide-react';
import { ConceptNode } from '../types/conceptMap';
import { ConceptIcon } from './ConceptIcon';

interface NodeDetailDrawerProps {
  node: ConceptNode | null;
  onClose: () => void;
  onSelectNode: (id: string) => void;
}

export const NodeDetailDrawer: React.FC<NodeDetailDrawerProps> = ({
  node,
  onClose,
  onSelectNode
}) => {
  if (!node) return null;

  const colorStyles = {
    teal: 'bg-teal-50 border-teal-200 text-teal-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    emerald: 'bg-emerald-50 border-emerald-200 text-emerald-800',
    amber: 'bg-amber-50 border-amber-200 text-amber-800',
    cyan: 'bg-cyan-50 border-cyan-200 text-cyan-800'
  }[node.colorTheme];

  const headerBgStyles = {
    teal: 'bg-teal-700 text-white',
    blue: 'bg-blue-700 text-white',
    emerald: 'bg-emerald-700 text-white',
    amber: 'bg-amber-700 text-white',
    cyan: 'bg-cyan-800 text-white'
  }[node.colorTheme];

  return (
    <div
      className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-white shadow-2xl border-l border-slate-200 flex flex-col transition-transform duration-300 ease-in-out overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      {/* Header */}
      <div className={`p-6 ${headerBgStyles} flex items-start justify-between relative`}>
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/20 backdrop-blur-md rounded-xl">
            <ConceptIcon name={node.icon} className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold opacity-90">
              {node.category}
            </div>
            <h2 className="text-xl font-bold tracking-tight text-white leading-tight">
              {node.title}
            </h2>
            <p className="text-xs text-white/80 mt-0.5">{node.subtitle}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-black/10 hover:bg-black/20 text-white transition-colors"
          aria-label="Cerrar detalle"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-700">
        {/* Resumen ejecutivo */}
        <div className={`p-4 rounded-xl border ${colorStyles}`}>
          <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-75">
            Definición y Propósito
          </div>
          <p className="text-sm font-medium leading-relaxed">{node.summary}</p>
        </div>

        {/* Puntos y Palabras Clave */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-900 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-teal-600" />
            <span>Conceptos Clave y Funcionamiento</span>
          </h3>
          <div className="space-y-2.5">
            {node.keyPoints.map((point, idx) => (
              <div
                key={idx}
                className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl hover:border-slate-300 transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-slate-900">{point.label}</span>
                  {point.keyword && (
                    <span className="text-[11px] font-semibold text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded-md">
                      {point.keyword}
                    </span>
                  )}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{point.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Ejemplo práctico si existe */}
        {node.practicalExample && (
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-2">
            <div className="flex items-center gap-2 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Lightbulb className="w-4 h-4 text-amber-600" />
              <span>Ejemplo Práctico en la Empresa</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">
              {node.practicalExample.title}
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              {node.practicalExample.description}
            </p>
            <div className="text-[11px] font-semibold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-lg">
              Resultado: {node.practicalExample.highlight}
            </div>
          </div>
        )}

        {/* Guión sugerido para la exposición académica */}
        <div className="p-4 bg-slate-100/80 border border-slate-200 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-slate-900 text-xs font-bold uppercase tracking-wide">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <span>Guión sugerido para la exposición</span>
          </div>
          <p className="text-xs text-slate-600 italic leading-relaxed">
            "{node.speakerScript}"
          </p>
        </div>

        {/* Etiquetas temáticas */}
        <div className="pt-2">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2">
            <Tag className="w-3.5 h-3.5" />
            <span>Términos asociados:</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {node.tags.map((tag, i) => (
              <span
                key={i}
                className="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-2.5 py-1 rounded-md transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
        <span className="text-xs text-slate-500">
          Navegación del mapa
        </span>
        <button
          onClick={onClose}
          className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
        >
          Cerrar Detalle
        </button>
      </div>
    </div>
  );
};
