

## Plan: Propuesta SEO — Landing Page + Actualización del Index

### Resumen
1. **Modificar `src/pages/Index.tsx`**: Quitar las tarjetas de Propuesta A y B. Mantener Propuesta C y añadir una nueva tarjeta "Propuesta SEO" que lleve a `/propuesta-seo`.
2. **Crear `src/pages/PropuestaSEO.tsx`**: Una landing page con el diseño de Versión C (dark, cinematic, accent verde) que presente toda la estrategia SEO contenida en los 4 documentos.

### Index (`src/pages/Index.tsx`)
- Grid de 2 tarjetas (en vez de 3): Propuesta C + Propuesta SEO
- La tarjeta SEO usa el mismo estilo dark de la tarjeta C actual

### PropuestaSEO.tsx — Secciones

Usando el design system de Versión C (fondo `camhaji-base`, accent `#5D9E90`, tipografía sans bold, overlays oscuros):

**1. Hero** — Full dark, título "Estrategia SEO HiFi", subtítulo "Camhaji Consultores — camhajiconsultores.mx", fecha abril 2026

**2. Resumen Ejecutivo** (de hifi-01) — Tabla de oportunidades con 6 keywords, sus brechas y oportunidades. Diseño de grid con accent lines

**3. Análisis SERP** (de hifi-01) — Las 6 keywords con sus competidores actuales, brechas identificadas y oportunidades. Cards oscuras con separadores

**4. Clusters del Sitio Web** (de hifi-02) — Las 12 páginas del sitio con su keyword primaria, volumen, KD, CPC, meta title y H1. Grid compacto con prioridad visual (estrellas)

**5. Mapa Anti-Canibalización** (de hifi-02) — Tabla visual keyword → página asignada

**6. Clusters de Blog** (de hifi-03) — Los 5 artículos con keyword, volumen, estructura y calendario editorial

**7. Schemas JSON-LD** (de hifi-04) — Resumen de schemas por página (tabla) + FAQs bank por sección (accordions)

**8. Competidores** (de hifi-01) — Mapa de amenazas con fortalezas/debilidades/cómo superar

**9. Prioridad de Publicación** — Tabla ordenada con razones

**10. Footer** — Reutilizar `<FooterC />`

### Ruta nueva
- `/propuesta-seo` → `PropuestaSEO.tsx`
- Registrar en `App.tsx`

### Archivos a modificar/crear
1. `src/pages/Index.tsx` — Quitar A y B, añadir tarjeta SEO
2. `src/pages/PropuestaSEO.tsx` — Nueva landing page completa
3. `src/App.tsx` — Añadir ruta `/propuesta-seo`

### Notas
- Componentes compartidos: `<Navbar version="c" />`, `<FooterC />`, `<WhatsAppButton />`
- Los datos de los 4 documentos se hardcodean como arrays/objetos en el componente
- Accordion de shadcn para las secciones de FAQ
- Responsive: tablas se convierten en cards en mobile

