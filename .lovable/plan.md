## Cambios

### 1. Servicio 01 — solo "Contabilidad"
Editar `src/i18n/homeContent.ts`:
- Línea 311 (ES): `"Contabilidad y Administración"` → `"Contabilidad"`
- Línea 125 (EN): `"Bookkeeping & Administration"` → `"Bookkeeping"`

No tocar descripciones, hrefs, ni SEO. El servicio 04 "Administración Integral" se mantiene intacto.

### 2. Nueve logos nuevos en blanco — sección "CONFÍAN EN NOSOTROS"

**Procesar cada logo subido con `imagegen--edit_image`** para convertirlo a una silueta blanca pura sobre fondo transparente (mismo tratamiento visual que ya tiene el marquee, que aplica `brightness-0 invert` — pero como varios logos son de colores complejos con gradientes, conviene generar versiones blancas dedicadas para que se vean limpias y consistentes).

Prompt por logo: "Convert this logo into a clean monochrome solid white version, preserving all shapes, letters and proportions exactly. Pure white (#FFFFFF) on a fully transparent background. No gradients, no shadows, no color." con `transparent_background: true`.

Archivos destino en `src/assets/clients/`:
| Origen | Destino | Nombre cliente |
|---|---|---|
| SOMA Wellness | `soma-wellness.png` | SOMA Wellness & Spa |
| MEGA LED | `mega-led.png` | Mega LED |
| SAVY AI | `savy-ai.png` | Savy AI |
| Century 21 EVO | `century21-evo.png` | Century 21 Evo |
| Club Hotelia | `club-hotelia.png` | Club Hotelia |
| LED's be green | `leds-be-green.png` | LED's Be Green |
| MO\|ME | `mo-me.png` | MO\|ME Arquitectura |
| EMC | `emc-mep.png` | EMC Instalaciones MEP |
| ROY FPV | `roy-fpv.png` | Roy FPV |

### 3. Actualizar `src/components/ClientLogos.tsx`
- Añadir 9 imports al inicio.
- Añadir 9 entradas al array `clients` después de los 4 existentes (orden: SOMA, Mega LED, Savy AI, Century 21 Evo, Club Hotelia, LED's Be Green, MO|ME, EMC, Roy FPV).
- Mantener el filtro `brightness-0 invert opacity-50 hover:opacity-90` para tono "light" (refuerza el blanco puro y unifica todos los logos).
- Mantener el tamaño especial `h-20 md:h-24` solo para "Cliente Camhaji" (los nuevos usan el tamaño estándar `h-14 md:h-16`).

## Archivos tocados
- `src/i18n/homeContent.ts` (2 líneas)
- `src/components/ClientLogos.tsx`
- 9 archivos PNG nuevos en `src/assets/clients/`
