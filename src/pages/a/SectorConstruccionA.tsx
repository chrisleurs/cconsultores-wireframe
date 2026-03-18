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

const differentiators = [
  "Contabilidad de costos de construcción por proyecto",
  "Manejo de estimaciones y subcontratistas",
  "Nómina de obra con IMSS especializado",
  "Conocemos el SAT en proyectos de infraestructura",
];

const sectorServices = [
  { icon: Building2, label: "CONTABILIDAD", title: "Costos y Control de Obra", desc: "Control de costos por proyecto, estimaciones de avance, retenciones a subcontratistas y cierre contable por obra." },
  { icon: Users, label: "NÓMINA", title: "Nómina & IMSS para Constructoras", desc: "Manejo de personal de obra, altas y bajas IMSS frecuentes, nómina semanal y contribuciones de seguridad social del sector." },
  { icon: Shield, label: "FISCAL", title: "Fiscal para Construcción", desc: "ISR diferido en proyectos por estimación, IVA en materiales y mano de obra, retenciones y deducción de costos de obra." },
];

const stats = [
  { value: "6+", label: "AÑOS EN SECTOR CONSTRUCCIÓN" },
  { value: "30+", label: "PROYECTOS CONTABILIZADOS" },
  { value: "100%", label: "DECLARACIONES SIN MULTAS" },
  { value: "QR", label: "QUINTANA ROO Y SURESTE" },
];

const challenges = [
  { problem: "Atraso en el cálculo de impuestos por estimaciones pendientes", solution: "Implementamos un proceso de cierre por estimación para que los impuestos se calculen en tiempo real, no al finalizar la obra." },
  { problem: "IMSS mal calculado para personal de obra con contratos variables", solution: "Manejamos altas, bajas y variaciones de salario del personal de obra con el proceso correcto para evitar multas del IMSS." },
  { problem: "Sin visibilidad de la rentabilidad real por proyecto", solution: "Con nuestro ERP asignamos costos por proyecto y puedes ver la rentabilidad de cada obra en tiempo real." },
  { problem: "Retenciones a subcontratistas mal registradas", solution: "Tenemos procedimientos específicos para retenciones de ISR e IVA a subcontratistas según la normativa vigente." },
];

const faqs = [
  { q: "¿Trabajan con constructoras pequeñas o solo con empresas grandes?", a: "Atendemos desde empresas pequeñas con 5 empleados hasta constructoras medianas con múltiples obras simultáneas. El proceso se adapta al tamaño y complejidad." },
  { q: "¿Pueden manejar múltiples obras al mismo tiempo?", a: "Sí. Asignamos centros de costo por obra para llevar contabilidad independiente de cada proyecto y darte visibilidad individual." },
  { q: "¿Cómo manejan las estimaciones y retenciones?", a: "Tenemos un proceso específico: cada estimación autorizada genera su registro contable y su cálculo fiscal. Las retenciones a subcontratistas se controlan con catálogos específicos." },
  { q: "¿Qué pasa si tengo trabajadores eventuales de obra?", a: "Manejamos altas y bajas frecuentes en el IMSS sin problema. El sector construcción tiene turnover alto y nuestro proceso está diseñado para eso." },
];

