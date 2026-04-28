import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const perfiles = [
  { title: "Comercio y venta de productos", desc: "Tienda de abarrotes, ferretería, papelería, distribuidora pequeña, venta de ropa, tianguis con RFC. Si vendes productos y tienes o deberías tener facturas, aquí te atendemos." },
  { title: "Servicios y talleres", desc: "Mecánico, carpintero, herrero, plomero, electricista, remodelador. Si cobras por tu trabajo y tus clientes te piden factura — o deberían pedírtela —, nosotros nos encargamos de que todo salga correcto." },
  { title: "Restaurantes y food service independiente", desc: "Taquería, lonchería, cafetería, servicio de catering. Si tienes un negocio de alimentos con RFC propio, tienes obligaciones de IVA e ISR que hay que cumplir mensualmente." },
  { title: "Venta en línea", desc: "Mercado Libre, Etsy, tienda en Instagram, Facebook Marketplace. Si recibes pagos por plataformas digitales, esos ingresos son gravados — aunque nadie te lo haya explicado todavía." },
  { title: "Contratistas y constructores persona física", desc: "Si haces obra pequeña, remodelaciones o trabajos de construcción y cobras a tu nombre, tienes obligaciones específicas de facturación, retenciones e ISR que son diferentes a las de otros giros." },
];

const obligaciones = [
  { title: "Declaración mensual de ISR", desc: "El impuesto sobre la renta se calcula y se declara cada mes, basado en lo que cobraste en el periodo. Si estás en RESICO, la tasa va del 1% al 2.5% sobre los ingresos. Si estás en el Régimen de Actividades Empresariales, la tasa es mayor pero tienes más deducciones disponibles." },
  { title: "IVA mensual", desc: "Si vendes productos o servicios gravados con IVA — la mayoría lo están —, tienes que cobrarlo a tus clientes, declararlo al SAT y pagar la diferencia entre lo que cobraste y lo que pagaste a tus proveedores." },
  { title: "Facturación CFDI", desc: "Todo ingreso debe tener su comprobante digital timbrado ante el SAT. Vender sin factura no significa que el ingreso no exista para la autoridad — las plataformas de pago, los depósitos bancarios y los CFDI de proveedores dejan rastro." },
  { title: "Declaración anual", desc: "En abril de cada año se consolida el ejercicio fiscal. Es el momento donde se ajustan las diferencias del año, se acreditan las retenciones y donde pueden aparecer saldos a favor si todo se llevó bien." },
];

const loQueHacemos = [
  "Diagnóstico inicial: régimen correcto, historial ante el SAT, obligaciones vigentes y pendientes",
  "Regularización de declaraciones atrasadas si las hay — sin sorpresas en el proceso",
  "Declaraciones mensuales de ISR e IVA presentadas en tiempo",
  "Emisión de CFDI correctos por cada venta, cobro o servicio",
  "Declaración anual con acreditamiento de retenciones y cálculo correcto del resultado del ejercicio",
  "Asesoría sobre si en algún momento conviene cambiar a una sociedad (SA de CV o SRL)",
  "Atención a requerimientos del SAT si ya llegó alguna notificación",
];

