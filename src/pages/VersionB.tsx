import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BookOpen, Shield, Users, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { value: "10+", label: "AÑOS DE TRAYECTORIA" },
  { value: "6", label: "AÑOS COMO FIRMA" },
  { value: "10", label: "PROFESIONALES" },
  { value: "3", label: "SERVICIOS INTEGRALES" },
];

const services = [
  {
    num: "01",
    icon: BookOpen,
    title: "Contabilidad & Administración",
    desc: "Registro mensual, conciliación bancaria, declaraciones y monitoreo en tiempo real con nuestro ERP. Nos adaptamos a tu forma de trabajo.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Estrategia Fiscal",
    desc: "Correcto cumplimiento de obligaciones fiscales sin sorpresas. Planificación y asesoría ante el SAT para operar con tranquilidad.",
  },
  {
    num: "03",
    icon: Users,
    title: "Nómina & Facturación",
    desc: "Gestión de nómina, CFDI, IMSS e Infonavit con CONTPAQi. Especialistas en ley laboral para que no tengas contingencias.",
  },
];

const principles = [
  "Cumplir la palabra",
  "Honestidad",
  "Transparencia",
  "Responsabilidad",
  "Empatía",
];

const team = [
  {
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente General",
    bio: "Contador con experiencia en grandes firmas de auditoría y hotelería de alto nivel en Cancún.",
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Especialista en administración empresarial, cuentas por pagar/cobrar y recursos humanos.",
  },
  {
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor Nómina & Facturación",
    bio: "Referente en nómina, contribuciones de seguridad social y CONTPAQi.",
  },
];

const testimonials = [
  {
    quote: "Llevan más de 4 años llevando la contabilidad de mi constructora. Siempre puntuales, siempre claros. Con ellos no tengo sorpresas.",
    author: "Empresario, Sector Construcción · Cancún, Q.Roo",
  },
  {
    quote: "Tenía años atrasado con el SAT. Camhaji me regularizó sin que yo tuviera que preocuparme por los detalles. Excelente atención.",
    author: "Director, Empresa Comercial · Cancún, Q.Roo",
  },
  {
    quote: "Servicio integral, respuesta inmediata. Se adaptan a cómo trabajo yo, no al revés. Los recomiendo sin dudarlo.",
    author: "Empresario, Sector Servicios · Cancún, Q.Roo",
  },
];

const faqs = [
  {
    q: "¿Qué pasa si tengo años con el SAT atrasado?",
    a: "Evaluamos tu situación fiscal, identificamos las obligaciones pendientes y diseñamos un plan de regularización. Hemos resuelto casos con varios años de atraso de forma ordenada y sin sobresaltos.",
  },
  {
    q: "¿Cuánto tiempo tarda en verse el primer resultado?",
    a: "En el primer mes ya tendrás tu contabilidad al corriente y una visión clara de tu situación fiscal. El orden se ve desde el primer ciclo de trabajo conjunto.",
  },
  {
    q: "¿Trabajan con empresas pequeñas o solo con corporativos?",
    a: "Atendemos a empresas de todos los tamaños, desde negocios pequeños hasta empresas medianas. Cada cliente recibe el mismo nivel de atención y compromiso.",
  },
  {
    q: "¿Cómo me mando la documentación mensual?",
    a: "Nos adaptamos a ti: por correo electrónico, WhatsApp o el método que sea más cómodo para tu operación. Nuestro proceso es flexible por diseño.",
  },
];

