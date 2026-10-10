import { ConceptNode, ConnectionLink, CaseStep, QuizQuestion } from '../types/conceptMap';

export const CENTRAL_CONCEPT: ConceptNode = {
  id: 'central',
  title: 'Gestión de la Información',
  subtitle: 'Núcleo Estratégico y Base Operativa',
  category: 'Concepto Central',
  colorTheme: 'cyan',
  icon: 'Layers',
  relationWord: 'articula y nutre a',
  summary: 'Proceso de recopilar, organizar, almacenar, proteger, actualizar y compartir información útil para la organización.',
  speakerScript:
    'Buenos días/tardes. En el centro de todo sistema organizacional exitoso se encuentra la Gestión de la Información. No es simplemente archivar papeles o guardar archivos en carpetas; es el proceso activo de capturar, ordenar, resguardar y transformar los datos en conocimiento útil para tomar decisiones oportunas y responder con agilidad a los clientes.',
  tags: ['Gestión', 'Información', 'Conocimiento', 'Toma de decisiones', 'Ventaja competitiva'],
  keyPoints: [
    {
      keyword: '¿Qué es?',
      label: 'Ciclo integral del dato',
      detail: 'Recopilar, clasificar, almacenar, resguardar, actualizar y transferir información valiosa.'
    },
    {
      keyword: '¿Para qué sirve?',
      label: 'Facilitador diario',
      detail: 'Agiliza actividades cotidianas, optimiza la comunicación y sustenta la toma de decisiones.'
    },
    {
      keyword: 'Importancia',
      label: 'Activo intangible',
      detail: 'Conserva el know-how (saber hacer) de la empresa y convierte datos brutos en mejoras tangibles.'
    },
    {
      keyword: 'Ventaja competitiva',
      label: 'Agilidad y adaptación',
      detail: 'Incrementa la eficiencia operativa, satisface expectativas del cliente y anticipa cambios de mercado.'
    }
  ]
};

