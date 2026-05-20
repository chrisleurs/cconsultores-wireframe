import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceExtras, FaqJsonLd, ServiceJsonLd } from "@/components/ServiceExtras";
import { blogByService, relatedByService } from "@/data/serviceLinks";
import { Phone } from "lucide-react";

const proceso = [
  { num: "01", title: "Solicitud, revisión y validación de documentación", desc: "Al inicio de cada mes solicitamos la documentación correspondiente al periodo anterior a través del canal que resulte más cómodo para tu empresa: correo electrónico, WhatsApp o plataformas compartidas. Revisamos que toda la documentación esté completa, correctamente emitida y cumpla con los requisitos fiscales y contables aplicables.", days: "Día 1–5" },
  { num: "02", title: "Registro contable (provisión) y conciliación bancaria", desc: "Registramos las operaciones del periodo y conciliamos movimientos bancarios, facturas y comprobantes para validar que la información financiera refleje correctamente la operación real del negocio. Cualquier diferencia es identificada y aclarada oportunamente.", days: "Día 5–12" },
  { num: "03", title: "Cálculo de impuestos y llenado de declaraciones", desc: "Determinamos impuestos federales y obligaciones fiscales del periodo, incluyendo ISR, IVA y declaraciones correspondientes. Antes de su presentación, toda la información es revisada internamente por nuestro equipo.", days: "Día 12–15" },
  { num: "04", title: "Envío al cliente para pago", desc: "Entregamos un resumen claro del periodo con impuestos a pagar, declaraciones presentadas y observaciones relevantes para la operación. Nuestro objetivo es que cada cierre mensual se realice con orden, claridad y sin sorpresas de último momento.", days: "Día 15–17" },
];

const stats = [
  { num: "10+", label: "Años ordenando contabilidades en Quintana Roo" },
  { num: "4", label: "Pasos definidos cada mes, sin excepciones" },
  { num: "17", label: "Días promedio de ciclo de cierre mensual" },
  { num: "100%", label: "Declaraciones revisadas antes de presentarse" },
];

const gestionAdmin: { title: string; desc: string }[] = [
  { title: "Tesorería y control de flujo de efectivo", desc: "Supervisión de ingresos, egresos y programación de pagos para mantener una administración financiera más clara y organizada." },
  { title: "Gestiones y trámites ante autoridades", desc: "Acompañamiento y atención en trámites ante SAT, IMSS, Infonavit y otras dependencias relacionadas con la operación de la empresa." },
  { title: "Cuentas por cobrar y cuentas por pagar", desc: "Control administrativo de proveedores, clientes, pagos pendientes y seguimiento de cobranza para mejorar la organización financiera del negocio." },
  { title: "Recursos humanos operativos", desc: "Apoyo administrativo en procesos relacionados con personal, incidencias, expedientes, seguimiento operativo y coordinación interna." },
];

const paraQuien = [
  { title: "Construcción, arquitectura e ingeniería", desc: "Experiencia en control administrativo y contable de proyectos de construcción, incluyendo costos de obra, estimaciones, subcontratistas, anticipos, retenciones y control financiero de proyectos.", href: "/version-c/sectores/construccion" },
  { title: "Comercialización y distribución", desc: "Administración y control contable para empresas comercializadoras, incluyendo inventarios, facturación, cuentas por cobrar, cuentas por pagar y seguimiento operativo de flujo comercial.", href: "/version-c/sectores/comercial" },
  { title: "PYMES, restaurantes y empresas en crecimiento", desc: "Ayudamos a empresas que están pasando de una operación informal a una estructura financiera y administrativa más sólida, permitiéndoles crecer con mayor control, orden y claridad financiera.", href: "/version-c/contacto" },
  { title: "Profesionistas independientes y empresas de servicios", desc: "Trabajamos con freelancers, agencias creativas, consultores y asesores inmobiliarios que requieren mayor control administrativo y cumplimiento fiscal en su operación diaria.", href: "/version-c/contacto" },
];

