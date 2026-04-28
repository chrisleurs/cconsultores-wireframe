export function FooterC() {
  const base = "/version-c";
  return (
    <footer className="bg-camhaji-base py-16 md:py-20" itemScope itemType="https://schema.org/AccountingService">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 flex items-center justify-center rounded-sm bg-white font-sans text-lg font-bold text-primary">
                CC
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-sm font-bold text-white leading-tight" itemProp="name">CAMHAJI</span>
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
                { label: "Estrategia Fiscal", href: `${base}/servicios/fiscal` },
                { label: "Nómina Empresarial", href: `${base}/servicios/nomina` },
                { label: "Facturación CFDI", href: `${base}/servicios/facturacion` },
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
                { label: "Comercial", href: `${base}/sectores/comercial` },
                { label: "Inmobiliario", href: `${base}/sectores/inmobiliario` },
                { label: "RESICO", href: `${base}/sectores/resico` },
                { label: "Pequeños Negocios", href: `${base}/sectores/pequenos-negocios` },
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
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <h4 className="label-uppercase text-white/30 mb-6">Contacto</h4>
            <ul className="space-y-3 font-sans text-sm text-white/55">
              <li>
                <a href="tel:+529988872584" className="hover:text-white/85 transition-colors" itemProp="telephone">
                  (998) 887 2584
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5215543587159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/85 transition-colors"
                >
                  WhatsApp: +52 1 55 4358 7159
                </a>
              </li>
              <li>
                <a href="mailto:contacto@camhajiconsultores.mx" className="hover:text-white/85 transition-colors">
                  contacto@camhajiconsultores.mx
                </a>
              </li>
              <li className="leading-relaxed">
                <span itemProp="streetAddress">Calle Mar #9, Lote 12, Mz. 12, SM 4</span>,{" "}
                <span itemProp="addressLocality">Cancún</span>,{" "}
                <span itemProp="addressRegion">Quintana Roo</span>{" "}
                <span itemProp="postalCode">77500</span>,{" "}
                <span itemProp="addressCountry">México</span>
              </li>
              <li>Lun–Vie · 9:00–18:30</li>
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
