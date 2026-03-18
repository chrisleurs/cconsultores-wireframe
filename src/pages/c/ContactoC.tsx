import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { FooterC } from "@/components/FooterC";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MapPin, Mail, Clock, Loader2 } from "lucide-react";

export default function ContactoC() {
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 1500);
  };

  const inputClass =
    "w-full border-0 border-b border-border-subtle rounded-none bg-transparent px-0 py-2.5 font-sans text-base text-camhaji-text placeholder:text-camhaji-muted/40 focus:outline-none focus:border-primary transition-colors";

  const cities = ["CANCÚN", "PLAYA DEL CARMEN", "TULUM", "CHETUMAL", "Q.ROO"];

  return (
    <div className="min-h-screen">
      <Navbar version="c" />

      {/* HERO */}
      <section className="min-h-[50dvh] bg-camhaji-base flex flex-col items-center justify-center text-center px-5 md:px-10 pt-20">
        <p className="label-uppercase text-white/30 mb-8">HABLEMOS</p>
        <h1 className="font-sans font-bold text-white mb-5" style={{ fontSize: "clamp(36px, 6vw, 80px)", letterSpacing: "-0.04em", lineHeight: 1.0 }}>
          Agenda tu Consulta Gratuita
        </h1>
        <p className="font-serif italic text-white/45" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
          30 minutos. Sin costo. Sin compromiso.
        </p>
      </section>

      {/* MAIN BLOCK */}
      <section className="bg-camhaji-base py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-16 items-start">
          {/* FORM */}
          <div className="bg-white rounded-sm p-10 md:p-14">
            <h2 className="font-sans font-bold text-camhaji-text mb-2" style={{ fontSize: "clamp(22px, 2.5vw, 30px)", letterSpacing: "-0.02em" }}>
              Cuéntanos sobre tu empresa
            </h2>
            <p className="font-sans text-sm font-light text-camhaji-muted mb-10">
              Respondemos en menos de 24 horas en días hábiles.
            </p>
            <div className="border-b border-border-subtle mb-10" />

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 mb-8">
                <div>
                  <label className="label-uppercase text-camhaji-muted mb-2.5 block">NOMBRE COMPLETO</label>
                  <input type="text" autoComplete="name" placeholder="Tu nombre" className={inputClass} required />
                </div>
                <div>
                  <label className="label-uppercase text-camhaji-muted mb-2.5 block">EMPRESA</label>
                  <input type="text" autoComplete="organization" placeholder="Nombre de tu empresa" className={inputClass} />
                </div>
                <div>
                  <label className="label-uppercase text-camhaji-muted mb-2.5 block">TELÉFONO</label>
                  <input type="tel" autoComplete="tel" placeholder="(998) 000-0000" className={inputClass} />
                  <p className="font-sans text-xs text-camhaji-muted mt-1.5">Podemos contactarte por WhatsApp</p>
                </div>
                <div>
                  <label className="label-uppercase text-camhaji-muted mb-2.5 block">CORREO</label>
                  <input type="email" autoComplete="email" placeholder="correo@empresa.com" className={inputClass} required />
                </div>
              </div>

              <div className="mb-8">
                <label className="label-uppercase text-camhaji-muted mb-2.5 block">SOBRE QUÉ NECESITAS ASESORÍA</label>
                <select className={`${inputClass} appearance-none cursor-pointer`} required>
                  <option value="">Selecciona un tema...</option>
                  <option>Contabilidad y administración</option>
                  <option>Estrategia fiscal</option>
                  <option>Nómina y facturación</option>
                  <option>Sector construcción</option>
                  <option>Tengo atrasos con el SAT</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="mb-8">
                <label className="label-uppercase text-camhaji-muted mb-2.5 block">MENSAJE</label>
                <textarea rows={3} placeholder="Cuéntanos brevemente tu situación..." className={`${inputClass} resize-none`} />
              </div>

              <div className="border-t border-border-subtle pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <label className="flex items-start gap-2.5 cursor-pointer max-w-[320px]">
                  <input type="checkbox" required className="mt-1 w-3.5 h-3.5 rounded-sm border-border-subtle accent-primary flex-shrink-0" />
                  <span className="font-sans text-xs text-camhaji-muted leading-relaxed">
                    Acepto que Camhaji Consultores me contacte para dar seguimiento a esta solicitud.
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className={`btn-uppercase px-8 py-3.5 whitespace-nowrap transition-all duration-300 ${
                    formState === "sent"
                      ? "bg-green-800 text-white"
                      : "bg-primary text-white hover:bg-primary-hover"
                  }`}
                >
                  {formState === "idle" && "ENVIAR MENSAJE"}
                  {formState === "sending" && (
                    <span className="flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" /> ENVIANDO...
                    </span>
                  )}
                  {formState === "sent" && "¡ENVIADO! ✓"}
                </button>
              </div>
            </form>
          </div>

          {/* PANEL DERECHO */}
          <div className="md:sticky md:top-[100px] space-y-px">
            {/* WhatsApp block */}
            <div className="bg-primary rounded-sm p-8">
              <p className="label-uppercase text-white/40 mb-4">RESPUESTA INMEDIATA</p>
              <div className="flex items-center gap-3 mb-4">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="font-sans font-bold text-[22px] text-white" style={{ letterSpacing: "-0.01em" }}>(998) 123-4567</span>
              </div>
              <p className="font-sans text-[13px] font-light text-white/55 leading-relaxed mb-5">
                Escríbenos directamente. Tiempo de respuesta inmediato en horario hábil.
              </p>
              <a
                href="https://wa.me/529981234567"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-uppercase block text-center border border-white/30 text-white py-3 hover:bg-white/[0.08] hover:border-white/60 transition-all duration-300"
              >
                ABRIR WHATSAPP →
              </a>
            </div>

            {/* Datos adicionales */}
            <div className="bg-white/[0.04] rounded-sm p-7 space-y-4">
              {[
                { icon: MapPin, text: "Cancún, Quintana Roo, México" },
                { icon: Mail, text: "contacto@camhajiconsultores.mx" },
                { icon: Clock, text: "Lun–Vie: 9:00 – 18:00 hrs" },
              ].map((d) => (
                <div key={d.text} className="flex items-start gap-3">
                  <d.icon className="w-4 h-4 text-white/35 flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-white/65">{d.text}</span>
                </div>
              ))}
              <div className="border-t border-white/[0.07] pt-5 mt-5">
                <p className="font-sans text-xs text-white/30 leading-relaxed">
                  Atendemos empresas en todo Cancún, Playa del Carmen, Tulum, Chetumal y el estado de Quintana Roo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DATOS */}
      <section className="bg-surface py-20 px-5 md:px-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {/* Horarios */}
          <div className="md:px-10 first:md:pl-0">
            <p className="label-uppercase text-camhaji-muted mb-5">ATENCIÓN</p>
            <div className="space-y-2.5">
              {[
                { day: "Lun – Vie", time: "9:00 – 18:00" },
                { day: "Sábado", time: "Citas previas" },
                { day: "Domingo", time: "Cerrado" },
              ].map((h) => (
                <div key={h.day} className="flex justify-between">
                  <span className="font-sans text-sm text-camhaji-text">{h.day}</span>
                  <span className="font-sans text-sm font-light text-camhaji-muted">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ubicación */}
          <div className="md:px-10 md:border-l border-border-subtle">
            <p className="label-uppercase text-camhaji-muted mb-5">UBICACIÓN</p>
            <p className="font-sans font-semibold text-base text-camhaji-text">Cancún</p>
            <p className="font-sans text-sm font-light text-camhaji-muted">Quintana Roo, México</p>
            <p className="font-sans text-[13px] font-light text-camhaji-muted mt-3">Atendemos todo Q.Roo</p>
          </div>

          {/* Contacto */}
          <div className="md:px-10 md:border-l border-border-subtle">
            <p className="label-uppercase text-camhaji-muted mb-5">CONTACTO</p>
            <p className="font-sans font-semibold text-base text-camhaji-text">(998) 123-4567</p>
            <p className="font-sans text-[13px] font-light text-camhaji-muted mt-2 break-all">contacto@camhajiconsultores.mx</p>
          </div>

          {/* Cobertura */}
          <div className="md:px-10 md:border-l border-border-subtle">
            <p className="label-uppercase text-camhaji-muted mb-5">COBERTURA</p>
            <div className="flex flex-wrap gap-1.5">
              {cities.map((c) => (
                <span key={c} className="font-sans text-[11px] uppercase tracking-[0.1em] border border-border-subtle rounded-sm px-2.5 py-1 text-camhaji-muted">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FooterC />
      <WhatsAppButton />
    </div>
  );
}
