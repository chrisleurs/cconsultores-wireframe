import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const timeline = [
  { year: "2009", title: "Inicio de trayectoria", desc: "Rogelio Moo inicia su carrera en grandes firmas de auditoría en Cancún." },
  { year: "2014", title: "Especialización sectorial", desc: "Años de trabajo en contabilidad de hoteles y sector construcción en Quintana Roo." },
  { year: "2019", title: "Fundación de Camhaji", desc: "Se funda el despacho como firma independiente, uniendo expertise fiscal y contable." },
  { year: "2024", title: "Equipo de 10 profesionales", desc: "Crecimiento del equipo. Tres especialidades, un solo compromiso." },
];

const values = [
  { num: "01", title: "Cumplir la palabra", desc: "Si lo decimos, lo hacemos. Si prometemos una fecha, la cumplimos. Si nos comprometemos con un alcance, lo entregamos. La palabra es el contrato más importante." },
  { num: "02", title: "Honestidad", desc: "Decimos lo que pensamos aunque no sea lo que el cliente quiere escuchar. Si algo no está bien, lo decimos. La comodidad momentánea no vale la confianza a largo plazo." },
  { num: "03", title: "Transparencia", desc: "No hay letra chica en nuestro trabajo. Explicamos todo lo que hacemos, por qué lo hacemos y cuáles son las implicaciones. Tu contabilidad es tuya, no nuestra." },
  { num: "04", title: "Responsabilidad", desc: "Nos hacemos cargo. Si algo sale mal, lo reconocemos y lo resolvemos. No ponemos pretextos ni culpamos al cliente. La responsabilidad es parte del servicio." },
  { num: "05", title: "Empatía", desc: "Entendemos que no todos los empresarios saben de contabilidad — ni tienen por qué. Explicamos con claridad, nos adaptamos a cada cliente y nunca los hacemos sentir ignorantes por preguntar." },
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
    bio: "Contador con más de 10 años de trayectoria. Experiencia en grandes firmas de auditoría en Cancún, contabilidad hotelera de alto nivel y gestión fiscal corporativa. Fundador de Camhaji Consultores en 2019.",
    tags: ["AUDITORÍA", "CONTABILIDAD CORPORATIVA", "HOTELERÍA", "GERENCIA"],
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Especialista en administración empresarial, CxP, CxC y recursos humanos. Coordina los procesos administrativos de los clientes del despacho.",
    tags: ["ADMINISTRACIÓN", "RRHH"],
  },
  {
    name: "Marlon R. Chávez Sánchez",
    role: "Supervisor Nómina & Facturación",
    bio: "Referente en nómina y contribuciones de seguridad social. Especialista en CONTPAQi y en nóminas del sector construcción.",
    tags: ["NÓMINA", "IMSS", "CONTPAQi"],
  },
];

const certs = ["COLEGIO DE CONTADORES · CANCÚN", "REGISTRO SAT", "CERTIFICADO CONTPAQi"];

