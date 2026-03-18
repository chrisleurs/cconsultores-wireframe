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

export default function ContactoA() {
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

      {/* HERO */}
      <section className="bg-primary pt-32 pb-16 md:pt-40 md:pb-20 min-h-[40vh] flex items-end">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 w-full">
          <p className="font-sans text-xs text-white/50 mb-4">
            <a href="/version-a" className="hover:text-white/70 transition-colors">Inicio</a> / <span className="text-white/70">Contacto</span>
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Agenda tu Consulta Gratuita
          </h1>
          <p className="font-sans text-base text-white/70 max-w-2xl leading-relaxed">
            30 minutos sin costo para evaluar tu situación y descubrir cómo podemos ayudarte.
          </p>
        </div>
      </section>

      {/* FORMULARIO + DATOS */}
      <section className="bg-background py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16">
            {/* Form */}
            <div className="md:col-span-3">
              <p className="label-uppercase text-camhaji-muted mb-4">ENVÍANOS UN MENSAJE</p>
              <h2 className="font-serif text-2xl font-bold text-camhaji-text mb-8">Cuéntanos sobre tu empresa</h2>

              {status === "sent" ? (
                <div className="bg-primary/5 border border-primary/20 rounded-sm p-8 text-center" role="alert" tabIndex={-1}>
                  <p className="font-serif text-xl font-bold text-primary mb-2">¡Mensaje enviado!</p>
                  <p className="font-sans text-sm text-camhaji-muted">Respondemos en menos de 24 horas en días hábiles.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="font-sans text-sm text-camhaji-text block mb-2">Nombre completo</label>
                    <input id="name" type="text" required autoComplete="name" className="w-full border border-border-subtle rounded-sm px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="company" className="font-sans text-sm text-camhaji-text block mb-2">Empresa</label>
                    <input id="company" type="text" autoComplete="organization" className="w-full border border-border-subtle rounded-sm px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="font-sans text-sm text-camhaji-text block mb-2">Teléfono</label>
                    <input id="phone" type="tel" autoComplete="tel" className="w-full border border-border-subtle rounded-sm px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                    <p className="font-sans text-xs text-camhaji-muted mt-1">Podemos contactarte por WhatsApp</p>
                  </div>
                  <div>
                    <label htmlFor="email" className="font-sans text-sm text-camhaji-text block mb-2">Correo electrónico</label>
                    <input id="email" type="email" required autoComplete="email" className="w-full border border-border-subtle rounded-sm px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label htmlFor="topic" className="font-sans text-sm text-camhaji-text block mb-2">¿Sobre qué tema necesitas asesoría?</label>
                    <select id="topic" className="w-full border border-border-subtle rounded-sm px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary">
                      <option value="">Selecciona un tema...</option>
                      {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="font-sans text-sm text-camhaji-text block mb-2">Mensaje</label>
                    <textarea id="message" rows={4} className="w-full border border-border-subtle rounded-sm px-4 py-3 font-sans text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                  </div>
                  <div className="flex items-start gap-3">
                    <input id="accept" type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="mt-1" />
                    <label htmlFor="accept" className="font-sans text-xs text-camhaji-muted cursor-pointer">
                      Acepto que Camhaji Consultores me contacte para dar seguimiento a esta solicitud.
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
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="md:col-span-2 md:sticky md:top-28 self-start">
              <div className="bg-primary p-8 rounded-sm mb-8">
                <p className="label-uppercase text-white/50 mb-3">CANAL DIRECTO</p>
                <p className="font-serif text-2xl font-bold text-white mb-2">(998) 123-4567</p>
                <p className="font-sans text-sm text-white/60 mb-6">Escríbenos directamente por WhatsApp para una respuesta inmediata.</p>
                <a href="https://wa.me/529981234567" target="_blank" rel="noopener noreferrer" className="btn-uppercase border border-white/50 text-white px-6 py-3 inline-block hover:bg-white/10 transition-colors">
                  ABRIR WHATSAPP →
                </a>
              </div>
              <ul className="space-y-4 font-sans text-sm text-camhaji-muted">
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Cancún, Quintana Roo, México</li>
                <li className="flex items-start gap-3"><Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" /> (998) 123-4567</li>
                <li className="flex items-start gap-3"><Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" /> contacto@camhajiconsultores.mx</li>
                <li className="flex items-start gap-3"><Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" /> Lun–Vie: 9:00 – 18:00 hrs</li>
              </ul>
              <p className="font-sans text-xs text-camhaji-muted mt-6 italic">
                "Atendemos empresas en todo Cancún, Playa del Carmen, Tulum, Chetumal y el estado de Quintana Roo."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAPA + HORARIOS */}
      <section className="bg-surface py-20 md:py-24">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-[4/3] bg-background border border-border-subtle rounded-sm flex items-center justify-center">
              <span className="label-uppercase text-camhaji-muted">MAPA — Google Maps</span>
            </div>
            <div>
              <p className="label-uppercase text-camhaji-muted mb-6">HORARIOS DE ATENCIÓN</p>
              <div className="space-y-4 font-sans text-sm text-camhaji-text">
                <div className="flex justify-between border-b border-border-subtle pb-3">
                  <span>Lunes – Viernes</span>
                  <span className="font-bold">9:00 – 18:00</span>
                </div>
                <div className="flex justify-between border-b border-border-subtle pb-3">
                  <span>Sábado</span>
                  <span>Citas previas</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
              <p className="font-sans text-xs text-camhaji-muted mt-8 leading-relaxed">
                Atención presencial con cita previa. Consultas por WhatsApp fuera de horario con respuesta al siguiente día hábil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
