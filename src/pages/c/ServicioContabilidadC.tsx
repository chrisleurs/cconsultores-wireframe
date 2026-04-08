import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const proceso = [
  { num: "01", title: "Solicitud de documentación", desc: "A principios de cada mes te pedimos la documentación del periodo anterior por el canal que tú elijas: correo electrónico o WhatsApp. Nos adaptamos a cómo trabaja tu empresa, no al revés.", days: "Día 1–5" },
  { num: "02", title: "Revisión y validación", desc: "Revisamos que la documentación esté completa y correcta antes de registrar cualquier cosa. Un error en el origen genera problemas en cascada — lo prevenimos desde aquí.", days: "Día 5–10" },
  { num: "03", title: "Registro contable", desc: "Registramos todas las operaciones del periodo conforme a la normatividad contable vigente. Nada queda fuera, nada se registra de más.", days: "Día 10–14" },
  { num: "04", title: "Conciliación bancaria", desc: "Comparamos el estado de cuenta con las facturas y comprobantes. Si hay una diferencia, la encontramos y la explicamos antes de seguir.", days: "Día 14–17" },
  { num: "05", title: "Cálculo de impuestos y declaraciones", desc: "Calculamos el ISR, IVA y cualquier otra obligación del periodo. Llenamos las declaraciones correspondientes y las revisamos internamente antes de presentarlas.", days: "Día 17–20" },
  { num: "06", title: "Envío al cliente para pago", desc: "Te enviamos el resumen del periodo con el monto a pagar, las declaraciones y cualquier observación relevante. Tú autorizas y pagas. Sin sorpresas de último minuto.", days: "Día 20–25" },
];

const gestionAdmin = [
  "Tesorería centralizada y control de flujo de efectivo",
  "Gestiones y trámites ante autoridades (SAT, IMSS, Infonavit)",
  "Cuentas por cobrar y cuentas por pagar",
  "Recursos humanos operativos",
];

const paraQuien = [
  { title: "Empresas del sector construcción en Cancún", desc: "Costos de obra, subcontratistas, estimaciones y retenciones. Tenemos página dedicada con detalle completo.", href: "/version-c/sectores/construccion" },
  { title: "Empresas de comercialización en Quintana Roo", desc: "Control de inventarios, facturación a clientes, cuentas por cobrar y por pagar para distribuidoras y comercializadoras.", href: "/version-c/sectores/comercial" },
  { title: "Pymes y medianas empresas en crecimiento", desc: "Si tu empresa está creciendo y la contabilidad informal ya no alcanza, es el momento de hacer el cambio.", href: "/version-c/contacto" },
];

const faqs = [
  { q: "¿Qué incluye el servicio de contabilidad mensual?", a: "Solicitud y revisión de documentos, registro contable completo, conciliación bancaria, cálculo de impuestos, llenado de declaraciones y envío al cliente para autorizar el pago. Nos adaptamos al canal de comunicación que prefiere el cliente — correo o WhatsApp." },
  { q: "¿Por qué tercerizar la contabilidad de mi empresa?", a: "Tercerizar la contabilidad significa tener a un equipo especializado que conoce la normatividad vigente, que detecta errores antes de que lleguen al SAT y que te explica lo que pasa con tus números. Es más económico que un contador interno con las mismas capacidades y elimina el riesgo de errores por falta de actualización." },
  { q: "¿Atienden empresas fuera de Cancún?", a: "Sí. Trabajamos con empresas en todo Quintana Roo. Nos adaptamos al canal de comunicación del cliente — correo o WhatsApp — por lo que la distancia no es un obstáculo." },
];

