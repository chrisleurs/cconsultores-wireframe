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
      seo: { title: "Bookkeeping for Real Estate Agencies in Cancún | Camhaji", description: "Accounting and tax services for real estate agencies, brokerages and developers in Cancún and the Riviera Maya." },
      bcInicio: "Home", bcSectores: "Industries", bcCurrent: "Real Estate Agencies",
      heroLabel: "BOOKKEEPING FOR REAL ESTATE AGENCIES",
      heroH1L1: "Bookkeeping for Real Estate",
      heroH1L2: "Agencies in Cancún",
      heroP: "Cancún's real estate market moves high commissions. But many agencies come to us once the SAT has already sent them a letter — because nobody ever explained exactly how to report agency income, how to manage withholdings from their team of agents, or how to issue their invoices.",
      impuestosLabel: "TAXES FOR REAL ESTATE AGENCIES IN MEXICO",
      impuestosTitle: "The taxes a real estate agency faces in Mexico",
      impuestos: [
        { title: "Corporate ISR on commissions", desc: "Every commission the agency receives is taxable income. For legal entities the rate is 30% on net profit, with the deductions properly supported in the books." },
        { title: "IVA", desc: "Intermediation commissions charged by the agency are subject to 16% IVA in most cases. The agency must charge it, report it and pay it." },
        { title: "Withholdings to agents", desc: "When the agency pays commissions to internal agents or subagents, it must apply the corresponding ISR and IVA withholdings, stamp them and report them. Doing this wrong is one of the most common SAT findings." },
        { title: "Mandatory CFDI", desc: "For every closed operation the agency must issue an electronic invoice with the correct data. Without a CFDI, the income still exists for the SAT even if it isn't reported." },
      ],
      splitLabel: "INVOICING REAL ESTATE COMMISSIONS",
      splitTitle: "Every commission invoiced correctly is a deduction your client keeps",
      splitP: "Cancún's real estate market moves high commissions. An incorrect CFDI doesn't just affect the agency — it also takes away your client's deduction.",
      cfdiLabel: "CFDI FOR REAL ESTATE COMMISSIONS",
      cfdiTitle: "CFDI for commissions: how to invoice correctly",
      cfdiP1: "A real estate commission invoice is not like any other service invoice. The CFDI usage code, product key and payment method must be correct for it to be deductible for your client and valid for the agency.",
      cfdiP2: "The most common errors we see: wrong tax regime on the receipt, wrong service key, miscalculated IVA when there is partial withholding, and cancellations made out of time.",
      cfdiClose: "With Camhaji, every CFDI for commissions issued by your agency comes out correctly from day one.",
      resicoLabel: "TAX REGIME FOR REAL ESTATE AGENCIES",
      resicoTitle: "Tax regime for a real estate agency: which one fits?",
      resicoP1: "Most established agencies operate as legal entities under the general regime, which allows deducting payroll, rent, marketing and operating expenses against commission income.",
      resicoP2: "Smaller agencies or those just starting out may benefit from RESICO (under 3.5 million pesos in annual income) or the simplified corporate regime. It's not a decision to make without a prior diagnosis of your structure and revenue.",
      loQueHacemosLabel: "ACCOUNTING SERVICES FOR REAL ESTATE AGENCIES",
      loQueHacemosTitle: "What Camhaji does for your real estate agency",
      loQueHacemos: [
        "Diagnosis of your agency's current tax situation (regime, obligations, history)",
        "Correct CFDI issuance for every commission closed by the agency",
        "Monthly ISR and IVA calculation and filing",
        "Withholdings and CFDIs for the agency's internal team of agents",
        "Annual return for the legal entity",
        "Advice on the most convenient tax regime for the agency's revenue and structure",
      ],
      loQueHacemosFooter: "No accumulated backlog. No badly issued invoices. No surprises.",
      areasLabel: "KEY AREAS FOR REAL ESTATE AGENCIES",
      areasTitle: "Key areas for real estate agencies",
      areas: [
        { title: "Correct invoicing of commissions and income", desc: "Proper issuance of CFDI related to the agency's real estate services, commissions and commercial operations." },
        { title: "Income and cash-flow control", desc: "Administrative and financial follow-up to keep clarity on income received by the agency, commissions pending payment to internal agents and overall operating flow." },
        { title: "Tax returns and provisional payments", desc: "Monthly and annual compliance with tax obligations for legal entities engaged in real estate brokerage activities." },
        { title: "Document management and administrative support", desc: "Control and safekeeping of tax and administrative information related to operations, clients, internal agents and receipts." },
      ],
      expLabel: "EXPERIENCE IN THE REAL ESTATE SECTOR",
      expTitle: "We understand how the real estate market in Cancún and the Riviera Maya operates",
      expP1: "We've worked with real estate agencies, brokerages and companies related to the sector, understanding the commercial and tax dynamics typical of a region with strong tourism activity and real estate investment.",
      expP2: "We know the challenges related to variable commissions, high-value transactions, foreign clients, managing a team of internal agents and administering income in a highly dynamic commercial environment.",
      expClose: "We don't just do the bookkeeping. We help maintain order and financial clarity as the operation grows.",
      bandLabel: "REAL ESTATE MARKET IN CANCÚN",
      bandText: "The most active real estate market in Mexico — and one of the most scrutinized by tax authorities.",
      faqLabel: "REAL ESTATE AGENCIES — FAQ",
      faqTitle: "Real estate agencies in Cancún",
      faqs: [
        { q: "What taxes does a real estate agency pay in Mexico?", a: "It depends on the tax regime. Most agencies operating as legal entities pay 30% ISR on net profit under the General Regime, with deductions for payroll, rent, marketing and operating expenses. Smaller agencies may qualify for RESICO with 1% to 2.5% monthly rates. The agency must also pay IVA on its intermediation services (16% in most cases)." },
        { q: "How does a real estate agency invoice commissions with a CFDI?", a: "The agency issues a CFDI for the commission amount. The concept should correspond to 'real estate intermediation services'. If the client is a corporate entity that withholds ISR, that withholding is reflected on the CFDI. The payment complement applies if the commission isn't paid at the moment of the transaction." },
        { q: "How should an agency handle commissions paid to its internal agents?", a: "When the agency pays commissions to its team of agents, it must apply ISR and IVA withholdings according to each agent's tax regime, stamp the corresponding CFDI and report the withholdings to the SAT. Getting this right protects both the agency and its agents." },
      ],
      ctaLabel: "HIRE YOUR REAL ESTATE AGENCY ACCOUNTANT IN CANCÚN",
      ctaTitle: "Let's talk about your taxes.",
      ctaP: "Tell us about your agency. If you have overdue filings or aren't sure your regime is the right one, we'll do a no-cost diagnosis.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Contabilidad para Agencias Inmobiliarias en Cancún | Camhaji", description: "Servicios contables y fiscales para agencias inmobiliarias, brokers y desarrolladoras en Cancún y Riviera Maya." },
    bcInicio: "Inicio", bcSectores: "Sectores", bcCurrent: "Agencias Inmobiliarias",
    heroLabel: "CONTABILIDAD PARA AGENCIAS INMOBILIARIAS",
    heroH1L1: "Contabilidad para Agencias",
    heroH1L2: "Inmobiliarias en Cancún",
    heroP: "El mercado inmobiliario de Cancún mueve comisiones altas. Pero muchas agencias llegan a nosotros cuando el SAT ya les mandó una carta — porque nunca les explicaron exactamente cómo declarar los ingresos de la agencia, cómo manejar las retenciones a su equipo de asesores ni cómo emitir sus facturas.",
    impuestosLabel: "IMPUESTOS PARA AGENCIAS INMOBILIARIAS EN MÉXICO",
    impuestosTitle: "Los impuestos que enfrenta una agencia inmobiliaria en México",
    impuestos: [
      { title: "ISR corporativo sobre comisiones", desc: "Cada comisión que recibe la agencia es un ingreso gravado. Para personas morales la tasa es del 30% sobre la utilidad neta, con las deducciones correctamente soportadas en la contabilidad." },
      { title: "IVA", desc: "Las comisiones por intermediación que cobra la agencia están gravadas con IVA al 16% en la mayoría de los casos. La agencia tiene que cobrarlo, declararlo y pagarlo." },
      { title: "Retenciones a asesores", desc: "Cuando la agencia paga comisiones a asesores internos o subagentes, debe aplicar las retenciones de ISR e IVA correspondientes, timbrarlas y reportarlas. Hacerlo mal es uno de los hallazgos más comunes del SAT." },
      { title: "CFDI obligatorio", desc: "Por cada operación cerrada la agencia debe emitir una factura electrónica con los datos correctos. Sin CFDI, el ingreso sigue existiendo para el SAT aunque no se declare." },
    ],
    splitLabel: "FACTURACIÓN DE COMISIONES INMOBILIARIAS",
    splitTitle: "Cada comisión bien facturada es una deducción que tu cliente conserva",
    splitP: "El mercado inmobiliario de Cancún mueve comisiones altas. Un CFDI incorrecto no solo afecta a la agencia — también le quita la deducción a tu cliente.",
    cfdiLabel: "CFDI PARA COMISIONES INMOBILIARIAS",
    cfdiTitle: "CFDI por comisiones: cómo facturar correctamente",
    cfdiP1: "La factura de una comisión inmobiliaria no es igual a la de cualquier servicio. El uso del CFDI, la clave de producto y la forma de pago tienen que ser correctos para que sea deducible para tu cliente y válida para la agencia.",
    cfdiP2: "Los errores más comunes que vemos: régimen fiscal incorrecto en el comprobante, clave de servicio equivocada, IVA mal calculado cuando hay retención parcial, y cancelaciones hechas fuera de tiempo.",
    cfdiClose: "Con Camhaji, cada CFDI por comisión emitido por tu agencia sale correcto desde el primer momento.",
    resicoLabel: "RÉGIMEN FISCAL PARA AGENCIAS INMOBILIARIAS",
    resicoTitle: "Régimen fiscal para una agencia inmobiliaria: ¿cuál conviene?",
    resicoP1: "La mayoría de las agencias consolidadas operan como personas morales bajo el régimen general, que permite deducir nómina, renta, marketing y gastos operativos contra los ingresos por comisiones.",
    resicoP2: "Agencias más pequeñas o que están comenzando pueden beneficiarse del RESICO (ingresos anuales menores a 3.5 millones) o del régimen simplificado de personas morales. No es una decisión que deba tomarse sin diagnóstico previo de la estructura y los ingresos.",
    loQueHacemosLabel: "SERVICIOS CONTABLES PARA AGENCIAS INMOBILIARIAS",
    loQueHacemosTitle: "Lo que Camhaji hace por tu agencia inmobiliaria",
    loQueHacemos: [
      "Diagnóstico de la situación fiscal actual de la agencia (régimen, obligaciones, historial)",
      "Emisión correcta de CFDI por cada comisión cerrada por la agencia",
      "Cálculo y declaración mensual de ISR e IVA",
      "Retenciones y CFDI para el equipo interno de asesores de la agencia",
      "Declaración anual de la persona moral",
      "Asesoría sobre el régimen fiscal más conveniente según los ingresos y estructura de la agencia",
    ],
    loQueHacemosFooter: "Sin pendientes acumulados. Sin facturas mal emitidas. Sin sorpresas.",
    areasLabel: "ÁREAS CLAVE PARA AGENCIAS INMOBILIARIAS",
    areasTitle: "Áreas clave para agencias inmobiliarias",
    areas: [
      { title: "Facturación correcta de comisiones e ingresos", desc: "Emisión adecuada de CFDI relacionados con los servicios inmobiliarios de la agencia, comisiones y operaciones comerciales." },
      { title: "Control de ingresos y flujo de efectivo", desc: "Seguimiento administrativo y financiero para mantener claridad sobre ingresos cobrados por la agencia, comisiones pendientes de pago a asesores internos y flujo operativo." },
      { title: "Declaraciones fiscales y pagos provisionales", desc: "Cumplimiento mensual y anual de obligaciones fiscales para personas morales dedicadas a la intermediación inmobiliaria." },
      { title: "Organización documental y soporte administrativo", desc: "Control y resguardo de información fiscal y administrativa relacionada con operaciones, clientes, asesores internos y comprobantes." },
    ],
    expLabel: "EXPERIENCIA EN EL SECTOR INMOBILIARIO",
    expTitle: "Entendemos cómo opera el mercado inmobiliario en Cancún y Riviera Maya",
    expP1: "Hemos trabajado con agencias inmobiliarias, brokers y empresas relacionadas con el sector, entendiendo las dinámicas comerciales y fiscales propias de una región con fuerte actividad turística e inversión inmobiliaria.",
    expP2: "Conocemos los retos relacionados con comisiones variables, operaciones de alto valor, clientes extranjeros, manejo de equipos de asesores internos y administración de ingresos en un entorno comercial altamente dinámico.",
    expClose: "No solo llevamos la contabilidad. Ayudamos a mantener orden y claridad financiera conforme crece la operación.",
    bandLabel: "MERCADO INMOBILIARIO EN CANCÚN",
    bandText: "El mercado inmobiliario más activo de México — y uno de los más fiscalizados.",
    faqLabel: "AGENCIAS INMOBILIARIAS — PREGUNTAS FRECUENTES",
    faqTitle: "Agencias inmobiliarias en Cancún",
    faqs: [
      { q: "¿Qué impuestos paga una agencia inmobiliaria en México?", a: "Depende del régimen fiscal. La mayoría de las agencias que operan como personas morales pagan 30% de ISR sobre la utilidad neta en Régimen General, con deducciones de nómina, renta, marketing y gastos operativos. Agencias pequeñas pueden calificar para RESICO con tasas mensuales del 1% al 2.5%. Además, la agencia debe pagar IVA sobre sus servicios de intermediación (16% en la mayoría de casos)." },
      { q: "¿Cómo factura una agencia inmobiliaria sus comisiones con CFDI?", a: "La agencia emite un CFDI por el monto de la comisión. El concepto debe corresponder a 'servicios de intermediación inmobiliaria'. Si el cliente es persona moral y retiene ISR, esa retención se refleja en el CFDI. El complemento de pago aplica si la comisión no se liquida al momento de la operación." },
      { q: "¿Cómo debe manejar una agencia las comisiones que paga a sus asesores internos?", a: "Cuando la agencia paga comisiones a su equipo de asesores, debe aplicar retenciones de ISR e IVA según el régimen fiscal de cada asesor, timbrar el CFDI correspondiente y reportar las retenciones al SAT. Hacerlo correctamente protege tanto a la agencia como a sus asesores." },
    ],
    ctaLabel: "CONTRATA EL CONTADOR DE TU AGENCIA INMOBILIARIA EN CANCÚN",
    ctaTitle: "Hablemos de tus impuestos.",
    ctaP: "Cuéntanos sobre tu agencia. Si tienen declaraciones atrasadas o no saben si el régimen es el correcto, hacemos un diagnóstico sin costo.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
