import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { SEO } from "@/components/SEO";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const retosFiscales = [
  {
    title: "Facturación de estimaciones, anticipos y avances de obra",
    desc: "Las constructoras operan mediante estimaciones, anticipos y avances parciales de obra, conceptos que pueden tener tratamientos fiscales distintos en materia de IVA e ISR. Una clasificación incorrecta puede generar diferencias detectadas por la autoridad y derivar en recargos, observaciones o contingencias fiscales.",
  },
  {
    title: "Servicios parciales de construcción exentos de IVA",
    desc: "Determinados servicios parciales de construcción destinados a inmuebles para casa habitación pueden ubicarse dentro de los supuestos de exención de IVA establecidos por la legislación fiscal aplicable. Sin embargo, su correcta aplicación requiere contratos adecuados, soporte documental y una correcta identificación de la naturaleza real del servicio. Una interpretación o documentación incorrecta puede generar diferencias fiscales importantes en revisiones posteriores.",
  },
  {
    title: "Deducción de materiales, maquinaria y activos de obra",
    desc: "Materiales, herramientas, maquinaria y equipo de construcción pueden tener tratamientos fiscales y porcentajes de deducción distintos dependiendo de su naturaleza y uso dentro de la operación. Un control contable inadecuado puede impactar directamente en la carga fiscal de la empresa.",
  },
  {
    title: "Nómina de trabajadores por obra y seguridad social",
    desc: "La industria de la construcción frecuentemente opera con trabajadores eventuales, personal por proyecto y esquemas de obra determinada, lo que implica particularidades en cálculo de nómina, cuotas IMSS, prestaciones y obligaciones de seguridad social. Una administración incorrecta puede generar diferencias importantes en revisiones laborales o de seguridad social.",
  },
  {
    title: "Cumplimiento de obligaciones estatales y avisos de obra",
    desc: "Además de las obligaciones federales, las constructoras deben cumplir con disposiciones estatales relacionadas con el Impuesto Sobre Nómina (ISN), avisos de inicio de obra, seguimiento administrativo y control documental ante autoridades locales. El cumplimiento oportuno y correcto de estas obligaciones permite mantener orden operativo en cada proyecto y reducir riesgos de multas, diferencias o requerimientos posteriores.",
  },
];

const loQueHacemos: { title: string; desc: string }[] = [
  {
    title: "Contabilidad adaptada al ciclo operativo de cada obra",
    desc: "Procesos contables alineados al avance real de los proyectos, tipos de contrato y dinámica financiera propia del sector construcción.",
  },
  {
    title: "Control de costos directos e indirectos por proyecto",
    desc: "Registro y supervisión de costos de obra, materiales, maquinaria, subcontratos y gastos relacionados con cada proyecto para mantener mayor control financiero y operativo.",
  },
  {
    title: "Facturación de estimaciones, anticipos y complementos de pago",
    desc: "Administración y control de CFDI relacionados con avance de obra, estimaciones, anticipos y complementos, considerando los criterios fiscales aplicables al sector construcción.",
  },
  {
    title: "Declaraciones fiscales y cumplimiento periódico",
    desc: "Presentación y seguimiento de obligaciones fiscales mensuales y anuales relacionadas con la operación de constructoras y empresas vinculadas al sector.",
  },
  {
    title: "Administración de nómina y obligaciones en materia de seguridad social de obra",
    desc: "Control de nómina para personal eventual, trabajadores por proyecto y empleados de planta, incluyendo movimientos IMSS, cálculo de cuotas y cumplimiento de obligaciones laborales.",
  },
];

