Organizamos los cambios de Daniel en 4 rondas independientes. Confirmas y vamos una por una (o varias juntas si prefieres).

## Ronda 1 — Home: ajustes rápidos

**1.a. Recortar espacio en blanco bajo "¿Qué nos hace tu mejor aliado?"**
La sección STATEMENT actualmente es `min-h-[100dvh]` centrada, lo que deja un hueco enorme entre los subtítulos (chips) y los 4 diferenciadores que están en una sección aparte (`pb-24`).
- Quitar el `min-h-[100dvh]` de la sección statement y unirla visualmente con los diferenciadores: título + chips + grid de 4 columnas en un solo bloque con padding moderado (ej. `py-24`).
- Resultado: los textos de los diferenciadores quedan justo debajo de los chips, sin scroll vacío.

**1.b. Renombrar servicios 03 y 04 en la home**
En `src/pages/VersionC.tsx` array `services`:
- 03 → título: **"Nómina y Seguridad Social"** (descripción actual de maquila de nómina se conserva; el href ya apunta a `/servicios/nomina`).
- 04 → título: **"Administración Integral"** (descripción se conserva; href ya apunta a `/servicios/administracion`).

> Nota: en Navbar los labels ya dicen "Nómina y Seguridad Social" y "Administración Integral", así que solo desfasaba la home.

## Ronda 2 — Sector Asesores Inmobiliarios

**2.a. Renombrar "Agentes Inmobiliarios" → "Asesores Inmobiliarios"** en todos los textos visibles:
- `VersionC.tsx` (home – ya dice "Asesores Inmobiliarios" en el grid, revisar consistencia).
- `Navbar.tsx` (label "Inmobiliario" → "Asesores Inmobiliarios").
- `SectorInmobiliarioC.tsx`: H1, hero label, breadcrumbs, FAQs, CTA, meta title/description. Reemplazar "agente inmobiliario" / "agentes inmobiliarios" por "asesor inmobiliario" / "asesores inmobiliarios" preservando concordancia.
- URL/ruta `/sectores/inmobiliario` se conserva (evita romper SEO).

**2.b. Agregar nueva sección "Áreas clave para asesores y agencias inmobiliarias"** en `SectorInmobiliarioC.tsx`, insertada después de la sección "Lo que Camhaji hace por tu negocio inmobiliario" y antes del full-bleed band. Contenido del docx:
- 4 áreas clave (grid 2×2, mismo patrón visual que los 4 "impuestos"): Facturación correcta de comisiones / Control de ingresos y flujo de efectivo / Declaraciones fiscales y pagos provisionales / Organización documental y soporte administrativo.
- Bloque "Experiencia en el sector inmobiliario" (texto largo + cierre destacado): "Entendemos cómo opera el mercado inmobiliario en Cancún y Riviera Maya" + 2 párrafos + frase de cierre en primary.

## Ronda 3 — Nuevo sector: Renta Vacacional (reemplaza Pequeños Negocios)

**3.a. Crear** `src/pages/c/SectorRentaVacacionalC.tsx` siguiendo el patrón visual de `SectorInmobiliarioC.tsx` (hero full-bleed con foto de villa/condo + skyline Cancún, splits, full-bleed band, FAQ accordion, CTA verde). Estructura tomada del docx:
1. **Hero** — H1 "Contabilidad y Administración para Rentas Vacacionales en Cancún" + subtítulo sobre Airbnb/Booking + párrafo intro de Camhaji.
2. **Sección mercado** — "Una industria que creció rápido y exige estructura administrativa" (2 párrafos).
3. **Áreas clave** — 5 áreas en grid (control ingresos plataformas, cumplimiento fiscal/ISR/IVA/ISH, CFDI, administración operativa, organización financiera).
4. **Split image** — Experiencia en el sector (mercado turístico Cancún/Riviera Maya).
5. **Full-bleed band** — Frase destacada "El objetivo no es solo cumplir. Es ayudarte a operar con orden, claridad y tranquilidad."
6. **FAQ** — 7 preguntas del docx (plataformas/impuestos, CFDI, varias propiedades, RESICO incompatible, IVA+ISH, pagos en dólares, alta SAT/estatal).
7. **CTA** verde estándar.
- SEO meta + Service/FAQ JSON-LD con keywords "renta vacacional Cancún", "Airbnb Cancún contador", "hospedaje Quintana Roo".

**3.b. Eliminar el sector "Pequeños Negocios / Declaraciones Anuales"**:
- Reemplazar la card en el grid de sectores de `VersionC.tsx` (item 5) por "Renta Vacacional" con nueva imagen y descripción corta, href `/version-c/sectores/renta-vacacional`.
- Reemplazar item en dropdown de Navbar ("Pequeños Negocios" → "Renta Vacacional", href nuevo).
- Eliminar `SectorPequenosNegociosC.tsx` y su ruta en `src/App.tsx`. Registrar la nueva ruta.
- Eliminar referencias en `NosotrosC.tsx` u otras páginas si las hay.

> ⚠️ **Decisión a confirmar**: Daniel dice "cambiar… por". Asumo eliminar Pequeños Negocios completamente. Si prefieres conservarla oculta o redirigir su URL a la nueva, dímelo.

## Ronda 4 — Versión en inglés (español por default)

Esta es la más grande. Propongo el siguiente enfoque pragmático:

**4.a. Routing dual con prefijo `/en`** (sin tocar las rutas en español):
- Español: `/version-c/...` (default, sin cambios).
- Inglés: `/en/version-c/...` (mirror completo).
- `hreflang` automático en `<SEO />` apuntando a la contraparte.

**4.b. Estrategia de traducción**: archivo de strings centralizado `src/i18n/{es,en}.ts` por página. Cada página C lee desde `useT()` según el locale detectado por el path. No usamos librería externa pesada (i18next es overkill aquí) — un context + hook custom de ~40 líneas.

**4.c. Componentes compartidos a localizar**:
- Navbar (labels + CTA + selector de idioma EN/ES en la esquina derecha).
- FooterC (links, NAP, copy).
- WhatsAppButton (tooltip).
- SEO (title/description por idioma).
- TeamGrid (bios — Daniel deberá enviar traducciones; mientras tanto, placeholder marcado).

**4.d. Páginas a traducir** (11 páginas activas):
- Home (VersionC), Nosotros, Contacto, los 4 servicios, los 5 sectores (post-Ronda 3).

**4.e. Selector de idioma**: pill ES | EN en Navbar (desktop derecha, mobile dentro del menú). Persiste preferencia en `localStorage` para futuras visitas; redirección automática solo si el usuario nunca ha elegido y `navigator.language` es `en-*`.

**4.f. Entrega**: dado el volumen, propongo dividir Ronda 4 en 2 sub-rondas:
- **4-A**: Infraestructura (routing, context, selector, SEO hreflang) + traducción Home y Nosotros.
- **4-B**: Traducción de los 4 servicios + 5 sectores + Contacto.

> ⚠️ **Necesito de Daniel**: textos en inglés ya redactados, o autorización para que yo los traduzca (puedo hacerlo conservando tono y keywords SEO equivalentes en inglés para Cancún).

---

## Orden recomendado

1. Empezar por **Ronda 1** (rápida, alto impacto visible).
2. **Ronda 2** (renombre + sección extra inmobiliario).
3. **Ronda 3** (nuevo sector renta vacacional).
4. **Ronda 4-A** y luego **4-B** (inglés).

¿Apruebas el plan y arrancamos con Ronda 1, o quieres ajustar el alcance / orden / estrategia de inglés antes?
