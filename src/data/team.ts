import danielPhoto from "@/assets/team/daniel-camhaji.jpg";
import rogelioPhoto from "@/assets/team/rogelio-moo.jpg";
import karenPhoto from "@/assets/team/karen-rosado.jpg";
import marlonPhoto from "@/assets/team/marlon-chavez.jpg";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  /** Short tagline shown under the role (optional) */
  tagline?: string;
  photo: string;
  /** Full biography rendered inside the modal. Supports multiple paragraphs (separated by \n\n). */
  bio: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  /** Logical grouping used by the Nosotros page */
  group: "direccion" | "operacion";
}

export const team: TeamMember[] = [
  {
    id: "daniel-camhaji",
    name: "Daniel Camhaji",
    role: "Socio Fundador y Director",
    tagline: "Estrategia fiscal y dirección general",
    photo: danielPhoto,
    bio:
      "Daniel Camhaji Guzmán es Contador Público y Estratega Financiero egresado del Instituto Tecnológico Autónomo de México (ITAM), con una trayectoria profesional enfocada en consultoría fiscal, estrategia financiera y asesoría integral para empresas nacionales y extranjeras. Inició su carrera profesional en la reconocida firma Chevez, Ruiz, Zamarripa y Cía. en la Ciudad de México, donde se desempeñó como consultor fiscal. Esta etapa representó el inicio de su formación técnica y profesional, permitiéndole desarrollar una sólida metodología de trabajo y una visión orientada a la excelencia, disciplina y atención al detalle, valores que continúan siendo parte fundamental de su ejercicio profesional.\n\nPosteriormente, consolidó su experiencia y criterio profesional en Bettinger Asesores, S.C., donde ocupó la posición de Senior de Consultoría Fiscal, participando en el análisis y atención de asuntos fiscales y financieros para empresas de distintos sectores. Esta experiencia fortaleció su capacidad estratégica y su enfoque integral en materia contable, fiscal y corporativa.\n\nActualmente es Socio Fundador y Director General de Camhaji Consultores, Firma desde la cual lidera las distintas áreas de práctica y coordina un equipo enfocado en ofrecer soluciones especializadas, personalizadas y alineadas a las necesidades particulares de cada cliente. Su enfoque profesional se caracteriza por brindar un servicio cercano, estratégico y orientado a resultados, priorizando siempre la confianza, el cumplimiento y la generación de valor para las empresas que asesora.\n\nComplementa su formación profesional con diversos diplomados y programas de actualización especializada en materia fiscal, financiera, contable y de seguridad social, incluyendo capacitación en gobierno corporativo, reformas fiscales, NIF's, obligaciones laborales, INFONAVIT, ISR de sueldos e inteligencia artificial aplicada a contabilidad y finanzas. Asimismo, cuenta con un diplomado en Seguridad Social por parte del Colegio de Contadores Públicos de Cancún del cual es socio activo, manteniendo una preparación constante frente a los cambios regulatorios y las nuevas tendencias del entorno empresarial.",
    group: "direccion",
  },
  {
    id: "rogelio-moo",
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente de Contabilidad",
    tagline: "Operación y supervisión contable",
    photo: rogelioPhoto,
    bio:
      "El C.P. Rogelio Ruiz cuenta con más de 10 años de experiencia profesional en las áreas de contabilidad, auditoría y cumplimiento fiscal, desarrollando su trayectoria en firmas especializadas y grupos empresariales de alto nivel.\n\nInició su trayectoria profesional en Mancera, S.C., firma miembro de EY, donde adquirió bases sólidas en auditoría, análisis financiero y revisión de información contable bajo estándares profesionales de alta exigencia.\n\nPosteriormente, continuó su desarrollo profesional en AGD Global, S.C., colaborando durante más de 6 años en el área de auditoría, etapa en la que consolidó su formación técnica y forjó su criterio profesional en materia contable, financiera y fiscal, participando en procesos de auditoría y análisis de información financiera para distintos sectores empresariales.\n\nMás adelante, se desempeñó durante 6 años como Contador General en Original Group, adquiriendo amplia experiencia en administración financiera, supervisión contable, control interno y cumplimiento de obligaciones fiscales. Durante esta etapa fortaleció además habilidades de liderazgo, gestión de equipos de trabajo y administración orientada al cumplimiento de objetivos y obtención de resultados, participando activamente en la mejora de procesos y en la generación de información estratégica para la toma de decisiones.\n\nActualmente, lidera el área contable de Camhaji Consultores, enfocándose en garantizar información financiera confiable y oportuna, optimizar procesos internos y brindar atención profesional y personalizada a cada cliente, bajo un enfoque de eficiencia, responsabilidad y mejora continua.",
    group: "direccion",
  },
  {
    id: "karen-rosado",
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    tagline: "Cuentas por pagar, cobrar y RRHH",
    photo: karenPhoto,
    bio:
      "La C.P. Karen Rosado Ortiz es egresada de la Licenciatura en Contabilidad por la Universidad Autónoma de Campeche, contando con experiencia profesional en las áreas contable, administrativa y de control financiero. Inició su trayectoria profesional en la firma Alcocer Cámara y Asociados, desempeñándose en el área de negocios, donde fortaleció sus conocimientos en contabilidad, administración y operación empresarial, participando en procesos orientados al control y organización financiera de distintos clientes.\n\nCuenta además con experiencia en control de obra, participando en la supervisión y seguimiento de procesos administrativos y financieros relacionados con proyectos de construcción, desarrollando habilidades en coordinación operativa, control presupuestal y seguimiento de recursos. A lo largo de su desarrollo profesional, ha consolidado una sólida capacidad en gestión organizacional, administración de procesos y control interno, destacándose por su enfoque analítico, orden administrativo y atención al detalle.",
    group: "operacion",
  },
  {
    id: "marlon-chavez",
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor de Nómina y Facturación",
    tagline: "IMSS, Infonavit y CFDI de nómina",
    photo: marlonPhoto,
    bio:
      "Marlon Rafael Chávez Sánchez es Licenciado en Administración de Empresas y cuenta con más de 15 años de experiencia profesional. Inició su trayectoria en el sector financiero dentro de BBVA como Ejecutivo de Cuenta, desarrollando sólidas habilidades en atención a clientes, administración y gestión financiera.\n\nPosteriormente, ha consolidado una trayectoria de más de 10 años de especialización en las áreas de nómina y seguridad social, enfocándose en la correcta administración, control y cumplimiento de obligaciones laborales y patronales. Su experiencia le ha permitido participar activamente en la implementación y supervisión de procesos orientados a garantizar eficiencia operativa, cumplimiento normativo y atención puntual a las necesidades de cada cliente.\n\nSu perfil profesional se distingue por una ejecución disciplinada, enfoque analítico y orientación a resultados, aportando confianza, orden y estabilidad en la administración laboral de las empresas que asesora.",
    group: "operacion",
  },
];