import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const heroTags = ["ERP PROPIO", "CONTADOR DEDICADO", "CONSULTAS ILIMITADAS"];

const summary = [
  "Contabilidad mensual completa",
  "Monitoreo ERP tiempo real",
  "Declaraciones SAT puntuales",
  "Contador dedicado asignado",
  "Consultas ilimitadas incluidas",
];

const steps = [
  { num: "01", title: "Diagnóstico", desc: "Evaluamos tu situación actual sin costo. 30 minutos, sin compromiso." },
  { num: "02", title: "Onboarding", desc: "Contador dedicado asignado. Definimos cómo nos envías documentos." },
  { num: "03", title: "Ejecución mensual", desc: "Registro, conciliación y cálculo de impuestos cada mes." },
  { num: "04", title: "Reporte", desc: "Dashboard en tiempo real + resumen mensual directo contigo." },
];

const modules = [
  { label: "REGISTRO", items: ["Registro de ingresos y egresos", "Pólizas mensuales", "Archivo digital", "Balance y estado de resultados"] },
  { label: "BANCARIO", items: ["Conciliación mensual", "Análisis de movimientos", "Auxiliares por cuenta"] },
  { label: "FISCAL", items: ["ISR e IVA mensual", "Declaraciones SAT", "Declaración anual incluida"] },
  { label: "ERP", items: ["Dashboard en tiempo real", "Alertas de vencimientos", "Acceso permanente"] },
  { label: "ASESORÍA", items: ["Contador dedicado", "WhatsApp ilimitado", "Reunión mensual"] },
  { label: "TRÁMITES", items: ["Aclaraciones SAT", "Respuesta a requerimientos", "Opinión de cumplimiento"] },
];

const idealFor = [
  "Tienes una empresa con operaciones continuas",
  "Quieres orden sin ocupar tu tiempo en ello",
  "Has tenido problemas o atrasos con el SAT",
  "Quieres claridad financiera para crecer",
];

const faqs = [
  { q: "¿Cuánto cuesta el servicio de contabilidad?", a: "El costo depende del volumen de operaciones y complejidad de tu empresa. Ofrecemos una evaluación gratuita para darte una propuesta específica." },
  { q: "¿Puedo cambiar de despacho si ya tengo contador?", a: "Sí, y lo hacemos fácil. Nos encargamos de la transición: recuperamos tu historial contable, regularizamos pendientes y tomamos el control sin interrumpir tu operación." },
  { q: "¿Qué pasa si tengo meses atrasados?", a: "Es más común de lo que crees. Hacemos un diagnóstico, priorizamos lo urgente y ponemos tu contabilidad al corriente de forma ordenada." },
  { q: "¿Con qué software trabajan?", a: "Usamos CONTPAQi para nómina y facturación, y nuestra plataforma ERP interna para monitoreo en tiempo real." },
];

