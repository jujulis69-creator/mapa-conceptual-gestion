import React from 'react';
import { CENTRAL_CONCEPT, SATELLITE_NODES, PRACTICAL_CASE_STEPS } from '../data/conceptMapData';

export const PrintStudySheet: React.FC = () => {
  return (
    <div className="hidden print:block p-8 bg-white text-slate-900 font-sans text-xs space-y-6">
      <div className="border-b-2 border-slate-900 pb-4 flex justify-between items-end">
        <div>
          <h1 className="text-xl font-bold uppercase tracking-tight text-slate-900">
            Mapa Conceptual: Sistema Documental y Sistema de Gestión de la Calidad
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Profundización en la importancia de la Gestión de la Información dentro de las organizaciones.
          </p>
        </div>
        <div className="text-right text-[11px] text-slate-500 font-mono">
          Material Académico de Estudio
        </div>
      </div>

      {/* Núcleo Central */}
      <div className="p-4 border-2 border-teal-800 rounded-xl bg-teal-50/30">
        <h2 className="text-base font-bold text-teal-950 uppercase tracking-wide">
          1. Concepto Central: Gestión de la Información
        </h2>
        <p className="text-xs text-slate-800 mt-1 font-medium">{CENTRAL_CONCEPT.summary}</p>
        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-teal-200 text-[11px]">
          {CENTRAL_CONCEPT.keyPoints.map((pt, i) => (
            <div key={i}>
              <strong className="text-teal-900">{pt.keyword || pt.label}:</strong> {pt.detail}
            </div>
          ))}
        </div>
      </div>

      {/* Grid of 6 pillars */}
      <div className="grid grid-cols-2 gap-4">
        {SATELLITE_NODES.map((node) => (
          <div key={node.id} className="p-3 border border-slate-300 rounded-lg space-y-2 print-break-inside-avoid">
            <div className="flex justify-between items-baseline border-b border-slate-200 pb-1">
              <h3 className="font-bold text-slate-900 text-xs uppercase">{node.title}</h3>
              <span className="text-[10px] text-slate-500 italic">Enlace: "{node.relationWord}"</span>
            </div>
            <p className="text-[11px] text-slate-700">{node.summary}</p>
            <ul className="space-y-1 text-[10px] text-slate-800">
              {node.keyPoints.map((pt, idx) => (
                <li key={idx} className="flex gap-1">
                  <span className="font-bold text-slate-900">· {pt.keyword || pt.label}:</span>
                  <span>{pt.detail}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Caso Práctico */}
      <div className="p-3 border border-slate-300 rounded-lg print-break-inside-avoid bg-slate-50/50">
        <h3 className="font-bold text-slate-900 text-xs uppercase mb-2">
          Ejemplo Práctico Integrado: Resolución de Queja y Estandarización
        </h3>
        <div className="grid grid-cols-5 gap-2 text-[10px]">
          {PRACTICAL_CASE_STEPS.map((s) => (
            <div key={s.step} className="p-2 bg-white border border-slate-200 rounded">
              <strong className="block text-slate-900">Paso {s.step}: {s.stage}</strong>
              <div className="text-slate-600 mt-0.5">{s.action}</div>
              <div className="text-teal-800 font-semibold mt-1">{s.impact}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 pt-3 text-[10px] text-slate-500 flex justify-between">
        <span>Norma de referencia: ISO 9001:2015 · Sistema de Gestión de la Calidad</span>
        <span>Ciclo de Deming: Planear · Hacer · Verificar · Actuar (PHVA)</span>
      </div>
    </div>
  );
};
