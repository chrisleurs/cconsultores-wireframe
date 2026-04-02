

## Plan: Actualizar Páginas Interiores Versión C con Diseño HiFi

Reescribir las 3 páginas interiores de Versión C (Nosotros, Sector Construcción, Servicio Contabilidad) para que coincidan pixel-perfect con los HTML proporcionados. Son diseños significativamente diferentes a los actuales.

### Archivos a modificar
1. `src/pages/c/NosotrosC.tsx`
2. `src/pages/c/SectorConstruccionC.tsx`
3. `src/pages/c/ServicioContabilidadC.tsx`

### NosotrosC.tsx — Cambios principales
- **Hero**: Centrado con imagen de fondo (handshake Unsplash), overlay oscuro 84%, título serif italic "La Firma", subtítulo, breadcrumb
- **Historia**: Grid 2 col — blockquote italic a la izquierda + texto narrativo a la derecha. Debajo: 3 milestones (10+, 6, 10) con separadores verticales
- **Misión/Visión**: Fondo surface, 2 paneles blancos lado a lado con gap 3px, texto serif italic
- **Filosofía**: Fondo primary, header con label + h2 alineado derecha, lista de 5 principios con números (01-05), hover translateX(10px), descripciones en opacity 0.5
- **Equipo**: 3 miembros en grid con fotos Unsplash (aspect 3/4, grayscale 15%), línea verde accent, nombre, role uppercase, bio
- **CTA**: Centrado sobre primary con botón outline

### SectorConstruccionC.tsx — Cambios principales
- **Hero**: Left-aligned con foto construcción, gradient overlay (bottom-heavy), tag "Especialización Principal", título bold sans "Construcción" (gigante), breadcrumb con 2 niveles
- **El Sector**: Grid 2 col — izquierda con quote + texto narrativo, derecha con lista de 5 pain points con dots verdes y bordes
- **Lo que Hacemos**: Fondo dark base, 3 columnas con separadores verticales, iconos SVG, números 01-03, sub-items con "—" prefix
- **Por Qué Camhaji**: Fondo surface, header con h2 + lead text, 3 diferenciadores en cards blancos con icon boxes verdes
- **CTA**: "¿Tienes una constructora?" + "Hablemos de tus proyectos."

### ServicioContabilidadC.tsx — Cambios principales
- **Hero**: Centrado con imagen contabilidad, overlay 86%, tag "Servicio 01", título "Contabilidad & Administración"
- **Alcance**: Grid 3x2 con 6 items (iconos SVG), header con h2 + lead text separados por border-bottom
- **Proceso**: Fondo dark, 5 pasos numerados con nombre + descripción + tag de días (Día 1-5, etc.), hover translateX
- **Tecnología**: Grid 2 col — izquierda con pills (CONTPAQi, ERP, Portal) + derecha con 3 feature cards con icon boxes
- **FAQ**: 4 items colapsables con números, toggle +/rotate 45°
- **Otros Servicios**: 2 cards (Estrategia Fiscal, Nómina) con números y links
- **CTA**: "¿Listo para empezar?" + "Hablemos de tu contabilidad."

### Contenido actualizado (del HTML)
- Textos narrativos completos de historia, misión, visión
- Nombres reales del equipo con bios actualizadas
- Pain points específicos del sector construcción
- Proceso mensual detallado con rangos de días
- FAQs con respuestas completas
- Todo el copy viene directo de los HTML proporcionados

### Notas técnicas
- Imágenes: URLs de Unsplash directas (como en los HTML)
- Mantener componentes compartidos: `<Navbar version="c" />`, `<FooterC />`, `<WhatsAppButton />`
- FAQ: usar estado local con toggle (no shadcn Accordion) para coincidir con el diseño del HTML
- Todos los layouts responsive con breakpoint 768px

