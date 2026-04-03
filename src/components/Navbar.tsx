import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavbarProps {
  version?: "a" | "b" | "c";
}

interface DropdownItem {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

export function Navbar({ version }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const base = version ? `/version-${version}` : "";

  const getNavLinks = (): NavLink[] => {
    if (version === "c") {
      return [
        { label: "Home", href: base },
        { label: "Nosotros", href: `${base}/nosotros` },
        {
          label: "Servicios",
          href: `${base}/servicios/contabilidad`,
          dropdown: [
            { label: "Contabilidad", href: `${base}/servicios/contabilidad` },
            { label: "Estrategia Fiscal", href: `${base}/servicios/fiscal` },
            { label: "Nómina", href: `${base}/servicios/nomina` },
            { label: "Facturación CFDI", href: `${base}/servicios/facturacion` },
          ],
        },
        {
          label: "Sectores",
          href: `${base}/sectores/construccion`,
          dropdown: [
            { label: "Construcción", href: `${base}/sectores/construccion` },
            { label: "Comercial", href: `${base}/sectores/comercial` },
            { label: "Inmobiliario", href: `${base}/sectores/inmobiliario` },
            { label: "RESICO", href: `${base}/sectores/resico` },
            { label: "Pequeños Negocios", href: `${base}/sectores/pequenos-negocios` },
          ],
        },
        { label: "Contacto", href: `${base}/contacto` },
      ];
    }

    return [
      ...(version ? [{ label: "Home", href: base }] : []),
      { label: "Nosotros", href: `${base}/nosotros` },
      { label: "Servicios", href: `${base}/servicios/contabilidad` },
      { label: "Sectores", href: `${base}/sectores/construccion` },
      { label: "Contacto", href: `${base}/contacto` },
    ];
  };

  const navLinks = getNavLinks();
  const ctaHref = version ? `${base}/contacto` : "#cta";
  const logoHref = "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out ${
        scrolled ? "bg-background shadow-[var(--shadow-nav)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Logo */}
        <a href={logoHref} className="flex items-center gap-3">
          <div
            className={`w-9 h-9 flex items-center justify-center rounded-sm font-serif text-lg font-bold transition-colors duration-300 ${
              scrolled ? "bg-primary text-primary-foreground" : "bg-white text-primary"
            }`}
          >
            CC
          </div>
          <div className="flex flex-col">
            <span
              className={`font-serif text-sm font-bold leading-tight transition-colors duration-300 ${
                scrolled ? "text-primary" : "text-white"
              }`}
            >
              CAMHAJI
            </span>
            <span
              className={`font-sans text-[9px] uppercase tracking-[0.22em] transition-colors duration-300 ${
                scrolled ? "text-muted-foreground" : "text-white/60"
              }`}
            >
              CONSULTORES
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`font-sans text-[13px] tracking-[0.04em] transition-colors duration-300 hover:opacity-100 flex items-center gap-1 ${
                      scrolled ? "text-camhaji-text" : "text-white/85"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 bg-background border border-border-subtle rounded-sm shadow-lg min-w-[200px] py-2 z-50">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2.5 font-sans text-[13px] text-camhaji-text hover:bg-surface hover:text-primary transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className={`font-sans text-[13px] tracking-[0.04em] transition-colors duration-300 hover:opacity-100 ${
                    scrolled ? "text-camhaji-text" : "text-white/85"
                  }`}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <a
            href={ctaHref}
            className={`btn-uppercase px-6 py-2.5 transition-all duration-300 ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "border border-white/50 text-white hover:bg-white/10 hover:border-white"
            }`}
          >
            Agendar Consulta
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? (
            <X className={`w-6 h-6 ${scrolled ? "text-camhaji-text" : "text-white"}`} />
          ) : (
            <Menu className={`w-6 h-6 ${scrolled ? "text-camhaji-text" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border-subtle px-5 py-6 space-y-1">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className="w-full flex items-center justify-between font-sans text-sm text-camhaji-text py-3"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />
                  </button>
                  {openDropdown === link.label && (
                    <div className="pl-4 space-y-1 pb-2">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block font-sans text-sm text-camhaji-muted py-2 hover:text-primary transition-colors"
                          onClick={() => { setMenuOpen(false); setOpenDropdown(null); }}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a
                  href={link.href}
                  className="block font-sans text-sm text-camhaji-text py-3"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              )}
            </div>
          ))}
          <a
            href={ctaHref}
            className="block btn-uppercase bg-primary text-primary-foreground px-6 py-3 text-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
}
