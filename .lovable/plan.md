

## Plan: Limpiar Proyecto — Solo Versión C, SEO HiFi y Revisión de Textos

### Resumen
Eliminar todos los archivos y rutas de las versiones A y B, y los componentes que solo ellas usan. Mantener: Versión C (todas sus páginas), PropuestaSEO, RevisionTextos, Index y NotFound.

### Archivos a eliminar (10)
- `src/pages/VersionA.tsx`
- `src/pages/VersionB.tsx`
- `src/pages/a/ContactoA.tsx`
- `src/pages/a/NosotrosA.tsx`
- `src/pages/a/SectorConstruccionA.tsx`
- `src/pages/a/ServicioContabilidadA.tsx`
- `src/pages/b/ContactoB.tsx`
- `src/pages/b/NosotrosB.tsx`
- `src/pages/b/SectorConstruccionB.tsx`
- `src/pages/b/ServicioContabilidadB.tsx`
- `src/components/Footer.tsx` (solo usado por A y B; C usa FooterC)

### Archivos a modificar (3)

1. **`src/App.tsx`** — Eliminar imports y rutas de version-a y version-b (lines 7-8, 10-17, 45-54). Eliminar import de Footer no usado.

2. **`src/pages/Index.tsx`** — Ya solo muestra Propuesta C, SEO y Revisión de Textos. Sin cambios necesarios (A y B ya fueron retiradas anteriormente).

3. **`src/components/Navbar.tsx`** — Eliminar la lógica de `version="a"` y `version="b"` si existe, dejando solo `version="c"` como variante.

### Directorios a eliminar
- `src/pages/a/` (vacío tras eliminar archivos)
- `src/pages/b/` (vacío tras eliminar archivos)

