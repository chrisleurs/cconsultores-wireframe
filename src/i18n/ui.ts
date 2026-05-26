import type { Lang } from "./lang";

/** Small UI strings used by shared chrome (Navbar, Footer, switcher, CTAs). */
export const ui = {
  es: {
    // Navbar
    navHome: "Home",
    navNosotros: "Nosotros",
    navServicios: "Servicios",
    navSectores: "Sectores",
    navContacto: "Contacto",
    navCta: "Agendar Consulta",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    langSwitchAria: "Cambiar idioma",
    // Services dropdown
    svcContabilidad: "Contabilidad",
    svcFiscal: "Consultoría Fiscal",
    svcNomina: "Nómina y Seguridad Social",
    svcAdministracion: "Administración Integral",
    // Sectors dropdown
    sectConstruccion: "Construcción",
    sectComercial: "Comercial",
    sectInmobiliario: "Asesores Inmobiliarios",
    sectResico: "RESICO",
    sectRentaVac: "Renta Vacacional",
    // Footer
    footerTagline: "Contabilidad con compromiso real.",
    footerServicios: "Servicios",
    footerSectores: "Sectores",
    footerContacto: "Contacto",
    footerHours: "Lun–Vie · 9:00–18:30",
    footerRights: "© 2026 Camhaji Consultores. Todos los derechos reservados.",
    // WhatsApp FAB
    waAria: "Contactar por WhatsApp",
    // Common CTAs
    ctaWhatsapp: "ESCRÍBENOS POR WHATSAPP",
    ctaServicios: "CONOCE NUESTROS SERVICIOS",
    ctaConocerMas: "CONOCER MÁS →",
    ctaVerEspec: "VER ESPECIALIZACIÓN →",
    ctaContactar: "CONTÁCTANOS",
    breadcrumbHome: "Inicio",
  },
  en: {
    navHome: "Home",
    navNosotros: "About",
    navServicios: "Services",
    navSectores: "Industries",
    navContacto: "Contact",
    navCta: "Book a Consultation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langSwitchAria: "Change language",
    svcContabilidad: "Bookkeeping",
    svcFiscal: "Tax Advisory",
    svcNomina: "Payroll & Social Security",
    svcAdministracion: "Integrated Administration",
    sectConstruccion: "Construction",
    sectComercial: "Commercial",
    sectInmobiliario: "Real Estate Advisors",
    sectResico: "RESICO (Self-Employed)",
    sectRentaVac: "Vacation Rentals",
    footerTagline: "Accounting with real commitment.",
    footerServicios: "Services",
    footerSectores: "Industries",
    footerContacto: "Contact",
    footerHours: "Mon–Fri · 9:00–18:30",
    footerRights: "© 2026 Camhaji Consultores. All rights reserved.",
    waAria: "Contact us on WhatsApp",
    ctaWhatsapp: "MESSAGE US ON WHATSAPP",
    ctaServicios: "EXPLORE OUR SERVICES",
    ctaConocerMas: "LEARN MORE →",
    ctaVerEspec: "VIEW SPECIALIZATION →",
    ctaContactar: "CONTACT US",
    breadcrumbHome: "Home",
  },
} as const;

export type UIKey = keyof typeof ui.es;

export function t(lang: Lang, key: UIKey): string {
  return ui[lang][key];
}