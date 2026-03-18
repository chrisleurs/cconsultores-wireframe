import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle, XCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const benefits = [
  "Contabilidad al corriente cada mes, sin retrasos",
  "Visibilidad financiera en tiempo real (ERP)",
  "Declaraciones de impuestos puntuales",
  "Conciliación bancaria mensual incluida",
  "Atención directa con tu contador asignado",
];

const steps = [
  {
    num: "01",
    title: "Diagnóstico inicial (sin costo)",
    desc: "Revisamos tu situación fiscal y contable actual, identificamos pendientes y definimos el plan de trabajo. Agenda una consulta gratuita.",
  },
  {
    num: "02",
    title: "Onboarding y recolección",
    desc: "Te asignamos un contador dedicado. Nos adaptas tu proceso de envío de documentos: email, WhatsApp o el método que uses.",
  },
  {
    num: "03",
    title: "Registro y conciliación mensual",
    desc: "Cada mes registramos tus movimientos, conciliamos tus cuentas bancarias y calculamos tus impuestos a pagar.",
  },
  {
    num: "04",
    title: "Reporte y visibilidad",
    desc: "Recibes tu resumen financiero mensual y tienes acceso a tu ERP para ver tu estado en tiempo real. Sin sorpresas.",
  },
];

const modules = [
  {
    label: "REGISTRO",
    title: "Contabilidad Base",
    items: ["Registro de ingresos y egresos", "Pólizas contables mensuales", "Archivo digital de comprobantes", "Balance y estado de resultados"],
  },
  {
    label: "BANCARIO",
    title: "Conciliación",
    items: ["Conciliación bancaria mensual", "Análisis de movimientos inusuales", "Auxiliares por cuenta"],
  },
  {
    label: "FISCAL",
    title: "Impuestos",
    items: ["Cálculo mensual de ISR e IVA", "Declaraciones provisionales SAT", "Declaración anual incluida"],
  },
  {
    label: "ERP",
    title: "Monitoreo en tiempo real",
    items: ["Acceso a plataforma interna", "Dashboard financiero", "Alertas de vencimientos"],
  },
  {
    label: "ASESORÍA",
    title: "Consultoría",
    items: ["Contador dedicado asignado", "Consultas ilimitadas por WhatsApp", "Reunión mensual de revisión"],
  },
  {
    label: "TRÁMITES",
    title: "Gestiones SAT",
    items: ["Aclaraciones ante el SAT", "Respuesta a requerimientos", "Opinión de cumplimiento"],
  },
];

const idealYes = [
  "Empresa con operaciones continuas en México",
  "Dueño que quiere orden sin ocupar su tiempo",
  "Negocio que ha tenido problemas con el SAT",
  "Empresa que quiere crecer y necesita claridad financiera",
];

const idealNo = [
  "Persona física sin actividad empresarial frecuente",
  "Quien solo necesita una declaración anual puntual",
];

const faqs = [
  { q: "¿Cuánto cuesta el servicio de contabilidad?", a: "El costo depende del volumen de operaciones y complejidad de tu empresa. Ofrecemos una evaluación gratuita para darte una propuesta específica. No manejamos tarifas genéricas." },
  { q: "¿Puedo cambiar de despacho si ya tengo contador?", a: "Sí, y lo hacemos fácil. Nos encargamos de la transición: recuperamos tu historial contable, regularizamos pendientes y tomamos el control sin interrumpir tu operación." },
  { q: "¿Qué pasa si tengo meses atrasados?", a: "Es más común de lo que crees. Hacemos un diagnóstico, priorizamos lo urgente (declaraciones vencidas, multas pendientes) y ponemos tu contabilidad al corriente de forma ordenada." },
  { q: "¿Con qué software trabajan?", a: "Usamos CONTPAQi para nómina y facturación, y nuestra plataforma ERP interna para monitoreo en tiempo real. Eres dueño de todos tus datos en todo momento." },
];

