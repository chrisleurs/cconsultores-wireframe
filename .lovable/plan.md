

## Plan: Homepage Adjustments + Contacto/Nosotros Updates + New Sector Page

### 1. Homepage fixes (`src/pages/VersionC.tsx`)

**Hero — left-aligned text**: Change the hero from `items-center text-center` to `items-start text-left`. Move content to left side with max-width constraint.

**"Conoce nuestros servicios" button — add border outline**: Add `border border-white/50` to match the WhatsApp button style.

**Sectores — show all 5 sectors visibly**: Merge the current `sectors` (2 with images) and `sectorCards` (2 text-only) arrays into a single visible grid. Add the new "Pequeños Negocios" sector as the 5th. Options:
- Use a 3+2 grid or a 5-column layout with images for all
- All sectors get equal visual treatment (image + overlay + text)

### 2. Update Contacto (`src/pages/c/ContactoC.tsx`)
Replace current text with `copy-contacto-2.md`:
- H1: "Hablemos de tu Negocio"
- Subtitle updated
- Form fields: Nombre, Empresa (optional), Servicio de interés (dropdown with 8 options), Mensaje
- Button: "Enviar mensaje"
- Note below form about same-day response
- NAP section with pending placeholders

### 3. Update Nosotros (`src/pages/c/NosotrosC.tsx`)
Merge `copy-equipo-2.md` content into the existing Nosotros page:
- Update team bios with the detailed copy (Rogelio, Karen, Marlon)
- Add founder placeholder
- Add "10 profesionales especializados" note
- Keep existing design/layout

### 4. New page: Pequeños Negocios (`src/pages/c/SectorPequenosNegociosC.tsx`)
Full sector page following Version C HiFi pattern:
- Hero: "Contador para tu Pequeño Negocio en Cancún"
- A quién va: 5 H3 subsections (comercio, servicios, restaurantes, venta en línea, contratistas)
- El problema real
- Obligaciones (ISR, IVA, CFDI, anual)
- RESICO vs Régimen General comparison
- Lo que hacemos (7 bullet points)
- Experiencia regional
- Testimonio
- FAQ (5 questions)
- CTA final

### 5. Routing & Nav
- Add route `/version-c/sectores/pequenos-negocios` in `App.tsx`
- Add "Pequeños Negocios" to Navbar sectores dropdown

### Files to modify/create
1. `src/pages/VersionC.tsx` — hero left-align, button outline, sectors grid
2. `src/pages/c/ContactoC.tsx` — updated copy
3. `src/pages/c/NosotrosC.tsx` — team bios from equipo doc
4. **Create** `src/pages/c/SectorPequenosNegociosC.tsx`
5. `src/App.tsx` — new route
6. `src/components/Navbar.tsx` — new dropdown item

