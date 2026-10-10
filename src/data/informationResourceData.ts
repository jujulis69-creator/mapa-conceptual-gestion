export interface InformationNode {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  colorName: 'blue' | 'purple' | 'green' | 'orange' | 'turquoise';
  accentColor: string;
  badgeText: string;
  description: string;
  keyPoints: {
    label: string;
    detail: string;
    keyword?: string;
  }[];
  sequenceFlow?: string[];
  icon: string;
}

export const CENTRAL_CONCEPT_INFO = {
  title: "EL RECURSO DE LA INFORMACIÓN",
  subtitle: "Fundamento Estratégico y Motor de las Organizaciones Modernas",
  bookReference: "Diseño de Sistemas de Información: Fundamentos — Capítulo 1",
  description: "Activo vital indispensable que permea toda la estructura empresarial: permite conocer la realidad, coordinar actividades, resolver problemas, mitigar la incertidumbre y fundamentar la toma de decisiones competitivas."
};

export const BRANCHES_DATA: InformationNode[] = [
  {
    id: "branch-1",
    number: "01",
    title: "Introducción",
    subtitle: "Importancia como Recurso Fundamental",
    colorName: "blue",
    accentColor: "#3b82f6",
    badgeText: "Pilar Vital",
    icon: "Layers",
    description: "La información es un recurso fundamental e indispensable para la supervivencia, dinamismo y éxito de cualquier organización contemporánea.",
    keyPoints: [
      {
        label: "Recurso fundamental",
        detail: "Tan crucial como el capital, los materiales o el talento humano.",
        keyword: "Activo Crítico"
      },
      {
        label: "Conocer situaciones",
        detail: "Permite diagnosticar con certeza el estado interno y el contexto externo.",
        keyword: "Diagnóstico"
      },
      {
        label: "Coordinar actividades",
        detail: "Sincroniza y alinea las funciones de las distintas áreas de trabajo.",
        keyword: "Sincronización"
      },
      {
        label: "Resolver problemas",
        detail: "Provee la base analítica objetiva para subsanar fallas y cuellos de botella.",
        keyword: "Solución"
      },
      {
        label: "Reducir la incertidumbre",
        detail: "Mitiga riesgos operacionales y apoya firmemente la toma de decisiones.",
        keyword: "Certeza"
      }
    ]
  },
  {
    id: "branch-2",
    number: "02",
    title: "Panorama General de la Información",
    subtitle: "Datos, Calidad y Transformación de Valor",
    colorName: "purple",
    accentColor: "#a855f7",
    badgeText: "Flujo de Datos",
    icon: "Database",
    description: "Transformación secuencial desde elementos en bruto hasta información dotada de significado, contexto y calidad superior para decidir.",
    keyPoints: [
      {
        label: "Datos",
        detail: "Elementos brutos que adquieren significado al organizarse dentro de un contexto.",
        keyword: "Materia Prima"
      },
      {
        label: "Información",
        detail: "Datos procesados y presentados de forma significativa y útil para el receptor.",
        keyword: "Valor Agregado"
      },
      {
        label: "Utilidad y necesidad",
        detail: "Permite comprender realidades y elegir alternativas para planear y controlar.",
        keyword: "Dirección"
      },
      {
        label: "Evolución tecnológica",
        detail: "Creciente protagonismo del procesamiento automatizado en la gestión empresarial.",
        keyword: "Innovación"
      },
      {
        label: "Calidad informativa",
        detail: "Exactitud (corrección), Oportunidad (tiempo preciso) y Relevancia (utilidad directa).",
        keyword: "3 Pilares Calidad"
      }
    ],
    sequenceFlow: ["DATOS", "ORGANIZACIÓN Y CONTEXTO", "INFORMACIÓN ÚTIL", "TOMA DE DECISIONES"]
  },
  {
    id: "branch-3",
    number: "03",
    title: "La Información y la Organización",
    subtitle: "Vínculo Humano, Estructural y Decisional",
    colorName: "green",
    accentColor: "#10b981",
    badgeText: "Integración",
    icon: "Users",
    description: "La información actúa como el tejido conector que enlaza a las personas, los procesos operativos y los distintos estamentos jerárquicos.",
    keyPoints: [
      {
        label: "Áreas y coordinación",
        detail: "Enlaza y armoniza finanzas, mercadeo, producción y talento humano.",
        keyword: "Interconexión"
      },
      {
        label: "Tipos de trabajadores",
        detail: "Operativos (ejecutan labores con datos rutinarios) y De Información (analizan y deciden).",
        keyword: "Roles"
      },
      {
        label: "Cultura y activos",
        detail: "Define cómo se comparte el conocimiento; actúa como activo intangible de alto impacto.",
        keyword: "Cultura"
      },
      {
        label: "Interesados (Stakeholders)",
        detail: "Responde a clientes, proveedores, socios y entes reguladores.",
        keyword: "Impacto"
      },
      {
        label: "Niveles gerenciales",
        detail: "Operativo (detallada/corto plazo), Táctico (resumida/mediano) y Estratégico (prospectiva/largo plazo).",
        keyword: "Jerarquía"
      }
    ]
  },
  {
    id: "branch-4",
    number: "04",
    title: "Factores Clave de las Organizaciones",
    subtitle: "Determinantes de los Requerimientos de Información",
    colorName: "orange",
    accentColor: "#f97316",
    badgeText: "Contexto",
    icon: "Settings",
    description: "Cada factor estructural y de gestión determina de forma específica la cantidad, complejidad y frecuencia del flujo informativo requerido.",
    keyPoints: [
      {
        label: "Naturaleza y categoría",
        detail: "El tipo de entidad (industrial, comercial, servicios) define el contenido de sus datos.",
        keyword: "Giro de Negocio"
      },
      {
        label: "Tamaño empresarial",
        detail: "Mayor volumen y escala demandan sistemas de información más sofisticados.",
        keyword: "Escala"
      },
      {
        label: "Estructura organizacional",
        detail: "Define la autoridad, responsabilidades, cargos y canales formales de reporte.",
        keyword: "Organigrama"
      },
      {
        label: "Estilo gerencial",
        detail: "La forma de dirigir y administrar condiciona la fluidez y apertura del flujo informativo.",
        keyword: "Liderazgo"
      },
      {
        label: "Planeación y control",
        detail: "Información para formular metas a futuro, auditar resultados y corregir desvíos.",
        keyword: "Gobernanza"
      }
    ]
  },
  {
    id: "branch-5",
    number: "05",
    title: "La Información como Arma Competitiva",
    subtitle: "Diferenciación, Productividad y Liderazgo",
    colorName: "turquoise",
    accentColor: "#14b8a6",
    badgeText: "Estrategia",
    icon: "Award",
    description: "El uso inteligente y oportuno de la información otorga una ventaja competitiva sostenible que distingue a la empresa en su mercado.",
    keyPoints: [
      {
        label: "Planeación estratégica",
        detail: "Identifica oportunidades del entorno, anticipa amenazas y define metas de liderazgo.",
        keyword: "Visión"
      },
      {
        label: "Diferenciación",
        detail: "Permite diseñar productos y servicios únicos con mayor valor percibido por el cliente.",
        keyword: "Distinción"
      },
      {
        label: "Productividad",
        detail: "Optimiza los procesos operativos y maximiza el aprovechamiento de recursos.",
        keyword: "Eficiencia"
      },
      {
        label: "Competitividad",
        detail: "Respuestas ágiles a las exigencias dinámicas del mercado y decisiones asertivas.",
        keyword: "Posicionamiento"
      },
      {
        label: "Tecnología informática",
        detail: "Facilita la captura, procesamiento masivo y explotación ágil de la información.",
        keyword: "Plataforma TI"
      }
    ],
    sequenceFlow: ["INFORMACIÓN ÚTIL", "MEJORES DECISIONES", "PRODUCTIVIDAD", "VENTAJA COMPETITIVA"]
  }
];
