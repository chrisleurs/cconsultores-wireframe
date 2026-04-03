

## Plan: Actualizar Textos y Crear Páginas Nuevas para Versión C

Se actualizan los textos de las páginas existentes con el copy de los documentos proporcionados, y se crean 5 páginas nuevas para completar el sitio.

### Páginas a actualizar (3)

| Archivo | Documento fuente |
|---------|-----------------|
| `src/pages/VersionC.tsx` | copy-home.md — Actualizar H1, subtítulo, diferenciadores, servicios (ahora 4: Contabilidad, Fiscal, Nómina, Facturación), sectores (ahora 4: Construcción, Comercial, RESICO, Inmobiliario), historia, testimonios y FAQ con el copy nuevo |
| `src/pages/c/SectorConstruccionC.tsx` | copy-construccion.md — Actualizar textos: hero, retos fiscales (4 H3s detallados), lo que hacemos (lista expandida), experiencia regional, testimonio, FAQ (5 preguntas) y CTA |
| `src/pages/c/ServicioContabilidadC.tsx` | copy-contabilidad.md — Actualizar textos: hero, adaptabilidad, proceso (6 pasos detallados), gestión administrativa, para quién es (3 tipos), FAQ (3 preguntas) y CTA |

### Páginas nuevas a crear (5)

| Archivo | Ruta | Documento fuente |
|---------|------|-----------------|
| `src/pages/c/ServicioFiscalC.tsx` | `/version-c/servicios/fiscal` | copy-fiscal.md — Hero, el problema, enfoque, qué incluye (5 servicios), por qué Camhaji, FAQ (4), CTA |
| `src/pages/c/ServicioNominaC.tsx` | `/version-c/servicios/nomina` | copy-nomina.md — Hero, costo de equivocarse, qué incluye + CONTPAQi, especialista Marlon, testimonio, FAQ (3), CTA |
| `src/pages/c/ServicioFacturacionC.tsx` | `/version-c/servicios/facturacion` | copy-facturacion.md — Hero, por qué tercerizar, qué incluye (5 servicios), CONTPAQi, FAQ (4), CTA |
| `src/pages/c/SectorComercialC.tsx` | `/version-c/sectores/comercial` | copy-comercial.md — Hero, lo que necesita el sector, lo que hacemos, experiencia, testimonio, CTA |
| `src/pages/c/SectorInmobiliarioC.tsx` | `/version-c/sectores/inmobiliario` | copy-inmobiliario.md — Hero, impuestos del agente, CFDI comisiones, RESICO, lo que hacemos, FAQ (3), CTA |

### Páginas pospuestas

- **Equipo** (`/version-c/equipo`) y **Contacto** (`/version-c/contacto`): Los documentos copy-equipo.md y copy-contacto.md tienen datos PENDIENTES (dirección, teléfono, fotos, bio del fundador). Se actualizarán los textos disponibles en NosotrosC y ContactoC pero sin crear una página de Equipo separada por ahora.

### Navbar

Actualizar `src/components/Navbar.tsx` para versión C: expandir los links de navegación con dropdowns o links directos a los nuevos servicios y sectores. Mínimo: que "Servicios" y "Sectores" tengan submenús o que los links apunten a las páginas principales.

### Routing

Añadir las 5 rutas nuevas en `src/App.tsx`.

### Diseño

Todas las páginas nuevas siguen el sistema de diseño HiFi de Versión C:
- Fondo `camhaji-base` (#0D1F1C), accent `#5D9E90`
- Hero con imagen Unsplash full-bleed + overlay oscuro
- Secciones alternando fondos dark/surface
- FAQ con toggle custom (+/rotate 45deg)
- Listas numeradas con hover translateX
- Componentes compartidos: `<Navbar version="c" />`, `<FooterC />`, `<WhatsAppButton />`

### Archivos a modificar/crear (resumen)

1. `src/App.tsx` — 5 rutas nuevas
2. `src/components/Navbar.tsx` — Links expandidos para versión C
3. `src/pages/VersionC.tsx` — Textos actualizados
4. `src/pages/c/ServicioContabilidadC.tsx` — Textos actualizados
5. `src/pages/c/SectorConstruccionC.tsx` — Textos actualizados
6. **Crear** `src/pages/c/ServicioFiscalC.tsx`
7. **Crear** `src/pages/c/ServicioNominaC.tsx`
8. **Crear** `src/pages/c/ServicioFacturacionC.tsx`
9. **Crear** `src/pages/c/SectorComercialC.tsx`
10. **Crear** `src/pages/c/SectorInmobiliarioC.tsx`

