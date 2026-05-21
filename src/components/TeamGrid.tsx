import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Mail, Phone, Linkedin, ArrowUpRight } from "lucide-react";
import type { TeamMember } from "@/data/team";

interface TeamGridProps {
  members: TeamMember[];
  /** Visual treatment: dark = on camhaji-base, light = on white/surface */
  tone?: "dark" | "light";
  columns?: 2 | 3 | 4;
}

export function TeamGrid({ members, tone = "dark", columns = 4 }: TeamGridProps) {
  const [active, setActive] = useState<TeamMember | null>(null);

  const colClass =
    columns === 2
      ? "grid-cols-1 sm:grid-cols-2"
      : columns === 3
      ? "grid-cols-2 md:grid-cols-3"
      : "grid-cols-2 md:grid-cols-4";

  const isDark = tone === "dark";

  return (
    <>
      <div className={`grid ${colClass} gap-6 md:gap-8`}>
        {members.map((m) => (
          <div key={m.id} className="flex flex-col group">
            <div className="aspect-square w-full overflow-hidden rounded-2xl bg-white/5 mb-5">
              <img
                src={m.photo}
                alt={m.name}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[15%] transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <h3
              className={`font-sans font-bold text-[15px] mb-1 ${
                isDark ? "text-white" : "text-camhaji-text"
              }`}
            >
              {m.name}
            </h3>
            <p
              className={`font-sans text-[11px] uppercase tracking-[0.15em] mb-4 ${
                isDark ? "text-camhaji-accent" : "text-primary"
              }`}
            >
              {m.role}
            </p>
            <button
              type="button"
              onClick={() => setActive(m)}
              className={`mt-auto inline-flex items-center gap-1.5 self-start text-[12px] uppercase tracking-[0.15em] py-1 border-b transition-colors ${
                isDark
                  ? "text-white/60 border-white/15 hover:text-white hover:border-white/60"
                  : "text-camhaji-muted border-border-subtle hover:text-primary hover:border-primary"
              }`}
              aria-label={`Más información sobre ${m.name}`}
            >
              Más información
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      <TeamMemberModal member={active} onClose={() => setActive(null)} />
    </>
  );
}

function TeamMemberModal({
  member,
  onClose,
}: {
  member: TeamMember | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!member) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [member, onClose]);

  if (!member || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-[fadeIn_0.25s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="team-member-name"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-camhaji-base/85 backdrop-blur-sm" />
      <div
        className="relative bg-camhaji-base border border-white/10 w-full max-w-[1000px] max-h-[90vh] overflow-y-auto grid grid-cols-1 md:grid-cols-[40%_60%]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-camhaji-base/60 border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="aspect-square md:aspect-auto md:h-full overflow-hidden bg-white/5">
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover grayscale-[10%]"
          />
        </div>

        <div className="px-6 md:px-10 py-10 md:py-12">
          <p className="label-uppercase text-camhaji-accent mb-4">
            EQUIPO CAMHAJI CONSULTORES
          </p>
          <h3
            id="team-member-name"
            className="font-sans font-bold text-white mb-2"
            style={{ fontSize: "clamp(24px, 3vw, 36px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}
          >
            {member.name}
          </h3>
          <p className="font-sans text-[13px] uppercase tracking-[0.15em] text-white/60 mb-1">
            {member.role}
          </p>
          {member.tagline && (
            <p className="font-sans text-[14px] font-light text-white/45 mb-8">
              {member.tagline}
            </p>
          )}

          <div className="w-10 h-px bg-camhaji-accent mb-6" />

          <div className="space-y-4 mb-8">
            {member.bio.split("\n\n").map((p, i) => (
              <p
                key={i}
                className="font-sans text-[15px] font-light text-white/70 leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>

          {(member.email || member.phone || member.linkedin) && (
            <div className="border-t border-white/10 pt-6 flex flex-wrap gap-x-6 gap-y-3 text-[13px]">
              {member.email && (
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" /> {member.email}
                </a>
              )}
              {member.phone && (
                <a
                  href={`tel:${member.phone}`}
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" /> {member.phone}
                </a>
              )}
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}