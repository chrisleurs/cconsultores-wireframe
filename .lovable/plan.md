# Aplicar ediciones de Daniel a páginas de servicios

Aplicaré el contenido nuevo aportado por Daniel a tres páginas, manteniendo el diseño Versión C, la estructura SEO (H1/H2, breadcrumbs, JSON-LD) y solo cambiando textos / agregando los servicios nuevos donde corresponde.

## 1. `src/pages/c/ServicioFiscalC.tsx` — reescritura de contenido

Reemplazar todos los textos por la versión nueva de Daniel, conservando layout y secciones:

- **Hero**: "Estrategia fiscal y cumplimiento para empresas en crecimiento." + subtítulo sobre obligaciones que no admiten improvisación.
- **Sección problema**: "El problema más común que encontramos en las empresas." con los dos párrafos sobre patrones de empresas sin supervisión fiscal.
- **Sección enfoque**: "Cumplimiento fiscal claro, ordenado y sostenible." con enfoque preventivo, no improvisado.
- **Proceso de 5 pasos** (reemplaza el proceso actual):
  1. Diagnóstico inicial de situación fiscal
  2. Cumplimiento de obligaciones fiscales y precierre mensual
  3. Precierre anual
  4. Atención a requerimientos y aclaraciones
  5. Normatividad aplicable a cada sector
- **Sección experiencia**: "Experiencia, criterio y acompañamiento fiscal para empresas." (10+ años, firmas de auditoría + operación directa).
- **FAQs** reescritas (obligaciones atrasadas, etc.).

## 2. `src/pages/c/ServicioNominaC.tsx` — reescritura + 2 servicios nuevos

- Aplicar los 18 textos nuevos de Daniel en sus secciones correspondientes.
- **Agregar dos servicios nuevos** (de los comentarios de Daniel) a la lista de servicios/alcances:
  - **Cumplimiento REPSE y control de servicios especializados** — Acompañamiento administrativo y documental para empresas registradas en REPSE: proveedores especializados, documentación laboral, subcontratación permitida.
  - **Administración de obligaciones ante FONACOT** — Afiliación patronal, descuentos vía nómina, control de retenciones, seguimiento administrativo.

## 3. `src/pages/c/ServicioContabilidadC.tsx` — ampliar "Para quién"

En el array `paraQuien` agregar (o sustituir según orden lógico) dos perfiles nuevos de los comentarios de Daniel, manteniendo los existentes de Construcción / Comercialización:

- **PYMES, restaurantes y empresas en crecimiento** — Empresas pasando de operación informal a estructura financiera y administrativa sólida.
- **Profesionistas independientes y empresas de servicios** — Freelancers, agencias creativas, consultores, asesores inmobiliarios: facturación recurrente, control de ingresos, cobranza, gastos.

La sección pasará de 3 a 4-5 tarjetas (grid responsivo se ajusta).

## Notas técnicas

- Solo se editan los arrays/strings de contenido; no se modifica estructura de componentes, SEO meta, JSON-LD, ni estilos.
- Se respetan los H1/H2 existentes salvo donde Daniel los reescribió explícitamente.
- No se tocan otras páginas (Home, Nosotros, Contacto) — esas ya fueron aplicadas previamente.

## Pendiente para después

Confirmaste que tienes más cambios — los abordamos en el siguiente turno.
