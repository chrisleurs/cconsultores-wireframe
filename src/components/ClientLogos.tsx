const clients = [
  "Constructora del Sureste",
  "Grupo Inmobiliario Caribe",
  "Distribuidora Peninsular",
  "Comercializadora Maya",
  "Desarrollos Costa Q.Roo",
  "Servicios Industriales RMC",
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
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clients.map((name) => (
              <div
                key={name}
                className="h-20 bg-surface border border-border-subtle rounded-sm flex items-center justify-center px-4"
              >
                <span className="font-serif text-[11px] font-bold text-camhaji-muted/60 text-center leading-tight uppercase tracking-wide">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "b") {
    return (
      <section className="bg-camhaji-black py-14 md:py-16">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <p className="label-uppercase text-white/30 whitespace-nowrap flex-shrink-0">
              CONFÍAN EN NOSOTROS
            </p>
            <div className="w-px h-8 bg-white/10 hidden md:block" />
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {clients.map((name, i) => (
                <span key={name} className="flex items-center gap-10">
                  <span className="font-sans text-[12px] uppercase tracking-[0.12em] text-white/25 hover:text-white/50 transition-colors whitespace-nowrap">
                    {name}
                  </span>
                  {i < clients.length - 1 && (
                    <span className="w-px h-3 bg-white/10 hidden md:block" />
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // variant === "c"
  return (
    <section className="bg-camhaji-base py-16 md:py-20 border-t border-white/[0.06]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <p className="label-uppercase text-white/20 text-center mb-12">
          EMPRESAS QUE CONFÍAN EN NOSOTROS
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06]">
          {clients.map((name) => (
            <div
              key={name}
              className="bg-camhaji-base h-24 flex items-center justify-center px-4 hover:bg-white/[0.03] transition-colors duration-300"
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-white/25 text-center leading-tight">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
