import { useState } from "react";
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

const milestones = [
  { value: "10+", label: "AÑOS DE TRAYECTORIA INDIVIDUAL" },
  { value: "6", label: "AÑOS COMO FIRMA CONSTITUIDA" },
  { value: "10", label: "PROFESIONALES EN EL EQUIPO" },
];

const team = [
  {
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente General",
    bio: "Contador con más de 10 años de trayectoria. Experiencia en grandes firmas de auditoría, contabilidad hotelera de alto nivel y gestión fiscal corporativa en Cancún. Fundador del despacho en 2019.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Especialista en administración empresarial. Coordina cuentas por pagar/cobrar, tesorería y recursos humanos para los clientes del despacho.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor Nómina & Facturación",
    bio: "Referente en nómina y contribuciones de seguridad social. Especialista en CONTPAQi y en nóminas del sector construcción en Quintana Roo.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
  },
];

export default function NosotrosC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO — centered with background image */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop"
          alt="Equipo profesional"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-camhaji-base/[0.84]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[900px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span>Nosotros
          </p>
          <p className="label-uppercase text-white/30 mb-6">NUESTRA FIRMA</p>
          <h1
            className="font-serif italic text-white mb-6"
            style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.02em", lineHeight: 1.05 }}
          >
            La Firma
          </h1>
          <p className="font-sans text-white/50 max-w-[560px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.6 }}>
            Contabilidad con compromiso real. Más de 10 años de trayectoria individual respaldan cada decisión que tomamos por tu negocio.
          </p>
        </div>
      </section>

      <ClientLogos variant="c" />

      {/* HISTORIA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-16">NUESTRA HISTORIA</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <blockquote
              className="font-serif italic text-camhaji-text"
              style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.4, letterSpacing: "-0.01em" }}
            >
              "Somos una firma joven con más de 10 años de trayectoria individual. Nacimos de la convicción de que la contabilidad puede — y debe — hacerse con compromiso real."
            </blockquote>
            <div>
              <p className="font-sans text-[16px] text-camhaji-text leading-relaxed mb-5">
                Camhaji nació de la sociedad entre dos primos con una visión compartida: una firma donde los clientes pudieran confiar de verdad. El equipo tiene más de 10 años de trayectoria en grandes firmas de auditoría, hotelería de alto nivel y contabilidad corporativa.
              </p>
              <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
                Conocemos los estándares de las grandes firmas y los aplicamos con la cercanía de un despacho boutique en Cancún. Hoy atendemos empresas de construcción, comercio y servicios en Quintana Roo con un equipo de 10 profesionales.
              </p>
            </div>
          </div>

          {/* Milestones */}
          <div className="mt-20 pt-12 border-t border-border-subtle flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center gap-0">
                <div className="text-center px-8 md:px-12">
                  <span
                    className="font-sans font-bold text-primary block"
                    style={{ fontSize: "clamp(48px, 8vw, 72px)", letterSpacing: "-0.04em", lineHeight: 1 }}
                  >
                    {m.value}
                  </span>
                  <p className="label-uppercase text-camhaji-muted mt-3 max-w-[180px] mx-auto">{m.label}</p>
                </div>
                {i < milestones.length - 1 && <div className="hidden md:block w-px h-16 bg-border-subtle" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISIÓN / VISIÓN */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-10 text-center">LO QUE NOS MUEVE</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[3px]">
            <div className="bg-white p-10 md:p-14">
              <p className="label-uppercase text-primary mb-6">MISIÓN</p>
              <p className="font-serif italic text-camhaji-text" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: 1.5 }}>
                Brindar servicios contables, fiscales y administrativos con compromiso real, adaptándonos a la realidad de cada cliente para darle control y tranquilidad sobre sus finanzas.
              </p>
            </div>
            <div className="bg-white p-10 md:p-14">
              <p className="label-uppercase text-primary mb-6">VISIÓN</p>
              <p className="font-serif italic text-camhaji-text" style={{ fontSize: "clamp(18px, 2.2vw, 24px)", lineHeight: 1.5 }}>
                Ser la firma de referencia en Quintana Roo para empresas que buscan contabilidad profesional con trato cercano, transparente y sin letra chica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="bg-primary py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <p className="label-uppercase text-white/30">NUESTRA FILOSOFÍA</p>
            <h2
              className="font-sans font-bold text-white md:text-right max-w-[400px]"
              style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}
            >
              Los principios que nos definen
            </h2>
          </div>
          <div className="border-t border-white/[0.08]">
            {principles.map((p) => (
              <div
                key={p.num}
                className="flex items-start gap-6 py-6 border-b border-white/[0.06] transition-transform duration-300 hover:translate-x-2.5 cursor-default"
              >
                <span className="font-sans text-sm text-white/20 mt-1 w-8 flex-shrink-0">{p.num}</span>
                <div>
                  <h3 className="font-sans font-bold text-white text-lg mb-1">{p.name}</h3>
                  <p className="font-sans text-sm font-light text-white/50">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <p className="label-uppercase text-camhaji-muted">NUESTRO EQUIPO</p>
            <h2
              className="font-sans font-bold text-camhaji-text md:text-right max-w-[350px]"
              style={{ fontSize: "clamp(20px, 2.5vw, 32px)", letterSpacing: "-0.02em" }}
            >
              Las personas detrás del compromiso
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((m) => (
              <div key={m.name}>
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale-[15%]"
                  />
                </div>
                <div className="w-8 h-px bg-camhaji-accent mb-4" />
                <h3 className="font-sans font-bold text-lg text-camhaji-text mb-1">{m.name}</h3>
                <p className="label-uppercase text-primary mb-3">{m.role}</p>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">DA EL SIGUIENTE PASO</p>
        <h2
          className="font-sans font-bold text-white mb-12"
          style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}
        >
          Hablemos de tu negocio.
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