export default function ServicioContabilidadC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop" alt="Contabilidad profesional" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.86]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[800px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Servicios</span>
            <span className="text-white/15 mx-2">/</span><span>Contabilidad</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">CONTABILIDAD EMPRESARIAL EN CANCÚN</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}>
            Contabilidad y Administración para tu Empresa en Cancún
          </h1>
          <p className="font-sans text-white/50 max-w-[560px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>
            Muchos empresarios llegan con la misma frase: "Sé que algo está mal, pero no sé qué." El resultado es siempre el mismo: incertidumbre y riesgo fiscal.
          </p>
        </div>
      </section>

      {/* ADAPTABILIDAD */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CONTABILIDAD PARA PYMES EN QUINTANA ROO</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Un servicio que se adapta a tu empresa
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-4">
            Atendemos desde negocios en etapa temprana hasta empresas medianas con operaciones complejas. Tenemos experiencia particular en el sector construcción y en empresas de comercialización en Quintana Roo.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            El proceso es el mismo en todos los casos: ordenado, mensual y transparente. Lo que cambia es la profundidad y el volumen de operaciones — no el nivel de atención.
          </p>
        </div>
      </section>

      {/* PROCESO MENSUAL */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">PROCESO DE CONTABILIDAD MENSUAL</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Así es nuestro proceso contable mensual
          </h2>
          <div className="border-t border-white/[0.08]">
            {proceso.map((p) => (
              <div key={p.num} className="flex items-start gap-6 py-6 border-b border-white/[0.06] transition-transform duration-300 hover:translate-x-2.5 cursor-default">
                <span className="font-sans text-sm text-white/20 mt-1 w-8 flex-shrink-0">{p.num}</span>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <h3 className="font-sans font-bold text-white text-lg">{p.title}</h3>
                    <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-camhaji-accent/60 flex-shrink-0">{p.days}</span>
                  </div>
                  <p className="font-sans text-sm font-light text-white/50 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL-BLEED BAND — CANCÚN */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1510097467424-192d713fd8b2?w=1600&h=800&fit=crop" alt="Zona hotelera de Cancún vista aérea" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">CONTADORES EN CANCÚN Y RIVIERA MAYA</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Más de una década ordenando la contabilidad de empresas en la región.
          </p>
        </div>
      </section>

      {/* GESTIÓN ADMINISTRATIVA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">ADMINISTRACIÓN EMPRESARIAL EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Gestión administrativa completa para tu negocio
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-10">
            El servicio contable puede incluir gestión administrativa si tu empresa lo requiere:
          </p>
          <div className="border-t border-border-subtle">
            {gestionAdmin.map((item) => (
              <div key={item} className="flex items-start gap-3 py-4 border-b border-border-subtle">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-camhaji-text">{item}</span>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm font-light text-camhaji-muted mt-6 italic">Un solo despacho. Un solo proceso. Todo en orden.</p>
        </div>
      </section>

      {/* SPLIT IMAGE — OFICINA */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div>
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop" alt="Oficina con documentos contables" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">CONTABILIDAD ORDENADA Y TRANSPARENTE</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Orden, proceso y transparencia en cada paso
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              Cada mes seguimos el mismo proceso. Cada número tiene respaldo. Cada declaración se revisa antes de presentarse. Así funciona una contabilidad que protege a tu empresa.
            </p>
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CONTABILIDAD POR SECTOR EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            ¿Para qué tipo de empresas es este servicio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {paraQuien.map((p) => (
              <a key={p.title} href={p.href} className="group bg-white p-8 md:p-10 hover:shadow-lg transition-shadow">
                <div className="w-6 h-px bg-primary mb-5" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed mb-4">{p.desc}</p>
                <span className="label-uppercase text-primary/60 group-hover:text-primary transition-colors">VER DETALLE →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CONTABILIDAD EMPRESARIAL — PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Sobre contabilidad empresarial en Cancún
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

      {/* OTROS SERVICIOS */}
      <section className="bg-surface py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted text-center mb-10">MÁS SERVICIOS CONTABLES EN CANCÚN</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "02", name: "Estrategia Fiscal", desc: "Cumplimiento SAT sin sorpresas.", href: "/version-c/servicios/fiscal" },
              { num: "03", name: "Nómina Empresarial", desc: "CFDI, IMSS e Infonavit con CONTPAQi.", href: "/version-c/servicios/nomina" },
              { num: "04", name: "Facturación CFDI", desc: "Emisión, timbrado y administración de facturas.", href: "/version-c/servicios/facturacion" },
            ].map((s) => (
              <a key={s.num} href={s.href} className="group border border-border-subtle bg-white p-8 flex items-start gap-6 hover:border-primary/30 transition-colors">
                <span className="font-sans font-bold text-[40px] text-primary/10 leading-none" style={{ letterSpacing: "-0.03em" }}>{s.num}</span>
                <div>
                  <h3 className="font-sans font-bold text-camhaji-text text-lg mb-1 group-hover:text-primary transition-colors">{s.name}</h3>
                  <p className="font-sans text-sm font-light text-camhaji-muted">{s.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">CONTRATA TU SERVICIO CONTABLE EN CANCÚN</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu contabilidad.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos cómo está la contabilidad hoy. Si está atrasada, la ponemos al corriente. Si está en orden, te decimos cómo mantenerla así.
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
