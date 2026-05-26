import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useLang, localizePath } from "@/i18n/lang";
import { getConstruccionContent } from "@/i18n/sectorConstruccionContent";

export default function SectorConstruccionC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lang = useLang();
  const t = getConstruccionContent(lang);
  const path = lang === "en" ? "/en/version-c/sectores/construccion" : "/version-c/sectores/construccion";
  const home = localizePath("/version-c", lang);
  const contacto = localizePath("/version-c/contacto", lang);

  return (
    <div className="min-h-screen">
      <SEO title={t.seo.title} description={t.seo.description} path={path} lang={lang} />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop" alt="Construcción en Cancún" className="absolute inset-0 w-full h-full object-cover" />
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
          <div className="font-sans text-white/50 mt-6 max-w-[640px] space-y-4" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            <p>{t.heroP1}</p>
            <p>{t.heroP2}</p>
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.porqueLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>{t.porqueTitle}</h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.porqueP1}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.porqueP2}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">{t.porqueP3}</p>
        </div>
      </section>

      {/* SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div>
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop" alt="Obra de construcción en zona costera" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">{t.splitLabel}</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>{t.splitTitle}</h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">{t.splitP}</p>
          </div>
        </div>
      </section>

      {/* RETOS */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">{t.retosLabel}</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{t.retosTitle}</h2>
          <div className="space-y-10">
            {t.retos.map((r, i) => (
              <div key={i} className="border-l-2 border-camhaji-accent/40 pl-6">
                <h3 className="font-sans font-bold text-white text-lg mb-3">{r.title}</h3>
                <p className="font-sans text-sm font-light text-white/55 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LO QUE HACEMOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.loQueHacemosLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{t.loQueHacemosTitle}</h2>
          <div className="border-t border-border-subtle">
            {t.loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-6 border-b border-border-subtle hover:translate-x-2 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                <div>
                  <p className="font-sans font-semibold text-[16px] text-camhaji-text leading-snug mb-1.5">{item.title}</p>
                  <p className="font-sans text-[14px] font-light text-camhaji-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.expLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{t.expTitle}</h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.expP1}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.expP2}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">{t.expP3}</p>
          <p className="font-sans font-semibold text-primary mt-8">{t.expClose}</p>
        </div>
      </section>

      {/* BAND */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&h=800&fit=crop" alt="Desarrollo inmobiliario en Riviera Maya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">{t.bandLabel}</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{t.bandText}</p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5 }}>
            "{testimonials.elias.short}"
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">{testimonials.elias.author} · {testimonials.elias.role}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.faqLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>{t.faqTitle}</h2>
          <div className="border-t border-border-subtle">
            {t.faqs.map((f, i) => (
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

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">{t.ctaLabel}</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>{t.ctaTitle}</h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>{t.ctaP}</p>
        <a href={contacto} className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5">{t.ctaBtn}</a>
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
