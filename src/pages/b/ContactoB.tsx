import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const topics = [
  "Contabilidad y administración",
  "Estrategia fiscal",
  "Nómina y facturación",
  "Sector construcción",
  "Tengo atrasos con el SAT",
  "Otro",
];

export default function ContactoB() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SPLIT */}
      <section className="min-h-[40vh] flex flex-col md:flex-row">
        <div className="flex-1 bg-primary flex items-end px-8 py-16 md:py-0 md:items-center md:px-16">
          <div className="max-w-lg">
            <p className="font-sans text-xs text-white/50 mb-4">
              <a href="/version-b" className="hover:text-white/70 transition-colors">Inicio</a> / Contacto
            </p>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Agenda tu Consulta Gratuita
            </h1>
          </div>
        </div>
        <div className="flex-1 bg-surface flex items-center px-8 py-12 md:py-0 md:px-16">
          <ul className="space-y-3 font-sans text-sm text-camhaji-muted">
            <li className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary" /> (998) 123-4567</li>
            <li className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary" /> contacto@camhajiconsultores.mx</li>
            <li className="flex items-center gap-3"><Clock className="w-4 h-4 text-primary" /> Lun–Vie: 9:00 – 18:00</li>
          </ul>
        </div>
      </section>

      {/* FORMULARIO */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
            <div className="md:col-span-3">
              <span className="font-serif text-6xl font-bold text-primary/10 block mb-4" aria-hidden="true">01</span>
              <h2 className="font-serif text-2xl font-bold text-camhaji-text mb-8">Cuéntanos sobre tu empresa</h2>

              {status === "sent" ? (
                <div className="bg-primary/5 border border-primary/20 rounded-sm p-8 text-center" role="alert" tabIndex={-1}>
                  <p className="font-serif text-xl font-bold text-primary mb-2">¡Mensaje enviado!</p>
                  <p className="font-sans text-sm text-camhaji-muted">Respondemos en menos de 24 horas en días hábiles.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="font-sans text-xs text-camhaji-muted block mb-2">Nombre completo</label>
                      <input id="name" type="text" required autoComplete="name" className="w-full border-0 border-b border-border-subtle bg-transparent px-0 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="company" className="font-sans text-xs text-camhaji-muted block mb-2">Empresa</label>
                      <input id="company" type="text" autoComplete="organization" className="w-full border-0 border-b border-border-subtle bg-transparent px-0 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="font-sans text-xs text-camhaji-muted block mb-2">Teléfono</label>
                      <input id="phone" type="tel" autoComplete="tel" className="w-full border-0 border-b border-border-subtle bg-transparent px-0 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="email" className="font-sans text-xs text-camhaji-muted block mb-2">Email</label>
                      <input id="email" type="email" required autoComplete="email" className="w-full border-0 border-b border-border-subtle bg-transparent px-0 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="topic" className="font-sans text-xs text-camhaji-muted block mb-2">Tema de asesoría</label>
                    <select id="topic" className="w-full border-0 border-b border-border-subtle bg-transparent px-0 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors">
                      <option value="">Selecciona un tema...</option>
                      {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="font-sans text-xs text-camhaji-muted block mb-2">Mensaje</label>
                    <textarea id="message" rows={4} className="w-full border-0 border-b border-border-subtle bg-transparent px-0 py-3 font-sans text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                  </div>
                  <div className="flex items-start gap-3">
                    <input id="accept" type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mt-1" />
                    <label htmlFor="accept" className="font-sans text-xs text-camhaji-muted cursor-pointer">
                      Acepto que Camhaji Consultores me contacte para dar seguimiento.
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={!accepted || status === "sending"}
                    className="btn-uppercase bg-primary text-primary-foreground px-8 py-3.5 hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    aria-busy={status === "sending"}
                  >
                    {status === "sending" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
                  </button>
                  <p className="font-sans text-xs text-camhaji-muted">Respondemos en menos de 24 horas en días hábiles.</p>
                </form>
              )}
            </div>

            {/* Sidebar WhatsApp */}
            <div className="md:col-span-2 md:sticky md:top-28 self-start">
              <div className="bg-primary p-8 rounded-sm">
                <p className="label-uppercase text-white/50 mb-3">RESPUESTA INMEDIATA</p>
                <p className="font-serif text-2xl font-bold text-white mb-2">(998) 123-4567</p>
                <p className="font-sans text-sm text-white/60 mb-6">Escríbenos directamente. Tiempo de respuesta: inmediato en horario hábil.</p>
                <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="btn-uppercase border border-white/50 text-white px-6 py-3 inline-block hover:bg-white/10 transition-colors">
                  ABRIR WHATSAPP →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATOS — NEGRO */}
      <section className="bg-camhaji-black py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="label-uppercase text-white/40 mb-4">ATENCIÓN</p>
              <p className="font-sans text-sm text-white/70">Lun – Vie</p>
              <p className="font-sans text-sm text-white font-bold">9:00 – 18:00</p>
              <p className="font-sans text-sm text-white/70 mt-2">Sáb</p>
              <p className="font-sans text-sm text-white/70">Citas previas</p>
            </div>
            <div>
              <p className="label-uppercase text-white/40 mb-4">UBICACIÓN</p>
              <p className="font-sans text-sm text-white font-bold">Cancún</p>
              <p className="font-sans text-sm text-white/70">Quintana Roo, México</p>
              <p className="font-sans text-sm text-white/50 mt-2">Atendemos todo Q.Roo</p>
            </div>
            <div>
              <p className="label-uppercase text-white/40 mb-4">CONTACTO</p>
              <p className="font-sans text-sm text-white/70">(998) 123-4567</p>
              <p className="font-sans text-sm text-white/70">contacto@camhajiconsultores.mx</p>
            </div>
            <div>
              <p className="label-uppercase text-white/40 mb-4">SÍGUENOS</p>
              <p className="font-sans text-sm text-white/70">LinkedIn</p>
              <p className="font-sans text-sm text-white/70">camhajiconsultores.mx</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
