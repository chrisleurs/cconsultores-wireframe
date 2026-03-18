

## Plan: Camhaji Consultores — Versión A y Versión B

### Estructura del proyecto
- **`/version-a`** → Propuesta A: "Institutional Heritage" (clásica, solemne, autoridad)
- **`/version-b`** → Propuesta B: "Modern Advisory" (editorial, audaz, dinámica)
- **`/`** → Página índice con links a ambas versiones para compararlas

### Setup global
- Importar Google Fonts: **Libre Baskerville** (serif) + **Outfit** (sans-serif) con `font-display: swap`
- Configurar design tokens compartidos en CSS (paleta, tipografía, radius 2px max, sombras)
- Configurar `lang="es-MX"` en el HTML

### Componentes compartidos
Ambas versiones usan los mismos tokens de color y tipografía. Se crearán componentes reutilizables donde aplique:
- **WhatsAppButton** — botón flotante fijo (verde #25D366, 56px)
- **Footer** — mismo contenido, misma estructura (3 columnas: marca, servicios, contacto)
- **Navbar** — transparente→blanca al scroll, con CC icon, links y CTA. Mobile: hamburger menu

### Versión A — "Institutional Heritage" (11 secciones)
1. **Navbar** — transparente sobre hero verde → blanca al scroll
2. **Hero** — full-height verde #143630, watermark "CC" ghost, H1 con italic, 2 CTAs, scroll indicator
3. **Stats** — fondo off-white #F5F2EC, 4 columnas con divisores, badge geográfico
4. **Servicios** — fondo blanco, grid 3 cards con separadores de borde, números de orden
5. **Por Qué** — fondo verde, 2 columnas: lista de 5 principios + visual box con ghost stat y blockquote
6. **Sectores** — fondo off-white, layout asimétrico 60/40 (Construcción featured + Comercial)
7. **Equipo** — fondo blanco, layout jerárquico: 1 grande izq + 2 apiladas der
8. **Testimonios** — fondo off-white, asimétrico: 1 quote grande + 2 mini-cards
9. **CTA Banner** — fondo verde, centrado con watermark CC
10. **FAQ** — fondo blanco, 2 columnas: título izq + accordion der
11. **Footer** — fondo verde

### Versión B — "Modern Advisory" (11 secciones)
1. **Navbar** — igual estructura, sobre hero split
2. **Hero Split** — 50/50: panel verde izq (texto+CTA) + panel off-white der (monograma CC sólido opacity 0.12 + tagline)
3. **Stats** — fondo **negro** #000, números blancos, left-aligned (ruptura visual)
4. **Servicios** — lista editorial horizontal (filas completas con número, ícono, nombre, descripción, link)
5. **Por Qué Manifesto** — fondo verde, 5 columnas iguales centradas con principios
6. **Sectores** — fondo off-white, Construcción en layout 50/50 (imagen + texto) + Comercial secundario
7. **Equipo** — fondo blanco, 3 columnas iguales, fotos cuadradas 1:1, línea decorativa
8. **Testimonios** — fondo off-white, quote único gigante centrado con dots de navegación (rotable)
9. **CTA Banner** — fondo **negro**, 2 columnas editorial con línea decorativa
10. **FAQ** — fondo blanco, 1 columna centrada con números visibles
11. **Footer** — fondo verde con línea decorativa

### Responsive
- Todos los layouts se adaptan a mobile (<768px) y tablet según las specs
- Hero B: de split horizontal → vertical (60/40)
- Grids colapsan a 1 columna en mobile

### Accesibilidad
- FAQ con `<button>` y `aria-expanded`
- Focus visible con outline verde
- `prefers-reduced-motion` respetado
- Testimonios B con `aria-live="polite"`

