import type { Lang } from "./lang";
import sectorConstruccion from "@/assets/sector-construccion.jpg";
import sectorComercial from "@/assets/sector-comercial.jpg";

export const serviceBgs = [
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80&fit=crop",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1920&q=80&fit=crop",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80&fit=crop",
  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1920&q=80&fit=crop",
];

export interface HomeContent {
  seo: { title: string; description: string };
  hero: {
    label: string;
    h1: string[]; // lines
    intro: string;
    ctaWhats: string;
    ctaServ: string;
    heroImgAlt: string;
  };
  statement: {
    label: string;
    quote: string;
    chips: string[];
  };
  differentiators: { name: string; desc: string }[];
  services: {
    sectionLabel: string;
    sectionSubtitle: string;
    items: { num: string; title: string; desc: string; href: string; cta: string }[];
  };
  stats: {
    label: string;
    title: string[]; // 2 lines
    items: { value: number; suffix: string; label: string; context: string }[];
  };
  porque: {
    label: string;
    title: string;
    para1: string;
    para2: string;
    cta: string;
    href: string;
    principles: { name: string; desc: string }[];
  };
  sectores: {
    label: string;
    title: string;
    items: { name: string; desc: string; href: string; img: string; cta: string }[];
  };
  equipo: {
    label: string;
    title: string;
    desc: string;
  };
  testimonials: { label: string };
  ctaFinal: {
    label: string;
    title: string;
    desc: string;
    cta: string;
  };
  faq: {
    label: string;
    title: string;
    items: { q: string; a: string }[];
  };
}

const base = (lang: Lang) => (lang === "en" ? "/en/version-c" : "/version-c");

