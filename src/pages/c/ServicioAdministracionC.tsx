import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceExtras, FaqJsonLd, ServiceJsonLd } from "@/components/ServiceExtras";
import { blogByService, relatedByService } from "@/data/serviceLinks";
import { Phone } from "lucide-react";

const servicios = [
  { title: "Emisión de CFDI", desc: "Facturas ordinarias, notas de crédito, complementos de pago, CFDI de nómina. Cada tipo con el uso del CFDI correcto, los datos del receptor verificados y el régimen fiscal bien asignado." },
  { title: "Timbrado ante el SAT en tiempo real", desc: "Usamos CONTPAQi conectado directamente al SAT. El timbrado es inmediato y el comprobante queda registrado desde el primer momento." },
  { title: "Archivo digital y administración de comprobantes", desc: "Todos los CFDI emitidos y recibidos quedan archivados de forma organizada. El SAT exige conservarlos por un mínimo de 5 años." },
  { title: "Verificación de facturas de proveedores", desc: "No solo emitimos — también verificamos que los CFDI que recibes de tus proveedores sean válidos y deducibles." },
  { title: "Cancelaciones y rectificaciones", desc: "Cuando hay un error, lo corregimos con el procedimiento correcto conforme a la normatividad del SAT." },
];

const faqs = [
  { q: "¿Qué sucede si una factura CFDI se emite incorrectamente?", a: "Un CFDI con errores puede generar problemas administrativos, rechazo por parte del cliente, diferencias contables o inconsistencias fiscales ante el SAT. Dependiendo del tipo de error, puede requerirse cancelación, sustitución o emisión de complementos relacionados. Por eso, mantener control y revisión en los procesos de facturación es fundamental para evitar incidencias posteriores." },
  { q: "¿Qué información debe validarse antes de emitir un CFDI?", a: "Es importante verificar correctamente datos como RFC, régimen fiscal, código postal, uso de CFDI y forma de pago, además de validar que la operación esté correctamente documentada y registrada administrativamente. Una validación adecuada desde el origen reduce errores y facilita el control financiero y contable de la empresa." },
  { q: "¿Qué pasa si no llevo control sobre complementos de pago y cobranza?", a: "La falta de seguimiento en complementos de pago puede generar diferencias entre facturación, cobranza y registros contables, además de inconsistencias fiscales relacionadas con ingresos efectivamente cobrados. Mantener control administrativo sobre estos procesos ayuda a tener información financiera más clara y ordenada." },
  { q: "¿Por cuánto tiempo deben conservarse los CFDI y archivos administrativos?", a: "Las facturas electrónicas y su documentación relacionada deben conservarse conforme a los plazos establecidos por la legislación fiscal vigente. Además del PDF, es importante resguardar correctamente los archivos XML y mantener una organización documental adecuada para futuras revisiones o aclaraciones." },
];

