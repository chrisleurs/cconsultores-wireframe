import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const values = [
  { num: "01", title: "Cumplir la palabra", desc: "Si lo decimos, lo hacemos. Sin pretextos." },
  { num: "02", title: "Honestidad", desc: "Decimos lo que pensamos aunque no sea lo esperado." },
  { num: "03", title: "Transparencia", desc: "No hay letra chica. Tu contabilidad es tuya." },
  { num: "04", title: "Responsabilidad", desc: "Nos hacemos cargo. Siempre." },
  { num: "05", title: "Empatía", desc: "Nos adaptamos a cada cliente y su realidad." },
];

const stats = [
  { value: "10+", label: "AÑOS TRAYECTORIA" },
  { value: "6", label: "COMO FIRMA" },
  { value: "10", label: "PROFESIONALES" },
  { value: "3", label: "ESPECIALIDADES" },
];

const team = [
  {
    name: "Rogelio R. Moo Ruiz",
    role: "Gerente General",
    bio: "Contador con trayectoria en grandes firmas de auditoría y hotelería de alto nivel en Cancún. Fundador del despacho.",
    tags: ["AUDITORÍA", "CORPORATIVO", "FUNDADOR"],
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Especialista en administración empresarial. Coordina cuentas por pagar/cobrar, tesorería y recursos humanos de clientes.",
    tags: ["ADMINISTRACIÓN", "RRHH", "TESORERÍA"],
  },
  {
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor Nómina & Facturación",
    bio: "Referente en nómina y contribuciones de seguridad social. Especialista en CONTPAQi y sector construcción.",
    tags: ["NÓMINA", "IMSS", "CONTPAQi"],
  },
];

const certs = ["COLEGIO DE CONTADORES · CANCÚN", "REGISTRO SAT", "CERTIFICADO CONTPAQi", "FUNDADOS 2019"];

export default function NosotrosB() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SPLIT */}
      <section className="min-h-[50vh] flex flex-col md:flex-row">
        <div className="flex-1 bg-primary flex items-end px-8 py-16 md:py-0 md:items-center md:px-16">
          <div className="max-w-lg">
            <p className="font-sans text-xs text-white/50 mb-4">
              <a href="/version-b" className="hover:text-white/70 transition-colors">Inicio</a> / Nosotros
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Somos Camhaji Consultores
            </h1>
            <p className="font-serif text-lg italic text-white/60">Contabilidad con compromiso real.</p>
          </div>
        </div>
        <div className="flex-1 bg-surface flex items-center justify-center px-8 py-12 md:py-0">
          <p className="label-uppercase text-camhaji-muted text-center">FUNDADOS EN 2019 · CANCÚN, QUINTANA ROO</p>
        </div>
      </section>

      {/* DECLARACIÓN TIPOGRÁFICA */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-8 text-center">QUIÉNES SOMOS</p>
          <p className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            "Somos una firma joven con más de 10 años de trayectoria. Nuestro trabajo se guía por cinco principios: cumplir la palabra, honestidad, transparencia, responsabilidad y empatía."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
              Camhaji nació de la sociedad entre dos primos con una visión compartida: una firma contable donde los clientes pudieran confiar de verdad.
            </p>
            <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
              Aunque somos una firma joven —6 años como despacho— el equipo tiene más de 10 años de trayectoria en grandes firmas de auditoría y contabilidad corporativa.
            </p>
            <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
              Conocemos los estándares de las grandes firmas y los aplicamos con la cercanía y atención personalizada de un despacho boutique en Cancún.
            </p>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA — NEGRO */}
      <section className="bg-camhaji-black py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <p className="label-uppercase text-white/40 mb-4">NUESTRA FILOSOFÍA</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-16">Los cinco principios que nos definen</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {values.map((v) => (
              <div key={v.num} className="text-center">
                <span className="font-sans text-xs text-white/40 block mb-3">{v.num}</span>
                <h3 className="font-serif text-lg text-white mb-2">{v.title}</h3>
                <p className="font-sans text-xs text-white/50 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex gap-8 flex-wrap">
              {stats.map((s, i) => (
                <div key={i}>
                  <span className="font-serif text-4xl md:text-5xl font-bold text-primary">{s.value}</span>
                  <p className="label-uppercase text-camhaji-muted mt-2">{s.label}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="font-serif text-xl italic text-camhaji-text mb-4">"Una firma joven con la experiencia que importa."</p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                Combinamos el rigor de las grandes firmas de auditoría con la cercanía de un despacho que conoce a sus clientes por nombre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">NUESTRO EQUIPO</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-16">Las personas detrás del compromiso</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((m, i) => (
              <div key={i}>
                <div className="aspect-square bg-surface rounded-sm mb-6 flex items-center justify-center border border-border-subtle">
                  <span className="label-uppercase text-camhaji-muted">FOTO CORPORATIVA</span>
                </div>
                <div className="w-8 h-px bg-primary mb-4" />
                <h3 className="font-serif text-lg font-bold text-camhaji-text">{m.name}</h3>
                <p className="label-uppercase text-primary mt-1 mb-3">{m.role}</p>
                <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">{m.bio}</p>
                <div className="flex flex-wrap gap-2">
                  {m.tags.map((t) => (
                    <span key={t} className="label-uppercase text-[10px] text-primary bg-primary/10 px-2 py-1 rounded-sm">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REGISTROS */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {certs.map((c) => (
              <span key={c} className="label-uppercase text-camhaji-text bg-background px-6 py-3 border border-border-subtle rounded-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — NEGRO */}
      <section className="bg-camhaji-black py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="label-uppercase text-white/40 mb-4">DA EL SIGUIENTE PASO</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Hablemos de tu negocio</h2>
            </div>
            <div className="md:border-l md:border-white/10 md:pl-12">
              <p className="font-sans text-base text-white/60 mb-8 leading-relaxed">Agenda una consulta gratuita y descubre cómo podemos ayudarte.</p>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a href="/version-b/contacto" className="btn-uppercase border border-white/55 text-white px-8 py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300">AGENDAR CONSULTA</a>
                <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="btn-uppercase text-white/60 border-b border-white/25 pb-1 hover:text-white hover:border-white/60 transition-all duration-300">o escríbenos por WhatsApp →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
