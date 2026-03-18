import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { BookOpen, Shield, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const stats = [
  { value: "10+", label: "AÑOS DE TRAYECTORIA" },
  { value: "6", label: "AÑOS COMO FIRMA" },
  { value: "10", label: "PROFESIONALES ESPECIALIZADOS" },
  { value: "3", label: "SERVICIOS INTEGRALES" },
];

const services = [
  {
    num: "01",
    icon: BookOpen,
    title: "Contabilidad & Administración",
    desc: "Registro mensual, conciliación bancaria, declaraciones de impuestos y monitoreo en tiempo real con nuestro ERP interno. Nos adaptamos a tu forma de trabajo.",
  },
  {
    num: "02",
    icon: Shield,
    title: "Estrategia Fiscal",
    desc: "Correcto cumplimiento de obligaciones fiscales sin sorpresas. Planificación, declaraciones y asesoría ante el SAT para que tu empresa opere con tranquilidad.",
  },
  {
    num: "03",
    icon: Users,
    title: "Nómina & Facturación",
    desc: "Gestión de nómina, CFDI, IMSS e Infonavit con CONTPAQi. Especialistas en ley laboral para que no tengas contingencias con tus colaboradores.",
  },
];

const principles = [
  "Cumplir la palabra",
  "Honestidad en todo momento",
  "Transparencia en el proceso",
  "Responsabilidad con tus obligaciones",
  "Empatía con tu negocio",
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
    bio: "Especialista en administración empresarial, CxP, CxC y recursos humanos.",
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

export default function VersionA() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen bg-primary flex items-center justify-center overflow-hidden">
        {/* Watermark CC */}
        <span
          className="absolute font-serif font-bold text-white/[0.03] select-none pointer-events-none"
          style={{ fontSize: "clamp(300px, 40vw, 600px)", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          CC
        </span>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <p className="label-uppercase text-white/50 mb-6">
            DESPACHO CONTABLE · CANCÚN, Q. ROO
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Despacho Contable en Cancún{" "}
            <span className="italic">con Compromiso Real</span>
          </h1>
          <p className="font-sans text-base md:text-lg text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Firma contable con más de 10 años de trayectoria. Contabilidad,
            estrategia fiscal, nómina y administración para empresas en Cancún y
            Quintana Roo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#cta"
              className="btn-uppercase border border-white/55 text-white px-8 py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              AGENDAR CONSULTA
            </a>
            <a
              href="#servicios"
              className="btn-uppercase text-white/60 border-b border-white/25 pb-1 hover:text-white hover:border-white/60 transition-all duration-300"
            >
              VER NUESTROS SERVICIOS
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
          <div className="w-px h-10 bg-white/20 animate-scroll-pulse" />
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/35">
            SCROLL
          </span>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div
                key={i}
                className={`text-center ${
                  i < stats.length - 1 ? "md:border-r md:border-border-subtle" : ""
                }`}
              >
                <span className="font-serif text-4xl md:text-5xl font-bold text-primary">
                  {s.value}
                </span>
                <p className="label-uppercase text-camhaji-muted mt-3">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="label-uppercase text-camhaji-muted text-center mt-12">
            CANCÚN · QUINTANA ROO · MÉXICO
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">NUESTROS SERVICIOS</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-camhaji-text mb-16">
            Todo lo que tu empresa necesita en un solo lugar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {services.map((s, i) => (
              <div
                key={i}
                className={`p-8 ${
                  i < services.length - 1 ? "md:border-r border-border-subtle" : ""
                } border-b md:border-b-0 border-border-subtle`}
              >
                <span className="font-sans text-xs text-camhaji-muted">{s.num}</span>
                <div className="mt-4 mb-4">
                  <s.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-bold text-camhaji-text mb-3">
                  {s.title}
                </h3>
                <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-6">
                  {s.desc}
                </p>
                <a
                  href="#"
                  className="btn-uppercase text-primary hover:text-primary-hover transition-colors"
                >
                  CONOCER MÁS →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ */}
      <section id="por-que" className="bg-primary py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="label-uppercase text-white/50 mb-4">POR QUÉ CAMHAJI</p>
              <p className="font-sans text-base text-white/70 leading-relaxed mb-10">
                Somos una firma joven con más de 10 años de trayectoria individual
                en el ámbito contable y fiscal. Nuestro trabajo se guía por cinco
                principios que definen cada interacción con nuestros clientes.
              </p>
              <ul className="space-y-6">
                {principles.map((p, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="font-sans text-xs text-white/40 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-lg text-white">{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative bg-primary-dark rounded-sm p-10 flex flex-col justify-end">
              <span
                className="absolute top-6 right-8 font-serif text-7xl font-bold text-white/[0.05] select-none pointer-events-none"
                aria-hidden="true"
              >
                10+
              </span>
              <p className="label-uppercase text-white/40 mb-2">AÑOS DE TRAYECTORIA</p>
              <blockquote className="font-serif text-lg italic text-white/80 leading-relaxed">
                "Firma de profesionales confiables y comprometidos, reconocidos por
                inspirar confianza a través de su trabajo."
              </blockquote>
            </div>
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
            Amplia experiencia en sectores con necesidades contables específicas y
            regulación compleja.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Construcción - 60% */}
            <div className="md:col-span-3 bg-background p-8 border border-border-subtle rounded-sm">
              <span className="label-uppercase text-primary mb-3 block">
                ESPECIALIZACIÓN PRINCIPAL
              </span>
              <h3 className="font-serif text-2xl font-bold text-camhaji-text mb-4">
                Sector Construcción
              </h3>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-6">
                Contabilidad especializada para constructoras: costos de obra,
                estimaciones, subcontratistas, fiscal y nómina de obra. Más de 6
                años atendiendo empresas del sector en Quintana Roo.
              </p>
              <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">
                VER ESPECIALIZACIÓN →
              </a>
            </div>

            {/* Comercial - 40% */}
            <div className="md:col-span-2 bg-background p-8 border border-border-subtle rounded-sm">
              <h3 className="font-serif text-2xl font-bold text-camhaji-text mb-4">
                Empresas Comerciales
              </h3>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-6">
                Contabilidad y asesoría fiscal para empresas de comercialización y
                distribución. Control de inventarios, facturación CFDI y
                cumplimiento SAT sin complicaciones.
              </p>
              <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">
                VER ESPECIALIZACIÓN →
              </a>
            </div>
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

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Main member */}
            <div className="md:col-span-3">
              <div className="aspect-[4/3] bg-surface rounded-sm mb-6 flex items-center justify-center">
                <span className="label-uppercase text-camhaji-muted">FOTO CORPORATIVA</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-camhaji-text">
                {team[0].name}
              </h3>
              <p className="label-uppercase text-primary mt-1 mb-3">{team[0].role}</p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                {team[0].bio}
              </p>
            </div>

            {/* Stacked members */}
            <div className="md:col-span-2 space-y-8">
              {team.slice(1).map((m, i) => (
                <div key={i}>
                  <div className="aspect-[3/2] bg-surface rounded-sm mb-4 flex items-center justify-center">
                    <span className="label-uppercase text-camhaji-muted text-[10px]">FOTO</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-camhaji-text">
                    {m.name}
                  </h3>
                  <p className="label-uppercase text-primary mt-1 mb-2">{m.role}</p>
                  <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                    {m.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">
            LO QUE DICEN NUESTROS CLIENTES
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-camhaji-text mb-16">
            La confianza se construye con resultados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Main quote */}
            <div className="md:col-span-3 bg-background p-10 border border-border-subtle rounded-sm">
              <blockquote className="font-serif text-xl md:text-2xl italic text-camhaji-text leading-relaxed mb-8">
                "{testimonials[0].quote}"
              </blockquote>
              <p className="font-sans text-sm text-camhaji-muted">
                {testimonials[0].author}
              </p>
            </div>

            {/* Small quotes */}
            <div className="md:col-span-2 space-y-6">
              {testimonials.slice(1).map((t, i) => (
                <div
                  key={i}
                  className="bg-background p-6 border border-border-subtle rounded-sm"
                >
                  <blockquote className="font-serif text-sm italic text-camhaji-text leading-relaxed mb-4">
                    "{t.quote}"
                  </blockquote>
                  <p className="font-sans text-xs text-camhaji-muted">{t.author}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="font-sans text-xs text-camhaji-muted/50 mt-8 italic">
            * Testimonios de referencia — pendiente validación con cliente
          </p>
        </div>
      </section>

      {/* CTA BANNER */}
      <section id="cta" className="relative bg-primary py-20 md:py-24 overflow-hidden">
        <span
          className="absolute font-serif font-bold text-white/[0.03] select-none pointer-events-none right-8 top-1/2 -translate-y-1/2"
          style={{ fontSize: "clamp(150px, 20vw, 300px)", lineHeight: 0.85 }}
          aria-hidden="true"
        >
          CC
        </span>
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <p className="label-uppercase text-white/50 mb-4">DA EL SIGUIENTE PASO</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Hablemos de tu negocio
          </h2>
          <p className="font-sans text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Agenda una consulta gratuita y descubre cómo podemos ayudarte a operar
            con tranquilidad, orden y sin sorpresas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="btn-uppercase border border-white/55 text-white px-8 py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              AGENDAR CONSULTA GRATUITA
            </a>
            <a
              href="https://wa.me/529981234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-uppercase text-white/60 border-b border-white/25 pb-1 hover:text-white hover:border-white/60 transition-all duration-300"
            >
              WHATSAPP DIRECTO
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="label-uppercase text-camhaji-muted mb-4">
                PREGUNTAS FRECUENTES
              </p>
              <h2 className="font-serif text-3xl font-bold text-camhaji-text">
                Lo que más nos preguntan
              </h2>
            </div>

            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="space-y-0">
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border-subtle">
                    <AccordionTrigger className="font-sans text-sm text-camhaji-text py-5 hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-sm text-camhaji-muted leading-relaxed">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
