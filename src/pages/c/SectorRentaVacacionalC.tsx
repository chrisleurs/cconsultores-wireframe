import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FaqJsonLd, ServiceJsonLd } from "@/components/ServiceExtras";
import { Phone } from "lucide-react";

const areasClave = [
  {
    title: "Control de ingresos provenientes de plataformas digitales",
    desc: "Seguimiento y conciliación de ingresos relacionados con Airbnb, Booking y otras plataformas de hospedaje.",
  },
  {
    title: "Cumplimiento fiscal e impuestos aplicables",
    desc: "Administración de obligaciones relacionadas con ISR, IVA, retenciones de plataformas e impuestos estatales vinculados con hospedaje y prestación de servicios.",
  },
  {
    title: "Facturación CFDI y control documental",
    desc: "Emisión y control de CFDI relacionados con hospedaje, comisiones, administración y servicios vinculados con la operación.",
  },
  {
    title: "Administración operativa y flujo de efectivo",
    desc: "Seguimiento administrativo de ingresos, pagos, comisiones y movimientos relacionados con la operación diaria de propiedades vacacionales.",
  },
  {
    title: "Organización financiera para propietarios y administradores",
    desc: "Estructura administrativa y contable orientada a mantener claridad sobre rentabilidad, ingresos y obligaciones fiscales de cada propiedad o grupo de propiedades.",
  },
];

const faqs = [
  {
    q: "¿Las plataformas como Airbnb o Booking ya pagan todos mis impuestos?",
    a: "No necesariamente. Aunque algunas plataformas realizan determinadas retenciones fiscales, el contribuyente sigue siendo responsable de cumplir correctamente con sus obligaciones fiscales federales y estatales conforme a su situación específica. Cada operación puede implicar ISR, IVA, retenciones e impuestos estatales relacionados con hospedaje, por lo que resulta importante mantener control administrativo y fiscal adecuado.",
  },
  {
    q: "¿Debo emitir CFDI si recibo ingresos por plataformas digitales?",
    a: "Dependiendo de la estructura fiscal y tipo de operación, puede existir obligación de emitir CFDI por los ingresos relacionados con hospedaje o servicios vinculados con la renta vacacional. Además de emitir correctamente la facturación, es importante mantener conciliación entre depósitos bancarios, plataformas y declaraciones fiscales.",
  },
  {
    q: "¿Qué pasa si tengo varias propiedades en plataformas digitales?",
    a: "Conforme aumenta el número de propiedades, también crece la complejidad administrativa y fiscal de la operación: ingresos variables, pagos a proveedores, mantenimiento, comisiones, impuestos y control financiero por propiedad. Contar con procesos administrativos y contables organizados ayuda a mantener claridad sobre rentabilidad y cumplimiento fiscal.",
  },
  {
    q: "¿Conviene RESICO para propietarios o administradores de rentas vacacionales?",
    a: "Para personas físicas esto NO es posible, ya que el RESICO es incompatible con el Régimen de Personas Físicas con Actividad Empresarial a través de Plataformas Tecnológicas. Sin embargo, su conveniencia depende del volumen de ingresos, estructura operativa, cantidad de propiedades, nivel de gastos y tipo de actividad realizada, por lo que cada caso debe analizarse individualmente.",
  },
  {
    q: "¿Las rentas vacacionales pagan IVA e impuesto sobre hospedaje?",
    a: "Las operaciones relacionadas con hospedaje pueden generar obligaciones tanto federales como estatales, incluyendo IVA e impuestos locales sobre hospedaje conforme a la legislación aplicable en Quintana Roo. La correcta determinación y administración de estos impuestos es fundamental para evitar diferencias fiscales y contingencias futuras.",
  },
  {
    q: "¿Qué sucede si recibo pagos en dólares o desde el extranjero?",
    a: "Las operaciones con huéspedes extranjeros y pagos internacionales requieren control adecuado de ingresos, tipo de cambio, conciliaciones bancarias y cumplimiento fiscal correspondiente. Mantener registro y administración correcta de estos movimientos ayuda a evitar inconsistencias fiscales y facilita el control financiero de la operación.",
  },
  {
    q: "¿Necesito darme de alta ante SAT y autoridades estatales?",
    a: "Sí. Las actividades relacionadas con renta vacacional normalmente requieren inscripción y cumplimiento ante autoridades fiscales federales y, en ciertos casos, estatales, dependiendo del tipo de operación y estructura utilizada. Formalizar correctamente la actividad desde el inicio ayuda a operar con mayor tranquilidad y reducir riesgos futuros.",
  },
];

