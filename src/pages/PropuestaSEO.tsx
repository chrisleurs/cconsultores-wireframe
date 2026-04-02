import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";

/* ─── Data ─── */

const serpKeywords = [
  {
    keyword: "despacho contable cancún",
    vol: "170/mes",
    kd: "28",
    cpc: "$1.45",
    top3: "cbt.com.mx, contadorescancun.mx, despachocontablecerca.com.mx",
    brecha: "Sin nicho sectorial",
    oportunidad: "Posicionamiento especializado",
  },
  {
    keyword: "contador cancún",
    vol: "140/mes",
    kd: "24",
    cpc: "$1.59",
    top3: "contadoresencancun.com, conta-dor.com, yelp.com",
    brecha: "SERP contaminada con empleo",
    oportunidad: "Contenido orientado a empresa",
  },
  {
    keyword: "contador RESICO cancún",
    vol: "50/mes",
    kd: "—",
    cpc: "$3.03",
    top3: "edalcontadores.com, jbcontadores.com.mx, contadorresico.com.mx",
    brecha: "Nadie local especializado",
    oportunidad: "Página de sector dedicada ⭐",
  },
  {
    keyword: "contabilidad para constructoras cancún",
    vol: "40/mes",
    kd: "26",
    cpc: "$1.01",
    top3: "consultorescontablesmx.com, YouTube, siigo.com",
    brecha: "Ningún despacho local",
    oportunidad: "Oportunidad total ⭐⭐",
  },
  {
    keyword: "outsourcing de nómina",
    vol: "40/mes",
    kd: "—",
    cpc: "$13.51",
    top3: "outsourcingenmexico.com, legalknowhow.com.mx, cidenmexico.com",
    brecha: "Ningún despacho local rankea",
    oportunidad: "Página de servicio ⭐",
  },
  {
    keyword: "facturación CFDI",
    vol: "260/mes",
    kd: "13",
    cpc: "$2.00",
    top3: "satq.qroo.gob.mx, cancun.gob.mx, Facebook sefiplan",
    brecha: "Dominada por gobierno con geo",
    oportunidad: "Keyword sin geo funciona mejor",
  },
];

