# Errores Conocidos y Prevención de Gotchas - Feria Imperio

## 1. Gotchas de CSS / HTML Detectados e Intuidos del Código

| ID | Gotcha / Riesgo | Causa Raíz en Código | Solución Aplicada en el Repo |
|---|---|---|---|
| **GOT-001** | **Scroll horizontal en móviles** | Elementos con anchos rígidos (`width: 600px`), `w-screen` o márgenes desbordados. | `overflow-x-hidden` en `body` dentro de `src/index.css` y uso de anchos fluidos (`w-full`, `max-w-7xl`). |
| **GOT-002** | **Solapamiento de navegación por anclas** | El header fijo (`sticky top-0 h-16 sm:h-20`) tapa el encabezado de la sección `#ferias`. | Clase utilitaria `.scroll-section { scroll-margin-top: 5rem; }` definida en `src/index.css`. |
| **GOT-003** | **Salto de layout por imágenes externas** | URLs de Unsplash / ImgBB con demoras de carga o enlaces caídos provocan CLS o espacios rotos. | Contenedores con relación de aspecto fija (`h-48`, `aspect-square`, `object-cover`) y fondos placeholder tipo skeleton. |
| **GOT-004** | **Parpadeo de tema (Theme Flash)** | La página parpadea en blanco al recargar en modo oscuro si el script se ejecuta tras el render. | `ThemeToggle.tsx` lee síncronamente `localStorage.getItem('feria_theme')` e inserta la clase `.dark` en `<html>`. |
| **GOT-005** | **Superposición de capas z-index** | Colisión visual entre el `NavBar` (`z-40`), el drawer del carrito (`z-50`) y el botón flotante de WhatsApp (`z-30`). | Escala estricta de z-index: `z-30` (WhatsApp flotante) < `z-40` (`NavBar` sticky) < `z-50` (`CartDrawer`, modales y `Toast`). |

---

## 2. Compatibilidad de Navegadores
- **Safari en iOS / macOS**: Safari ignora `scroll-behavior: smooth` en ciertas versiones antiguas; se mitiga con la clase Tailwind `scroll-smooth` en el tag `<html>` de `index.html`.
- **Navegadores móviles (Chrome/Firefox en Android e iOS)**:
  - Las áreas de clic menores a 44x44px provocan toques erróneos. Se fuerza `p-2` o `min-h-[44px]` en botones de navegación y acciones.
  - La barra de direcciones móvil dinámica altera `100vh`; se recomienda usar `min-h-screen` de Tailwind.

---

## 3. Consideraciones y Ajustes Específicos para Windows
- **Separadores de Ruta (`\` vs `/`)**:
  - En comandos de PowerShell y Vite, usar siempre barras diagonales `/` para alias y rutas relativas dentro del código TypeScript/React para evitar roturas de importación cruzada en bundlers.
- **Scrollbars Nativos en Windows**:
  - A diferencia de macOS/iOS, Windows añade una barra de scroll vertical con ancho físico (~17px) que puede forzar saltos de maquetado si se usa `100vw`. Evitar `w-screen` y priorizar `w-full` en contenedores centrales.
- **Fin de Línea (CRLF vs LF)**:
  - Mantener consistencia en git para no alterar diffs masivos entre entornos Unix y Windows.
