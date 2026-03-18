import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientLogos } from "@/components/ClientLogos";
import { Phone } from "lucide-react";

const principles = [
  { num: "01", name: "Cumplir la palabra", desc: "Si lo decimos, lo hacemos. Sin pretextos ni excusas." },
  { num: "02", name: "Honestidad", desc: "Decimos lo que pensamos aunque no sea lo esperado." },
  { num: "03", name: "Transparencia", desc: "No hay letra chica. Tu contabilidad es tuya." },
  { num: "04", name: "Responsabilidad", desc: "Nos hacemos cargo siempre, sin condiciones." },
  { num: "05", name: "Empatía", desc: "Nos adaptamos a cada cliente y su realidad específica." },
];

const stats = [
  { value: "10+", label: "AÑOS DE TRAYECTORIA" },
  { value: "6", label: "AÑOS COMO FIRMA" },
  { value: "10", label: "PROFESIONALES" },
  { value: "3", label: "ESPECIALIDADES" },
];

const team = [
  {
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente General",
    bio: "Contador con más de 10 años de trayectoria. Experiencia en grandes firmas de auditoría, contabilidad hotelera de alto nivel y gestión fiscal corporativa en Cancún. Fundador del despacho en 2019.",
    tags: ["AUDITORÍA", "CORPORATIVO", "GERENCIA"],
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Especialista en administración empresarial. Coordina cuentas por pagar/cobrar, tesorería y recursos humanos para los clientes del despacho.",
    tags: ["ADMINISTRACIÓN", "RRHH", "TESORERÍA"],
  },
  {
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor Nómina & Facturación",
    bio: "Referente en nómina y contribuciones de seguridad social. Especialista en CONTPAQi y en nóminas del sector construcción en Quintana Roo.",
    tags: ["NÓMINA", "IMSS", "CONTPAQi"],
  },
];

const certs = ["COLEGIO DE CONTADORES · CANCÚN", "REGISTRO SAT", "CERTIFICADO CONTPAQi", "FUNDADOS 2019"];

