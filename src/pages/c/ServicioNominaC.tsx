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
import { getNominaContent } from "@/i18n/nominaContent";
import { t } from "@/i18n/ui";

export default function ServicioNominaC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const lang = useLang();
  const c = getNominaContent(lang);
  const base = lang === "en" ? "/en/version-c" : "/version-c";

  return (
    <div className="min-h-screen">
      <SEO title={c.seo.title} description={c.seo.description} path={`${base}/servicios/nomina`} />
      <ServiceJsonLd name={c.jsonLd.name} description={c.jsonLd.description} url={`https://cconsultores-wireframe.lovable.app${base}/servicios/nomina`} serviceType="PayrollService" />
      <FaqJsonLd faqs={c.faqs} />
      <Navbar version="c" />

      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop" alt={c.heroH1} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.88]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[800px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href={base} className="hover:text-white/50 transition-colors">{t(lang, "breadcrumbHome")}</a>
            <span className="text-white/15 mx-2">/</span><span>{c.bcServices}</span>
            <span className="text-white/15 mx-2">/</span><span>{c.bcCurrent}</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">{c.heroLabel}</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>{c.heroH1}</h1>
          <p className="font-sans text-white/50 max-w-[560px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>{c.heroIntro}</p>
        </div>
      </section>

      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{c.costoLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>{c.costoTitle}</h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-4">{c.costoP1}</p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{c.costoP2}</p>
          <p className="font-sans text-[16px] font-semibold text-primary">{c.costoP3}</p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop" alt={c.splitTitle} className="w-full h-full object-cover aspect-[4/3]" /></div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">{c.splitLabel}</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>{c.splitTitle}</h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">{c.splitText}</p>
          </div>
        </div>
      </section>

      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">{c.incluyeLabel}</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{c.incluyeTitle}</h2>
          <div className="border-t border-white/[0.08]">
            {c.incluye.map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-6 border-b border-white/[0.06] hover:translate-x-2.5 transition-transform duration-200">
                <span className="font-sans text-sm text-white/20 mt-1 w-8 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div className="flex-1">
                  <h3 className="font-sans font-bold text-white text-[15px] mb-1.5">{item.title}</h3>
                  <p className="font-sans text-sm font-light text-white/50 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">{c.espLabel}</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>{c.espTitle}</h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-48 h-48 bg-gradient-to-br from-camhaji-base to-primary/80 flex items-center justify-center flex-shrink-0">
              <span className="label-uppercase text-white/30">FOTO</span>
            </div>
            <div>
              <h3 className="font-sans font-bold text-camhaji-text text-xl mb-1">Lic. Marlon Chávez Sánchez</h3>
              <p className="label-uppercase text-primary mb-4">{c.espRole}</p>
              <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-4">{c.espP1}</p>
              <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-4">{c.espP2}</p>
              <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">{c.espP3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=800&fit=crop" alt={c.bandLabel} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">{c.bandLabel}</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{c.bandText}</p>
        </div>
      </section>

      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5 }}>"{testimonials.efrain.short}"</blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">{testimonials.efrain.author} · {testimonials.efrain.role}</p>
        </div>
      </section>

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

      <ServiceExtras article={blogByService.nomina} related={relatedByService.nomina} serviceLabel={c.bcCurrent} />

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
