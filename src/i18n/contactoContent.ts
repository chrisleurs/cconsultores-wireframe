import type { Lang } from "./lang";

export interface ContactoContent {
  seo: { title: string; description: string };
  heroLabel: string;
  heroH1: string;
  heroIntro: string;
  heroCta: string;
  formTitle: string;
  labelName: string;
  placeholderName: string;
  labelCompany: string;
  labelOptional: string;
  placeholderCompany: string;
  labelService: string;
  servicePlaceholder: string;
  serviceOptions: string[];
  labelMessage: string;
  placeholderMessage: string;
  submitIdle: string;
  submitSending: string;
  submitSent: string;
  submitNote: string;
  rightLabel: string;
  rightDesc: string;
  rightOpen: string;
  addressLine: string;
  hours: string;
}

export function getContactoContent(lang: Lang): ContactoContent {
  if (lang === "en") {
    return {
      seo: {
        title: "Contact — Accounting Firm in Cancún | Camhaji",
        description:
          "Get in touch with Camhaji Consultores. Accounting firm in Cancún. WhatsApp, phone and form. Mon–Fri 9:00–18:30.",
      },
      heroLabel: "CONTACT",
      heroH1: "Let's Talk About Your Business",
      heroIntro:
        "No commitments. No endless forms. Just a conversation to understand where your company stands and how we can help.",
      heroCta: "MESSAGE US ON WHATSAPP",
      formTitle: "Or leave your details and we'll reach out",
      labelName: "FULL NAME",
      placeholderName: "Your name",
      labelCompany: "COMPANY",
      labelOptional: "(optional)",
      placeholderCompany: "Your company name",
      labelService: "SERVICE OF INTEREST",
      servicePlaceholder: "Select a service...",
      serviceOptions: [
        "Bookkeeping",
        "Tax",
        "Payroll",
        "Billing",
        "Construction Industry",
        "RESICO (Self-Employed)",
        "Real Estate Agencies",
        "Other",
      ],
      labelMessage: "MESSAGE",
      placeholderMessage: "Briefly tell us about your situation...",
      submitIdle: "SEND MESSAGE",
      submitSending: "SENDING...",
      submitSent: "SENT! ✓",
      submitNote:
        "We respond the same day during business hours. If it's urgent, message us directly on WhatsApp.",
      rightLabel: "IMMEDIATE RESPONSE",
      rightDesc: "Write to us directly. Immediate response time during business hours.",
      rightOpen: "OPEN WHATSAPP →",
      addressLine:
        "Calle Mar #9, Lote 12, Manzana 12, SM 4, Cancún, Benito Juárez, Quintana Roo, Mexico, 77500",
      hours: "Monday to Friday · 9:00 – 18:30",
    };
  }

  return {
    seo: {
      title: "Contacto — Despacho Contable en Cancún | Camhaji",
      description:
        "Habla con Camhaji Consultores. Despacho contable en Cancún. WhatsApp, teléfono y formulario. Lun–Vie 9:00–18:30.",
    },
    heroLabel: "CONTACTO",
    heroH1: "Hablemos de tu Negocio",
    heroIntro:
      "Sin compromisos. Sin formularios interminables. Solo una conversación para entender en qué punto está tu empresa y cómo podemos ayudarte.",
    heroCta: "ESCRÍBENOS POR WHATSAPP",
    formTitle: "O déjanos tus datos y te contactamos",
    labelName: "NOMBRE COMPLETO",
    placeholderName: "Tu nombre",
    labelCompany: "EMPRESA",
    labelOptional: "(opcional)",
    placeholderCompany: "Nombre de tu empresa",
    labelService: "SERVICIO DE INTERÉS",
    servicePlaceholder: "Selecciona un servicio...",
    serviceOptions: [
      "Contabilidad",
      "Fiscal",
      "Nómina",
      "Facturación",
      "Sector Construcción",
      "RESICO",
      "Agencias Inmobiliarias",
      "Otro",
    ],
    labelMessage: "MENSAJE",
    placeholderMessage: "Cuéntanos brevemente tu situación...",
    submitIdle: "ENVIAR MENSAJE",
    submitSending: "ENVIANDO...",
    submitSent: "¡ENVIADO! ✓",
    submitNote:
      "Respondemos el mismo día en horario de oficina. Si es urgente, escríbenos directamente por WhatsApp.",
    rightLabel: "RESPUESTA INMEDIATA",
    rightDesc: "Escríbenos directamente. Tiempo de respuesta inmediato en horario hábil.",
    rightOpen: "ABRIR WHATSAPP →",
    addressLine:
      "Calle Mar #9, Lote 12, Manzana 12, SM 4, Cancún, Benito Juárez, Quintana Roo, México, C.P. 77500",
    hours: "Lunes a Viernes · 9:00 – 18:30",
  };
}