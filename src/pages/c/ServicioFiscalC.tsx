import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceExtras, FaqJsonLd, ServiceJsonLd } from "@/components/ServiceExtras";
import { blogByService, relatedByService } from "@/data/serviceLinks";
import { testimonials } from "@/data/testimonials";
import { Phone } from "lucide-react";

const servicios = [
  { title: "Diagnóstico inicial de situación fiscal", desc: "Antes de proponer cualquier estrategia, realizamos una revisión integral de la situación fiscal de la empresa: obligaciones vigentes, declaraciones presentadas, cumplimiento por régimen, opiniones de cumplimiento y posibles áreas de riesgo. Un diagnóstico claro permite tomar mejores decisiones." },
  { title: "Cumplimiento de obligaciones fiscales y precierre mensual", desc: "Supervisión y presentación de obligaciones mensuales como ISR, IVA, IMSS, declaraciones informativas y demás obligaciones aplicables, asegurando cumplimiento oportuno y correcto cálculo de contribuciones. Nos anticipamos al cierre de cada mes para evitar sorpresas en el pago mensual de impuestos." },
  { title: "Precierre anual", desc: "La declaración anual representa uno de los procesos fiscales más importantes para cualquier empresa. Preparamos y revisamos la información financiera y fiscal con anticipación para reducir riesgos y asegurar consistencia en la información presentada." },
  { title: "Atención a requerimientos y aclaraciones", desc: "Brindamos acompañamiento en la atención de requerimientos emitidos por el SAT y otras autoridades, apoyando en la integración de documentación, análisis de información y seguimiento del proceso de respuesta." },
  { title: "Normatividad aplicable a cada sector", desc: "Cada industria enfrenta obligaciones y criterios fiscales distintos. Contamos con experiencia en sectores como construcción, comercialización, servicios profesionales y RESICO, adaptando nuestros procesos a la operación específica de cada cliente." },
];

const faqs = [
  { q: "¿Qué sucede si tengo obligaciones fiscales atrasadas?", a: "Es una situación más común de lo que parece. El primer paso es realizar un diagnóstico claro para identificar obligaciones pendientes, periodos sin presentar y posibles diferencias o recargos acumulados. A partir de ello, desarrollamos un plan de regularización ordenado y priorizado según el nivel de riesgo de cada obligación." },
  { q: "¿Es posible optimizar legalmente la carga fiscal de mi empresa?", a: "Sí. Una correcta estructura administrativa, financiera y fiscal permite aprovechar deducciones autorizadas, regímenes adecuados y procesos mejor organizados dentro del marco legal vigente. Nuestro enfoque se basa en cumplimiento y prevención, evitando esquemas que puedan generar riesgos futuros para la empresa." },
  { q: "¿Atienden requerimientos del SAT?", a: "Sí. Brindamos acompañamiento en la atención de requerimientos, aclaraciones y seguimiento ante la autoridad fiscal, apoyando en la integración de información y documentación necesaria para cada caso." },
  { q: "¿Trabajan con personas físicas con actividad empresarial y RESICO?", a: "Sí. Atendemos tanto personas morales como personas físicas con actividad empresarial o profesional, incluyendo contribuyentes bajo RESICO, adaptando nuestros procesos al tipo de operación y obligaciones de cada cliente." },
];

export default function ServicioFiscalC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO title={`Estrategia Fiscal en Cancún | Camhaji Consultores`} description={`Estrategia fiscal para empresas en Cancún. Cumplimiento ante el SAT, planeación fiscal y asesoría contable sin sorpresas.`} path="/version-c/servicios/fiscal" />
      <ServiceJsonLd
        name="Estrategia y Asesoría Fiscal en Cancún"
        description="Diagnóstico, cumplimiento mensual ante el SAT, declaraciones anuales y respuesta a requerimientos para empresas en Cancún y Quintana Roo."
        url="https://cconsultores-wireframe.lovable.app/version-c/servicios/fiscal"
        serviceType="TaxAdvisory"
      />
      <FaqJsonLd faqs={faqs} />
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
            Estrategia fiscal y cumplimiento para empresas en crecimiento
          </h1>
          <p className="font-sans text-white/50 max-w-[560px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>
            Las obligaciones fiscales no admiten improvisación. Una estructura contable desordenada, declaraciones pendientes o diferencias ante la autoridad pueden convertirse rápidamente en riesgos financieros y operativos para la empresa. En Camhaji Consultores ayudamos a nuestros clientes a mantener control, claridad y cumplimiento fiscal mediante acompañamiento profesional y atención especializada.
          </p>
        </div>
      </section>

      {/* EL PROBLEMA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">RIESGOS FISCALES PARA EMPRESAS EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            El problema más común que encontramos en las empresas
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Existe un patrón que vemos con frecuencia: empresas que operan durante años sin una supervisión fiscal adecuada, hasta que aparece un requerimiento, diferencias en declaraciones, créditos fiscales o inconsistencias detectadas por la autoridad.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-4">
            En muchos casos, el problema no comienza con una auditoría, sino con procesos administrativos desordenados, falta de seguimiento o información financiera incompleta.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            El resultado suele ser el mismo: incertidumbre, presión operativa y riesgo de multas, recargos o revisiones fiscales.
          </p>
        </div>
      </section>

      {/* SPLIT IMAGE — REUNIÓN FISCAL */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center bg-surface px-8 md:px-16 py-16 order-2 md:order-1">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">DIAGNÓSTICO FISCAL PERSONALIZADO</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Cumplimiento fiscal claro, ordenado y sostenible
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              Nuestra asesoría fiscal no se enfoca en buscar soluciones improvisadas ni estrategias de corto plazo. Se enfoca en ayudar a las empresas a operar correctamente, cumplir con sus obligaciones y tomar decisiones con mayor claridad financiera.
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
            Enfoque preventivo, profesional y alineado a la normatividad
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Creemos que una estructura fiscal sana debe brindar estabilidad, orden y tranquilidad a largo plazo, no generar incertidumbre futura.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            Por eso, trabajamos bajo un enfoque preventivo, profesional y alineado a la normatividad vigente, priorizando siempre la seguridad operativa y fiscal de cada empresa y sus accionistas.
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
            Experiencia, criterio y acompañamiento fiscal para empresas
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-4">
            Contamos con más de 10 años de experiencia en materia fiscal, participando tanto en firmas de auditoría y consultoría como en la operación directa de empresas de distintos sectores en Cancún y Quintana Roo.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-4">
            Esa combinación entre experiencia técnica y conocimiento operativo nos permite entender no solo la normatividad fiscal, sino también la realidad diaria de las empresas y los retos que enfrentan al crecer.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            Nuestro enfoque se basa en prevención, análisis y acompañamiento constante, ayudando a cada cliente a operar con mayor claridad, control y seguridad fiscal.
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
            Experiencia fiscal aplicada a la operación real de las empresas
          </p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[820px] mx-auto">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.4vw, 28px)", lineHeight: 1.5 }}>
            "{testimonials.david.short}"
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">{testimonials.david.author} · {testimonials.david.role}</p>
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

      <ServiceExtras
        article={blogByService.fiscal}
        related={relatedByService.fiscal}
        serviceLabel="Fiscal"
      />

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
