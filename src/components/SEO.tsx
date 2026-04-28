import { Helmet } from "react-helmet-async";

const SITE_URL = "https://cconsultores-wireframe.lovable.app";
const DEFAULT_OG = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
}

export function SEO({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
  type = "website",
  noindex = false,
}: SEOProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <html lang="es-MX" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Camhaji Consultores" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="es_MX" />

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
    name: "Camhaji Consultores",
    description:
      "Despacho contable en Cancún con más de 10 años de trayectoria. Contabilidad, fiscal, nómina y facturación para empresas en Quintana Roo.",
    url: SITE_URL,
    telephone: "+52-998-887-2584",
    email: "contacto@camhajiconsultores.mx",
    image: DEFAULT_OG,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Mar #9, Lote 12, Manzana 12, SM 4",
      addressLocality: "Cancún",
      addressRegion: "Quintana Roo",
      postalCode: "77500",
      addressCountry: "MX",
    },
    areaServed: [
      { "@type": "City", name: "Cancún" },
      { "@type": "AdministrativeArea", name: "Quintana Roo" },
      { "@type": "Place", name: "Riviera Maya" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:30",
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