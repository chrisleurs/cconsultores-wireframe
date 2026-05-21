import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const obligaciones = [
  {
    title: "Declaraciones mensuales",
    desc: "El RESICO requiere presentar declaraciones de ISR antes del día 17 de cada mes, calculadas sobre los ingresos cobrados en el periodo. La tasa varía según el nivel de ingresos acumulados en el año — entre 1% y 2.5%.",
  },
  {
    title: "Declaración anual",
    desc: "En abril se presenta la declaración anual donde se consolida el ISR del ejercicio. Es el momento donde pueden surgir diferencias a favor o en contra, dependiendo de los ingresos reales del año y de las retenciones que te aplicaron tus clientes.",
  },
  {
    title: "Facturación CFDI obligatoria",
    desc: "En el RESICO es obligatorio emitir CFDI por cada ingreso. El comprobante debe tener el régimen fiscal correcto y la clave de producto o servicio adecuada. Un error en esto puede convertir tu factura en un CFDI inválido — y eso le afecta tanto a ti como a tu cliente.",
  },
  {
    title: "Retenciones cuando aplique",
    desc: "Si tus clientes son personas morales, en muchos casos están obligados a retenerte parte del IVA e ISR de tu factura. Esas retenciones se acreditan en tu declaración mensual, pero hay que calcularlas y registrarlas bien para que no resulten en diferencias que pagar.",
  },
];

const loQueHacemos = [
  "Cálculo mensual del ISR y presentación de la declaración a tiempo",
  "Emisión correcta de CFDI con régimen fiscal y claves adecuadas",
  "Preparación y presentación de la declaración anual",
  "Revisión y acreditamiento de retenciones de tus clientes",
  "Asesoría sobre si el RESICO es el régimen que más te conviene — o si hay que cambiar",
];

const perfiles = [
  {
    title: "Freelancers y consultores independientes",
    desc: "Diseñadores, desarrolladores, redactores, fotógrafos, consultores de cualquier especialidad. Si cobras por proyecto o por hora y emites tus propias facturas, el RESICO probablemente sea tu régimen.",
  },
  {
    title: "Agentes inmobiliarios en Cancún",
    desc: "Las comisiones inmobiliarias tienen su propio tratamiento fiscal. Si eres agente independiente y cobras comisiones, el RESICO puede ser una opción — dependiendo de tu volumen de ingresos y tu estructura.",
  },
  {
    title: "Profesionistas independientes",
    desc: "Médicos, abogados, arquitectos, psicólogos, ingenieros. Si tienes consultorio o despacho propio y cobras honorarios, el RESICO aplica para ti.",
  },
  {
    title: "Prestadores de servicios en general",
    desc: "Cualquier persona física que preste servicios de forma independiente, sin relación laboral formal, puede tributar en RESICO si cumple con los límites de ingresos.",
  },
];

const faqs = [
  {
    q: "¿Qué es el RESICO y quién puede tributar en él?",
    a: "El RESICO (Régimen Simplificado de Confianza) es un régimen fiscal creado en 2022 con tasas de ISR más bajas. Pueden tributar en él las personas físicas con ingresos anuales de hasta $3.5 millones: freelancers, consultores, profesionistas independientes, agentes inmobiliarios y cualquier prestador de servicios que cumpla el límite. Las personas morales también pueden acceder bajo otras condiciones.",
  },
  {
    q: "¿Cuánto se paga de impuestos en el RESICO?",
    a: "Las tasas van del 1% al 2.5% mensual sobre los ingresos cobrados, dependiendo del monto acumulado en el año. Por ejemplo, si facturas $50,000 mensuales, el ISR es de $500 a $1,250 al mes. Es considerablemente menor que el Régimen General, donde la tasa puede llegar al 35%. El IVA se declara por separado si tus servicios están gravados.",
  },
  {
    q: "¿Puedo cambiarme al RESICO en cualquier momento?",
    a: "No. El cambio de régimen fiscal solo puede hacerse en enero de cada año, durante las primeras semanas del mes. Fuera de esa ventana no es posible hasta el siguiente año. Si estás interesado en cambiarte, lo ideal es planificarlo con tiempo y revisar el historial fiscal antes de hacerlo.",
  },
  {
    q: "¿Qué pasa si mis ingresos superan el límite del RESICO?",
    a: "Si en cualquier mes del año tus ingresos acumulados superan $3.5 millones (personas físicas), el SAT te mueve automáticamente al Régimen General desde ese mes. Por eso es importante monitorear los ingresos durante el año y anticipar ese cambio antes de que ocurra, no después.",
  },
  {
    q: "¿El RESICO lleva contabilidad electrónica?",
    a: "Las personas físicas en RESICO tienen obligaciones simplificadas y no presentan contabilidad electrónica mensual. Las personas morales en RESICO sí la presentan. En ambos casos es obligatorio emitir CFDI por todos los ingresos y conservar los comprobantes de gastos.",
  },
];