const sitePages = [
  { page: "/ (Home)", kw: "despacho contable Cancún", vol: "170", kd: "28", cpc: "$1.45", meta: "Camhaji Consultores — Despacho Contable en Cancún", h1: "Despacho Contable en Cancún", schema: "AccountingService + FAQPage", prio: "⭐ 4" },
  { page: "/nosotros", kw: "Camhaji Consultores despacho", vol: "—", kd: "—", cpc: "—", meta: "Sobre Nosotros — Camhaji Consultores, Cancún", h1: "Una Firma Joven con más de 10 Años", schema: "Organization + BreadcrumbList", prio: "8" },
  { page: "/equipo", kw: "contadores Camhaji Consultores", vol: "—", kd: "—", cpc: "—", meta: "Nuestro Equipo — Camhaji Consultores Cancún", h1: "El Equipo que Respalda tu Tranquilidad", schema: "Person × 3 + BreadcrumbList", prio: "9" },
  { page: "/servicios/contabilidad", kw: "contabilidad para empresas Cancún", vol: "bajo", kd: "baja", cpc: "—", meta: "Contabilidad para Empresas en Cancún — Camhaji", h1: "Contabilidad y Administración para tu Empresa en Cancún", schema: "Service + FAQPage + BreadcrumbList", prio: "6" },
  { page: "/servicios/fiscal", kw: "asesoría fiscal Cancún", vol: "bajo", kd: "muy baja", cpc: "—", meta: "Asesoría Fiscal en Cancún — Sin Sorpresas con el SAT", h1: "Estrategia Fiscal en Cancún: Cumple, no Improvises", schema: "Service + FAQPage + BreadcrumbList", prio: "7" },
  { page: "/servicios/nomina", kw: "outsourcing de nómina", vol: "40", kd: "—", cpc: "$13.51", meta: "Servicio de Nómina para Empresas en Cancún — Camhaji", h1: "Nómina Empresarial en Cancún: Sin Errores, sin Retrasos", schema: "Service + BreadcrumbList", prio: "⭐ 5" },
  { page: "/servicios/facturacion", kw: "facturación CFDI", vol: "260", kd: "13", cpc: "$2.00", meta: "Facturación CFDI para Empresas en Cancún — Camhaji Consultores", h1: "Facturación CFDI para tu Empresa en Cancún", schema: "Service + FAQPage + BreadcrumbList", prio: "⭐ 3" },
  { page: "/sectores/construccion", kw: "contabilidad para constructoras", vol: "40", kd: "26", cpc: "$1.01", meta: "Contabilidad para Constructoras en Cancún — Camhaji Consultores", h1: "Contabilidad Especializada para Constructoras en Cancún", schema: "Service + FAQPage + BreadcrumbList", prio: "⭐⭐ 1" },
  { page: "/sectores/comercial", kw: "contabilidad empresas comerciales Cancún", vol: "—", kd: "baja", cpc: "—", meta: "Contabilidad para Empresas Comerciales en Cancún — Camhaji", h1: "Contabilidad para Empresas de Comercialización en Cancún", schema: "Service + BreadcrumbList", prio: "10" },
  { page: "/sectores/resico-prestadores", kw: "contador RESICO", vol: "50", kd: "58", cpc: "$3.03", meta: "Contador para RESICO en Cancún — Camhaji Consultores", h1: "Contador para RESICO en Cancún: Cumple sin Complicaciones", schema: "Service + FAQPage + BreadcrumbList", prio: "⭐⭐ 2" },
  { page: "/sectores/inmobiliario", kw: "contabilidad agentes inmobiliarios", vol: "0", kd: "—", cpc: "—", meta: "Contabilidad para Agentes Inmobiliarios en Cancún", h1: "Contabilidad para Agentes Inmobiliarios en Cancún", schema: "Service + BreadcrumbList", prio: "12" },
  { page: "/contacto", kw: "contratar despacho contable Cancún", vol: "—", kd: "—", cpc: "—", meta: "Contacto — Camhaji Consultores, Cancún", h1: "Hablemos de tu Negocio", schema: "AccountingService + BreadcrumbList", prio: "11" },
];

const antiCannibalization = [
  { kw: "despacho contable Cancún", page: "Home", note: "Solo mencionado, no como H1" },
  { kw: "contador RESICO", page: "/sectores/resico-prestadores", note: "Mencionado en blog" },
  { kw: "contabilidad constructoras", page: "/sectores/construccion", note: "No en ningún otro lugar" },
  { kw: "outsourcing de nómina", page: "/servicios/nomina", note: "No en otro lugar" },
  { kw: "facturación CFDI", page: "/servicios/facturacion", note: "Solo referencia cruzada" },
  { kw: "asesoría fiscal Cancún", page: "/servicios/fiscal", note: "No duplicar en Home" },
  { kw: "contabilidad para empresas Cancún", page: "/servicios/contabilidad", note: "No duplicar en Home" },
];

const blogArticles = [
  { num: "01", title: "¿Qué es el RESICO y cómo funciona en 2026?", kw: "RESICO", vol: "27,100/mes", kd: "2", cpc: "$0.13", words: "1,800–2,200", author: "Rogelio Ramón Moo Ruiz", month: "Mes 3" },
  { num: "02", title: "RESICO para Agentes Inmobiliarios: Todo lo que Necesitas Saber", kw: "régimen simplificado de confianza", vol: "18,100/mes", kd: "3", cpc: "$0.06", words: "1,500–1,800", author: "Rogelio Ramón Moo Ruiz", month: "Mes 5" },
  { num: "03", title: "Contabilidad para Constructoras en México: lo que Nadie te Explica", kw: "contabilidad para constructoras", vol: "40/mes", kd: "26", cpc: "$1.01", words: "2,000–2,500", author: "Rogelio / Karen", month: "Mes 4" },
  { num: "04", title: "Facturación CFDI: Errores Comunes y Cómo Evitarlos", kw: "facturación CFDI", vol: "260/mes", kd: "13", cpc: "$2.00", words: "1,500–1,800", author: "Marlon Rafael Chávez", month: "Mes 6" },
  { num: "05", title: "¿Qué Pasa si Llevo Años con el SAT Atrasado?", kw: "[Sin volumen — intención altísima]", vol: "—", kd: "—", cpc: "—", words: "1,500–1,800", author: "Rogelio Ramón Moo Ruiz", month: "Mes 4" },
];

