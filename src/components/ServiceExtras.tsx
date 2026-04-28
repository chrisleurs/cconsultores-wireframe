import { Helmet } from "react-helmet-async";
import type { BlogArticle, RelatedService } from "@/data/serviceLinks";

interface Props {
  article: BlogArticle;
  related: RelatedService[];
  serviceLabel: string;
}

/**
 * Bloque combinado para páginas de servicio:
 * - 1 artículo de blog destacado (full-width con imagen panorámica)
 * - 2 servicios relacionados en grid 2 columnas
 * Diferenciación visual clara: blog con acento verde sage, servicios con primary.
 */
export function ServiceExtras({ article, related, serviceLabel }: Props) {
  return (
    <section className="bg-surface py-20 px-5 md:px-10">
      <div className="max-w-[1200px] mx-auto space-y-10">
        {/* BLOG DESTACADO — full width, imagen panorámica, acento verde sage */}
        <a
          href={article.href}
          className="group block bg-white overflow-hidden grid grid-cols-1 md:grid-cols-5 hover:shadow-xl transition-shadow duration-500"
        >
          <div className="md:col-span-3 relative overflow-hidden aspect-[16/10] md:aspect-auto">
            <img
              src={article.image}
              alt={article.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <span className="absolute top-5 left-5 inline-flex items-center gap-2 bg-camhaji-accent text-white px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold">
                ARTÍCULO RECOMENDADO
              </span>
            </span>
          </div>
          <div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center">
            <p className="label-uppercase text-camhaji-accent mb-5">LECTURA RECOMENDADA</p>
            <h3
              className="font-sans font-bold text-camhaji-text mb-4 group-hover:text-primary transition-colors"
              style={{ fontSize: "clamp(22px, 2.4vw, 30px)", letterSpacing: "-0.02em", lineHeight: 1.15 }}
            >
              {article.title}
            </h3>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-6">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
              <span className="font-sans text-xs uppercase tracking-[0.12em] text-camhaji-muted/60">
                {article.readingTime}
              </span>
              <span className="label-uppercase text-primary group-hover:translate-x-1 transition-transform">
                LEER ARTÍCULO →
              </span>
            </div>
          </div>
        </a>

        {/* SERVICIOS RELACIONADOS — grid 2 columnas, badge primary, layout vertical */}
        <div>
          <p className="label-uppercase text-camhaji-muted mb-6">
            TAMBIÉN BUSCAN JUNTO A {serviceLabel.toUpperCase()}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="group block bg-white overflow-hidden hover:shadow-lg transition-shadow duration-500"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-primary text-white px-3 py-1.5">
                    <span className="w-1.5 h-1.5 bg-white" />
                    <span className="font-sans text-[10px] uppercase tracking-[0.15em] font-semibold">
                      SERVICIO
                    </span>
                  </span>
                </div>
                <div className="p-7">
                  <h3
                    className="font-sans font-bold text-camhaji-text mb-3 group-hover:text-primary transition-colors"
                    style={{ fontSize: "clamp(18px, 1.8vw, 22px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}
                  >
                    {s.name}
                  </h3>
                  <p className="font-sans text-[14px] font-light text-camhaji-muted leading-relaxed mb-5">
                    {s.desc}
                  </p>
                  <span className="label-uppercase text-primary group-hover:translate-x-1 transition-transform inline-block">
                    VER SERVICIO →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
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