import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const retosFiscales = [
  {
    title: "Facturación de estimaciones y anticipos",
    desc: "Las constructoras facturan por avance de obra, anticipos y estimaciones. Cada uno tiene un tratamiento fiscal distinto en IVA e ISR. Un error de clasificación genera diferencias que el SAT detecta — y cobra con recargos.",
  },
  {
    title: "Retenciones a subcontratistas",
    desc: "Cuando contratas subcontratistas para obra, la ley te obliga a retenerles el 6% de IVA sobre los servicios de construcción. Si no lo haces correctamente, la responsabilidad es tuya — no del subcontratista. Es uno de los errores más costosos del sector.",
  },
  {
    title: "Deducción de materiales y activos de obra",
    desc: "Materiales, herramientas, maquinaria y equipo de construcción tienen formas de deducción distintas entre sí. Deducir mal significa pagar más impuestos de lo necesario o exponer tu empresa a observaciones en una revisión del SAT.",
  },
  {
    title: "Nómina de trabajadores eventuales",
    desc: "La construcción trabaja con personal por obra y por tiempo determinado. Sus prestaciones son proporcionales a los días trabajados. Sus cuotas al IMSS e Infonavit se calculan de una forma diferente al empleado de planta. Equivocarse aquí genera multas del IMSS y contingencias laborales.",
  },
];

const loQueHacemos = [
  "Contabilidad mensual adaptada al ciclo de obra y tipo de contrato",
  "Registro y control de costos por proyecto (directos e indirectos)",
  "Facturación de estimaciones, anticipos y complementos de pago",
  "Retenciones correctas a subcontratistas (ISR e IVA) para que la responsabilidad no caiga sobre ti",
  "Declaraciones mensuales y anuales del sector construcción",
  "Nómina de trabajadores eventuales y de planta con altas y bajas en IMSS",
  "Revisión de CFDI de proveedores y materiales para evitar deducciones rechazadas",
  "Respuesta ante requerimientos del SAT relacionados con el sector",
];

const faqs = [
  { q: "¿Qué régimen fiscal usan las constructoras en México?", a: "Las constructoras que operan como personas morales (SA de CV, SRL) usan el Régimen General de Personas Morales. Las micro-constructoras o contratistas persona física pueden tributar en RESICO si sus ingresos anuales no superan $35 millones. El régimen correcto depende de tu estructura legal y volumen de operaciones — te ayudamos a identificarlo." },
  { q: "¿Cómo se llevan los costos de obra en contabilidad?", a: "Los costos de obra se clasifican en directos (materiales, mano de obra de obra) e indirectos (administración, supervisión, maquinaria) y se registran por proyecto. Se reconocen como gasto conforme avanza la obra o al momento de la estimación correspondiente. Un registro incorrecto puede generar pagos excesivos de impuestos o deducciones rechazadas." },
  { q: "¿Las constructoras deben retener IVA a sus subcontratistas?", a: "Sí. Cuando contratas servicios de construcción a un subcontratista, debes retener el 6% de IVA sobre esos servicios y enterarlo directamente al SAT. Esta retención aplica a los servicios de construcción, no a la compra de materiales. No hacerlo correctamente pone la responsabilidad en tu empresa." },
  { q: "¿Cómo se manejan los trabajadores eventuales en el IMSS?", a: "Los trabajadores eventuales deben darse de alta en el IMSS antes de iniciar labores en obra y darse de baja al terminar. El patrón paga cuotas proporcionales a los días trabajados. No hacerlo genera multas del IMSS y contingencias laborales que aparecen al momento del finiquito." },
  { q: "¿Qué pasa si no llevo bien la contabilidad de mi constructora?", a: "Una contabilidad mal llevada en construcción puede resultar en deducciones rechazadas por el SAT, pago excesivo de impuestos por costeo incorrecto, multas por trabajadores sin registro en IMSS y, en una auditoría, créditos fiscales con recargos sobre varios ejercicios." },
];

export default function SectorConstruccionC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
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
          <p className="label-uppercase text-camhaji-accent/70 mb-6">ESPECIALIZACIÓN PRINCIPAL</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(40px, 7vw, 88px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Contabilidad para<br />Constructoras en Cancún
          </h1>
          <p className="font-sans text-white/50 mt-6 max-w-[560px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            La contabilidad de una constructora no funciona igual que la de cualquier otra empresa. Si tu contador no conoce el sector, tarde o temprano lo vas a notar — y no de buena manera.
          </p>
        </div>
      </section>

      {/* POR QUÉ ESPECIALIZADA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">EL SECTOR</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Por qué la construcción necesita contabilidad especializada
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            Una empresa de servicios factura, cobra y declara con cierta regularidad. Una constructora, no. Sus ingresos entran por estimaciones que no siempre reflejan el avance real. Sus costos se acumulan por etapas durante meses. Sus subcontratistas generan obligaciones de retención que la ley te pone a ti como responsable.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            Nosotros ya trabajamos con constructoras en Cancún y la Riviera Maya. Conocemos las particularidades del mercado local, los criterios que el SAT aplica al sector construcción en auditorías, y los errores que se repiten con más frecuencia. Llegamos con experiencia.
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
            <p className="label-uppercase text-camhaji-muted mb-4">ESPECIALIZACIÓN</p>
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
          <p className="label-uppercase text-white/30 mb-4">RETOS FISCALES</p>
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
          <p className="label-uppercase text-camhaji-muted mb-4">LO QUE HACEMOS</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Lo que Camhaji hace por tu empresa constructora en Cancún
          </h2>
          <div className="border-t border-border-subtle">
            {loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-4 py-4 border-b border-border-subtle hover:translate-x-2 transition-transform duration-200">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                <span className="font-sans text-[15px] text-camhaji-text leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCIA REGIONAL */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">EXPERIENCIA REGIONAL</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Amplia experiencia en el sector construcción en Quintana Roo
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
            El sector construcción en Cancún y la Riviera Maya tiene dinámicas propias: proyectos turísticos, desarrollos inmobiliarios, obra civil, obra comercial. El volumen de operaciones, los tipos de contrato y el perfil de los subcontratistas son distintos a los de otras regiones del país.
          </p>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            Llevamos años trabajando con empresas de este sector en la región. Conocemos las características del mercado local y los criterios que el SAT aplica en revisiones al sector construcción en Quintana Roo.
          </p>
          <p className="font-sans font-semibold text-primary mt-8">No aprendemos contigo. Llegamos con experiencia.</p>
        </div>
      </section>

      {/* FULL-BLEED BAND — DESARROLLO RIVIERA MAYA */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&h=800&fit=crop" alt="Desarrollo inmobiliario en Riviera Maya" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">QUINTANA ROO</p>
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
            "Llevábamos meses sin claridad en los costos de obra. Camhaji ordenó todo, separó cada proyecto y por primera vez tuvimos números que realmente reflejaban lo que estaba pasando en la empresa."
          </blockquote>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/40">Director General, empresa constructora · Cancún, QR</p>
          <p className="font-sans text-xs text-white/20 mt-4 italic">* Testimonio de referencia — pendiente validación</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">PREGUNTAS FRECUENTES</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-14" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
            Contabilidad para constructoras en Cancún
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
        <p className="label-uppercase text-white/40 mb-6">¿TIENES UNA EMPRESA CONSTRUCTORA EN CANCÚN?</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tus proyectos.
        </h2>
        <p className="font-sans text-white/55 max-w-[480px] mx-auto mb-12" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos cómo está tu contabilidad hoy. Si hay problemas, te decimos cuáles son y cómo resolverlos.
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