export const SATELLITE_NODES: ConceptNode[] = [
  {
    id: 'sistema-documental',
    title: 'Sistema Documental',
    subtitle: 'Estructura, Orden y Evidencia',
    category: 'Pilar Operativo',
    colorTheme: 'blue',
    icon: 'FolderKanban',
    relationWord: 'se basa en',
    summary: 'Conjunto estructurado de documentos, formatos y registros que normalizan y custodian el quehacer diario de la empresa.',
    speakerScript:
      'A la izquierda tenemos el Sistema Documental. Funciona como la memoria formal y la guía operativa de la organización. A través de políticas, manuales, procedimientos e instructivos, define con precisión quién hace qué, cómo y cuándo, garantizando que el trabajo se ejecute con el mismo estándar de calidad sin depender de la improvisación.',
    tags: ['Documentos', 'Procedimientos', 'Registros', 'Control documental', 'Seguridad'],
    practicalExample: {
      title: 'Procedimiento Estandarizado de Operación',
      description: 'Un instructivo ilustrado y vigente permite que cualquier operario realice el ensamble o despacho siguiendo idénticos pasos, reduciendo mermas a cero.',
      highlight: 'Uniformidad operativa y eliminación de la improvisación.'
    },
    keyPoints: [
      {
        keyword: 'Documentos clave',
        label: 'Jerarquía documental',
        detail: 'Políticas, manuales de calidad, procedimientos operativos, instructivos técnicos, formatos y registros de evidencia.'
      },
      {
        keyword: 'Creación responsable',
        label: 'Origen normado',
        detail: 'Determina qué información se requiere generar, para qué propósito y quién es el autor responsable.'
      },
      {
        keyword: 'Organización & Búsqueda',
        label: 'Codificación y archivo',
        detail: 'Estructura y cataloga la información por áreas y procesos para acceso veloz en segundos.'
      },
      {
        keyword: 'Control documental',
        label: 'Gobernanza de versiones',
        detail: 'Identifica códigos, números de versión, firmas de aprobación, fechas y bitácora de cambios.'
      },
      {
        keyword: 'Actualización continua',
        label: 'Vigencia garantizada',
        detail: 'Retira y anula documentos obsoletos para impedir la ejecución con especificaciones caducadas.'
      },
      {
        keyword: 'Conservación & Custodia',
        label: 'Seguridad de la información',
        detail: 'Salvaguarda la integridad física y digital ante pérdidas, ciberataques, extravíos o accesos no autorizados.'
      }
    ]
  },
  {
    id: 'sgc',
    title: 'Sistema de Gestión de la Calidad',
    subtitle: 'Dirección, Procesos y Satisfacción',
    category: 'Marco Estratégico',
    colorTheme: 'teal',
    icon: 'Settings',
    relationWord: 'utiliza y orienta a',
    summary: 'Metodología sistemática para dirigir y coordinar una organización hacia la conformidad de requisitos y la excelencia con el cliente.',
    speakerScript:
      'En el pilar superior derecho se encuentra el Sistema de Gestión de la Calidad (SGC), generalmente respaldado por la norma internacional ISO 9001. Su propósito supremo no es llenar formularios, sino satisfacer las expectativas del cliente a través de procesos controlados, medibles y en constante evolución.',
    tags: ['ISO 9001', 'Enfoque al cliente', 'Procesos', 'Evaluación', 'Conformidad'],
    practicalExample: {
      title: 'Auditoría y Certificación ISO 9001',
      description: 'Una empresa audita trimestralmente sus procesos de atención y entrega. Al contar con un SGC maduro, detecta desviaciones tempranas antes de que impacten al cliente final.',
      highlight: 'Confianza y reconocimiento en mercados globales.'
    },
    keyPoints: [
      {
        keyword: 'Objetivo central',
        label: 'Conformidad y valor',
        detail: 'Entregar productos y servicios que superen las especificaciones pactadas y los requisitos legales.'
      },
      {
        keyword: 'Enfoque al cliente',
        label: 'Prioridad máxima',
        detail: 'Comprender necesidades actuales y futuras, medir la percepción del servicio y canalizar retroalimentación.'
      },
      {
        keyword: 'Gestión por procesos',
        label: 'Visión sistémica',
        detail: 'Entradas, actividades secuenciales, salidas, recursos y dueños de proceso claramente definidos.'
      },
      {
        keyword: 'Evaluación y métricas',
        label: 'Control con datos',
        detail: 'Monitoreo de indicadores clave (KPIs), auditorías internas, tasa de no conformidades e índices de quejas.'
      },
      {
        keyword: 'Mejora continua',
        label: 'Evolución permanente',
        detail: 'Solución sistemática de causas raíz para optimizar tiempos, reducir fallas y elevar estándares.'
      },
      {
        keyword: 'Norma de referencia',
        label: 'Estándar ISO 9001',
        detail: 'Marco globalmente reconocido que fija requisitos auditables para asegurar la calidad.'
      }
    ]
  },
  {
    id: 'caracteristicas',
    title: 'Cualidades de la Información',
    subtitle: 'Atributos Esenciales para la Confiabilidad',
    category: 'Estándar de Calidad del Dato',
    colorTheme: 'emerald',
    icon: 'ShieldCheck',
    relationWord: 'garantiza',
    summary: 'Criterios rigurosos que determinan si la información es apta para la operación diaria y la toma de decisiones estratégicas.',
    speakerScript:
      'Para que un sistema documental y un SGC funcionen, la información debe poseer atributos indispensables. Si los datos son imprecisos, obsoletos o inaccesibles, las decisiones fallan. Aquí analizamos las 7 características que transforman un dato común en un activo empresarial confiable.',
    tags: ['Exactitud', 'Disponibilidad', 'Trazabilidad', 'Integridad', 'Confidencialidad'],
    keyPoints: [
      {
        keyword: 'Exactitud',
        label: 'Fidelidad y rigor',
        detail: 'Datos precisos, validados y libres de sesgos o cálculos erróneos.'
      },
      {
        keyword: 'Disponibilidad',
        label: 'Acceso oportuno',
        detail: 'Disponible al instante para quien la necesita en el momento crítico de la operación.'
      },
      {
        keyword: 'Actualización',
        label: 'Vigencia activa',
        detail: 'Contenido revisado periódicamente acorde con cambios normativos o tecnológicos.'
      },
      {
        keyword: 'Integridad',
        label: 'Completitud y blindaje',
        detail: 'Información sin mutilaciones, inalterada y protegida contra manipulaciones maliciosas.'
      },
      {
        keyword: 'Trazabilidad',
        label: 'Rastreo histórico',
        detail: 'Capacidad de reconstruir la cronología completa: autor, modificaciones, fecha y lote asociado.'
      },
      {
        keyword: 'Confidencialidad',
        label: 'Acceso segmentado',
        detail: 'Protección de datos sensibles y propiedad intelectual según perfiles de usuario.'
      },
      {
        keyword: 'Claridad',
        label: 'Lenguaje amigable',
        detail: 'Redacción concisa, diagramas claros y formatos comprensibles para cualquier operador.'
      }
    ]
  },
  {
    id: 'relacion',
    title: 'Sinergia e Interacción Sistémica',
    subtitle: 'Cómo Trabajan Juntos Ambos Sistemas',
    category: 'Vínculo Estratégico',
    colorTheme: 'cyan',
    icon: 'BarChart3',
    relationWord: 'conecta y retroalimenta',
    summary: 'La simbiosis indivisible: el Sistema Documental organiza la información y el SGC la convierte en acción y resultados.',
    speakerScript:
      'Llegamos a la articulación medular: la relación entre ambos sistemas. El Sistema Documental actúa como el esqueleto que sostiene y norma los datos; el SGC es el músculo que utiliza esos datos para planificar, medir y optimizar. Ninguno puede subsistir sin el otro: un SGC sin documentos es pura intención verbal; un sistema documental sin SGC es un cementerio de papeles inertes.',
    tags: ['Sinergia', 'Evidencias', 'Indicadores', 'Toma de decisiones', 'Auditoría'],
    practicalExample: {
      title: 'Caso de Gestión y Reacción Rápida',
      description: 'Una compañía detecta un repunte de quejas por entregas demoradas. Consulta los registros de despacho (Sistema Documental), analiza los tiempos (SGC), rediseña la ruta logística y capacita a los choferes.',
      highlight: 'Sinergia directa entre registro documental y mejora de servicio.'
    },
    keyPoints: [
      {
        keyword: 'Organización & Custodia',
        label: 'El Sistema Documental estructura',
        detail: 'Establece manuales, formatos de inspección y canales de archivo seguro.'
      },
      {
        keyword: 'Uso & Dirección',
        label: 'El SGC acciona la información',
        detail: 'Emplea los datos documentados para planificar recursos y monitorear la calidad.'
      },
      {
        keyword: 'Evidencias tangibles',
        label: 'Registros como prueba auditada',
        detail: 'Demuestran objetivamente ante clientes y auditores que los controles se realizaron.'
      },
      {
        keyword: 'Detección de mejoras',
        label: 'Indicadores como sensores',
        detail: 'Métricas de desempeño alertan cuellos de botella antes de que causen pérdidas financieras.'
      },
      {
        keyword: 'Decisiones fundamentadas',
        label: 'Hechos por encima de opiniones',
        detail: 'La dirección invierte y corrige con base en datos históricos verídicos y no en conjeturas.'
      }
    ]
  },
  {
    id: 'phva',
    title: 'Ciclo de Mejora Continua (PHVA)',
    subtitle: 'El Motor de Transformación Dinámica',
    category: 'Ciclo Metodológico',
    colorTheme: 'amber',
    icon: 'RotateCw',
    relationWord: 'mejora mediante',
    summary: 'Espiral de evolución sistemática basada en las cuatro fases del ciclo de Deming: Planear, Hacer, Verificar y Actuar.',
    speakerScript:
      'Para que la calidad nunca sea estática, implementamos el ciclo PHVA (Planear, Hacer, Verificar, Actuar). Este circuito alimenta y revitaliza constantemente tanto los documentos como los procesos del SGC, asegurando que cada lección aprendida quede formalizada para siempre.',
    tags: ['Planear', 'Hacer', 'Verificar', 'Actuar', 'Ciclo Deming'],
    keyPoints: [
      {
        keyword: 'P · Planear',
        label: 'Diagnóstico y Metas',
        detail: 'Identificar necesidades del cliente, riesgos operativos, definir objetivos medibles y redactar planes.'
      },
      {
        keyword: 'H · Hacer',
        label: 'Ejecución Disciplinada',
        detail: 'Desarrollar las actividades siguiendo al pie de la letra los procedimientos aprobados y registrar datos.'
      },
      {
        keyword: 'V · Verificar',
        label: 'Medición & Auditoría',
        detail: 'Comparar resultados reales vs metas mediante indicadores, auditorías y revisión de registros.'
      },
      {
        keyword: 'A · Actuar',
        label: 'Estandarización & Ajuste',
        detail: 'Corregir desvíos, estandarizar nuevas mejores prácticas en el Sistema Documental y reiniciar el ciclo.'
      }
    ]
  },
  {
    id: 'beneficios',
    title: 'Beneficios para la Organización',
    subtitle: 'Impacto Tangible y Retorno de Calidad',
    category: 'Resultados de Negocio',
    colorTheme: 'emerald',
    icon: 'Users',
    relationWord: 'contribuye a',
    summary: 'Beneficios cualitativos y cuantitativos que consolidan la competitividad, rentabilidad y reputación de la empresa.',
    speakerScript:
      'Finalmente, ¿cuál es el verdadero beneficio de implementar esta disciplina de gestión de información? No es solo obtener un certificado en la pared. Es lograr organizaciones ágiles, donde se cometen menos errores, se aprovechan mejor los presupuestos, los clientes confían y los equipos trabajan en armonía y sin estrés.',
    tags: ['Eficiencia', 'Reducción de costos', 'Confianza', 'Competitividad', 'Ahorro'],
    keyPoints: [
      {
        keyword: 'Cero reprocesos',
        label: 'Menos errores y mermas',
        detail: 'Minimiza la repetición de tareas fallidas y evita desperdicio de materias primas.'
      },
      {
        keyword: 'Optimización de recursos',
        label: 'Ahorro de tiempo y dinero',
        detail: 'Flujos de trabajo despejados y tiempos de ciclo reducidos en todas las áreas.'
      },
      {
        keyword: 'Coordinación inter-áreas',
        label: 'Comunicación transparente',
        detail: 'Elimina silos departamentales; compras, ventas y producción comparten la misma información.'
      },
      {
        keyword: 'Control gerencial',
        label: 'Visibilidad total',
        detail: 'Los líderes conocen el estado de cada proceso sin necesidad de consultar rumorología.'
      },
      {
        keyword: 'Fidelización del cliente',
        label: 'Confianza y satisfacción',
        detail: 'Entregas puntuales y de calidad uniforme generan lealtad y recomendaciones comerciales.'
      },
      {
        keyword: 'Cumplimiento normativo',
        label: 'Blindaje legal y auditorías',
        detail: 'Facilita auditorías de certificación ISO y reduce riesgos de sanciones regulatorias.'
      },
      {
        keyword: 'Competitividad sostenible',
        label: 'Resiliencia ante el mercado',
        detail: 'Capacidad de adaptarse velozmente a fluctuaciones de la industria y demandas de nuevos clientes.'
      }
    ]
  }
];

