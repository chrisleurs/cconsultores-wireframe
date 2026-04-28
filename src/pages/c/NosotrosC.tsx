import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ClientLogos } from "@/components/ClientLogos";
import { Phone } from "lucide-react";

const principles = [
  { num: "01", name: "Cumplimos lo que prometemos", desc: "Si decimos que tu declaración estará lista el día 15, estará lista el día 15. La confianza se construye en los detalles." },
  { num: "02", name: "Honestidad sobre todo", desc: "Si tu situación fiscal es complicada, te lo decimos con claridad. Si algo no es posible, también. No vendemos humo ni prometemos lo que no podemos garantizar." },
  { num: "03", name: "Transparencia en cada proceso", desc: "Tienes derecho a saber en qué estado está tu contabilidad en cualquier momento. Y nos aseguramos de que siempre puedas preguntarlo y recibir una respuesta clara." },
  { num: "04", name: "Responsabilidad sin excusas", desc: "Tu empresa tiene obligaciones con fechas. Esas fechas son nuestras fechas. El SAT no espera y nosotros tampoco." },
  { num: "05", name: "Empatía con el cliente", desc: "Para muchos empresarios, el mundo fiscal es opaco y estresante. No juzgamos el punto de partida. Nos enfocamos en el destino." },
];

const milestones = [
  { value: "10+", label: "AÑOS DE TRAYECTORIA INDIVIDUAL" },
  { value: "6", label: "AÑOS COMO FIRMA CONSTITUIDA" },
  { value: "10", label: "PROFESIONALES EN EL EQUIPO" },
];

const team = [
  {
    name: "[Fundador — PENDIENTE]",
    role: "Fundador y Director",
    bio: "[Biografía pendiente — solicitar al cliente: origen profesional, motivación para fundar el despacho, especialidad o sector de mayor experiencia.]",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Rogelio Ramón Moo Ruiz",
    role: "Gerente General",
    bio: "Contador con trayectoria en grandes firmas del sector auditoría y en empresas del ramo hotelero, donde se desempeñó como contralor. Es la mano derecha de la dirección y el responsable de que la operación del despacho funcione con precisión. Comprometido con la firma desde sus primeros años.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Karen Rosado Ortiz",
    role: "Supervisora Administrativa",
    bio: "Contadora con amplia experiencia en la administración de empresas medianas y grandes. Ha trabajado en firmas reconocidas a nivel nacional. En Camhaji es responsable de cuentas por pagar, cuentas por cobrar y recursos humanos. Su orden y método son dos de los pilares operativos del despacho.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=800&fit=crop&crop=face",
  },
  {
    name: "Marlon Rafael Chávez Sánchez",
    role: "Supervisor de Nómina y Facturación",
    bio: "Especialista en nómina, ley laboral y contribuciones de seguridad social. Domina CONTPAQi con una profundidad que pocos logran. Es el referente interno cuando hay una duda compleja sobre IMSS, Infonavit o el CFDI de nómina. Lo que no sabe Marlon sobre nómina en México, probablemente no exista.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&crop=face",
  },
];

const distingue = [
  { name: "Respuesta el mismo día", desc: "Cuando tienes una duda urgente o necesitas algo, respondemos — no al día siguiente." },
  { name: "Adaptabilidad", desc: "Nos comunicamos como el cliente prefiera. Correo, WhatsApp, llamada. Sin rigidez de horario o canal." },
  { name: "Equipo con nombre", desc: "10 profesionales especializados, cada uno responsable de un área concreta. Sabes con quién hablas." },
];

