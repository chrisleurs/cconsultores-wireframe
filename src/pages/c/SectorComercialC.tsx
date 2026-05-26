import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useLang, localizePath } from "@/i18n/lang";
import { getComercialContent } from "@/i18n/sectorComercialContent";

export default function SectorComercialC() {
  const lang = useLang();
  const t = getComercialContent(lang);
  const path = lang === "en" ? "/en/version-c/sectores/comercial" : "/version-c/sectores/comercial";
  const home = localizePath("/version-c", lang);
  const contacto = localizePath("/version-c/contacto", lang);

  return (
    <div className="min-h-screen">
      <SEO title={t.seo.title} description={t.seo.description} path={path} lang={lang} />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1600&h=900&fit=crop" alt="Empresa comercial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/95 via-camhaji-base/60 to-camhaji-base/30" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 pt-32 w-full max-w-[1200px] mx-auto">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href={home} className="hover:text-white/50 transition-colors">{t.bcInicio}</a>
            <span className="text-white/15 mx-2">/</span><span>{t.bcSectores}</span>
            <span className="text-white/15 mx-2">/</span><span>{t.bcCurrent}</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">{t.heroLabel}</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            {t.heroH1L1}<br />{t.heroH1L2}
          </h1>
          <p className="font-sans text-white/50 mt-6 max-w-[560px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            {t.heroP}
          </p>
        </div>
      </section>

      {/* LO QUE NECESITA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.retosLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            {t.retosTitle}
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-8">
            {t.retosIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {t.retos.map((item) => (
              <div key={item} className="flex items-start gap-3 py-3">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-camhaji-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT IMAGE — ALMACÉN */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center bg-surface px-8 md:px-16 py-16 order-2 md:order-1">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">{t.splitLabel}</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              {t.splitTitle}
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              {t.splitP}
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=800&fit=crop" alt="Almacén comercial organizado" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* LO QUE HACEMOS */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">{t.loQueHacemosLabel}</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            {t.loQueHacemosTitle}
          </h2>
          <div className="border-t border-white/[0.08]">
            {t.loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.06] hover:translate-x-2.5 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-camhaji-accent flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-white/70 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.expLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            {t.expTitle}
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            {t.expP}
          </p>
          <p className="font-sans font-semibold text-primary">{t.expClose}</p>
        </div>
      </section>

      {/* FULL-BLEED BAND */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=800&fit=crop" alt="Centro comercial en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">{t.bandLabel}</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            {t.bandText}
          </p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5 }}>
            "{testimonials.paola.short}"
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">{testimonials.paola.author} · {testimonials.paola.role}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">{t.ctaLabel}</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          {t.ctaTitle}
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          {t.ctaP}
        </p>
        <a href={contacto} className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5">
          {t.ctaBtn}
        </a>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-white/40" />
          <span className="font-sans text-sm text-white/50">(998) 123-4567</span>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}
