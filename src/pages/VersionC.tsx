import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientLogos } from "@/components/ClientLogos";
import { BarChart3, Shield, Users, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    num: "01",
    icon: BarChart3,
    title: "Contabilidad & Administración",
    desc: "Registro mensual, conciliación bancaria y monitoreo financiero en tiempo real. Sin sorpresas.",
    href: "/version-c/servicios/contabilidad",
  },
  {
    num: "02",
    icon: Shield,
    title: "Estrategia Fiscal",
    desc: "Cumplimiento SAT preciso, planificación de cargas fiscales y declaraciones puntuales cada mes.",
    href: "#",
  },
  {
    num: "03",
    icon: Users,
    title: "Nómina & Facturación",
    desc: "CFDI timbrado, IMSS, Infonavit y cálculos de nómina con CONTPAQi. Cada quincena, sin fallas.",
    href: "#",
  },
];

const stats = [
  { value: "10+", label: "AÑOS DE TRAYECTORIA" },
  { value: "6", label: "AÑOS COMO FIRMA" },
  { value: "10", label: "PROFESIONALES" },
  { value: "3", label: "ESPECIALIDADES" },
];

const principles = [
  { name: "Cumplir la Palabra", desc: "Si lo decimos, lo hacemos. Sin pretextos." },
  { name: "Honestidad", desc: "Decimos lo que pensamos aunque no sea lo esperado." },
  { name: "Transparencia", desc: "No hay letra chica. Tu contabilidad es tuya." },
  { name: "Responsabilidad", desc: "Nos hacemos cargo. Siempre, sin condiciones." },
  { name: "Empatía", desc: "Nos adaptamos a cada cliente y su realidad." },
];

const team = [
  {
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente General",
    bio: "Contador con trayectoria en grandes firmas de auditoría y contabilidad hotelera en Cancún. Fundador del despacho.",
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Especialista en administración empresarial, CxP, CxC y recursos humanos de clientes.",
  },
  {
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor Nómina",
    bio: "Especialista en nómina, IMSS e Infonavit. Referente del despacho en CONTPAQi y sector construcción.",
  },
];

const faqs = [
  { q: "¿Cuánto cuesta contratar a Camhaji Consultores?", a: "El costo depende del volumen de operaciones y complejidad de tu empresa. Ofrecemos una evaluación gratuita para darte una propuesta específica a tu situación. No manejamos tarifas genéricas." },
  { q: "¿Pueden regularizar mi contabilidad si tengo meses atrasados?", a: "Sí, y es más común de lo que crees. Hacemos un diagnóstico, priorizamos lo urgente (declaraciones vencidas, multas pendientes) y ponemos todo al corriente de forma ordenada." },
  { q: "¿Puedo cambiar de despacho si ya tengo un contador?", a: "Absolutamente. Nos encargamos de la transición: recuperamos tu historial contable, regularizamos pendientes y tomamos el control sin interrumpir tu operación." },
  { q: "¿Trabajan solo en Cancún?", a: "Principalmente atendemos empresas en Cancún, Playa del Carmen, Tulum y todo el estado de Quintana Roo. Trabajamos de forma remota cuando es posible." },
  { q: "¿Con qué software trabajan?", a: "Usamos CONTPAQi para nómina y facturación, y nuestra plataforma ERP interna para monitoreo financiero en tiempo real. Todos tus datos son tuyos en todo momento." },
  { q: "¿Tienen experiencia con empresas del sector construcción?", a: "Es nuestra especialización principal. Llevamos más de 6 años trabajando con constructoras en Quintana Roo — costos de obra, nómina de construcción y fiscal especializado." },
];

