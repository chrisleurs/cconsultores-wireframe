import type { Lang } from "./lang";

export interface NominaContent {
  seo: { title: string; description: string };
  jsonLd: { name: string; description: string };
  bcServices: string; bcCurrent: string;
  heroLabel: string; heroH1: string; heroIntro: string;
  costoLabel: string; costoTitle: string; costoP1: string; costoP2: string; costoP3: string;
  splitLabel: string; splitTitle: string; splitText: string;
  incluyeLabel: string; incluyeTitle: string;
  incluye: { title: string; desc: string }[];
  espLabel: string; espTitle: string; espRole: string; espP1: string; espP2: string; espP3: string;
  bandLabel: string; bandText: string;
  faqLabel: string; faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaLabel: string; ctaTitle: string; ctaIntro: string; ctaBtn: string;
}

export function getNominaContent(lang: Lang): NominaContent {
  if (lang === "en") {
    return {
      seo: { title: "Business Payroll in Cancún | Camhaji Consultores", description: "Business payroll in Cancún: payroll calculation, IMSS, Infonavit and payroll CFDI without errors or delays." },
      jsonLd: { name: "Business Payroll in Cancún", description: "Integrated payroll service in Cancún: calculation, IMSS, Infonavit, payroll CFDI, settlements and handling of requirements." },
      bcServices: "Services", bcCurrent: "Payroll",
      heroLabel: "BUSINESS PAYROLL IN CANCÚN",
      heroH1: "Strategic payroll with control, compliance and labor efficiency",
      heroIntro: "Payroll directly affects a company's operation, cash flow and tax burden. Mishandling it can create IMSS discrepancies, fines, labor disputes and unnecessary social costs. At Camhaji Consultores we help clients keep orderly, timely payroll aligned with current regulations — while building more efficient, sustainable labor structures.",
      costoLabel: "RISKS OF MISCALCULATED PAYROLL",
      costoTitle: "The real impact of payroll without specialized supervision",
      costoP1: "Errors in employer contributions, IMSS discrepancies, incorrectly withheld ISR, miscalculated settlements or inconsistent CFDI can become significant financial and labor contingencies.",
      costoP2: "In many cases, companies end up paying more than necessary due to lack of control, review or a proper administrative structure for payroll and social security.",
      costoP3: "Specialized payroll administration not only helps with compliance — it also lets you optimize processes, reduce risk and bring clarity to the company's real labor costs.",
      splitLabel: "IMSS & INFONAVIT MANAGEMENT IN CANCÚN",
      splitTitle: "Each employee well registered is one less problem",
      splitText: "Enrollments, terminations, employer contributions, settlements. Every change in your headcount has implications for IMSS, Infonavit and ISR. We do it right from day one.",
      incluyeLabel: "BUSINESS PAYROLL SERVICE",
      incluyeTitle: "What's included?",
      incluye: [
        { title: "Monthly or biweekly payroll calculation", desc: "Timely, accurate payroll processing according to each company's labor structure and operation." },
        { title: "Enrollments, terminations and movements with IMSS & Infonavit", desc: "Management and follow-up of affiliation movements, salary modifications and social-security obligations." },
        { title: "Employer contributions and assessments", desc: "Correct calculation of IMSS, Infonavit and payroll-related taxes — keeping compliance and control over labor costs." },
        { title: "Properly stamped payroll CFDI issuance", desc: "Generation and validation of payroll receipts per current tax provisions and applicable SAT criteria." },
        { title: "Settlements, severances and benefits calculation", desc: "Calculation of labor benefits, settlements and severances per Federal Labor Law and the company's internal policies." },
        { title: "Handling IMSS requirements", desc: "Support for clarifications, discrepancies and requirements related to social security and labor contributions." },
        { title: "REPSE compliance & specialized-services control", desc: "Administrative and documentary support for companies registered in REPSE, including review of specialized supplier information, control of labor documentation and compliance with specialized-services and permitted subcontracting obligations." },
        { title: "Administration of FONACOT obligations", desc: "Support for FONACOT obligations, including employer affiliation, payroll-deducted discounts, retention control and administrative follow-up under applicable regulations." },
      ],
      espLabel: "PAYROLL SPECIALIST IN CANCÚN",
      espTitle: "Our payroll specialist",
      espRole: "Manager of Payroll and Social Security",
      espP1: "Marlon brings experience in payroll administration, social security and labor compliance for companies across multiple sectors, including operations with operative staff, project-based workers and high-turnover structures.",
      espP2: "His experience in payroll calculation, IMSS contributions, settlements, benefits and labor administration provides close follow-up and specialized control in one of the most sensitive areas for any company.",
      espP3: "At Camhaji Consultores we work so every payroll movement is processed with precision, compliance and operational clarity.",
      bandLabel: "PAYROLL WITHOUT IMSS OBSERVATIONS",
      bandText: "Correct calculations, error-free CFDI and reports ready for any review. You pay, your team gets paid on time, the IMSS stays in order.",
      faqLabel: "BUSINESS PAYROLL — FAQ",
      faqTitle: "About business payroll",
      faqs: [
        { q: "How is the payroll service priced?", a: "Pricing depends mainly on headcount, pay frequency, operational complexity and the company's specific needs. We provide personalized quotes per operation." },
        { q: "What risks exist when payroll is not handled correctly?", a: "Errors in employer contributions, IMSS discrepancies, incorrectly issued CFDI or imprecise labor calculations can lead to fines, surcharges, labor disputes and audit observations." },
        { q: "What does payroll outsourcing include?", a: "Our service can include payroll calculation, IMSS and Infonavit movements, employer contributions, CFDI issuance, benefits and severances calculation, administrative reports and handling of social-security requirements." },
      ],
      ctaLabel: "HIRE YOUR PAYROLL SERVICE IN CANCÚN",
      ctaTitle: "Let's talk about your payroll.",
      ctaIntro: "Tell us how many employees your company has and how payroll is organized today.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Nómina Empresarial en Cancún | Camhaji Consultores", description: "Nómina empresarial en Cancún: cálculo de nómina, IMSS, Infonavit y CFDI de nómina sin errores ni retrasos." },
    jsonLd: { name: "Nómina Empresarial en Cancún", description: "Servicio integral de nómina en Cancún: cálculo, IMSS, Infonavit, CFDI de nómina, finiquitos y atención a requerimientos." },
    bcServices: "Servicios", bcCurrent: "Nómina",
    heroLabel: "NÓMINA EMPRESARIAL EN CANCÚN",
    heroH1: "Nómina estratégica con control, cumplimiento y eficiencia laboral",
    heroIntro: "La nómina impacta directamente en la operación, flujo de efectivo y carga fiscal de una empresa. Un manejo incorrecto puede generar diferencias ante IMSS, multas, conflictos laborales y costos sociales innecesarios. En Camhaji Consultores ayudamos a nuestros clientes a mantener procesos de nómina ordenados, oportunos y alineados a la normatividad vigente, buscando al mismo tiempo estructuras laborales más eficientes y sostenibles para la empresa.",
    costoLabel: "RIESGOS DE NÓMINA MAL CALCULADA",
    costoTitle: "El verdadero impacto de una nómina sin supervisión especializada",
    costoP1: "Errores en cuotas obrero patronales, diferencias ante IMSS, ISR retenido incorrectamente, finiquitos mal calculados o CFDI con inconsistencias pueden convertirse en contingencias financieras y laborales importantes.",
    costoP2: "En muchos casos, las empresas terminan pagando más de lo necesario por falta de control, revisión o una correcta estructura administrativa de nómina y seguridad social.",
    costoP3: "Una administración especializada de nómina no solo ayuda a mantener cumplimiento; también permite optimizar procesos, reducir riesgos y dar mayor claridad sobre los costos laborales reales de la empresa.",
    splitLabel: "GESTIÓN DE IMSS E INFONAVIT EN CANCÚN",
    splitTitle: "Cada empleado bien registrado es un problema menos",
    splitText: "Altas, bajas, cuotas patronales, finiquitos. Cada movimiento de tu plantilla tiene implicaciones en IMSS, Infonavit e ISR. Lo hacemos bien desde el primer día.",
    incluyeLabel: "SERVICIO DE NÓMINA EMPRESARIAL",
    incluyeTitle: "¿Qué incluye?",
    incluye: [
      { title: "Cálculo de nómina mensual o quincenal", desc: "Procesamiento puntual y preciso de nómina conforme a la estructura laboral y operación de cada empresa." },
      { title: "Altas, bajas y movimientos ante IMSS e Infonavit", desc: "Gestión y seguimiento de movimientos afiliatorios, modificaciones salariales y obligaciones relacionadas con seguridad social." },
      { title: "Cálculo de cuotas patronales y aportaciones", desc: "Determinación correcta de cuotas IMSS, Infonavit e impuestos relacionados con nómina, buscando mantener cumplimiento y control sobre los costos laborales de la empresa." },
      { title: "Emisión de CFDI de nómina correctamente timbrados", desc: "Generación y validación de recibos de nómina conforme a disposiciones fiscales vigentes y criterios aplicables del SAT." },
      { title: "Finiquitos, liquidaciones y cálculo de prestaciones", desc: "Cálculo de prestaciones laborales, finiquitos y liquidaciones conforme a Ley Federal del Trabajo y políticas internas de la empresa." },
      { title: "Atención a requerimientos del IMSS", desc: "Acompañamiento y soporte en aclaraciones, diferencias y requerimientos relacionados con seguridad social y contribuciones laborales." },
      { title: "Cumplimiento REPSE y control de servicios especializados", desc: "Acompañamiento administrativo y documental para empresas registradas en el REPSE, incluyendo revisión de información relacionada con proveedores especializados, control de documentación laboral y cumplimiento de obligaciones vinculadas a servicios especializados y subcontratación permitida." },
      { title: "Administración de obligaciones ante FONACOT", desc: "Apoyo en el cumplimiento de obligaciones relacionadas con FONACOT, incluyendo afiliación patronal, aplicación de descuentos vía nómina, control de retenciones y seguimiento administrativo conforme a la normatividad aplicable." },
    ],
    espLabel: "ESPECIALISTA EN NÓMINA EN CANCÚN",
    espTitle: "Nuestro especialista en nómina",
    espRole: "Gerente del área de Nómina y Seguridad Social",
    espP1: "Marlon cuenta con experiencia en administración de nómina, seguridad social y cumplimiento laboral para empresas de distintos sectores, incluyendo operaciones con personal operativo, trabajadores por obra y estructuras con alta rotación.",
    espP2: "Su experiencia en cálculo de nómina, cuotas IMSS, finiquitos, prestaciones y administración laboral permite brindar seguimiento puntual y control especializado en una de las áreas más sensibles para cualquier empresa.",
    espP3: "En Camhaji Consultores trabajamos para que cada movimiento de nómina se procese con precisión, cumplimiento y claridad operativa.",
    bandLabel: "NÓMINA SIN OBSERVACIONES DEL IMSS",
    bandText: "Cálculos correctos, CFDI sin error y reportes listos para cualquier revisión. Tú pagas, tu equipo cobra a tiempo, el IMSS queda en orden.",
    faqLabel: "NÓMINA EMPRESARIAL — PREGUNTAS FRECUENTES",
    faqTitle: "Sobre nómina empresarial",
    faqs: [
      { q: "¿Cómo se determina el costo del servicio de nómina?", a: "El costo depende principalmente del número de trabajadores, periodicidad de pago, complejidad operativa y necesidades específicas de la empresa. Realizamos cotizaciones personalizadas conforme a cada operación." },
      { q: "¿Qué riesgos existen cuando la nómina no se administra correctamente?", a: "Errores en cuotas patronales, diferencias ante IMSS, CFDI incorrectamente emitidos o cálculos laborales imprecisos pueden derivar en multas, recargos, conflictos laborales y observaciones en auditorías o revisiones." },
      { q: "¿Qué incluye el servicio de outsourcing de nómina?", a: "Nuestro servicio puede incluir cálculo de nómina, movimientos IMSS e Infonavit, determinación de cuotas patronales, emisión de CFDI, cálculo de prestaciones, finiquitos, reportes administrativos y atención de requerimientos relacionados con seguridad social." },
    ],
    ctaLabel: "CONTRATA TU SERVICIO DE NÓMINA EN CANCÚN",
    ctaTitle: "Hablemos de tu nómina.",
    ctaIntro: "Cuéntanos cuántos empleados tiene tu empresa y cómo está organizada hoy tu nómina.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
