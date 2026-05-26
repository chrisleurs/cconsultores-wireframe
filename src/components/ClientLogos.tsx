import hereAndNow from "@/assets/clients/here-and-now.png";
import ecoSupply from "@/assets/clients/ecosupply.png";
import propiedadesCancun from "@/assets/clients/propiedades-cancun.png";
import clienteBlanco from "@/assets/clients/cliente-blanco.png";

const clients = [
  { name: "Here and Now Real Estate", logo: hereAndNow },
  { name: "EcoSupply", logo: ecoSupply },
  { name: "Propiedades Cancún", logo: propiedadesCancun },
  { name: "Cliente Camhaji", logo: clienteBlanco },
];

interface ClientLogosProps {
  variant: "a" | "b" | "c";
}

export function ClientLogos({ variant }: ClientLogosProps) {
  if (variant === "a") {
    return (
      <section className="bg-background py-16 md:py-20 border-t border-border-subtle">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-camhaji-muted text-center mb-10">
            EMPRESAS QUE CONFÍAN EN NOSOTROS
          </p>
          <LogoMarquee tone="dark" />
        </div>
      </section>
    );
  }

  if (variant === "b") {
    return (
      <section className="bg-camhaji-black py-14 md:py-16">
        <div className="max-w-[1400px] mx-auto px-5 md:px-8">
          <p className="label-uppercase text-white/30 text-center mb-8">
            CONFÍAN EN NOSOTROS
          </p>
          <LogoMarquee tone="light" />
        </div>
      </section>
    );
  }

  // variant === "c"
  return (
    <section className="bg-camhaji-base py-10 md:py-12 border-t border-b border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <p className="label-uppercase text-white/30 text-center mb-6">
          CONFÍAN EN NOSOTROS
        </p>
        <LogoMarquee tone="light" />
      </div>
    </section>
  );
}

function LogoMarquee({ tone }: { tone: "light" | "dark" }) {
  // Duplicate the list so the translateX(-50%) loop is seamless
  const loop = [...clients, ...clients, ...clients, ...clients];
  const filterClass =
    tone === "light"
      ? "brightness-0 invert opacity-50 hover:opacity-90"
      : "grayscale opacity-60 hover:opacity-100";

  return (
    <div
      className="logo-marquee relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
    >
      <div className="logo-marquee-track flex items-center gap-16 md:gap-24 w-max">
        {loop.map((c, i) => (
          <img
            key={`${c.name}-${i}`}
            src={c.logo}
            alt={c.name}
            loading="lazy"
            className={`h-14 md:h-16 w-auto object-contain shrink-0 transition-opacity duration-300 ${filterClass}`}
          />
        ))}
      </div>
    </div>
  );
}
