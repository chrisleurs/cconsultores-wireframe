import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Check, Shield, Users, Phone, ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  "Contabilidad al corriente cada mes",
  "ERP con visibilidad en tiempo real",
  "Declaraciones SAT puntuales",
  "Conciliación bancaria mensual incluida",
  "Contador dedicado asignado",
];

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Revisamos tu situación en 30 minutos. Sin compromiso, sin costo." },
  { num: "02", title: "Onboarding", desc: "Contador dedicado asignado. Nos adaptamos a tu proceso de envío." },
  { num: "03", title: "Ejecución mensual", desc: "Registro, conciliación y cálculo de impuestos puntual cada mes." },
  { num: "04", title: "Reporte", desc: "Dashboard en tiempo real + resumen mensual directo contigo." },
];

const modules = [
  { label: "REGISTRO", items: ["Pólizas de ingreso y egreso", "Clasificación contable", "Registro de facturas XML"] },
  { label: "BANCARIO", items: ["Conciliación bancaria mensual", "Control de saldos", "Identificación de movimientos"] },
  { label: "FISCAL", items: ["Declaraciones mensuales", "Declaración anual", "Cálculo de impuestos"] },
  { label: "ERP", items: ["Acceso a plataforma", "Reportes en tiempo real", "Estado de resultados"] },
  { label: "ASESORÍA", items: ["Consultas ilimitadas", "Contador dedicado", "Revisión fiscal periódica"] },
  { label: "TRÁMITES", items: ["Alta/actualización SAT", "Firma electrónica", "Opinión de cumplimiento"] },
];

const idealClient = [
  "Empresa con operaciones continuas en México",
  "Dueño que quiere orden sin ocupar su tiempo",
  "Negocio que ha tenido problemas con el SAT",
  "Empresa que quiere claridad financiera para crecer",
];

const faqs = [
  { q: "¿Con qué frecuencia recibo mis estados financieros?", a: "Mensualmente. Además, tienes acceso en tiempo real a tu ERP con reportes actualizados." },
  { q: "¿Puedo enviar mi documentación por WhatsApp?", a: "Sí. Nos adaptamos a tu método preferido: WhatsApp, correo electrónico o plataforma digital." },
  { q: "¿Qué pasa si tengo atrasos con el SAT?", a: "Evaluamos tu situación, priorizamos lo urgente y regularizamos todo de forma ordenada." },
  { q: "¿Incluyen las declaraciones mensuales?", a: "Sí. Las declaraciones mensuales y la declaración anual están incluidas en el servicio." },
];