export default function ServicioAdministracionC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO title={`Administración Integral en Cancún | Camhaji Consultores`} description={`Soporte administrativo y operativo para empresas en crecimiento en Cancún: facturación CFDI, complementos de pago, cuentas por cobrar y organización documental.`} path="/version-c/servicios/administracion" />
      <ServiceJsonLd
        name="Administración Integral en Cancún"
        description="Soporte administrativo y operativo: emisión de CFDI, complementos de pago, cuentas por cobrar, organización documental y soporte administrativo continuo para empresas en Cancún."
        url="https://cconsultores-wireframe.lovable.app/version-c/servicios/administracion"
        serviceType="BusinessSupportService"
      />
      <FaqJsonLd faqs={faqs} />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=900&fit=crop" alt="Administración integral para empresas" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.88]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[800px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Servicios</span>
            <span className="text-white/15 mx-2">/</span><span>Administración</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">ADMINISTRACIÓN INTEGRAL EN CANCÚN</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
            Soporte administrativo y operativo para empresas en crecimiento.
          </h1>
          <p className="font-sans text-white/50 max-w-[620px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>
            La administración de una empresa no debería depender de procesos improvisados, información dispersa o seguimiento manual. En Camhaji Consultores ayudamos a nuestros clientes a centralizar procesos administrativos, mantener control operativo y reducir errores en tareas clave como facturación, seguimiento documental, cobranza y gestión administrativa diaria.
          </p>
        </div>
      </section>

      {/* ORDEN ADMINISTRATIVO */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">ADMINISTRACIÓN EMPRESARIAL EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Orden administrativo para que tu empresa pueda crecer.
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Conforme una empresa crece, también aumenta la complejidad operativa: facturación, seguimiento de pagos, control documental, cuentas por cobrar, proveedores y procesos administrativos internos. Sin una estructura adecuada, los errores comienzan a acumularse y terminan afectando flujo de efectivo, control financiero y atención al cliente.
          </p>
          <p className="font-sans text-[16px] font-semibold text-primary">
            Nuestro servicio de administración integral ayuda a mantener procesos organizados, seguimiento constante y mayor claridad operativa para el negocio.
          </p>
        </div>
      </section>

      {/* SPLIT IMAGE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center bg-surface px-8 md:px-16 py-16 order-2 md:order-1">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">SOPORTE ADMINISTRATIVO Y CONTROL OPERATIVO</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Procesos administrativos que sostienen el día a día de la empresa
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              Centralizamos facturación, complementos de pago, cuentas por cobrar y documentación operativa para que la información esté ordenada, disponible y lista cuando la empresa la necesita.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop" alt="Equipo administrativo trabajando" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">SERVICIO DE ADMINISTRACIÓN INTEGRAL</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Qué incluye nuestro servicio de administración integral
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
          <p className="label-uppercase text-camhaji-muted mb-4">PLATAFORMA CONTPAQi FACTURACIÓN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Procesos administrativos respaldados por una plataforma líder en México.
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            Trabajamos con CONTPAQi Facturación, uno de los sistemas administrativos y de facturación más utilizados en México e integrado directamente con las disposiciones vigentes del SAT. Esto nos permite mantener procesos de facturación y control administrativo con mayor precisión, trazabilidad y compatibilidad documental, facilitando revisiones, conciliaciones y seguimiento operativo para nuestros clientes.
          </p>
        </div>
      </section>

      {/* FULL-BLEED BAND */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1600&h=800&fit=crop" alt="Oficina empresarial moderna" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">ADMINISTRACIÓN INTEGRAL PARA EMPRESAS EN CANCÚN</p>
          <p className="font-sans font-bold text-white mb-5" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Un solo equipo para mantener tu operación organizada
          </p>
          <p className="font-sans text-white/70 max-w-[620px] mx-auto" style={{ fontSize: "clamp(15px, 1.5vw, 17px)", lineHeight: 1.6 }}>
            Nuestro objetivo es ayudar a que la operación administrativa de cada empresa funcione con mayor orden, seguimiento y control, permitiendo que empresarios y directivos puedan enfocarse en el crecimiento del negocio.
          </p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[820px] mx-auto">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.4vw, 28px)", lineHeight: 1.5 }}>
            "Camhaji se encarga de toda la parte administrativa: facturas, cobranza y documentación. Nosotros nos dedicamos a operar."
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">Dirección general, empresa de servicios · Cancún, QR</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">ADMINISTRACIÓN INTEGRAL — PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Sobre administración integral
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
                <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: openFaq === i ? "500px" : "0", opacity: openFaq === i ? 1 : 0 }}>
                  <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceExtras
        article={blogByService.facturacion}
        related={relatedByService.facturacion}
        serviceLabel="Administración"
      />

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">CONTRATA TU SERVICIO DE ADMINISTRACIÓN EN CANCÚN</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu administración.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos cómo opera tu empresa y qué procesos administrativos necesitas centralizar.
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