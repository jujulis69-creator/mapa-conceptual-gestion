import React from 'react';
import { Presentation, Map, GitFork, GraduationCap, Printer } from 'lucide-react';

export type ActiveTab = 'canvas' | 'presentation' | 'case' | 'quiz';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onPrint: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onPrint }) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, single line text element */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
            GC
          </div>
          <span className="text-base sm:text-lg font-bold text-slate-900 tracking-tight whitespace-nowrap">
            Sistema Documental & SGC
          </span>
        </div>

        {/* Zone 2: Navigation views with clean segmented tabs */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab('canvas')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'canvas'
                ? 'bg-white text-teal-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Map className="w-3.5 h-3.5 text-teal-600" />
            <span>Mapa Panorámico</span>
          </button>

          <button
            onClick={() => setActiveTab('presentation')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'presentation'
                ? 'bg-white text-teal-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <Presentation className="w-3.5 h-3.5 text-blue-600" />
            <span>Modo Exposición</span>
          </button>

          <button
            onClick={() => setActiveTab('case')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'case'
                ? 'bg-white text-teal-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <GitFork className="w-3.5 h-3.5 text-emerald-600" />
            <span>Caso Práctico</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
              activeTab === 'quiz'
                ? 'bg-white text-teal-800 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5 text-amber-600" />
            <span>Autoevaluación</span>
          </button>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onPrint}
            title="Imprimir o Guardar como PDF"
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 hover:text-slate-900 rounded-lg transition-colors whitespace-nowrap"
          >
            <Printer className="w-3.5 h-3.5 text-slate-600" />
            <span className="hidden sm:inline">Imprimir / PDF</span>
          </button>
        </div>
      </div>

      {/* Mobile nav bar fallback */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-200/70 bg-slate-50 px-2 py-1.5">
        <button
          onClick={() => setActiveTab('canvas')}
          className={`px-2 py-1 text-xs font-medium rounded ${
            activeTab === 'canvas' ? 'bg-teal-700 text-white font-semibold' : 'text-slate-600'
          }`}
        >
          Mapa
        </button>
        <button
          onClick={() => setActiveTab('presentation')}
          className={`px-2 py-1 text-xs font-medium rounded ${
            activeTab === 'presentation' ? 'bg-blue-700 text-white font-semibold' : 'text-slate-600'
          }`}
        >
          Exposición
        </button>
        <button
          onClick={() => setActiveTab('case')}
          className={`px-2 py-1 text-xs font-medium rounded ${
            activeTab === 'case' ? 'bg-emerald-700 text-white font-semibold' : 'text-slate-600'
          }`}
        >
          Caso Real
        </button>
        <button
          onClick={() => setActiveTab('quiz')}
          className={`px-2 py-1 text-xs font-medium rounded ${
            activeTab === 'quiz' ? 'bg-amber-700 text-white font-semibold' : 'text-slate-600'
          }`}
        >
          Quiz
        </button>
      </div>
    </header>
  );
};
