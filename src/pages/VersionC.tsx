import { useState, useEffect, useRef } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientLogos } from "@/components/ClientLogos";
import { Phone } from "lucide-react";

import heroBg from "@/assets/hero-cancun-skyline.jpg";
import sectorConstruccion from "@/assets/sector-construccion.jpg";
import sectorComercial from "@/assets/sector-comercial.jpg";

const serviceBgs = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=80&fit=crop",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80&fit=crop",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80&fit=crop",
  "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=1920&q=80&fit=crop",
];

const services = [
  {
    num: "01",
    title: "Contabilidad y Administración",
    desc: "Registro mensual, conciliación bancaria, declaraciones y control administrativo integral. Para que tus números siempre reflejen lo que realmente está pasando en tu empresa.",
    href: "/version-c/servicios/contabilidad",
  },
  {
    num: "02",
    title: "Estrategia Fiscal",
    desc: "Cumplimiento correcto de tus obligaciones ante el SAT. No prometemos magia fiscal. Prometemos que no habrá sorpresas.",
    href: "/version-c/servicios/fiscal",
  },
  {
    num: "03",
    title: "Nómina Empresarial",
    desc: "Cálculo de nómina, altas y bajas ante el IMSS y CFDI de nómina con CONTPAQi. Sin errores, sin multas, sin retrasos.",
    href: "/version-c/servicios/nomina",
  },
  {
    num: "04",
    title: "Facturación CFDI",
    desc: "Emisión, timbrado y administración de facturas electrónicas para tu empresa. Que ningún comprobante salga mal ni te cueste una deducción.",
    href: "/version-c/servicios/facturacion",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "AÑOS DE TRAYECTORIA", context: "Antes de ser firma, ya éramos expertos." },
  { value: 6, suffix: "", label: "AÑOS COMO FIRMA", context: "Una sociedad construida para durar." },
  { value: 10, suffix: "", label: "PROFESIONALES", context: "Cada expediente, con nombre propio." },
];

const principles = [
  { name: "Cumplir la Palabra", desc: "Si lo decimos, lo hacemos. Sin pretextos." },
  { name: "Honestidad", desc: "Decimos lo que pensamos aunque no sea lo esperado." },
  { name: "Transparencia", desc: "No hay letra chica. Tu contabilidad es tuya." },
  { name: "Responsabilidad", desc: "Nos hacemos cargo. Siempre, sin condiciones." },
  { name: "Empatía", desc: "Nos adaptamos a cada cliente y su realidad." },
];

const differentiators = [
  {
    name: "Atención Inmediata",
    desc: "Cuando tienes una duda urgente sobre el SAT o necesitas una factura hoy, no puedes esperar tres días. Respondemos el mismo día — por correo o WhatsApp, como prefieras.",
  },
  {
    name: "Todo en un Solo Lugar",
    desc: "Contabilidad, fiscal, nómina, facturación y administración. Un solo equipo que conoce tu negocio de arriba a abajo.",
  },
  {
    name: "Para el Negocio que Quiere Hacer las Cosas Bien",
    desc: "Atendemos desde empresas pequeñas hasta medianas. No prometemos milagros fiscales — prometemos que tu empresa estará en regla y que sabrás exactamente qué pasa con tus números.",
  },
];

const sectors = [
  {
    badge: "ESPECIALIZACIÓN PRINCIPAL",
    name: "Construcción",
    desc: "Las constructoras no pueden trabajar con contabilidad genérica. Costos de obra, estimaciones, subcontratistas, retenciones. Llevamos años en el sector y conocemos las particularidades del mercado en Cancún y la Riviera Maya.",
    href: "/version-c/sectores/construccion",
    img: sectorConstruccion,
  },
  {
    badge: "ESPECIALIZACIÓN",
    name: "Empresas Comerciales",
    desc: "Distribuidoras, comercializadoras y empresas de venta: control de inventarios, facturación a clientes, cuentas por cobrar y por pagar, todo bajo un proceso mensual ordenado.",
    href: "/version-c/sectores/comercial",
    img: sectorComercial,
  },
];

const sectorCards = [
  {
    name: "RESICO y Prestadores de Servicios",
    desc: "Freelancers, consultores, profesionistas independientes y agentes inmobiliarios. Si tributas en el Régimen Simplificado de Confianza o quieres hacerlo, aquí encuentras a tu contador en Cancún.",
    href: "/version-c/sectores/resico",
  },
  {
    name: "Agentes Inmobiliarios",
    desc: "Las comisiones inmobiliarias tienen reglas fiscales específicas. Desde el CFDI correcto hasta el régimen que más te conviene — sin sorpresas con el SAT.",
    href: "/version-c/sectores/inmobiliario",
  },
];