export const CONNECTIONS: ConnectionLink[] = [
  {
    from: 'central',
    to: 'sistema-documental',
    label: 'se estructura y formaliza en',
    type: 'primary'
  },
  {
    from: 'central',
    to: 'sgc',
    label: 'sustenta las decisiones y procesos del',
    type: 'primary'
  },
  {
    from: 'central',
    to: 'caracteristicas',
    label: 'debe cumplir con',
    type: 'primary'
  },
  {
    from: 'sistema-documental',
    to: 'relacion',
    label: 'aporta evidencias objetivas a',
    type: 'synergy'
  },
  {
    from: 'sgc',
    to: 'relacion',
    label: 'define requerimientos para',
    type: 'synergy'
  },
  {
    from: 'relacion',
    to: 'phva',
    label: 'impulsa el ciclo continuo de',
    type: 'primary'
  },
  {
    from: 'phva',
    to: 'beneficios',
    label: 'genera y maximiza',
    type: 'primary'
  },
  {
    from: 'beneficios',
    to: 'central',
    label: 'retroalimenta el valor de',
    type: 'feedback'
  }
];

export const PRACTICAL_CASE_STEPS: CaseStep[] = [
  {
    step: 1,
    stage: 'Recepción del Incidente',
    system: 'Gestión de la Información',
    action: 'Un cliente reporta que un lote de productos llegó con etiquetas de especificación borrosas.',
    docOrTool: 'Canal de Soporte / Registro Digital REC-014',
    impact: 'La información se captura de inmediato, sin perder detalles clave ni fechas.'
  },
  {
    step: 2,
    stage: 'Apertura de Registro & Trazabilidad',
    system: 'Sistema Documental',
    action: 'El responsable de Calidad abre el formato oficial "Reporte de No Conformidad" y rastrea el lote con la hoja de ruta de producción.',
    docOrTool: 'Formato FOR-CAL-042 (Control de No Conformidades)',
    impact: 'Se identifica exactamente la máquina impresora, el turno de trabajo y el operador del lote.'
  },
  {
    step: 3,
    stage: 'Análisis de Causa Raíz',
    system: 'SGC',
    action: 'El equipo de calidad aplica un análisis de los 5 Por Qués y diagrama de causa-efecto con indicadores de proceso.',
    docOrTool: 'Herramienta de Calidad ISO 9001:2015 (Cláusula 10.2)',
    impact: 'Se descubre que el tipo de tinta utilizado no era compatible con la nueva temperatura del secador.'
  },
  {
    step: 4,
    stage: 'Actualización Documental & Capacitación',
    system: 'Sistema Documental',
    action: 'Se modifica el "Instructivo de Impresión de Empaque" a su versión 3.0, especificando la temperatura y tinta exacta, archivando la v2.0 como obsoleta.',
    docOrTool: 'Instructivo INS-PROD-019 v3.0 con firmas de aprobación',
    impact: 'Se previene que cualquier otro operador vuelva a cometer el mismo error en el futuro.'
  },
  {
    step: 5,
    stage: 'Verificación del Ciclo PHVA',
    system: 'Mejora Continua',
    action: 'A los 30 días se audita el nuevo lote y se encuesta al cliente, confirmando 100% de satisfacción y cero defectos.',
    docOrTool: 'Informe de Eficacia de Acción Correctiva INF-EVAL-088',
    impact: 'La empresa cerró la queja con éxito, retuvo al cliente y elevó su estándar operativo.'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Por qué la Gestión de la Información se considera la base tanto del Sistema Documental como del SGC?',
    options: [
      'Porque solo consiste en comprar computadoras más veloces.',
      'Porque transforma datos aislados en conocimiento útil, permitiendo controlar documentos y fundamentar decisiones de calidad.',
      'Porque la norma ISO exige imprimir obligatoriamente todos los correos electrónicos.',
      'Porque elimina la necesidad de contar con personal en el área de operaciones.'
    ],
    correctIndex: 1,
    explanation: 'La Gestión de la Información es el cimiento estratégico: asegura que los datos sean recopilados, organizados y utilizados para estandarizar procesos y orientar las mejoras del SGC.',
    conceptRef: 'Gestión de la Información'
  },
  {
    id: 2,
    question: '¿Cuál es la función primordial del "Control Documental" dentro del Sistema Documental?',
    options: [
      'Cobrar multas a los empleados que pierdan una hoja de papel.',
      'Garantizar que solo existan copias impresas bajo llave.',
      'Identificar versiones vigentes, fechas, autores y retirar documentos obsoletos para evitar trabajar con información errónea.',
      'Reemplazar todas las auditorías de calidad por inspecciones visuales.'
    ],
    correctIndex: 2,
    explanation: 'El control documental previene uno de los errores más costosos: que los operarios ejecuten tareas con instructivos o especificaciones caducadas.',
    conceptRef: 'Sistema Documental'
  },
  {
    id: 3,
    question: 'En el ciclo de mejora continua PHVA, ¿qué ocurre durante la fase "Verificar"?',
    options: [
      'Se redacta desde cero la visión de la empresa.',
      'Se revisan los resultados obtenidos, indicadores y registros para contrastarlos con los objetivos planificados.',
      'Se ejecutan las tareas sin importar los costos.',
      'Se despiden a los responsables de las no conformidades.'
    ],
    correctIndex: 1,
    explanation: 'La fase "Verificar" (Check) compara el desempeño real medido contra los objetivos planificados para detectar brechas de mejora.',
    conceptRef: 'Ciclo PHVA'
  },
  {
    id: 4,
    question: '¿Qué característica de la información permite rastrear el origen, modificaciones e historial de un documento o lote?',
    options: [
      'Trazabilidad',
      'Confidencialidad',
      'Brevedad',
      'Elasticidad'
    ],
    correctIndex: 0,
    explanation: 'La trazabilidad es la propiedad que permite reconstruir la historia, aplicación o localización de un producto o documento a través de registros.',
    conceptRef: 'Cualidades de la Información'
  },
  {
    id: 5,
    question: '¿Cuál es la relación de sinergia entre el Sistema Documental y el Sistema de Gestión de la Calidad?',
    options: [
      'Son dos sistemas rivales que compiten por el presupuesto de la empresa.',
      'El sistema documental estructura y controla los registros; el SGC utiliza esa información objetiva para tomar decisiones y mejorar los procesos.',
      'El SGC sustituye por completo al sistema documental haciéndolo innecesario.',
      'Solo se relacionan una vez al año cuando llega el auditor externo.'
    ],
    correctIndex: 1,
    explanation: 'El sistema documental es el soporte probatorio y estructurador, mientras que el SGC es el marco que dirige las operaciones y la mejora continua.',
    conceptRef: 'Sinergia e Interacción Sistémica'
  }
];
