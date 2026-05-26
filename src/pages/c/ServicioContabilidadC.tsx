import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceExtras, FaqJsonLd, ServiceJsonLd } from "@/components/ServiceExtras";
import { blogByService, relatedByService } from "@/data/serviceLinks";
import { testimonials } from "@/data/testimonials";
import { Phone } from "lucide-react";
import { useLang } from "@/i18n/lang";
import { getContabilidadContent } from "@/i18n/contabilidadContent";
import { t } from "@/i18n/ui";

export default function ServicioContabilidadC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lang = useLang();
  const c = getContabilidadContent(lang);
  const base = lang === "en" ? "/en/version-c" : "/version-c";

  return (
    <div className="min-h-screen">
      <SEO title={c.seo.title} description={c.seo.description} path={`${base}/servicios/contabilidad`} />
      <ServiceJsonLd
        name={c.jsonLd.name}
        description={c.jsonLd.description}
        url={`https://cconsultores-wireframe.lovable.app${base}/servicios/contabilidad`}
        serviceType="Accounting"
      />
      <FaqJsonLd faqs={c.faqs} />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop" alt={c.heroH1} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.86]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[800px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href={base} className="hover:text-white/50 transition-colors">{t(lang, "breadcrumbHome")}</a>
            <span className="text-white/15 mx-2">/</span><span>{c.bcServices}</span>
            <span className="text-white/15 mx-2">/</span><span>{c.bcCurrent}</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">{c.heroLabel}</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
            {c.heroH1}
          </h1>
          <p className="font-sans text-white/50 max-w-[620px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>
            {c.heroIntro}
          </p>
        </div>
      </section>

      {/* ADAPTABILIDAD */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{c.adaptLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>{c.adaptTitle}</h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-4">{c.adaptP1}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">{c.adaptP2}</p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface py-20 px-5 md:px-10 border-y border-border-subtle">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {c.stats.map((s, i) => (
            <div key={i} className="text-center md:text-left md:px-6 md:border-r md:last:border-r-0 md:border-border-subtle">
              <div className="font-serif text-camhaji-base mb-3" style={{ fontSize: "clamp(40px, 5.5vw, 68px)", letterSpacing: "-0.03em", lineHeight: 1 }}>{s.num}</div>
              <p className="font-sans text-xs uppercase tracking-[0.12em] text-camhaji-muted leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">{c.procesoLabel}</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{c.procesoTitle}</h2>
          <div className="border-t border-white/[0.08]">
            {c.proceso.map((p) => (
              <div key={p.num} className="flex items-start gap-6 py-6 border-b border-white/[0.06] transition-transform duration-300 hover:translate-x-2.5 cursor-default">
                <span className="font-sans text-sm text-white/20 mt-1 w-8 flex-shrink-0">{p.num}</span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h3 className="font-sans font-bold text-white text-lg">{p.title}</h3>
                    <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-camhaji-accent/60 flex-shrink-0">{p.days}</span>
                  </div>
                  <p className="font-sans text-sm font-light text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-BLEED BAND */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1600&h=800&fit=crop" alt="Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">{c.bandLabel}</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{c.bandText}</p>
        </div>
      </section>

      {/* GESTIÓN ADMINISTRATIVA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{c.gestionLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{c.gestionTitle}</h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-10">{c.gestionIntro}</p>
          <div className="border-t border-border-subtle">
            {c.gestion.map((item) => (
              <div key={item.title} className="flex items-start gap-3 py-5 border-b border-border-subtle">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                <div className="flex-1">
                  <h3 className="font-sans font-semibold text-[15px] text-camhaji-text mb-1">{item.title}</h3>
                  <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm font-light text-camhaji-muted mt-6 italic">{c.gestionFooter}</p>
        </div>
      </section>

      {/* SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop" alt={c.splitTitle} className="w-full h-full object-cover aspect-[4/3]" /></div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">{c.splitLabel}</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>{c.splitTitle}</h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">{c.splitText}</p>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{c.paraQuienLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>{c.paraQuienTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.paraQuien.map((p) => (
              <a key={p.title} href={p.href} className="group bg-white p-8 md:p-10 hover:shadow-lg transition-shadow">
                <div className="w-6 h-px bg-primary mb-5" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed mb-4">{p.desc}</p>
                <span className="label-uppercase text-primary/60 group-hover:text-primary transition-colors">{c.paraQuienCta}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[820px] mx-auto">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.4vw, 28px)", lineHeight: 1.5 }}>
            "{testimonials.paola.short}"
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">{testimonials.paola.author} · {testimonials.paola.role}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{c.faqLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>{c.faqTitle}</h2>
          <div className="border-t border-border-subtle">
            {c.faqs.map((f, i) => (
              <div key={i} className="border-b border-border-subtle">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-6 text-left group" aria-expanded={openFaq === i}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans text-xs text-camhaji-muted/40 tracking-[0.1em]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans font-semibold text-[17px] text-camhaji-text group-hover:text-primary transition-colors">{f.q}</span>
                  </div>
                  <span className="font-sans text-xl text-camhaji-muted/40 flex-shrink-0 ml-4 transition-transform duration-300" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "500px" : "0", opacity: openFaq === i ? 1 : 0 }}>
                  <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceExtras article={blogByService.contabilidad} related={relatedByService.contabilidad} serviceLabel={c.bcCurrent} />

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">{c.ctaLabel}</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>{c.ctaTitle}</h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>{c.ctaIntro}</p>
        <a href={`${base}/contacto`} className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5">{c.ctaBtn}</a>
        <div className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-white/40" /><span className="font-sans text-sm text-white/50">(998) 123-4567</span></div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}
