import type { Lang } from "./lang";

interface Item { title: string; desc: string }
export interface ConstruccionContent {
  seo: { title: string; description: string };
  bcInicio: string; bcSectores: string; bcCurrent: string;
  heroLabel: string; heroH1L1: string; heroH1L2: string; heroP1: string; heroP2: string;
  porqueLabel: string; porqueTitle: string; porqueP1: string; porqueP2: string; porqueP3: string;
  splitLabel: string; splitTitle: string; splitP: string;
  retosLabel: string; retosTitle: string; retos: Item[];
  loQueHacemosLabel: string; loQueHacemosTitle: string; loQueHacemos: Item[];
  expLabel: string; expTitle: string; expP1: string; expP2: string; expP3: string; expClose: string;
  bandLabel: string; bandText: string;
  faqLabel: string; faqTitle: string; faqs: { q: string; a: string }[];
  ctaLabel: string; ctaTitle: string; ctaP: string; ctaBtn: string;
}

export function getConstruccionContent(lang: Lang): ConstruccionContent {
  if (lang === "en") {
    return {
      seo: { title: "Bookkeeping for Construction Companies in Cancún | Camhaji", description: "Specialized accounting firm for the construction sector in Cancún and the Riviera Maya. Estimates, IVA, withholdings and CONTPAQi." },
      bcInicio: "Home", bcSectores: "Industries", bcCurrent: "Construction",
      heroLabel: "BOOKKEEPING FOR CONSTRUCTION COMPANIES IN CANCÚN",
      heroH1L1: "Specialized bookkeeping",
      heroH1L2: "for construction companies.",
      heroP1: "Running a construction company's accounting and tax operation requires much more than traditional administrative records. Estimates, advances, subcontractors, project control and social security obligations create sector-specific processes and risks.",
      heroP2: "At Camhaji Consultores we work with construction companies and related services in Cancún and the Riviera Maya, providing accounting, administrative and tax support tailored to the operational reality of each project.",
      porqueLabel: "CONSTRUCTION SECTOR IN QUINTANA ROO",
      porqueTitle: "Why does construction need specialized bookkeeping?",
      porqueP1: "A construction company's bookkeeping works differently from most companies. Revenue may depend on progress estimates, costs accumulate by stages and projects require constant financial control for months or even years.",
      porqueP2: "The operation also involves specific obligations related to subcontractors, withholdings, REPSE, SIROC, social security contributions and project documentation — areas where poor administration can create significant discrepancies with the SAT, the State Government (SATQ), IMSS or clients.",
      porqueP3: "We have experience working with construction firms, engineering companies and service providers in Cancún and the Riviera Maya, understanding the operational and tax particularities of the construction sector in the region.",
      splitLabel: "SPECIALIZED PROJECT ACCOUNTING",
      splitTitle: "We know the project cycle from foundations to delivery",
      splitP: "Advances, estimates, subcontractors, temporary workers. Each stage has accounting and tax implications that can only be handled well with sector experience.",
      retosLabel: "CONSTRUCTION SECTOR TAX CHALLENGES",
      retosTitle: "The tax challenges of the construction sector in Mexico",
      retos: [
        { title: "Invoicing estimates, advances and progress payments", desc: "Construction companies operate through estimates, advances and partial progress payments — concepts that can have different tax treatments for IVA and ISR. Incorrect classification can create discrepancies detected by the authority and result in surcharges, observations or tax contingencies." },
        { title: "Partial construction services exempt from IVA", desc: "Certain partial construction services for residential property may fall within the IVA exemption rules established by applicable tax law. However, proper application requires suitable contracts, supporting documentation and correct identification of the real nature of the service. Incorrect interpretation or documentation can create significant tax differences in later reviews." },
        { title: "Deduction of materials, machinery and project assets", desc: "Materials, tools, construction machinery and equipment may have different tax treatments and depreciation rates depending on their nature and use within the operation. Inadequate accounting control can directly impact the company's tax burden." },
        { title: "Payroll for project workers and social security", desc: "The construction industry frequently operates with temporary workers, project-based staff and defined-project schemes, which involves payroll particularities, IMSS contributions, benefits and social security obligations. Incorrect administration can create significant discrepancies in labor or social security reviews." },
        { title: "Compliance with state obligations and project notices", desc: "Beyond federal obligations, construction companies must comply with state-level rules related to Payroll Tax (ISN), project start notices, administrative follow-up and documentary control before local authorities. Timely, correct compliance allows orderly project operation and reduces the risk of fines, discrepancies or later requirements." },
      ],
      loQueHacemosLabel: "ACCOUNTING SERVICES FOR CONSTRUCTION COMPANIES",
      loQueHacemosTitle: "Project costs, withholdings and returns: complete bookkeeping for construction companies in Cancún",
      loQueHacemos: [
        { title: "Accounting adapted to each project's operating cycle", desc: "Accounting processes aligned with actual project progress, contract types and the construction sector's specific financial dynamics." },
        { title: "Direct and indirect cost control by project", desc: "Recording and supervision of project costs, materials, machinery, subcontracts and project-related expenses to maintain better financial and operational control." },
        { title: "Invoicing of estimates, advances and payment complements", desc: "Administration and control of CFDI related to project progress, estimates, advances and complements, considering the tax criteria applicable to the construction sector." },
        { title: "Tax returns and periodic compliance", desc: "Filing and follow-up of monthly and annual tax obligations related to the operation of construction firms and related companies." },
        { title: "Payroll administration and project social security obligations", desc: "Payroll control for temporary staff, project workers and full-time employees, including IMSS movements, contribution calculations and compliance with labor obligations." },
      ],
      expLabel: "CONSTRUCTION COMPANIES IN CANCÚN AND THE RIVIERA MAYA",
      expTitle: "Experience in one of the region's most complex sectors",
      expP1: "The construction industry in Cancún and the Riviera Maya operates under very particular dynamics: tourism developments, civil works, real estate projects, specialized subcontracting and operational structures with high administrative and tax volume.",
      expP2: "Beyond the usual federal obligations, construction companies face reviews related to estimates, project control, social security, REPSE, SIROC, withholdings and state compliance — areas where poor administration can generate significant contingencies.",
      expP3: "At Camhaji Consultores we have experience working with construction firms, engineering companies and project-related businesses in Quintana Roo, understanding both the sector's tax particularities and the actual operation of projects.",
      expClose: "We don't learn with your company. We arrive with experience.",
      bandLabel: "ACCOUNTANTS FOR CONSTRUCTION COMPANIES IN QUINTANA ROO",
      bandText: "Years of experience with construction companies in Cancún and the Riviera Maya.",
      faqLabel: "CONSTRUCTION COMPANIES IN CANCÚN — FAQ",
      faqTitle: "FAQ: bookkeeping for construction companies in Cancún",
      faqs: [
        { q: "What tax regime do construction companies normally use in Mexico?", a: "Most construction companies operate under the General Regime for Legal Entities. In certain cases, companies or service providers related to construction may file under other schemes, depending on their operational structure, income level and specific activity. Choosing and administering the right tax regime is key to maintaining compliance and tax efficiency in the operation." },
        { q: "How are project costs managed in accounting?", a: "Construction costs are normally classified as direct or indirect and require control by project, stage or contract. Materials, machinery, subcontracts, labor and operating expenses must be properly recorded and documented to reflect the real progress of each project. Adequate cost control allows greater financial clarity and avoids later tax discrepancies." },
        { q: "Must construction companies withhold from subcontractors?", a: "Depending on the type of service contracted and the operation performed, construction companies may be required to apply ISR and IVA withholdings on transactions with subcontractors and service providers. Correct application of these obligations is essential to avoid tax contingencies and joint liability for the contracting company." },
        { q: "How are temporary and project workers handled before IMSS?", a: "The construction sector frequently works with temporary or project-based staff, which involves constant additions, removals and salary modifications with IMSS. Correct payroll and social security administration is essential to avoid differences in employer contributions, audit observations and labor contingencies." },
        { q: "What risks exist when a construction company's accounting is not properly administered?", a: "Poor administration can create tax discrepancies, improper deductions, errors in estimates, cash-flow problems, social security inconsistencies and observations from the SAT or IMSS. Due to the sector's operational complexity, construction companies require specialized accounting and administrative processes with constant follow-up." },
      ],
      ctaLabel: "HIRE BOOKKEEPING FOR YOUR CONSTRUCTION COMPANY",
      ctaTitle: "Do you have a construction company in Cancún or Quintana Roo?",
      ctaP: "Tell us how your books look today. If there are problems, we'll tell you what they are and how to fix them. If they're in order, we'll tell you how to keep them that way.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Contabilidad para Constructoras en Cancún | Camhaji", description: "Despacho contable especializado en el sector construcción en Cancún y Riviera Maya. Estimaciones, IVA, retenciones y CONTPAQi." },
    bcInicio: "Inicio", bcSectores: "Sectores", bcCurrent: "Construcción",
    heroLabel: "CONTABILIDAD PARA CONSTRUCTORAS EN CANCÚN",
    heroH1L1: "Contabilidad especializada",
    heroH1L2: "para empresas de construcción.",
    heroP1: "La operación contable y fiscal de una constructora requiere mucho más que registros administrativos tradicionales. Estimaciones, anticipos, subcontratistas, control de obra y obligaciones de seguridad social generan procesos y riesgos específicos del sector.",
    heroP2: "En Camhaji Consultores trabajamos con empresas de construcción y servicios relacionados en Cancún y Riviera Maya, brindando acompañamiento contable, administrativo y fiscal adaptado a la realidad operativa de cada proyecto.",
    porqueLabel: "SECTOR CONSTRUCCIÓN EN QUINTANA ROO",
    porqueTitle: "¿Por qué la construcción necesita contabilidad especializada?",
    porqueP1: "La contabilidad de una constructora funciona de forma distinta a la de la mayoría de las empresas. Los ingresos pueden depender de estimaciones de avance, los costos se acumulan por etapas y los proyectos requieren control financiero constante durante meses o incluso años.",
    porqueP2: "Además, la operación involucra obligaciones específicas relacionadas con subcontratistas, retenciones, REPSE, SIROC, cuotas de seguridad social y documentación de obra, áreas donde una mala administración puede generar diferencias importantes ante SAT, Gobierno Estatal (SATQ), IMSS o clientes.",
    porqueP3: "Contamos con experiencia trabajando con constructoras, ingenierías y prestadores de servicios relacionados con obra en Cancún y Riviera Maya, entendiendo las particularidades operativas y fiscales del sector construcción en la región.",
    splitLabel: "CONTABILIDAD ESPECIALIZADA EN OBRA",
    splitTitle: "Conocemos el ciclo de obra desde los cimientos hasta la entrega",
    splitP: "Anticipos, estimaciones, subcontratistas, trabajadores eventuales. Cada etapa tiene implicaciones contables y fiscales que solo se manejan bien con experiencia en el sector.",
    retosLabel: "RETOS FISCALES DEL SECTOR CONSTRUCCIÓN",
    retosTitle: "Los retos fiscales del sector construcción en México",
    retos: [
      { title: "Facturación de estimaciones, anticipos y avances de obra", desc: "Las constructoras operan mediante estimaciones, anticipos y avances parciales de obra, conceptos que pueden tener tratamientos fiscales distintos en materia de IVA e ISR. Una clasificación incorrecta puede generar diferencias detectadas por la autoridad y derivar en recargos, observaciones o contingencias fiscales." },
      { title: "Servicios parciales de construcción exentos de IVA", desc: "Determinados servicios parciales de construcción destinados a inmuebles para casa habitación pueden ubicarse dentro de los supuestos de exención de IVA establecidos por la legislación fiscal aplicable. Sin embargo, su correcta aplicación requiere contratos adecuados, soporte documental y una correcta identificación de la naturaleza real del servicio. Una interpretación o documentación incorrecta puede generar diferencias fiscales importantes en revisiones posteriores." },
      { title: "Deducción de materiales, maquinaria y activos de obra", desc: "Materiales, herramientas, maquinaria y equipo de construcción pueden tener tratamientos fiscales y porcentajes de deducción distintos dependiendo de su naturaleza y uso dentro de la operación. Un control contable inadecuado puede impactar directamente en la carga fiscal de la empresa." },
      { title: "Nómina de trabajadores por obra y seguridad social", desc: "La industria de la construcción frecuentemente opera con trabajadores eventuales, personal por proyecto y esquemas de obra determinada, lo que implica particularidades en cálculo de nómina, cuotas IMSS, prestaciones y obligaciones de seguridad social. Una administración incorrecta puede generar diferencias importantes en revisiones laborales o de seguridad social." },
      { title: "Cumplimiento de obligaciones estatales y avisos de obra", desc: "Además de las obligaciones federales, las constructoras deben cumplir con disposiciones estatales relacionadas con el Impuesto Sobre Nómina (ISN), avisos de inicio de obra, seguimiento administrativo y control documental ante autoridades locales. El cumplimiento oportuno y correcto de estas obligaciones permite mantener orden operativo en cada proyecto y reducir riesgos de multas, diferencias o requerimientos posteriores." },
    ],
    loQueHacemosLabel: "SERVICIOS CONTABLES PARA CONSTRUCTORAS",
    loQueHacemosTitle: "Costos de obra, retenciones y declaraciones: contabilidad completa para constructoras en Cancún",
    loQueHacemos: [
      { title: "Contabilidad adaptada al ciclo operativo de cada obra", desc: "Procesos contables alineados al avance real de los proyectos, tipos de contrato y dinámica financiera propia del sector construcción." },
      { title: "Control de costos directos e indirectos por proyecto", desc: "Registro y supervisión de costos de obra, materiales, maquinaria, subcontratos y gastos relacionados con cada proyecto para mantener mayor control financiero y operativo." },
      { title: "Facturación de estimaciones, anticipos y complementos de pago", desc: "Administración y control de CFDI relacionados con avance de obra, estimaciones, anticipos y complementos, considerando los criterios fiscales aplicables al sector construcción." },
      { title: "Declaraciones fiscales y cumplimiento periódico", desc: "Presentación y seguimiento de obligaciones fiscales mensuales y anuales relacionadas con la operación de constructoras y empresas vinculadas al sector." },
      { title: "Administración de nómina y obligaciones en materia de seguridad social de obra", desc: "Control de nómina para personal eventual, trabajadores por proyecto y empleados de planta, incluyendo movimientos IMSS, cálculo de cuotas y cumplimiento de obligaciones laborales." },
    ],
    expLabel: "CONSTRUCTORAS EN CANCÚN Y RIVIERA MAYA",
    expTitle: "Experiencia en uno de los sectores más complejos de la región",
    expP1: "La industria de la construcción en Cancún y Riviera Maya opera bajo dinámicas muy particulares: desarrollos turísticos, obra civil, proyectos inmobiliarios, subcontratación especializada y estructuras operativas con alto volumen administrativo y fiscal.",
    expP2: "Además de las obligaciones federales habituales, las constructoras enfrentan revisiones relacionadas con estimaciones, control de obra, seguridad social, REPSE, SIROC, retenciones y cumplimiento estatal, áreas donde una administración deficiente puede generar contingencias importantes.",
    expP3: "En Camhaji Consultores contamos con experiencia trabajando con constructoras, ingenierías y empresas relacionadas con obra en Quintana Roo, entendiendo tanto las particularidades fiscales del sector como la operación real de los proyectos.",
    expClose: "No aprendemos con tu empresa. Llegamos con experiencia.",
    bandLabel: "CONTADORES PARA CONSTRUCTORAS EN QUINTANA ROO",
    bandText: "Años de experiencia con constructoras en Cancún y la Riviera Maya.",
    faqLabel: "CONSTRUCTORAS EN CANCÚN — PREGUNTAS FRECUENTES",
    faqTitle: "Preguntas frecuentes: contabilidad para constructoras en Cancún",
    faqs: [
      { q: "¿Qué régimen fiscal utilizan normalmente las constructoras en México?", a: "La mayoría de las constructoras operan bajo el Régimen General de Personas Morales. En ciertos casos, empresas o prestadores de servicios relacionados con construcción pueden tributar bajo otros esquemas, dependiendo de su estructura operativa, nivel de ingresos y actividad específica. La correcta elección y administración del régimen fiscal es clave para mantener cumplimiento y eficiencia fiscal en la operación." },
      { q: "¿Cómo se administran los costos de obra en contabilidad?", a: "Los costos de construcción normalmente se clasifican en directos e indirectos y requieren control por proyecto, etapa o contrato. Materiales, maquinaria, subcontratos, mano de obra y gastos operativos deben registrarse y documentarse correctamente para reflejar el avance real de cada obra. Un adecuado control de costos permite mantener mayor claridad financiera y evitar diferencias fiscales posteriores." },
      { q: "¿Las constructoras deben realizar retenciones a subcontratistas?", a: "Dependiendo del tipo de servicio contratado y de la operación realizada, las empresas constructoras pueden estar obligadas a efectuar retenciones fiscales relacionadas con ISR e IVA en operaciones con subcontratistas y prestadores de servicios. La correcta aplicación de estas obligaciones es fundamental para evitar contingencias fiscales y responsabilidades solidarias para la empresa contratante." },
      { q: "¿Cómo se manejan los trabajadores eventuales y por obra ante IMSS?", a: "El sector construcción frecuentemente trabaja con personal eventual o contratado por proyecto, lo que implica movimientos constantes de altas, bajas y modificaciones salariales ante IMSS. La correcta administración de nómina y seguridad social resulta indispensable para evitar diferencias en cuotas patronales, observaciones en auditorías y contingencias laborales." },
      { q: "¿Qué riesgos existen cuando la contabilidad de una constructora no se administra correctamente?", a: "Una administración deficiente puede generar diferencias fiscales, deducciones improcedentes, errores en estimaciones, problemas de flujo de efectivo, inconsistencias en seguridad social y observaciones por parte de SAT o IMSS. Debido a la complejidad operativa del sector, las constructoras requieren procesos contables y administrativos con seguimiento especializado y control constante." },
    ],
    ctaLabel: "CONTRATA CONTABILIDAD PARA TU CONSTRUCTORA",
    ctaTitle: "¿Tienes una empresa constructora en Cancún o Quintana Roo?",
    ctaP: "Cuéntanos cómo está tu contabilidad hoy. Si hay problemas, te decimos cuáles son y cómo resolverlos. Si está en orden, te decimos cómo mantenerla así.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
