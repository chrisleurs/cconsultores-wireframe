import { useLang, localizePath } from "@/i18n/lang";
import { t } from "@/i18n/ui";
import { LanguageSwitcher } from "./LanguageSwitcher";


export function FooterC() {
  const lang = useLang();
  const base = localizePath("/version-c", lang);
  return (
    <footer className="bg-camhaji-base py-16 md:py-20" itemScope itemType="https://schema.org/AccountingService">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center mb-4">
              <img
                src={logoBlanco}
                alt="CAMHAJI Consultores"
                className="h-12 w-auto"
                itemProp="logo"
              />
            </div>
            <p className="font-serif text-sm italic text-white/45 leading-relaxed mt-4">
              {t(lang, "footerTagline")}
            </p>
            <div className="mt-6">
              <LanguageSwitcher variant="footer" />
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="label-uppercase text-white/30 mb-6">{t(lang, "footerServicios")}</h4>
            <ul className="space-y-3">
              {[
                { label: t(lang, "svcContabilidad"), href: `${base}/servicios/contabilidad` },
                { label: t(lang, "svcFiscal"), href: `${base}/servicios/fiscal` },
                { label: t(lang, "svcNomina"), href: `${base}/servicios/nomina` },
                { label: t(lang, "svcAdministracion"), href: `${base}/servicios/administracion` },
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
            <h4 className="label-uppercase text-white/30 mb-6">{t(lang, "footerSectores")}</h4>
            <ul className="space-y-3">
              {[
                { label: t(lang, "sectConstruccion"), href: `${base}/sectores/construccion` },
                { label: t(lang, "sectComercial"), href: `${base}/sectores/comercial` },
                { label: t(lang, "sectInmobiliario"), href: `${base}/sectores/inmobiliario` },
                { label: t(lang, "sectResico"), href: `${base}/sectores/resico` },
                { label: t(lang, "sectRentaVac"), href: `${base}/sectores/renta-vacacional` },
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
            <h4 className="label-uppercase text-white/30 mb-6">{t(lang, "footerContacto")}</h4>
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
                <span itemProp="addressCountry">{lang === "en" ? "Mexico" : "México"}</span>
              </li>
              <li>{t(lang, "footerHours")}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-white/25">
            {t(lang, "footerRights")}
          </p>
          <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/20">
            CANCÚN · QUINTANA ROO · MÉXICO
          </p>
        </div>
      </div>
    </footer>
  );
}