export default function NosotrosA() {
  return (
    <div className="min-h-screen">
      <Navbar version="a" />

      {/* HERO */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 min-h-[50vh] flex items-end">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <p className="font-sans text-xs text-white/50 mb-4">
            <a href="/version-a" className="hover:text-white/70 transition-colors">Inicio</a> / <span className="text-white/70">Nosotros</span>
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Somos Camhaji Consultores
          </h1>
          <p className="font-serif text-lg italic text-white/70">Contabilidad con compromiso real.</p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="label-uppercase text-camhaji-muted mb-4">NUESTRA HISTORIA</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-6">Una firma nacida del compromiso</h2>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">
                Camhaji Consultores nació de la sociedad entre dos primos con una visión compartida: crear una firma contable donde los clientes pudieran confiar de verdad. Uno con especialización fiscal, otro con experiencia en contabilidad corporativa.
              </p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                Aunque somos una firma joven —6 años como despacho— el equipo tiene más de 10 años de trayectoria individual en empresas de auditoría, hotelería de alto nivel y sector público. Conocemos los estándares de las grandes firmas y los aplicamos con la cercanía de un despacho boutique.
              </p>
            </div>
            <div className="space-y-0">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-6 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <span className="font-sans text-xs font-bold text-primary">{t.year}</span>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-border-subtle mt-2" />}
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-bold text-camhaji-text mb-1">{t.title}</h3>
                    <p className="font-sans text-sm text-camhaji-muted leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">NUESTRA FILOSOFÍA</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-4">Los valores que guían cada decisión</h2>
          <p className="font-serif text-base italic text-camhaji-muted mb-16 max-w-2xl">
            "No son valores decorativos en una pared. Son el criterio con el que evaluamos cada acción dentro de la firma."
          </p>
          <div className="space-y-10">
            {values.map((v) => (
              <div key={v.num} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start border-b border-border-subtle pb-10">
                <span className="font-serif text-3xl font-bold text-primary/20 md:col-span-1">{v.num}</span>
                <h3 className="font-serif text-xl font-bold text-camhaji-text md:col-span-3">{v.title}</h3>
                <p className="font-sans text-sm text-camhaji-muted leading-relaxed md:col-span-8">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CIFRAS */}
      <section className="bg-primary py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <span className="font-serif text-4xl md:text-5xl font-bold text-white">{s.value}</span>
                <p className="label-uppercase text-white/50 mt-3">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="font-serif text-lg italic text-white/70 text-center">"Una firma joven con la experiencia que importa."</p>
        </div>
      </section>

      {/* EQUIPO */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">NUESTRO EQUIPO</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-16">Las personas detrás del compromiso</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Main */}
            <div className="md:col-span-3">
              <div className="aspect-[4/3] bg-surface rounded-sm mb-6 flex items-center justify-center">
                <span className="label-uppercase text-camhaji-muted">FOTO CORPORATIVA</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-camhaji-text">{team[0].name}</h3>
              <p className="label-uppercase text-primary mt-1 mb-3">{team[0].role}</p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">{team[0].bio}</p>
              <div className="flex flex-wrap gap-2">
                {team[0].tags.map((t) => (
                  <span key={t} className="label-uppercase text-[10px] text-primary bg-primary/10 px-2 py-1 rounded-sm">{t}</span>
                ))}
              </div>
            </div>
            {/* Stacked */}
            <div className="md:col-span-2 space-y-8">
              {team.slice(1).map((m, i) => (
                <div key={i}>
                  <div className="aspect-[3/2] bg-surface rounded-sm mb-4 flex items-center justify-center">
                    <span className="label-uppercase text-camhaji-muted text-[10px]">FOTO</span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-camhaji-text">{m.name}</h3>
                  <p className="label-uppercase text-primary mt-1 mb-2">{m.role}</p>
                  <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-3">{m.bio}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span key={t} className="label-uppercase text-[10px] text-primary bg-primary/10 px-2 py-1 rounded-sm">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REGISTROS */}
      <section className="bg-surface py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-8">MEMBRESÍAS Y REGISTROS</p>
          <div className="flex flex-wrap gap-4">
            {certs.map((c) => (
              <span key={c} className="label-uppercase text-camhaji-text bg-background px-6 py-3 border border-border-subtle rounded-sm">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary py-20 md:py-24 overflow-hidden">
        <span className="absolute font-serif font-bold text-white/[0.03] select-none pointer-events-none right-8 top-1/2 -translate-y-1/2" style={{ fontSize: "clamp(150px, 20vw, 300px)", lineHeight: 0.85 }} aria-hidden="true">CC</span>
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <p className="label-uppercase text-white/50 mb-4">DA EL SIGUIENTE PASO</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Hablemos de tu negocio</h2>
          <p className="font-sans text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">Agenda una consulta gratuita y descubre cómo podemos ayudarte.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/version-a/contacto" className="btn-uppercase border border-white/55 text-white px-8 py-3.5 hover:bg-white/10 hover:border-white transition-all duration-300">AGENDAR CONSULTA</a>
            <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="btn-uppercase text-white/60 border-b border-white/25 pb-1 hover:text-white hover:border-white/60 transition-all duration-300">o escríbenos por WhatsApp →</a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
