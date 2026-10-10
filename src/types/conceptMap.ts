export type BranchId =
  | 'central'
  | 'sistema-documental'
  | 'sgc'
  | 'caracteristicas'
  | 'relacion'
  | 'beneficios'
  | 'phva';

export interface ConceptItem {
  label: string;
  detail: string;
  keyword?: string;
  iconName?: string;
}

export interface ConceptNode {
  id: BranchId;
  title: string;
  subtitle: string;
  category: string;
  colorTheme: 'teal' | 'blue' | 'emerald' | 'amber' | 'cyan';
  icon: string;
  relationWord: string; // "se basa en", "permite", "controla", "contribuye a", "mejora"
  summary: string;
  keyPoints: ConceptItem[];
  practicalExample?: {
    title: string;
    description: string;
    highlight: string;
  };
  speakerScript: string; // Guión sugerido para la exposición académica
  tags: string[];
}

export interface ConnectionLink {
  from: BranchId;
  to: BranchId;
  label: string;
  type: 'primary' | 'feedback' | 'synergy';
}

export interface CaseStep {
  step: number;
  stage: string;
  system: 'Sistema Documental' | 'Gestión de la Información' | 'SGC' | 'Mejora Continua';
  action: string;
  docOrTool: string;
  impact: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  conceptRef: string;
}
