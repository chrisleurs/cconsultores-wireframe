import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const impuestos = [
  { title: "ISR sobre comisiones", desc: "Cada comisión que recibes es un ingreso gravado. Dependiendo de tu régimen, la tasa puede ir del 1% al 2.5% en RESICO o hasta el 35% en régimen general." },
  { title: "IVA", desc: "Si cobras comisiones por intermediación, en la mayoría de los casos el servicio está gravado con IVA al 16%. Tienes que cobrarlo, declararlo y pagarlo." },
  { title: "Retenciones", desc: "Cuando tu cliente es una empresa, está obligada a retenerte parte del ISR e IVA de tu factura. Esa retención afecta el neto que recibes y hay que calcularla bien." },
  { title: "CFDI obligatorio", desc: "Por cada comisión debes emitir una factura electrónica con los datos correctos. Sin CFDI, el ingreso sigue existiendo para el SAT aunque no lo declares." },
];

const loQueHacemos = [
  "Diagnóstico de tu situación fiscal actual (régimen, obligaciones, historial)",
  "Emisión correcta de CFDI por cada comisión",
  "Cálculo y declaración mensual de ISR e IVA",
  "Manejo de retenciones de clientes personas morales",
  "Declaración anual",
  "Asesoría sobre si el RESICO es el régimen más conveniente para tu nivel de ingresos",
];

const faqs = [
  { q: "¿Qué impuestos paga un agente inmobiliario en México?", a: "Depende del régimen fiscal. En RESICO, paga entre 1% y 2.5% de ISR mensual sobre sus comisiones. En Régimen General, la tasa puede llegar al 35% pero con más deducciones disponibles. Además, debe pagar IVA sobre sus servicios de intermediación (16% en la mayoría de casos)." },
  { q: "¿Cómo facturar comisiones inmobiliarias con CFDI?", a: "El agente debe emitir un CFDI por el monto de su comisión. El concepto debe corresponder a 'servicios de intermediación inmobiliaria'. Si la empresa te retiene ISR, esa retención se refleja en el CFDI. El complemento de pago aplica si la comisión no se liquida al momento de la operación." },
  { q: "¿Conviene el RESICO para un agente inmobiliario en Cancún?", a: "Para agentes con ingresos anuales de comisiones por debajo de $3.5 millones, el RESICO suele ser conveniente: tasas bajas, proceso simplificado. Para agentes con volúmenes altos o con estructura de gastos deducibles significativos, puede convenir el Régimen General." },
];

export default function SectorInmobiliarioC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=900&fit=crop" alt="Sector inmobiliario Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/95 via-camhaji-base/60 to-camhaji-base/30" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 pt-32 w-full max-w-[1200px] mx-auto">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Sectores</span>
            <span className="text-white/15 mx-2">/</span><span>Inmobiliario</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">SECTOR</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Contabilidad para Agentes<br />Inmobiliarios en Cancún
          </h1>
          <p className="font-sans text-white/50 mt-6 max-w-[560px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            El mercado inmobiliario de Cancún mueve comisiones altas. Pero muchos agentes llegan a nosotros cuando el SAT ya les mandó una carta.
          </p>
        </div>
      </section>

      {/* IMPUESTOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">OBLIGACIONES FISCALES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Los impuestos que enfrenta un agente inmobiliario en México
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {impuestos.map((item) => (
              <div key={item.title}>
                <div className="w-6 h-px bg-primary mb-5" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{item.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT IMAGE — AGENTE INMOBILIARIO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div>
          <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop" alt="Agente inmobiliario mostrando propiedad" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">COMISIONES EN REGLA</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Cada comisión bien facturada es una deducción que tu cliente conserva
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              El mercado inmobiliario de Cancún mueve comisiones altas. Un CFDI incorrecto no solo te afecta a ti — también le quita la deducción a tu cliente.
            </p>
          </div>
        </div>
      </section>

      {/* CFDI */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CFDI</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            CFDI por comisiones: cómo facturar correctamente
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            La factura de una comisión inmobiliaria no es igual a la de cualquier servicio. El uso del CFDI, la clave de producto y la forma de pago tienen que ser correctos para que sea deducible para tu cliente y válida para ti.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Los errores más comunes que vemos: régimen fiscal incorrecto en el comprobante, clave de servicio equivocada, IVA mal calculado cuando hay retención parcial, y cancelaciones hechas fuera de tiempo.
          </p>
          <p className="font-sans font-semibold text-primary">Con Camhaji, cada CFDI por comisión sale correcto desde el primer momento.</p>
        </div>
      </section>

      {/* RESICO */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">RESICO</p>
          <h2 className="font-sans font-bold text-white mb-8" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            RESICO para agentes inmobiliarios: ¿conviene?
          </h2>
          <p className="font-sans text-white/60 leading-relaxed mb-6" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
            Depende. El RESICO es una opción atractiva si tus ingresos anuales no superan los $3.5 millones de pesos: tasas de ISR bajas, declaración mensual simplificada, menos trámites.
          </p>
          <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
            Pero hay condiciones que hay que verificar antes: cómo está constituida tu relación con la inmobiliaria, si tienes empleados, si tienes ingresos de otras fuentes. No es una decisión que deba tomarse sin diagnóstico previo.
          </p>
        </div>
      </section>

      {/* LO QUE HACEMOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">LO QUE HACEMOS</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Lo que Camhaji hace por tu negocio inmobiliario
          </h2>
          <div className="border-t border-border-subtle">
            {loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-border-subtle hover:translate-x-2 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-camhaji-text leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm font-light text-camhaji-muted mt-6 italic">Sin pendientes acumulados. Sin facturas mal emitidas. Sin sorpresas.</p>
        </div>
      </section>

      {/* FULL-BLEED BAND — CONDOMINIOS FRENTE AL MAR */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&h=800&fit=crop" alt="Condominios frente al mar en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">CANCÚN Y RIVIERA MAYA</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            El mercado inmobiliario más activo de México — y uno de los más fiscalizados.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Agentes inmobiliarios en Cancún
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
        <p className="label-uppercase text-white/40 mb-6">¿ERES AGENTE INMOBILIARIO EN CANCÚN?</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tus impuestos.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos tu situación. Si tienes declaraciones atrasadas o no sabes si tu régimen es el correcto, hacemos un diagnóstico sin costo.
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
