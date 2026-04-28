import { Helmet } from "react-helmet-async";
import type { BlogArticle, RelatedService } from "@/data/serviceLinks";

interface Props {
  article: BlogArticle;
  related: RelatedService;
  serviceLabel: string;
}

/**
 * Bloque combinado para páginas de servicio:
 * - Lectura recomendada del blog
 * - Servicio relacionado / "también te puede servir"
 * Mantiene el ritmo editorial del Version C (50/50 split, sin centrar).
 */
export function ServiceExtras({ article, related, serviceLabel }: Props) {
  return (
    <section className="bg-white py-20 px-5 md:px-10">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Lectura recomendada */}
        <a
          href={article.href}
          className="group block border-l-2 border-primary/20 pl-6 hover:border-primary transition-colors"
        >
          <p className="label-uppercase text-camhaji-muted mb-4">
            LECTURA RECOMENDADA — BLOG CAMHAJI
          </p>
          <h3
            className="font-sans font-bold text-camhaji-text mb-3 group-hover:text-primary transition-colors"
            style={{ fontSize: "clamp(20px, 2.2vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            {article.title}
          </h3>
          <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-4">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <span className="font-sans text-xs uppercase tracking-[0.12em] text-camhaji-muted/60">
              {article.readingTime}
            </span>
            <span className="label-uppercase text-primary group-hover:translate-x-1 transition-transform">
              LEER ARTÍCULO →
            </span>
          </div>
        </a>

        {/* Servicio relacionado */}
        <a
          href={related.href}
          className="group block border-l-2 border-camhaji-accent/30 pl-6 hover:border-camhaji-accent transition-colors"
        >
          <p className="label-uppercase text-camhaji-muted mb-4">
            TAMBIÉN BUSCAN JUNTO A {serviceLabel.toUpperCase()}
          </p>
          <h3
            className="font-sans font-bold text-camhaji-text mb-3 group-hover:text-primary transition-colors"
            style={{ fontSize: "clamp(20px, 2.2vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
          >
            {related.name}
          </h3>
          <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-4">
            {related.desc}
          </p>
          <span className="label-uppercase text-primary group-hover:translate-x-1 transition-transform inline-block">
            VER SERVICIO →
          </span>
        </a>
      </div>
    </section>
  );
}

/**
 * FAQPage JSON-LD — clave para que LLMs (ChatGPT, Perplexity, Gemini)
 * y la búsqueda generativa de Google entiendan y citen las respuestas.
 */
export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

/**
 * Service JSON-LD por página — ayuda a GEO y a citas en LLMs.
 */
export function ServiceJsonLd({
  name,
  description,
  url,
  serviceType,
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url,
    provider: {
      "@type": "AccountingService",
      name: "Camhaji Consultores",
      url: "https://cconsultores-wireframe.lovable.app",
      telephone: "+52-998-887-2584",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cancún",
        addressRegion: "Quintana Roo",
        addressCountry: "MX",
      },
    },
    areaServed: [
      { "@type": "City", name: "Cancún" },
      { "@type": "AdministrativeArea", name: "Quintana Roo" },
      { "@type": "Place", name: "Riviera Maya" },
    ],
  };
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}