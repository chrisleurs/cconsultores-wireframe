import type { Lang } from "./lang";

interface Item { title: string; desc: string }
export interface RentaVacacionalContent {
  seo: { title: string; description: string };
  jsonLd: { name: string; description: string; serviceType: string };
  bcInicio: string; bcSectores: string; bcCurrent: string;
  heroLabel: string; heroH1L1: string; heroH1L2: string; heroH1L3: string; heroP: string;
  introLabel: string; introTitle: string; introP: string;
  mercadoLabel: string; mercadoTitle: string; mercadoP1: string; mercadoP2: string; mercadoP3: string;
  areasLabel: string; areasTitle: string; areas: Item[];
  expLabel: string; expTitle: string; expP1: string; expP2: string;
  bandLabel: string; bandText: string;
  faqLabel: string; faqTitle: string; faqs: { q: string; a: string }[];
  ctaLabel: string; ctaTitle: string; ctaP: string; ctaBtn: string;
}

export function getRentaVacacionalContent(lang: Lang): RentaVacacionalContent {
  if (lang === "en") {
    return {
      seo: { title: "Bookkeeping for Vacation Rentals in Cancún | Airbnb and Booking | Camhaji", description: "Accounting and administration for owners and hosts of vacation rentals in Cancún and the Riviera Maya. Airbnb, Booking, ISR, IVA, ISH, CFDI and digital platforms." },
      jsonLd: { name: "Bookkeeping for Vacation Rentals in Cancún", description: "Accounting, tax and administrative services for owners and managers of vacation rentals on digital platforms such as Airbnb and Booking in Cancún and the Riviera Maya.", serviceType: "Vacation rental accounting and tax compliance" },
      bcInicio: "Home", bcSectores: "Industries", bcCurrent: "Vacation Rentals",
      heroLabel: "ACCOUNTING AND ADMINISTRATION FOR VACATION RENTALS IN CANCÚN",
      heroH1L1: "Tax and operational control",
      heroH1L2: "for properties on",
      heroH1L3: "digital platforms",
      heroP: "Managing properties on Airbnb, Booking and other platforms means much more than receiving reservations. Variable income, platform commissions, IVA, ISH, CFDI, international payments, operational administration and tax obligations require clear processes and constant follow-up to maintain order and profitability.",
      introLabel: "CAMHAJI FOR VACATION RENTALS",
      introTitle: "Financial order, tax compliance and an organized operation",
      introP: "At Camhaji Consultores we help owners, hosts and managers of vacation rentals maintain financial control, tax compliance and an organized administrative operation.",
      mercadoLabel: "VACATION RENTALS IN QUINTANA ROO",
      mercadoTitle: "An industry that grew fast and demands administrative structure",
      mercadoP1: "The vacation rental market in Cancún and the Riviera Maya evolved rapidly over the last few years. Many owners and managers started operating independently and now handle multiple properties, high reservation volumes and constant operations through digital platforms.",
      mercadoP2: "As the operation grows, obligations related to taxes, invoicing, income control, platform administration and state and federal compliance also grow.",
      mercadoP3: "Without an adequate administrative structure, operational growth can quickly turn into financial disorder and tax risk.",
      areasLabel: "KEY AREAS FOR VACATION RENTALS",
      areasTitle: "What we cover in your hospitality operation",
      areas: [
        { title: "Income control from digital platforms", desc: "Follow-up and reconciliation of income related to Airbnb, Booking and other hospitality platforms." },
        { title: "Tax compliance and applicable taxes", desc: "Administration of obligations related to ISR, IVA, platform withholdings and state taxes linked to lodging and service provision." },
        { title: "CFDI invoicing and document control", desc: "Issuance and control of CFDI related to lodging, commissions, administration and services linked to the operation." },
        { title: "Operational administration and cash flow", desc: "Administrative follow-up of income, payments, commissions and movements related to the daily operation of vacation properties." },
        { title: "Financial organization for owners and managers", desc: "Administrative and accounting structure aimed at maintaining clarity on profitability, income and tax obligations for each property or group of properties." },
      ],
      expLabel: "EXPERIENCE IN THE VACATION RENTAL SECTOR",
      expTitle: "We understand how Cancún and Riviera Maya's tourism market operates",
      expP1: "We work with owners, managers and operators of properties dedicated to vacation rentals in one of the regions with the highest tourism activity in the country.",
      expP2: "We know the dynamics related to digital platforms, daily property operation, variable income, foreign guests and sector-specific tax obligations.",
      bandLabel: "OUR APPROACH",
      bandText: "The goal isn't just to comply. It's to help you operate with order, clarity and peace of mind.",
      faqLabel: "VACATION RENTALS — FAQ",
      faqTitle: "Vacation rentals in Cancún and the Riviera Maya",
      faqs: [
        { q: "Do platforms like Airbnb or Booking already pay all my taxes?", a: "Not necessarily. While some platforms perform certain tax withholdings, the taxpayer remains responsible for properly complying with their federal and state tax obligations according to their specific situation. Each operation may involve ISR, IVA, withholdings and state lodging taxes, so it's important to maintain proper administrative and tax control." },
        { q: "Must I issue a CFDI if I receive income through digital platforms?", a: "Depending on the tax structure and type of operation, there may be an obligation to issue a CFDI for income related to lodging or services linked to vacation rentals. In addition to correct invoicing, it's important to maintain reconciliation among bank deposits, platforms and tax filings." },
        { q: "What if I have several properties on digital platforms?", a: "As the number of properties grows, so does the administrative and tax complexity of the operation: variable income, supplier payments, maintenance, commissions, taxes and per-property financial control. Having organized administrative and accounting processes helps maintain clarity on profitability and tax compliance." },
        { q: "Is RESICO suitable for vacation rental owners or managers?", a: "For individuals this is NOT possible, since RESICO is incompatible with the regime for Individuals with Business Activity through Technology Platforms. However, its suitability depends on income volume, operational structure, number of properties, expense level and the type of activity, so each case must be analyzed individually." },
        { q: "Do vacation rentals pay IVA and lodging tax?", a: "Lodging-related operations may generate both federal and state obligations, including IVA and local lodging taxes under the applicable legislation in Quintana Roo. Properly determining and administering these taxes is essential to avoid tax discrepancies and future contingencies." },
        { q: "What happens if I receive payments in dollars or from abroad?", a: "Operations with foreign guests and international payments require proper control of income, exchange rates, bank reconciliations and corresponding tax compliance. Correctly recording and administering these movements helps avoid tax inconsistencies and facilitates the financial control of the operation." },
        { q: "Do I need to register with the SAT and state authorities?", a: "Yes. Vacation rental activities normally require registration and compliance with federal tax authorities and, in certain cases, state authorities, depending on the type of operation and structure used. Formalizing the activity correctly from the start helps you operate with greater peace of mind and reduces future risks." },
      ],
      ctaLabel: "HIRE YOUR ACCOUNTANT FOR VACATION RENTALS IN CANCÚN",
      ctaTitle: "Let's talk about your operation.",
      ctaP: "Tell us how many properties you handle, which platforms you operate on and what you currently have under control. We do a no-cost diagnosis to define the next step.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Contabilidad para Rentas Vacacionales en Cancún | Airbnb y Booking | Camhaji", description: "Contabilidad y administración para propietarios y hosts de rentas vacacionales en Cancún y Riviera Maya. Airbnb, Booking, ISR, IVA, ISH, CFDI y plataformas digitales." },
    jsonLd: { name: "Contabilidad para Rentas Vacacionales en Cancún", description: "Servicios contables, fiscales y administrativos para propietarios y administradores de rentas vacacionales en plataformas digitales como Airbnb y Booking en Cancún y Riviera Maya.", serviceType: "Vacation rental accounting and tax compliance" },
    bcInicio: "Inicio", bcSectores: "Sectores", bcCurrent: "Renta Vacacional",
    heroLabel: "CONTABILIDAD Y ADMINISTRACIÓN PARA RENTAS VACACIONALES EN CANCÚN",
    heroH1L1: "Control fiscal y operativo",
    heroH1L2: "para propiedades en",
    heroH1L3: "plataformas digitales",
    heroP: "Administrar propiedades en Airbnb, Booking y otras plataformas implica mucho más que recibir reservaciones. Ingresos variables, comisiones de plataformas, IVA, ISH, CFDI, pagos internacionales, administración operativa y obligaciones fiscales requieren procesos claros y seguimiento constante para mantener orden y rentabilidad.",
    introLabel: "CAMHAJI PARA RENTAS VACACIONALES",
    introTitle: "Orden financiero, cumplimiento fiscal y operación organizada",
    introP: "En Camhaji Consultores ayudamos a propietarios, hosts y administradores de rentas vacacionales a mantener control financiero, cumplimiento fiscal y operación administrativa organizada.",
    mercadoLabel: "RENTAS VACACIONALES EN QUINTANA ROO",
    mercadoTitle: "Una industria que creció rápido y exige estructura administrativa",
    mercadoP1: "El mercado de renta vacacional en Cancún y Riviera Maya evolucionó rápidamente durante los últimos años. Muchos propietarios y administradores comenzaron operando de forma independiente y hoy manejan múltiples propiedades, altos volúmenes de reservaciones y operaciones constantes a través de plataformas digitales.",
    mercadoP2: "Conforme crece la operación, también aumentan las obligaciones relacionadas con impuestos, facturación, control de ingresos, administración de plataformas y cumplimiento estatal y federal.",
    mercadoP3: "Sin una estructura administrativa adecuada, el crecimiento operativo puede convertirse rápidamente en desorden financiero y riesgos fiscales.",
    areasLabel: "ÁREAS CLAVE PARA RENTAS VACACIONALES",
    areasTitle: "Qué cubrimos en tu operación de hospedaje",
    areas: [
      { title: "Control de ingresos provenientes de plataformas digitales", desc: "Seguimiento y conciliación de ingresos relacionados con Airbnb, Booking y otras plataformas de hospedaje." },
      { title: "Cumplimiento fiscal e impuestos aplicables", desc: "Administración de obligaciones relacionadas con ISR, IVA, retenciones de plataformas e impuestos estatales vinculados con hospedaje y prestación de servicios." },
      { title: "Facturación CFDI y control documental", desc: "Emisión y control de CFDI relacionados con hospedaje, comisiones, administración y servicios vinculados con la operación." },
      { title: "Administración operativa y flujo de efectivo", desc: "Seguimiento administrativo de ingresos, pagos, comisiones y movimientos relacionados con la operación diaria de propiedades vacacionales." },
      { title: "Organización financiera para propietarios y administradores", desc: "Estructura administrativa y contable orientada a mantener claridad sobre rentabilidad, ingresos y obligaciones fiscales de cada propiedad o grupo de propiedades." },
    ],
    expLabel: "EXPERIENCIA EN EL SECTOR DE RENTA VACACIONAL",
    expTitle: "Entendemos cómo opera el mercado turístico de Cancún y Riviera Maya",
    expP1: "Trabajamos con propietarios, administradores y operadores de inmuebles destinados a renta vacacional en una de las regiones con mayor actividad turística del país.",
    expP2: "Conocemos las dinámicas relacionadas con plataformas digitales, operación diaria de propiedades, ingresos variables, huéspedes extranjeros y obligaciones fiscales específicas del sector.",
    bandLabel: "NUESTRO ENFOQUE",
    bandText: "El objetivo no es solo cumplir. Es ayudarte a operar con orden, claridad y tranquilidad.",
    faqLabel: "RENTAS VACACIONALES — PREGUNTAS FRECUENTES",
    faqTitle: "Renta vacacional en Cancún y Riviera Maya",
    faqs: [
      { q: "¿Las plataformas como Airbnb o Booking ya pagan todos mis impuestos?", a: "No necesariamente. Aunque algunas plataformas realizan determinadas retenciones fiscales, el contribuyente sigue siendo responsable de cumplir correctamente con sus obligaciones fiscales federales y estatales conforme a su situación específica. Cada operación puede implicar ISR, IVA, retenciones e impuestos estatales relacionados con hospedaje, por lo que resulta importante mantener control administrativo y fiscal adecuado." },
      { q: "¿Debo emitir CFDI si recibo ingresos por plataformas digitales?", a: "Dependiendo de la estructura fiscal y tipo de operación, puede existir obligación de emitir CFDI por los ingresos relacionados con hospedaje o servicios vinculados con la renta vacacional. Además de emitir correctamente la facturación, es importante mantener conciliación entre depósitos bancarios, plataformas y declaraciones fiscales." },
      { q: "¿Qué pasa si tengo varias propiedades en plataformas digitales?", a: "Conforme aumenta el número de propiedades, también crece la complejidad administrativa y fiscal de la operación: ingresos variables, pagos a proveedores, mantenimiento, comisiones, impuestos y control financiero por propiedad. Contar con procesos administrativos y contables organizados ayuda a mantener claridad sobre rentabilidad y cumplimiento fiscal." },
      { q: "¿Conviene RESICO para propietarios o administradores de rentas vacacionales?", a: "Para personas físicas esto NO es posible, ya que el RESICO es incompatible con el Régimen de Personas Físicas con Actividad Empresarial a través de Plataformas Tecnológicas. Sin embargo, su conveniencia depende del volumen de ingresos, estructura operativa, cantidad de propiedades, nivel de gastos y tipo de actividad realizada, por lo que cada caso debe analizarse individualmente." },
      { q: "¿Las rentas vacacionales pagan IVA e impuesto sobre hospedaje?", a: "Las operaciones relacionadas con hospedaje pueden generar obligaciones tanto federales como estatales, incluyendo IVA e impuestos locales sobre hospedaje conforme a la legislación aplicable en Quintana Roo. La correcta determinación y administración de estos impuestos es fundamental para evitar diferencias fiscales y contingencias futuras." },
      { q: "¿Qué sucede si recibo pagos en dólares o desde el extranjero?", a: "Las operaciones con huéspedes extranjeros y pagos internacionales requieren control adecuado de ingresos, tipo de cambio, conciliaciones bancarias y cumplimiento fiscal correspondiente. Mantener registro y administración correcta de estos movimientos ayuda a evitar inconsistencias fiscales y facilita el control financiero de la operación." },
      { q: "¿Necesito darme de alta ante SAT y autoridades estatales?", a: "Sí. Las actividades relacionadas con renta vacacional normalmente requieren inscripción y cumplimiento ante autoridades fiscales federales y, en ciertos casos, estatales, dependiendo del tipo de operación y estructura utilizada. Formalizar correctamente la actividad desde el inicio ayuda a operar con mayor tranquilidad y reducir riesgos futuros." },
    ],
    ctaLabel: "CONTRATA TU CONTADOR PARA RENTA VACACIONAL EN CANCÚN",
    ctaTitle: "Hablemos de tu operación.",
    ctaP: "Cuéntanos cuántas propiedades manejas, en qué plataformas operas y qué tienes hoy bajo control. Hacemos un diagnóstico sin costo para definir el siguiente paso.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
