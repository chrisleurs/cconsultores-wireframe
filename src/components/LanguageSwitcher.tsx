import { Link, useLocation } from "react-router-dom";
import { getLangFromPath, switchLangPath } from "@/i18n/lang";

interface Props {
  variant?: "navbar-light" | "navbar-dark" | "footer";
}

export function LanguageSwitcher({ variant = "navbar-dark" }: Props) {
  const { pathname } = useLocation();
  const current = getLangFromPath(pathname);

  const esHref = switchLangPath(pathname, "es");
  const enHref = switchLangPath(pathname, "en");

  const base =
    variant === "footer"
      ? "text-white/55 hover:text-white/85"
      : variant === "navbar-light"
        ? "text-camhaji-text hover:text-primary"
        : "text-white/85 hover:text-white";

  const activeCls =
    variant === "footer"
      ? "text-white font-semibold"
      : variant === "navbar-light"
        ? "text-primary font-semibold"
        : "text-white font-semibold";

  return (
    <div
      className="inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.18em]"
      aria-label="Language switcher"
    >
      <Link
        to={esHref}
        aria-current={current === "es" ? "true" : undefined}
        className={`transition-colors duration-200 ${current === "es" ? activeCls : base}`}
      >
        ES
      </Link>
      <span className={variant === "footer" ? "text-white/20" : "text-white/30"}>/</span>
      <Link
        to={enHref}
        aria-current={current === "en" ? "true" : undefined}
        className={`transition-colors duration-200 ${current === "en" ? activeCls : base}`}
      >
        EN
      </Link>
    </div>
  );
}