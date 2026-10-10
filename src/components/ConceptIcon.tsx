import React from 'react';
import {
  Layers,
  FolderKanban,
  FileText,
  Settings,
  ShieldCheck,
  BarChart3,
  RotateCw,
  Users,
  CheckCircle2,
  HelpCircle,
  Award,
  Zap,
  TrendingUp,
  Sliders,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ConceptIconProps {
  name: string;
  className?: string;
}

export const ConceptIcon: React.FC<ConceptIconProps> = ({ name, className = 'w-5 h-5' }) => {
  switch (name) {
    case 'Layers':
      return <Layers className={className} />;
    case 'FolderKanban':
      return <FolderKanban className={className} />;
    case 'FileText':
      return <FileText className={className} />;
    case 'Settings':
      return <Settings className={className} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'RotateCw':
      return <RotateCw className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'CheckCircle2':
      return <CheckCircle2 className={className} />;
    case 'Award':
      return <Award className={className} />;
    case 'Zap':
      return <Zap className={className} />;
    case 'TrendingUp':
      return <TrendingUp className={className} />;
    case 'Sliders':
      return <Sliders className={className} />;
    case 'Sparkles':
      return <Sparkles className={className} />;
    case 'ArrowRight':
      return <ArrowRight className={className} />;
    default:
      return <HelpCircle className={className} />;
  }
};
