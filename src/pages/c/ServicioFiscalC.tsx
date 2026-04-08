import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const servicios = [
  { title: "Diagnóstico inicial de situación fiscal", desc: "Antes de cualquier cosa, revisamos el estado real de tu empresa ante el SAT: obligaciones vigentes, declaraciones presentadas, créditos fiscales pendientes y cumplimiento por régimen. Sin diagnóstico no hay estrategia." },
  { title: "Cumplimiento de obligaciones mensuales", desc: "IVA, ISR, IMSS, declaraciones informativas. Cada obligación en su fecha, correctamente calculada y presentada." },
  { title: "Declaración anual", desc: "La declaración anual es uno de los momentos de mayor riesgo fiscal. La preparamos con tiempo, la revisamos a detalle y la presentamos antes de que el SAT tenga que recordártelo." },
  { title: "Atención a requerimientos del SAT", desc: "Si ya recibiste una carta del SAT, no la ignores. Te acompañamos en el proceso de respuesta, reunimos la documentación necesaria y gestionamos la resolución dentro de los plazos legales." },
  { title: "Normatividad aplicable a tu sector", desc: "Las constructoras, las comercializadoras, los agentes inmobiliarios y quienes están en RESICO tienen obligaciones específicas. Nos aseguramos de que conozcas y cumplas las que corresponden a tu negocio." },
];

const faqs = [
  { q: "¿Qué pasa si tengo obligaciones fiscales atrasadas?", a: "Es más común de lo que imaginas. El primer paso es un diagnóstico: saber exactamente cuánto tiempo llevas atrasado, qué obligaciones están pendientes y cuál es la deuda acumulada con recargos. A partir de ahí trazamos un plan de regularización ordenado, empezando por lo más urgente." },
  { q: "¿Puedo reducir legalmente lo que pago de impuestos?", a: "Sí, dentro de lo que la ley permite: deducciones autorizadas, regímenes adecuados para tu tipo de empresa y estructura correcta de operaciones. Lo que no hacemos es usar esquemas que trasladan el problema al futuro o que te ponen en riesgo ante una auditoría." },
  { q: "¿Atienden requerimientos del SAT ya emitidos?", a: "Sí. Si ya tienes un requerimiento en mano, contáctanos a la brevedad — los plazos de respuesta son cortos y cada día que pasa reduce las opciones disponibles para resolverlo correctamente." },
  { q: "¿Manejan declaraciones anuales de personas físicas con actividad empresarial?", a: "Sí. Atendemos personas morales y físicas con actividad empresarial o profesional, incluyendo quienes tributan en el RESICO. La declaración anual de una persona física tiene sus propias particularidades — sobre todo si tienes ingresos de más de una fuente." },
];

export default function ServicioFiscalC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1600&h=900&fit=crop" alt="Asesoría fiscal" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.88]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[800px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Servicios</span>
            <span className="text-white/15 mx-2">/</span><span>Fiscal</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">ASESORÍA FISCAL EN CANCÚN</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
            Asesoría Fiscal en Cancún: Cumple, no Improvises
          </h1>
          <p className="font-sans text-white/50 max-w-[560px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>
            El SAT no espera. No negocia plazos informales ni acepta excusas. No los juzgamos. Los resolvemos.
          </p>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">RIESGOS FISCALES PARA EMPRESAS EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            El problema más común que vemos en empresas de Cancún
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Hay un patrón que se repite: el empresario sabe que algo está mal con su situación fiscal, pero no sabe exactamente qué. A veces llegó con años de declaraciones sin presentar. Otras veces tiene un crédito fiscal en el portal del SAT que apareció sin que lo esperara.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            El resultado en todos los casos es el mismo: incertidumbre permanente y riesgo real de multas, recargos y auditorías.
          </p>
        </div>
      </section>

      {/* SPLIT IMAGE — REUNIÓN FISCAL */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center bg-surface px-8 md:px-16 py-16 order-2 md:order-1">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">DIAGNÓSTICO FISCAL PERSONALIZADO</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Primero entendemos tu situación. Después actuamos.
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              No tomamos decisiones a ciegas. Cada caso empieza con una revisión completa de tu historial ante el SAT — obligaciones, declaraciones, créditos, alertas. Solo así podemos actuar con precisión.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop" alt="Reunión profesional de asesoría fiscal" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CUMPLIMIENTO FISCAL SIN ATAJOS</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Cumplimiento correcto, sin atajos
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Nuestra asesoría fiscal en Cancún no se centra en pagar lo mínimo posible. Se centra en pagar lo justo — ni más, ni menos — cumpliendo correctamente con todas las obligaciones que la ley establece para tu empresa.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            No ofrecemos esquemas grises ni estrategias que hoy funcionan y mañana generan problemas. Ofrecemos algo más valioso: la tranquilidad de saber que tu empresa está en regla.
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">SERVICIOS DE ASESORÍA FISCAL</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Lo que incluye nuestra asesoría fiscal
          </h2>
          <div className="space-y-0 border-t border-white/[0.08]">
            {servicios.map((s, i) => (
              <div key={i} className="flex items-start gap-6 py-7 border-b border-white/[0.06] hover:translate-x-2.5 transition-transform duration-200">
                <span className="font-sans text-sm text-white/20 mt-1 w-8 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-sans font-bold text-white text-lg mb-2">{s.title}</h3>
                  <p className="font-sans text-sm font-light text-white/50 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ CAMHAJI */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">EXPERIENCIA FISCAL EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            ¿Por qué confiar en Camhaji para tu estrategia fiscal?
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            Más de 10 años de trayectoria en el ámbito fiscal — en grandes firmas de auditoría y en la operación directa con clientes de distintos sectores en Cancún. Nuestro equipo conoce cómo funciona el SAT, qué revisa y qué espera. Eso nos permite protegerte con precisión, no con suposiciones.
          </p>
        </div>
      </section>

      {/* FULL-BLEED BAND — EDIFICIOS */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&h=800&fit=crop" alt="Edificios corporativos" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">ASESORES FISCALES CON TRAYECTORIA</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Más de 10 años de experiencia fiscal — en grandes firmas y en la operación directa con clientes.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">ASESORÍA FISCAL — PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Sobre asesoría fiscal en Cancún
          </h2>
          <div className="border-t border-border-subtle">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-border-subtle">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between py-6 text-left group" aria-expanded={openFaq === i}>
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans text-xs text-camhaji-muted/40 tracking-[0.1em]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans font-semibold text-[17px] text-camhaji-text group-hover:text-primary transition-colors">{f.q}</span>
                  </div>
                  <span className="font-sans text-xl text-camhaji-muted/40 flex-shrink-0 ml-4 transition-transform duration-300" style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "300px" : "0", opacity: openFaq === i ? 1 : 0 }}>
                  <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">REGULARIZA TU SITUACIÓN FISCAL EN CANCÚN</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu situación fiscal.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos tu situación. Si hay obligaciones atrasadas, hacemos el diagnóstico sin costo.
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