export default function SectorRentaVacacionalC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO
        title="Contabilidad para Rentas Vacacionales en Cancún | Airbnb y Booking | Camhaji"
        description="Contabilidad y administración para propietarios y hosts de rentas vacacionales en Cancún y Riviera Maya. Airbnb, Booking, ISR, IVA, ISH, CFDI y plataformas digitales."
        path="/version-c/sectores/renta-vacacional"
      />
      <ServiceJsonLd
        name="Contabilidad para Rentas Vacacionales en Cancún"
        description="Servicios contables, fiscales y administrativos para propietarios y administradores de rentas vacacionales en plataformas digitales como Airbnb y Booking en Cancún y Riviera Maya."
        url="https://cconsultores-wireframe.lovable.app/version-c/sectores/renta-vacacional"
        serviceType="Vacation rental accounting and tax compliance"
      />
      <FaqJsonLd faqs={faqs} />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1600&h=900&fit=crop"
          alt="Villa de renta vacacional frente al mar en Cancún"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/95 via-camhaji-base/60 to-camhaji-base/30" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 pt-32 w-full max-w-[1200px] mx-auto">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Sectores</span>
            <span className="text-white/15 mx-2">/</span><span>Renta Vacacional</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">CONTABILIDAD Y ADMINISTRACIÓN PARA RENTAS VACACIONALES EN CANCÚN</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Control fiscal y operativo<br />para propiedades en<br />plataformas digitales
          </h1>
          <p className="font-sans text-white/50 mt-6 max-w-[620px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            Administrar propiedades en Airbnb, Booking y otras plataformas implica mucho más que recibir reservaciones. Ingresos variables, comisiones de plataformas, IVA, ISH, CFDI, pagos internacionales, administración operativa y obligaciones fiscales requieren procesos claros y seguimiento constante para mantener orden y rentabilidad.
          </p>
        </div>
      </section>

      {/* INTRO CAMHAJI */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CAMHAJI PARA RENTAS VACACIONALES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Orden financiero, cumplimiento fiscal y operación organizada
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            En Camhaji Consultores ayudamos a propietarios, hosts y administradores de rentas vacacionales a mantener control financiero, cumplimiento fiscal y operación administrativa organizada.
          </p>
        </div>
      </section>

      {/* MERCADO QROO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="flex items-center bg-surface px-8 md:px-16 py-16 order-2 md:order-1">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">RENTAS VACACIONALES EN QUINTANA ROO</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Una industria que creció rápido y exige estructura administrativa
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-5">
              El mercado de renta vacacional en Cancún y Riviera Maya evolucionó rápidamente durante los últimos años. Muchos propietarios y administradores comenzaron operando de forma independiente y hoy manejan múltiples propiedades, altos volúmenes de reservaciones y operaciones constantes a través de plataformas digitales.
            </p>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed mb-5">
              Conforme crece la operación, también aumentan las obligaciones relacionadas con impuestos, facturación, control de ingresos, administración de plataformas y cumplimiento estatal y federal.
            </p>
            <p className="font-sans text-[15px] font-semibold text-camhaji-text leading-relaxed">
              Sin una estructura administrativa adecuada, el crecimiento operativo puede convertirse rápidamente en desorden financiero y riesgos fiscales.
            </p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img
            src="https://images.unsplash.com/photo-1568084680786-a84f91d1153c?w=1200&h=900&fit=crop"
            alt="Departamento moderno en Cancún en plataforma de renta vacacional"
            className="w-full h-full object-cover aspect-[4/3]"
          />
        </div>
      </section>

      {/* ÁREAS CLAVE */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">ÁREAS CLAVE PARA RENTAS VACACIONALES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Qué cubrimos en tu operación de hospedaje
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {areasClave.map((item) => (
              <div key={item.title}>
                <div className="w-6 h-px bg-primary mb-5" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{item.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA EN EL SECTOR */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">EXPERIENCIA EN EL SECTOR DE RENTA VACACIONAL</p>
          <h2 className="font-sans font-bold text-white mb-8" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Entendemos cómo opera el mercado turístico de Cancún y Riviera Maya
          </h2>
          <p className="font-sans text-white/60 leading-relaxed mb-6" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
            Trabajamos con propietarios, administradores y operadores de inmuebles destinados a renta vacacional en una de las regiones con mayor actividad turística del país.
          </p>
          <p className="font-sans text-white/60 leading-relaxed" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
            Conocemos las dinámicas relacionadas con plataformas digitales, operación diaria de propiedades, ingresos variables, huéspedes extranjeros y obligaciones fiscales específicas del sector.
          </p>
        </div>
      </section>

      {/* FULL-BLEED BAND — PROMESA */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&h=800&fit=crop"
          alt="Vista aérea de zona hotelera de Cancún"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[820px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">NUESTRO ENFOQUE</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            El objetivo no es solo cumplir. Es ayudarte a operar con orden, claridad y tranquilidad.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">RENTAS VACACIONALES — PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Renta vacacional en Cancún y Riviera Maya
          </h2>
          <div className="border-t border-border-subtle">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-border-subtle">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  aria-expanded={openFaq === i}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-sans text-xs text-camhaji-muted/40 tracking-[0.1em]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-sans font-semibold text-[17px] text-camhaji-text group-hover:text-primary transition-colors">{f.q}</span>
                  </div>
                  <span
                    className="font-sans text-xl text-camhaji-muted/40 flex-shrink-0 ml-4 transition-transform duration-300"
                    style={{ transform: openFaq === i ? "rotate(45deg)" : "rotate(0)" }}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: openFaq === i ? "500px" : "0", opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">CONTRATA TU CONTADOR PARA RENTA VACACIONAL EN CANCÚN</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu operación.
        </h2>
        <p className="font-sans text-white/55 max-w-[520px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos cuántas propiedades manejas, en qué plataformas operas y qué tienes hoy bajo control. Hacemos un diagnóstico sin costo para definir el siguiente paso.
        </p>
        <a
          href="/version-c/contacto"
          className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5"
        >
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