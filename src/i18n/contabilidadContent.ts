import type { Lang } from "./lang";

export interface ContabilidadContent {
  seo: { title: string; description: string };
  jsonLd: { name: string; description: string };
  bcServices: string; bcCurrent: string;
  heroLabel: string; heroH1: string; heroIntro: string;
  adaptLabel: string; adaptTitle: string; adaptP1: string; adaptP2: string;
  stats: { num: string; label: string }[];
  procesoLabel: string; procesoTitle: string;
  proceso: { num: string; title: string; desc: string; days: string }[];
  bandLabel: string; bandText: string;
  gestionLabel: string; gestionTitle: string; gestionIntro: string;
  gestion: { title: string; desc: string }[];
  gestionFooter: string;
  splitLabel: string; splitTitle: string; splitText: string;
  paraQuienLabel: string; paraQuienTitle: string;
  paraQuien: { title: string; desc: string; href: string }[];
  paraQuienCta: string;
  faqLabel: string; faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaLabel: string; ctaTitle: string; ctaIntro: string; ctaBtn: string;
}

const b = (lang: Lang) => (lang === "en" ? "/en/version-c" : "/version-c");

export function getContabilidadContent(lang: Lang): ContabilidadContent {
  const base = b(lang);
  if (lang === "en") {
    return {
      seo: {
        title: "Bookkeeping & Administration in Cancún | Camhaji",
        description:
          "Bookkeeping and business administration in Cancún. Monthly entries, reconciliations, returns and integrated administrative control.",
      },
      jsonLd: {
        name: "Business Bookkeeping & Administration in Cancún",
        description:
          "Monthly accounting service for companies in Cancún and Quintana Roo: bookkeeping, reconciliations, tax returns and administration.",
      },
      bcServices: "Services", bcCurrent: "Bookkeeping",
      heroLabel: "BUSINESS BOOKKEEPING IN CANCÚN",
      heroH1: "Strategic Bookkeeping and Administration for Companies in Cancún",
      heroIntro:
        "Many entrepreneurs come to us with the same concern: \"I know something isn't working, but I can't pinpoint what.\" Lack of financial and accounting control creates uncertainty, tax risk and decisions based on incomplete data. At Camhaji Consultores we help companies keep clean, transparent books aligned with their growth — so they can make decisions with reliable financial information.",
      adaptLabel: "BOOKKEEPING FOR SMBS IN QUINTANA ROO",
      adaptTitle: "A service designed to grow with your company",
      adaptP1:
        "We serve everything from early-stage businesses to mid-size companies with complex operations, adapting our processes to the size, industry and needs of each client. We have particular experience in construction, engineering, distribution and professional services in Quintana Roo.",
      adaptP2:
        "Our approach is built on clear processes, personal attention and constant follow-up. What changes between one client and another is the complexity of the operation — never the quality of the service or the level of attention.",
      stats: [
        { num: "10+", label: "Years organizing books in Quintana Roo" },
        { num: "4", label: "Defined steps every month, no exceptions" },
        { num: "17", label: "Average days per monthly close cycle" },
        { num: "100%", label: "Returns reviewed before filing" },
      ],
      procesoLabel: "MONTHLY BOOKKEEPING PROCESS",
      procesoTitle: "How we run your accounting",
      proceso: [
        { num: "01", title: "Request, review and validation of documentation", desc: "At the start of each month we request documentation for the prior period through the channel that works best for your company: email, WhatsApp or shared platforms. We confirm everything is complete, properly issued and meets the applicable tax and accounting requirements.", days: "Day 1–5" },
        { num: "02", title: "Bookkeeping (provision) and bank reconciliation", desc: "We record the period's operations and reconcile bank movements, invoices and receipts to confirm the financial information reflects real operations. Any discrepancy is identified and clarified promptly.", days: "Day 5–12" },
        { num: "03", title: "Tax calculation and return preparation", desc: "We determine federal taxes and tax obligations for the period, including ISR, IVA and the corresponding returns. Before filing, all information is reviewed internally by our team.", days: "Day 12–15" },
        { num: "04", title: "Delivery to the client for payment", desc: "We deliver a clear period summary with taxes payable, returns filed and relevant observations. Our goal is for every monthly close to happen with order, clarity and no last-minute surprises.", days: "Day 15–17" },
      ],
      bandLabel: "ACCOUNTANTS IN CANCÚN AND THE RIVIERA MAYA",
      bandText: "More than a decade keeping the books of companies across the region.",
      gestionLabel: "BUSINESS ADMINISTRATION IN CANCÚN",
      gestionTitle: "Integrated administrative management for your company",
      gestionIntro:
        "Beyond accounting, we help our clients maintain order and control in the administrative operation of their business through centralized processes, constant follow-up and personal attention. Our service can include:",
      gestion: [
        { title: "Treasury and cash-flow control", desc: "Oversight of income, expenses and payment scheduling to keep financial administration clearer and more organized." },
        { title: "Filings and procedures with authorities", desc: "Support and attention for procedures with SAT, IMSS, Infonavit and other agencies related to your company's operations." },
        { title: "Accounts receivable and accounts payable", desc: "Administrative control of suppliers, customers, pending payments and collections follow-up to improve the business's financial organization." },
        { title: "Operational HR", desc: "Administrative support for staff-related processes, incidents, files, operational follow-up and internal coordination." },
      ],
      gestionFooter: "One firm. One process. Everything under control.",
      splitLabel: "ORDERLY, TRANSPARENT BOOKKEEPING",
      splitTitle: "Order, process and transparency at every step",
      splitText: "Every month we follow the same process. Every number has backup. Every return is reviewed before filing. That's how bookkeeping that protects your company works.",
      paraQuienLabel: "BOOKKEEPING BY INDUSTRY IN CANCÚN",
      paraQuienTitle: "Accounting experience tailored to each industry",
      paraQuien: [
        { title: "Construction, architecture and engineering", desc: "Experience in administrative and accounting control of construction projects, including job costing, estimates, subcontractors, advances, retentions and project financial control.", href: `${base}/sectores/construccion` },
        { title: "Distribution and commercial", desc: "Administration and accounting control for distribution companies, including inventories, billing, AR, AP and operational follow-up of commercial flow.", href: `${base}/sectores/comercial` },
        { title: "SMBs, restaurants and growing companies", desc: "We help companies moving from informal operations to a more solid financial and administrative structure — so they can grow with more control, order and financial clarity.", href: `${base}/contacto` },
      { title: "Independent professionals and service firms", desc: "We work with freelancers, creative agencies, consultants and real estate agencies who need more administrative control and tax compliance in their daily operation.", href: `${base}/contacto` },
      ],
      paraQuienCta: "VIEW DETAIL →",
      faqLabel: "BUSINESS BOOKKEEPING — FAQ",
      faqTitle: "What clients ask most about bookkeeping for companies in Cancún",
      faqs: [
        { q: "What does the monthly bookkeeping service include?", a: "Our service covers receiving and reviewing documentation, accounting entries, bank reconciliations, tax calculation, filing returns and monthly delivery of information for approval and payment. We also keep ongoing communication via the channels that best fit your operation — email, WhatsApp or shared platforms." },
        { q: "Why outsource my company's accounting?", a: "Working with a specialized firm gives you access to a team that stays current on accounting and tax matters, reduces error risk and improves control over your financial information. Beyond compliance, our approach aims to provide financial clarity and decision-making support." },
        { q: "Do you serve companies outside Cancún?", a: "Yes. We work with companies across Quintana Roo and other Mexican cities, using digital processes and efficient communication so we can deliver close, organized service regardless of location." },
      ],
      ctaLabel: "HIRE BOOKKEEPING FOR YOUR COMPANY IN CANCÚN",
      ctaTitle: "Are your books in order?",
      ctaIntro: "Tell us how your operation looks. If there's disorder, we'll sort it. If you already have a process, we'll tell you how to improve it.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: {
      title: "Contabilidad y Administración en Cancún | Camhaji",
      description:
        "Servicio de contabilidad y administración para empresas en Cancún. Registro mensual, conciliaciones, declaraciones y control administrativo integral.",
    },
    jsonLd: {
      name: "Contabilidad y Administración Empresarial en Cancún",
      description:
        "Servicio mensual de contabilidad para empresas en Cancún y Quintana Roo: registro, conciliaciones, declaraciones y administración.",
    },
    bcServices: "Servicios", bcCurrent: "Contabilidad",
    heroLabel: "CONTABILIDAD EMPRESARIAL EN CANCÚN",
    heroH1: "Contabilidad y Administración Estratégica para Empresas en Cancún",
    heroIntro:
      "Muchos empresarios llegan con la misma preocupación: \"Sé que algo no está funcionando correctamente, pero no logro identificar qué es.\" La falta de control financiero y contable genera incertidumbre, riesgos fiscales y decisiones basadas en información incompleta. En Camhaji Consultores ayudamos a las empresas a mantener una contabilidad ordenada, transparente y alineada a sus objetivos de crecimiento, brindando información financiera confiable para una mejor toma de decisiones.",
    adaptLabel: "CONTABILIDAD PARA PYMES EN QUINTANA ROO",
    adaptTitle: "Un servicio diseñado para crecer junto con tu empresa",
    adaptP1:
      "Atendemos desde negocios en etapa inicial hasta empresas medianas con estructuras operativas complejas, adaptando nuestros procesos al tamaño, industria y necesidades de cada cliente. Contamos con experiencia particular en sectores como construcción, ingeniería, comercialización y prestación de servicios en Quintana Roo.",
    adaptP2:
      "Nuestro enfoque de trabajo se basa en procesos claros, atención personalizada y seguimiento constante. Lo que cambia entre un cliente y otro es la complejidad de la operación, nunca la calidad del servicio ni el nivel de atención.",
    stats: [
      { num: "10+", label: "Años ordenando contabilidades en Quintana Roo" },
      { num: "4", label: "Pasos definidos cada mes, sin excepciones" },
      { num: "17", label: "Días promedio de ciclo de cierre mensual" },
      { num: "100%", label: "Declaraciones revisadas antes de presentarse" },
    ],
    procesoLabel: "PROCESO DE CONTABILIDAD MENSUAL",
    procesoTitle: "Cómo trabajamos tu contabilidad",
    proceso: [
      { num: "01", title: "Solicitud, revisión y validación de documentación", desc: "Al inicio de cada mes solicitamos la documentación correspondiente al periodo anterior a través del canal que resulte más cómodo para tu empresa: correo electrónico, WhatsApp o plataformas compartidas. Revisamos que toda la documentación esté completa, correctamente emitida y cumpla con los requisitos fiscales y contables aplicables.", days: "Día 1–5" },
      { num: "02", title: "Registro contable (provisión) y conciliación bancaria", desc: "Registramos las operaciones del periodo y conciliamos movimientos bancarios, facturas y comprobantes para validar que la información financiera refleje correctamente la operación real del negocio. Cualquier diferencia es identificada y aclarada oportunamente.", days: "Día 5–12" },
      { num: "03", title: "Cálculo de impuestos y llenado de declaraciones", desc: "Determinamos impuestos federales y obligaciones fiscales del periodo, incluyendo ISR, IVA y declaraciones correspondientes. Antes de su presentación, toda la información es revisada internamente por nuestro equipo.", days: "Día 12–15" },
      { num: "04", title: "Envío al cliente para pago", desc: "Entregamos un resumen claro del periodo con impuestos a pagar, declaraciones presentadas y observaciones relevantes para la operación. Nuestro objetivo es que cada cierre mensual se realice con orden, claridad y sin sorpresas de último momento.", days: "Día 15–17" },
    ],
    bandLabel: "CONTADORES EN CANCÚN Y RIVIERA MAYA",
    bandText: "Más de una década ordenando la contabilidad de empresas en la región.",
    gestionLabel: "ADMINISTRACIÓN EMPRESARIAL EN CANCÚN",
    gestionTitle: "Gestión administrativa integral para tu empresa",
    gestionIntro:
      "Más que llevar la contabilidad, ayudamos a nuestros clientes a mantener control y orden en la operación administrativa de su negocio mediante procesos centralizados, seguimiento constante y atención personalizada. Nuestro servicio puede incluir:",
    gestion: [
      { title: "Tesorería y control de flujo de efectivo", desc: "Supervisión de ingresos, egresos y programación de pagos para mantener una administración financiera más clara y organizada." },
      { title: "Gestiones y trámites ante autoridades", desc: "Acompañamiento y atención en trámites ante SAT, IMSS, Infonavit y otras dependencias relacionadas con la operación de la empresa." },
      { title: "Cuentas por cobrar y cuentas por pagar", desc: "Control administrativo de proveedores, clientes, pagos pendientes y seguimiento de cobranza para mejorar la organización financiera del negocio." },
      { title: "Recursos humanos operativos", desc: "Apoyo administrativo en procesos relacionados con personal, incidencias, expedientes, seguimiento operativo y coordinación interna." },
    ],
    gestionFooter: "Un solo despacho. Un solo proceso. Todo bajo control.",
    splitLabel: "CONTABILIDAD ORDENADA Y TRANSPARENTE",
    splitTitle: "Orden, proceso y transparencia en cada paso",
    splitText: "Cada mes seguimos el mismo proceso. Cada número tiene respaldo. Cada declaración se revisa antes de presentarse. Así funciona una contabilidad que protege a tu empresa.",
    paraQuienLabel: "CONTABILIDAD POR SECTOR EN CANCÚN",
    paraQuienTitle: "Experiencia contable adaptada a cada industria",
    paraQuien: [
      { title: "Construcción, arquitectura e ingeniería", desc: "Experiencia en control administrativo y contable de proyectos de construcción, incluyendo costos de obra, estimaciones, subcontratistas, anticipos, retenciones y control financiero de proyectos.", href: `${base}/sectores/construccion` },
      { title: "Comercialización y distribución", desc: "Administración y control contable para empresas comercializadoras, incluyendo inventarios, facturación, cuentas por cobrar, cuentas por pagar y seguimiento operativo de flujo comercial.", href: `${base}/sectores/comercial` },
      { title: "PYMES, restaurantes y empresas en crecimiento", desc: "Ayudamos a empresas que están pasando de una operación informal a una estructura financiera y administrativa más sólida, permitiéndoles crecer con mayor control, orden y claridad financiera.", href: `${base}/contacto` },
      { title: "Profesionistas independientes y empresas de servicios", desc: "Trabajamos con freelancers, agencias creativas, consultores y agencias inmobiliarias que requieren mayor control administrativo y cumplimiento fiscal en su operación diaria.", href: `${base}/contacto` },
    ],
    paraQuienCta: "VER DETALLE →",
    faqLabel: "CONTABILIDAD EMPRESARIAL — PREGUNTAS FRECUENTES",
    faqTitle: "Lo que más nos preguntan sobre contabilidad para empresas en Cancún",
    faqs: [
      { q: "¿Qué incluye el servicio de contabilidad mensual?", a: "Nuestro servicio contempla la recepción y revisión de documentación, registro contable, conciliaciones bancarias, cálculo de impuestos, presentación de declaraciones y envío mensual de información para autorización y pago. Además, mantenemos comunicación constante con nuestros clientes mediante los canales que mejor se adapten a su operación, como correo electrónico, WhatsApp o plataformas compartidas." },
      { q: "¿Por qué tercerizar la contabilidad de mi empresa?", a: "Contar con un despacho especializado permite a las empresas tener acceso a un equipo actualizado en materia contable y fiscal, reducir riesgos de errores y mantener mayor control sobre su información financiera. Además de cumplir con las obligaciones fiscales, nuestro enfoque busca brindar claridad financiera y acompañamiento para la toma de decisiones." },
      { q: "¿Atienden empresas fuera de Cancún?", a: "Sí. Trabajamos con empresas en distintos municipios de Quintana Roo y otras ciudades de México, manteniendo procesos digitales y canales de comunicación eficientes que nos permiten brindar una atención cercana y organizada sin importar la ubicación del cliente." },
    ],
    ctaLabel: "CONTRATA CONTABILIDAD PARA TU EMPRESA",
    ctaTitle: "¿Tu contabilidad está en orden?",
    ctaIntro: "Cuéntanos cómo está tu operación. Si hay desorden, lo ordenamos. Si ya tienes proceso, te decimos cómo mejorarlo.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
