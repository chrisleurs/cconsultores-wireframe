import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Building2, Users, Shield } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heroStats = ["6+ AÑOS EN EL SECTOR", "30+ PROYECTOS", "100% SIN MULTAS SAT", "QR QUINTANA ROO"];

const differentiators = [
  "Costos por proyecto y estimaciones",
  "Nómina de obra especializada",
  "Fiscal para construcción (ISR diferido)",
  "Retenciones a subcontratistas",
];

const sectorServices = [
  { icon: Building2, title: "Costos y Control de Obra", desc: "Control de costos por proyecto, estimaciones, retenciones y cierre por obra." },
  { icon: Users, title: "Nómina & IMSS para Constructoras", desc: "Personal de obra, altas/bajas IMSS frecuentes, nómina semanal." },
  { icon: Shield, title: "Fiscal para Construcción", desc: "ISR diferido, IVA materiales, retenciones subcontratistas SAT." },
];

const stats = [
  { value: "6+", label: "AÑOS EN SECTOR CONSTRUCCIÓN" },
  { value: "30+", label: "PROYECTOS CONTABILIZADOS" },
  { value: "100%", label: "DECLARACIONES SIN MULTAS" },
];

const challenges = [
  { problem: "Atraso en el cálculo de impuestos por estimaciones pendientes", solution: "Implementamos un proceso de cierre por estimación para que los impuestos se calculen en tiempo real, no al finalizar la obra." },
  { problem: "IMSS mal calculado para personal de obra con contratos variables", solution: "Manejamos altas, bajas y variaciones de salario del personal de obra con el proceso correcto para evitar multas del IMSS." },
  { problem: "Sin visibilidad de la rentabilidad real por proyecto", solution: "Con nuestro ERP asignamos costos por proyecto y puedes ver la rentabilidad de cada obra en tiempo real." },
  { problem: "Retenciones a subcontratistas mal registradas", solution: "Tenemos procedimientos específicos para retenciones de ISR e IVA a subcontratistas según la normativa vigente." },
];

const faqs = [
  { q: "¿Trabajan con constructoras pequeñas o solo con empresas grandes?", a: "Atendemos desde empresas pequeñas con 5 empleados hasta constructoras medianas con múltiples obras simultáneas." },
  { q: "¿Pueden manejar múltiples obras al mismo tiempo?", a: "Sí. Asignamos centros de costo por obra para llevar contabilidad independiente de cada proyecto." },
  { q: "¿Cómo manejan las estimaciones y retenciones?", a: "Cada estimación autorizada genera su registro contable y su cálculo fiscal. Las retenciones se controlan con catálogos específicos." },
  { q: "¿Qué pasa si tengo trabajadores eventuales de obra?", a: "Manejamos altas y bajas frecuentes en el IMSS sin problema. Nuestro proceso está diseñado para el sector." },
];

