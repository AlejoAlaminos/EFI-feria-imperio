# Convenciones de Desarrollo - Feria Imperio

## 1. Estilo de HTML Semántico
El maquetado debe utilizar etiquetas semánticas nativas de HTML5 en lugar de `div` redundantes:
- `<header>`: Encabezado superior global (`NavBar`) y cabecera de la tienda individual.
- `<nav>`: Enlaces de navegación interna en `NavBar` y menús accesibles.
- `<main>`: Contenedor principal del cuerpo de cada vista (`HomePage`, `StoreDetailPage`, `AdminPage`).
- `<section>`: Bloques temáticos (`HeroBanner`, `FeriasSection`, sección de contacto, grillas).
- `<article>`: Tarjetas autosuficientes de información (`StoreCard`, `ProductCard`).
- `<aside>`: Cajón lateral deslizable del carrito (`CartDrawer`).
- `<footer>`: Pie de página institucional y enlaces de contacto.
- `<figure>` / `<figcaption>`: Imágenes de productos con su descripción textual contextual.

---

## 2. Naming y Sistema de Estilos: Utilidades TailwindCSS
- **Framework Utilizado**: **TailwindCSS v3** exclusivamente.
  - **NO se usa metodología BEM** (`.block__element--modifier`) ni hojas CSS monolíticas.
  - Se utilizan clases utilitarias atómicas y declarativas directamente en el atributo `className`.
- **Estrategia Responsive Mobile-First**:
  - Base: Móvil por defecto (`< 768px`).
  - Breakpoints oficiales: `sm:` (640px), `md:` (768px), `lg:` (1024px), `xl:` (1280px).
- **Modo Oscuro**:
  - Manejado con la variante `dark:` (ej: `bg-sand dark:bg-charcoal text-charcoal dark:text-sand-100`).
- **Nombres de Clases y Tokens de Marca**:
  - `terracotta` (`#c85a32`): Identidad primaria, botones principales y acentos destacados.
  - `forest` (`#2f5233`): Acento secundario y vínculos a ferias ecológicas.
  - `sand` (`#fbfaf8`): Fondo y superficies en modo claro.
  - `charcoal` (`#18181b`): Textos en modo claro y fondo en modo oscuro.
  - `whatsapp` (`#25d366`): Botones y llamadas a la acción directas hacia WhatsApp.
- **Nomenclatura en Código**:
  - Componentes React: `PascalCase.tsx` (ej: `ProductCard.tsx`, `StoreGrid.tsx`).
  - Hooks y stores: `camelCase.ts` con prefijo `use` (ej: `useCartStore.ts`).
  - Interfaces y tipos: `PascalCase` en `src/types/index.ts` (ej: `Feriante`, `Producto`, `UIStatus`).
  - Contratos de repositorio: prefijo `I` (ej: `IFerianteRepository.ts`, `IProductoRepository.ts`).

---

## 3. Patrones Permitidos
1. **Patrón Repository**: Consumir datos siempre a través de las abstracciones inyectadas (`ferianteRepository`, `productoRepository`, `contactoRepository`), nunca mediante llamadas directas hardcodeadas en vistas.
2. **Validación de 4 Estados de UI**: Toda vista o componente con carga asíncrona debe implementar explícitamente:
   - ⏳ `loading`: Skeletons animados con `animate-pulse`.
   - 📭 `empty`: Estado informativo con icono y botón para resetear filtros.
   - ❌ `error`: Mensaje claro de fallo con botón de reintento (`onRetry`).
   - ✅ `success`: Renderizado normal de los datos.
3. **Manejo de Estado Atómico con Zustand**: Persistir selectivamente en `localStorage` mediante middleware oficial `persist`.
4. **Formateo Centralizado**: Utilizar funciones de `src/utils/formatters.ts` (`formatARS`, `buildWhatsAppLink`).

---

## 4. Patrones Prohibidos
1. ❌ **Prohibido el uso de `any` arbitrario**: Toda entidad, propiedad y evento debe tener tipos estrictos de TypeScript.
2. ❌ **Prohibido el uso de Bootstrap o CSS Vanilla desordenado**: No incorporar archivos CSS externos fuera de Tailwind utilities y `src/index.css`.
3. ❌ **Prohibido anchos fijos que causen scroll horizontal**: No usar valores absolutos en píxeles que desborden pantallas móviles de 360px (usar `w-full`, `max-w-*` y `overflow-x-hidden`).
4. ❌ **Prohibido agregar dependencias o pasarelas de pago** sin consulta y aprobación explícita previa del usuario.
