

## Plan: Elevar Homepage Versión C con Imágenes Estilo ARC Group

Inspirado en arc-group.com, transformar las secciones de la homepage de Versión C para usar **fotografías full-bleed de gran formato** como fondos, con overlays oscuros y texto superpuesto — reemplazando los fondos planos actuales.

### Imágenes a usar (Unsplash, alta resolución)

Todas las imágenes serán contextualmente relevantes a Camhaji: Cancún, construcción, contabilidad, equipo profesional.

| Sección | Imagen | Fuente |
|---------|--------|--------|
| Hero | Skyline de Cancún / zona hotelera aérea | Unsplash |
| Statement | Oficina profesional / manos en documentos | Unsplash |
| Servicios | Vista cenital de escritorio con laptop y documentos | Unsplash |
| Sectores: Construcción | Obra en construcción tropical | Unsplash |
| Sectores: Comercial | Almacén / logística | Unsplash |
| Equipo | Placeholder mejorado con fondo gradiente (sin foto real) | CSS |
| Testimonial | Cancún laguna / paisaje urbano nocturno | Unsplash |
| CTA | Arquitectura moderna en Cancún | Unsplash |

### Cambios en `src/pages/VersionC.tsx`

**1. Hero** — Añadir imagen de fondo full-bleed del skyline de Cancún con overlay oscuro `bg-black/60`, texto encima. Estilo ARC: la imagen ocupa toda la viewport, el contenido se alinea a la izquierda (no centrado) con un acento vertical verde a la izquierda del heading (como la barra roja de ARC).

**2. Statement** — Añadir imagen de fondo sutil (oficina) con overlay blanco semi-transparente para mantener legibilidad.

**3. Servicios** — Imagen de fondo (escritorio profesional) con overlay oscuro pesado. Los 3 cards mantienen su grid pero sobre la imagen.

**4. Sectores** — Cada mitad del split lleva su propia imagen de fondo (construcción / comercial) con overlay oscuro, texto en la parte inferior. Estilo idéntico a ARC "Full spectrum" / "Global, Asia focused".

**5. Testimonial** — Imagen nocturna de Cancún como fondo con overlay oscuro.

**6. CTA** — Imagen de arquitectura moderna como fondo con overlay del color primario.

### Implementación técnica

- Imágenes via `<img>` con `object-cover` + `absolute inset-0` como background, overlays con divs absolutos
- Fallback: si la imagen no carga, se mantiene el color de fondo actual
- Mobile: mismas imágenes, el overlay se oscurece más para legibilidad
- No se añade JS adicional — solo CSS

### Archivo a modificar
- `src/pages/VersionC.tsx`

