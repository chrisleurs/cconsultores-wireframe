import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FaqJsonLd, ServiceJsonLd } from "@/components/ServiceExtras";
import { Phone } from "lucide-react";
import { useLang, localizePath } from "@/i18n/lang";
import { getRentaVacacionalContent } from "@/i18n/sectorRentaVacacionalContent";

export default function SectorRentaVacacionalC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lang = useLang();
  const t = getRentaVacacionalContent(lang);
  const path = lang === "en" ? "/en/version-c/sectores/renta-vacacional" : "/version-c/sectores/renta-vacacional";
  const home = localizePath("/version-c", lang);
  const contacto = localizePath("/version-c/contacto", lang);
  const url = `https://cconsultores-wireframe.lovable.app${path}`;

  return (
    <div className="min-h-screen">
      <SEO title={t.seo.title} description={t.seo.description} path={path} lang={lang} />
      <ServiceJsonLd name={t.jsonLd.name} description={t.jsonLd.description} url={url} serviceType={t.jsonLd.serviceType} />
      <FaqJsonLd faqs={t.faqs} />
      <Navbar version="c" />

      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&h=900&fit=crop" alt="Villa de renta vacacional frente al mar en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/95 via-camhaji-base/60 to-camhaji-base/30" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 pt-32 w-full max-w-[1200px] mx-auto">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href={home} className="hover:text-white/50 transition-colors">{t.bcInicio}</a>
            <span className="text-white/15 mx-2">/</span><span>{t.bcSectores}</span>
            <span className="text-white/15 mx-2">/</span><span>{t.bcCurrent}</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">{t.heroLabel}</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            {t.heroH1L1}<br />{t.heroH1L2}<br />{t.heroH1L3}
          </h1>
          <p className="font-sans text-white/50 mt-6 max-w-[620px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>{t.heroP}</p>
        </div>
      </section>

      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.introLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>{t.introTitle}</h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">{t.introP}</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center bg-surface px-8 md:px-16 py-16 order-2 md:order-1">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">{t.mercadoLabel}</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>{t.mercadoTitle}</h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-5">{t.mercadoP1}</p>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-5">{t.mercadoP2}</p>
            <p className="font-sans text-[15px] font-semibold text-camhaji-text leading-relaxed">{t.mercadoP3}</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&h=900&fit=crop" alt="Departamento moderno en Cancún en plataforma de renta vacacional" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
      </section>

      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{t.areasLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>{t.areasTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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

      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">{t.expLabel}</p>
          <h2 className="font-sans font-bold text-white mb-8" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{t.expTitle}</h2>
          <p className="font-sans text-white/60 leading-relaxed mb-6" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>{t.expP1}</p>
          <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>{t.expP2}</p>
        </div>
      </section>

      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&h=800&fit=crop" alt="Vista aérea de zona hotelera de Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[820px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">{t.bandLabel}</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{t.bandText}</p>
        </div>
      </section>

      <section className="bg-surface py-24 px-5 md:px-10">
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

      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">{t.ctaLabel}</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>{t.ctaTitle}</h2>
        <p className="font-sans text-white/55 max-w-[520px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>{t.ctaP}</p>
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
