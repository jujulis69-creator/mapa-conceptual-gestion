import React, { useState } from 'react';
import {
  GraduationCap,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/conceptMapData';

export const StudyQuiz: React.FC = () => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: number]: number }>({});
  const [showResults, setShowResults] = useState<boolean>(false);

  const handleSelectOption = (questionId: number, optionIdx: number) => {
    if (showResults) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionIdx
    }));
  };

  const calculateScore = () => {
    let score = 0;
    QUIZ_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctIndex) {
        score++;
      }
    });
    return score;
  };

  const totalQuestions = QUIZ_QUESTIONS.length;
  const answeredCount = Object.keys(selectedAnswers).length;
  const score = calculateScore();

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <div className="flex-1 flex flex-col bg-slate-100/70 p-4 sm:p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto w-full space-y-6">
        {/* Header */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
              <GraduationCap className="w-4 h-4" />
              <span>Actividad Académica</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Autoevaluación: Sistema Documental y SGC
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Pon a prueba tus conocimientos sobre la gestión de la información, normas ISO y control documental.
            </p>
          </div>

          <div className="flex items-center gap-2">
            {!showResults ? (
              <button
                onClick={() => setShowResults(true)}
                disabled={answeredCount === 0}
                className="px-5 py-2.5 bg-teal-700 hover:bg-teal-800 disabled:opacity-50 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
              >
                Comprobar Respuestas ({answeredCount}/{totalQuestions})
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reintentar Test</span>
              </button>
            )}
          </div>
        </div>

        {/* Results Banner when finished */}
        {showResults && (
          <div className="bg-teal-900 text-white rounded-3xl p-6 shadow-md flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-teal-800 rounded-2xl">
                <Award className="w-8 h-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  Puntaje obtenido: {score} de {totalQuestions} correctas
                </h3>
                <p className="text-xs text-teal-200 mt-0.5">
                  {score === totalQuestions
                    ? '¡Excelente dominio del tema! Estás listo para una exposición impecable.'
                    : score >= 3
                    ? 'Buen resultado. Revisa las explicaciones para consolidar los conceptos clave.'
                    : 'Recomendamos repasar el mapa conceptual y volver a intentarlo.'}
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="px-4 py-2 bg-white text-teal-950 font-bold text-xs rounded-xl hover:bg-teal-50 transition-colors"
            >
              Reiniciar Cuestionario
            </button>
          </div>
        )}

        {/* Questions List */}
        <div className="space-y-4">
          {QUIZ_QUESTIONS.map((q, idx) => {
            const userAnswer = selectedAnswers[q.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = userAnswer === q.correctIndex;

            return (
              <div
                key={q.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-teal-700">
                      Pregunta {idx + 1} · {q.conceptRef}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {q.question}
                    </h3>
                  </div>

                  {showResults && (
                    <div>
                      {isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Correcto
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                          <XCircle className="w-3.5 h-3.5" />
                          Incorrecto
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Options */}
                <div className="space-y-2">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = userAnswer === optIdx;
                    let optionStyle =
                      'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300';

                    if (showResults) {
                      if (optIdx === q.correctIndex) {
                        optionStyle =
                          'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold ring-1 ring-emerald-400';
                      } else if (isSelected) {
                        optionStyle =
                          'bg-rose-50 border-rose-300 text-rose-950 ring-1 ring-rose-300';
                      } else {
                        optionStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                      }
                    } else if (isSelected) {
                      optionStyle =
                        'bg-teal-50 border-teal-600 text-teal-950 font-semibold ring-1 ring-teal-600';
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={showResults}
                        onClick={() => handleSelectOption(q.id, optIdx)}
                        className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-3 ${optionStyle}`}
                      >
                        <span className="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 text-[10px] font-bold">
                          {String.fromCharCode(65 + optIdx)}
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation on Show Results */}
                {showResults && (
                  <div className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-600 space-y-1">
                    <span className="font-bold text-slate-800 block">
                      Fundamento pedagógico:
                    </span>
                    <p className="leading-relaxed">{q.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
