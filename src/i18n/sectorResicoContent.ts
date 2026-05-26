import type { Lang } from "./lang";

interface Item { title: string; desc: string }
export interface ResicoContent {
  seo: { title: string; description: string };
  bcInicio: string; bcSectores: string; bcCurrent: string;
  heroLabel: string; heroH1L1: string; heroH1L2: string; heroP: string;
  queEsLabel: string; queEsTitle: string; queEsP1: string; queEsP2: string; queEsClose: string;
  obligLabel: string; obligTitle: string; obligaciones: Item[];
  splitLabel: string; splitTitle: string; splitP: string;
  loQueHacemosLabel: string; loQueHacemosTitle: string; loQueHacemosIntro: string;
  loQueHacemos: string[]; loQueHacemosFooter: string;
  perfilesLabel: string; perfilesTitle: string; perfiles: Item[];
  bandLabel: string; bandText: string;
  faqLabel: string; faqTitle: string; faqs: { q: string; a: string }[];
  ctaLabel: string; ctaTitle: string; ctaP: string; ctaBtn: string;
}

export function getResicoContent(lang: Lang): ResicoContent {
  if (lang === "en") {
    return {
      seo: { title: "RESICO Tax Regime in Cancún | Camhaji Consultores", description: "RESICO advisory and bookkeeping in Cancún. Comply with the SAT under the Simplified Trust Regime without hassle." },
      bcInicio: "Home", bcSectores: "Industries", bcCurrent: "RESICO",
      heroLabel: "RESICO ACCOUNTANT IN CANCÚN",
      heroH1L1: "RESICO Accountant",
      heroH1L2: "in Cancún",
      heroP: "RESICO exists to simplify your tax obligations. But many freelancers, consultants and independent professionals come in with months of unfiled returns, CFDIs issued under the wrong regime or unsure whether RESICO is even right for them. We fix that.",
      queEsLabel: "SIMPLIFIED TRUST REGIME",
      queEsTitle: "What is RESICO and who does it apply to?",
      queEsP1: "The Simplified Trust Regime is a tax option for individuals with business activity or income from professional services not exceeding 3.5 million pesos per year. It offers lower ISR rates than the general regime and a simpler filing mechanic.",
      queEsP2: "Who can file under RESICO: freelancers, consultants, designers, architects, doctors, lawyers, real estate agents and any individual who provides services independently and meets the income limit.",
      queEsClose: "What RESICO does not exempt you from: still issuing a CFDI for every income, filing monthly and annual returns, and in some cases calculating withholdings. Simple doesn't mean automatic.",
      obligLabel: "RESICO TAX OBLIGATIONS",
      obligTitle: "Tax obligations under RESICO",
      obligaciones: [
        { title: "Monthly returns", desc: "RESICO requires filing ISR returns by the 17th of each month, calculated on income collected during the period. The rate varies according to accumulated annual income — between 1% and 2.5%." },
        { title: "Annual return", desc: "In April you file the annual return consolidating the year's ISR. That's when differences in your favor or against you can appear, depending on the year's actual income and withholdings applied by your clients." },
        { title: "Mandatory CFDI invoicing", desc: "Under RESICO it is mandatory to issue a CFDI for every income. The receipt must have the correct tax regime and the proper product or service key. An error here can turn your invoice into an invalid CFDI — affecting both you and your client." },
        { title: "Withholdings when applicable", desc: "If your clients are corporate entities, in many cases they're required to withhold part of the IVA and ISR from your invoice. Those withholdings are credited on your monthly return, but they must be calculated and recorded correctly so they don't result in differences to pay." },
      ],
      splitLabel: "RESICO: LOW RATES, REAL OBLIGATIONS",
      splitTitle: "RESICO simplifies the rates, but the obligations are still yours",
      splitP: "Monthly returns, a CFDI for every income, withholdings when applicable. The simple part is paying less to the SAT — not skipping compliance.",
      loQueHacemosLabel: "ACCOUNTING SERVICE FOR RESICO",
      loQueHacemosTitle: "What Camhaji does for you if you're under RESICO",
      loQueHacemosIntro: "None of the above is complicated when you have someone who does it well. Our service for people under RESICO in Cancún includes:",
      loQueHacemos: [
        "Monthly ISR calculation and timely filing",
        "Correct CFDI issuance with proper tax regime and keys",
        "Preparation and filing of the annual return",
        "Review and crediting of your clients' withholdings",
        "Advice on whether RESICO is the regime that suits you best — or whether to switch",
      ],
      loQueHacemosFooter: "No backlog of pending returns. No badly issued CFDIs. No surprises in April.",
      perfilesLabel: "INDEPENDENT PROFESSIONALS UNDER RESICO IN CANCÚN",
      perfilesTitle: "Who do we serve?",
      perfiles: [
        { title: "Freelancers and independent consultants", desc: "Designers, developers, writers, photographers, consultants of any specialty. If you charge per project or per hour and issue your own invoices, RESICO is probably your regime." },
        { title: "Real estate agents in Cancún", desc: "Real estate commissions have their own tax treatment. If you're an independent agent and charge commissions, RESICO can be an option — depending on your income volume and structure." },
        { title: "Independent professionals", desc: "Doctors, lawyers, architects, psychologists, engineers. If you have your own office or practice and charge fees, RESICO applies to you." },
        { title: "Service providers in general", desc: "Any individual who provides services independently, without a formal employment relationship, can file under RESICO if they meet the income limits." },
      ],
      bandLabel: "INDEPENDENT PROFESSIONALS IN CANCÚN",
      bandText: "Consultants, designers, doctors, real estate agents — all in order with the SAT.",
      faqLabel: "RESICO — FAQ",
      faqTitle: "Frequently asked questions about RESICO",
      faqs: [
        { q: "What is RESICO and who can file under it?", a: "RESICO (Simplified Trust Regime) is a tax regime created in 2022 with lower ISR rates. Individuals with annual income up to $3.5 million can file under it: freelancers, consultants, independent professionals, real estate agents and any service provider that meets the limit. Legal entities can also access it under other conditions." },
        { q: "How much tax do you pay under RESICO?", a: "Rates range from 1% to 2.5% monthly on income collected, depending on the amount accumulated during the year. For example, if you bill $50,000 monthly, ISR is $500 to $1,250 per month. It's considerably lower than the General Regime, where the rate can reach 35%. IVA is reported separately if your services are taxable." },
        { q: "Can I switch to RESICO at any time?", a: "No. Changing your tax regime can only be done in January each year, during the first weeks of the month. Outside that window it isn't possible until the following year. If you're interested in switching, the ideal is to plan it ahead and review your tax history before doing so." },
        { q: "What happens if my income exceeds the RESICO limit?", a: "If at any point in the year your accumulated income exceeds $3.5 million (individuals), the SAT automatically moves you to the General Regime from that month onward. That's why it's important to monitor income during the year and anticipate that change before it happens, not after." },
        { q: "Does RESICO require electronic accounting?", a: "Individuals under RESICO have simplified obligations and do not file monthly electronic accounting. Legal entities under RESICO do file it. In both cases issuing a CFDI for every income is mandatory, as is keeping expense receipts." },
      ],
      ctaLabel: "ARE YOU UNDER RESICO OR THINKING ABOUT IT?",
      ctaTitle: "Let's talk about your situation.",
      ctaP: "Tell us your situation. If you have overdue returns, we'll bring them up to date. If you don't know whether RESICO is the right regime for you, we'll do a diagnosis and tell you clearly what suits you.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Régimen RESICO en Cancún | Camhaji Consultores", description: "Asesoría y contabilidad RESICO en Cancún. Cumple con el SAT bajo el Régimen Simplificado de Confianza sin complicaciones." },
    bcInicio: "Inicio", bcSectores: "Sectores", bcCurrent: "RESICO",
    heroLabel: "CONTADOR PARA RESICO EN CANCÚN",
    heroH1L1: "Contador para RESICO",
    heroH1L2: "en Cancún",
    heroP: "El RESICO existe para simplificar tus obligaciones fiscales. Pero muchos freelancers, consultores y profesionistas independientes llegan con meses de declaraciones sin presentar, CFDI emitidos con el régimen incorrecto o sin saber si el RESICO realmente les conviene. Nosotros resolvemos eso.",
    queEsLabel: "RÉGIMEN SIMPLIFICADO DE CONFIANZA",
    queEsTitle: "¿Qué es el RESICO y a quién aplica?",
    queEsP1: "El Régimen Simplificado de Confianza es una opción fiscal para personas físicas con actividad empresarial o ingresos por servicios profesionales que no superen los 3.5 millones de pesos al año. Ofrece tasas de ISR más bajas que el régimen general y una mecánica de declaración más simple.",
    queEsP2: "Pueden tributar en RESICO: freelancers, consultores, diseñadores, arquitectos, médicos, abogados, agentes inmobiliarios y cualquier persona física que preste servicios de forma independiente y cumpla con el límite de ingresos.",
    queEsClose: "Lo que el RESICO no te exime: seguir emitiendo CFDI por cada ingreso, presentar declaraciones mensuales y anuales, y en algunos casos calcular retenciones. Simple no es sinónimo de automático.",
    obligLabel: "OBLIGACIONES FISCALES DEL RESICO",
    obligTitle: "Las obligaciones fiscales en el RESICO",
    obligaciones: [
      { title: "Declaraciones mensuales", desc: "El RESICO requiere presentar declaraciones de ISR antes del día 17 de cada mes, calculadas sobre los ingresos cobrados en el periodo. La tasa varía según el nivel de ingresos acumulados en el año — entre 1% y 2.5%." },
      { title: "Declaración anual", desc: "En abril se presenta la declaración anual donde se consolida el ISR del ejercicio. Es el momento donde pueden surgir diferencias a favor o en contra, dependiendo de los ingresos reales del año y de las retenciones que te aplicaron tus clientes." },
      { title: "Facturación CFDI obligatoria", desc: "En el RESICO es obligatorio emitir CFDI por cada ingreso. El comprobante debe tener el régimen fiscal correcto y la clave de producto o servicio adecuada. Un error en esto puede convertir tu factura en un CFDI inválido — y eso le afecta tanto a ti como a tu cliente." },
      { title: "Retenciones cuando aplique", desc: "Si tus clientes son personas morales, en muchos casos están obligados a retenerte parte del IVA e ISR de tu factura. Esas retenciones se acreditan en tu declaración mensual, pero hay que calcularlas y registrarlas bien para que no resulten en diferencias que pagar." },
    ],
    splitLabel: "RESICO: TASAS BAJAS, OBLIGACIONES REALES",
    splitTitle: "El RESICO simplifica las tasas, pero las obligaciones siguen siendo tuyas",
    splitP: "Declaraciones mensuales, CFDI por cada ingreso, retenciones cuando aplican. Lo simple es pagarle menos al SAT — no dejar de cumplir.",
    loQueHacemosLabel: "SERVICIO CONTABLE PARA RESICO",
    loQueHacemosTitle: "Lo que Camhaji hace por ti si estás en RESICO",
    loQueHacemosIntro: "Nada de lo anterior es complicado cuando tienes a alguien que lo hace bien. Nuestro servicio para personas en RESICO en Cancún incluye:",
    loQueHacemos: [
      "Cálculo mensual del ISR y presentación de la declaración a tiempo",
      "Emisión correcta de CFDI con régimen fiscal y claves adecuadas",
      "Preparación y presentación de la declaración anual",
      "Revisión y acreditamiento de retenciones de tus clientes",
      "Asesoría sobre si el RESICO es el régimen que más te conviene — o si hay que cambiar",
    ],
    loQueHacemosFooter: "Sin acumulación de declaraciones pendientes. Sin CFDI mal emitidos. Sin sorpresas en abril.",
    perfilesLabel: "PROFESIONISTAS EN RESICO EN CANCÚN",
    perfilesTitle: "¿A quién atendemos?",
    perfiles: [
      { title: "Freelancers y consultores independientes", desc: "Diseñadores, desarrolladores, redactores, fotógrafos, consultores de cualquier especialidad. Si cobras por proyecto o por hora y emites tus propias facturas, el RESICO probablemente sea tu régimen." },
      { title: "Agentes inmobiliarios en Cancún", desc: "Las comisiones inmobiliarias tienen su propio tratamiento fiscal. Si eres agente independiente y cobras comisiones, el RESICO puede ser una opción — dependiendo de tu volumen de ingresos y tu estructura." },
      { title: "Profesionistas independientes", desc: "Médicos, abogados, arquitectos, psicólogos, ingenieros. Si tienes consultorio o despacho propio y cobras honorarios, el RESICO aplica para ti." },
      { title: "Prestadores de servicios en general", desc: "Cualquier persona física que preste servicios de forma independiente, sin relación laboral formal, puede tributar en RESICO si cumple con los límites de ingresos." },
    ],
    bandLabel: "PROFESIONISTAS INDEPENDIENTES EN CANCÚN",
    bandText: "Consultores, diseñadores, médicos, agentes inmobiliarios — todos en orden con el SAT.",
    faqLabel: "RESICO — PREGUNTAS FRECUENTES",
    faqTitle: "Preguntas frecuentes sobre el RESICO",
    faqs: [
      { q: "¿Qué es el RESICO y quién puede tributar en él?", a: "El RESICO (Régimen Simplificado de Confianza) es un régimen fiscal creado en 2022 con tasas de ISR más bajas. Pueden tributar en él las personas físicas con ingresos anuales de hasta $3.5 millones: freelancers, consultores, profesionistas independientes, agentes inmobiliarios y cualquier prestador de servicios que cumpla el límite. Las personas morales también pueden acceder bajo otras condiciones." },
      { q: "¿Cuánto se paga de impuestos en el RESICO?", a: "Las tasas van del 1% al 2.5% mensual sobre los ingresos cobrados, dependiendo del monto acumulado en el año. Por ejemplo, si facturas $50,000 mensuales, el ISR es de $500 a $1,250 al mes. Es considerablemente menor que el Régimen General, donde la tasa puede llegar al 35%. El IVA se declara por separado si tus servicios están gravados." },
      { q: "¿Puedo cambiarme al RESICO en cualquier momento?", a: "No. El cambio de régimen fiscal solo puede hacerse en enero de cada año, durante las primeras semanas del mes. Fuera de esa ventana no es posible hasta el siguiente año. Si estás interesado en cambiarte, lo ideal es planificarlo con tiempo y revisar el historial fiscal antes de hacerlo." },
      { q: "¿Qué pasa si mis ingresos superan el límite del RESICO?", a: "Si en cualquier mes del año tus ingresos acumulados superan $3.5 millones (personas físicas), el SAT te mueve automáticamente al Régimen General desde ese mes. Por eso es importante monitorear los ingresos durante el año y anticipar ese cambio antes de que ocurra, no después." },
      { q: "¿El RESICO lleva contabilidad electrónica?", a: "Las personas físicas en RESICO tienen obligaciones simplificadas y no presentan contabilidad electrónica mensual. Las personas morales en RESICO sí la presentan. En ambos casos es obligatorio emitir CFDI por todos los ingresos y conservar los comprobantes de gastos." },
    ],
    ctaLabel: "¿ESTÁS EN RESICO O QUIERES SABER SI TE CONVIENE?",
    ctaTitle: "Hablemos de tu situación.",
    ctaP: "Cuéntanos tu situación. Si tienes declaraciones atrasadas, las ponemos al corriente. Si no sabes si el RESICO es el régimen correcto para ti, hacemos un diagnóstico y te decimos con claridad qué te conviene.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
