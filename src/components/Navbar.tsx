import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLang, localizePath } from "@/i18n/lang";
import { t } from "@/i18n/ui";
import { LanguageSwitcher } from "./LanguageSwitcher";
import camhajiLogo from "@/assets/camhaji-logo-blanco.png";


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
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const lang = useLang();

  // Auto-close menus when route changes (prevents mobile click cancellation
  // caused by unmounting the menu before React Router processes navigation)
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const baseRaw = version ? `/version-${version}` : "";
  const base = baseRaw ? localizePath(baseRaw, lang) : "";

  const getNavLinks = (): NavLink[] => {
    return [
      { label: t(lang, "navHome"), href: base || "/" },
      { label: t(lang, "navNosotros"), href: `${base}/nosotros` },
      {
        label: t(lang, "navServicios"),
        href: `${base}/servicios/contabilidad`,
        dropdown: [
          { label: t(lang, "svcContabilidad"), href: `${base}/servicios/contabilidad` },
          { label: t(lang, "svcFiscal"), href: `${base}/servicios/fiscal` },
          { label: t(lang, "svcNomina"), href: `${base}/servicios/nomina` },
          { label: t(lang, "svcAdministracion"), href: `${base}/servicios/administracion` },
        ],
      },
      {
        label: t(lang, "navSectores"),
        href: `${base}/sectores/construccion`,
        dropdown: [
          { label: t(lang, "sectConstruccion"), href: `${base}/sectores/construccion` },
          { label: t(lang, "sectComercial"), href: `${base}/sectores/comercial` },
          { label: t(lang, "sectInmobiliario"), href: `${base}/sectores/inmobiliario` },
          { label: t(lang, "sectResico"), href: `${base}/sectores/resico` },
          { label: t(lang, "sectRentaVac"), href: `${base}/sectores/renta-vacacional` },
        ],
      },
      { label: t(lang, "navContacto"), href: `${base}/contacto` },
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
      // Only close when clicking outside the entire nav (covers both desktop
      // dropdown and mobile menu). Closing on mousedown inside the mobile
      // menu unmounts links before the click event fires, cancelling navigation.
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ease-out ${
        scrolled ? "bg-background shadow-[var(--shadow-nav)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-5 py-4 md:px-8 md:py-5">
        {/* Logo */}
        <Link to={logoHref} className="flex items-center" aria-label="Camhaji Consultores">
          <img
            src={camhajiLogo}
            alt="Camhaji Consultores"
            className={`h-12 md:h-14 w-auto object-contain transition-[filter] duration-300 ${
              scrolled ? "invert" : ""
            }`}
          />
        </Link>


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
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block px-4 py-2.5 font-sans text-[13px] text-camhaji-text hover:bg-surface hover:text-primary transition-colors"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  className={`font-sans text-[13px] tracking-[0.04em] transition-colors duration-300 hover:opacity-100 ${
                    scrolled ? "text-camhaji-text" : "text-white/85"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to={ctaHref}
            className={`btn-uppercase px-6 py-2.5 transition-all duration-300 ${
              scrolled
                ? "bg-primary text-primary-foreground"
                : "border border-white/50 text-white hover:bg-white/10 hover:border-white"
            }`}
          >
            {t(lang, "navCta")}
          </Link>
          <LanguageSwitcher variant={scrolled ? "navbar-light" : "navbar-dark"} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? t(lang, "menuClose") : t(lang, "menuOpen")}
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
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block font-sans text-sm text-camhaji-muted py-2 hover:text-primary transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.href}
                  className="block font-sans text-sm text-camhaji-text py-3"
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            to={ctaHref}
            className="block btn-uppercase bg-primary text-primary-foreground px-6 py-3 text-center mt-4"
          >
            {t(lang, "navCta")}
          </Link>
          <div className="mt-5 flex justify-center">
            <LanguageSwitcher variant="navbar-light" />
          </div>
        </div>
      )}
    </nav>
  );
}