const faqs = [
  { q: "¿Qué incluye el servicio de contabilidad mensual?", a: "Nuestro servicio contempla la recepción y revisión de documentación, registro contable, conciliaciones bancarias, cálculo de impuestos, presentación de declaraciones y envío mensual de información para autorización y pago. Además, mantenemos comunicación constante con nuestros clientes mediante los canales que mejor se adapten a su operación, como correo electrónico, WhatsApp o plataformas compartidas." },
  { q: "¿Por qué tercerizar la contabilidad de mi empresa?", a: "Contar con un despacho especializado permite a las empresas tener acceso a un equipo actualizado en materia contable y fiscal, reducir riesgos de errores y mantener mayor control sobre su información financiera. Además de cumplir con las obligaciones fiscales, nuestro enfoque busca brindar claridad financiera y acompañamiento para la toma de decisiones." },
  { q: "¿Atienden empresas fuera de Cancún?", a: "Sí. Trabajamos con empresas en distintos municipios de Quintana Roo y otras ciudades de México, manteniendo procesos digitales y canales de comunicación eficientes que nos permiten brindar una atención cercana y organizada sin importar la ubicación del cliente." },
];

export default function ServicioContabilidadC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO title={`Contabilidad y Administración en Cancún | Camhaji`} description={`Servicio de contabilidad y administración para empresas en Cancún. Registro mensual, conciliaciones, declaraciones y control administrativo integral.`} path="/version-c/servicios/contabilidad" />
      <ServiceJsonLd
        name="Contabilidad y Administración Empresarial en Cancún"
        description="Servicio mensual de contabilidad para empresas en Cancún y Quintana Roo: registro, conciliaciones, declaraciones y administración."
        url="https://cconsultores-wireframe.lovable.app/version-c/servicios/contabilidad"
        serviceType="Accounting"
      />
      <FaqJsonLd faqs={faqs} />
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
            Muchos empresarios llegan con la misma frase: "Sé que algo está mal, pero no sé qué." Facturas sin registrar, cuentas sin conciliar, declaraciones firmadas sin entender los números. El resultado es siempre el mismo: incertidumbre y riesgo fiscal.
          </p>
        </div>
      </section>

      {/* ADAPTABILIDAD */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CONTABILIDAD PARA PYMES EN QUINTANA ROO</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Para negocios pequeños, pymes en crecimiento y empresas medianas en Quintana Roo
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-4">
            Atendemos desde negocios en etapa temprana hasta empresas medianas con operaciones complejas. Tenemos experiencia particular en el sector construcción y en empresas de comercialización en Quintana Roo.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            El proceso es el mismo en todos los casos: ordenado, mensual y transparente. Lo que cambia es la profundidad y el volumen de operaciones — no el nivel de atención.
          </p>
        </div>
      </section>

      {/* STATS BAR — números grandes, mínimo texto */}
      <section className="bg-surface py-20 px-5 md:px-10 border-y border-border-subtle">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center md:text-left md:px-6 md:border-r md:last:border-r-0 md:border-border-subtle"
            >
              <div
                className="font-serif text-camhaji-base mb-3"
                style={{ fontSize: "clamp(40px, 5.5vw, 68px)", letterSpacing: "-0.03em", lineHeight: 1 }}
              >
                {s.num}
              </div>
              <p className="font-sans text-xs uppercase tracking-[0.12em] text-camhaji-muted leading-relaxed">
                {s.label}
              </p>
            </div>
          ))}
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
            Más que contabilidad: tesorería, CxC, CxP y trámites ante el SAT en un solo equipo
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
            Constructoras, comercializadoras y empresas en expansión: los sectores donde más trabajamos
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

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[820px] mx-auto">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.4vw, 28px)", lineHeight: 1.5 }}>
            "Llevo dos años sin abrir el portal del SAT con miedo. Cada mes recibo el resumen, autorizo el pago y sigo con lo mío. Eso para mí no tiene precio."
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">Director General, empresa de servicios · Cancún, QR</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CONTABILIDAD EMPRESARIAL — PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Lo que más nos preguntan sobre contabilidad para empresas en Cancún
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
        article={blogByService.contabilidad}
        related={relatedByService.contabilidad}
        serviceLabel="Contabilidad"
      />

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">CONTRATA TU SERVICIO CONTABLE EN CANCÚN</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          ¿Tienes la contabilidad al día? Hablemos sin compromiso.
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