export default function ServicioContabilidadC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[60dvh] bg-camhaji-base flex items-end pb-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto w-full pt-32">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span>
            <span>Servicios</span>
            <span className="text-white/15 mx-2">/</span>
            <span>Contabilidad</span>
          </p>
          <p className="label-uppercase text-white/30 mb-6">SERVICIO 01 · CONTABILIDAD & ADMINISTRACIÓN</p>
          <h1
            className="font-sans font-bold text-white max-w-[760px] mb-6"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}
          >
            Contabilidad que te da control, no solo cumplimiento
          </h1>
          <p className="font-serif italic text-white/45 max-w-[560px]" style={{ fontSize: "18px" }}>
            Registro mensual, conciliación bancaria y monitoreo en tiempo real.
          </p>
        </div>
      </section>

      {/* INTRO + BENEFICIOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-20 items-start">
          <div>
            <span className="font-sans font-bold text-primary/[0.06] text-[80px] leading-none block -mb-4">01</span>
            <h2
              className="font-sans font-bold text-camhaji-text mb-7"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Contabilidad para que tomes mejores decisiones
            </h2>
            <p className="font-sans text-[17px] text-camhaji-text leading-relaxed mb-4">
              La mayoría de los despachos llevan tus números solo para el SAT. Nosotros los llevamos para que tú puedas tomar mejores decisiones con información real.
            </p>
            <p className="font-sans text-base font-light text-camhaji-muted leading-relaxed">
              Con nuestro ERP interno tienes visibilidad financiera en tiempo real. Sin esperar el cierre mensual, sin sorpresas.
            </p>
            <div className="border-l-2 border-primary pl-5 mt-8">
              <p className="font-serif italic text-[17px] text-camhaji-text">
                "Nos adaptamos a tu proceso, no al revés."
              </p>
            </div>
          </div>
          <div className="md:sticky md:top-[100px]">
            <p className="label-uppercase text-camhaji-muted mb-5">BENEFICIOS CLAVE</p>
            <div className="border-t border-border-subtle">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 py-3.5 border-b border-border-subtle">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-camhaji-text">{b}</span>
                </div>
              ))}
            </div>
            <a
              href="/version-c/contacto"
              className="btn-uppercase block text-center bg-primary text-white py-3.5 mt-6 hover:bg-primary-hover transition-colors"
            >
              AGENDAR CONSULTA
            </a>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="label-uppercase text-white/35 mb-3">EL PROCESO</p>
          <h2
            className="font-sans font-bold text-white mb-16"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
          >
            Así trabajamos contigo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/[0.08]">
            {steps.map((s, i) => (
              <div key={i} className={`py-10 pr-8 ${i < steps.length - 1 ? "md:border-r border-white/[0.07]" : ""} md:pl-8 first:md:pl-0`}>
                <span className="font-sans font-bold text-[48px] text-white/[0.08] leading-none block mb-6" style={{ letterSpacing: "-0.03em" }}>
                  {s.num}
                </span>
                <h3 className="font-sans font-bold text-[17px] text-white mb-3">{s.title}</h3>
                <p className="font-sans text-sm font-light text-white/50 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-3">ALCANCE DEL SERVICIO</p>
          <h2
            className="font-sans font-bold text-camhaji-text mb-14"
            style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}
          >
            Todo lo que está incluido
          </h2>
          <div className="border-t border-border-subtle">
            {modules.map((m) => (
              <div key={m.label} className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-12 py-6 border-b border-border-subtle items-start">
                <span className="label-uppercase text-primary">{m.label}</span>
                <div className="flex flex-wrap gap-x-8">
                  {m.items.map((item) => (
                    <span key={item} className="font-sans text-sm text-camhaji-muted leading-[2]">· {item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <p className="label-uppercase text-white/35 mb-3">CLIENTE IDEAL</p>
            <h2
              className="font-sans font-bold text-white mb-8"
              style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}
            >
              ¿Este servicio es para ti?
            </h2>
            <div className="border-t border-white/[0.08]">
              {idealClient.map((c) => (
                <div key={c} className="flex items-start gap-3 py-3.5 border-b border-white/[0.06]">
                  <ArrowRight className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-[15px] text-white/80">{c}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="md:border-l md:border-white/[0.08] md:pl-20">
            <p className="font-serif italic text-white/75 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", lineHeight: 1.55 }}>
              "No necesitas tener todo en orden para empezar. Empezamos desde donde estés."
            </p>
            <a
              href="/version-c/contacto"
              className="btn-uppercase inline-block border border-white/30 text-white px-8 py-3.5 hover:bg-white/[0.07] hover:border-white/60 transition-all duration-300"
            >
              AGENDAR DIAGNÓSTICO GRATUITO
            </a>
            <p className="font-sans text-[13px] text-white/30 mt-4">(998) 123-4567</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-3">PREGUNTAS FRECUENTES</p>
          <h2
            className="font-sans font-bold text-camhaji-text mb-14"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}
          >
            Preguntas sobre Contabilidad
          </h2>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border-subtle">
                <AccordionTrigger className="py-6 hover:no-underline">
                  <div className="flex items-baseline gap-4 text-left">
                    <span className="font-sans text-xs tracking-[0.1em] text-border-subtle">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans font-semibold text-[17px] text-camhaji-text">{f.q}</span>
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

      {/* OTROS SERVICIOS */}
      <section className="bg-surface py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <p className="label-uppercase text-camhaji-muted text-center mb-10">TAMBIÉN PUEDE INTERESARTE</p>
          <div className="border-t border-border-subtle">
            {[
              { icon: Shield, name: "Estrategia Fiscal", desc: "Planificación y cumplimiento SAT sin sorpresas.", href: "#" },
              { icon: Users, name: "Nómina & Facturación", desc: "CFDI, IMSS e Infonavit con CONTPAQi.", href: "#" },
            ].map((s, i) => (
              <div key={i} className="grid grid-cols-[40px_180px_1fr_auto] gap-8 items-center py-5 border-b border-border-subtle">
                <s.icon className="w-5 h-5 text-primary" />
                <h3 className="font-sans font-bold text-base text-camhaji-text" style={{ letterSpacing: "-0.01em" }}>{s.name}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted hidden md:block">{s.desc}</p>
                <a href={s.href} className="label-uppercase text-primary">VER →</a>
              </div>
            ))}
          </div>
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
