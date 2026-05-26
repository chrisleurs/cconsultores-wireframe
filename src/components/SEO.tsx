import { Helmet } from "react-helmet-async";
import type { Lang } from "@/i18n/lang";

const SITE_URL = "https://cconsultores-wireframe.lovable.app";
const DEFAULT_OG = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  /**
   * Page language. When set, also emits hreflang alternates assuming the
   * counterpart route lives at /en/<path> (or removes /en prefix for ES).
   */
  lang?: Lang;
  /**
   * Optional explicit alternate path override (without language prefix).
   * Defaults to deriving from `path`.
   */
  altPath?: string;
}

export function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
  type = "website",
  noindex = false,
  lang = "es",
  altPath,
}: SEOProps) {
  const url = `${SITE_URL}${path}`;
  // Derive ES and EN paths
  const stripped = path.startsWith("/en/") ? path.slice(3) : path === "/en" ? "/" : path;
  const esPath = altPath ?? stripped;
  const enPath = esPath === "/" ? "/en" : `/en${esPath}`;
  const esUrl = `${SITE_URL}${esPath}`;
  const enUrl = `${SITE_URL}${enPath}`;
  const ogLocale = lang === "en" ? "en_US" : "es_MX";
  const htmlLang = lang === "en" ? "en" : "es-MX";
  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="es-MX" href={esUrl} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="x-default" href={esUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Camhaji Consultores" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={ogLocale} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export function LocalBusinessJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": `${SITE_URL}/#business`,
    name: "Camhaji Consultores",
    alternateName: "Camhaji Consultores Cancún",
    description:
      "Despacho contable en Cancún con más de 10 años de trayectoria. Contabilidad, fiscal, nómina y facturación para empresas en Quintana Roo.",
    url: SITE_URL,
    telephone: "+52-998-887-2584",
    email: "contacto@camhajiconsultores.mx",
    image: DEFAULT_OG,
    priceRange: "$$",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Mar #9, Lote 12, Manzana 12, SM 4",
      addressLocality: "Cancún",
      addressRegion: "Quintana Roo",
      postalCode: "77500",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.1619,
      longitude: -86.8515,
    },
    areaServed: [
      { "@type": "City", name: "Cancún" },
      { "@type": "City", name: "Playa del Carmen" },
      { "@type": "City", name: "Tulum" },
      { "@type": "City", name: "Chetumal" },
      { "@type": "AdministrativeArea", name: "Quintana Roo" },
      { "@type": "Place", name: "Riviera Maya" },
      { "@type": "Country", name: "México" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
      },
    ],
    knowsAbout: [
      "Contabilidad empresarial",
      "Estrategia fiscal",
      "SAT México",
      "IMSS Infonavit",
      "CFDI 4.0",
      "Nómina empresarial",
      "RESICO",
      "Sector construcción",
      "Sector inmobiliario",
      "Régimen Simplificado de Confianza",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios contables Camhaji",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contabilidad y Administración Empresarial", url: `${SITE_URL}/version-c/servicios/contabilidad` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estrategia y Asesoría Fiscal", url: `${SITE_URL}/version-c/servicios/fiscal` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nómina Empresarial", url: `${SITE_URL}/version-c/servicios/nomina` } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Facturación CFDI 4.0", url: `${SITE_URL}/version-c/servicios/facturacion` } },
      ],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+52-998-887-2584",
        contactType: "customer service",
        areaServed: "MX",
        availableLanguage: ["Spanish"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+52-1-55-4358-7159",
        contactType: "WhatsApp",
        areaServed: "MX",
        availableLanguage: ["Spanish"],
      },
    ],
    sameAs: [],
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}