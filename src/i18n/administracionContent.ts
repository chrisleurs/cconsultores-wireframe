import type { Lang } from "./lang";

export interface AdministracionContent {
  seo: { title: string; description: string };
  jsonLd: { name: string; description: string };
  bcServices: string; bcCurrent: string;
  heroLabel: string; heroH1: string; heroIntro: string;
  ordenLabel: string; ordenTitle: string; ordenP1: string; ordenP2: string;
  splitLabel: string; splitTitle: string; splitText: string;
  incluyeLabel: string; incluyeTitle: string;
  servicios: { title: string; desc: string }[];
  contpaqiLabel: string; contpaqiTitle: string; contpaqiText: string;
  bandLabel: string; bandTitle: string; bandText: string;
  faqLabel: string; faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaLabel: string; ctaTitle: string; ctaIntro: string; ctaBtn: string;
}

export function getAdministracionContent(lang: Lang): AdministracionContent {
  if (lang === "en") {
    return {
      seo: { title: "Integrated Administration in Cancún | Camhaji Consultores", description: "Administrative and operational support for growing companies in Cancún: CFDI billing, payment complements, accounts receivable and document organization." },
      jsonLd: { name: "Integrated Administration in Cancún", description: "Administrative and operational support: CFDI issuance, payment complements, accounts receivable, document organization and continuous administrative support for companies in Cancún." },
      bcServices: "Services", bcCurrent: "Administration",
      heroLabel: "INTEGRATED ADMINISTRATION IN CANCÚN",
      heroH1: "Administrative and operational support for growing companies.",
      heroIntro: "Running a company shouldn't depend on improvised processes, scattered information or manual follow-up. At Camhaji Consultores we help our clients centralize administrative processes, keep operational control and reduce errors in key tasks like billing, document follow-up, collections and day-to-day administration.",
      ordenLabel: "BUSINESS ADMINISTRATION IN CANCÚN",
      ordenTitle: "Administrative order so your company can grow.",
      ordenP1: "As a company grows, operational complexity grows too: billing, payment follow-up, document control, AR, suppliers and internal processes. Without proper structure, errors start to accumulate and end up affecting cash flow, financial control and customer service.",
      ordenP2: "Our integrated administration service helps keep organized processes, ongoing follow-up and greater operational clarity for the business.",
      splitLabel: "ADMINISTRATIVE SUPPORT & OPERATIONAL CONTROL",
      splitTitle: "Administrative processes that sustain the company's day-to-day",
      splitText: "We centralize billing, payment complements, accounts receivable and operational documentation so information is organized, available and ready when the company needs it.",
      incluyeLabel: "INTEGRATED ADMINISTRATION SERVICE",
      incluyeTitle: "What our integrated administration service includes",
      servicios: [
        { title: "CFDI issuance", desc: "Ordinary invoices, credit notes, payment complements, payroll CFDI. Each type with the correct CFDI use, verified recipient data and the right tax regime assigned." },
        { title: "Real-time SAT stamping", desc: "We use CONTPAQi connected directly to the SAT. Stamping is immediate and the receipt is registered from the very first moment." },
        { title: "Digital archive and document administration", desc: "All issued and received CFDI are filed in an organized way. The SAT requires keeping them for a minimum of 5 years." },
        { title: "Supplier invoice verification", desc: "We don't just issue — we also verify that the CFDI you receive from suppliers are valid and deductible." },
        { title: "Cancellations and corrections", desc: "When there's an error, we correct it with the procedure required by SAT regulations." },
      ],
      contpaqiLabel: "CONTPAQi BILLING PLATFORM",
      contpaqiTitle: "Administrative processes backed by a leading platform in Mexico.",
      contpaqiText: "We work with CONTPAQi Facturación, one of the most widely used administrative and billing systems in Mexico, integrated directly with current SAT provisions. This lets us maintain billing and administrative control with greater precision, traceability and document compatibility — making reviews, reconciliations and operational follow-up easier for our clients.",
      bandLabel: "INTEGRATED ADMINISTRATION FOR COMPANIES IN CANCÚN",
      bandTitle: "A single team to keep your operation organized",
      bandText: "Our goal is to help each company's administrative operation run with greater order, follow-up and control — so entrepreneurs and executives can focus on growing the business.",
      faqLabel: "INTEGRATED ADMINISTRATION — FAQ",
      faqTitle: "About integrated administration",
      faqs: [
        { q: "What happens if a CFDI is issued incorrectly?", a: "A CFDI with errors can create administrative issues, client rejection, accounting discrepancies or tax inconsistencies with the SAT. Depending on the type of error, cancellation, substitution or related complements may be required. That's why control and review in billing processes is essential to avoid later issues." },
        { q: "What information should be validated before issuing a CFDI?", a: "It's important to verify data like RFC, tax regime, ZIP code, CFDI use and payment method, plus validate that the operation is properly documented and administratively recorded. Proper upstream validation reduces errors and improves the company's financial and accounting control." },
        { q: "What if I don't keep control over payment complements and collections?", a: "Lack of follow-up on payment complements can create gaps between billing, collections and accounting records, plus tax inconsistencies around effectively collected income. Administrative control over these processes helps keep financial information clearer and more organized." },
        { q: "How long should CFDI and administrative files be kept?", a: "Electronic invoices and related documentation must be kept per current tax law. Beyond the PDF, it's important to safeguard XML files and maintain proper document organization for future reviews or clarifications." },
      ],
      ctaLabel: "HIRE YOUR ADMINISTRATION SERVICE IN CANCÚN",
      ctaTitle: "Let's talk about your administration.",
      ctaIntro: "Tell us how your company operates and which administrative processes you need to centralize.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Administración Integral en Cancún | Camhaji Consultores", description: "Soporte administrativo y operativo para empresas en crecimiento en Cancún: facturación CFDI, complementos de pago, cuentas por cobrar y organización documental." },
    jsonLd: { name: "Administración Integral en Cancún", description: "Soporte administrativo y operativo: emisión de CFDI, complementos de pago, cuentas por cobrar, organización documental y soporte administrativo continuo para empresas en Cancún." },
    bcServices: "Servicios", bcCurrent: "Administración",
    heroLabel: "ADMINISTRACIÓN INTEGRAL EN CANCÚN",
    heroH1: "Soporte administrativo y operativo para empresas en crecimiento.",
    heroIntro: "La administración de una empresa no debería depender de procesos improvisados, información dispersa o seguimiento manual. En Camhaji Consultores ayudamos a nuestros clientes a centralizar procesos administrativos, mantener control operativo y reducir errores en tareas clave como facturación, seguimiento documental, cobranza y gestión administrativa diaria.",
    ordenLabel: "ADMINISTRACIÓN EMPRESARIAL EN CANCÚN",
    ordenTitle: "Orden administrativo para que tu empresa pueda crecer.",
    ordenP1: "Conforme una empresa crece, también aumenta la complejidad operativa: facturación, seguimiento de pagos, control documental, cuentas por cobrar, proveedores y procesos administrativos internos. Sin una estructura adecuada, los errores comienzan a acumularse y terminan afectando flujo de efectivo, control financiero y atención al cliente.",
    ordenP2: "Nuestro servicio de administración integral ayuda a mantener procesos organizados, seguimiento constante y mayor claridad operativa para el negocio.",
    splitLabel: "SOPORTE ADMINISTRATIVO Y CONTROL OPERATIVO",
    splitTitle: "Procesos administrativos que sostienen el día a día de la empresa",
    splitText: "Centralizamos facturación, complementos de pago, cuentas por cobrar y documentación operativa para que la información esté ordenada, disponible y lista cuando la empresa la necesita.",
    incluyeLabel: "SERVICIO DE ADMINISTRACIÓN INTEGRAL",
    incluyeTitle: "Qué incluye nuestro servicio de administración integral",
    servicios: [
      { title: "Emisión de CFDI", desc: "Facturas ordinarias, notas de crédito, complementos de pago, CFDI de nómina. Cada tipo con el uso del CFDI correcto, los datos del receptor verificados y el régimen fiscal bien asignado." },
      { title: "Timbrado ante el SAT en tiempo real", desc: "Usamos CONTPAQi conectado directamente al SAT. El timbrado es inmediato y el comprobante queda registrado desde el primer momento." },
      { title: "Archivo digital y administración de comprobantes", desc: "Todos los CFDI emitidos y recibidos quedan archivados de forma organizada. El SAT exige conservarlos por un mínimo de 5 años." },
      { title: "Verificación de facturas de proveedores", desc: "No solo emitimos — también verificamos que los CFDI que recibes de tus proveedores sean válidos y deducibles." },
      { title: "Cancelaciones y rectificaciones", desc: "Cuando hay un error, lo corregimos con el procedimiento correcto conforme a la normatividad del SAT." },
    ],
    contpaqiLabel: "PLATAFORMA CONTPAQi FACTURACIÓN",
    contpaqiTitle: "Procesos administrativos respaldados por una plataforma líder en México.",
    contpaqiText: "Trabajamos con CONTPAQi Facturación, uno de los sistemas administrativos y de facturación más utilizados en México e integrado directamente con las disposiciones vigentes del SAT. Esto nos permite mantener procesos de facturación y control administrativo con mayor precisión, trazabilidad y compatibilidad documental, facilitando revisiones, conciliaciones y seguimiento operativo para nuestros clientes.",
    bandLabel: "ADMINISTRACIÓN INTEGRAL PARA EMPRESAS EN CANCÚN",
    bandTitle: "Un solo equipo para mantener tu operación organizada",
    bandText: "Nuestro objetivo es ayudar a que la operación administrativa de cada empresa funcione con mayor orden, seguimiento y control, permitiendo que empresarios y directivos puedan enfocarse en el crecimiento del negocio.",
    faqLabel: "ADMINISTRACIÓN INTEGRAL — PREGUNTAS FRECUENTES",
    faqTitle: "Sobre administración integral",
    faqs: [
      { q: "¿Qué sucede si una factura CFDI se emite incorrectamente?", a: "Un CFDI con errores puede generar problemas administrativos, rechazo por parte del cliente, diferencias contables o inconsistencias fiscales ante el SAT. Dependiendo del tipo de error, puede requerirse cancelación, sustitución o emisión de complementos relacionados. Por eso, mantener control y revisión en los procesos de facturación es fundamental para evitar incidencias posteriores." },
      { q: "¿Qué información debe validarse antes de emitir un CFDI?", a: "Es importante verificar correctamente datos como RFC, régimen fiscal, código postal, uso de CFDI y forma de pago, además de validar que la operación esté correctamente documentada y registrada administrativamente. Una validación adecuada desde el origen reduce errores y facilita el control financiero y contable de la empresa." },
      { q: "¿Qué pasa si no llevo control sobre complementos de pago y cobranza?", a: "La falta de seguimiento en complementos de pago puede generar diferencias entre facturación, cobranza y registros contables, además de inconsistencias fiscales relacionadas con ingresos efectivamente cobrados. Mantener control administrativo sobre estos procesos ayuda a tener información financiera más clara y ordenada." },
      { q: "¿Por cuánto tiempo deben conservarse los CFDI y archivos administrativos?", a: "Las facturas electrónicas y su documentación relacionada deben conservarse conforme a los plazos establecidos por la legislación fiscal vigente. Además del PDF, es importante resguardar correctamente los archivos XML y mantener una organización documental adecuada para futuras revisiones o aclaraciones." },
    ],
    ctaLabel: "CONTRATA TU SERVICIO DE ADMINISTRACIÓN EN CANCÚN",
    ctaTitle: "Hablemos de tu administración.",
    ctaIntro: "Cuéntanos cómo opera tu empresa y qué procesos administrativos necesitas centralizar.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