const team = [
  {
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente General",
    bio: "Contador con trayectoria en grandes firmas del sector auditoría y en empresas del ramo hotelero. Es la mano derecha de la dirección y el responsable de que la operación del despacho funcione con precisión.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&q=80&fit=crop",
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Contadora con amplia experiencia en la administración de empresas medianas y grandes. Responsable de cuentas por pagar, cuentas por cobrar y recursos humanos.",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&q=80&fit=crop",
  },
  {
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor Nómina y Facturación",
    bio: "Especialista en nómina, ley laboral y contribuciones de seguridad social. Domina CONTPAQi con una profundidad que pocos logran.",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&q=80&fit=crop",
  },
];

const testimonials = [
  {
    quote: "Llevábamos años sin claridad en nuestros números. En pocos meses ya sabíamos exactamente cómo estaba la empresa — y dejamos de tenerle miedo al SAT.",
    author: "Director General, empresa comercial",
    location: "Cancún, QR",
  },
  {
    quote: "Cuando tuve dudas a mitad de mes, respondieron ese mismo día. Eso no lo encontraba en el despacho anterior.",
    author: "Propietario, empresa constructora",
    location: "Cancún, QR",
  },
  {
    quote: "Me explicaron el RESICO en términos que entendí. Por primera vez sé cuánto voy a pagar antes de que llegue el 17.",
    author: "Consultora independiente",
    location: "Cancún, QR",
  },
];

const faqs = [
  {
    q: "¿Cuánto cobra un contador en Cancún?",
    a: "El costo varía según los servicios requeridos. La contabilidad básica para una empresa pequeña puede empezar desde $2,000–$4,000 MXN/mes. Para empresas medianas con nómina y facturación incluidas, el rango es de $5,000–$15,000 MXN/mes. En Camhaji hacemos una cotización personalizada sin costo — cuéntanos tu operación y te damos un número real.",
  },
  {
    q: "¿Cómo elegir un buen despacho contable en Cancún?",
    a: "Busca un despacho con equipo certificado, experiencia en tu sector, uso de software actualizado y comunicación clara y accesible. Que te expliquen lo que hacen — no solo que te manden el comprobante de declaración.",
  },
  {
    q: "¿Qué incluye el servicio de contabilidad mensual?",
    a: "Solicitud y revisión de documentos, registro contable, conciliación de estado de cuenta con facturas, cálculo de impuestos, llenado de declaraciones y envío al cliente para autorizar el pago. Nos adaptamos al canal que prefiere el cliente — correo o WhatsApp.",
  },
  {
    q: "¿Atienden empresas fuera de Cancún?",
    a: "Sí. Trabajamos con empresas en todo Quintana Roo. Nos adaptamos al canal de comunicación del cliente, por lo que la distancia no es un obstáculo.",
  },
  {
    q: "¿Tienen experiencia con empresas que están atrasadas en el SAT?",
    a: "Sí. Es uno de los casos más frecuentes con los que llegan nuevos clientes. El primer paso es un diagnóstico de la situación fiscal, sin juicios, para entender exactamente dónde está el problema y qué se necesita para regularizarse.",
  },
];

/* ── Counter animation hook ── */
function useCountUp(target: number, duration = 1400) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
          function step(ts: number) {
            if (!start) return;
            const progress = Math.min((ts - start) / duration, 1);
            setCount(Math.floor(easeOut(progress) * target));
            if (progress < 1) requestAnimationFrame(step);
            else setCount(target);
          }
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

function CifraCell({ value, suffix, label, context }: { value: number; suffix: string; label: string; context: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div ref={ref} className="pr-10 border-r border-border-subtle last:border-r-0 last:pr-0 max-md:border-r-0 max-md:pr-0 max-md:border-b max-md:border-border-subtle max-md:pb-10 last:max-md:border-b-0 last:max-md:pb-0">
      <div className="font-sans font-bold text-primary flex items-baseline gap-0.5" style={{ fontSize: "clamp(64px, 9vw, 112px)", letterSpacing: "-0.04em", lineHeight: 1 }}>
        <span>{count}</span>
        {suffix && <span className="text-[0.55em] tracking-tight">{suffix}</span>}
      </div>
      <p className="label-uppercase text-camhaji-muted mt-4 mb-2.5">{label}</p>
      <p className="font-sans text-sm font-light text-[#9A9589] leading-relaxed">{context}</p>
    </div>
  );
}

