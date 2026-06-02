import logo01 from "@/assets/clients-v2/logo-01.png.asset.json";
import logo02 from "@/assets/clients-v2/logo-02.png.asset.json";
import logo03 from "@/assets/clients-v2/logo-03.png.asset.json";
import logo04 from "@/assets/clients-v2/logo-04.png.asset.json";
import logo05 from "@/assets/clients-v2/logo-05.png.asset.json";
import logo06 from "@/assets/clients-v2/logo-06.png.asset.json";
import logo07 from "@/assets/clients-v2/logo-07.png.asset.json";
import logo08 from "@/assets/clients-v2/logo-08.png.asset.json";
import logo09 from "@/assets/clients-v2/logo-09.png.asset.json";
import logo10 from "@/assets/clients-v2/logo-10.png.asset.json";
import logo11 from "@/assets/clients-v2/logo-11.png.asset.json";
import logo12 from "@/assets/clients-v2/logo-12.png.asset.json";
import logo13 from "@/assets/clients-v2/logo-13.png.asset.json";
import logo14 from "@/assets/clients-v2/logo-14.png.asset.json";
import logo15 from "@/assets/clients-v2/logo-15.png.asset.json";
import logo16 from "@/assets/clients-v2/logo-16.png.asset.json";
import logo17 from "@/assets/clients-v2/logo-17.png.asset.json";
import logo18 from "@/assets/clients-v2/logo-18.png.asset.json";
import logo19 from "@/assets/clients-v2/logo-19.png.asset.json";
import logo20 from "@/assets/clients-v2/logo-20.png.asset.json";
import logo21 from "@/assets/clients-v2/logo-21.png.asset.json";
import logo22 from "@/assets/clients-v2/logo-22.png.asset.json";
import logo23 from "@/assets/clients-v2/logo-23.png.asset.json";
import logo24 from "@/assets/clients-v2/logo-24.png.asset.json";

// All logos are pre-processed to pure white on transparent background.
const clients: { name: string; logo: string; alreadyWhite?: boolean }[] = [
  logo01, logo02, logo03, logo04, logo05, logo06, logo07, logo08,
  logo09, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
  logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24,
].map((a, i) => ({ name: `Cliente ${String(i + 1).padStart(2, "0")}`, logo: a.url, alreadyWhite: true }));

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
        {loop.map((c, i) => {
          // Unified color treatment for ALL logos so they read as one family.
          const filterClass =
            tone === "light"
              ? "opacity-70 hover:opacity-100"
              : "brightness-0 opacity-60 hover:opacity-100";
          return (
            <div
              key={`${c.name}-${i}`}
              className="flex items-center justify-center shrink-0 w-[140px] h-[72px] md:w-[170px] md:h-[80px]"
            >
              <img
                src={c.logo}
                alt={c.name}
                loading="lazy"
                className={`max-h-full max-w-full object-contain transition-opacity duration-300 ${filterClass}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
