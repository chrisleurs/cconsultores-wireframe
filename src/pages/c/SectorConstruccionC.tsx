import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Building2, Users, Shield, AlertCircle, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heroStats = [
  { value: "6+", label: "AÑOS EN SECTOR" },
  { value: "30+", label: "PROYECTOS" },
  { value: "100%", label: "SIN MULTAS SAT" },
  { value: "QR", label: "QUINTANA ROO" },
];

const sectorServices = [
  { icon: Building2, title: "Contabilidad de Obra", desc: "Costos por proyecto, estimaciones de avance, retenciones y cierre contable por obra." },
  { icon: Users, title: "Nómina de Construcción", desc: "Altas/bajas IMSS frecuentes, nómina semanal y contribuciones del sector obra." },
  { icon: Shield, title: "Fiscal para Construcción", desc: "ISR diferido, IVA materiales y mano de obra, retenciones SAT a subcontratistas." },
];

const challenges = [
  { problem: "Atraso en impuestos por estimaciones", solution: "Proceso de cierre por estimación en tiempo real" },
  { problem: "IMSS mal calculado para obra", solution: "Altas/bajas con el proceso correcto" },
  { problem: "Sin visibilidad de rentabilidad por proyecto", solution: "ERP con centros de costo por obra" },
  { problem: "Retenciones a subcontratistas mal registradas", solution: "Procedimientos específicos SAT" },
];

const faqs = [
  { q: "¿Manejan costos por proyecto individual?", a: "Sí. Cada proyecto tiene su propio centro de costos con seguimiento de estimaciones, avance y rentabilidad." },
  { q: "¿Pueden llevar la nómina semanal de obra?", a: "Sí. Gestionamos nómina semanal con altas/bajas frecuentes de IMSS, como es habitual en el sector." },
  { q: "¿Tienen experiencia con retenciones a subcontratistas?", a: "Es parte de nuestro día a día. Aplicamos los procedimientos SAT vigentes para retenciones de IVA e ISR." },
  { q: "¿Atienden constructoras fuera de Cancún?", a: "Principalmente en Quintana Roo, pero podemos trabajar de forma remota con empresas en otros estados." },
];

const teamMembers = [
  { name: "Rogelio R. Moo Ruiz", role: "Gerente General", bio: "Fundador del despacho. Experiencia en contabilidad corporativa y auditoría en Cancún." },
  { name: "Marlon R. Chávez Sánchez", role: "Supervisor Nómina", bio: "Especialista en nómina de construcción, IMSS y CONTPAQi para el sector obra." },
];