export default function NosotrosC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO SPLIT */}
      <section className="min-h-[60dvh] grid grid-cols-1 md:grid-cols-2">
        <div className="bg-camhaji-base flex flex-col justify-end p-8 md:p-12 pt-32">
          <p className="font-sans text-xs text-white/30 mb-8">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span>Nosotros
          </p>
          <p className="label-uppercase text-white/30 mb-6">NUESTRA FIRMA</p>
          <h1 className="font-sans font-bold text-white" style={{ fontSize: "clamp(32px, 5.5vw, 64px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
            Somos Camhaji Consultores
          </h1>
        </div>
        <div className="bg-primary flex items-end p-8 md:p-12">
          <div>
            <p className="font-serif italic text-white/70 mb-4" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", lineHeight: 1.35 }}>
              Contabilidad con compromiso real.
            </p>
            <p className="label-uppercase text-white/30">CANCÚN · FUNDADOS 2019</p>
          </div>
        </div>
      </section>

      {/* ORIGEN — declaración full-screen */}
      <section className="min-h-screen bg-white flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-camhaji-muted mb-16">QUIÉNES SOMOS</p>
        <blockquote
          className="font-serif italic text-camhaji-text max-w-[900px] mb-20"
          style={{ fontSize: "clamp(24px, 4vw, 52px)", lineHeight: 1.3, letterSpacing: "-0.01em" }}
        >
          "Somos una firma joven con más de 10 años de trayectoria individual. Nacimos de la convicción de que la contabilidad puede — y debe — hacerse con compromiso real."
        </blockquote>
        <div className="w-px h-16 bg-border-subtle mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[960px]">
          {[
            "Camhaji nació de la sociedad entre dos primos con una visión compartida: una firma donde los clientes pudieran confiar de verdad.",
            "El equipo tiene más de 10 años de trayectoria en grandes firmas de auditoría, hotelería de alto nivel y contabilidad corporativa.",
            "Conocemos los estándares de las grandes firmas y los aplicamos con la cercanía de un despacho boutique en Cancún.",
          ].map((text, i) => (
            <p key={i} className="font-sans text-[15px] text-camhaji-muted leading-relaxed border-t border-border-subtle pt-6">
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* PRINCIPIOS — 5 columnas dark */}
      <section className="min-h-screen bg-camhaji-base flex flex-col">
        <div className="text-center pt-20 px-5 md:px-10 mb-16">
          <p className="label-uppercase text-white/30 mb-4">NUESTRA FILOSOFÍA</p>
          <h2 className="font-sans font-bold text-white" style={{ fontSize: "clamp(24px, 3.5vw, 40px)", letterSpacing: "-0.03em" }}>
            Los principios que nos definen
          </h2>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-5 border-t border-white/[0.07] border-b border-white/[0.07]">
          {principles.map((p, i) => (
            <div
              key={i}
              className={`p-7 md:p-7 ${i < 4 ? "md:border-r border-white/[0.06]" : ""} border-b md:border-b-0 border-white/[0.06]`}
            >
              <span className="font-sans font-bold text-[56px] text-white/[0.06] leading-none block mb-8" style={{ letterSpacing: "-0.03em" }}>
                {p.num}
              </span>
              <h3 className="font-serif italic text-xl text-white leading-tight mb-4">{p.name}</h3>
              <p className="font-sans text-[13px] font-light text-white/45 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CIFRAS */}
      <section className="min-h-[80dvh] bg-surface grid grid-cols-1 md:grid-cols-2">
        {stats.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col items-center justify-center text-center min-h-[20dvh] md:min-h-[40dvh] ${
              i % 2 === 0 ? "md:border-r border-border-subtle" : ""
            } ${i < 2 ? "border-b border-border-subtle" : ""}`}
          >
            <span className="font-sans font-bold text-primary" style={{ fontSize: "clamp(80px, 14vw, 160px)", letterSpacing: "-0.04em", lineHeight: 1 }}>
              {s.value}
            </span>
            <p className="label-uppercase text-camhaji-muted mt-4">{s.label}</p>
          </div>
        ))}
      </section>

      {/* EQUIPO */}
      <section className="min-h-screen bg-white flex flex-col">
        <div className="max-w-[1200px] mx-auto w-full px-5 md:px-10 pt-20 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-4">
            <p className="label-uppercase text-camhaji-muted">NUESTRO EQUIPO</p>
            <h2 className="font-sans font-bold text-camhaji-text max-w-[300px] md:text-right" style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}>
              Las personas detrás del compromiso
            </h2>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-3">
          {team.map((m, i) => (
            <div key={i} className={`flex flex-col ${i < team.length - 1 ? "md:border-r border-border-subtle" : ""}`}>
              <div className="flex-1 bg-surface min-h-[320px] flex items-center justify-center">
                <span className="label-uppercase text-camhaji-muted">FOTO CORPORATIVA</span>
              </div>
              <div className="p-6 md:p-10 pb-12">
                <div className="w-6 h-px bg-primary mb-4" />
                <h3 className="font-sans font-bold text-lg text-camhaji-text mb-1">{m.name}</h3>
                <p className="label-uppercase text-primary mb-3">{m.role}</p>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed mb-4">{m.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {m.tags.map((t) => (
                    <span key={t} className="font-sans text-[10px] uppercase tracking-[0.1em] border border-border-subtle rounded-sm px-2 py-0.5 text-camhaji-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* REGISTROS */}
      <section className="bg-camhaji-base py-16 px-5 md:px-10">
        <div className="flex items-center justify-center gap-4 md:gap-8 flex-wrap">
          {certs.map((c, i) => (
            <span key={c} className="flex items-center gap-4 md:gap-8">
              <span className="font-sans text-xs uppercase tracking-[0.15em] text-white/30">{c}</span>
              {i < certs.length - 1 && <span className="w-px h-4 bg-white/10" />}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">DA EL SIGUIENTE PASO</p>
        <h2 className="font-sans font-bold text-white mb-12" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu negocio.
        </h2>
        <a href="/version-c/contacto" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300 mb-5">
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