export default function SectorConstruccionB() {
  return (
    <div className="min-h-screen">
      <Navbar version="b" />

      {/* HERO */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 min-h-[50vh] flex items-end">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <p className="font-sans text-xs text-white/50 mb-4">
            <a href="/version-b" className="hover:text-white/70 transition-colors">Inicio</a> / Sectores / Construcción
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="label-uppercase text-white/50">ESPECIALIZACIÓN PRINCIPAL</span>
            <span className="text-white/30">·</span>
            <span className="label-uppercase text-white/70">6+ AÑOS EN EL SECTOR</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            Contabilidad Especializada para el Sector Construcción
          </h1>
          <div className="flex flex-wrap gap-4">
            {heroStats.map((s) => (
              <span key={s} className="label-uppercase text-white/60 border border-white/15 px-4 py-2 rounded-sm">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ - EDITORIAL */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-7">
              <span className="font-serif text-8xl font-bold text-primary/10 block mb-4" aria-hidden="true">6+</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-6">
                La construcción tiene una contabilidad que pocos conocen de verdad
              </h2>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">
                Las constructoras tienen desafíos contables únicos: proyectos con duración variable, múltiples subcontratistas, estimaciones de avance, retenciones y una normativa fiscal específica.
              </p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                Llevamos más de 6 años trabajando con empresas de construcción en Quintana Roo.
              </p>
            </div>
            <div className="md:col-span-5 md:sticky md:top-28 self-start">
              <div className="bg-surface p-8 rounded-sm border border-border-subtle">
                <p className="label-uppercase text-primary mb-6">4 DIFERENCIADORES</p>
                <ul className="space-y-4">
                  {differentiators.map((d, i) => (
                    <li key={i} className="font-sans text-sm text-camhaji-text flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS — NEGRO */}
      <section className="bg-camhaji-black py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-white/40 mb-4">SERVICIOS ESPECIALIZADOS</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-16">Todo lo que necesita una constructora</h2>
          <div className="space-y-0">
            {sectorServices.map((s, i) => (
              <div key={i} className="border-t border-white/10 py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <div className="md:col-span-1"><s.icon className="w-6 h-6 text-white/60" strokeWidth={1.5} /></div>
                <h3 className="font-serif text-lg font-bold text-white md:col-span-3">{s.title}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed md:col-span-6">{s.desc}</p>
                <a href="#" className="btn-uppercase text-white/50 hover:text-white transition-colors md:col-span-2 md:text-right">CONOCER MÁS →</a>
              </div>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex gap-8 flex-wrap">
              {stats.map((s, i) => (
                <div key={i}>
                  <span className="font-serif text-4xl md:text-5xl font-bold text-primary">{s.value}</span>
                  <p className="label-uppercase text-camhaji-muted mt-2">{s.label}</p>
                </div>
              ))}
            </div>
            <div>
              <blockquote className="font-serif text-xl italic text-camhaji-text leading-relaxed mb-4">
                "Llevan más de 4 años llevando la contabilidad de mi constructora. Entienden los costos de obra, las estimaciones y el SAT del sector como nadie."
              </blockquote>
              <p className="font-sans text-sm text-camhaji-muted">Empresario, Sector Construcción · Cancún, Q.Roo</p>
            </div>
          </div>
        </div>
      </section>

      {/* RETOS — ACCORDION */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">RETOS QUE CONOCEMOS</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-12">Los problemas que más vemos en constructoras</h2>
          <Accordion type="single" collapsible>
            {challenges.map((c, i) => (
              <AccordionItem key={i} value={`reto-${i}`} className="border-border-subtle">
                <AccordionTrigger className="font-serif text-base text-camhaji-text hover:no-underline py-5">{c.problem}</AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-camhaji-muted leading-relaxed">{c.solution}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">TU EQUIPO ASIGNADO</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-12">Quiénes trabajan con tu empresa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Rogelio R. Moo Ruiz", role: "Gerente General", bio: "Contador con experiencia en grandes firmas de auditoría y hotelería de alto nivel en Cancún. Fundador del despacho." },
              { name: "Marlon R. Chávez Sánchez", role: "Supervisor Nómina — Especialista en Obra", bio: "Referente en nómina y contribuciones de seguridad social. Especialista en CONTPAQi y sector construcción." },
            ].map((m, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-20 h-20 bg-background rounded-sm shrink-0 flex items-center justify-center border border-border-subtle">
                  <span className="label-uppercase text-camhaji-muted text-[8px]">FOTO</span>
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-camhaji-text">{m.name}</h3>
                  <p className="label-uppercase text-primary mt-1 mb-2">{m.role}</p>
                  <p className="font-sans text-sm text-camhaji-muted leading-relaxed">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[700px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4 text-center">PREGUNTAS FRECUENTES</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-12 text-center">Sobre el Sector Construcción</h2>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border-subtle">
                <AccordionTrigger className="font-serif text-base text-camhaji-text hover:no-underline py-5">
                  <span className="flex items-center gap-4">
                    <span className="font-sans text-xs text-camhaji-muted">{String(i + 1).padStart(2, "0")}</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-camhaji-muted leading-relaxed pl-10">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-serif text-lg text-camhaji-text">¿Tu empresa es comercial?</p>
          <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">VER ESPECIALIZACIÓN COMERCIAL →</a>
        </div>
      </section>

      {/* CTA — NEGRO */}
      <section className="bg-camhaji-black py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label-uppercase text-white/40 mb-4">DA EL SIGUIENTE PASO</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Hablemos de tu negocio</h2>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-12">
              <p className="font-sans text-base text-white/60 mb-8 leading-relaxed">Agenda una consulta gratuita y descubre cómo podemos ayudarte.</p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a href="/version-b/contacto" className="btn-uppercase border border-white/55 text-white px-8 py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300">AGENDAR CONSULTA</a>
                <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="btn-uppercase text-white/60 border-b border-white/25 pb-1 hover:text-white hover:border-white/60 transition-all duration-300">o escríbenos por WhatsApp →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