export default function SectorConstruccionC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO SPLIT */}
      <section className="min-h-[60dvh] grid grid-cols-1 md:grid-cols-2">
        <div className="bg-camhaji-base flex flex-col justify-end p-8 md:p-12 pt-32">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span>Sectores<span className="text-white/15 mx-2">/</span>Construcción
          </p>
          <p className="label-uppercase text-white/30 mb-6">ESPECIALIZACIÓN PRINCIPAL · 6+ AÑOS EN EL SECTOR</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(28px, 4.5vw, 52px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Contabilidad Especializada para el Sector Construcción
          </h1>
        </div>
        <div className="bg-primary flex items-end p-8 md:p-12">
          <div className="flex flex-col gap-7">
            {heroStats.map((s) => (
              <div key={s.label} className="flex items-baseline gap-3">
                <span className="font-sans font-bold text-[32px] text-white" style={{ letterSpacing: "-0.03em" }}>{s.value}</span>
                <span className="label-uppercase text-white/40">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <span className="font-sans font-bold text-primary/[0.05] text-[100px] leading-none block -mb-5">02</span>
          <h2 className="font-sans font-bold text-camhaji-text max-w-[800px] mb-12" style={{ fontSize: "clamp(26px, 4vw, 48px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            La construcción tiene una contabilidad que pocos conocen de verdad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-16">
            <div>
              <p className="font-sans text-[17px] text-camhaji-text leading-relaxed mb-4">
                Las constructoras tienen desafíos contables únicos: proyectos de duración variable, múltiples subcontratistas, estimaciones de avance, retenciones y normativa fiscal específica. Un contador genérico comete errores costosos aquí.
              </p>
              <p className="font-sans text-base font-light text-camhaji-muted leading-relaxed">
                Llevamos más de 6 años trabajando con empresas de construcción en Quintana Roo.
              </p>
            </div>
            <div className="md:sticky md:top-[100px] border-l-2 border-primary pl-6">
              <p className="label-uppercase text-camhaji-muted mb-4">4 DIFERENCIADORES</p>
              <ul className="space-y-0">
                {["Costos por proyecto y estimaciones", "Nómina de obra especializada", "ISR diferido para construcción", "Retenciones a subcontratistas"].map((d) => (
                  <li key={d} className="font-sans text-[15px] text-camhaji-text leading-[2.1]">→ {d}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS APLICADOS */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <p className="label-uppercase text-white/35">SERVICIOS ESPECIALIZADOS</p>
            <p className="font-sans text-[15px] font-light text-white/50">Todo lo que necesita una constructora</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08]">
            {sectorServices.map((s, i) => (
              <div key={i} className={`py-10 pr-8 ${i < 2 ? "md:border-r border-white/[0.07]" : ""} md:pl-8 first:md:pl-0`}>
                <s.icon className="w-8 h-8 text-white/50 mb-7" strokeWidth={1} />
                <h3 className="font-sans font-bold text-white text-lg mb-3">{s.title}</h3>
                <p className="font-sans text-sm font-light text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA — stats 2×2 */}
      <section className="min-h-[80dvh] bg-surface grid grid-cols-1 md:grid-cols-2">
        {heroStats.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center text-center min-h-[20dvh] md:min-h-[40dvh] ${
              i % 2 === 0 ? "md:border-r border-border-subtle" : ""
            } ${i < 2 ? "border-b border-border-subtle" : ""}`}
          >
            <span className="font-sans font-bold text-primary" style={{ fontSize: "clamp(64px, 12vw, 120px)", letterSpacing: "-0.04em", lineHeight: 1 }}>
              {s.value}
            </span>
            <p className="label-uppercase text-camhaji-muted mt-3">{s.label}</p>
          </div>
        ))}
      </section>

      {/* RETOS */}
      <section className="bg-primary py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="label-uppercase text-white/40 mb-3">RETOS QUE CONOCEMOS</p>
          <h2 className="font-sans font-bold text-white mb-12" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Los problemas que más vemos en constructoras
          </h2>
          <div className="border-t border-white/10">
            {challenges.map((c, i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 py-7 border-b border-white/[0.08] items-start">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-white/40 flex-shrink-0 mt-1" />
                  <span className="font-sans font-semibold text-white" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>{c.problem}</span>
                </div>
                <p className="font-sans text-[15px] font-light text-white/55 leading-relaxed md:text-right">
                  <span className="text-camhaji-accent">→</span> {c.solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[700px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-3">TU EQUIPO ASIGNADO</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-12" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
            Quiénes trabajan con tu empresa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {teamMembers.map((m, i) => (
              <div key={i} className={`${i === 0 ? "md:border-r border-border-subtle md:pr-10" : "md:pl-10"}`}>
                <div className="w-full aspect-square bg-surface mb-5 flex items-center justify-center">
                  <span className="label-uppercase text-camhaji-muted">FOTO</span>
                </div>
                <div className="w-6 h-px bg-primary mb-3" />
                <h3 className="font-sans font-bold text-[17px] text-camhaji-text">{m.name}</h3>
                <p className="label-uppercase text-primary mb-2.5">{m.role}</p>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ DARK */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-white/35 mb-3">PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-white mb-14" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Sobre el Sector Construcción
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-white/[0.07]">
                <AccordionTrigger className="py-6 hover:no-underline text-white/85 [&>svg]:text-white/40">
                  <div className="flex items-baseline gap-4 text-left">
                    <span className="font-sans text-xs tracking-[0.1em] text-white/20">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans font-semibold text-base text-white/85">{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 pb-6 font-sans text-[15px] text-white/50 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-surface py-16 px-5 md:px-10">
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap max-w-[600px] mx-auto">
          <span className="font-sans text-lg text-camhaji-text">¿Tu empresa es del sector comercial?</span>
          <span className="text-camhaji-muted/40">—</span>
          <a href="#" className="label-uppercase text-primary border-b border-primary pb-0.5">VER ESPECIALIZACIÓN →</a>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">DA EL SIGUIENTE PASO</p>
        <h2 className="font-sans font-bold text-white mb-12" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu negocio.
        </h2>
        <a href="/version-c/contacto" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5">
          AGENDAR CONSULTA GRATUITA
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
