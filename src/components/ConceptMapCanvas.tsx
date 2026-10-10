import React, { useState, useRef } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Search,
  Maximize2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  BookOpen,
  LayoutGrid,
  Map as MapIcon,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';
import { CENTRAL_CONCEPT, SATELLITE_NODES } from '../data/conceptMapData';
import { ConceptNode, BranchId } from '../types/conceptMap';
import { ConceptIcon } from './ConceptIcon';

interface ConceptMapCanvasProps {
  onSelectNode: (node: ConceptNode) => void;
  selectedNodeId: BranchId | null;
}

export const ConceptMapCanvas: React.FC<ConceptMapCanvasProps> = ({
  onSelectNode,
  selectedNodeId
}) => {
  const [zoom, setZoom] = useState<number>(1);
  const [hoveredNodeId, setHoveredNodeId] = useState<BranchId | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'panoramic' | 'grid'>('panoramic');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.15, 1.4));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.15, 0.65));
  const handleResetZoom = () => setZoom(1);

  // Filter logic for quick search
  const isNodeMatched = (node: ConceptNode) => {
    if (!searchQuery.trim()) return false;
    const query = searchQuery.toLowerCase();
    const matchTitle = node.title.toLowerCase().includes(query);
    const matchSummary = node.summary.toLowerCase().includes(query);
    const matchTags = node.tags.some((t) => t.toLowerCase().includes(query));
    const matchPoints = node.keyPoints.some(
      (p) =>
        p.label.toLowerCase().includes(query) ||
        p.detail.toLowerCase().includes(query) ||
        (p.keyword && p.keyword.toLowerCase().includes(query))
    );
    return matchTitle || matchSummary || matchTags || matchPoints;
  };

  const isCentralMatched = isNodeMatched(CENTRAL_CONCEPT);

  // SVG connection lines definitions
  // Coordinate frame is 1600 x 960
  const connections = [
    {
      id: 'conn-doc',
      fromId: 'central',
      toId: 'sistema-documental',
      path: 'M 640 460 C 500 440, 480 320, 410 260',
      label: 'se formaliza en',
      labelX: 490,
      labelY: 340
    },
    {
      id: 'conn-sgc',
      fromId: 'central',
      toId: 'sgc',
      path: 'M 960 460 C 1100 440, 1120 320, 1190 260',
      label: 'sustenta las decisiones del',
      labelX: 1110,
      labelY: 340
    },
    {
      id: 'conn-caract',
      fromId: 'central',
      toId: 'caracteristicas',
      path: 'M 640 500 C 490 540, 480 660, 410 720',
      label: 'debe cumplir con',
      labelX: 490,
      labelY: 620
    },
    {
      id: 'conn-relacion',
      fromId: 'central',
      toId: 'relacion',
      path: 'M 800 360 C 800 310, 800 280, 800 240',
      label: 'articula y sincroniza',
      labelX: 800,
      labelY: 295
    },
    {
      id: 'conn-phva',
      fromId: 'central',
      toId: 'phva',
      path: 'M 800 580 C 800 640, 800 680, 800 710',
      label: 'se perfecciona mediante',
      labelX: 800,
      labelY: 655
    },
    {
      id: 'conn-beneficios',
      fromId: 'central',
      toId: 'beneficios',
      path: 'M 960 500 C 1110 540, 1120 660, 1190 720',
      label: 'contribuye y genera',
      labelX: 1110,
      labelY: 620
    },
    {
      id: 'conn-doc-rel',
      fromId: 'sistema-documental',
      toId: 'relacion',
      path: 'M 410 170 C 500 130, 560 130, 610 130',
      label: 'aporta evidencias a',
      labelX: 515,
      labelY: 130
    },
    {
      id: 'conn-sgc-rel',
      fromId: 'sgc',
      toId: 'relacion',
      path: 'M 1190 170 C 1100 130, 1040 130, 990 130',
      label: 'fija requisitos para',
      labelX: 1085,
      labelY: 130
    },
    {
      id: 'conn-phva-benef',
      fromId: 'phva',
      toId: 'beneficios',
      path: 'M 990 820 C 1050 820, 1100 810, 1190 780',
      label: 'maximiza y asegura',
      labelX: 1085,
      labelY: 810
    }
  ];

  const isConnHighlighted = (fromId: string, toId: string) => {
    const activeId = hoveredNodeId || selectedNodeId;
    if (!activeId) return false;
    return activeId === fromId || activeId === toId;
  };

  return (
    <div className="flex flex-col w-full h-full bg-slate-50/70 select-none">
      {/* Control Bar: Zoom, Search, View Mode */}
      <div className="no-print bg-white border-b border-slate-200/90 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shadow-xs">
        {/* Left: View Mode Toggle & Tip */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg">
            <button
              onClick={() => setViewMode('panoramic')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                viewMode === 'panoramic'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MapIcon className="w-3.5 h-3.5 text-teal-600" />
              <span>Infografía Horizontal</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all ${
                viewMode === 'grid'
                  ? 'bg-white text-teal-800 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-slate-600" />
              <span>Vista Cuadrícula</span>
            </button>
          </div>

          <span className="hidden lg:inline text-xs text-slate-500">
            Haz clic en cualquier tarjeta para ver su desglose, ejemplo y guión expositivo.
          </span>
        </div>

        {/* Right: Search & Zoom Controls */}
        <div className="flex items-center gap-2">
          {/* Quick Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar: ISO 9001, PHVA, registros..."
              className="pl-8 pr-3 py-1 text-xs bg-slate-100 focus:bg-white border border-slate-200 rounded-lg w-48 sm:w-64 focus:outline-none focus:ring-1 focus:ring-teal-500 transition-all text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600"
              >
                ×
              </button>
            )}
          </div>

          {/* Zoom controls (only in panoramic view) */}
          {viewMode === 'panoramic' && (
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-lg">
              <button
                onClick={handleZoomOut}
                title="Reducir zoom"
                className="p-1.5 rounded hover:bg-white text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleResetZoom}
                title="Restablecer zoom al 100%"
                className="px-2 py-1 text-xs font-mono font-medium text-slate-700 hover:bg-white rounded transition-colors"
              >
                {Math.round(zoom * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                title="Aumentar zoom"
                className="p-1.5 rounded hover:bg-white text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Canvas Area */}
      {viewMode === 'panoramic' ? (
        <div
          ref={containerRef}
          className="flex-1 overflow-auto relative bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] p-4 sm:p-8 flex items-center justify-center min-h-[640px]"
        >
          {/* Scalable Container Frame */}
          <div
            className="relative transition-transform duration-200 ease-out origin-center"
            style={{
              width: '1600px',
              height: '960px',
              transform: `scale(${zoom})`
            }}
          >
            {/* SVG Interactive Connection Lines Layer */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1600 960"
            >
              <defs>
                <linearGradient id="grad-teal-blue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#2563eb" />
                </linearGradient>
                <linearGradient id="grad-cyan-teal" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0891b2" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
                <linearGradient id="grad-active" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#059669" />
                </linearGradient>
                {/* Arrow markers */}
                <marker
                  id="arrow-default"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="#94a3b8" />
                </marker>
                <marker
                  id="arrow-active"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 9 5 L 0 9 z" fill="#0d9488" />
                </marker>
              </defs>

              {/* Render connector curves */}
              {connections.map((conn) => {
                const highlighted = isConnHighlighted(conn.fromId, conn.toId);
                return (
                  <g key={conn.id}>
                    {/* Shadow / Halo for highlighted connections */}
                    {highlighted && (
                      <path
                        d={conn.path}
                        fill="none"
                        stroke="#2dd4bf"
                        strokeWidth="8"
                        strokeOpacity="0.4"
                        strokeLinecap="round"
                      />
                    )}
                    {/* Main line */}
                    <path
                      d={conn.path}
                      fill="none"
                      stroke={highlighted ? '#0d9488' : '#cbd5e1'}
                      strokeWidth={highlighted ? '3' : '2'}
                      strokeDasharray={highlighted ? 'none' : '6 4'}
                      markerEnd={highlighted ? 'url(#arrow-active)' : 'url(#arrow-default)'}
                      className="transition-all duration-300"
                    />

                    {/* Word link badge ("se basa en", "permite", "controla", "contribuye a", "mejora") */}
                    <g transform={`translate(${conn.labelX}, ${conn.labelY})`}>
                      <rect
                        x="-70"
                        y="-12"
                        width="140"
                        height="24"
                        rx="12"
                        fill={highlighted ? '#0f766e' : '#ffffff'}
                        stroke={highlighted ? '#0d9488' : '#e2e8f0'}
                        strokeWidth="1.5"
                        className="shadow-xs"
                      />
                      <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        fill={highlighted ? '#ffffff' : '#64748b'}
                        fontSize="11"
                        fontWeight="600"
                        fontFamily="system-ui"
                      >
                        {conn.label}
                      </text>
                    </g>
                  </g>
                );
              })}
            </svg>

            {/* ======================================================== */}
            {/* 1. NÚCLEO CENTRAL: GESTIÓN DE LA INFORMACIÓN             */}
            {/* ======================================================== */}
            <div
              onClick={() => onSelectNode(CENTRAL_CONCEPT)}
              onMouseEnter={() => setHoveredNodeId('central')}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`absolute cursor-pointer transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl p-6 text-white text-center shadow-xl select-none ${
                hoveredNodeId === 'central' || selectedNodeId === 'central'
                  ? 'ring-4 ring-teal-400 ring-offset-4 ring-offset-slate-50 scale-105 shadow-2xl'
                  : ''
              } ${
                isCentralMatched ? 'ring-4 ring-amber-400 scale-105' : ''
              }`}
              style={{
                left: '800px',
                top: '470px',
                width: '320px',
                background: 'linear-gradient(135deg, #0e7490 0%, #0f766e 50%, #047857 100%)'
              }}
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-teal-100 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Concepto Central</span>
              </div>

              <h1 className="text-xl font-extrabold tracking-tight leading-snug">
                Gestión de la Información
              </h1>
              <p className="text-xs text-teal-100 font-medium mt-1">
                La base del Sistema Documental y del SGC
              </p>

              <div className="mt-4 pt-3 border-t border-white/20 text-left space-y-1.5">
                <div className="text-[11px] text-teal-50 flex items-start gap-1.5">
                  <span className="font-bold text-amber-300">¿Qué es?</span>
                  <span className="opacity-90">Recopilar, proteger y compartir información útil.</span>
                </div>
                <div className="text-[11px] text-teal-50 flex items-start gap-1.5">
                  <span className="font-bold text-teal-200">Finalidad:</span>
                  <span className="opacity-90">Decisiones informadas y ventaja competitiva.</span>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-white/90 bg-white/10 rounded-lg py-1 hover:bg-white/20 transition-colors">
                <span>Explorar nodo central</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>

            {/* ======================================================== */}
            {/* 2. RAMA: SISTEMA DOCUMENTAL (Top-Left)                   */}
            {/* ======================================================== */}
            <div
              onClick={() => onSelectNode(SATELLITE_NODES[0])}
              onMouseEnter={() => setHoveredNodeId('sistema-documental')}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`absolute cursor-pointer transition-all duration-300 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border border-blue-200/80 p-5 shadow-md hover:shadow-lg ${
                hoveredNodeId === 'sistema-documental' || selectedNodeId === 'sistema-documental'
                  ? 'border-blue-500 ring-2 ring-blue-300 scale-102'
                  : ''
              } ${isNodeMatched(SATELLITE_NODES[0]) ? 'ring-3 ring-amber-400' : ''}`}
              style={{
                left: '230px',
                top: '190px',
                width: '360px'
              }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-blue-100 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-xl">
                    <ConceptIcon name="FolderKanban" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                      Pilar Operativo
                    </span>
                    <h2 className="text-base font-bold text-slate-900 leading-tight">
                      Sistema Documental
                    </h2>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                  Estructura
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Conjunto estructurado de documentos y controles para administrar la información.
              </p>

              <div className="space-y-1.5 text-xs">
                <div className="p-1.5 bg-slate-50 rounded-lg flex items-start gap-1.5">
                  <span className="font-bold text-blue-700 shrink-0">Documentos:</span>
                  <span className="text-slate-600">Políticas, manuales, procedimientos, instructivos y registros.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded-lg flex items-start gap-1.5">
                  <span className="font-bold text-blue-700 shrink-0">Control:</span>
                  <span className="text-slate-600">Versiones vigentes, autores y retiro de obsoletos.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded-lg flex items-start gap-1.5">
                  <span className="font-bold text-blue-700 shrink-0">Custodia:</span>
                  <span className="text-slate-600">Seguridad ante pérdidas y accesos indebidos.</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-700 font-semibold">
                <span>Ejemplo: Procedimiento estándar</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* ======================================================== */}
            {/* 3. RAMA: SISTEMA DE GESTIÓN DE LA CALIDAD (Top-Right)     */}
            {/* ======================================================== */}
            <div
              onClick={() => onSelectNode(SATELLITE_NODES[1])}
              onMouseEnter={() => setHoveredNodeId('sgc')}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`absolute cursor-pointer transition-all duration-300 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border border-teal-200/80 p-5 shadow-md hover:shadow-lg ${
                hoveredNodeId === 'sgc' || selectedNodeId === 'sgc'
                  ? 'border-teal-500 ring-2 ring-teal-300 scale-102'
                  : ''
              } ${isNodeMatched(SATELLITE_NODES[1]) ? 'ring-3 ring-amber-400' : ''}`}
              style={{
                left: '1370px',
                top: '190px',
                width: '360px'
              }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-teal-100 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-teal-100 text-teal-700 rounded-xl">
                    <ConceptIcon name="Settings" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 block">
                      Marco Estratégico
                    </span>
                    <h2 className="text-base font-bold text-slate-900 leading-tight">
                      Sistema de Gestión de la Calidad
                    </h2>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-teal-800 bg-teal-50 px-2 py-0.5 rounded">
                  ISO 9001
                </span>
              </div>

              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Dirección y control de procesos para cumplir requisitos y satisfacer al cliente.
              </p>

              <div className="space-y-1.5 text-xs">
                <div className="p-1.5 bg-slate-50 rounded-lg flex items-start gap-1.5">
                  <span className="font-bold text-teal-700 shrink-0">Enfoque al cliente:</span>
                  <span className="text-slate-600">Atender necesidades, expectativas y medir satisfacción.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded-lg flex items-start gap-1.5">
                  <span className="font-bold text-teal-700 shrink-0">Procesos:</span>
                  <span className="text-slate-600">Actividades, responsables, recursos y salidas claras.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded-lg flex items-start gap-1.5">
                  <span className="font-bold text-teal-700 shrink-0">Evaluación:</span>
                  <span className="text-slate-600">Indicadores de calidad, quejas y auditorías.</span>
                </div>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-teal-700 font-semibold">
                <span>Norma internacional: ISO 9001</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* ======================================================== */}
            {/* 4. RAMA: RELACIÓN ENTRE AMBOS SISTEMAS (Top-Center)      */}
            {/* ======================================================== */}
            <div
              onClick={() => onSelectNode(SATELLITE_NODES[3])}
              onMouseEnter={() => setHoveredNodeId('relacion')}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`absolute cursor-pointer transition-all duration-300 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border border-cyan-200/90 p-5 shadow-md hover:shadow-lg ${
                hoveredNodeId === 'relacion' || selectedNodeId === 'relacion'
                  ? 'border-cyan-500 ring-2 ring-cyan-300 scale-102'
                  : ''
              } ${isNodeMatched(SATELLITE_NODES[3]) ? 'ring-3 ring-amber-400' : ''}`}
              style={{
                left: '800px',
                top: '125px',
                width: '380px'
              }}
            >
              <div className="flex items-center justify-between pb-2 border-b border-cyan-100 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-cyan-100 text-cyan-700 rounded-lg">
                    <ConceptIcon name="BarChart3" className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold text-slate-900 leading-tight">
                    Relación entre Ambos Sistemas
                  </h2>
                </div>
                <span className="text-[10px] font-semibold text-cyan-800 bg-cyan-50 px-2 py-0.5 rounded">
                  Sinergia
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <div className="p-2 bg-blue-50/60 rounded-lg border border-blue-100">
                  <span className="font-bold text-blue-800 block text-[11px]">Sistema Documental</span>
                  <span className="text-slate-600 text-[11px]">Organiza, normaliza y custodia la información.</span>
                </div>
                <div className="p-2 bg-teal-50/60 rounded-lg border border-teal-100">
                  <span className="font-bold text-teal-800 block text-[11px]">SGC</span>
                  <span className="text-slate-600 text-[11px]">Usa la información para planificar y mejorar.</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                <span>Los registros aportan <strong>evidencias objetivas</strong> para tomar decisiones.</span>
              </div>
            </div>

            {/* ======================================================== */}
            {/* 5. RAMA: CUALIDADES DE LA INFORMACIÓN (Bottom-Left)       */}
            {/* ======================================================== */}
            <div
              onClick={() => onSelectNode(SATELLITE_NODES[2])}
              onMouseEnter={() => setHoveredNodeId('caracteristicas')}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`absolute cursor-pointer transition-all duration-300 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border border-emerald-200/80 p-5 shadow-md hover:shadow-lg ${
                hoveredNodeId === 'caracteristicas' || selectedNodeId === 'caracteristicas'
                  ? 'border-emerald-500 ring-2 ring-emerald-300 scale-102'
                  : ''
              } ${isNodeMatched(SATELLITE_NODES[2]) ? 'ring-3 ring-amber-400' : ''}`}
              style={{
                left: '230px',
                top: '750px',
                width: '360px'
              }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                    <ConceptIcon name="ShieldCheck" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                      Confiabilidad del Dato
                    </span>
                    <h2 className="text-base font-bold text-slate-900 leading-tight">
                      Cualidades de la Información
                    </h2>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  7 Criterios
                </span>
              </div>

              <div className="grid grid-cols-2 gap-1.5 text-[11px] mb-3">
                <div className="p-1.5 bg-slate-50 rounded border border-slate-100">
                  <strong className="text-emerald-700 block">Exactitud:</strong>
                  <span className="text-slate-600">Correcta y libre de error.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-100">
                  <strong className="text-emerald-700 block">Disponibilidad:</strong>
                  <span className="text-slate-600">Accesible oportunamente.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-100">
                  <strong className="text-emerald-700 block">Trazabilidad:</strong>
                  <span className="text-slate-600">Historial y autor rastreable.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-100">
                  <strong className="text-emerald-700 block">Integridad:</strong>
                  <span className="text-slate-600">Completa e inalterada.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-100">
                  <strong className="text-emerald-700 block">Actualización:</strong>
                  <span className="text-slate-600">Contenido vigente y revisado.</span>
                </div>
                <div className="p-1.5 bg-slate-50 rounded border border-slate-100">
                  <strong className="text-emerald-700 block">Confidencialidad:</strong>
                  <span className="text-slate-600">Seguridad por roles.</span>
                </div>
              </div>

              <div className="text-[11px] text-emerald-700 font-semibold flex items-center justify-between pt-1">
                <span>Claridad: comprensible para todos</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>

            {/* ======================================================== */}
            {/* 6. RAMA: CICLO DE MEJORA CONTINUA PHVA (Bottom-Center)   */}
            {/* ======================================================== */}
            <div
              onClick={() => onSelectNode(SATELLITE_NODES[4])}
              onMouseEnter={() => setHoveredNodeId('phva')}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`absolute cursor-pointer transition-all duration-300 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border border-amber-200/90 p-5 shadow-md hover:shadow-lg ${
                hoveredNodeId === 'phva' || selectedNodeId === 'phva'
                  ? 'border-amber-500 ring-2 ring-amber-300 scale-102'
                  : ''
              } ${isNodeMatched(SATELLITE_NODES[4]) ? 'ring-3 ring-amber-400' : ''}`}
              style={{
                left: '800px',
                top: '815px',
                width: '380px'
              }}
            >
              <div className="flex items-center justify-between pb-2 border-b border-amber-100 mb-2.5">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-amber-100 text-amber-700 rounded-lg">
                    <ConceptIcon name="RotateCw" className="w-4 h-4" />
                  </div>
                  <h2 className="text-sm font-bold text-slate-900 leading-tight">
                    Ciclo de Mejora Continua (PHVA)
                  </h2>
                </div>
                <span className="text-[10px] font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded">
                  Ciclo Deming
                </span>
              </div>

              {/* 4 PHVA Steps Visual Stepper */}
              <div className="grid grid-cols-4 gap-1.5 text-center mb-2">
                <div className="p-1.5 bg-amber-50/70 border border-amber-200/70 rounded-lg">
                  <span className="font-extrabold text-amber-800 block text-xs">P</span>
                  <span className="text-[10px] font-bold text-slate-800 block">Planear</span>
                  <span className="text-[9px] text-slate-500">Objetivos</span>
                </div>
                <div className="p-1.5 bg-teal-50/70 border border-teal-200/70 rounded-lg">
                  <span className="font-extrabold text-teal-800 block text-xs">H</span>
                  <span className="text-[10px] font-bold text-slate-800 block">Hacer</span>
                  <span className="text-[9px] text-slate-500">Ejecutar</span>
                </div>
                <div className="p-1.5 bg-blue-50/70 border border-blue-200/70 rounded-lg">
                  <span className="font-extrabold text-blue-800 block text-xs">V</span>
                  <span className="text-[10px] font-bold text-slate-800 block">Verificar</span>
                  <span className="text-[9px] text-slate-500">Medir</span>
                </div>
                <div className="p-1.5 bg-emerald-50/70 border border-emerald-200/70 rounded-lg">
                  <span className="font-extrabold text-emerald-800 block text-xs">A</span>
                  <span className="text-[10px] font-bold text-slate-800 block">Actuar</span>
                  <span className="text-[9px] text-slate-500">Mejorar</span>
                </div>
              </div>

              <div className="text-[11px] text-slate-600 bg-slate-50 p-1.5 rounded-lg text-center font-medium">
                Permite a la empresa evaluar resultados y progresar continuamente.
              </div>
            </div>

            {/* ======================================================== */}
            {/* 7. RAMA: BENEFICIOS PARA LA ORGANIZACIÓN (Bottom-Right)   */}
            {/* ======================================================== */}
            <div
              onClick={() => onSelectNode(SATELLITE_NODES[5])}
              onMouseEnter={() => setHoveredNodeId('beneficios')}
              onMouseLeave={() => setHoveredNodeId(null)}
              className={`absolute cursor-pointer transition-all duration-300 -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white border border-emerald-200/80 p-5 shadow-md hover:shadow-lg ${
                hoveredNodeId === 'beneficios' || selectedNodeId === 'beneficios'
                  ? 'border-emerald-500 ring-2 ring-emerald-300 scale-102'
                  : ''
              } ${isNodeMatched(SATELLITE_NODES[5]) ? 'ring-3 ring-amber-400' : ''}`}
              style={{
                left: '1370px',
                top: '750px',
                width: '360px'
              }}
            >
              <div className="flex items-center justify-between pb-3 border-b border-emerald-100 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                    <ConceptIcon name="Users" className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                      Impacto Empresarial
                    </span>
                    <h2 className="text-base font-bold text-slate-900 leading-tight">
                      Beneficios Organizacionales
                    </h2>
                  </div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                  Retorno
                </span>
              </div>

              <ul className="space-y-1.5 text-xs text-slate-700 mb-3">
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Menos errores y reprocesos costosos.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Ahorro sustancial de tiempo y recursos.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Mayor satisfacción y confianza del cliente.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Información confiable para decisiones gerenciales.</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>Incremento de productividad y competitividad.</span>
                </li>
              </ul>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-emerald-700 font-semibold">
                <span>Ver impacto estratégico</span>
                <ExternalLink className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Grid / Reading View */
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {/* Central Highlight Banner */}
          <div
            onClick={() => onSelectNode(CENTRAL_CONCEPT)}
            className="mb-8 cursor-pointer rounded-2xl p-6 text-white shadow-lg transition-transform hover:scale-[1.01]"
            style={{
              background: 'linear-gradient(135deg, #0e7490 0%, #0f766e 50%, #047857 100%)'
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-teal-200 mb-1">
                  Concepto Central Fundacional
                </span>
                <h1 className="text-2xl font-bold tracking-tight">Gestión de la Información</h1>
                <p className="text-sm text-teal-100 mt-1 max-w-2xl">{CENTRAL_CONCEPT.summary}</p>
              </div>
              <button className="self-start sm:self-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-xs font-bold transition-colors shrink-0">
                Ver Detalles Completos
              </button>
            </div>
          </div>

          {/* Grid of the 6 branches */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SATELLITE_NODES.map((node) => {
              const borderStyles = {
                blue: 'border-blue-200 hover:border-blue-400',
                teal: 'border-teal-200 hover:border-teal-400',
                emerald: 'border-emerald-200 hover:border-emerald-400',
                amber: 'border-amber-200 hover:border-amber-400',
                cyan: 'border-cyan-200 hover:border-cyan-400'
              }[node.colorTheme];

              const iconBgStyles = {
                blue: 'bg-blue-100 text-blue-700',
                teal: 'bg-teal-100 text-teal-700',
                emerald: 'bg-emerald-100 text-emerald-700',
                amber: 'bg-amber-100 text-amber-700',
                cyan: 'bg-cyan-100 text-cyan-700'
              }[node.colorTheme];

              return (
                <div
                  key={node.id}
                  onClick={() => onSelectNode(node)}
                  className={`bg-white border ${borderStyles} rounded-2xl p-5 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-xl ${iconBgStyles}`}>
                          <ConceptIcon name={node.icon} className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                            {node.category}
                          </span>
                          <h2 className="text-base font-bold text-slate-900 leading-tight">
                            {node.title}
                          </h2>
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 mb-4 leading-relaxed">{node.summary}</p>

                    <div className="space-y-2 mb-4">
                      {node.keyPoints.slice(0, 3).map((pt, i) => (
                        <div key={i} className="text-xs bg-slate-50 p-2 rounded-lg">
                          <span className="font-bold text-slate-800">{pt.keyword || pt.label}: </span>
                          <span className="text-slate-600">{pt.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                    <span>Enlace: "{node.relationWord}"</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
