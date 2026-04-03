import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientLogos } from "@/components/ClientLogos";
import { BarChart3, Shield, Users, FileText, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import heroBg from "@/assets/hero-cancun-skyline.jpg";
import statementBg from "@/assets/statement-office.jpg";
import servicesBg from "@/assets/services-desk.jpg";
import sectorConstruccion from "@/assets/sector-construccion.jpg";
import sectorComercial from "@/assets/sector-comercial.jpg";
import testimonialBg from "@/assets/testimonial-cancun-night.jpg";
import ctaBg from "@/assets/cta-architecture.jpg";

const services = [
  {
    num: "01",
    icon: BarChart3,
    title: "Contabilidad y Administración",
    desc: "Registro mensual, conciliación bancaria, declaraciones y control administrativo integral. Para que tus números siempre reflejen lo que realmente está pasando en tu empresa.",
    href: "/version-c/servicios/contabilidad",
  },
  {
    num: "02",
    icon: Shield,
    title: "Estrategia Fiscal",
    desc: "Cumplimiento correcto de tus obligaciones ante el SAT. No prometemos magia fiscal. Prometemos que no habrá sorpresas.",
    href: "/version-c/servicios/fiscal",
  },
  {
    num: "03",
    icon: Users,
    title: "Nómina Empresarial",
    desc: "Cálculo de nómina, altas y bajas ante el IMSS y CFDI de nómina con CONTPAQi. Sin errores, sin multas, sin retrasos.",
    href: "/version-c/servicios/nomina",
  },
  {
    num: "04",
    icon: FileText,
    title: "Facturación CFDI",
    desc: "Emisión, timbrado y administración de facturas electrónicas para tu empresa. Que ningún comprobante salga mal ni te cueste una deducción.",
    href: "/version-c/servicios/facturacion",
  },
];

const stats = [
  { value: "10+", label: "AÑOS DE TRAYECTORIA" },
  { value: "6", label: "AÑOS COMO FIRMA" },
  { value: "10", label: "PROFESIONALES" },
  { value: "4", label: "ESPECIALIDADES" },
];

const differentiators = [
  {
    name: "Atención Inmediata",
    desc: "Cuando tienes una duda urgente sobre el SAT o necesitas una factura hoy, no puedes esperar tres días. Respondemos el mismo día — por correo o WhatsApp, como prefieras.",
  },
  {
    name: "Todo en un Solo Lugar",
    desc: "Contabilidad, fiscal, nómina, facturación y administración. Un solo equipo que conoce tu negocio de arriba a abajo.",
  },
  {
    name: "Para el Negocio que Quiere Hacer las Cosas Bien",
    desc: "Atendemos desde empresas pequeñas hasta medianas. No prometemos milagros fiscales — prometemos que tu empresa estará en regla y que sabrás exactamente qué pasa con tus números.",
  },
];

const sectors = [
  {
    badge: "ESPECIALIZACIÓN",
    name: "Construcción",
    desc: "Las constructoras no pueden trabajar con contabilidad genérica. Costos de obra, estimaciones, subcontratistas, retenciones. Llevamos años en el sector y conocemos las particularidades del mercado en Cancún y la Riviera Maya.",
    href: "/version-c/sectores/construccion",
    img: sectorConstruccion,
  },
  {
    badge: "SECTOR",
    name: "Empresas Comerciales",
    desc: "Distribuidoras, comercializadoras y empresas de venta: control de inventarios, facturación a clientes, cuentas por cobrar y por pagar, todo bajo un proceso mensual ordenado.",
    href: "/version-c/sectores/comercial",
    img: sectorComercial,
  },
];

const sectorCards = [
  {
    name: "RESICO y Prestadores de Servicios",
    desc: "Freelancers, consultores, profesionistas independientes y agentes inmobiliarios. Si tributas en el Régimen Simplificado de Confianza o quieres hacerlo, aquí encuentras a tu contador en Cancún.",
    href: "/version-c/sectores/inmobiliario",
  },
  {
    name: "Agentes Inmobiliarios",
    desc: "Las comisiones inmobiliarias tienen reglas fiscales específicas. Desde el CFDI correcto hasta el régimen que más te conviene — sin sorpresas con el SAT.",
    href: "/version-c/sectores/inmobiliario",
  },
];

const team = [
  {
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente General",
    bio: "Contador con trayectoria en grandes firmas del sector auditoría y en empresas del ramo hotelero. Es la mano derecha de la dirección y el responsable de que la operación del despacho funcione con precisión.",
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Contadora con amplia experiencia en la administración de empresas medianas y grandes. Responsable de cuentas por pagar, cuentas por cobrar y recursos humanos.",
  },
  {
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor Nómina y Facturación",
    bio: "Especialista en nómina, ley laboral y contribuciones de seguridad social. Domina CONTPAQi con una profundidad que pocos logran.",
  },
];

const testimonials = [
  {
    quote: "Llevábamos años sin claridad en nuestros números. En pocos meses ya sabíamos exactamente cómo estaba la empresa — y dejamos de tenerle miedo al SAT.",
    author: "Director General, empresa comercial",
    location: "Cancún, QR",
  },
  {
    quote: "Cuando tuve dudas a mitad de mes, respondieron ese mismo día. Eso no lo encontraba en el despacho anterior.",
    author: "Propietario, empresa constructora",
    location: "Cancún, QR",
  },
];

const faqs = [
  {
    q: "¿Cuánto cobra un contador en Cancún?",
    a: "El costo varía según los servicios requeridos. La contabilidad básica para una empresa pequeña puede empezar desde $2,000–$4,000 MXN/mes. Para empresas medianas con nómina y facturación incluidas, el rango es de $5,000–$15,000 MXN/mes. En Camhaji hacemos una cotización personalizada sin costo — cuéntanos tu operación y te damos un número real.",
  },
  {
    q: "¿Cómo elegir un buen despacho contable en Cancún?",
    a: "Busca un despacho con equipo certificado, experiencia en tu sector, uso de software actualizado y comunicación clara y accesible. Que te expliquen lo que hacen — no solo que te manden el comprobante de declaración.",
  },
  {
    q: "¿Qué incluye el servicio de contabilidad mensual?",
    a: "Solicitud y revisión de documentos, registro contable, conciliación de estado de cuenta con facturas, cálculo de impuestos, llenado de declaraciones y envío al cliente para autorizar el pago. Nos adaptamos al canal que prefiere el cliente — correo o WhatsApp.",
  },
  {
    q: "¿Atienden empresas fuera de Cancún?",
    a: "Sí. Trabajamos con empresas en todo Quintana Roo. Nos adaptamos al canal de comunicación del cliente, por lo que la distancia no es un obstáculo.",
  },
  {
    q: "¿Tienen experiencia con empresas que están atrasadas en el SAT?",
    a: "Sí. Es uno de los casos más frecuentes con los que llegan nuevos clientes. El primer paso es un diagnóstico de la situación fiscal, sin juicios, para entender exactamente dónde está el problema y qué se necesita para regularizarse.",
  },
];

export default function VersionC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-screen relative flex items-end overflow-hidden">
        <img src={heroBg} alt="Cancún skyline zona hotelera" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 md:pb-24 max-w-[1200px] w-full">
          <p className="label-uppercase text-white/40 mb-8">DESPACHO CONTABLE · CANCÚN, MÉXICO</p>
          <div className="flex items-stretch gap-5 md:gap-6 mb-8">
            <div className="w-1 bg-camhaji-accent flex-shrink-0 rounded-full" />
            <h1 className="font-sans font-bold text-white leading-[0.95]" style={{ fontSize: "clamp(44px, 7vw, 96px)", letterSpacing: "-0.04em" }}>
              Despacho Contable<br />en Cancún con<br />Compromiso Real.
            </h1>
          </div>
          <p className="font-serif italic text-white/55 mb-10 max-w-[520px]" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
            Llevamos la contabilidad, el fiscal y la administración de tu empresa para que tú te dediques a lo que sabes hacer. Sin sorpresas con el SAT.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="/version-c/contacto" className="btn-uppercase border border-white/50 text-white px-8 py-3.5 hover:bg-white/[0.08] hover:border-white transition-all duration-300">
              ESCRÍBENOS POR WHATSAPP
            </a>
            <a href="#servicios" className="btn-uppercase text-white/40 hover:text-white/80 transition-colors duration-300">
              CONOCE NUESTROS SERVICIOS
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 right-10 md:right-16">
          <div className="w-px h-10 bg-white/20 animate-scroll-pulse" />
        </div>
      </section>

      <ClientLogos variant="c" />

      {/* DIFERENCIADORES */}
      <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-5 md:px-10 py-20 overflow-hidden">
        <img src={statementBg} alt="Oficina profesional" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-white/[0.92]" />
        <div className="relative z-10 max-w-[1000px]">
          <p className="label-uppercase text-camhaji-muted mb-12">LO QUE NOS DIFERENCIA</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-16" style={{ fontSize: "clamp(28px, 4.5vw, 48px)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Lo que nos diferencia de otros despachos contables en Cancún
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
            {differentiators.map((d) => (
              <div key={d.name}>
                <div className="w-6 h-px bg-primary mb-5" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{d.name}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="min-h-screen relative flex flex-col overflow-hidden">
        <img src={servicesBg} alt="Escritorio profesional" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-camhaji-base/[0.92]" />
        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 pb-0">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
            <p className="label-uppercase text-white/35">NUESTROS SERVICIOS CONTABLES EN CANCÚN</p>
            <p className="font-sans text-base text-white/50 max-w-[360px] md:text-right">Todo lo que tu empresa necesita en un solo lugar</p>
          </div>
        </div>
        <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto w-full">
          {services.map((s, i) => (
            <div key={i} className={`group flex flex-col justify-end p-8 md:p-10 hover:bg-white/[0.04] transition-colors duration-300 ${i < services.length - 1 ? "lg:border-r border-white/[0.07]" : ""} border-b lg:border-b-0 border-white/[0.07]`}>
              <span className="font-sans text-xs text-white/[0.18] uppercase tracking-[0.2em] mb-12">{s.num}</span>
              <s.icon className="w-8 h-8 text-white/50 mb-7" strokeWidth={1} />
              <h3 className="font-sans font-bold text-white mb-4 group-hover:text-camhaji-accent transition-colors" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {s.title}
              </h3>
              <p className="font-sans text-[14px] font-light text-white/55 leading-relaxed max-w-[280px] mb-8">{s.desc}</p>
              <a href={s.href} className="label-uppercase text-white/35 hover:text-white/80 transition-colors border-b border-white/15 pb-0.5 self-start">
                VER SERVICIO COMPLETO →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CIFRAS */}
      <section className="min-h-screen bg-surface grid grid-cols-1 md:grid-cols-2">
        {stats.map((s, i) => (
          <div key={i} className={`flex flex-col items-center justify-center text-center min-h-[25dvh] md:min-h-[50dvh] ${i % 2 === 0 ? "md:border-r border-border-subtle" : ""} ${i < 2 ? "md:border-b border-border-subtle" : ""} border-b md:border-b-0 border-border-subtle last:border-b-0`}>
            <span className="font-sans font-bold text-primary" style={{ fontSize: "clamp(80px, 14vw, 160px)", letterSpacing: "-0.04em", lineHeight: 1 }}>{s.value}</span>
            <p className="label-uppercase text-camhaji-muted mt-4">{s.label}</p>
          </div>
        ))}
      </section>

      {/* HISTORIA */}
      <section className="bg-primary flex flex-col justify-center px-5 md:px-10 py-20">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <p className="label-uppercase text-white/40">NUESTRA HISTORIA</p>
            <h2 className="font-sans font-bold text-white max-w-[500px] md:text-right" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.02em" }}>
              Una firma con historia y equipo profesional
            </h2>
          </div>
          <div className="max-w-[800px]">
            <p className="font-sans text-white/60 leading-relaxed mb-8" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              Camhaji Consultores nació hace 6 años de una idea simple pero poderosa: un despacho donde el área fiscal y el área contable trabajan juntos, bajo el mismo techo, para el mismo cliente. Antes de la firma, nuestro equipo acumuló más de 10 años de trayectoria en grandes firmas, auditoría y administración de empresas en Cancún y la Riviera Maya.
            </p>
            <p className="font-sans text-white/60 leading-relaxed mb-10" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              Hoy somos un equipo de 10 profesionales comprometidos con algo concreto: cumplir lo que decimos que vamos a hacer. No más. No menos.
            </p>
            <div className="flex gap-6 flex-wrap">
              <a href="/version-c/nosotros" className="label-uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-0.5">
                CONOCE NUESTRA HISTORIA →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES */}
      <section className="min-h-screen flex flex-col">
        <div className="bg-camhaji-base max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <p className="label-uppercase text-white/35">EXPERIENCIA EN LOS SECTORES QUE MÁS IMPORTAN</p>
            <p className="font-sans text-[15px] font-light text-white/50">Cada sector tiene sus propias reglas</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
          {sectors.map((s) => (
            <div key={s.name} className="relative min-h-[50dvh] md:min-h-[70dvh] flex items-end group cursor-pointer overflow-hidden">
              <img src={s.img} alt={s.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={960} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/85 transition-colors duration-500" />
              <div className="relative z-10 p-8 md:p-12">
                <span className="inline-block border border-white/30 rounded-sm px-2.5 py-1 label-uppercase text-[10px] text-white/70 mb-4">{s.badge}</span>
                <h3 className="font-sans font-bold text-white mb-3" style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.02em" }}>{s.name}</h3>
                <p className="font-sans text-sm font-light text-white/65 mb-6 max-w-[360px]">{s.desc}</p>
                <a href={s.href} className="label-uppercase text-white/50 hover:text-white transition-colors group-hover:text-white/80">VER ESPECIALIZACIÓN →</a>
              </div>
            </div>
          ))}
        </div>
        {/* Additional sector cards */}
        <div className="bg-camhaji-base grid grid-cols-1 md:grid-cols-2 border-t border-white/[0.06]">
          {sectorCards.map((s) => (
            <a key={s.name} href={s.href} className="group p-8 md:p-12 border-b md:border-b-0 md:first:border-r border-white/[0.06] hover:bg-white/[0.03] transition-colors">
              <h3 className="font-sans font-bold text-white text-xl mb-3 group-hover:text-camhaji-accent transition-colors">{s.name}</h3>
              <p className="font-sans text-sm font-light text-white/50 leading-relaxed mb-4 max-w-[400px]">{s.desc}</p>
              <span className="label-uppercase text-white/30 group-hover:text-white/60 transition-colors">VER DETALLE →</span>
            </a>
          ))}
        </div>
      </section>

      {/* EQUIPO */}
      <section className="min-h-screen bg-white flex flex-col">
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <p className="label-uppercase text-camhaji-muted">NUESTRO EQUIPO</p>
            <h2 className="font-sans font-bold text-camhaji-text max-w-[380px] md:text-right" style={{ fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "-0.02em" }}>
              El equipo que respalda tu tranquilidad financiera
            </h2>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          {team.map((m, i) => (
            <div key={i} className={`flex flex-col ${i < team.length - 1 ? "md:border-r border-border-subtle" : ""}`}>
              <div className="flex-1 bg-gradient-to-br from-camhaji-base to-primary/80 min-h-[320px] flex items-center justify-center relative overflow-hidden">
                <span className="font-sans font-bold text-white/[0.06] absolute" style={{ fontSize: "clamp(100px, 20vw, 200px)" }}>
                  {m.name.split(" ").map(n => n[0]).join("")}
                </span>
                <span className="label-uppercase text-white/30 relative z-10">FOTO CORPORATIVA</span>
              </div>
              <div className="p-6 md:p-10 pb-12">
                <div className="w-6 h-px bg-primary mb-4" />
                <h3 className="font-sans font-bold text-lg text-camhaji-text mb-1">{m.name}</h3>
                <p className="label-uppercase text-primary mb-3">{m.role}</p>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="min-h-screen relative flex flex-col items-center justify-center text-center px-5 md:px-10 py-20 overflow-hidden">
        <img src={testimonialBg} alt="Cancún de noche" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 max-w-[820px]">
          <p className="label-uppercase text-white/25 mb-16">LO QUE DICEN NUESTROS CLIENTES EN CANCÚN</p>
          <span className="font-serif text-[120px] text-white/[0.08] leading-none block -mb-12" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/[0.88] mb-12" style={{ fontSize: "clamp(20px, 3.5vw, 40px)", lineHeight: 1.5, letterSpacing: "-0.01em" }}>
            "{testimonials[0].quote}"
          </blockquote>
          <div className="w-8 h-px bg-white/20 mb-6" />
          <p className="font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-white/50 mb-1">{testimonials[0].author}</p>
          <p className="font-sans text-[13px] font-light text-white/30">{testimonials[0].location}</p>
          <p className="font-sans text-xs text-white/20 mt-8 italic">* Testimonio de referencia — pendiente validación</p>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] relative flex flex-col items-center justify-center text-center px-5 md:px-10 py-20 overflow-hidden">
        <img src={ctaBg} alt="Arquitectura moderna Cancún" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/85" />
        <div className="relative z-10">
          <p className="label-uppercase text-white/40 mb-6">HABLEMOS DE TU NEGOCIO</p>
          <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
            Hablemos de tu negocio.
          </h2>
          <p className="font-sans text-white/55 max-w-[520px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}>
            Si llevas tiempo postergando el orden en tu contabilidad, o quieres un despacho que de verdad responda cuando lo necesitas, es buen momento para hablar.
          </p>
          <a href="/version-c/contacto" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5 inline-block">
            ESCRÍBENOS POR WHATSAPP
          </a>
          <div className="flex items-center gap-2 justify-center mt-5">
            <Phone className="w-3.5 h-3.5 text-white/40" />
            <span className="font-sans text-sm text-white/50">(998) 123-4567</span>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
            <p className="label-uppercase text-camhaji-muted">PREGUNTAS FRECUENTES</p>
            <h2 className="font-sans font-bold text-camhaji-text" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
              Sobre nuestro despacho contable en Cancún
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border-subtle">
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex items-baseline gap-4 text-left">
                    <span className="font-sans text-xs tracking-[0.1em] text-border-subtle flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans font-semibold text-[17px] text-camhaji-text leading-snug">{f.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}