export default function VersionC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO — full-screen dark */}
      <section className="min-h-screen bg-camhaji-base flex items-center justify-center text-center relative overflow-hidden">
        <div className="relative z-10 px-5 md:px-10">
          <p className="label-uppercase text-white/35 mb-12">
            DESPACHO CONTABLE · CANCÚN, MÉXICO
          </p>
          <h1
            className="font-sans font-bold text-white leading-[0.95] mb-8"
            style={{ fontSize: "clamp(52px, 8vw, 100px)", letterSpacing: "-0.04em" }}
          >
            Contabilidad<br />con Compromiso<br />Real.
          </h1>
          <p className="font-serif italic text-white/50 mb-12" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
            Más de 10 años de trayectoria. Una sola promesa: cumplir.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="/version-c/contacto"
              className="btn-uppercase border border-white/50 text-white px-8 py-3.5 hover:bg-white/[0.08] hover:border-white transition-all duration-300"
            >
              AGENDAR CONSULTA GRATUITA
            </a>
            <a
              href="#servicios"
              className="btn-uppercase text-white/40 hover:text-white/80 transition-colors duration-300"
            >
              NUESTROS SERVICIOS
            </a>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-10 bg-white/20 animate-scroll-pulse" />
        </div>
      </section>

      {/* STATEMENT — white full-screen */}
      <section className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-camhaji-muted mb-12">QUIÉNES SOMOS</p>
        <blockquote
          className="font-serif italic text-camhaji-text max-w-[840px] mb-16"
          style={{ fontSize: "clamp(28px, 4.5vw, 56px)", lineHeight: 1.25, letterSpacing: "-0.01em" }}
        >
          "Somos una firma joven con más de 10 años de trayectoria. Nuestro trabajo se guía por cinco principios."
        </blockquote>
        <div className="flex items-center gap-4 md:gap-8 flex-wrap justify-center border-t border-border-subtle pt-8">
          {["CUMPLIR LA PALABRA", "HONESTIDAD", "TRANSPARENCIA", "RESPONSABILIDAD", "EMPATÍA"].map((p, i) => (
            <span key={p} className="flex items-center gap-4 md:gap-8">
              <span className="label-uppercase text-camhaji-muted">{p}</span>
              {i < 4 && <span className="text-border-subtle">·</span>}
            </span>
          ))}
        </div>
      </section>

      {/* SERVICIOS — dark full-screen 3-col */}
      <section id="servicios" className="min-h-screen bg-camhaji-base flex flex-col">
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 pb-0">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-4">
            <p className="label-uppercase text-white/35">NUESTROS SERVICIOS</p>
            <p className="font-sans text-base text-white/50 max-w-[360px] md:text-right">
              Todo lo que tu empresa necesita en un solo lugar
            </p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 max-w-[1200px] mx-auto w-full">
          {services.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col justify-end p-8 md:p-10 hover:bg-white/[0.02] transition-colors duration-300 ${
                i < services.length - 1 ? "md:border-r border-white/[0.07]" : ""
              } border-b md:border-b-0 border-white/[0.07]`}
            >
              <span className="font-sans text-xs text-white/[0.18] uppercase tracking-[0.2em] mb-12">{s.num}</span>
              <s.icon className="w-8 h-8 text-white/50 mb-7" strokeWidth={1} />
              <h3
                className="font-sans font-bold text-white mb-4 hover:text-camhaji-accent transition-colors"
                style={{ fontSize: "clamp(20px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
              >
                {s.title}
              </h3>
              <p className="font-sans text-[15px] font-light text-white/55 leading-relaxed max-w-[280px] mb-8">
                {s.desc}
              </p>
              <a
                href={s.href}
                className="label-uppercase text-white/35 hover:text-white/80 transition-colors border-b border-white/15 pb-0.5 self-start"
              >
                CONOCER MÁS →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CIFRAS — surface 2×2 */}
      <section className="min-h-screen bg-surface grid grid-cols-1 md:grid-cols-2">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center text-center min-h-[25dvh] md:min-h-[50dvh] ${
              i % 2 === 0 ? "md:border-r border-border-subtle" : ""
            } ${i < 2 ? "md:border-b border-border-subtle" : ""} border-b md:border-b-0 border-border-subtle last:border-b-0`}
          >
            <span
              className="font-sans font-bold text-primary"
              style={{ fontSize: "clamp(80px, 14vw, 160px)", letterSpacing: "-0.04em", lineHeight: 1 }}
            >
              {s.value}
            </span>
            <p className="label-uppercase text-camhaji-muted mt-4">{s.label}</p>
          </div>
        ))}
      </section>

      {/* POR QUÉ — primary full-screen list */}
      <section className="min-h-screen bg-primary flex flex-col justify-center px-5 md:px-10 py-20">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <p className="label-uppercase text-white/40">POR QUÉ CAMHAJI</p>
            <h2
              className="font-sans font-bold text-white max-w-[360px] md:text-right"
              style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.02em" }}
            >
              Compromiso que se demuestra, no se promete
            </h2>
          </div>
          <div className="border-t border-white/10">
            {principles.map((p) => (
              <div
                key={p.name}
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-7 border-b border-white/[0.08] hover:pl-3 transition-all duration-200 gap-2"
              >
                <span
                  className="font-sans font-bold text-white"
                  style={{ fontSize: "clamp(18px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}
                >
                  {p.name}
                </span>
                <span className="font-sans text-[15px] font-light text-white/45 md:text-right max-w-[440px] leading-relaxed">
                  {p.desc}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORES — dark split */}
      <section className="min-h-screen bg-camhaji-base flex flex-col">
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-10 gap-4">
            <p className="label-uppercase text-white/35">SECTORES QUE ATENDEMOS</p>
            <p className="font-sans text-[15px] font-light text-white/50">Especialistas donde más lo necesitas</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
          {[
            { badge: "ESPECIALIZACIÓN", name: "Construcción", desc: "Costos de obra, nómina de construcción y fiscal para constructoras en Q.Roo.", href: "/version-c/sectores/construccion" },
            { badge: "SECTOR", name: "Comercial", desc: "Contabilidad y estrategia fiscal para empresas de comercialización y distribución.", href: "#" },
          ].map((s, i) => (
            <div
              key={s.name}
              className={`relative min-h-[50dvh] bg-white/[0.04] flex items-end p-10 md:p-12 group cursor-pointer overflow-hidden hover:bg-white/[0.06] transition-colors duration-300 ${
                i === 0 ? "md:border-r border-white/[0.06]" : ""
              }`}
            >
              <div>
                <span className="inline-block border border-white/25 rounded-sm px-2.5 py-1 label-uppercase text-[10px] text-white/60 mb-4">
                  {s.badge}
                </span>
                <h3
                  className="font-sans font-bold text-white mb-2"
                  style={{ fontSize: "clamp(22px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}
                >
                  {s.name}
                </h3>
                <p className="font-sans text-sm font-light text-white/55 mb-5">{s.desc}</p>
                <a href={s.href} className="label-uppercase text-white/40 hover:text-white transition-colors">
                  VER ESPECIALIZACIÓN →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPO — white */}
      <section className="min-h-screen bg-white flex flex-col">
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <p className="label-uppercase text-camhaji-muted">NUESTRO EQUIPO</p>
            <h2
              className="font-sans font-bold text-camhaji-text max-w-[280px] md:text-right"
              style={{ fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "-0.02em" }}
            >
              El equipo que respalda tu tranquilidad
            </h2>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          {team.map((m, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i < team.length - 1 ? "md:border-r border-border-subtle" : ""
              }`}
            >
              <div className="flex-1 bg-surface min-h-[320px] flex items-center justify-center">
                <span className="label-uppercase text-camhaji-muted">FOTO CORPORATIVA</span>
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

      <ClientLogos variant="c" />

      {/* TESTIMONIAL — dark full-screen */}
      <section className="min-h-screen bg-camhaji-base flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/25 mb-16">LO QUE DICEN NUESTROS CLIENTES</p>
        <span className="font-serif text-[120px] text-white/[0.06] leading-none block -mb-12" aria-hidden="true">"</span>
        <blockquote
          className="font-serif italic text-white/[0.88] max-w-[820px] mb-12"
          style={{ fontSize: "clamp(20px, 3.5vw, 40px)", lineHeight: 1.5, letterSpacing: "-0.01em" }}
        >
          "Llevan más de 4 años como mis contadores. Entienden mi negocio de verdad — siempre puntuales, siempre claros, siempre resolviendo. No cambiaría de despacho por nada."
        </blockquote>
        <div className="w-8 h-px bg-white/20 mb-6" />
        <p className="font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-white/50 mb-1">CLIENTE DEL DESPACHO</p>
        <p className="font-sans text-[13px] font-light text-white/30">Sector Construcción · Cancún, Q.Roo</p>
        <p className="font-sans text-xs text-white/20 mt-8 italic">* Testimonio de referencia — pendiente validación</p>
      </section>

      {/* CTA — primary */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">DA EL SIGUIENTE PASO</p>
        <h2
          className="font-sans font-bold text-white mb-12"
          style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}
        >
          Hablemos de tu negocio.
        </h2>
        <a
          href="/version-c/contacto"
          className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5"
        >
          AGENDAR CONSULTA GRATUITA
        </a>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-white/40" />
          <span className="font-sans text-sm text-white/50">(998) 123-4567</span>
        </div>
      </section>

      {/* FAQ — white */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
            <p className="label-uppercase text-camhaji-muted">PREGUNTAS FRECUENTES</p>
            <h2
              className="font-sans font-bold text-camhaji-text"
              style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}
            >
              Resolvemos tus dudas
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border-subtle">
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex items-baseline gap-4 text-left">
                    <span className="font-sans text-xs tracking-[0.1em] text-border-subtle flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans font-semibold text-[17px] text-camhaji-text leading-snug">
                      {f.q}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">
                  {f.a}
                </AccordionContent>
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