export default function ServicioContabilidadB() {
  return (
    <div className="min-h-screen">
      <Navbar version="b" />

      {/* HERO */}
      <section className="bg-primary pt-32 pb-20 md:pt-40 md:pb-24 min-h-[50vh] flex items-end">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <p className="font-sans text-xs text-white/50 mb-4">
            <a href="/version-b" className="hover:text-white/70 transition-colors">Inicio</a> / Servicios / Contabilidad
          </p>
          <p className="label-uppercase text-white/50 mb-4">SERVICIO 01 DE 03</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Contabilidad & Administración para tu Empresa
          </h1>
          <p className="font-serif text-lg italic text-white/60 mb-8">Del registro al control total.</p>
          <div className="flex flex-wrap gap-4">
            {heroTags.map((t) => (
              <span key={t} className="label-uppercase text-white/70 border border-white/20 px-4 py-2 rounded-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO EDITORIAL */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
            <div className="md:col-span-7">
              <span className="font-serif text-8xl font-bold text-primary/10 block mb-4" aria-hidden="true">01</span>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-6">
                Contabilidad que te da control, no solo cumplimiento
              </h2>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed mb-4">
                La mayoría de los despachos solo llevan tus números para cumplir con el SAT. Nosotros llevamos tu contabilidad para que tú puedas tomar mejores decisiones.
              </p>
              <p className="font-sans text-sm text-camhaji-muted leading-relaxed">
                Con nuestro ERP interno tienes visibilidad de tu situación financiera en tiempo real.
              </p>
            </div>
            <div className="md:col-span-5 md:sticky md:top-28 self-start">
              <div className="bg-surface p-8 rounded-sm border border-border-subtle">
                <p className="label-uppercase text-camhaji-muted mb-6">EN RESUMEN</p>
                <ul className="space-y-3">
                  {summary.map((s) => (
                    <li key={s} className="font-sans text-sm text-camhaji-text flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />{s}
                    </li>
                  ))}
                </ul>
                <a href="/version-b/contacto" className="btn-uppercase bg-primary text-primary-foreground px-6 py-3 inline-block mt-8 hover:bg-primary-hover transition-colors">AGENDAR CONSULTA</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA — NEGRO */}
      <section className="bg-camhaji-black py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-white/40 mb-4">EL PROCESO</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-16">Así trabajamos contigo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.num}>
                <span className="font-serif text-4xl font-bold text-white/10 block mb-4">{s.num}</span>
                <h3 className="font-serif text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUÉ INCLUYE */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4">ALCANCE COMPLETO</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-16">Todo lo que está incluido</h2>
          <div className="space-y-0">
            {modules.map((m, i) => (
              <div key={m.label} className="border-t border-border-subtle py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                <p className="label-uppercase text-primary md:col-span-2">{m.label}</p>
                <div className="md:col-span-10 flex flex-wrap gap-x-8 gap-y-2">
                  {m.items.map((item) => (
                    <span key={item} className="font-sans text-sm text-camhaji-muted">{item}</span>
                  ))}
                </div>
              </div>
            ))}
            <div className="border-t border-border-subtle" />
          </div>
        </div>
      </section>

      {/* PARA QUIÉN */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="label-uppercase text-camhaji-muted mb-4">ES PARA TI SI...</p>
              <ul className="space-y-4">
                {idealFor.map((item) => (
                  <li key={item} className="font-sans text-sm text-camhaji-text flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-center">
              <p className="font-serif text-xl italic text-camhaji-text mb-6">
                "No necesitas tener todo en orden para empezar. Empezamos desde donde estés."
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/version-b/contacto" className="btn-uppercase bg-primary text-primary-foreground px-6 py-3 hover:bg-primary-hover transition-colors">AGENDAR DIAGNÓSTICO GRATUITO</a>
                <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="btn-uppercase text-primary hover:text-primary-hover transition-colors">o escríbenos al WhatsApp →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[700px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-4 text-center">PREGUNTAS FRECUENTES</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-camhaji-text mb-12 text-center">Sobre Contabilidad</h2>
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border-subtle">
                <AccordionTrigger className="font-serif text-base text-camhaji-text hover:no-underline py-5">
                  <span className="flex items-center gap-4">
                    <span className="font-sans text-xs text-camhaji-muted">{String(i + 1).padStart(2, "0")}</span>
                    {f.q}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-camhaji-muted leading-relaxed pl-10">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* OTROS SERVICIOS */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted mb-8">TAMBIÉN PUEDE INTERESARTE</p>
          <div className="space-y-0">
            {[
              { num: "02", title: "Estrategia Fiscal", desc: "Correcto cumplimiento SAT sin sorpresas." },
              { num: "03", title: "Nómina & Facturación", desc: "CFDI, IMSS e Infonavit con CONTPAQi." },
            ].map((s, i) => (
              <div key={i} className="border-t border-border-subtle py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="font-sans text-xs text-camhaji-muted">Servicio {s.num}</span>
                  <h3 className="font-serif text-lg font-bold text-camhaji-text">{s.title}</h3>
                </div>
                <p className="font-sans text-sm text-camhaji-muted">{s.desc}</p>
                <a href="#" className="btn-uppercase text-primary hover:text-primary-hover transition-colors shrink-0">CONOCER MÁS →</a>
              </div>
            ))}
            <div className="border-t border-border-subtle" />
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
