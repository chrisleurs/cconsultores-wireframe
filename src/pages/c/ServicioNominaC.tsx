import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceExtras, FaqJsonLd, ServiceJsonLd } from "@/components/ServiceExtras";
import { blogByService, relatedByService } from "@/data/serviceLinks";
import { Phone } from "lucide-react";

const queIncluye = [
  "Cálculo de nómina mensual o quincenal",
  "Altas y bajas ante el IMSS e Infonavit",
  "Cálculo de cuotas patronales y aportaciones",
  "Generación de recibos de nómina en CFDI correctamente timbrados",
  "Finiquitos, liquidaciones y cálculo de prestaciones",
  "Atención a requerimientos del IMSS",
];

const faqs = [
  { q: "¿Cuánto cuesta el servicio de nómina para mi empresa?", a: "El costo depende del número de empleados, la frecuencia de pago (quincenal o mensual) y la complejidad de la operación (eventuales, trabajadores por obra, prestaciones especiales). Hacemos una cotización personalizada sin costo — cuéntanos tu situación y te damos un número real." },
  { q: "¿Qué pasa si pago mal la nómina en México?", a: "Las consecuencias más comunes son: diferencias con el IMSS por cuotas patronales incorrectas (con recargos), multas por CFDI de nómina con errores, conflictos laborales por finiquitos mal calculados, y observaciones del IMSS en caso de auditoría." },
  { q: "¿Qué incluye el outsourcing de nómina?", a: "Cálculo de nómina, altas y bajas en IMSS e Infonavit, cálculo de cuotas patronales, emisión de CFDI de nómina, finiquitos, liquidaciones, cálculo de prestaciones y atención a requerimientos del IMSS. Todo en un solo servicio, con un equipo dedicado que conoce a tu empresa." },
];

export default function ServicioNominaC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO title={`Nómina Empresarial en Cancún | Camhaji Consultores`} description={`Nómina empresarial en Cancún: cálculo de nómina, IMSS, Infonavit y CFDI de nómina sin errores ni retrasos.`} path="/version-c/servicios/nomina" />
      <ServiceJsonLd
        name="Nómina Empresarial en Cancún"
        description="Servicio integral de nómina en Cancún: cálculo, IMSS, Infonavit, CFDI de nómina, finiquitos y atención a requerimientos."
        url="https://cconsultores-wireframe.lovable.app/version-c/servicios/nomina"
        serviceType="PayrollService"
      />
      <FaqJsonLd faqs={faqs} />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop" alt="Nómina empresarial" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.88]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[800px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Servicios</span>
            <span className="text-white/15 mx-2">/</span><span>Nómina</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">NÓMINA EMPRESARIAL EN CANCÚN</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
            Nómina Empresarial en Cancún: Sin Errores, sin Retrasos
          </h1>
          <p className="font-sans text-white/50 max-w-[560px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>
            La nómina parece un proceso operativo — hasta que falla. Un error en las cuotas patronales puede derivar en una diferencia con el IMSS que aparece meses después, con recargos incluidos.
          </p>
        </div>
      </section>

      {/* EL COSTO DE EQUIVOCARSE */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">RIESGOS DE NÓMINA MAL CALCULADA</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            El costo real de equivocarse en nómina
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Multas por diferencias con el IMSS. Conflictos laborales por finiquitos mal calculados. Trabajadores con recibos que no sirven para nada porque el CFDI tiene errores. Los tres casos tienen una causa común: nómina hecha sin el nivel de especialización que requiere.
          </p>
          <p className="font-sans text-[16px] font-semibold text-primary">
            Tercerizar la nómina con especialistas no es un gasto extra — es la forma más inteligente de eliminar ese riesgo.
          </p>
        </div>
      </section>

      {/* SPLIT IMAGE — EQUIPO DE TRABAJO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div>
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop" alt="Equipo de trabajo en oficina" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">GESTIÓN DE IMSS E INFONAVIT EN CANCÚN</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Cada empleado bien registrado es un problema menos
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              Altas, bajas, cuotas patronales, finiquitos. Cada movimiento de tu plantilla tiene implicaciones en IMSS, Infonavit e ISR. Lo hacemos bien desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">SERVICIO DE NÓMINA EMPRESARIAL</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            ¿Qué incluye?
          </h2>
          <div className="border-t border-white/[0.08]">
            {queIncluye.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-white/[0.06] hover:translate-x-2.5 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-camhaji-accent flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-white/70 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-14 border-l-2 border-camhaji-accent/40 pl-6">
            <h3 className="font-sans font-bold text-white text-lg mb-3">Lo que recibes cada periodo</h3>
            <p className="font-sans text-sm font-light text-white/50 leading-relaxed">
              Recibos de nómina timbrados, dispersión lista para autorizar, resumen de cuotas IMSS e Infonavit y un canal directo con quien lleva tu cuenta. Si surge una duda — del SAT, del IMSS o de un trabajador — alguien la contesta el mismo día.
            </p>
          </div>
        </div>
      </section>

      {/* ESPECIALISTA */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">ESPECIALISTA EN NÓMINA EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Nuestro especialista en nómina
          </h2>
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-full md:w-48 h-48 bg-gradient-to-br from-camhaji-base to-primary/80 flex items-center justify-center flex-shrink-0">
              <span className="label-uppercase text-white/30">FOTO</span>
            </div>
            <div>
              <h3 className="font-sans font-bold text-camhaji-text text-xl mb-1">Marlon Rafael Chávez Sánchez</h3>
              <p className="label-uppercase text-primary mb-4">Supervisor de Nómina y Facturación</p>
              <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
                Marlon lleva años calculando nóminas reales — con eventuales, finiquitos complicados y trabajadores por obra. Conoce la Ley Federal del Trabajo con la precisión de quien la aplica cada semana y cuida cada movimiento como si fuera de su propia empresa. Cuando contratas nuestro servicio de nómina en Cancún, tienes a Marlon y su equipo del lado correcto del SAT y del IMSS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED BAND — TRABAJADORES */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1600&h=800&fit=crop" alt="Ambiente laboral profesional" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">NÓMINA SIN OBSERVACIONES DEL IMSS</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Cálculos correctos, CFDI sin error y reportes listos para cualquier revisión. Tú pagas, tu equipo cobra a tiempo, el IMSS queda en orden.
          </p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5 }}>
            "Antes teníamos errores en el IMSS todos los meses. Desde que Camhaji lleva la nómina, no hemos tenido ni una sola observación."
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">Gerente Administrativo, empresa comercial · Cancún, QR</p>
          <p className="font-sans text-xs text-white/20 mt-4 italic">* Testimonio de referencia — pendiente validación</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">NÓMINA EMPRESARIAL — PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Sobre nómina empresarial
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
        article={blogByService.nomina}
        related={relatedByService.nomina}
        serviceLabel="Nómina"
      />

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">CONTRATA TU SERVICIO DE NÓMINA EN CANCÚN</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu nómina.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos cuántos empleados tiene tu empresa y cómo está organizada hoy tu nómina.
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
