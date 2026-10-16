# Flujo de Trabajo y Definition of Done - Feria Imperio

## 1. Pasos para Realizar un Cambio de Maquetado o Funcionalidad
Cada modificación debe ejecutarse de acuerdo con la estrategia de 4 fases de SDD:

1. **Fase 1: Justificación y Especificación (Spec)**:
   - Identificar el objetivo de UX, los archivos involucrados y explicar el **por qué** antes del **cómo**.
   - Definir de antemano el comportamiento en los 4 estados de UI (Loading, Empty, Error, Success).
2. **Fase 2: Contratos e Interfaces (Design)**:
   - Si se modifican datos, actualizar primero las interfaces en `src/types/index.ts` y contratos en `src/repositories/interfaces/`.
3. **Fase 3: Maquetado e Implementación (Implementation)**:
   - Utilizar clases declarativas de TailwindCSS v3 siguiendo la directiva Mobile-First.
   - Usar etiquetas HTML5 semánticas (`<header>`, `<main>`, `<section>`, `<article>`).
   - Conectar los componentes a los repositorios o al store de Zustand (`useCartStore`).
4. **Fase 4: Verificación contra DoD y Testing Visual (Review)**:
   - Validar que no existan errores de compilación TypeScript.
   - Probar la vista en los distintos viewports y alternar el modo oscuro.

---

## 2. Checklist de "Terminado" (Definition of Done - DoD)
Ningún ticket, componente o refactor se da por concluido si no aprueba estos 4 puntos:
- [ ] **1. Justificación Técnica**: El cambio incluye explicación clara de diseño, trade-offs e impacto.
- [ ] **2. Tipado Estricto**: Cero errores de TypeScript (`npm run build` sin errores, sin uso de `any` arbitrario).
- [ ] **3. Cumplimiento de los 4 Estados de UI**:
  - ⏳ **Loading**: Skeletons o spinners no invasivos mientras se resuelven promesas.
  - 📭 **Empty**: Mensaje claro cuando no hay resultados, con CTA para restablecer filtros o volver.
  - ❌ **Error**: Manejo visible del error con botón de reintento (`onRetry`).
  - ✅ **Success**: Renderizado correcto de datos, imágenes con `alt` y botones interactivos.
- [ ] **4. Código Limpio y Accesibilidad**: Código modular, sin duplicación (DRY), con áreas táctiles aptas (mínimo 44x44px).

---

## 3. Protocolo de Validación Responsive
Toda pantalla o componente debe validarse en 3 rangos de resolución mínimos:
1. **Móvil (360px a 767px)**:
   - Grilla de 1 columna vertical.
   - Menú de navegación condensado en panel lateral / menú hamburguesa.
   - Botón de WhatsApp flotante (`FloatingWhatsApp`) visible y accesible sin tapar botones clave.
   - Ausencia total de scroll horizontal (`overflow-x-hidden`).
2. **Tablet (768px a 1023px)**:
   - Grillas en 2 columnas con espacio intermedio (`gap-4` o `gap-6`).
   - Barra de búsqueda visible en la cabecera.
3. **Desktop (>= 1024px)**:
   - Grillas en 3 o 4 columnas (`lg:grid-cols-3` o `xl:grid-cols-4`).
   - Menú horizontal completo visible en `NavBar`.
   - Modales centrados con ancho máximo controlado (`max-w-2xl` o `max-w-4xl`).