const faqs = [
  { q: "¿Puede una persona física tener empleados en México?", a: "Sí. Una persona física con actividad empresarial puede contratar empleados, darlos de alta en el IMSS e Infonavit y emitir CFDI de nómina. Tener empleados no obliga a constituir una sociedad. Lo que sí implica es cumplir con las obligaciones patronales: cuotas al IMSS, aportaciones al Infonavit, ISN estatal y nómina correctamente calculada." },
  { q: "¿Qué régimen fiscal debo usar si tengo un negocio pequeño?", a: "Para la mayoría de los pequeños negocios con ingresos anuales menores a $3.5 millones, el RESICO personas físicas es la opción más conveniente: tasas de ISR bajas entre 1% y 2.5%, declaración mensual simplificada y menos obligaciones. Si tus ingresos son mayores o tienes gastos deducibles importantes, el Régimen de Actividades Empresariales puede convenir." },
  { q: "¿Qué pasa si tengo un negocio y no declaro?", a: "El SAT cruza información de facturas emitidas, depósitos bancarios y reportes de plataformas de pago. Si hay ingresos sin declarar, puede generarse un crédito fiscal con recargos y multas. La regularización voluntaria siempre sale más económica que esperar a que llegue un requerimiento formal." },
  { q: "Vendo en efectivo y sin factura. ¿El SAT puede saberlo?", a: "El SAT tiene acceso a los movimientos bancarios de personas físicas y recibe reportes de plataformas digitales. Si recibes depósitos o cobros frecuentes que no corresponden con lo declarado, se genera una discrepancia fiscal que la autoridad puede observar." },
  { q: "¿Cuándo conviene cambiar de persona física a empresa (SA de CV)?", a: "Generalmente cuando los ingresos superan el límite del RESICO ($3.5 millones anuales), cuando la estructura del negocio requiere socios formales, o cuando las deducciones como persona moral hacen más eficiente el pago de impuestos. Te acompañamos en esa evaluación cuando llegue el momento." },
];

