import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useLang, localizePath } from "@/i18n/lang";
import { getResicoContent } from "@/i18n/sectorResicoContent";

export default function SectorResicoC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lang = useLang();
  const t = getResicoContent(lang);
  const path = lang === "en" ? "/en/version-c/sectores/resico" : "/version-c/sectores/resico";
  const home = localizePath("/version-c", lang);
  const contacto = localizePath("/version-c/contacto", lang);

  return (
    <div className="min-h-screen">
      <SEO title={t.seo.title} description={t.seo.description} path={path} lang={lang} />
      <Navbar version="c" />

      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop" alt="Freelancer trabajando" className="absolute inset-0 w-full h-full object-cover" />
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
          <p className="font-sans text-white/50 mt-6 max-w-[560px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>{t.heroP}</p>
        </div>
      </section>

      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.queEsLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>{t.queEsTitle}</h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.queEsP1}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.queEsP2}</p>
          <p className="font-sans font-semibold text-primary">{t.queEsClose}</p>
        </div>
      </section>

      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">{t.obligLabel}</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{t.obligTitle}</h2>
          <div className="space-y-10">
            {t.obligaciones.map((o, i) => (
              <div key={i} className="border-l-2 border-camhaji-accent/40 pl-6">
                <h3 className="font-sans font-bold text-white text-lg mb-3">{o.title}</h3>
                <p className="font-sans text-[15px] font-light text-white/60 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center bg-surface px-8 md:px-16 py-16 order-2 md:order-1">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">{t.splitLabel}</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>{t.splitTitle}</h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">{t.splitP}</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&h=800&fit=crop" alt="Emprendedor independiente trabajando" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
      </section>

      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.loQueHacemosLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{t.loQueHacemosTitle}</h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-10">{t.loQueHacemosIntro}</p>
          <div className="border-t border-border-subtle">
            {t.loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-border-subtle hover:translate-x-2.5 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-camhaji-text leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="font-sans font-semibold text-primary mt-8">{t.loQueHacemosFooter}</p>
        </div>
      </section>

      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.perfilesLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-12" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{t.perfilesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.perfiles.map((p) => (
              <div key={p.title}>
                <div className="w-6 h-px bg-primary mb-4" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{p.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&h=800&fit=crop" alt="Calle comercial en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">{t.bandLabel}</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{t.bandText}</p>
        </div>
      </section>

      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-sans font-light text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5 }}>
            "{testimonials.edgar.short}"
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">{testimonials.edgar.author} · {testimonials.edgar.role}</p>
        </div>
      </section>

      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.faqLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-12" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{t.faqTitle}</h2>
          <div>
            {t.faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-border-subtle">
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex justify-between items-center py-6 text-left" aria-expanded={isOpen}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-xs tracking-[0.1em] text-[#D0CBC0] flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-sans font-semibold text-[17px] text-camhaji-text leading-snug">{f.q}</span>
                    </div>
                    <span className={`font-sans text-2xl font-light text-primary flex-shrink-0 ml-4 transition-transform duration-200 leading-none ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

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
