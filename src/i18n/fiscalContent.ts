import type { Lang } from "./lang";

export interface FiscalContent {
  seo: { title: string; description: string };
  jsonLd: { name: string; description: string };
  bcServices: string; bcCurrent: string;
  heroLabel: string; heroH1: string; heroIntro: string;
  problemLabel: string; problemTitle: string; problemP1: string; problemP2: string; problemP3: string;
  splitLabel: string; splitTitle: string; splitText: string;
  enfoqueLabel: string; enfoqueTitle: string; enfoqueP1: string; enfoqueP2: string;
  servLabel: string; servTitle: string;
  servicios: { title: string; desc: string }[];
  porqueLabel: string; porqueTitle: string; porqueP1: string; porqueP2: string; porqueP3: string;
  bandLabel: string; bandText: string;
  faqLabel: string; faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaLabel: string; ctaTitle: string; ctaIntro: string; ctaBtn: string;
}

export function getFiscalContent(lang: Lang): FiscalContent {
  if (lang === "en") {
    return {
      seo: { title: "Tax Strategy in Cancún | Camhaji Consultores", description: "Tax strategy for companies in Cancún. SAT compliance, tax planning and accounting advisory without surprises." },
      jsonLd: { name: "Tax Strategy & Advisory in Cancún", description: "Diagnosis, monthly compliance with the SAT, annual filings and response to requirements for companies in Cancún and Quintana Roo." },
      bcServices: "Services", bcCurrent: "Tax",
      heroLabel: "TAX ADVISORY IN CANCÚN",
      heroH1: "Tax strategy and compliance for growing companies",
      heroIntro: "Tax obligations don't allow for improvisation. A disorganized accounting structure, pending returns or discrepancies with the authority can quickly become financial and operational risks. At Camhaji Consultores we help clients keep control, clarity and tax compliance through professional, specialized support.",
      problemLabel: "TAX RISKS FOR COMPANIES IN CANCÚN",
      problemTitle: "The most common problem we find in companies",
      problemP1: "There's a pattern we see often: companies that operate for years without proper tax oversight — until a requirement, return discrepancies, tax credits or inconsistencies detected by the authority appear.",
      problemP2: "In many cases, the problem doesn't start with an audit but with disorganized administrative processes, lack of follow-up or incomplete financial information.",
      problemP3: "The outcome is usually the same: uncertainty, operational pressure and risk of fines, surcharges or tax reviews.",
      splitLabel: "PERSONALIZED TAX DIAGNOSIS",
      splitTitle: "Clear, orderly and sustainable tax compliance",
      splitText: "Our tax advisory doesn't focus on improvised solutions or short-term strategies. It focuses on helping companies operate correctly, meet their obligations and make decisions with greater financial clarity.",
      enfoqueLabel: "TAX COMPLIANCE WITHOUT SHORTCUTS",
      enfoqueTitle: "A preventive, professional and compliant approach",
      enfoqueP1: "We believe a healthy tax structure should bring stability, order and long-term peace of mind — not create future uncertainty.",
      enfoqueP2: "That's why we work with a preventive, professional approach aligned with current regulations, always prioritizing the operational and tax security of each company and its shareholders.",
      servLabel: "TAX ADVISORY SERVICES",
      servTitle: "What our tax advisory includes",
      servicios: [
        { title: "Initial diagnosis of your tax situation", desc: "Before proposing any strategy, we run a full review of the company's tax situation: active obligations, returns filed, compliance by regime, compliance opinions and possible risk areas. A clear diagnosis enables better decisions." },
        { title: "Monthly tax compliance and pre-close", desc: "Supervision and filing of monthly obligations such as ISR, IVA, IMSS, informative returns and other applicable obligations — ensuring timely compliance and correct calculation. We anticipate month-end to avoid surprises in tax payment." },
        { title: "Annual pre-close", desc: "The annual return is one of the most important tax processes for any company. We prepare and review financial and tax information in advance to reduce risk and ensure consistency." },
        { title: "Handling requirements and clarifications", desc: "We support the response to requirements issued by the SAT and other authorities, helping with documentation gathering, information analysis and follow-up." },
        { title: "Industry-specific regulations", desc: "Each industry faces different tax obligations and criteria. We have experience in construction, distribution, professional services and RESICO, adapting our processes to each client's specific operation." },
      ],
      porqueLabel: "TAX EXPERIENCE IN CANCÚN",
      porqueTitle: "Experience, judgment and ongoing tax support for companies",
      porqueP1: "We bring 10+ years of tax experience, both in audit and consulting firms and inside the direct operation of companies across multiple sectors in Cancún and Quintana Roo.",
      porqueP2: "That combination of technical experience and operational knowledge lets us understand not only tax regulations, but the daily reality of growing companies.",
      porqueP3: "Our approach is built on prevention, analysis and constant accompaniment — helping each client operate with greater clarity, control and tax security.",
      bandLabel: "TAX ADVISORS WITH TRACK RECORD",
      bandText: "Tax experience applied to the real-world operation of companies",
      faqLabel: "TAX ADVISORY — FAQ",
      faqTitle: "About tax advisory in Cancún",
      faqs: [
        { q: "What if I have overdue tax obligations?", a: "It's more common than it seems. The first step is a clear diagnosis to identify pending obligations, unfiled periods and possible accumulated differences or surcharges. From there we build an orderly regularization plan prioritized by the risk level of each obligation." },
        { q: "Can my company's tax burden be legally optimized?", a: "Yes. A correct administrative, financial and tax structure lets you take advantage of authorized deductions, suitable regimes and better-organized processes within the legal framework. Our approach is compliance and prevention — avoiding schemes that could create future risk." },
        { q: "Do you respond to SAT requirements?", a: "Yes. We support the handling of requirements, clarifications and follow-up with the tax authority, helping gather the information and documentation needed for each case." },
        { q: "Do you work with individuals with business activity and RESICO?", a: "Yes. We serve both legal entities and individuals with business or professional activity, including taxpayers under RESICO, adapting our processes to each client's operation and obligations." },
      ],
      ctaLabel: "REGULARIZE YOUR TAX SITUATION IN CANCÚN",
      ctaTitle: "Let's talk about your tax situation.",
      ctaIntro: "Tell us about your situation. If there are overdue obligations, we run the diagnosis at no cost.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Estrategia Fiscal en Cancún | Camhaji Consultores", description: "Estrategia fiscal para empresas en Cancún. Cumplimiento ante el SAT, planeación fiscal y asesoría contable sin sorpresas." },
    jsonLd: { name: "Estrategia y Asesoría Fiscal en Cancún", description: "Diagnóstico, cumplimiento mensual ante el SAT, declaraciones anuales y respuesta a requerimientos para empresas en Cancún y Quintana Roo." },
    bcServices: "Servicios", bcCurrent: "Fiscal",
    heroLabel: "ASESORÍA FISCAL EN CANCÚN",
    heroH1: "Estrategia fiscal y cumplimiento para empresas en crecimiento",
    heroIntro: "Las obligaciones fiscales no admiten improvisación. Una estructura contable desordenada, declaraciones pendientes o diferencias ante la autoridad pueden convertirse rápidamente en riesgos financieros y operativos para la empresa. En Camhaji Consultores ayudamos a nuestros clientes a mantener control, claridad y cumplimiento fiscal mediante acompañamiento profesional y atención especializada.",
    problemLabel: "RIESGOS FISCALES PARA EMPRESAS EN CANCÚN",
    problemTitle: "El problema más común que encontramos en las empresas",
    problemP1: "Existe un patrón que vemos con frecuencia: empresas que operan durante años sin una supervisión fiscal adecuada, hasta que aparece un requerimiento, diferencias en declaraciones, créditos fiscales o inconsistencias detectadas por la autoridad.",
    problemP2: "En muchos casos, el problema no comienza con una auditoría, sino con procesos administrativos desordenados, falta de seguimiento o información financiera incompleta.",
    problemP3: "El resultado suele ser el mismo: incertidumbre, presión operativa y riesgo de multas, recargos o revisiones fiscales.",
    splitLabel: "DIAGNÓSTICO FISCAL PERSONALIZADO",
    splitTitle: "Cumplimiento fiscal claro, ordenado y sostenible",
    splitText: "Nuestra asesoría fiscal no se enfoca en buscar soluciones improvisadas ni estrategias de corto plazo. Se enfoca en ayudar a las empresas a operar correctamente, cumplir con sus obligaciones y tomar decisiones con mayor claridad financiera.",
    enfoqueLabel: "CUMPLIMIENTO FISCAL SIN ATAJOS",
    enfoqueTitle: "Enfoque preventivo, profesional y alineado a la normatividad",
    enfoqueP1: "Creemos que una estructura fiscal sana debe brindar estabilidad, orden y tranquilidad a largo plazo, no generar incertidumbre futura.",
    enfoqueP2: "Por eso, trabajamos bajo un enfoque preventivo, profesional y alineado a la normatividad vigente, priorizando siempre la seguridad operativa y fiscal de cada empresa y sus accionistas.",
    servLabel: "SERVICIOS DE ASESORÍA FISCAL",
    servTitle: "Lo que incluye nuestra asesoría fiscal",
    servicios: [
      { title: "Diagnóstico inicial de situación fiscal", desc: "Antes de proponer cualquier estrategia, realizamos una revisión integral de la situación fiscal de la empresa: obligaciones vigentes, declaraciones presentadas, cumplimiento por régimen, opiniones de cumplimiento y posibles áreas de riesgo. Un diagnóstico claro permite tomar mejores decisiones." },
      { title: "Cumplimiento de obligaciones fiscales y precierre mensual", desc: "Supervisión y presentación de obligaciones mensuales como ISR, IVA, IMSS, declaraciones informativas y demás obligaciones aplicables, asegurando cumplimiento oportuno y correcto cálculo de contribuciones. Nos anticipamos al cierre de cada mes para evitar sorpresas en el pago mensual de impuestos." },
      { title: "Precierre anual", desc: "La declaración anual representa uno de los procesos fiscales más importantes para cualquier empresa. Preparamos y revisamos la información financiera y fiscal con anticipación para reducir riesgos y asegurar consistencia en la información presentada." },
      { title: "Atención a requerimientos y aclaraciones", desc: "Brindamos acompañamiento en la atención de requerimientos emitidos por el SAT y otras autoridades, apoyando en la integración de documentación, análisis de información y seguimiento del proceso de respuesta." },
      { title: "Normatividad aplicable a cada sector", desc: "Cada industria enfrenta obligaciones y criterios fiscales distintos. Contamos con experiencia en sectores como construcción, comercialización, servicios profesionales y RESICO, adaptando nuestros procesos a la operación específica de cada cliente." },
    ],
    porqueLabel: "EXPERIENCIA FISCAL EN CANCÚN",
    porqueTitle: "Experiencia, criterio y acompañamiento fiscal para empresas",
    porqueP1: "Contamos con más de 10 años de experiencia en materia fiscal, participando tanto en firmas de auditoría y consultoría como en la operación directa de empresas de distintos sectores en Cancún y Quintana Roo.",
    porqueP2: "Esa combinación entre experiencia técnica y conocimiento operativo nos permite entender no solo la normatividad fiscal, sino también la realidad diaria de las empresas y los retos que enfrentan al crecer.",
    porqueP3: "Nuestro enfoque se basa en prevención, análisis y acompañamiento constante, ayudando a cada cliente a operar con mayor claridad, control y seguridad fiscal.",
    bandLabel: "ASESORES FISCALES CON TRAYECTORIA",
    bandText: "Experiencia fiscal aplicada a la operación real de las empresas",
    faqLabel: "ASESORÍA FISCAL — PREGUNTAS FRECUENTES",
    faqTitle: "Sobre asesoría fiscal en Cancún",
    faqs: [
      { q: "¿Qué sucede si tengo obligaciones fiscales atrasadas?", a: "Es una situación más común de lo que parece. El primer paso es realizar un diagnóstico claro para identificar obligaciones pendientes, periodos sin presentar y posibles diferencias o recargos acumulados. A partir de ello, desarrollamos un plan de regularización ordenado y priorizado según el nivel de riesgo de cada obligación." },
      { q: "¿Es posible optimizar legalmente la carga fiscal de mi empresa?", a: "Sí. Una correcta estructura administrativa, financiera y fiscal permite aprovechar deducciones autorizadas, regímenes adecuados y procesos mejor organizados dentro del marco legal vigente. Nuestro enfoque se basa en cumplimiento y prevención, evitando esquemas que puedan generar riesgos futuros para la empresa." },
      { q: "¿Atienden requerimientos del SAT?", a: "Sí. Brindamos acompañamiento en la atención de requerimientos, aclaraciones y seguimiento ante la autoridad fiscal, apoyando en la integración de información y documentación necesaria para cada caso." },
      { q: "¿Trabajan con personas físicas con actividad empresarial y RESICO?", a: "Sí. Atendemos tanto personas morales como personas físicas con actividad empresarial o profesional, incluyendo contribuyentes bajo RESICO, adaptando nuestros procesos al tipo de operación y obligaciones de cada cliente." },
    ],
    ctaLabel: "REGULARIZA TU SITUACIÓN FISCAL EN CANCÚN",
    ctaTitle: "Hablemos de tu situación fiscal.",
    ctaIntro: "Cuéntanos tu situación. Si hay obligaciones atrasadas, hacemos el diagnóstico sin costo.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
