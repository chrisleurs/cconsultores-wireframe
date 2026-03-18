export function FooterC() {
  const base = "/version-c";
  return (
    <footer className="bg-camhaji-base py-16 md:py-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-white font-sans text-lg font-bold text-primary">
                CC
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm font-bold text-white leading-tight">CAMHAJI</span>
                <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-white/40">CONSULTORES</span>
              </div>
            </div>
            <p className="font-serif text-sm italic text-white/45 leading-relaxed mt-4">
              Contabilidad con compromiso real.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="label-uppercase text-white/30 mb-6">Servicios</h4>
            <ul className="space-y-3">
              {[
                { label: "Contabilidad & Administración", href: `${base}/servicios/contabilidad` },
                { label: "Estrategia Fiscal", href: "#" },
                { label: "Nómina & Facturación", href: "#" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="font-sans text-sm text-white/55 hover:text-white/85 transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectores */}
          <div>
            <h4 className="label-uppercase text-white/30 mb-6">Sectores</h4>
            <ul className="space-y-3">
              {[
                { label: "Construcción", href: `${base}/sectores/construccion` },
                { label: "Comercial", href: "#" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="font-sans text-sm text-white/55 hover:text-white/85 transition-colors">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="label-uppercase text-white/30 mb-6">Contacto</h4>
            <ul className="space-y-3 font-sans text-sm text-white/55">
              <li>(998) 123-4567</li>
              <li>contacto@camhajiconsultores.mx</li>
              <li>Cancún, Quintana Roo</li>
              <li>Lun–Vie: 9:00–18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/25">
            © 2026 Camhaji Consultores. Todos los derechos reservados.
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/20">
            CANCÚN · QUINTANA ROO · MÉXICO
          </p>
        </div>
      </div>
    </footer>
  );
}
