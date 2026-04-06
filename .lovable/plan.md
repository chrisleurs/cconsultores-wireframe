

## Plan: Panel de Revisión de Textos — Documentos por Página

Crear una nueva sección accesible desde el Index (`/`) que lleve a una página `/revision-textos` con una experiencia tipo "visor de documentos Word". Cada página del sitio web tiene su propio documento con todo el texto SEO, presentado en formato limpio para que el cliente lo lea y apruebe.

### Concepto UX

- Desde el Index, se añade una tercera tarjeta: "Revisión de Textos"
- La ruta `/revision-textos` muestra una barra lateral (izquierda) con la lista de 12 páginas del sitio, como pestañas de un Excel
- Al seleccionar una, el panel derecho muestra el contenido completo de esa página en formato "documento Word": fondo blanco, márgenes amplios, tipografía serif, jerarquía clara con H1/H2/H3, párrafos bien espaciados
- Cada documento tiene un encabezado con el nombre de la página y un estado (Pendiente / Aprobado)
- Botón "Aprobar texto" que cambia el estado visualmente (estado local, sin backend)

### Documentos (12 páginas)

| # | Documento | Fuente de texto |
|---|-----------|----------------|
| 1 | Homepage | Texto extraído de `VersionC.tsx` |
| 2 | Nosotros | Texto de `NosotrosC.tsx` |
| 3 | Contacto | Texto de `ContactoC.tsx` |
| 4 | Servicio: Contabilidad | Texto de `ServicioContabilidadC.tsx` |
| 5 | Servicio: Fiscal | Texto de `ServicioFiscalC.tsx` |
| 6 | Servicio: Nómina | Texto de `ServicioNominaC.tsx` |
| 7 | Servicio: Facturación | Texto de `ServicioFacturacionC.tsx` |
| 8 | Sector: Construcción | Texto de `SectorConstruccionC.tsx` |
| 9 | Sector: Comercial | Texto de `SectorComercialC.tsx` |
| 10 | Sector: Inmobiliario | Texto de `SectorInmobiliarioC.tsx` |
| 11 | Sector: RESICO | Texto de `SectorResicoC.tsx` |
| 12 | Sector: Pequeños Negocios | Texto de `SectorPequenosNegociosC.tsx` |

### Diseño del visor

- **Sidebar izquierdo**: Lista vertical con los 12 documentos, agrupados por categoría (General, Servicios, Sectores). Indicador visual de estado (punto verde = aprobado, gris = pendiente)
- **Panel principal**: Simula una hoja de documento — `max-w-[816px]` (ancho carta), `bg-white`, `shadow-lg`, padding generoso, tipografía serif para cuerpo, sans para títulos
- **Header del documento**: Nombre de página, breadcrumb de sección, estado, botón aprobar
- **Contenido**: Todo el texto de la página organizado por secciones (Hero, Servicios, FAQ, etc.) con separadores visuales entre bloques

### Archivos a crear/modificar

1. **Crear** `src/pages/RevisionTextos.tsx` — Página completa con sidebar + visor de documentos
2. **Modificar** `src/pages/Index.tsx` — Añadir tercera tarjeta "Revisión de Textos"
3. **Modificar** `src/App.tsx` — Añadir ruta `/revision-textos`

### Notas técnicas
- El texto de cada página se hardcodea como objetos estructurados dentro de `RevisionTextos.tsx` (secciones con título y párrafos)
- Estado de aprobación se maneja con `useState` (se pierde al recargar — solo visual)
- Los textos se extraen directamente de los componentes actuales de cada página
- Responsive: en mobile el sidebar se convierte en un selector/dropdown superior

