import { useLocation } from "react-router-dom";

export type Lang = "es" | "en";

export function getLangFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "es";
}

/** Convert a Spanish app path to the same route in the requested language. */
export function localizePath(path: string, lang: Lang): string {
  // Strip any existing /en prefix first
  const clean = path.startsWith("/en/") ? path.slice(3) : path === "/en" ? "/" : path;
  if (lang === "en") {
    return clean === "/" ? "/en" : `/en${clean}`;
  }
  return clean;
}

/** Swap the language of the current location, keeping the rest of the path. */
export function switchLangPath(currentPath: string, target: Lang): string {
  if (target === "en") {
    if (currentPath.startsWith("/en")) return currentPath;
    return currentPath === "/" ? "/en" : `/en${currentPath}`;
  }
  // target es
  if (currentPath === "/en") return "/";
  if (currentPath.startsWith("/en/")) return currentPath.slice(3);
  return currentPath;
}

export function useLang(): Lang {
  const { pathname } = useLocation();
  return getLangFromPath(pathname);
}

/** Hook returning a function that localizes any internal path to current lang. */
export function useLocalize() {
  const lang = useLang();
  return (path: string) => localizePath(path, lang);
}