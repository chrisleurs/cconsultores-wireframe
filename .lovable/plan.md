

## Plan: Nuevas Páginas Interiores (Servicio, Sector, Nosotros, Contacto) para Versión A y B

Se crean **8 nuevas páginas** (4 por versión), cada una siguiendo el sistema de diseño ya establecido.

### Nuevas Rutas

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/version-a/servicios/contabilidad` | `src/pages/a/ServicioContabilidadA.tsx` | Servicio Contabilidad — Institutional |
| `/version-a/sectores/construccion` | `src/pages/a/SectorConstruccionA.tsx` | Sector Construcción — Institutional |
| `/version-a/nosotros` | `src/pages/a/NosotrosA.tsx` | Nosotros — Institutional |
| `/version-a/contacto` | `src/pages/a/ContactoA.tsx` | Contacto — Institutional |
| `/version-b/servicios/contabilidad` | `src/pages/b/ServicioContabilidadB.tsx` | Servicio Contabilidad — Modern |
| `/version-b/sectores/construccion` | `src/pages/b/SectorConstruccionB.tsx` | Sector Construcción — Modern |
| `/version-b/nosotros` | `src/pages/b/NosotrosB.tsx` | Nosotros — Modern |
| `/version-b/contacto` | `src/pages/b/ContactoB.tsx` | Contacto — Modern |

### Actualización de App.tsx
Agregar las 8 rutas nuevas al router.

### Actualización de Navbar
Agregar links de navegación a las nuevas páginas (Servicios, Sectores, Nosotros, Contacto) con rutas relativas a cada versión.

### Resumen de cada página

**Servicio Contabilidad (A):** Hero 50vh verde, intro 2 columnas (desc + beneficios box), 4 steps verticales numerados (fondo off-white), "Qué incluye" grid 3x2 módulos, "Para quién" 2 col con check/X lists, FAQ 2 col accordion, otros servicios 2 cards, CTA banner verde.

**Servicio Contabilidad (B):** Hero 50vh verde split con tagline + 3 datos clave, intro editorial con número decorativo "01" + sidebar sticky, 4 steps horizontales fondo negro, "Qué incluye" lista editorial horizontal (fondo off-white), "Para quién" 2 col con frase italic + CTA, FAQ 1 col centrado con números, otros servicios lista horizontal, CTA negro.

**Sector Construcción (A):** Hero 50vh verde con badge "6+ AÑOS", "Por qué" 2 col (narrativa + 4 diferenciadores box), servicios aplicados 3 cards grid (off-white), experiencia verde (stats 2x2 + quote), retos 2x2 cards problema/solución, equipo 2 cards, FAQ 2 col, otros sectores card única, CTA verde.

**Sector Construcción (B):** Hero split verde + off-white con 4 datos del sector, "Por qué" editorial con número decorativo + sticky sidebar, servicios fondo negro lista horizontal, experiencia off-white (stats left + quote), retos accordion expandible, equipo row horizontal fotos 1:1, FAQ 1 col centrado, otros sectores fila simple, CTA negro.

**Nosotros (A):** Hero 50vh verde, historia 2 col (narrativa + línea de tiempo 4 hitos), filosofía 5 principios expandidos con descripciones largas (off-white), cifras fondo verde 4 stats + tagline, equipo jerárquico detallado con tags, registros/membresías badges, CTA verde.

**Nosotros (B):** Hero split verde + off-white con tagline, declaración tipográfica centrada + grid 3 col narrativo, manifesto 5 col fondo negro, cifras off-white (stats left + frase), equipo 3 col fotos 1:1 con tags, registros fila horizontal, CTA negro.

**Contacto (A):** Hero compacto 40vh verde, formulario 60/40 (form + datos sticky con WhatsApp destacado), sección mapa + horarios off-white, footer.

**Contacto (B):** Hero split compacto 40vh (verde + off-white con datos rápidos), formulario editorial con inputs underline-only en grid 2 col + panel WhatsApp verde oscuro sticky, datos fondo negro 4 col, footer.

### Detalles de implementación
- Cada página reutiliza `<Navbar />`, `<Footer />` y `<WhatsAppButton />` existentes
- Formularios de contacto: solo frontend (sin backend), con estados de loading/success simulados
- Mapa: placeholder visual (div con texto)
- Todos los layouts responsive: grids colapsan a 1 columna en mobile
- Accordion/FAQ usa el componente `<Accordion>` de shadcn ya instalado