export default function ServicioContabilidadA() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 min-h-[50vh] flex items-end">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <p className="font-sans text-xs text-white/50 mb-4">
            <a href="/version-a" className="hover:text-white/70 transition-colors">Inicio</a>
            {" / "}
            <span className="text-white/40">Servicios</span>
            {" / "}
            <span className="text-white/70">Contabilidad</span>
          </p>
          <p className="label-uppercase text-white/50 mb-4">NUESTROS SERVICIOS</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Contabilidad & Administración para tu Empresa
          </h1>
          <p className="font-sans text-base text-white/70 max-w-2xl leading-relaxed">
            Registro mensual, conciliación bancaria y monitoreo en tiempo real. Sin sorpresas.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <p className="label-uppercase text-camhaji-muted mb-4">QUÉ HACEMOS</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-6">
                Contabilidad que te da control, no sólo cumplimiento
              </h2>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">
                La mayoría de los despachos solo llevan tus números para cumplir con el SAT. Nosotros llevamos tu contabilidad para que tú puedas tomar mejores decisiones.
              </p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">
                Con nuestro ERP interno tienes visibilidad de tu situación financiera en tiempo real, sin esperar el cierre mensual.
              </p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                Nos adaptamos a tu proceso, no al revés.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-sm border border-border-subtle">
              <p className="label-uppercase text-camhaji-muted mb-6">BENEFICIOS PRINCIPALES</p>
              <ul className="space-y-4">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-[18px] h-[18px] text-primary mt-0.5 shrink-0" />
                    <span className="font-sans text-[15px] text-camhaji-text leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <a href="/version-a/contacto" className="btn-uppercase bg-primary text-primary-foreground px-6 py-3 inline-block mt-8 hover:bg-primary-hover transition-colors">
                AGENDAR CONSULTA GRATUITA
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">EL PROCESO</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-16">
            Así trabajamos contigo
          </h2>
          <div className="space-y-12">
            {steps.map((s) => (
              <div key={s.num} className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                <span className="font-serif text-4xl font-bold text-primary/20 md:col-span-2">{s.num}</span>
                <div className="md:col-span-10">
                  <h3 className="font-serif text-xl font-bold text-camhaji-text mb-2">{s.title}</h3>
                  <p className="font-sans text-sm text-camhaji-muted leading-relaxed max-w-xl">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">ALCANCE DEL SERVICIO</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-16">
            Todo lo que está incluido
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((m) => (
              <div key={m.label} className="p-6 border border-border-subtle rounded-sm">
                <p className="label-uppercase text-primary mb-2">{m.label}</p>
                <h3 className="font-serif text-lg font-bold text-camhaji-text mb-4">{m.title}</h3>
                <ul className="space-y-2">
                  {m.items.map((item) => (
                    <li key={item} className="font-sans text-sm text-camhaji-muted leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-12">
            ¿Este servicio es para ti?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="label-uppercase text-primary mb-6">CLIENTE IDEAL</p>
              <ul className="space-y-4">
                {idealYes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="font-sans text-sm text-camhaji-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="label-uppercase text-camhaji-muted mb-6">QUIZÁS NO ES PARA TI</p>
              <ul className="space-y-4 mb-8">
                {idealNo.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-camhaji-muted mt-0.5 shrink-0" />
                    <span className="font-sans text-sm text-camhaji-muted">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/version-a/contacto" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">
                PARA ESOS CASOS TENEMOS OTROS SERVICIOS →
              </a>
            </div>
          </div>
          <p className="font-sans text-sm text-camhaji-muted mt-12 leading-relaxed">
            Si no estás seguro si este servicio aplica para tu empresa, agenda una consulta gratuita. En 30 minutos evaluamos tu situación sin compromiso.
          </p>
          <a href="/version-a/contacto" className="btn-uppercase bg-primary text-primary-foreground px-6 py-3 inline-block mt-6 hover:bg-primary-hover transition-colors">
            AGENDAR DIAGNÓSTICO GRATUITO
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <p className="label-uppercase text-camhaji-muted mb-4">PREGUNTAS FRECUENTES</p>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text">
                Sobre Contabilidad
              </h2>
            </div>
            <div className="md:col-span-3">
              <Accordion type="single" collapsible className="space-y-0">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-border-subtle">
                    <AccordionTrigger className="font-serif text-base text-camhaji-text hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="font-sans text-sm text-camhaji-muted leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* OTROS SERVICIOS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-8">Servicios complementarios</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background p-8 border border-border-subtle rounded-sm">
              <p className="label-uppercase text-primary mb-2">FISCAL</p>
              <h3 className="font-serif text-xl font-bold text-camhaji-text mb-3">Estrategia Fiscal</h3>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">Planificación y cumplimiento SAT sin sorpresas.</p>
              <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">Conocer más →</a>
            </div>
            <div className="bg-background p-8 border border-border-subtle rounded-sm">
              <p className="label-uppercase text-primary mb-2">NÓMINA</p>
              <h3 className="font-serif text-xl font-bold text-camhaji-text mb-3">Nómina & Facturación</h3>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">CFDI, IMSS e Infonavit con CONTPAQi.</p>
              <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">Conocer más →</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary py-20 md:py-24 overflow-hidden">
        <span className="absolute font-serif font-bold text-white/[0.03] select-none pointer-events-none right-8 top-1/2 -translate-y-1/2" style={{ fontSize: "clamp(150px, 20vw, 300px)", lineHeight: 0.85 }} aria-hidden="true">CC</span>
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 text-center">
          <p className="label-uppercase text-white/50 mb-4">DA EL SIGUIENTE PASO</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Hablemos de tu negocio</h2>
          <p className="font-sans text-base text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">Agenda una consulta gratuita y descubre cómo podemos ayudarte a operar con tranquilidad, orden y sin sorpresas.</p>
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