export default function SectorResicoC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO title={`Régimen RESICO en Cancún | Camhaji Consultores`} description={`Asesoría y contabilidad RESICO en Cancún. Cumple con el SAT bajo el Régimen Simplificado de Confianza sin complicaciones.`} path="/version-c/sectores/resico" />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=900&fit=crop" alt="Freelancer trabajando" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/95 via-camhaji-base/60 to-camhaji-base/30" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 pt-32 w-full max-w-[1200px] mx-auto">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Sectores</span>
            <span className="text-white/15 mx-2">/</span><span>RESICO</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">CONTADOR PARA RESICO EN CANCÚN</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Contador para RESICO<br />en Cancún
          </h1>
          <p className="font-sans text-white/50 mt-6 max-w-[560px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            El RESICO existe para simplificar tus obligaciones fiscales. Pero muchos freelancers, consultores y profesionistas independientes llegan con meses de declaraciones sin presentar, CFDI emitidos con el régimen incorrecto o sin saber si el RESICO realmente les conviene. Nosotros resolvemos eso.
          </p>
        </div>
      </section>

      {/* QUÉ ES */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">RÉGIMEN SIMPLIFICADO DE CONFIANZA</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            ¿Qué es el RESICO y a quién aplica?
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            El Régimen Simplificado de Confianza es una opción fiscal para personas físicas con actividad empresarial o ingresos por servicios profesionales que no superen los 3.5 millones de pesos al año. Ofrece tasas de ISR más bajas que el régimen general y una mecánica de declaración más simple.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Pueden tributar en RESICO: freelancers, consultores, diseñadores, arquitectos, médicos, abogados, agentes inmobiliarios y cualquier persona física que preste servicios de forma independiente y cumpla con el límite de ingresos.
          </p>
          <p className="font-sans font-semibold text-primary">
            Lo que el RESICO no te exime: seguir emitiendo CFDI por cada ingreso, presentar declaraciones mensuales y anuales, y en algunos casos calcular retenciones. Simple no es sinónimo de automático.
          </p>
        </div>
      </section>

      {/* OBLIGACIONES */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">OBLIGACIONES FISCALES DEL RESICO</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Las obligaciones fiscales en el RESICO
          </h2>
          <div className="space-y-10">
            {obligaciones.map((o, i) => (
              <div key={i} className="border-l-2 border-camhaji-accent/40 pl-6">
                <h3 className="font-sans font-bold text-white text-lg mb-3">{o.title}</h3>
                <p className="font-sans text-[15px] font-light text-white/60 leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT IMAGE — EMPRENDEDOR */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center bg-surface px-8 md:px-16 py-16 order-2 md:order-1">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">RESICO: TASAS BAJAS, OBLIGACIONES REALES</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              El RESICO simplifica las tasas, pero las obligaciones siguen siendo tuyas
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              Declaraciones mensuales, CFDI por cada ingreso, retenciones cuando aplican. Lo simple es pagarle menos al SAT — no dejar de cumplir.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=1200&h=800&fit=crop" alt="Emprendedor independiente trabajando" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* LO QUE HACEMOS */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">SERVICIO CONTABLE PARA RESICO</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Lo que Camhaji hace por ti si estás en RESICO
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-10">
            Nada de lo anterior es complicado cuando tienes a alguien que lo hace bien. Nuestro servicio para personas en RESICO en Cancún incluye:
          </p>
          <div className="border-t border-border-subtle">
            {loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-border-subtle hover:translate-x-2.5 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-camhaji-text leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="font-sans font-semibold text-primary mt-8">Sin acumulación de declaraciones pendientes. Sin CFDI mal emitidos. Sin sorpresas en abril.</p>
        </div>
      </section>

      {/* A QUIÉN ATENDEMOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">PROFESIONISTAS EN RESICO EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-12" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            ¿A quién atendemos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {perfiles.map((p) => (
              <div key={p.title}>
                <div className="w-6 h-px bg-primary mb-4" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{p.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-BLEED BAND — CALLE COMERCIAL */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&h=800&fit=crop" alt="Calle comercial en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">PROFESIONISTAS INDEPENDIENTES EN CANCÚN</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Consultores, diseñadores, médicos, agentes inmobiliarios — todos en orden con el SAT.
          </p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-sans font-light text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5 }}>
            "{testimonials.edgar.short}"
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">{testimonials.edgar.author} · {testimonials.edgar.role}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">RESICO — PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-12" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Preguntas frecuentes sobre el RESICO
          </h2>
          <div>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-border-subtle">
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex justify-between items-center py-6 text-left" aria-expanded={isOpen}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-xs tracking-[0.1em] text-[#D0CBC0] flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-sans font-semibold text-[17px] text-camhaji-text leading-snug">{f.q}</span>
                    </div>
                    <span className={`font-sans text-2xl font-light text-primary flex-shrink-0 ml-4 transition-transform duration-200 leading-none ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">¿ESTÁS EN RESICO O QUIERES SABER SI TE CONVIENE?</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu situación.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos tu situación. Si tienes declaraciones atrasadas, las ponemos al corriente. Si no sabes si el RESICO es el régimen correcto para ti, hacemos un diagnóstico y te decimos con claridad qué te conviene.
        </p>
        <a href="/version-c/contacto" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5">
          ESCRÍBENOS POR WHATSAPP
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
