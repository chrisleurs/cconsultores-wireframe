## Cambios

### 1. Iconos en el footer (columna Contacto)
En `src/components/FooterC.tsx`, agregar los mismos iconos que usa la página de contacto al lado de cada dato:
- Phone → teléfono fijo (998) 887 2584 ext. 1001
- WhatsApp (SVG) → +52 1 55 4358 7159
- Mail → contacto@camhajiconsultores.mx
- MapPin → dirección
- Clock → horario

Iconos en blanco a baja opacidad (`text-white/35`), alineados con `flex items-start gap-3`, manteniendo tipografía y colores actuales.

### 2. Logo del footer más grande sin afectar layout
En `src/components/FooterC.tsx`, aumentar el logo de `h-20 md:h-24` a `h-28 md:h-36` y envolverlo en un contenedor con altura fija o margen negativo para que el logo crezca visualmente sin empujar el resto de columnas. Mantener el grid de 4 columnas alineado en la parte superior usando `items-start` (ya lo está) y aplicar `-mt-4` o `relative` al logo para que el crecimiento sea hacia arriba/abajo sin desplazar el tagline ni el switcher de idioma.

### 3. Rename "Asesores Inmobiliarios" → "Agencias Inmobiliarias"
Cambios de etiquetas (ES) / "Real Estate Advisors" → "Real Estate Agencies" (EN):

- **`src/i18n/ui.ts`**: `sectInmobiliario` en ES y EN.
- **`src/i18n/homeContent.ts`**: nombre de la card en home (ES/EN).
- **`src/i18n/contactoContent.ts`**: opción del select de servicios (ES/EN).
- **`src/i18n/sectorInmobiliarioContent.ts`**: 
  - SEO title/description
  - H1 del hero
  - Reescribir copys del sector para hablar de **agencias inmobiliarias** (brokers/agencias completas con varios agentes, comisiones, esquemas de facturación a la agencia, gestión de equipo de asesores, etc.) en lugar de asesores individuales. Mantener estructura, longitud y keywords SEO equivalentes (Cancún, contabilidad, fiscal, RESICO si aplica).
- **`src/i18n/contabilidadContent.ts`** y **`src/i18n/nosotrosContent.ts`**: actualizar menciones puntuales para que digan "agencias inmobiliarias".

No se tocan rutas ni slugs (`/sectores/inmobiliario` se mantiene).

### Archivos a editar
- `src/components/FooterC.tsx`
- `src/i18n/ui.ts`
- `src/i18n/homeContent.ts`
- `src/i18n/contactoContent.ts`
- `src/i18n/sectorInmobiliarioContent.ts`
- `src/i18n/contabilidadContent.ts`
- `src/i18n/nosotrosContent.ts`