const faqs = [
  { q: "¿Qué régimen fiscal utilizan normalmente las constructoras en México?", a: "La mayoría de las constructoras operan bajo el Régimen General de Personas Morales. En ciertos casos, empresas o prestadores de servicios relacionados con construcción pueden tributar bajo otros esquemas, dependiendo de su estructura operativa, nivel de ingresos y actividad específica. La correcta elección y administración del régimen fiscal es clave para mantener cumplimiento y eficiencia fiscal en la operación." },
  { q: "¿Cómo se administran los costos de obra en contabilidad?", a: "Los costos de construcción normalmente se clasifican en directos e indirectos y requieren control por proyecto, etapa o contrato. Materiales, maquinaria, subcontratos, mano de obra y gastos operativos deben registrarse y documentarse correctamente para reflejar el avance real de cada obra. Un adecuado control de costos permite mantener mayor claridad financiera y evitar diferencias fiscales posteriores." },
  { q: "¿Las constructoras deben realizar retenciones a subcontratistas?", a: "Dependiendo del tipo de servicio contratado y de la operación realizada, las empresas constructoras pueden estar obligadas a efectuar retenciones fiscales relacionadas con ISR e IVA en operaciones con subcontratistas y prestadores de servicios. La correcta aplicación de estas obligaciones es fundamental para evitar contingencias fiscales y responsabilidades solidarias para la empresa contratante." },
  { q: "¿Cómo se manejan los trabajadores eventuales y por obra ante IMSS?", a: "El sector construcción frecuentemente trabaja con personal eventual o contratado por proyecto, lo que implica movimientos constantes de altas, bajas y modificaciones salariales ante IMSS. La correcta administración de nómina y seguridad social resulta indispensable para evitar diferencias en cuotas patronales, observaciones en auditorías y contingencias laborales." },
  { q: "¿Qué riesgos existen cuando la contabilidad de una constructora no se administra correctamente?", a: "Una administración deficiente puede generar diferencias fiscales, deducciones improcedentes, errores en estimaciones, problemas de flujo de efectivo, inconsistencias en seguridad social y observaciones por parte de SAT o IMSS. Debido a la complejidad operativa del sector, las constructoras requieren procesos contables y administrativos con seguimiento especializado y control constante." },
];