export default function VersionB() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () =>
    setCurrentTestimonial((p) => (p + 1) % testimonials.length);
  const prevTestimonial = () =>
    setCurrentTestimonial((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen">
      <Navbar version="b" />

      {/* HERO SPLIT */}
      <section className="min-h-screen flex flex-col md:flex-row">
        {/* Left - Green */}
        <div className="flex-1 bg-primary flex items-center justify-center px-8 py-32 md:py-0 min-h-[60vh] md:min-h-screen">
          <div className="max-w-lg">
            <p className="label-uppercase text-white/50 mb-6">
              DESPACHO CONTABLE · CANCÚN, Q. ROO
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Despacho Contable en Cancún con Compromiso Real
            </h1>
            <p className="font-sans text-base text-white/70 mb-10 leading-relaxed">
              Firma contable con más de 10 años de trayectoria. Contabilidad,
              estrategia fiscal, nómina y administración para empresas en Cancún y
              Quintana Roo.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#cta"
                className="btn-uppercase border border-white/55 text-white px-8 py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300"
              >
                AGENDAR CONSULTA
              </a>
              <a
                href="https://wa.me/529981234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-uppercase text-white/60 border-b border-white/25 pb-1 hover:text-white hover:border-white/60 transition-all duration-300"
              >
                o escríbenos por WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* Right - Off-white with CC monogram */}
        <div className="flex-1 bg-surface relative flex items-center justify-center min-h-[40vh] md:min-h-screen overflow-hidden">
          <span
            className="font-serif font-bold text-primary/[0.12] select-none pointer-events-none"
            style={{
              fontSize: "clamp(200px, 28vw, 400px)",
              lineHeight: 0.85,
              letterSpacing: "-0.05em",
            }}
            aria-hidden="true"
          >
            CC
          </span>
          <div className="absolute bottom-10 md:bottom-16 left-8 md:left-10 right-8 md:right-10">
            <div className="w-8 h-px bg-primary mb-4" />
            <p className="font-serif italic text-base text-camhaji-text leading-relaxed">
              Contabilidad con compromiso real.
            </p>
          </div>
        </div>
      </section>

      {/* STATS - BLACK */}
      <section className="bg-camhaji-black py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-left">
                <span className="font-serif text-4xl md:text-5xl font-bold text-white">
                  {s.value}
                </span>
                <p className="label-uppercase text-white/50 mt-3">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="label-uppercase text-white/30 mt-12">
            Cancún · Quintana Roo
          </p>
        </div>
      </section>

      {/* SERVICIOS - Editorial list */}
      <section id="servicios" className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">NUESTROS SERVICIOS</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-camhaji-text mb-16">
            Todo lo que tu empresa necesita en un solo lugar
          </h2>

          <div className="space-y-0">
            {services.map((s, i) => (
              <div
                key={i}
                className="border-t border-border-subtle py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start"
              >
                <span className="font-sans text-xs text-camhaji-muted md:col-span-1">
                  {s.num}
                </span>
                <div className="md:col-span-1">
                  <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-camhaji-text md:col-span-3">
                  {s.title}
                </h3>
                <p className="font-sans text-sm text-camhaji-muted leading-relaxed md:col-span-5">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="btn-uppercase text-primary hover:text-primary-hover transition-colors md:col-span-2 md:text-right"
                >
                  CONOCER MÁS →
                </a>
              </div>
            ))}
            <div className="border-t border-border-subtle" />
          </div>
        </div>
      </section>

      {/* POR QUÉ - Manifesto */}
      <section id="por-que" className="bg-primary py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Compromiso que se demuestra, no se promete
          </h2>
          <p className="font-sans text-base text-white/60 mb-16">
            Cinco principios que guían cada interacción con nuestros clientes.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {principles.map((p, i) => (
              <div key={i} className="text-center">
                <span className="font-sans text-xs text-white/40 block mb-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-serif text-lg text-white">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section id="sectores" className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">
            SECTORES QUE ATENDEMOS
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-camhaji-text mb-4">
            Especialistas donde más lo necesitas
          </h2>
          <p className="font-sans text-base text-camhaji-muted mb-16 max-w-xl">
            Amplia experiencia en sectores con necesidades contables específicas.
          </p>

          {/* Construcción 50/50 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-8 bg-background border border-border-subtle rounded-sm overflow-hidden">
            <div className="aspect-[4/3] md:aspect-auto bg-surface flex items-center justify-center">
              <span className="label-uppercase text-camhaji-muted">
                FOTOGRAFÍA: SECTOR CONSTRUCCIÓN
              </span>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="label-uppercase text-primary mb-3">
                ESPECIALIZACIÓN PRINCIPAL
              </span>
              <h3 className="font-serif text-2xl font-bold text-camhaji-text mb-2">
                Sector Construcción
              </h3>
              <p className="font-serif text-base text-camhaji-muted mb-4">
                Contabilidad Especializada para Constructoras
              </p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-6">
                Costos de obra, estimaciones, subcontratistas, fiscal y nómina de
                obra. Más de 6 años atendiendo empresas del sector en Quintana Roo.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Contabilidad de costos de construcción",
                  "Nómina de obra y subcontratistas",
                  "Estrategia fiscal para constructoras",
                ].map((item) => (
                  <li key={item} className="font-sans text-sm text-camhaji-text flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">
                VER ESPECIALIZACIÓN →
              </a>
            </div>
          </div>

          {/* Comercial */}
          <div className="bg-background p-8 border border-border-subtle rounded-sm">
            <span className="font-sans text-xs text-camhaji-muted">02</span>
            <h3 className="font-serif text-xl font-bold text-camhaji-text mt-2 mb-3">
              Empresas Comerciales
            </h3>
            <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4 max-w-xl">
              Contabilidad y asesoría fiscal para empresas de comercialización.
              Control de inventarios, CFDI y cumplimiento SAT.
            </p>
            <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">
              VER ESPECIALIZACIÓN →
            </a>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section id="equipo" className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">NUESTRO EQUIPO</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-camhaji-text mb-16">
            El equipo que respalda tu tranquilidad
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <div key={i}>
                <div className="aspect-square bg-surface rounded-sm mb-6 flex items-center justify-center">
                  <span className="label-uppercase text-camhaji-muted">FOTO CORPORATIVA</span>
                </div>
                <div className="w-8 h-px bg-primary mb-4" />
                <h3 className="font-serif text-lg font-bold text-camhaji-text">
                  {m.name}
                </h3>
                <p className="label-uppercase text-primary mt-1 mb-3">{m.role}</p>
                <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                  {m.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS - Single rotating quote */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[800px] mx-auto px-5 md:px-8 text-center">
          <p className="label-uppercase text-camhaji-muted mb-4">
            LO QUE DICEN NUESTROS CLIENTES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-camhaji-text mb-16">
            La confianza se construye con resultados
          </h2>

          <div aria-live="polite">
            <blockquote className="font-serif text-2xl md:text-3xl italic text-camhaji-text leading-relaxed mb-8">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <p className="font-sans text-sm text-camhaji-muted">
              {testimonials[currentTestimonial].author}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevTestimonial}
              aria-label="Testimonio anterior"
              className="w-10 h-10 rounded-sm border border-border-subtle flex items-center justify-center hover:border-primary transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-camhaji-text" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  aria-label={`Testimonio ${i + 1}`}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentTestimonial ? "bg-primary" : "bg-border-subtle"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              aria-label="Siguiente testimonio"
              className="w-10 h-10 rounded-sm border border-border-subtle flex items-center justify-center hover:border-primary transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-camhaji-text" />
            </button>
          </div>

          <p className="font-sans text-xs text-camhaji-muted/50 mt-10 italic">
            * Testimonios de referencia — pendiente validación con cliente
          </p>
        </div>
      </section>

      {/* CTA - BLACK */}
      <section id="cta" className="bg-camhaji-black py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label-uppercase text-white/40 mb-4">DA EL SIGUIENTE PASO</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
                Hablemos de tu negocio
              </h2>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-12">
              <p className="font-sans text-base text-white/60 mb-8 leading-relaxed">
                Agenda una consulta gratuita y descubre cómo podemos ayudarte a
                operar con tranquilidad, orden y sin sorpresas fiscales.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href="#"
                  className="btn-uppercase bg-white text-camhaji-black px-8 py-3.5 hover:bg-white/90 transition-all duration-300"
                >
                  AGENDAR CONSULTA GRATUITA
                </a>
                <a
                  href="https://wa.me/529981234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-uppercase text-white/60 border-b border-white/25 pb-1 hover:text-white hover:border-white/60 transition-all duration-300"
                >
                  WHATSAPP DIRECTO →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Single column centered with numbers */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[700px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4 text-center">
            PREGUNTAS FRECUENTES
          </p>
          <h2 className="font-serif text-3xl font-bold text-camhaji-text text-center mb-16">
            Lo que más nos preguntan
          </h2>

          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border-subtle">
                <AccordionTrigger className="font-sans text-sm text-camhaji-text py-5 hover:no-underline gap-4">
                  <span className="flex items-center gap-4">
                    <span className="font-sans text-xs text-camhaji-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-camhaji-muted leading-relaxed pl-10">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