const schemasByPage = [
  { page: "/ (Home)", schemas: "AccountingService + FAQPage" },
  { page: "/nosotros", schemas: "Organization + BreadcrumbList" },
  { page: "/equipo", schemas: "Person × 3 + BreadcrumbList" },
  { page: "/servicios/contabilidad", schemas: "Service + FAQPage + BreadcrumbList" },
  { page: "/servicios/fiscal", schemas: "Service + FAQPage + BreadcrumbList" },
  { page: "/servicios/nomina", schemas: "Service + FAQPage + BreadcrumbList" },
  { page: "/servicios/facturacion", schemas: "Service + FAQPage + BreadcrumbList" },
  { page: "/sectores/construccion", schemas: "Service + FAQPage + BreadcrumbList" },
  { page: "/sectores/comercial", schemas: "Service + BreadcrumbList" },
  { page: "/sectores/resico-prestadores", schemas: "Service + FAQPage + BreadcrumbList" },
  { page: "/sectores/inmobiliario", schemas: "Service + FAQPage + BreadcrumbList" },
  { page: "/contacto", schemas: "AccountingService (NAP) + BreadcrumbList" },
  { page: "Blog (cada artículo)", schemas: "Article + FAQPage + BreadcrumbList" },
];

const faqSections = [
  {
    section: "Home",
    faqs: [
      { q: "¿Cuánto cobra un contador en Cancún?", a: "El costo varía según los servicios requeridos. La contabilidad básica para una empresa pequeña puede empezar desde $2,000-$4,000 MXN/mes. Para empresas medianas con nómina y facturación incluidas, el rango es de $5,000-$15,000 MXN/mes." },
      { q: "¿Cómo elegir un buen despacho contable en Cancún?", a: "Busca un despacho con equipo certificado, experiencia en tu sector, uso de software actualizado (CONTPAQi, ERP), y comunicación clara. Verifica referencias de otros clientes." },
      { q: "¿Qué servicios ofrece un despacho contable?", a: "Contabilidad mensual, declaraciones de impuestos, asesoría fiscal, nómina empresarial, facturación CFDI, administración de trámites ante el SAT, IMSS e INFONAVIT." },
    ],
  },
  {
    section: "Contabilidad",
    faqs: [
      { q: "¿Qué incluye el servicio de contabilidad mensual?", a: "Registro contable mensual, conciliación bancaria, cálculo de impuestos (IVA, ISR, retenciones), presentación de declaraciones ante el SAT, y acceso a ERP interno para monitoreo en tiempo real." },
      { q: "¿Por qué tercerizar la contabilidad?", a: "Evitas multas por errores o atrasos, reduces costos de una nómina interna de contadores y tienes respaldo profesional ante auditorías del SAT." },
      { q: "¿Cuánto cuesta el servicio de contabilidad en Cancún?", a: "El costo varía según el tamaño de la empresa y servicios requeridos. Ofrecemos cotización personalizada sin costo." },
    ],
  },
  {
    section: "Fiscal",
    faqs: [
      { q: "¿Qué pasa si llevo años sin declarar al SAT?", a: "El SAT puede generar créditos fiscales que incluyen impuesto original, recargos e inflación acumulada. Lo mejor es regularizarse de manera espontánea." },
      { q: "¿Cómo saber si tengo deudas con el SAT?", a: "Puedes consultarlo en el portal del SAT con tu RFC y contraseña en la sección 'Buzón Tributario'." },
      { q: "¿Qué es una auditoría del SAT?", a: "Una revisión formal de tu contabilidad y declaraciones. El SAT puede iniciarla si detecta inconsistencias o si llevas más de 2 años sin declarar." },
      { q: "¿Cuánto tiempo tengo para regularizarme?", a: "El SAT puede revisar hasta 5 años de historia fiscal (10 en casos especiales). La corrección espontánea reduce o elimina multas." },
    ],
  },
  {
    section: "Construcción",
    faqs: [
      { q: "¿Qué régimen fiscal usan las constructoras?", a: "Las constructoras como personas morales usan el Régimen General. Las micro-constructoras pueden usar RESICO si sus ingresos anuales no superan $35 millones." },
      { q: "¿Cómo se llevan los costos de obra?", a: "Se clasifican en directos (materiales, mano de obra) e indirectos (administración, supervisión). Se registran por proyecto y se reconocen conforme avanza la obra." },
      { q: "¿Las constructoras deben retener IVA a subcontratistas?", a: "Sí, deben retener el 6% de IVA sobre servicios de construcción y enterarlo directamente al SAT." },
      { q: "¿Cómo se manejan los trabajadores eventuales en IMSS?", a: "Deben darse de alta antes de iniciar labores y de baja al terminar. El patrón paga cuotas proporcionales a los días trabajados." },
      { q: "¿Qué pasa si no llevo bien la contabilidad?", a: "Riesgo de auditorías del SAT, multas por deducción incorrecta, problemas con el IMSS y pagos excesivos de impuestos." },
    ],
  },
  {
    section: "RESICO",
    faqs: [
      { q: "¿Qué es el RESICO y quién puede tributar?", a: "Régimen Simplificado de Confianza. Personas físicas con ingresos hasta $3.5M y personas morales hasta $35M que sean nuevas o con historial limpio." },
      { q: "¿Cuánto paga de impuestos una persona en RESICO?", a: "Entre 1% y 2.5% de ISR mensual. Si facturas $50,000 mensuales, pagas entre $500 y $1,250 de ISR." },
      { q: "¿Puedo cambiarme al RESICO en cualquier momento?", a: "No. Solo en enero de cada año, durante las primeras semanas del mes." },
      { q: "¿Qué pasa si excedo el límite de ingresos?", a: "El SAT te cambia automáticamente al Régimen General desde ese mes. Es importante monitorear tus ingresos." },
      { q: "¿El RESICO lleva contabilidad electrónica?", a: "Personas físicas tienen obligaciones simplificadas. Personas morales sí deben presentar contabilidad electrónica ante el SAT." },
    ],
  },
];

