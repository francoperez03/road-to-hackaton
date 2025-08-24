# BookingCTA Component

Este componente centraliza todos los enlaces de Calendly del sitio.

## ¿Cómo cambiar el enlace de Calendly?

**⚠️ MÉTODO FÁCIL - Un solo lugar para cambiar todo:**

1. Ve al archivo `src/config/links.js`
2. Cambia esta línea:
```javascript
export const CALENDLY_LINK = 'TU_ENLACE_REAL_DE_CALENDLY';
```

Esto actualizará automáticamente:
- Footer de todas las páginas
- Página de Connect
- Cualquier lugar que use el componente BookingCTA

## Uso del componente

```jsx
// Uso básico
<BookingCTA />

// Con texto personalizado
<BookingCTA text="🚀 RESERVAR AHORA" />
```

## ¿Dónde aparece?

- ✅ Footer de todas las páginas (automático)
- ✅ Página de Connect (2 veces)
- ✅ Se puede agregar en cualquier página MDX