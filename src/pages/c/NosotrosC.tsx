import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientLogos } from "@/components/ClientLogos";
import { Phone } from "lucide-react";
import { team } from "@/data/team";
import { TeamGrid } from "@/components/TeamGrid";
import { useLang, localizePath } from "@/i18n/lang";
import { getNosotrosContent } from "@/i18n/nosotrosContent";

const direccion = team.filter((m) => m.group === "direccion");
const operacion = team.filter((m) => m.group === "operacion");

export default function NosotrosC() {
  const lang = useLang();
  const C = getNosotrosContent(lang);
  const homeHref = localizePath("/version-c", lang);
  const servHref = localizePath("/version-c/servicios/contabilidad", lang);
  return (
    <div className="min-h-screen">
      <SEO
        title={C.seo.title}
        description={C.seo.description}
        path={lang === "en" ? "/en/version-c/nosotros" : "/version-c/nosotros"}
        lang={lang}
        altPath="/version-c/nosotros"
      />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop" alt={C.heroH1} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.84]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[900px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href={homeHref} className="hover:text-white/50 transition-colors">{lang === "en" ? "Home" : "Inicio"}</a>
            <span className="text-white/15 mx-2">/</span>{C.breadcrumbCurrent}
          </p>
          <p className="label-uppercase text-white/30 mb-6">{C.heroLabel}</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            {C.heroH1}
          </h1>
          <p className="font-sans text-base font-light text-white/50 max-w-[600px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.6 }}>
            {C.heroIntro}
          </p>
        </div>
      </section>

      <ClientLogos variant="c" />

      {/* FILOSOFÍA — movida justo después del hero */}
      <section className="bg-primary py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 gap-4">
            <p className="label-uppercase text-white/30">{C.filo.label}</p>
            <h2 className="font-sans font-bold text-white md:text-right max-w-[400px]" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
              {C.filo.title}
            </h2>
          </div>
          <p className="font-sans text-white/60 leading-relaxed mb-12 max-w-[700px]" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
            {C.filo.intro}
          </p>
          <div className="border-t border-white/[0.08]">
            {C.filo.items.map((p) => (
              <div key={p.num} className="flex items-start gap-6 py-6 border-b border-white/[0.06] transition-transform duration-300 hover:translate-x-2.5 cursor-default">
                <span className="font-sans text-sm text-white/20 mt-1 w-8 flex-shrink-0">{p.num}</span>
                <div>
                  <h3 className="font-sans font-bold text-white text-lg mb-1">{p.name}</h3>
                  <p className="font-sans text-sm font-light text-white/50">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-16">{C.historia.label}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <h2 className="font-sans font-bold text-camhaji-text" style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
              {C.historia.title}
            </h2>
            <div>
              {C.historia.paragraphs.map((p, i) => (
                <p key={i} className="font-sans text-[16px] text-camhaji-text leading-relaxed mb-5">{p}</p>
              ))}
              <p
                className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed"
                dangerouslySetInnerHTML={{ __html: C.historia.closingHTML }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIRECCIÓN Y GERENCIA */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 gap-4">
            <p className="label-uppercase text-camhaji-muted">{C.lideres.label}</p>
          </div>
          <div className="mb-16">
            <TeamGrid members={direccion} tone="light" columns={2} />
          </div>

          <p className="label-uppercase text-camhaji-muted mb-10">{C.lideres.payrollLabel}</p>
          <TeamGrid members={operacion} tone="light" columns={2} />

          <div className="mt-16 p-8 bg-white border border-border-subtle rounded-sm text-center">
            <p
              className="font-sans text-camhaji-text leading-relaxed"
              dangerouslySetInnerHTML={{ __html: C.lideres.teamNote }}
            />
          </div>
        </div>
      </section>

      {/* VISIÓN */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-10 text-center">{C.vision.label}</p>
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
              {C.vision.title}
            </h2>
            <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">{C.vision.p1}</p>
            <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">{C.vision.p2}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">{C.cta.label}</p>
        <h2 className="font-sans font-bold text-white mb-12" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          {C.cta.title}
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="https://wa.me/5215543587159" target="_blank" rel="noopener noreferrer" className="btn-uppercase bg-white text-primary border border-white px-10 py-4 hover:bg-camhaji-accent hover:border-camhaji-accent hover:text-camhaji-base transition-all duration-300">
            {C.cta.cta1}
          </a>
          <a href={servHref} className="btn-uppercase border border-white/30 text-white/70 px-10 py-4 hover:text-white hover:border-white/60 transition-all duration-300">
            {C.cta.cta2}
          </a>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <Phone className="w-3.5 h-3.5 text-white/40" />
          <span className="font-sans text-sm text-white/50">(998) 123-4567</span>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}