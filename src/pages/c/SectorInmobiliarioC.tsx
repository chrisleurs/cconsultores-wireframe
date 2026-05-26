import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";
import { useLang, localizePath } from "@/i18n/lang";
import { getInmobiliarioContent } from "@/i18n/sectorInmobiliarioContent";

export default function SectorInmobiliarioC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lang = useLang();
  const t = getInmobiliarioContent(lang);
  const path = lang === "en" ? "/en/version-c/sectores/inmobiliario" : "/version-c/sectores/inmobiliario";
  const home = localizePath("/version-c", lang);
  const contacto = localizePath("/version-c/contacto", lang);

  return (
    <div className="min-h-screen">
      <SEO title={t.seo.title} description={t.seo.description} path={path} lang={lang} />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop" alt="Sector inmobiliario Cancún" className="absolute inset-0 w-full h-full object-cover" />
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

      {/* IMPUESTOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.impuestosLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            {t.impuestosTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.impuestos.map((item) => (
              <div key={item.title}>
                <div className="w-6 h-px bg-primary mb-5" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{item.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div>
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop" alt="Asesor inmobiliario mostrando propiedad" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
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
      </section>

      {/* CFDI */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.cfdiLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            {t.cfdiTitle}
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.cfdiP1}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.cfdiP2}</p>
          <p className="font-sans font-semibold text-primary">{t.cfdiClose}</p>
        </div>
      </section>

      {/* RESICO */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">{t.resicoLabel}</p>
          <h2 className="font-sans font-bold text-white mb-8" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            {t.resicoTitle}
          </h2>
          <p className="font-sans text-white/60 leading-relaxed mb-6" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>{t.resicoP1}</p>
          <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>{t.resicoP2}</p>
        </div>
      </section>

      {/* LO QUE HACEMOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.loQueHacemosLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            {t.loQueHacemosTitle}
          </h2>
          <div className="border-t border-border-subtle">
            {t.loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-border-subtle hover:translate-x-2 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-camhaji-text leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm font-light text-camhaji-muted mt-6 italic">{t.loQueHacemosFooter}</p>
        </div>
      </section>

      {/* ÁREAS CLAVE */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.areasLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            {t.areasTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.areas.map((item) => (
              <div key={item.title}>
                <div className="w-6 h-px bg-primary mb-5" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{item.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.expLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            {t.expTitle}
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{t.expP1}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-8">{t.expP2}</p>
          <p className="font-sans font-semibold text-primary">{t.expClose}</p>
        </div>
      </section>

      {/* BAND */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=800&fit=crop" alt="Condominios frente al mar en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">{t.bandLabel}</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{t.bandText}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.faqLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            {t.faqTitle}
          </h2>
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
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "300px" : "0", opacity: openFaq === i ? 1 : 0 }}>
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
