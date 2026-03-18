import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  version?: "a" | "b" | "c";
}

export function Navbar({ version }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const base = version ? `/version-${version}` : "";

  const navLinks = [
    ...(version ? [{ label: "Home", href: base }] : []),
    { label: "Nosotros", href: `${base}/nosotros` },
    { label: "Servicios", href: `${base}/servicios/contabilidad` },
    { label: "Sectores", href: `${base}/sectores/construccion` },
    { label: "Contacto", href: `${base}/contacto` },
  ];

  const ctaHref = version ? `${base}/contacto` : "#cta";
  const logoHref = "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-sans text-[13px] tracking-[0.04em] transition-colors duration-300 hover:opacity-100 ${
                scrolled ? "text-camhaji-text" : "text-white/85"
              }`}
            >
              {link.label}
            </a>
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
        <div className="md:hidden bg-background border-t border-border-subtle px-5 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block font-sans text-sm text-camhaji-text"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={ctaHref}
            className="block btn-uppercase bg-primary text-primary-foreground px-6 py-3 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </nav>
  );
}
