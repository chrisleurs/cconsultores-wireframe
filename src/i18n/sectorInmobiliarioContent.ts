import type { Lang } from "./lang";

interface Item { title: string; desc: string }
export interface InmobiliarioContent {
  seo: { title: string; description: string };
  bcInicio: string; bcSectores: string; bcCurrent: string;
  heroLabel: string; heroH1L1: string; heroH1L2: string; heroP: string;
  impuestosLabel: string; impuestosTitle: string;
  impuestos: Item[];
  splitLabel: string; splitTitle: string; splitP: string;
  cfdiLabel: string; cfdiTitle: string; cfdiP1: string; cfdiP2: string; cfdiClose: string;
  resicoLabel: string; resicoTitle: string; resicoP1: string; resicoP2: string;
  loQueHacemosLabel: string; loQueHacemosTitle: string;
  loQueHacemos: string[]; loQueHacemosFooter: string;
  areasLabel: string; areasTitle: string; areas: Item[];
  expLabel: string; expTitle: string; expP1: string; expP2: string; expClose: string;
  bandLabel: string; bandText: string;
  faqLabel: string; faqTitle: string;
  faqs: { q: string; a: string }[];
  ctaLabel: string; ctaTitle: string; ctaP: string; ctaBtn: string;
}

export function getInmobiliarioContent(lang: Lang): InmobiliarioContent {
  if (lang === "en") {
    return {
      seo: { title: "Bookkeeping for Real Estate Agents in Cancún | Camhaji", description: "Accounting and tax services for real estate agents and developers in Cancún and the Riviera Maya." },
      bcInicio: "Home", bcSectores: "Industries", bcCurrent: "Real Estate Agents",
      heroLabel: "BOOKKEEPING FOR REAL ESTATE AGENTS",
      heroH1L1: "Bookkeeping for Real Estate",
      heroH1L2: "Agents in Cancún",
      heroP: "Cancún's real estate market moves high commissions. But many independent agents come to us once the SAT has already sent them a letter — because nobody ever explained exactly how to report their income or how to issue their invoices.",
      impuestosLabel: "TAXES FOR REAL ESTATE AGENTS IN MEXICO",
      impuestosTitle: "The taxes a real estate agent faces in Mexico",
      impuestos: [
        { title: "ISR on commissions", desc: "Every commission you receive is taxable income. Depending on your regime, the rate can be 1% to 2.5% under RESICO or up to 35% under the general regime." },
        { title: "IVA", desc: "If you charge intermediation commissions, in most cases the service is subject to 16% IVA. You must charge it, report it and pay it." },
        { title: "Withholdings", desc: "When your client is a company, they are required to withhold part of the ISR and IVA from your invoice. That withholding affects the net you receive and must be calculated correctly." },
        { title: "Mandatory CFDI", desc: "For every commission you must issue an electronic invoice with the correct data. Without a CFDI, the income still exists for the SAT even if you don't report it." },
      ],
      splitLabel: "INVOICING REAL ESTATE COMMISSIONS",
      splitTitle: "Every commission invoiced correctly is a deduction your client keeps",
      splitP: "Cancún's real estate market moves high commissions. An incorrect CFDI doesn't just affect you — it also takes away your client's deduction.",
      cfdiLabel: "CFDI FOR REAL ESTATE COMMISSIONS",
      cfdiTitle: "CFDI for commissions: how to invoice correctly",
      cfdiP1: "A real estate commission invoice is not like any other service invoice. The CFDI usage code, product key and payment method must be correct for it to be deductible for your client and valid for you.",
      cfdiP2: "The most common errors we see: wrong tax regime on the receipt, wrong service key, miscalculated IVA when there is partial withholding, and cancellations made out of time.",
      cfdiClose: "With Camhaji, every CFDI for commissions comes out correctly from day one.",
      resicoLabel: "RESICO FOR REAL ESTATE AGENTS",
      resicoTitle: "RESICO for real estate agents: is it worth it?",
      resicoP1: "It depends. RESICO is an attractive option if your annual income doesn't exceed 3.5 million pesos: low ISR rates, simplified monthly returns, fewer procedures.",
      resicoP2: "But there are conditions to verify first: how your relationship with the agency is structured, whether you have employees, whether you have income from other sources. It's not a decision to make without a prior diagnosis.",
      loQueHacemosLabel: "ACCOUNTING SERVICES FOR REAL ESTATE",
      loQueHacemosTitle: "What Camhaji does for your real estate business",
      loQueHacemos: [
        "Diagnosis of your current tax situation (regime, obligations, history)",
        "Correct CFDI issuance for every commission",
        "Monthly ISR and IVA calculation and filing",
        "Handling of withholdings from corporate clients",
        "Annual return",
        "Advice on whether RESICO is the most convenient regime for your income level",
      ],
      loQueHacemosFooter: "No accumulated backlog. No badly issued invoices. No surprises.",
      areasLabel: "KEY AREAS FOR AGENTS AND REAL ESTATE AGENCIES",
      areasTitle: "Key areas for real estate agents and agencies",
      areas: [
        { title: "Correct invoicing of commissions and income", desc: "Proper issuance of CFDI related to real estate services, commissions and commercial operations." },
        { title: "Income and cash-flow control", desc: "Administrative and financial follow-up to keep clarity on income received, pending commissions and operational flow." },
        { title: "Tax returns and provisional payments", desc: "Monthly and annual compliance with tax obligations for individuals and entities engaged in real estate activities." },
        { title: "Document management and administrative support", desc: "Control and safekeeping of tax and administrative information related to operations, clients and receipts." },
      ],
      expLabel: "EXPERIENCE IN THE REAL ESTATE SECTOR",
      expTitle: "We understand how the real estate market in Cancún and the Riviera Maya operates",
      expP1: "We've worked with real estate agents, brokers and companies related to the sector, understanding the commercial and tax dynamics typical of a region with strong tourism activity and real estate investment.",
      expP2: "We know the challenges related to variable commissions, high-value transactions, foreign clients and managing income in a highly dynamic commercial environment.",
      expClose: "We don't just do the bookkeeping. We help maintain order and financial clarity as the operation grows.",
      bandLabel: "REAL ESTATE MARKET IN CANCÚN",
      bandText: "The most active real estate market in Mexico — and one of the most scrutinized by tax authorities.",
      faqLabel: "REAL ESTATE AGENTS — FAQ",
      faqTitle: "Real estate agents in Cancún",
      faqs: [
        { q: "What taxes does a real estate agent pay in Mexico?", a: "It depends on the tax regime. Under RESICO, you pay between 1% and 2.5% monthly ISR on your commissions. Under the General Regime, the rate can reach 35% but with more deductions available. You must also pay IVA on your intermediation services (16% in most cases)." },
        { q: "How do I invoice real estate commissions with a CFDI?", a: "The agent must issue a CFDI for the commission amount. The concept should correspond to 'real estate intermediation services'. If the company withholds ISR from you, that withholding is reflected on the CFDI. The payment complement applies if the commission isn't paid at the moment of the transaction." },
        { q: "Is RESICO worth it for a real estate agent in Cancún?", a: "For agents with annual commission income below $3.5 million pesos, RESICO is usually convenient: low rates, simplified process. For agents with high volumes or significant deductible expense structures, the General Regime may suit them better." },
      ],
      ctaLabel: "HIRE YOUR REAL ESTATE ACCOUNTANT IN CANCÚN",
      ctaTitle: "Let's talk about your taxes.",
      ctaP: "Tell us your situation. If you have overdue filings or aren't sure your regime is the right one, we'll do a no-cost diagnosis.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Contabilidad para Asesores Inmobiliarios en Cancún | Camhaji", description: "Servicios contables y fiscales para asesores inmobiliarios y desarrolladoras en Cancún y Riviera Maya." },
    bcInicio: "Inicio", bcSectores: "Sectores", bcCurrent: "Asesores Inmobiliarios",
    heroLabel: "CONTABILIDAD PARA ASESORES INMOBILIARIOS",
    heroH1L1: "Contabilidad para Asesores",
    heroH1L2: "Inmobiliarios en Cancún",
    heroP: "El mercado inmobiliario de Cancún mueve comisiones altas. Pero muchos asesores independientes llegan a nosotros cuando el SAT ya les mandó una carta — porque nunca les explicaron exactamente cómo declarar sus ingresos ni cómo emitir sus facturas.",
    impuestosLabel: "IMPUESTOS PARA ASESORES INMOBILIARIOS EN MÉXICO",
    impuestosTitle: "Los impuestos que enfrenta un asesor inmobiliario en México",
    impuestos: [
      { title: "ISR sobre comisiones", desc: "Cada comisión que recibes es un ingreso gravado. Dependiendo de tu régimen, la tasa puede ir del 1% al 2.5% en RESICO o hasta el 35% en régimen general." },
      { title: "IVA", desc: "Si cobras comisiones por intermediación, en la mayoría de los casos el servicio está gravado con IVA al 16%. Tienes que cobrarlo, declararlo y pagarlo." },
      { title: "Retenciones", desc: "Cuando tu cliente es una empresa, está obligada a retenerte parte del ISR e IVA de tu factura. Esa retención afecta el neto que recibes y hay que calcularla bien." },
      { title: "CFDI obligatorio", desc: "Por cada comisión debes emitir una factura electrónica con los datos correctos. Sin CFDI, el ingreso sigue existiendo para el SAT aunque no lo declares." },
    ],
    splitLabel: "FACTURACIÓN DE COMISIONES INMOBILIARIAS",
    splitTitle: "Cada comisión bien facturada es una deducción que tu cliente conserva",
    splitP: "El mercado inmobiliario de Cancún mueve comisiones altas. Un CFDI incorrecto no solo te afecta a ti — también le quita la deducción a tu cliente.",
    cfdiLabel: "CFDI PARA COMISIONES INMOBILIARIAS",
    cfdiTitle: "CFDI por comisiones: cómo facturar correctamente",
    cfdiP1: "La factura de una comisión inmobiliaria no es igual a la de cualquier servicio. El uso del CFDI, la clave de producto y la forma de pago tienen que ser correctos para que sea deducible para tu cliente y válida para ti.",
    cfdiP2: "Los errores más comunes que vemos: régimen fiscal incorrecto en el comprobante, clave de servicio equivocada, IVA mal calculado cuando hay retención parcial, y cancelaciones hechas fuera de tiempo.",
    cfdiClose: "Con Camhaji, cada CFDI por comisión sale correcto desde el primer momento.",
    resicoLabel: "RESICO PARA ASESORES INMOBILIARIOS",
    resicoTitle: "RESICO para asesores inmobiliarios: ¿conviene?",
    resicoP1: "Depende. El RESICO es una opción atractiva si tus ingresos anuales no superan los $3.5 millones de pesos: tasas de ISR bajas, declaración mensual simplificada, menos trámites.",
    resicoP2: "Pero hay condiciones que hay que verificar antes: cómo está constituida tu relación con la inmobiliaria, si tienes empleados, si tienes ingresos de otras fuentes. No es una decisión que deba tomarse sin diagnóstico previo.",
    loQueHacemosLabel: "SERVICIOS CONTABLES PARA INMOBILIARIOS",
    loQueHacemosTitle: "Lo que Camhaji hace por tu negocio inmobiliario",
    loQueHacemos: [
      "Diagnóstico de tu situación fiscal actual (régimen, obligaciones, historial)",
      "Emisión correcta de CFDI por cada comisión",
      "Cálculo y declaración mensual de ISR e IVA",
      "Manejo de retenciones de clientes personas morales",
      "Declaración anual",
      "Asesoría sobre si el RESICO es el régimen más conveniente para tu nivel de ingresos",
    ],
    loQueHacemosFooter: "Sin pendientes acumulados. Sin facturas mal emitidas. Sin sorpresas.",
    areasLabel: "ÁREAS CLAVE PARA ASESORES Y AGENCIAS INMOBILIARIAS",
    areasTitle: "Áreas clave para asesores y agencias inmobiliarias",
    areas: [
      { title: "Facturación correcta de comisiones e ingresos", desc: "Emisión adecuada de CFDI relacionados con servicios inmobiliarios, comisiones y operaciones comerciales." },
      { title: "Control de ingresos y flujo de efectivo", desc: "Seguimiento administrativo y financiero para mantener claridad sobre ingresos cobrados, comisiones pendientes y flujo operativo." },
      { title: "Declaraciones fiscales y pagos provisionales", desc: "Cumplimiento mensual y anual de obligaciones fiscales para personas físicas y morales relacionadas con actividades inmobiliarias." },
      { title: "Organización documental y soporte administrativo", desc: "Control y resguardo de información fiscal y administrativa relacionada con operaciones, clientes y comprobantes." },
    ],
    expLabel: "EXPERIENCIA EN EL SECTOR INMOBILIARIO",
    expTitle: "Entendemos cómo opera el mercado inmobiliario en Cancún y Riviera Maya",
    expP1: "Hemos trabajado con asesores inmobiliarios, brokers y empresas relacionadas con el sector, entendiendo las dinámicas comerciales y fiscales propias de una región con fuerte actividad turística e inversión inmobiliaria.",
    expP2: "Conocemos los retos relacionados con comisiones variables, operaciones de alto valor, clientes extranjeros y administración de ingresos en un entorno comercial altamente dinámico.",
    expClose: "No solo llevamos la contabilidad. Ayudamos a mantener orden y claridad financiera conforme crece la operación.",
    bandLabel: "MERCADO INMOBILIARIO EN CANCÚN",
    bandText: "El mercado inmobiliario más activo de México — y uno de los más fiscalizados.",
    faqLabel: "ASESORES INMOBILIARIOS — PREGUNTAS FRECUENTES",
    faqTitle: "Asesores inmobiliarios en Cancún",
    faqs: [
      { q: "¿Qué impuestos paga un asesor inmobiliario en México?", a: "Depende del régimen fiscal. En RESICO, paga entre 1% y 2.5% de ISR mensual sobre sus comisiones. En Régimen General, la tasa puede llegar al 35% pero con más deducciones disponibles. Además, debe pagar IVA sobre sus servicios de intermediación (16% en la mayoría de casos)." },
      { q: "¿Cómo facturar comisiones inmobiliarias con CFDI?", a: "El asesor debe emitir un CFDI por el monto de su comisión. El concepto debe corresponder a 'servicios de intermediación inmobiliaria'. Si la empresa te retiene ISR, esa retención se refleja en el CFDI. El complemento de pago aplica si la comisión no se liquida al momento de la operación." },
      { q: "¿Conviene el RESICO para un asesor inmobiliario en Cancún?", a: "Para asesores con ingresos anuales de comisiones por debajo de $3.5 millones, el RESICO suele ser conveniente: tasas bajas, proceso simplificado. Para asesores con volúmenes altos o con estructura de gastos deducibles significativos, puede convenir el Régimen General." },
    ],
    ctaLabel: "CONTRATA TU CONTADOR INMOBILIARIO EN CANCÚN",
    ctaTitle: "Hablemos de tus impuestos.",
    ctaP: "Cuéntanos tu situación. Si tienes declaraciones atrasadas o no sabes si tu régimen es el correcto, hacemos un diagnóstico sin costo.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
