

## Plan: Añadir Secciones con Imágenes a Páginas de Servicios y Sectores

Todas las páginas interiores de Versión C tienen el mismo patrón: Hero con imagen → secciones de puro texto alternando fondos → FAQ → CTA. Se añadirán **secciones con imágenes full-bleed** entre los bloques de texto para dar ritmo visual, coherentes con cada tema y con Cancún.

### Tipo de sección a insertar

Dos formatos visuales que se alternan:

1. **Split image + text** (50/50): imagen a un lado, texto al otro. Grid 2 columnas, colapsa a stack en mobile.
2. **Full-bleed image band**: imagen ancho completo con overlay oscuro y texto superpuesto (estilo hero pero más corto, ~40vh).

### Ubicación y contenido por página

#### Servicios (4 páginas)

| Página | Dónde | Formato | Imagen (Unsplash) |
|--------|-------|---------|-------------------|
| **Contabilidad** | Entre "Proceso mensual" y FAQ | Split | Oficina moderna con documentos y laptop en Cancún |
| **Contabilidad** | Entre "Por qué Camhaji" y "Proceso" | Full-bleed band | Vista aérea zona hotelera Cancún (contexto local) |
| **Fiscal** | Entre "El problema" y "Enfoque" | Split | Reunión profesional, documentos fiscales |
| **Fiscal** | Entre "Por qué Camhaji" y FAQ | Full-bleed band | Edificios corporativos Cancún |
| **Nómina** | Entre "El problema" y "Qué incluye" | Split | Equipo de trabajo en oficina |
| **Nómina** | Entre "CONTPAQi" y FAQ | Full-bleed band | Trabajadores en entorno laboral |
| **Facturación** | Entre "Por qué tercerizar" y "Qué incluye" | Split | Pantalla con sistema de facturación |
| **Facturación** | Entre "CONTPAQi" y FAQ | Full-bleed band | Oficina con equipo tecnológico |

#### Sectores (5 páginas)

| Página | Dónde | Formato | Imagen |
|--------|-------|---------|--------|
| **Construcción** | Entre "Por qué especializada" y "Retos" | Split | Obra en construcción en zona costera |
| **Construcción** | Entre "Experiencia regional" y "Testimonio" | Full-bleed band | Desarrollo inmobiliario Riviera Maya |
| **Comercial** | Entre "Lo que necesita" y "Lo que hacemos" | Split | Almacén/tienda comercial |
| **Comercial** | Entre "Experiencia" y "Testimonio" | Full-bleed band | Centro comercial Cancún |
| **Inmobiliario** | Entre "Impuestos" y "Lo que hacemos" | Split | Agente inmobiliario mostrando propiedad |
| **Inmobiliario** | Entre "Experiencia" y FAQ | Full-bleed band | Condominios frente al mar Cancún |
| **RESICO** | Entre "Obligaciones" y "Lo que hacemos" | Split | Emprendedor en negocio pequeño |
| **RESICO** | Entre "Experiencia" y FAQ | Full-bleed band | Calle comercial de Cancún |
| **Pequeños Negocios** | Entre "Obligaciones" y "Lo que hacemos" | Split | Tienda local / restaurante |
| **Pequeños Negocios** | Entre "Experiencia" y FAQ | Full-bleed band | Mercado o zona comercial local |

### Implementación técnica

**Split section (reutilizable)**:
```text
┌─────────────────────┬─────────────────────┐
│                     │  LABEL UPPERCASE     │
│     IMAGEN          │  Título H2           │
│     object-cover    │  Párrafo descriptivo │
│     aspect-[4/3]    │                      │
│                     │                      │
└─────────────────────┴─────────────────────┘
```
- Grid `grid-cols-1 md:grid-cols-2`, gap-0
- Imagen: `aspect-[4/3] object-cover w-full h-full`
- Texto: padding generoso, centrado verticalmente con `flex items-center`
- Alterna lado de la imagen (izquierda/derecha) entre apariciones

**Full-bleed band**:
- `min-h-[40vh]` con `<img>` absolute + overlay `bg-camhaji-base/70`
- Texto centrado superpuesto: frase corta o dato de contexto
- No repite contenido — añade una línea editorial o dato relevante del sector/servicio

### Archivos a modificar (9)
1. `src/pages/c/ServicioContabilidadC.tsx`
2. `src/pages/c/ServicioFiscalC.tsx`
3. `src/pages/c/ServicioNominaC.tsx`
4. `src/pages/c/ServicioFacturacionC.tsx`
5. `src/pages/c/SectorConstruccionC.tsx`
6. `src/pages/c/SectorComercialC.tsx`
7. `src/pages/c/SectorInmobiliarioC.tsx`
8. `src/pages/c/SectorResicoC.tsx`
9. `src/pages/c/SectorPequenosNegociosC.tsx`

### Notas
- Sin texto nuevo SEO — las secciones con imagen usan frases ya existentes o datos de contexto breves
- Imágenes de Unsplash con parámetros `w=1200&h=800&fit=crop`
- Todas responsive: split colapsa a imagen arriba + texto abajo en mobile