export default function NosotrosC() {
  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[70dvh] relative flex items-center justify-center text-center">
        <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1600&h=900&fit=crop" alt="Equipo profesional" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-camhaji-base/[0.84]" />
        <div className="relative z-10 px-5 md:px-10 pt-24 pb-16 max-w-[900px]">
          <p className="font-sans text-xs text-white/30 mb-10">
            <a href="/version-c" className="hover:text-white/50 transition-colors">Inicio</a>
            <span className="text-white/15 mx-2">/</span>Nosotros
          </p>
          <p className="label-uppercase text-white/30 mb-6">DESPACHO CONTABLE EN CANCÚN</p>
          <h1 className="font-sans font-bold text-white mb-6" style={{ fontSize: "clamp(36px, 6vw, 72px)", letterSpacing: "-0.03em", lineHeight: 1.05 }}>
            El Equipo que Respalda tu Tranquilidad Financiera
          </h1>
          <p className="font-sans text-base font-light text-white/50 max-w-[600px] mx-auto" style={{ fontSize: "clamp(16px, 1.8vw, 20px)", lineHeight: 1.6 }}>
            Detrás de cada declaración, cada nómina y cada conciliación hay una persona con nombre, experiencia y responsabilidad clara. Estos son algunos de ellos.
          </p>
        </div>
      </section>

      <ClientLogos variant="c" />

      {/* HISTORIA */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-16">HISTORIA DE CAMHAJI CONSULTORES</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <h2 className="font-sans font-bold text-camhaji-text" style={{ fontSize: "clamp(22px, 3vw, 32px)", lineHeight: 1.3, letterSpacing: "-0.02em" }}>
              Cómo nació Camhaji Consultores
            </h2>
            <div>
              <p className="font-sans text-[16px] text-camhaji-text leading-relaxed mb-5">
                Hace 6 años, dos primos con trayectorias distintas dentro del mundo contable se sentaron a hablar de un problema real: sus clientes necesitaban atención fiscal y contable al mismo tiempo, y tenían que ir a dos lugares distintos para conseguirla.
              </p>
              <p className="font-sans text-[16px] text-camhaji-text leading-relaxed mb-5">
                La solución fue sencilla. Uno se hacía cargo de la parte fiscal. El otro, de la parte contable. Juntos, podían ofrecer lo que ninguno podía dar solo: un servicio integral, coordinado, sin huecos.
              </p>
              <p className="font-sans text-[16px] text-camhaji-text leading-relaxed mb-5">
                Así nació Camhaji Consultores.
              </p>
              <p className="font-sans text-[15px] font-light text-camhaji-muted leading-relaxed">
                Desde entonces, hemos crecido a un equipo de 10 personas. Hemos atendido <a href="/version-c/sectores/construccion" className="text-primary hover:underline">empresas de construcción</a>, comercializadoras, <a href="/version-c/sectores/resico" className="text-primary hover:underline">freelancers en RESICO</a>, agentes inmobiliarios y empresarios que llegaron con años de obligaciones atrasadas y salieron con sus finanzas en orden.
              </p>
            </div>
          </div>

          <div className="mt-20 pt-12 border-t border-border-subtle flex flex-col md:flex-row items-center justify-center gap-12 md:gap-0">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-center gap-0">
                <div className="text-center px-8 md:px-12">
                  <span className="font-sans font-bold text-primary block" style={{ fontSize: "clamp(48px, 8vw, 72px)", letterSpacing: "-0.04em", lineHeight: 1 }}>
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

      {/* DIRECCIÓN Y GERENCIA */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 gap-4">
            <p className="label-uppercase text-camhaji-muted">LIDERAZGO DEL DESPACHO CONTABLE</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {team.slice(0, 2).map((m) => (
              <div key={m.name}>
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale-[15%]" loading="lazy" />
                </div>
                <div className="w-8 h-px bg-camhaji-accent mb-4" />
                <h3 className="font-sans font-bold text-lg text-camhaji-text mb-1">{m.name}</h3>
                <p className="label-uppercase text-primary mb-3">{m.role}</p>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>

          <p className="label-uppercase text-camhaji-muted mb-10">EQUIPO DE NÓMINA Y FACTURACIÓN</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {team.slice(2).map((m) => (
              <div key={m.name}>
                <div className="aspect-[3/4] overflow-hidden mb-6">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover grayscale-[15%]" loading="lazy" />
                </div>
                <div className="w-8 h-px bg-camhaji-accent mb-4" />
                <h3 className="font-sans font-bold text-lg text-camhaji-text mb-1">{m.name}</h3>
                <p className="label-uppercase text-primary mb-3">{m.role}</p>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-white border border-border-subtle rounded-sm text-center">
            <p className="font-sans text-camhaji-text leading-relaxed">
              El equipo completo de Camhaji Consultores está integrado por <strong>10 profesionales especializados</strong>. Cada área tiene un responsable con nombre, experiencia y comunicación directa con el cliente.
            </p>
          </div>
        </div>
      </section>

      {/* FILOSOFÍA */}
      <section className="bg-primary py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 gap-4">
            <p className="label-uppercase text-white/30">VALORES DE CAMHAJI CONSULTORES</p>
            <h2 className="font-sans font-bold text-white md:text-right max-w-[400px]" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
              Nuestra filosofía de trabajo
            </h2>
          </div>
          <p className="font-sans text-white/60 leading-relaxed mb-12 max-w-[700px]" style={{ fontSize: "clamp(15px, 1.5vw, 17px)" }}>
            No tenemos un slogan corporativo enmarcado en la pared. Tenemos cinco principios que aplicamos en cada proceso, con cada cliente:
          </p>
          <div className="border-t border-white/[0.08]">
            {principles.map((p) => (
              <div key={p.num} className="flex items-start gap-6 py-6 border-b border-white/[0.06] transition-transform duration-300 hover:translate-x-2.5 cursor-default">
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

      {/* VISIÓN */}
      <section className="bg-surface py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-10 text-center">VISIÓN DEL DESPACHO EN CANCÚN</p>
          <div className="max-w-[800px] mx-auto text-center">
            <h2 className="font-sans font-bold text-camhaji-text mb-8" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
              Nuestra visión
            </h2>
            <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed mb-6">
              Queremos que Camhaji Consultores sea reconocida como la firma de referencia en Cancún para empresarios que quieren hacer las cosas bien. No por publicidad, sino por resultados comprobables.
            </p>
            <p className="font-sans text-[16px] font-light text-camhaji-muted leading-relaxed">
              Una firma donde los clientes saben que sus números están en orden, donde el equipo tiene nombre y apellido, y donde el compromiso no es una palabra en un folleto.
            </p>
          </div>
        </div>
      </section>

      {/* LO QUE NOS DISTINGUE */}
      <section className="bg-white py-24 px-5 md:px-10">
        <div className="max-w-[1100px] mx-auto">
          <p className="label-uppercase text-camhaji-muted mb-4">POR QUÉ ELEGIR CAMHAJI EN CANCÚN</p>
          <h2 className="font-sans font-bold text-camhaji-text mb-12" style={{ fontSize: "clamp(22px, 3vw, 36px)", letterSpacing: "-0.02em" }}>
            Lo que nos distingue como despacho contable en Cancún
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {distingue.map((d) => (
              <div key={d.name}>
                <div className="w-6 h-px bg-primary mb-5" />
                <h3 className="font-sans font-bold text-camhaji-text text-lg mb-3">{d.name}</h3>
                <p className="font-sans text-sm font-light text-camhaji-muted leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="min-h-[60dvh] bg-primary flex flex-col items-center justify-center text-center px-5 md:px-10 py-20">
        <p className="label-uppercase text-white/40 mb-6">CONTACTA A CAMHAJI CONSULTORES</p>
        <h2 className="font-sans font-bold text-white mb-12" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Hablemos de tu negocio.
        </h2>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="https://wa.me/5215543587159" target="_blank" rel="noopener noreferrer" className="btn-uppercase border border-white/50 text-white px-10 py-4 hover:bg-white/10 hover:border-white transition-all duration-300">
            ESCRÍBENOS POR WHATSAPP
          </a>
          <a href="/version-c/servicios/contabilidad" className="btn-uppercase border border-white/30 text-white/60 px-10 py-4 hover:text-white hover:border-white/60 transition-all duration-300">
            CONOCE CÓMO TRABAJAMOS →
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