import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const servicios = [
  { title: "Emisión de CFDI", desc: "Facturas ordinarias, notas de crédito, complementos de pago, CFDI de nómina. Cada tipo con el uso del CFDI correcto, los datos del receptor verificados y el régimen fiscal bien asignado — que desde CFDI 4.0 es obligatorio declararlo." },
  { title: "Timbrado ante el SAT en tiempo real", desc: "Usamos CONTPAQi conectado directamente al SAT. El timbrado es inmediato y el comprobante queda registrado desde el primer momento, disponible para el receptor en segundos." },
  { title: "Archivo digital y administración de comprobantes", desc: "Todos los CFDI emitidos y recibidos quedan archivados de forma organizada. En cualquier momento puedes solicitar el historial del mes, del trimestre o del año. El SAT exige conservarlos por un mínimo de 5 años." },
  { title: "Verificación de facturas de proveedores", desc: "No solo emitimos — también verificamos que los CFDI que recibes de tus proveedores sean válidos y deducibles. Una factura de proveedor inválida es una deducción perdida." },
  { title: "Cancelaciones y sustituciones", desc: "Cuando hay un error, lo corregimos con el procedimiento correcto conforme a la normatividad del SAT. Sin cancelaciones indebidas que generen observaciones en tu historial fiscal." },
];

const faqs = [
  { q: "¿Qué es el CFDI 4.0 y qué cambió?", a: "El CFDI 4.0 es la versión vigente de la factura electrónica en México desde 2022. Los cambios más relevantes: el código postal del receptor es obligatorio, el régimen fiscal del receptor debe declararse en cada factura, y el uso del CFDI es verificado automáticamente por el SAT." },
  { q: "¿Cómo emitir una factura CFDI correctamente?", a: "Verifica que el RFC del receptor esté activo en el SAT, confirma su código postal y régimen fiscal, selecciona el uso del CFDI adecuado para la operación, indica si el pago es inmediato (PUE) o en crédito (PPD), y emite el complemento de pago cuando se liquide." },
  { q: "¿Qué pasa si emito una factura CFDI con errores?", a: "Si afecta datos fundamentales como RFC, importe o concepto, hay que cancelar el CFDI y reemitirlo. Las cancelaciones tienen plazos — en el mes siguiente a la emisión no requieren aceptación del receptor, después sí." },
  { q: "¿Cuánto tiempo debo conservar mis facturas CFDI?", a: "El SAT exige conservar los CFDI y su representación digital por un mínimo de 5 años. Lo fiscalmente válido es el XML original — no el PDF." },
];

export default function ServicioFacturacionC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=900&fit=crop" alt="Facturación CFDI" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.88]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[800px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Servicios</span>
            <span className="text-white/15 mx-2">/</span><span>Facturación</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">SERVICIO 04</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
            Facturación CFDI para tu Empresa en Cancún
          </h1>
          <p className="font-sans text-white/50 max-w-[560px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>
            Un CFDI mal emitido no es solo un problema técnico. Es una factura que el SAT no reconoce, una deducción que tu cliente pierde y una multa que llega meses después.
          </p>
        </div>
      </section>

      {/* POR QUÉ TERCERIZAR */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">POR QUÉ TERCERIZAR</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Por qué tercerizar tu facturación CFDI
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Las empresas que facturan por su cuenta cometen los mismos errores una y otra vez: datos del receptor incorrectos, uso del CFDI equivocado, complementos de pago que no cuadran, cancelaciones hechas fuera de tiempo. Ninguno es grave por sí solo. El problema es cuando se acumulan.
          </p>
          <p className="font-sans text-[16px] font-semibold text-primary">
            Cuando tercerizar con Camhaji, ese problema desaparece. Nosotros emitimos, timbramos, archivamos y revisamos. Tu equipo se dedica a vender.
          </p>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">QUÉ INCLUYE</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Qué incluye nuestro servicio de facturación CFDI
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

      {/* CONTPAQi */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">TECNOLOGÍA</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            CONTPAQi Facturación: el estándar en México
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            CONTPAQi es el software de facturación más utilizado en México y está integrado directamente con el SAT. Lo usamos porque garantiza compatibilidad, trazabilidad y reportes que funcionan en cualquier revisión. Si el SAT pide tu historial de CFDI, no tendrás que explicar cómo está hecha tu facturación — estará en orden.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Sobre facturación CFDI
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
        <p className="label-uppercase text-white/40 mb-6">¿BUSCAS FACTURACIÓN CFDI EN CANCÚN?</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu facturación.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos cuántas facturas emite tu empresa al mes y qué tipo de operaciones manejas.
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