export default function SectorConstruccionC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <SEO title={`Contabilidad para Constructoras en Cancún | Camhaji`} description={`Despacho contable especializado en el sector construcción en Cancún y Riviera Maya. Estimaciones, IVA, retenciones y CONTPAQi.`} path="/version-c/sectores/construccion" />
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop" alt="Construcción en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/95 via-camhaji-base/60 to-camhaji-base/30" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 pt-32 w-full max-w-[1200px] mx-auto">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span><span>Sectores</span>
            <span className="text-white/15 mx-2">/</span><span>Construcción</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">CONTABILIDAD PARA CONSTRUCTORAS EN CANCÚN</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Contabilidad especializada<br />para empresas de construcción.
          </h1>
          <div className="font-sans text-white/50 mt-6 max-w-[640px] space-y-4" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            <p>La operación contable y fiscal de una constructora requiere mucho más que registros administrativos tradicionales. Estimaciones, anticipos, subcontratistas, control de obra y obligaciones de seguridad social generan procesos y riesgos específicos del sector.</p>
            <p>En Camhaji Consultores trabajamos con empresas de construcción y servicios relacionados en Cancún y Riviera Maya, brindando acompañamiento contable, administrativo y fiscal adaptado a la realidad operativa de cada proyecto.</p>
          </div>
        </div>
      </section>

      {/* POR QUÉ ESPECIALIZADA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">SECTOR CONSTRUCCIÓN EN QUINTANA ROO</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            ¿Por qué la construcción necesita contabilidad especializada?
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            La contabilidad de una constructora funciona de forma distinta a la de la mayoría de las empresas. Los ingresos pueden depender de estimaciones de avance, los costos se acumulan por etapas y los proyectos requieren control financiero constante durante meses o incluso años.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Además, la operación involucra obligaciones específicas relacionadas con subcontratistas, retenciones, REPSE, SIROC, cuotas de seguridad social y documentación de obra, áreas donde una mala administración puede generar diferencias importantes ante SAT, Gobierno Estatal (SATQ), IMSS o clientes.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            Contamos con experiencia trabajando con constructoras, ingenierías y prestadores de servicios relacionados con obra en Cancún y Riviera Maya, entendiendo las particularidades operativas y fiscales del sector construcción en la región.
          </p>
        </div>
      </section>

      {/* SPLIT IMAGE — OBRA COSTERA */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div>
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&h=800&fit=crop" alt="Obra de construcción en zona costera" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">CONTABILIDAD ESPECIALIZADA EN OBRA</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Conocemos el ciclo de obra desde los cimientos hasta la entrega
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              Anticipos, estimaciones, subcontratistas, trabajadores eventuales. Cada etapa tiene implicaciones contables y fiscales que solo se manejan bien con experiencia en el sector.
            </p>
          </div>
        </div>
      </section>

      {/* RETOS FISCALES */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">RETOS FISCALES DEL SECTOR CONSTRUCCIÓN</p>
          <h2 className="font-sans font-bold text-white mb-16" style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Los retos fiscales del sector construcción en México
          </h2>
          <div className="space-y-10">
            {retosFiscales.map((r, i) => (
              <div key={i} className="border-l-2 border-camhaji-accent/40 pl-6">
                <h3 className="font-sans font-bold text-white text-lg mb-3">{r.title}</h3>
                <p className="font-sans text-sm font-light text-white/55 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LO QUE HACEMOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">SERVICIOS CONTABLES PARA CONSTRUCTORAS</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Costos de obra, retenciones y declaraciones: contabilidad completa para constructoras en Cancún
          </h2>
          <div className="border-t border-border-subtle">
            {loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-6 border-b border-border-subtle hover:translate-x-2 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2.5" />
                <div>
                  <p className="font-sans font-semibold text-[16px] text-camhaji-text leading-snug mb-1.5">{item.title}</p>
                  <p className="font-sans text-[14px] font-light text-camhaji-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA REGIONAL */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CONSTRUCTORAS EN CANCÚN Y RIVIERA MAYA</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Experiencia en uno de los sectores más complejos de la región
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            La industria de la construcción en Cancún y Riviera Maya opera bajo dinámicas muy particulares: desarrollos turísticos, obra civil, proyectos inmobiliarios, subcontratación especializada y estructuras operativas con alto volumen administrativo y fiscal.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Además de las obligaciones federales habituales, las constructoras enfrentan revisiones relacionadas con estimaciones, control de obra, seguridad social, REPSE, SIROC, retenciones y cumplimiento estatal, áreas donde una administración deficiente puede generar contingencias importantes.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            En Camhaji Consultores contamos con experiencia trabajando con constructoras, ingenierías y empresas relacionadas con obra en Quintana Roo, entendiendo tanto las particularidades fiscales del sector como la operación real de los proyectos.
          </p>
          <p className="font-sans font-semibold text-primary mt-8">No aprendemos con tu empresa. Llegamos con experiencia.</p>
        </div>
      </section>

      {/* FULL-BLEED BAND — DESARROLLO RIVIERA MAYA */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&h=800&fit=crop" alt="Desarrollo inmobiliario en Riviera Maya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">CONTADORES PARA CONSTRUCTORAS EN QUINTANA ROO</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Años de experiencia con constructoras en Cancún y la Riviera Maya.
          </p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.08] leading-none block -mb-8" aria-hidden="true">"</span>
          <blockquote className="font-serif italic text-white/80 mb-8" style={{ fontSize: "clamp(18px, 2.5vw, 28px)", lineHeight: 1.5 }}>
            "{testimonials.elias.short}"
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">{testimonials.elias.author} · {testimonials.elias.role}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">CONSTRUCTORAS EN CANCÚN — PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Preguntas frecuentes: contabilidad para constructoras en Cancún
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
        <p className="label-uppercase text-white/40 mb-6">CONTRATA CONTABILIDAD PARA TU CONSTRUCTORA</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          ¿Tienes una empresa constructora en Cancún o Quintana Roo?
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos cómo está tu contabilidad hoy. Si hay problemas, te decimos cuáles son y cómo resolverlos. Si está en orden, te decimos cómo mantenerla así.
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
