import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const alcance = [
  {
    title: "Registro Contable",
    desc: "Pólizas de ingreso, egreso y diario. Clasificación y registro de todas tus operaciones.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Conciliación Bancaria",
    desc: "Conciliamos tus cuentas bancarias cada mes para que no haya discrepancias ni sorpresas.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
  },
  {
    title: "Declaraciones SAT",
    desc: "Declaraciones mensuales y anuales presentadas en tiempo y forma. Sin atrasos.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "ERP en Tiempo Real",
    desc: "Acceso a plataforma con tus estados financieros, reportes y estatus actualizados.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Asesoría Continua",
    desc: "Consultas ilimitadas con tu contador asignado. Resolvemos dudas por WhatsApp o llamada.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Trámites SAT",
    desc: "Alta, actualización, firma electrónica y opinión de cumplimiento. Todo gestionado.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

const proceso = [
  { num: "01", title: "Recopilación", desc: "Recibimos tu documentación por el canal que prefieras: WhatsApp, correo o plataforma.", days: "Día 1-5" },
  { num: "02", title: "Registro", desc: "Clasificamos y registramos todas las operaciones del mes en el sistema contable.", days: "Día 5-12" },
  { num: "03", title: "Conciliación", desc: "Conciliamos bancos, verificamos saldos y detectamos cualquier inconsistencia.", days: "Día 12-16" },
  { num: "04", title: "Cálculo Fiscal", desc: "Calculamos impuestos (ISR, IVA) y preparamos las declaraciones mensuales.", days: "Día 16-20" },
  { num: "05", title: "Entrega y Reporte", desc: "Presentamos declaraciones al SAT y te entregamos un resumen ejecutivo del mes.", days: "Día 20-25" },
];

const techPills = ["CONTPAQi", "ERP Interno", "Portal del Cliente"];

const techFeatures = [
  {
    title: "Acceso 24/7",
    desc: "Tu información financiera disponible cuando la necesites, desde cualquier dispositivo.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Reportes Automáticos",
    desc: "Estados financieros, balanza de comprobación y estado de resultados actualizados mensualmente.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: "Seguridad de Datos",
    desc: "Toda tu información protegida con encriptación y respaldos automáticos diarios.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const faqs = [
  { q: "¿Con qué frecuencia recibo mis estados financieros?", a: "Mensualmente. Además, tienes acceso en tiempo real a tu ERP con reportes actualizados." },
  { q: "¿Puedo enviar mi documentación por WhatsApp?", a: "Sí. Nos adaptamos a tu método preferido: WhatsApp, correo electrónico o plataforma digital." },
  { q: "¿Qué pasa si tengo atrasos con el SAT?", a: "Evaluamos tu situación, priorizamos lo urgente y regularizamos todo de forma ordenada." },
  { q: "¿Incluyen las declaraciones mensuales?", a: "Sí. Las declaraciones mensuales y la declaración anual están incluidas en el servicio." },
];

export default function ServicioContabilidadC() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO — centered with bg image */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&h=900&fit=crop"
          alt="Contabilidad profesional"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-camhaji-base/[0.86]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[800px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span>
            <span>Servicios</span>
            <span className="text-white/15 mx-2">/</span>
            <span>Contabilidad</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">SERVICIO 01</p>
          <h1
            className="font-sans font-bold text-white mb-6"
            style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.03em", lineHeight: 1.0 }}
          >
            Contabilidad & Administración
          </h1>
          <p className="font-sans text-white/50 max-w-[520px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.6 }}>
            Registro mensual, conciliación bancaria, declaraciones SAT y monitoreo en tiempo real para tu empresa.
          </p>
        </div>
      </section>

      {/* ALCANCE — 3x2 grid */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 pb-10 border-b border-border-subtle mb-14">
            <h2
              className="font-sans font-bold text-camhaji-text"
              style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}
            >
              Qué incluye el servicio
            </h2>
            <p className="font-sans text-[15px] font-light text-camhaji-muted max-w-[400px] md:text-right">
              Todo lo que necesitas para tener control real de tu contabilidad, en un solo servicio.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {alcance.map((a) => (
              <div key={a.title}>
                <div className="text-primary mb-5">{a.icon}</div>
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-2">{a.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO — dark with numbered steps */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[900px] mx-auto">
          <p className="label-uppercase text-white/30 mb-4">PROCESO MENSUAL</p>
          <h2
            className="font-sans font-bold text-white mb-16"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em" }}
          >
            Así funciona cada mes
          </h2>
          <div className="border-t border-white/[0.08]">
            {proceso.map((p) => (
              <div
                key={p.num}
                className="flex items-start gap-6 py-6 border-b border-white/[0.06] transition-transform duration-300 hover:translate-x-2.5 cursor-default"
              >
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

      {/* TECNOLOGÍA — 2 col */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">TECNOLOGÍA</p>
          <h2
            className="font-sans font-bold text-camhaji-text mb-14"
            style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}
          >
            Herramientas que usamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <p className="label-uppercase text-camhaji-muted mb-6">PLATAFORMAS</p>
              <div className="flex flex-wrap gap-2">
                {techPills.map((t) => (
                  <span
                    key={t}
                    className="font-sans text-sm border border-border-subtle rounded-sm px-4 py-2 text-camhaji-text"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              {techFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-sans font-bold text-camhaji-text mb-1">{f.title}</h3>
                    <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — collapsible */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[840px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">PREGUNTAS FRECUENTES</p>
          <h2
            className="font-sans font-bold text-camhaji-text mb-14"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.02em" }}
          >
            Sobre el servicio de Contabilidad
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
                  style={{ maxHeight: openFaq === i ? "200px" : "0", opacity: openFaq === i ? 1 : 0 }}
                >
                  <p className="pl-11 pb-6 font-sans text-[15px] text-camhaji-muted leading-relaxed">{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTROS SERVICIOS */}
      <section className="bg-white py-20 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted text-center mb-10">OTROS SERVICIOS</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { num: "02", name: "Estrategia Fiscal", desc: "Planificación y cumplimiento SAT sin sorpresas.", href: "#" },
              { num: "03", name: "Nómina & Facturación", desc: "CFDI, IMSS e Infonavit con CONTPAQi.", href: "#" },
            ].map((s) => (
              <a
                key={s.num}
                href={s.href}
                className="group border border-border-subtle p-8 flex items-start gap-6 hover:border-primary/30 transition-colors"
              >
                <span className="font-sans font-bold text-[40px] text-primary/10 leading-none" style={{ letterSpacing: "-0.03em" }}>
                  {s.num}
                </span>
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
        <p className="label-uppercase text-white/40 mb-6">¿LISTO PARA EMPEZAR?</p>
        <h2
          className="font-sans font-bold text-white mb-12"
          style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}
        >
          Hablemos de tu contabilidad.
        </h2>
        <a
          href="/version-c/contacto"
          className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5"
        >
          AGENDAR CONSULTA GRATUITA
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