const competitors = [
  { domain: "cbt.com.mx", strength: "Multi-ciudad (4 ciudades)", weakness: "Sin nicho sectorial", howToBeat: "Nicho construcción + RESICO" },
  { domain: "contadorescancun.mx", strength: "Branding local fuerte", weakness: "Posicionamiento genérico", howToBeat: "Especialización + E-E-A-T del equipo" },
  { domain: "contadorresico.com.mx", strength: "Especialización RESICO nacional", weakness: "Virtual, sin presencia local", howToBeat: "Presencia física Cancún + RESICO" },
  { domain: "edalcontadores.com", strength: "Tiene plan RESICO", weakness: "No sector completa", howToBeat: "+ FAQs" },
  { domain: "corporativorivieramaya.com", strength: "Cubre PDC + Tulum", weakness: "Sin nicho", howToBeat: "Construcción en QR regional" },
];

const publicationPriority = [
  { prio: "⭐⭐ 1", page: "/sectores/construccion", reason: "Oportunidad total — nadie rankea, quick win garantizado" },
  { prio: "⭐⭐ 2", page: "/sectores/resico-prestadores", reason: "CPC $3.03 + ningún competidor local" },
  { prio: "⭐ 3", page: "/servicios/facturacion", reason: "260/mes — keyword de servicio con más volumen" },
  { prio: "⭐ 4", page: "/ (Home)", reason: "Base del sitio + GBP" },
  { prio: "⭐ 5", page: "/servicios/nomina", reason: "CPC $13.51 — alta urgencia" },
  { prio: "6", page: "/servicios/contabilidad", reason: "Servicio principal" },
  { prio: "7", page: "/servicios/fiscal", reason: "Servicio de alta conversión (miedo SAT)" },
  { prio: "8", page: "/nosotros", reason: "E-E-A-T" },
  { prio: "9", page: "/equipo", reason: "E-E-A-T — requiere fotos del cliente" },
  { prio: "10", page: "/sectores/comercial", reason: "Segundo nicho" },
  { prio: "11", page: "/contacto", reason: "Habilitar conversión desde día 1" },
  { prio: "12", page: "/sectores/inmobiliario", reason: "Sin keyword SEO — publicar en fase 2" },
];

