import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Phone } from "lucide-react";

const painPoints = [
  "Estimaciones de avance sin registro contable",
  "Nómina semanal con altas y bajas constantes en IMSS",
  "Retenciones a subcontratistas mal aplicadas",
  "Falta de visibilidad de costos por proyecto",
  "ISR diferido sin control ni planeación",
];

const services = [
  {
    num: "01",
    title: "Contabilidad de Obra",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18M3 7v14m4-14v14m4-14v14m4-14v14m4-14v14M1 7l11-4 11 4" />
      </svg>
    ),
    items: [
      "Costos por proyecto y estimaciones de avance",
      "Conciliación bancaria por obra",
      "Cierre contable mensual por proyecto",
    ],
  },
  {
    num: "02",
    title: "Nómina de Construcción",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: [
      "Nómina semanal con altas/bajas IMSS frecuentes",
      "Cálculo de contribuciones de seguridad social",
      "Timbrado CFDI de nómina con CONTPAQi",
    ],
  },
  {
    num: "03",
    title: "Fiscal para Construcción",
    icon: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    items: [
      "ISR diferido y planeación fiscal por obra",
      "IVA en materiales y mano de obra",
      "Retenciones SAT a subcontratistas",
    ],
  },
];

const differentiators = [
  {
    title: "Experiencia Real en Obra",
    desc: "No somos contadores generales adaptados. Conocemos la operación de una constructora desde adentro: estimaciones, subcontratos y IMSS de obra.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Costos por Proyecto",
    desc: "Cada obra tiene su propio centro de costos. Sabes exactamente cuánto gastas y cuánto ganas por proyecto, no en promedio.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Cero Multas SAT",
    desc: "Nuestros clientes de construcción no han recibido multas por retenciones mal aplicadas ni por incumplimiento fiscal. Ese es nuestro estándar.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

export default function SectorConstruccionC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO — left-aligned with construction photo */}
      <section className="min-h-[75dvh] relative flex items-end">
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&h=900&fit=crop"
          alt="Construcción en Cancún"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-camhaji-base/95 via-camhaji-base/60 to-camhaji-base/30" />
        <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-16 pt-32 w-full max-w-[1200px] mx-auto">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span>
            <span>Sectores</span>
            <span className="text-white/15 mx-2">/</span>
            <span>Construcción</span>
          </p>
          <p className="label-uppercase text-camhaji-accent/70 mb-6">ESPECIALIZACIÓN PRINCIPAL</p>
          <h1
            className="font-sans font-bold text-white"
            style={{ fontSize: "clamp(48px, 8vw, 100px)", letterSpacing: "-0.04em", lineHeight: 0.95 }}
          >
            Construcción
          </h1>
          <p className="font-sans text-white/50 mt-6 max-w-[500px]" style={{ fontSize: "clamp(16px, 1.6vw, 19px)", lineHeight: 1.6 }}>
            Contabilidad especializada para constructoras en Quintana Roo. Más de 6 años de experiencia real en el sector.
          </p>
        </div>
      </section>

      {/* EL SECTOR */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-14">EL SECTOR</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <div>
              <blockquote
                className="font-serif italic text-camhaji-text mb-6"
                style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.4 }}
              >
                "La construcción tiene una contabilidad que pocos contadores conocen de verdad."
              </blockquote>
              <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
                Las constructoras enfrentan desafíos contables únicos: proyectos de duración variable, múltiples subcontratistas, estimaciones de avance, retenciones y normativa fiscal específica. Un contador genérico comete errores costosos aquí.
              </p>
            </div>
            <div>
              <p className="label-uppercase text-camhaji-muted mb-5">PUNTOS CRÍTICOS DEL SECTOR</p>
              <div className="border-t border-border-subtle">
                {painPoints.map((p) => (
                  <div key={p} className="flex items-start gap-3 py-3.5 border-b border-border-subtle">
                    <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="font-sans text-[15px] text-camhaji-text">{p}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LO QUE HACEMOS — dark 3-col */}
      <section className="bg-camhaji-base py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <p className="label-uppercase text-white/30">LO QUE HACEMOS</p>
            <h2
              className="font-sans font-bold text-white md:text-right max-w-[450px]"
              style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}
            >
              Servicios especializados para constructoras
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/[0.08]">
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`py-10 ${i < 2 ? "md:border-r border-white/[0.06]" : ""} ${i > 0 ? "md:pl-8" : ""} ${i < 2 ? "md:pr-8" : ""}`}
              >
                <div className="text-white/40 mb-6">{s.icon}</div>
                <span className="font-sans text-xs text-white/20 tracking-[0.1em]">{s.num}</span>
                <h3 className="font-sans font-bold text-white text-lg mt-2 mb-5">{s.title}</h3>
                <div className="space-y-2.5">
                  {s.items.map((item) => (
                    <p key={item} className="font-sans text-sm font-light text-white/50 leading-relaxed">
                      — {item}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ CAMHAJI */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">POR QUÉ CAMHAJI</p>
          <h2
            className="font-sans font-bold text-camhaji-text mb-4"
            style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}
          >
            Lo que nos diferencia en el sector
          </h2>
          <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-14 max-w-[600px]">
            No somos un despacho genérico que también lleva constructoras. La construcción es nuestra especialización principal.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white p-8 md:p-10">
                <div className="w-10 h-10 rounded-sm bg-primary/10 flex items-center justify-center text-primary mb-6">
                  {d.icon}
                </div>
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{d.title}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">¿TIENES UNA CONSTRUCTORA?</p>
        <h2
          className="font-sans font-bold text-white mb-12"
          style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}
        >
          Hablemos de tus proyectos.
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