export default function VersionC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState(0);

  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* ══ HERO — centered, full-screen, arc-group style ══ */}
      <section className="min-h-[100dvh] relative flex flex-col items-center justify-center text-center overflow-hidden" style={{ padding: "120px 40px 80px" }}>
        <img src={heroBg} alt="Cancún skyline zona hotelera" className="absolute inset-0 w-full h-full object-cover object-top" width={1920} height={1080} />
        <div className="absolute inset-0" style={{ background: "rgba(12, 28, 24, 0.84)" }} />
        <div className="relative z-10 flex flex-col items-center">
          <p className="label-uppercase text-white/35 mb-12">DESPACHO CONTABLE · CANCÚN, MÉXICO</p>
          <h1 className="font-sans font-bold text-white mb-8" style={{ fontSize: "clamp(48px, 8vw, 96px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}>
            Despacho Contable<br />en Cancún con<br />Compromiso Real.
          </h1>
          <p className="font-sans text-base font-light text-white/50 mb-12 max-w-[540px]" style={{ fontSize: "clamp(16px, 2vw, 20px)", lineHeight: 1.6 }}>
            Llevamos la contabilidad, el fiscal y la administración de tu empresa para que tú te dediques a lo que sabes hacer. Sin sorpresas con el SAT. Sin desorden. Sin promesas vacías.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="btn-uppercase border border-white/50 text-white px-8 py-3.5 hover:bg-white/[0.08] hover:border-white transition-all duration-300">
              ESCRÍBENOS POR WHATSAPP
            </a>
            <a href="#servicios" className="btn-uppercase text-white/40 hover:text-white/80 transition-colors duration-300 px-4 py-3.5">
              CONOCE NUESTROS SERVICIOS
            </a>
          </div>
        </div>
        {/* Scroll line */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-px h-12 bg-white/20 animate-pulse" />
        </div>
      </section>

      <ClientLogos variant="c" />

      {/* ══ STATEMENT — full-screen white, quote + principles ══ */}
      <section className="min-h-[100dvh] bg-white flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-camhaji-muted mb-12">LO QUE NOS DIFERENCIA</p>
        <blockquote className="font-sans font-bold text-camhaji-text max-w-[840px] mb-16" style={{ fontSize: "clamp(28px, 4.5vw, 56px)", letterSpacing: "-0.02em", lineHeight: 1.25 }}>
          Lo que nos diferencia de otros despachos contables en Cancún
        </blockquote>
        <div className="flex gap-0 justify-center flex-wrap border-t border-border-subtle pt-8 max-w-[840px] w-full items-center">
          {["Atención Inmediata", "Todo en un Solo Lugar", "Compromiso Real"].map((p, i) => (
            <span key={p} className="flex items-center">
              {i > 0 && <span className="text-[#D0CBC0] text-sm mx-4">·</span>}
              <span className="label-uppercase text-camhaji-muted px-0">{p}</span>
            </span>
          ))}
        </div>
      </section>

      {/* ══ DIFERENCIADORES — 3-col grid ══ */}
      <section className="bg-white pb-24 px-5 md:px-10">
        <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {differentiators.map((d) => (
            <div key={d.name}>
              <div className="w-6 h-px bg-primary mb-5" />
              <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{d.name}</h3>
              <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ SERVICIOS — dark with background photo that changes on hover ══ */}
      <section id="servicios" className="min-h-[100dvh] relative flex flex-col overflow-hidden">
        {/* Background images — one per service, crossfade */}
        {serviceBgs.map((bg, i) => (
          <img
            key={i}
            src={bg}
            alt=""
            aria-hidden="true"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${hoveredService === i ? "opacity-100" : "opacity-0"}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute inset-0 bg-camhaji-base/[0.88]" />

        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex flex-col md:flex-row justify-between items-baseline max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 mb-20 gap-4">
            <p className="label-uppercase text-white/35">NUESTROS SERVICIOS CONTABLES EN CANCÚN</p>
            <p className="font-sans text-base font-light text-white/50 max-w-[360px] md:text-right leading-relaxed">Todo lo que tu empresa necesita en un solo lugar</p>
          </div>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1200px] mx-auto w-full">
            {services.map((s, i) => (
              <div
                key={i}
                className={`group flex flex-col justify-start p-10 hover:bg-white/[0.04] transition-colors duration-300 ${i < services.length - 1 ? "lg:border-r border-white/[0.07]" : ""} border-b lg:border-b-0 border-white/[0.07]`}
                onMouseEnter={() => setHoveredService(i)}
              >
                <span className="font-sans text-xs text-white/[0.18] uppercase tracking-[0.22em] mb-8">{s.num}</span>
                <h3 className="font-sans font-bold text-white mb-4 group-hover:text-camhaji-accent transition-colors duration-200" style={{ fontSize: "clamp(20px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                  {s.title}
                </h3>
                <p className="font-sans text-[15px] font-light text-white/55 leading-relaxed max-w-[280px] mb-8">{s.desc}</p>
                <a href={s.href} className="label-uppercase text-white/35 hover:text-white/80 transition-colors border-b border-white/15 pb-0.5 self-start mt-auto">
                  CONOCER MÁS →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CIFRAS — 3-col horizontal with narrative ══ */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-[72px] border-b border-border-subtle pb-10 gap-4">
            <p className="label-uppercase text-camhaji-muted">LA EXPERIENCIA EN NÚMEROS</p>
            <h2 className="font-sans font-bold text-camhaji-text max-w-[340px] md:text-right" style={{ fontSize: "clamp(18px, 2.2vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              Más de una década de trabajo<br />se traduce en esto
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {stats.map((s, i) => (
              <CifraCell key={i} value={s.value} suffix={s.suffix} label={s.label} context={s.context} />
            ))}
          </div>
        </div>
      </section>

      {/* ══ POR QUÉ CAMHAJI — principles list on primary ══ */}
      <section className="min-h-[100dvh] bg-primary flex items-center">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 py-20 w-full">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <p className="label-uppercase text-white/40">NUESTRA HISTORIA</p>
            <h2 className="font-sans font-bold text-white max-w-[360px] md:text-right" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              Una firma con historia y equipo profesional
            </h2>
          </div>

          <div className="max-w-[800px] mb-16">
            <p className="font-sans text-white/60 leading-relaxed mb-8" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              Camhaji Consultores nació hace 6 años de una idea simple pero poderosa: un despacho donde el área fiscal y el área contable trabajan juntos, bajo el mismo techo, para el mismo cliente. Antes de la firma, nuestro equipo acumuló más de 10 años de trayectoria en grandes firmas, auditoría y administración de empresas en Cancún y la Riviera Maya.
            </p>
            <p className="font-sans text-white/60 leading-relaxed mb-10" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
              Hoy somos un equipo de 10 profesionales comprometidos con algo concreto: cumplir lo que decimos que vamos a hacer. No más. No menos.
            </p>
            <a href="/version-c/nosotros" className="label-uppercase text-white/50 hover:text-white transition-colors border-b border-white/20 pb-0.5">
              CONOCE NUESTRA HISTORIA →
            </a>
          </div>

          <div className="border-t border-white/10">
            {principles.map((p) => (
              <div key={p.name} className="flex flex-col md:flex-row justify-between md:items-center py-7 border-b border-white/[0.08] hover:translate-x-2.5 transition-transform duration-200 gap-2">
                <span className="font-sans font-bold text-white" style={{ fontSize: "clamp(18px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>{p.name}</span>
                <span className="font-sans text-[15px] font-light text-white/45 md:text-right max-w-[440px] leading-relaxed">{p.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ SECTORES — dark full-bleed ══ */}
      <section className="min-h-[100dvh] bg-camhaji-base flex flex-col">
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 pb-10">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <p className="label-uppercase text-white/35">EXPERIENCIA EN LOS SECTORES QUE MÁS IMPORTAN</p>
            <p className="font-sans text-[15px] font-light text-white/50">Cada sector tiene sus propias reglas</p>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2">
          {sectors.map((s) => (
            <div key={s.name} className="relative min-h-[480px] md:min-h-[50dvh] flex items-end group cursor-pointer overflow-hidden border-r border-white/[0.06] last:border-r-0 max-md:border-r-0">
              <img src={s.img} alt={s.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" width={960} height={1080} />
              <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/[0.92] via-camhaji-base/40 to-transparent group-hover:from-camhaji-base/[0.96] group-hover:via-camhaji-base/[0.65] transition-all duration-300" />
              <div className="relative z-10 p-10 md:p-12">
                <span className="inline-block border border-white/25 rounded-sm px-2.5 py-1 label-uppercase text-[10px] text-white/60 mb-4">{s.badge}</span>
                <h3 className="font-sans font-bold text-white mb-2" style={{ fontSize: "clamp(22px, 3.5vw, 40px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>{s.name}</h3>
                <p className="font-sans text-sm font-light text-white/55 mb-5 leading-relaxed">{s.desc}</p>
                <a href={s.href} className="label-uppercase text-white/40 hover:text-white transition-colors">VER ESPECIALIZACIÓN →</a>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-white/[0.06]">
          {sectorCards.map((s) => (
            <a key={s.name} href={s.href} className="group p-8 md:p-12 border-b md:border-b-0 md:first:border-r border-white/[0.06] hover:bg-white/[0.03] transition-colors">
              <h3 className="font-sans font-bold text-white text-xl mb-3 group-hover:text-camhaji-accent transition-colors">{s.name}</h3>
              <p className="font-sans text-sm font-light text-white/50 leading-relaxed mb-4 max-w-[400px]">{s.desc}</p>
              <span className="label-uppercase text-white/30 group-hover:text-white/60 transition-colors">VER DETALLE →</span>
            </a>
          ))}
        </div>
      </section>

      {/* ══ EQUIPO — full cards with photos ══ */}
      <section className="min-h-[100dvh] bg-white flex flex-col">
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <p className="label-uppercase text-camhaji-muted">NUESTRO EQUIPO</p>
            <h2 className="font-sans font-bold text-camhaji-text max-w-[280px] md:text-right" style={{ fontSize: "clamp(18px, 2vw, 26px)", letterSpacing: "-0.02em", lineHeight: 1.3 }}>
              El equipo que respalda tu tranquilidad financiera
            </h2>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          {team.map((m, i) => (
            <div key={i} className={`flex flex-col ${i < team.length - 1 ? "md:border-r border-border-subtle" : ""} max-md:border-b max-md:border-border-subtle`}>
              <div className="aspect-[3/4] bg-surface overflow-hidden min-h-[280px]">
                <img src={m.photo} alt={m.name} className="w-full h-full object-cover object-top grayscale-[15%]" loading="lazy" />
              </div>
              <div className="p-6 md:p-10 pb-12">
                <div className="w-6 h-px bg-primary mb-4" />
                <h3 className="font-sans font-bold text-[17px] text-camhaji-text mb-1">{m.name}</h3>
                <p className="label-uppercase text-primary mb-3">{m.role}</p>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ TESTIMONIAL — light surface, centered ══ */}
      <section className="min-h-[100dvh] bg-surface flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-primary/60 mb-16">LO QUE DICEN NUESTROS CLIENTES EN CANCÚN</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full">
          {testimonials.map((t, i) => (
            <div key={i} className="text-center md:text-left">
              <span className="font-serif text-[64px] text-primary/[0.08] leading-none block -mb-4" aria-hidden="true">"</span>
              <blockquote className="font-sans font-light text-camhaji-text mb-6" style={{ fontSize: "clamp(16px, 2vw, 22px)", lineHeight: 1.6 }}>
                "{t.quote}"
              </blockquote>
              <div className="w-6 h-px bg-border-subtle mb-4 mx-auto md:mx-0" />
              <p className="font-sans text-[13px] font-medium uppercase tracking-[0.15em] text-camhaji-text mb-1">{t.author}</p>
              <p className="font-sans text-[13px] font-light text-camhaji-muted">{t.location}</p>
            </div>
          ))}
        </div>
        <p className="font-sans text-xs text-camhaji-muted/50 mt-12">* Testimonios de referencia — pendientes de validación</p>
      </section>

      {/* ══ CTA — solid primary ══ */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">HABLEMOS DE TU NEGOCIO</p>
        <h2 className="font-sans font-bold text-white mb-12" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu negocio.
        </h2>
        <a href="/version-c/contacto" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5 inline-block">
          AGENDAR CONSULTA GRATUITA
        </a>
        <div className="flex items-center gap-2 justify-center mt-5">
          <Phone className="w-3.5 h-3.5 text-white/50" />
          <span className="font-sans text-sm text-white/50">(998) 123-4567</span>
        </div>
      </section>

      {/* ══ FAQ — custom toggle ══ */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-4">
            <p className="label-uppercase text-camhaji-muted">PREGUNTAS FRECUENTES</p>
            <h2 className="font-sans font-bold text-camhaji-text" style={{ fontSize: "clamp(28px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}>
              Sobre nuestro despacho contable en Cancún
            </h2>
          </div>
          <div>
            {faqs.map((f, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} className="border-b border-border-subtle">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex justify-between items-center py-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-sans text-xs tracking-[0.1em] text-[#D0CBC0] flex-shrink-0">{String(i + 1).padStart(2, "0")}</span>
                      <span className="font-sans font-semibold text-[17px] text-camhaji-text leading-snug">{f.q}</span>
                    </div>
                    <span className={`font-sans text-2xl font-light text-primary flex-shrink-0 ml-4 transition-transform duration-200 leading-none ${isOpen ? "rotate-45" : ""}`}>+</span>
                  </button>
                  {isOpen && (
                    <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}
