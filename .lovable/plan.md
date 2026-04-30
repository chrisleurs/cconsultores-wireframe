## Problema confirmado

Probé en vivo en mobile (390px): al hacer click en "Servicios" → "Contabilidad" el menú se cierra pero la URL no cambia (`/version-c` se queda igual).

**Causa raíz:** el `onClick` del `Link` ejecuta `setMenuOpen(false)`, lo que desmonta el contenedor del menú móvil **antes** de que React Router procese la navegación del `Link`. El click se cancela porque el elemento ya no está en el DOM.

En desktop sí funciona porque el dropdown se cierra después por el handler de "click outside", no en el mismo ciclo de render.

## Solución

En `src/components/Navbar.tsx`:

1. Importar `useLocation` de `react-router-dom`.
2. Agregar un `useEffect` que escuche cambios en `location.pathname` y cierre automáticamente `menuOpen` y `openDropdown`. Esto desacopla el cierre del menú del evento click.
3. **Eliminar** los `onClick={() => setMenuOpen(false)}` de los `Link` del menú móvil (los 3 lugares: dropdown items, links sin dropdown, y el CTA "Agendar Consulta"). Ya no son necesarios porque el `useEffect` cierra el menú al cambiar de ruta.

## Resultado esperado

- Mobile: tap en cualquier link del menú → navega a la página correcta → menú se cierra automáticamente.
- Desktop: sigue funcionando igual.
- Bonus: si el usuario ya está en la página y hace tap en el mismo link, el menú igual se cierra (porque el `Link` actualiza `key` aunque el path sea el mismo... en realidad no se dispara el effect; en ese caso el dropdown sigue abierto, pero es un caso menor).

## Archivos a modificar

- `src/components/Navbar.tsx` (un solo archivo, ~5 líneas de cambio neto)