export default function SectorConstruccionA() {
  return (
    <div className="min-h-screen">
      <Navbar version="a" />

      {/* HERO */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 min-h-[50vh] flex items-end">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <p className="font-sans text-xs text-white/50 mb-4">
            <a href="/version-a" className="hover:text-white/70 transition-colors">Inicio</a> / <span className="text-white/40">Sectores</span> / <span className="text-white/70">Construcción</span>
          </p>
          <div className="flex items-center gap-3 mb-4">
            <span className="label-uppercase text-white/50">ESPECIALIZACIÓN PRINCIPAL</span>
            <span className="text-white/30">·</span>
            <span className="label-uppercase text-white/70">MÁS DE 6 AÑOS EN EL SECTOR</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Contabilidad Especializada para el Sector Construcción
          </h1>
          <p className="font-sans text-base text-white/70 max-w-2xl leading-relaxed">
            Costos de obra, estimaciones, subcontratistas y nómina de obra. Conocemos los retos contables del sector.
          </p>
        </div>
      </section>

      {/* POR QUÉ */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="label-uppercase text-camhaji-muted mb-4">LA PROBLEMÁTICA</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-6">
                La construcción tiene una contabilidad que pocos conocen
              </h2>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">
                Las constructoras tienen desafíos contables únicos: proyectos con duración variable, múltiples subcontratistas, estimaciones de avance, retenciones y una normativa fiscal específica. Un contador genérico comete errores costosos aquí.
              </p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                Llevamos más de 6 años trabajando exclusivamente con empresas de construcción en Quintana Roo. Conocemos el SAT, el IMSS y las particularidades del sector desde adentro.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-sm border border-border-subtle">
              <p className="label-uppercase text-primary mb-6">LO QUE NOS DIFERENCIA</p>
              <ul className="space-y-5">
                {differentiators.map((d, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-sans text-xs text-camhaji-muted mt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans text-[15px] text-camhaji-text leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS APLICADOS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">SERVICIOS ESPECIALIZADOS</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-16">Todo lo que necesita una constructora</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {sectorServices.map((s, i) => (
              <div key={i} className={`p-8 bg-background ${i < sectorServices.length - 1 ? "md:border-r border-border-subtle" : ""} border-b md:border-b-0 border-border-subtle`}>
                <p className="label-uppercase text-camhaji-muted mb-3">{s.label}</p>
                <s.icon className="w-6 h-6 text-primary mb-4" strokeWidth={1.5} />
                <h3 className="font-serif text-lg font-bold text-camhaji-text mb-3">{s.title}</h3>
                <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-6">{s.desc}</p>
                <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">Conocer más →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA */}
      <section className="bg-primary py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <span className="font-serif text-4xl md:text-5xl font-bold text-white">{s.value}</span>
                <p className="label-uppercase text-white/50 mt-3">{s.label}</p>
              </div>
            ))}
          </div>
          <blockquote className="font-serif text-xl italic text-white/80 leading-relaxed text-center max-w-2xl mx-auto">
            "Llevan más de 4 años llevando la contabilidad de mi constructora. Entienden los costos de obra, las estimaciones y el SAT del sector como nadie. Siempre puntuales, siempre claros."
          </blockquote>
          <p className="font-sans text-sm text-white/50 text-center mt-4">Empresario, Sector Construcción · Cancún, Q.Roo</p>
        </div>
      </section>

      {/* RETOS */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">RETOS QUE CONOCEMOS</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-16">Los problemas que más vemos en constructoras</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {challenges.map((c, i) => (
              <div key={i} className="p-6 border border-border-subtle rounded-sm">
                <p className="font-serif text-base font-bold text-camhaji-text mb-3">{c.problem}</p>
                <p className="font-sans text-sm text-camhaji-muted leading-relaxed">{c.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">TU EQUIPO ASIGNADO</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-12">Quiénes trabajan con tu empresa</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 border border-border-subtle rounded-sm">
              <div className="aspect-[3/2] bg-surface rounded-sm mb-4 flex items-center justify-center">
                <span className="label-uppercase text-camhaji-muted">FOTO</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-camhaji-text">Rogelio R. Moo Ruiz</h3>
              <p className="label-uppercase text-primary mt-1 mb-3">Gerente General</p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">Contador con experiencia en grandes firmas de auditoría y hotelería de alto nivel en Cancún. Fundador del despacho.</p>
            </div>
            <div className="bg-background p-8 border border-border-subtle rounded-sm">
              <div className="aspect-[3/2] bg-surface rounded-sm mb-4 flex items-center justify-center">
                <span className="label-uppercase text-camhaji-muted">FOTO</span>
              </div>
              <h3 className="font-serif text-lg font-bold text-camhaji-text">Marlon R. Chávez Sánchez</h3>
              <p className="label-uppercase text-primary mt-1 mb-3">Supervisor Nómina — Especialista en Obra</p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">Referente en nómina y contribuciones de seguridad social. Especialista en CONTPAQi y nóminas del sector construcción.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="label-uppercase text-camhaji-muted mb-4">PREGUNTAS FRECUENTES</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text">Sobre el Sector Construcción</h2>
            </div>
            <div className="md:col-span-3">
              <Accordion type="single" collapsible>
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border-subtle">
                    <AccordionTrigger className="font-serif text-base text-camhaji-text hover:no-underline py-5">{f.q}</AccordionTrigger>
                    <AccordionContent className="font-sans text-sm text-camhaji-muted leading-relaxed">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* OTROS SECTORES */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">TAMBIÉN ATENDEMOS</p>
          <div className="bg-background p-8 border border-border-subtle rounded-sm">
            <h3 className="font-serif text-xl font-bold text-camhaji-text mb-3">Empresas Comerciales</h3>
            <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">Contabilidad y asesoría fiscal para empresas de comercialización y distribución.</p>
            <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">VER ESPECIALIZACIÓN →</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary py-20 md:py-24 overflow-hidden">
        <span className="absolute font-serif font-bold text-white/[0.03] select-none pointer-events-none right-8 top-1/2 -translate-y-1/2" style={{ fontSize: "clamp(150px, 20vw, 300px)", lineHeight: 0.85 }} aria-hidden="true">CC</span>
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <p className="label-uppercase text-white/50 mb-4">DA EL SIGUIENTE PASO</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Hablemos de tu negocio</h2>
          <p className="font-sans text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">Agenda una consulta gratuita y descubre cómo podemos ayudarte.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/version-a/contacto" className="btn-uppercase border border-white/55 text-white px-8 py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300">AGENDAR CONSULTA</a>
            <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="btn-uppercase text-white/60 border-b border-white/25 pb-1 hover:text-white hover:border-white/60 transition-all duration-300">o escríbenos por WhatsApp →</a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
