import type { Lang } from "./lang";

export interface ComercialContent {
  seo: { title: string; description: string };
  bcInicio: string; bcSectores: string; bcCurrent: string;
  heroLabel: string; heroH1L1: string; heroH1L2: string; heroP: string;
  retosLabel: string; retosTitle: string; retosIntro: string;
  retos: string[];
  splitLabel: string; splitTitle: string; splitP: string;
  loQueHacemosLabel: string; loQueHacemosTitle: string;
  loQueHacemos: string[];
  expLabel: string; expTitle: string; expP: string; expClose: string;
  bandLabel: string; bandText: string;
  ctaLabel: string; ctaTitle: string; ctaP: string; ctaBtn: string;
}

export function getComercialContent(lang: Lang): ComercialContent {
  if (lang === "en") {
    return {
      seo: { title: "Bookkeeping for Commercial Businesses in Cancún | Camhaji", description: "Accounting services for commercial and distribution companies in Cancún: inventory, billing, tax and payroll." },
      bcInicio: "Home", bcSectores: "Industries", bcCurrent: "Commercial",
      heroLabel: "BOOKKEEPING FOR COMMERCIAL COMPANIES",
      heroH1L1: "Bookkeeping for Commercial",
      heroH1L2: "Companies in Cancún",
      heroP: "If your company buys, sells and distributes, you have constant operations that need order, recording and timely control. One week without reconciliation can turn into a month without clarity. A month without clarity can turn into a year of problems with the SAT.",
      retosLabel: "COMMERCIAL SECTOR IN QUINTANA ROO",
      retosTitle: "Inventory, AR and AP: the accounting challenges of distribution companies in Cancún",
      retosIntro: "Distribution companies handle a high volume of transactions: customer invoices, supplier invoices, payments, collections, returns, credit notes. Without solid accounting processes, that volume turns into chaos — and chaos turns into tax risk.",
      retos: ["Monthly IVA and ISR returns", "Inventory control with accounting impact", "Correct CFDI invoicing for each customer type", "Permanent AR/AP reconciliation"],
      splitLabel: "ACCOUNTING FOR DISTRIBUTORS IN CANCÚN",
      splitTitle: "High transaction volume demands constant accounting order",
      splitP: "Customer invoices, supplier invoices, payments, collections, returns, credit notes. Without solid accounting processes, the volume turns into chaos.",
      loQueHacemosLabel: "ACCOUNTING SERVICES FOR DISTRIBUTORS",
      loQueHacemosTitle: "Monthly accounting for distributors and commercial companies in Quintana Roo: what we cover",
      loQueHacemos: [
        "Monthly bookkeeping with all period operations recorded",
        "Accounts receivable and accounts payable control",
        "CFDI invoicing to customers and validation of supplier CFDI",
        "Monthly IVA and ISR returns",
        "Annual return",
        "Payroll for sales, warehouse and administrative staff",
        "Monthly bank reconciliation",
      ],
      expLabel: "EXPERIENCE IN THE COMMERCIAL SECTOR",
      expTitle: "Distributors and commercial companies in Quintana Roo: challenges we already know",
      expP: "We've worked with distributors, wholesalers and retail companies in Quintana Roo. We know the seasonal rhythms of the local market, the dynamics with regional suppliers and the sector's specific tax particularities.",
      expClose: "We don't start learning with each new client. We arrive with accumulated experience.",
      bandLabel: "WHOLESALERS IN QUINTANA ROO",
      bandText: "Distributors, wholesalers and retail companies in Quintana Roo.",
      ctaLabel: "HIRE BOOKKEEPING FOR YOUR COMMERCIAL COMPANY",
      ctaTitle: "Are your distribution or commercial company's books in order in Cancún?",
      ctaP: "Tell us how your operation looks. If there's disorder, we'll sort it. If you already have a process, we'll tell you how to improve it.",
      ctaBtn: "MESSAGE US ON WHATSAPP",
    };
  }
  return {
    seo: { title: "Contabilidad para Comercios en Cancún | Camhaji", description: "Servicios contables para empresas comerciales en Cancún: inventarios, facturación, fiscal y nómina." },
    bcInicio: "Inicio", bcSectores: "Sectores", bcCurrent: "Comercial",
    heroLabel: "CONTABILIDAD PARA EMPRESAS COMERCIALES",
    heroH1L1: "Contabilidad para Empresas",
    heroH1L2: "Comerciales en Cancún",
    heroP: "Si tu empresa compra, vende y distribuye, tienes operaciones constantes que necesitan orden, registro y control puntual. Una semana sin conciliar puede convertirse en un mes sin claridad. Un mes sin claridad puede convertirse en un año de problemas con el SAT.",
    retosLabel: "SECTOR COMERCIAL EN QUINTANA ROO",
    retosTitle: "Inventarios, CxC y CxP: los retos contables de las empresas de comercialización en Cancún",
    retosIntro: "Las empresas de comercialización tienen un volumen alto de transacciones: facturas a clientes, facturas de proveedores, pagos, cobros, devoluciones, notas de crédito. Sin un proceso contable sólido, ese volumen se convierte en desorden — y el desorden en riesgo fiscal.",
    retos: ["Declaración mensual de IVA e ISR", "Control de inventarios con impacto contable", "Facturación CFDI correcta a cada tipo de cliente", "Conciliación permanente de CxC y CxP"],
    splitLabel: "CONTABILIDAD PARA DISTRIBUIDORAS EN CANCÚN",
    splitTitle: "El volumen de transacciones exige orden contable permanente",
    splitP: "Facturas a clientes, facturas de proveedores, pagos, cobros, devoluciones, notas de crédito. Sin un proceso contable sólido, el volumen se convierte en desorden.",
    loQueHacemosLabel: "SERVICIOS CONTABLES PARA COMERCIALIZADORAS",
    loQueHacemosTitle: "Contabilidad mensual para distribuidoras y comercializadoras en Quintana Roo: qué cubrimos",
    loQueHacemos: [
      "Contabilidad mensual con registro de todas las operaciones del periodo",
      "Control de cuentas por cobrar y cuentas por pagar",
      "Facturación CFDI a clientes y validación de CFDI de proveedores",
      "Declaraciones mensuales de IVA e ISR",
      "Declaración anual",
      "Nómina del equipo de ventas, almacén y administración",
      "Conciliación bancaria mensual",
    ],
    expLabel: "EXPERIENCIA EN EL SECTOR COMERCIAL",
    expTitle: "Distribuidoras y comercializadoras en Quintana Roo: los retos que ya conocemos",
    expP: "Hemos trabajado con distribuidoras, comercializadoras y empresas de venta al mayoreo y menudeo en Quintana Roo. Conocemos los ritmos de temporada del mercado local, la dinámica con proveedores regionales y las particularidades fiscales del sector.",
    expClose: "No empezamos a aprender con cada cliente nuevo. Llegamos con experiencia acumulada.",
    bandLabel: "COMERCIALIZADORAS EN QUINTANA ROO",
    bandText: "Distribuidoras, comercializadoras y ventas al mayoreo en Quintana Roo.",
    ctaLabel: "CONTRATA CONTABILIDAD PARA TU EMPRESA COMERCIAL",
    ctaTitle: "¿Tu distribuidora o empresa comercial en Cancún tiene la contabilidad en orden?",
    ctaP: "Cuéntanos cómo está tu operación. Si hay desorden, lo ordenamos. Si ya tienes proceso, te decimos cómo mejorarlo.",
    ctaBtn: "ESCRÍBENOS POR WHATSAPP",
  };
}
