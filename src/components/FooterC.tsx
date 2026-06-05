import { useLang, localizePath } from "@/i18n/lang";
import { t } from "@/i18n/ui";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MapPin, Mail, Clock, Phone } from "lucide-react";
import camhajiLogo from "@/assets/camhaji-logo-blanco.png";


export function FooterC() {
  const lang = useLang();
  const base = localizePath("/version-c", lang);
  return (
    <footer className="bg-camhaji-base py-16 md:py-20" itemScope itemType="https://schema.org/AccountingService">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-12">
          {/* Brand */}
          <div>
            <img
              src={camhajiLogo}
              alt="Camhaji Consultores"
              itemProp="logo"
              className="h-32 md:h-40 w-auto object-contain mb-4 -mt-4"
            />

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
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-white/35 flex-shrink-0 mt-0.5" />
                <a href="tel:+529988872584" className="hover:text-white/85 transition-colors" itemProp="telephone">
                  (998) 887 2584 ext. 1001
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-white/35 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a
                  href="https://wa.me/5215543587159"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/85 transition-colors"
                >
                  +52 1 55 4358 7159
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-white/35 flex-shrink-0 mt-0.5" />
                <a href="mailto:contacto@camhajiconsultores.mx" className="hover:text-white/85 transition-colors">
                  contacto@camhajiconsultores.mx
                </a>
              </li>
              <li className="flex items-start gap-3 leading-relaxed">
                <MapPin className="w-4 h-4 text-white/35 flex-shrink-0 mt-0.5" />
                <span>
                  <span itemProp="streetAddress">Calle Mar #9, Lote 12, Mz. 12, SM 4</span>,{" "}
                  <span itemProp="addressLocality">Cancún</span>,{" "}
                  <span itemProp="addressRegion">Quintana Roo</span>{" "}
                  <span itemProp="postalCode">77500</span>,{" "}
                  <span itemProp="addressCountry">{lang === "en" ? "Mexico" : "México"}</span>
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-white/35 flex-shrink-0 mt-0.5" />
                <span>{t(lang, "footerHours")}</span>
              </li>
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
