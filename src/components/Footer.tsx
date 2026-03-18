export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex flex-col mb-4">
              <span className="font-serif text-lg font-bold">CAMHAJI</span>
              <span className="font-sans text-[9px] uppercase tracking-[0.22em] text-white/60">
                CONSULTORES
              </span>
            </div>
            <p className="font-serif text-sm italic text-white/70 leading-relaxed">
              Contabilidad con compromiso real.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="label-uppercase text-white/50 mb-6">Servicios</h4>
            <ul className="space-y-3">
              {["Contabilidad", "Estrategia Fiscal", "Nómina & Facturación", "Sector Construcción", "Sector Comercial"].map(
                (s) => (
                  <li key={s}>
                    <a href="#servicios" className="font-sans text-sm text-white/80 hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label-uppercase text-white/50 mb-6">Contacto</h4>
            <ul className="space-y-3 font-sans text-sm text-white/80">
              <li>Cancún, Quintana Roo, México</li>
              <li>(998) 123-4567</li>
              <li>contacto@camhajiconsultores.mx</li>
              <li>Lun–Vie: 9:00 – 18:00</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/40">
            © 2026 Camhaji Consultores. Todos los derechos reservados.
          </p>
          <p className="font-sans text-xs text-white/40">camhajiconsultores.mx</p>
        </div>
      </div>
    </footer>
  );
}