/* ─── Component ─── */

export default function PropuestaSEO() {
  const [openFaqSection, setOpenFaqSection] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-camhaji-base text-white min-h-screen">
      <Navbar version="c" />

      {/* Hero */}
      <section className="relative py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-camhaji-accent/5 to-transparent" />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 text-center">
          <span className="inline-block font-sans text-[10px] uppercase tracking-[0.3em] text-camhaji-accent/70 border border-camhaji-accent/20 px-4 py-1.5 rounded-sm mb-8">
            Estrategia SEO · Abril 2026
          </span>
          <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
            Estrategia SEO<br />
            <span className="text-camhaji-accent">HiFi</span>
          </h1>
          <p className="font-serif text-lg md:text-xl italic text-white/50 max-w-xl mx-auto mb-4">
            Camhaji Consultores — camhajiconsultores.mx
          </p>
          <p className="font-sans text-xs text-white/30 uppercase tracking-[0.2em]">
            Fuente: DataForSEO · Google Suggest · Firecrawl SERP en vivo
          </p>
        </div>
      </section>

      {/* Resumen Ejecutivo */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16">
            <div>
              <span className="label-uppercase text-camhaji-accent/60 mb-3 block">01</span>
              <h2 className="font-sans text-3xl md:text-4xl font-bold">Resumen Ejecutivo</h2>
            </div>
            <p className="font-sans text-sm text-white/40 max-w-md">
              6 keywords investigadas en vivo. Oportunidades reales con datos verificados.
            </p>
          </div>

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  {["Keyword", "Vol", "KD", "CPC", "Brecha", "Oportunidad"].map(h => (
                    <th key={h} className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/30 pb-4 pr-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {serpKeywords.map((k, i) => (
                  <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pr-4 font-sans text-sm font-medium text-white">{k.keyword}</td>
                    <td className="py-4 pr-4 font-sans text-sm text-white/60">{k.vol}</td>
                    <td className="py-4 pr-4 font-sans text-sm text-white/60">{k.kd}</td>
                    <td className="py-4 pr-4 font-sans text-sm text-camhaji-accent">{k.cpc}</td>
                    <td className="py-4 pr-4 font-sans text-xs text-white/40">{k.brecha}</td>
                    <td className="py-4 pr-4 font-sans text-xs text-camhaji-accent/80">{k.oportunidad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <div className="md:hidden space-y-4">
            {serpKeywords.map((k, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-sm p-5">
                <p className="font-sans text-sm font-bold text-white mb-3">{k.keyword}</p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  <div><span className="text-[10px] text-white/30 uppercase block">Vol</span><span className="text-xs text-white/60">{k.vol}</span></div>
                  <div><span className="text-[10px] text-white/30 uppercase block">KD</span><span className="text-xs text-white/60">{k.kd}</span></div>
                  <div><span className="text-[10px] text-white/30 uppercase block">CPC</span><span className="text-xs text-camhaji-accent">{k.cpc}</span></div>
                </div>
                <p className="text-xs text-white/40 mb-1"><span className="text-white/25">Brecha:</span> {k.brecha}</p>
                <p className="text-xs text-camhaji-accent/80"><span className="text-white/25">Oportunidad:</span> {k.oportunidad}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Análisis SERP */}
      <section className="py-20 md:py-28 bg-white/[0.02] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <span className="label-uppercase text-camhaji-accent/60 mb-3 block">02</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Análisis SERP en Vivo</h2>
            <p className="font-sans text-sm text-white/40 max-w-lg">
              Top 3 real de cada keyword, brechas identificadas y cómo Camhaji puede superarlos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {serpKeywords.map((k, i) => (
              <div key={i} className="bg-camhaji-base border border-white/[0.06] rounded-sm p-6 hover:border-camhaji-accent/20 transition-colors">
                <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-camhaji-accent/50 mb-3 block">Keyword {i + 1}</span>
                <h3 className="font-sans text-base font-bold text-white mb-1">{k.keyword}</h3>
                <p className="font-sans text-xs text-camhaji-accent mb-4">{k.vol} · CPC {k.cpc}</p>
                <div className="border-t border-white/[0.06] pt-4 mb-3">
                  <span className="text-[10px] text-white/30 uppercase block mb-2">Top 3 actual</span>
                  <p className="font-sans text-xs text-white/50 leading-relaxed">{k.top3}</p>
                </div>
                <div className="border-t border-white/[0.06] pt-3">
                  <p className="text-xs text-camhaji-accent/80">{k.oportunidad}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clusters del Sitio Web */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <span className="label-uppercase text-camhaji-accent/60 mb-3 block">03</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Clusters del Sitio Web</h2>
            <p className="font-sans text-sm text-white/40 max-w-lg">
              12 páginas. Un cluster = una página. Sin canibalización entre páginas.
            </p>
          </div>

          <div className="hidden lg:block overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  {["Prio", "Página", "Keyword Primaria", "Vol", "KD", "CPC", "Schema"].map(h => (
                    <th key={h} className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/30 pb-4 pr-3">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sitePages.map((p, i) => (
                  <tr key={i} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 pr-3 font-sans text-xs text-camhaji-accent font-bold">{p.prio}</td>
                    <td className="py-3 pr-3 font-sans text-sm text-white font-medium">{p.page}</td>
                    <td className="py-3 pr-3 font-sans text-xs text-white/70">{p.kw}</td>
                    <td className="py-3 pr-3 font-sans text-xs text-white/50">{p.vol}</td>
                    <td className="py-3 pr-3 font-sans text-xs text-white/50">{p.kd}</td>
                    <td className="py-3 pr-3 font-sans text-xs text-camhaji-accent">{p.cpc}</td>
                    <td className="py-3 pr-3 font-sans text-[10px] text-white/30">{p.schema}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile/tablet cards */}
          <div className="lg:hidden space-y-3">
            {sitePages.map((p, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-sm p-4">
                <div className="flex items-start justify-between mb-2">
                  <p className="font-sans text-sm font-bold text-white">{p.page}</p>
                  <span className="font-sans text-xs text-camhaji-accent font-bold shrink-0 ml-2">{p.prio}</span>
                </div>
                <p className="font-sans text-xs text-white/50 mb-1">{p.kw}</p>
                <div className="flex gap-3 text-[10px] text-white/40">
                  <span>Vol: {p.vol}</span>
                  <span>KD: {p.kd}</span>
                  <span className="text-camhaji-accent">CPC: {p.cpc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mapa Anti-Canibalización */}
      <section className="py-20 md:py-28 bg-white/[0.02] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <span className="label-uppercase text-camhaji-accent/60 mb-3 block">04</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Mapa Anti-Canibalización</h2>
            <p className="font-sans text-sm text-white/40 max-w-lg">
              Cada keyword tiene una sola página asignada. Sin duplicación.
            </p>
          </div>

          <div className="space-y-0">
            {antiCannibalization.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0 py-4 border-b border-white/[0.06]">
                <div className="md:w-1/3">
                  <p className="font-sans text-sm font-medium text-white">{item.kw}</p>
                </div>
                <div className="md:w-1/4 flex items-center gap-2">
                  <span className="w-6 h-px bg-camhaji-accent/40 hidden md:block" />
                  <p className="font-sans text-sm text-camhaji-accent">{item.page}</p>
                </div>
                <div className="md:w-5/12">
                  <p className="font-sans text-xs text-white/30">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clusters de Blog */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <span className="label-uppercase text-camhaji-accent/60 mb-3 block">05</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Clusters de Contenido: Blog</h2>
            <p className="font-sans text-sm text-white/40 max-w-lg">
              5 artículos. Capturan tráfico informacional masivo y lo convierten en leads.
            </p>
          </div>

          <div className="space-y-4">
            {blogArticles.map((a, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-sm p-6 hover:border-camhaji-accent/20 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  <span className="font-sans text-3xl font-bold text-camhaji-accent/20 shrink-0">{a.num}</span>
                  <div className="flex-1">
                    <h3 className="font-sans text-base md:text-lg font-bold text-white mb-2">{a.title}</h3>
                    <p className="font-sans text-xs text-white/50 mb-3">
                      Keyword: <span className="text-camhaji-accent">{a.kw}</span> · {a.vol} · KD {a.kd} · CPC {a.cpc}
                    </p>
                    <div className="flex flex-wrap gap-4 text-[10px] uppercase tracking-[0.15em] text-white/30">
                      <span>{a.words} palabras</span>
                      <span>Autor: {a.author}</span>
                      <span className="text-camhaji-accent/60">{a.month}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schemas JSON-LD */}
      <section className="py-20 md:py-28 bg-white/[0.02] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <span className="label-uppercase text-camhaji-accent/60 mb-3 block">06</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Schemas JSON-LD por Página</h2>
            <p className="font-sans text-sm text-white/40 max-w-lg">
              Structured data para rich snippets, FAQ carousels y Knowledge Panel.
            </p>
          </div>

          <div className="hidden md:block overflow-x-auto mb-16">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/30 pb-4 pr-4">Página</th>
                  <th className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/30 pb-4">Schemas</th>
                </tr>
              </thead>
              <tbody>
                {schemasByPage.map((s, i) => (
                  <tr key={i} className="border-b border-white/[0.04]">
                    <td className="py-3 pr-4 font-sans text-sm text-white">{s.page}</td>
                    <td className="py-3 font-sans text-xs text-white/50">{s.schemas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-2 mb-16">
            {schemasByPage.map((s, i) => (
              <div key={i} className="flex justify-between items-start py-3 border-b border-white/[0.06]">
                <p className="font-sans text-sm text-white">{s.page}</p>
                <p className="font-sans text-[10px] text-white/40 text-right max-w-[50%]">{s.schemas}</p>
              </div>
            ))}
          </div>

          {/* FAQ Bank */}
          <h3 className="font-sans text-xl font-bold text-white mb-8">Banco de FAQs</h3>
          <div className="space-y-2">
            {faqSections.map((section, si) => (
              <div key={si} className="border border-white/[0.06] rounded-sm overflow-hidden">
                <button
                  onClick={() => { setOpenFaqSection(openFaqSection === si ? null : si); setOpenFaq(null); }}
                  className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors text-left"
                >
                  <span className="font-sans text-sm font-bold text-white">{section.section}</span>
                  <span className="font-sans text-lg text-camhaji-accent transition-transform duration-300" style={{ transform: openFaqSection === si ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                </button>
                {openFaqSection === si && (
                  <div className="border-t border-white/[0.06]">
                    {section.faqs.map((faq, fi) => (
                      <div key={fi} className="border-b border-white/[0.04] last:border-b-0">
                        <button
                          onClick={() => setOpenFaq(openFaq === fi ? null : fi)}
                          className="w-full flex items-start justify-between p-4 pl-8 hover:bg-white/[0.02] transition-colors text-left"
                        >
                          <span className="font-sans text-sm text-white/80 pr-4">{faq.q}</span>
                          <span className="font-sans text-xs text-camhaji-accent shrink-0 transition-transform duration-300" style={{ transform: openFaq === fi ? "rotate(45deg)" : "rotate(0)" }}>+</span>
                        </button>
                        {openFaq === fi && (
                          <p className="font-sans text-xs text-white/40 leading-relaxed px-8 pb-4">{faq.a}</p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competidores */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <span className="label-uppercase text-camhaji-accent/60 mb-3 block">07</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Mapa de Competidores</h2>
          </div>

          <div className="space-y-4">
            {competitors.map((c, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.06] rounded-sm p-6">
                <h3 className="font-sans text-sm font-bold text-white mb-4">{c.domain}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/25 block mb-1">Fortaleza</span>
                    <p className="font-sans text-xs text-white/60">{c.strength}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-white/25 block mb-1">Debilidad</span>
                    <p className="font-sans text-xs text-white/60">{c.weakness}</p>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-camhaji-accent/40 block mb-1">Cómo superar</span>
                    <p className="font-sans text-xs text-camhaji-accent/80">{c.howToBeat}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prioridad de Publicación */}
      <section className="py-20 md:py-28 bg-white/[0.02] border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="mb-16">
            <span className="label-uppercase text-camhaji-accent/60 mb-3 block">08</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Prioridad de Publicación</h2>
          </div>

          <div className="space-y-0">
            {publicationPriority.map((p, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-1 md:gap-0 py-4 border-b border-white/[0.06] hover:bg-white/[0.02] transition-colors">
                <div className="md:w-20 shrink-0">
                  <span className="font-sans text-sm font-bold text-camhaji-accent">{p.prio}</span>
                </div>
                <div className="md:w-1/3">
                  <p className="font-sans text-sm font-medium text-white">{p.page}</p>
                </div>
                <div className="md:flex-1">
                  <p className="font-sans text-xs text-white/40">{p.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusiones */}
      <section className="py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10">
          <div className="mb-12">
            <span className="label-uppercase text-camhaji-accent/60 mb-3 block">09</span>
            <h2 className="font-sans text-3xl md:text-4xl font-bold mb-4">Conclusiones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "GBP es la palanca #1", desc: "Las keywords con geo \"Cancún\" tienen volumen bajo (170/mes) pero Local Pack captura 30-40% de clics desde móvil." },
              { num: "02", title: "Construcción = oportunidad total", desc: "Ningún despacho rankea. La página de sector se posiciona por defecto con contenido de calidad." },
              { num: "03", title: "RESICO = keyword con mayor ROI", desc: "CPC $3.03, ningún competidor local especializado, audiencia nacional accesible + local capturable." },
              { num: "04", title: "Facturación CFDI sin geo", desc: "La keyword con geo está dominada por el gobierno. Posicionar el servicio privado con la keyword nacional." },
              { num: "05", title: "Expansión QR — Fase 2", desc: "PDC y Tulum tienen brechas reales en construcción. Fase 2 cuando el sitio tenga autoridad base." },
              { num: "06", title: "Diferenciador de equipo", desc: "Rogelio (auditoría + hotelería), Karen (CxP/CxC), Marlon (CONTPAQi nómina) — activos de E-E-A-T sin igual en el SERP." },
            ].map((c, i) => (
              <div key={i} className="flex gap-5 p-6 bg-white/[0.03] border border-white/[0.06] rounded-sm">
                <span className="font-sans text-2xl font-bold text-camhaji-accent/20 shrink-0">{c.num}</span>
                <div>
                  <h3 className="font-sans text-sm font-bold text-white mb-2">{c.title}</h3>
                  <p className="font-sans text-xs text-white/40 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="max-w-[1200px] mx-auto px-5 md:px-10 text-center">
          <h2 className="font-sans text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listos para dominar el SERP de Cancún?
          </h2>
          <p className="font-serif italic text-white/60 mb-8 max-w-md mx-auto">
            Implementemos esta estrategia juntos.
          </p>
          <a
            href="https://wa.me/529981234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-sans text-xs uppercase tracking-[0.2em] border border-white/30 text-white px-8 py-3 rounded-sm hover:bg-white hover:text-primary transition-colors"
          >
            Hablemos →
          </a>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}