export function getHomeContent(lang: Lang): HomeContent {
  const b = base(lang);
  if (lang === "en") {
    return {
      seo: {
        title: "Accounting Firm in Cancún — Camhaji Consultores",
        description:
          "Accounting firm in Cancún with 10+ years of experience. Bookkeeping, tax, payroll and billing for businesses in Quintana Roo. Specialists in construction and self-employed regimes.",
      },
      hero: {
        label: "ACCOUNTING FIRM · CANCÚN, MEXICO",
        h1: ["Cancún accountants", "committed to our clients,", "every single month."],
        intro:
          "We run your bookkeeping and ensure full tax compliance so you can focus on what you do best. Real commitment — we do what we say we'll do.",
        ctaWhats: "MESSAGE US ON WHATSAPP",
        ctaServ: "EXPLORE OUR SERVICES",
        heroImgAlt: "Cancún skyline, Camhaji Consultores accounting firm",
      },
      statement: {
        label: "ACCOUNTING FIRM IN CANCÚN",
        quote: "What makes us your best ally?",
        chips: [
          "Immediate response",
          "Everything you need in one place",
          "Realistic solutions",
          "Commitment to our work",
        ],
      },
      differentiators: [
        {
          name: "Immediate response",
          desc: "Consultations by video call or in-person at our offices for a more personal touch. Invoicing in under 24 business hours — we understand how important collections are. Reach us by email or WhatsApp, whichever you prefer.",
        },
        {
          name: "Everything in one place",
          desc: "Bookkeeping, tax advisory, payroll, billing, administration and business consulting. One team of professionals at your disposal.",
        },
        {
          name: "Explanations you can understand",
          desc: "We work with small to large companies and we know not everyone is an expert in tax matters — nor do they need to be. That's what we're here for. We'll explain everything clearly, without jargon or shortcuts.",
        },
        {
          name: "Your peace of mind is our priority",
          desc: "We like doing things the way they should be done. We honor our commitment, and our commitment is to give you certainty about what we do — so you can sleep peacefully.",
        },
      ],
      services: {
        sectionLabel: "OUR ACCOUNTING SERVICES IN CANCÚN",
        sectionSubtitle: "Everything your business needs in one place",
        items: [
          {
            num: "01",
            title: "Bookkeeping",
            desc: "Recording of operations, bank reconciliation, tax calculation, issuance of financial statements. Financial information for decision-making.",
            href: `${b}/servicios/contabilidad`,
            cta: "LEARN MORE →",
          },
          {
            num: "02",
            title: "Tax Compliance",
            desc: "Proper compliance with your tax obligations, tax calculation, filing of returns, submission of informative reports, electronic accounting submissions. It's not tax magic, it's compliance. Support in procedures before tax authorities.",
            href: `${b}/servicios/fiscal`,
            cta: "LEARN MORE →",
          },
          {
            num: "03",
            title: "Payroll & Social Security",
            desc: "Calculation of integrated daily wages, benefits and earnings, IMSS registration and movements, calculation of employer-employee contributions, payroll CFDI stamping. No delays — because we understand payroll is sacred.",
            href: `${b}/servicios/nomina`,
            cta: "LEARN MORE →",
          },
          {
            num: "04",
            title: "Integrated Administration",
            desc: "Issuing, stamping and sending electronic invoices to your clients. We review the CFDIs you receive and advise on their correct issuance and validity. Account statements, accounts receivable and payable, treasury, payroll dispersions, supplier payments and government procedures for permits and licenses.",
            href: `${b}/servicios/administracion`,
            cta: "LEARN MORE →",
          },
        ],
      },
      stats: {
        label: "EXPERIENCED ACCOUNTANTS IN CANCÚN",
        title: ["More than a decade of work", "translates into this"],
        items: [
          { value: 10, suffix: "+", label: "YEARS OF EXPERIENCE", context: "Before becoming the firm, we were already experts." },
          { value: 6, suffix: "+", label: "YEARS AS A FIRM", context: "A consolidated partnership." },
          { value: 10, suffix: "+", label: "PROFESSIONALS", context: "Each one a specialist in their field." },
        ],
      },
      porque: {
        label: "ACCOUNTING FIRM WITH HISTORY",
        title: "A firm with history and a professional team",
        para1:
          "Camhaji Consultores was born 6 years ago from a simple idea: a firm where tax advisory and bookkeeping go hand in hand, working toward the same goal. Before the firm, our team accumulated more than 10 years of experience at large auditing and tax consulting firms in Mexico City and Cancún.",
        para2:
          "Today we are a team of more than 10 professionals committed to something concrete: doing what we say we'll do.",
        cta: "READ OUR STORY →",
        href: `${b}/nosotros`,
        principles: [
          { name: "Commitment", desc: "We honor our word. If we say it, we do it. No excuses." },
          { name: "Honesty", desc: "We say what we think, even when it's not what you expect to hear." },
          { name: "Transparency", desc: "You'll know what's happening with your accounting at all times. The accounting is yours." },
          { name: "Responsibility", desc: "We take ownership of our work. Always, no conditions." },
          { name: "Empathy", desc: "We adapt to each client, to their reality and their business." },
        ],
      },
      sectores: {
        label: "INDUSTRIES WE SERVE IN QUINTANA ROO",
        title: "Experience in the sectors that matter most in Quintana Roo",
        items: [
          {
            name: "Construction",
            desc: "Years of experience in the sector. Advance amortization on weekly estimates, weekly payroll, SATQ notices, SIROC filing, social security compliance, REPSE registration and quarterly informative returns (ICSOE and SISUB).",
            href: `${b}/sectores/construccion`,
            img: sectorConstruccion,
            cta: "VIEW SPECIALIZATION →",
          },
          {
            name: "Commercial",
            desc: "Distributors, importers, wholesalers and retailers with stores or distribution centers.",
            href: `${b}/sectores/comercial`,
            img: sectorComercial,
            cta: "VIEW SPECIALIZATION →",
          },
          {
            name: "RESICO (Self-Employed)",
            desc: "Individuals with business or professional activity under RESICO: freelancers, consultants, independent professionals and contractors.",
            href: `${b}/sectores/resico`,
            img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=960&q=80&fit=crop",
            cta: "VIEW SPECIALIZATION →",
          },
          {
            name: "Real Estate Advisors",
            desc: "Real estate commissions with specific tax rules. Correct CFDI and optimal tax regime. We support closings to make them as tax-efficient as possible.",
            href: `${b}/sectores/inmobiliario`,
            img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=960&q=80&fit=crop",
            cta: "VIEW SPECIALIZATION →",
          },
          {
            name: "Vacation Rentals",
            desc: "Owners and managers of properties on Airbnb, Booking and other platforms. Income tax, VAT, lodging tax, CFDI, platform reconciliation and operational administration for hospitality in Cancún and Riviera Maya.",
            href: `${b}/sectores/renta-vacacional`,
            img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=960&q=80&fit=crop",
            cta: "VIEW SPECIALIZATION →",
          },
        ],
      },
      equipo: {
        label: "ACCOUNTING TEAM IN CANCÚN",
        title: "Our team",
        desc: "The team behind your financial peace of mind — accountants with experience at major firms, committed to doing what we say.",
      },
      testimonials: { label: "WHAT OUR CLIENTS IN CANCÚN SAY" },
      ctaFinal: {
        label: "CONTACT YOUR ACCOUNTANT IN CANCÚN",
        title: "Let's talk about your business.",
        desc: "If you've been postponing getting your accounting in order, or you want a firm that truly responds when you need it, now is a good time to talk.",
        cta: "MESSAGE US ON WHATSAPP",
      },
      faq: {
        label: "ACCOUNTING IN CANCÚN — FREQUENTLY ASKED QUESTIONS",
        title: "About our accounting firm in Cancún",
        items: [
          {
            q: "How much does an accountant charge in Cancún?",
            a: "The cost varies depending on the services required. Basic bookkeeping for a small company can start at MXN $2,000–$4,000/month. For medium-sized companies with payroll and billing included, the range is MXN $5,000–$15,000/month. At Camhaji Consultores we provide a personalized quote at no cost — tell us about your operation and we'll give you a number that fits your reality.",
          },
          {
            q: "How do I choose a good accounting firm in Cancún?",
            a: "Look for a firm with a certified team, experience in your industry, up-to-date software and clear, accessible communication. One that explains what they do — not just sends you the filing receipt.",
          },
          {
            q: "What does the monthly accounting service include?",
            a: "Document request and review, accounting record, reconciliation of bank statements with invoices, tax calculation, completion of returns and delivery to the client to authorize payment. We adapt to the client's preferred channel — email or WhatsApp.",
          },
          {
            q: "Do you serve companies outside of Cancún?",
            a: "Yes. We work with companies throughout Quintana Roo. We adapt to the client's communication channel, so distance is not an obstacle.",
          },
          {
            q: "Do you have experience with companies behind on their tax filings?",
            a: "Yes. It's one of the most frequent situations new clients arrive with. The first step is a tax-situation diagnosis, without judgment, to understand exactly where the problem is and what's needed to get back on track.",
          },
        ],
      },
    };
  }

  // ES (default — preserves original SEO copy)
  return {
    seo: {
      title: "Despacho Contable en Cancún — Camhaji Consultores",
      description:
        "Despacho contable en Cancún con más de 10 años de trayectoria. Contabilidad, fiscal, nómina y facturación para empresas en Quintana Roo. Especialistas en construcción y RESICO.",
    },
    hero: {
      label: "DESPACHO CONTABLE · CANCÚN, MÉXICO",
      h1: ["Firma de Contadores", "en Cancún comprometidos", "con nuestros clientes."],
      intro:
        "Elaboramos la contabilidad y damos el correcto cumplimiento a tus obligaciones fiscales para que tú te dediques a lo que sabes hacer. Con compromiso real. Hacemos lo que decimos que vamos a hacer.",
      ctaWhats: "ESCRÍBENOS POR WHATSAPP",
      ctaServ: "CONOCE NUESTROS SERVICIOS",
      heroImgAlt: "Skyline de Cancún, despacho contable Camhaji Consultores",
    },
    statement: {
      label: "DESPACHO CONTABLE EN CANCÚN",
      quote: "¿Qué nos hace tu mejor aliado?",
      chips: [
        "Atención inmediata",
        "Todo lo que necesitas en un solo lugar",
        "Soluciones realistas",
        "Compromiso con nuestro trabajo",
      ],
    },
    differentiators: [
      {
        name: "Atención inmediata",
        desc: "Atención a consultas por videollamada o junta en nuestras oficinas para un trato más personal. Facturación en menos de 24 horas hábiles — entendemos lo importante que es la cobranza. Atendemos solicitudes por correo o WhatsApp, como prefieras.",
      },
      {
        name: "Todo en un solo lugar",
        desc: "Contabilidad, asesoría fiscal, maquila de nómina, facturación, administración y consultoría en negocios. Un equipo de profesionales a tu disposición.",
      },
      {
        name: "Explicaciones que puedes entender",
        desc: "Atendemos desde pequeñas hasta grandes empresas y entendemos que no todos son expertos en la materia, ni tienen que serlo — para eso estamos nosotros. Te lo explicaremos de una forma que quede completamente claro, sin rodeos ni tecnicismos.",
      },
      {
        name: "Tu tranquilidad y seguridad es nuestra prioridad",
        desc: "Nos gusta hacer las cosas como deben de ser. Cumplimos con nuestro compromiso, y nuestro compromiso es que tengas seguridad de lo que hacemos y que puedas dormir tranquilo.",
      },
    ],
    services: {
      sectionLabel: "NUESTROS SERVICIOS CONTABLES EN CANCÚN",
      sectionSubtitle: "Todo lo que tu empresa necesita en un solo lugar",
      items: [
        {
          num: "01",
          title: "Contabilidad",
          desc: "Registro de operaciones, conciliación bancaria, cálculo de impuestos, emisión de Estados Financieros. Información financiera para la toma de decisiones.",
          href: `${b}/servicios/contabilidad`,
          cta: "CONOCER MÁS →",
        },
        {
          num: "02",
          title: "Cumplimiento de obligaciones fiscales",
          desc: "Correcto cumplimiento de tus obligaciones fiscales, cálculo de impuestos, envío de declaraciones, presentación de informativas, envío de contabilidad electrónica. No es magia fiscal, es compliance. Acompañamiento en trámites ante autoridades.",
          href: `${b}/servicios/fiscal`,
          cta: "CONOCER MÁS →",
        },
        {
          num: "03",
          title: "Nómina y Seguridad Social",
          desc: "Determinación del salario diario integrado, cálculo de prestaciones y percepciones, movimientos afiliatorios ante el IMSS, cálculo de cuotas obrero-patronales, timbrado de CFDI de nómina. Sin retrasos, porque entendemos que la nómina es sagrada.",
          href: `${b}/servicios/nomina`,
          cta: "CONOCER MÁS →",
        },
        {
          num: "04",
          title: "Administración Integral",
          desc: "Emisión, timbrado y envío de facturas electrónicas para tus clientes. Revisamos los CFDI que recibes y te asesoramos sobre su correcta emisión y validez. Estados de cuenta, Cuentas por Cobrar y por Pagar, tesorería, dispersiones de nómina, pagos a proveedores y gestiones ante entidades gubernamentales para permisos y licencias.",
          href: `${b}/servicios/administracion`,
          cta: "CONOCER MÁS →",
        },
      ],
    },
    stats: {
      label: "CONTADORES CON TRAYECTORIA EN CANCÚN",
      title: ["Más de una década de trabajo", "se traduce en esto"],
      items: [
        { value: 10, suffix: "+", label: "AÑOS DE TRAYECTORIA", context: "Antes de ser Firma, ya éramos expertos." },
        { value: 6, suffix: "+", label: "AÑOS COMO FIRMA", context: "Una sociedad consolidada." },
        { value: 10, suffix: "+", label: "PROFESIONALES", context: "Cada uno especialista en su área." },
      ],
    },
    porque: {
      label: "FIRMA CONTABLE CON HISTORIA",
      title: "Una firma con historia y equipo profesional",
      para1:
        "Camhaji Consultores nació hace 6 años de una idea simple: una Firma donde la consultoría fiscal y la elaboración de la contabilidad van de la mano, encaminadas a un mismo objetivo. Antes de la Firma, nuestro equipo acumuló más de 10 años de trayectoria en grandes firmas de auditoría y consultoría fiscal en CDMX y Cancún.",
      para2:
        "Hoy somos un equipo de más de 10 profesionistas comprometidos con algo concreto: cumplir lo que decimos que vamos a hacer.",
      cta: "CONOCE NUESTRA HISTORIA →",
      href: `${b}/nosotros`,
      principles: [
        { name: "Compromiso", desc: "Cumplimos nuestra palabra. Si lo decimos, lo hacemos. Sin pretextos." },
        { name: "Honestidad", desc: "Decimos lo que pensamos, aunque no sea lo esperado." },
        { name: "Transparencia", desc: "Sabrás lo que sucede en tu contabilidad o la de tu empresa en todo momento. La contabilidad es tuya." },
        { name: "Responsabilidad", desc: "Nos hacemos cargo de nuestro trabajo. Siempre, sin condiciones." },
        { name: "Empatía", desc: "Nos adaptamos a cada cliente, a su realidad y la de su negocio." },
      ],
    },
    sectores: {
      label: "SECTORES QUE ATENDEMOS EN QUINTANA ROO",
      title: "Experiencia en los sectores que más importan en Quintana Roo",
      items: [
        {
          name: "Construcción",
          desc: "Años de experiencia en el sector. Amortización de anticipos en estimaciones semanales, maquila de nómina semanal, avisos ante el SATQ, presentación de SIROC, cumplimiento en seguridad social, alta en REPSE y declaraciones informativas cuatrimestrales (ICSOE y SISUB).",
          href: `${b}/sectores/construccion`,
          img: sectorConstruccion,
          cta: "VER ESPECIALIZACIÓN →",
        },
        {
          name: "Comercializadoras",
          desc: "Distribuidoras, importadoras, empresas con ventas al mayoreo y minoristas al público general con tiendas o centro de distribución.",
          href: `${b}/sectores/comercial`,
          img: sectorComercial,
          cta: "VER ESPECIALIZACIÓN →",
        },
        {
          name: "RESICO",
          desc: "Personas físicas con actividad empresarial y profesional o RESICO: freelancers, consultores, profesionistas independientes y contratistas.",
          href: `${b}/sectores/resico`,
          img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=960&q=80&fit=crop",
          cta: "VER ESPECIALIZACIÓN →",
        },
        {
          name: "Asesores Inmobiliarios",
          desc: "Comisiones inmobiliarias con reglas fiscales específicas. CFDI correcto y régimen óptimo. Apoyamos en operaciones para que se cierren de la manera más eficiente desde el punto de vista fiscal.",
          href: `${b}/sectores/inmobiliario`,
          img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=960&q=80&fit=crop",
          cta: "VER ESPECIALIZACIÓN →",
        },
        {
          name: "Renta Vacacional",
          desc: "Propietarios y administradores de inmuebles en Airbnb, Booking y otras plataformas. ISR, IVA, ISH, CFDI, conciliación de plataformas y administración operativa para hospedaje en Cancún y Riviera Maya.",
          href: `${b}/sectores/renta-vacacional`,
          img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=960&q=80&fit=crop",
          cta: "VER ESPECIALIZACIÓN →",
        },
      ],
    },
    equipo: {
      label: "EQUIPO CONTABLE EN CANCÚN",
      title: "Nuestro equipo",
      desc: "El equipo que respalda tu tranquilidad financiera — contadores con trayectoria en grandes firmas, comprometidos con cumplir lo que decimos.",
    },
    testimonials: { label: "LO QUE DICEN NUESTROS CLIENTES EN CANCÚN" },
    ctaFinal: {
      label: "CONTACTA A TU CONTADOR EN CANCÚN",
      title: "Hablemos de tu negocio.",
      desc: "Si llevas tiempo postergando el orden en tu contabilidad, o quieres una Firma que de verdad responda cuando lo necesitas, es buen momento para hablar.",
      cta: "ESCRÍBENOS POR WHATSAPP",
    },
    faq: {
      label: "CONTABILIDAD EN CANCÚN — PREGUNTAS FRECUENTES",
      title: "Sobre nuestro despacho contable en Cancún",
      items: [
        {
          q: "¿Cuánto cobra un contador en Cancún?",
          a: "El costo varía según los servicios requeridos. La contabilidad básica para una empresa pequeña puede empezar desde $2,000–$4,000 MXN/mes. Para empresas medianas con nómina y facturación incluidas, el rango es de $5,000–$15,000 MXN/mes. En Camhaji Consultores hacemos una cotización personalizada sin costo — cuéntanos tu operación y te damos un número adecuado a tu realidad.",
        },
        {
          q: "¿Cómo elegir una buena Firma contable en Cancún?",
          a: "Busca una Firma con equipo certificado, experiencia en tu sector, uso de software actualizado y comunicación clara y accesible. Que te expliquen lo que hacen — no solo que te manden el comprobante de declaración.",
        },
        {
          q: "¿Qué incluye el servicio de contabilidad mensual?",
          a: "Solicitud y revisión de documentos, registro contable, conciliación de estado de cuenta con facturas, cálculo de impuestos, llenado de declaraciones y envío al cliente para autorizar el pago. Nos adaptamos al canal que prefiere el cliente — correo o WhatsApp.",
        },
        {
          q: "¿Atienden empresas fuera de Cancún?",
          a: "Sí. Trabajamos con empresas en todo Quintana Roo. Nos adaptamos al canal de comunicación del cliente, por lo que la distancia no es un obstáculo.",
        },
        {
          q: "¿Tienen experiencia con empresas que están atrasadas en el SAT?",
          a: "Sí. Es uno de los casos más frecuentes con los que llegan nuevos clientes. El primer paso es un diagnóstico de la situación fiscal, sin juicios, para entender exactamente dónde está el problema y qué se necesita para regularizarse.",
        },
      ],
    },
  };
}