export default function SectorPequenosNegociosC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center">
        <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1600&h=900&fit=crop" alt="Pequeño negocio en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.84]" />
        <div className="relative z-10 max-w-[1100px] mx-auto px-5 md:px-10 pt-24 pb-16 w-full">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span>
            <a href="/version-c/sectores/construccion" className="hover:text-white/50 transition-colors">Sectores</a>
            <span className="text-white/15 mx-2">/</span>Pequeños Negocios
          </p>
          <p className="label-uppercase text-white/30 mb-6">CONTADOR PARA PEQUEÑOS NEGOCIOS</p>
          <h1 className="font-sans font-bold text-white mb-6 max-w-[700px]" style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            Contador para tu Pequeño Negocio en Cancún
          </h1>
          <p className="font-sans text-base font-light text-white/50 max-w-[560px]" style={{ fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.6 }}>
            Tienes un negocio. Trabajas duro. Y en algún momento el SAT, las facturas y los impuestos se volvieron algo que pospones porque no sabes bien por dónde empezar. Eso tiene solución.
          </p>
          <a href="https://wa.me/5215543587159" target="_blank" rel="noopener noreferrer" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mt-10 inline-block">
            ESCRÍBENOS POR WHATSAPP
          </a>
        </div>
      </section>

      {/* ¿ESTE SERVICIO ES PARA TI? */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">NEGOCIOS QUE ATENDEMOS EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Si tienes un negocio propio y facturas como persona física
          </h2>
          <p className="font-sans text-[16px] text-camhaji-muted leading-relaxed mb-12 max-w-[700px]">
            No necesitas tener una SA de CV ni una SRL para necesitar un contador. Los pequeños negocios también tienen obligaciones fiscales, y cumplirlas bien desde el principio evita problemas que llegan cuando menos los esperas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {perfiles.map((p) => (
              <div key={p.title}>
                <div className="w-6 h-px bg-primary mb-4" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-2">{p.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EL PROBLEMA REAL */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">ERRORES FISCALES EN PEQUEÑOS NEGOCIOS</p>
            <h2 className="font-sans font-bold text-camhaji-text" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              Por qué muchos pequeños negocios terminan con problemas con el SAT
            </h2>
          </div>
          <div>
            <p className="font-sans text-[16px] text-camhaji-text leading-relaxed mb-5">
              El patrón es siempre parecido. El negocio arranca bien, crece poco a poco, y las obligaciones fiscales se van postergando — porque nadie las explicó, porque parecen complicadas, o porque el día a día no deja tiempo para nada más.
            </p>
            <p className="font-sans text-[16px] text-camhaji-text leading-relaxed">
              Hasta que llega un requerimiento del SAT, un crédito fiscal que apareció "de la nada", o un cliente importante que exige facturas en regla para seguir comprando. Regularizar a tiempo es siempre más económico que hacerlo cuando ya hay presión.
            </p>
          </div>
        </div>
      </section>

      {/* OBLIGACIONES */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">OBLIGACIONES DEL SAT PARA PERSONA FÍSICA</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-12" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Lo que un pequeño negocio persona física necesita cumplir
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {obligaciones.map((o, i) => (
              <div key={i} className="border-t border-border-subtle pt-6">
                <span className="font-sans text-xs text-camhaji-muted/40 tracking-[0.1em]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="font-sans font-bold text-camhaji-text text-lg mt-2 mb-3">{o.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPLIT IMAGE — TIENDA LOCAL */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div>
          <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop" alt="Tienda local en Cancún" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="flex items-center bg-surface px-8 md:px-16 py-16">
          <div>
            <p className="label-uppercase text-camhaji-muted mb-4">CONTABILIDAD PARA NEGOCIOS EN CANCÚN</p>
            <h2 className="font-sans font-bold text-camhaji-text mb-6" style={{ fontSize: "clamp(22px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              No necesitas ser grande para necesitar un buen contador
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
              Tiendas, talleres, restaurantes, ventas en línea. Si tienes un negocio y un RFC, tienes obligaciones. Y cumplirlas bien desde el inicio te ahorra problemas después.
            </p>
          </div>
        </div>
      </section>

      {/* RESICO VS RÉGIMEN */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">RESICO VS RÉGIMEN GENERAL EN MÉXICO</p>
          <h2 className="font-sans font-bold text-white mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            ¿RESICO o Régimen de Actividades Empresariales?
          </h2>
          <p className="font-sans text-white/55 leading-relaxed mb-10 max-w-[700px]" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
            No hay respuesta universal — depende de cuánto factura tu negocio, qué tipo de gastos tienes y cómo está proyectado crecer.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-white/[0.08] p-8 rounded-sm">
              <h3 className="font-sans font-bold text-camhaji-accent text-lg mb-4">RESICO Personas Físicas</h3>
              <p className="font-sans text-sm text-white/55 leading-relaxed">
                La opción más común para negocios pequeños: si tus ingresos anuales no superan los $3.5 millones, pagas ISR a tasas de entre el 1% y el 2.5%, con un proceso de declaración simplificado y menos obligaciones administrativas.
              </p>
              <a href="/version-c/sectores/resico" className="label-uppercase text-white/30 hover:text-white/60 transition-colors mt-4 inline-block">VER SERVICIO RESICO →</a>
            </div>
            <div className="border border-white/[0.08] p-8 rounded-sm">
              <h3 className="font-sans font-bold text-white text-lg mb-4">Régimen de Actividades Empresariales</h3>
              <p className="font-sans text-sm text-white/55 leading-relaxed">
                Puede ser más conveniente si tus ingresos superan ese límite o si tienes gastos deducibles significativos — renta, materiales, empleados, equipo — que reducen la base gravable. Las tasas son más altas, pero la deducción real puede hacer que el impuesto efectivo sea menor.
              </p>
            </div>
          </div>
          <p className="font-sans text-sm text-white/40 mt-8">La decisión correcta requiere revisar tu situación específica. Nosotros hacemos el diagnóstico y te explicamos con números cuál es la diferencia.</p>
        </div>
      </section>

      {/* LO QUE HACEMOS */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">SERVICIO CONTABLE PARA TU NEGOCIO</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-10" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Lo que Camhaji hace por tu negocio en Cancún
          </h2>
          <div className="space-y-0 border-t border-border-subtle">
            {loQueHacemos.map((item, i) => (
              <div key={i} className="flex items-start gap-5 py-5 border-b border-border-subtle">
                <span className="font-sans text-xs text-camhaji-muted/40 tracking-[0.1em] mt-1 w-6 flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <p className="font-sans text-[16px] text-camhaji-text leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-camhaji-muted mt-6">Sin papeles acumulados. Sin declaraciones postergadas. Sin sorpresas en abril.</p>
        </div>
      </section>

      {/* EXPERIENCIA REGIONAL */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="label-uppercase text-camhaji-muted mb-6">PEQUEÑOS NEGOCIOS EN QUINTANA ROO</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Conocemos los negocios pequeños de Cancún
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
            Hemos trabajado con dueños de negocios de distintos giros en Quintana Roo — desde comerciantes con una sola tienda hasta contratistas con varios proyectos simultáneos. Conocemos las preguntas que se repiten, los errores más comunes y las situaciones que el SAT revisa con más frecuencia en este segmento. No empezamos a aprender con cada cliente nuevo. Llegamos con experiencia y con respuestas concretas.
          </p>
        </div>
      </section>

      {/* FULL-BLEED BAND — MERCADO LOCAL */}
      <section className="min-h-[40vh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=1600&h=800&fit=crop" alt="Mercado y zona comercial local en Cancún" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/70" />
        <div className="relative z-10 px-5 md:px-10 py-16 max-w-[700px]">
          <p className="label-uppercase text-camhaji-accent/60 mb-4">CONTADORES PARA PYMES EN CANCÚN</p>
          <p className="font-sans font-bold text-white" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            Conocemos los negocios pequeños de la región — sus preguntas, sus errores comunes y lo que el SAT revisa con más frecuencia.
          </p>
        </div>
      </section>

      {/* TESTIMONIO */}
      <section className="bg-primary py-20 px-5 md:px-10">
        <div className="max-w-[800px] mx-auto text-center">
          <span className="font-serif text-[80px] text-white/[0.06] leading-none block -mb-6" aria-hidden="true">"</span>
          <blockquote className="font-sans font-light text-white mb-6" style={{ fontSize: "clamp(18px, 2.5vw, 26px)", lineHeight: 1.6 }}>
            "Tenía un negocio desde hacía 3 años y nunca había declarado. Pensé que debía una fortuna. Camhaji revisó todo, me explicó lo que realmente correspondía pagar y lo pusimos al corriente en pocos meses. Mucho menos de lo que esperaba."
          </blockquote>
          <div className="w-8 h-px bg-white/20 mx-auto mb-4" />
          <p className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-white/70">Dueño de taller</p>
          <p className="font-sans text-sm text-white/40">Cancún, QR</p>
          <p className="font-sans text-xs text-white/20 mt-4">* Testimonio de referencia — pendiente de validación</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
            <p className="label-uppercase text-camhaji-muted">PEQUEÑOS NEGOCIOS — PREGUNTAS FRECUENTES</p>
            <h2 className="font-sans font-bold text-camhaji-text" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
              Pequeños negocios y persona física
            </h2>
          </div>
          <div>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-border-subtle">
                  <button onClick={() => setOpenFaq(isOpen ? null : i)} className="w-full flex justify-between items-center py-6 text-left" aria-expanded={isOpen}>
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-xs tracking-[0.1em] text-[#D0CBC0] flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-sans font-semibold text-[17px] text-camhaji-text leading-snug">{f.q}</span>
                    </div>
                    <span className={`font-sans text-2xl font-light text-primary flex-shrink-0 ml-4 transition-transform duration-200 leading-none ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">CONTRATA TU CONTADOR EN CANCÚN</p>
        <h2 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(28px, 5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          ¿Tienes un negocio en Cancún y no sabes bien cómo estás con el SAT?
        </h2>
        <p className="font-sans text-white/55 max-w-[520px] mx-auto mb-10" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
          Cuéntanos qué tipo de negocio tienes y en qué punto está tu situación fiscal hoy. La primera conversación no tiene costo.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="https://wa.me/5215543587159" target="_blank" rel="noopener noreferrer" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300">
            ESCRÍBENOS POR WHATSAPP
          </a>
          <a href="/version-c/contacto" className="btn-uppercase border border-white/30 text-white/60 px-10 py-4 hover:text-white hover:border-white/60 transition-all duration-300">
            AGENDA TU CONSULTA →
          </a>
        </div>
        <div className="flex items-center gap-2 mt-6">
          <Phone className="w-3.5 h-3.5 text-white/40" />
          <span className="font-sans text-sm text-white/50">(998) 123-4567</span>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}