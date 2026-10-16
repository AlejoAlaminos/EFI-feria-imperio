# Registro de Decisiones de Arquitectura (ADRs) - Feria Imperio

> **Regla de Guardas y Control de Cambios Estructurales**:  
> Cada nueva solicitud del usuario debe quedar registrada aquí. Si una instrucción implica un cambio importante o estructural (arquitectura, cambio de framework, borrado de archivos o librerías), **se DEBE pedir autorización explícita antes de ejecutarlo**.

---

### [ADR-001] · [2026-10-15 20:43] Adopción de Antigravity OS y Metodología SDD
- **Contexto**: Se necesitaba un marco formal de ingeniería, Definition of Done estricto y documentación viva.
- **Decisión**: Adoptar Antigravity OS y metodología Gentle-AI SDD con memoria persistente en `docs/contexto/`.
- **Consecuencias**: Código tipado, validación previa del "por qué" y cero deuda técnica descontrolada.

---

### [ADR-002] · [2026-10-15 20:45] Definición de Identidad y Alcance Funcional V1 de Feria Imperio
- **Contexto**: Crear un directorio de feriantes de Río Cuarto (Paseo del Andino y Parque Sarmiento) para visibilizar sus creaciones sin intermediarios.
- **Decisión**: Implementar catálogo digital con tiendas por puesto, derivación comercial a WhatsApp y carrito de presupuesto simulado. Sin pasarelas de pago ni backend remoto en la V1.
- **Consecuencias**: Despliegue ágil, costo operativo cero y adaptación a la realidad comercial de los artesanos.

---

### [ADR-003] · [2026-10-15 20:50] Elección de TailwindCSS v3 y Sistema de Tokens de Diseño
- **Contexto**: Requerimiento de diseño moderno, mobile-first y soporte de tema oscuro nativo sin CSS monolítico.
- **Decisión**: Configurar TailwindCSS v3 con tokens personalizados (`terracotta`, `forest`, `sand`, `charcoal`) y `darkMode: "class"`.
- **Consecuencias**: Eliminación de CSS muerto, diseño consistente y fácil mantenimiento sin Bootstrap.

---

### [ADR-004] · [2026-10-15 21:00] Estado Global Atómico con Zustand para Presupuesto Simulado
- **Contexto**: Permitir al visitante armar una lista de productos de múltiples feriantes y calcular subtotales antes de escribir por WhatsApp.
- **Decisión**: Crear `useCartStore` con Zustand persistido en `localStorage` (`feria_imperio_cart`).
- **Consecuencias**: Carrito rápido, sin re-renders globales innecesarios ni dependencias de backend.

---

### [ADR-005] · [2026-10-15 21:20] Enrutamiento SPA con Tiendas Individuales y Panel de Vendedor
- **Contexto**: Los feriantes necesitan compartir un enlace directo a su puesto y gestionar su stock en la feria.
- **Decisión**: Configurar `react-router-dom` con rutas `/`, `/tienda/:id` y `/admin` (panel "Mi Taller").
- **Consecuencias**: URLs limpias y compartibles, navegación fluida y vista administrativa accesible.

---

### [ADR-006] · [2026-10-15 21:34] Escaneo Directo del Repositorio y Generación de Master Context
- **Contexto**: El usuario solicitó auditar el repositorio existente y generar 6 documentos de contexto sincronizados con Gentle-AI y vinculados en `GEMINI.md`.
- **Decisión**: Escanear código real (Vite, React 18, TS, TailwindCSS v3, Zustand, Repositories), generar los 6 archivos canónicos en `docs/contexto/` y enlazar las directivas en `GEMINI.md`.
- **Consecuencias**: Base de conocimiento 100% fidedigna al código, sin invenciones y con límites pendientes explícitamente marcados.

---

### [ADR-007] · [2026-10-15 22:30] Autenticación de Feriantes y Modal Integrado con Zustand
- **Contexto**: Se requería un botón de inicio de sesión para que cada feriante pueda identificarse y acceder de forma segura y personalizada a la gestión de su puesto ferial.
- **Decisión**: Implementar `useAuthStore` con Zustand persistido en `localStorage` (`feria_imperio_auth`), crear componente `LoginModal` accesible con soporte para los 4 estados de UI (loading, empty, error, success), acceso rápido de 1 click para demostración y proteger la ruta `/admin` en `AdminPage.tsx`. En la barra de navegación se reemplazó el acceso estático por un botón inteligente `Soy Feriante` y un menú desplegable de perfil activo.
- **Consecuencias**: Experiencia de usuario (UX) realista y profesional sin dependencias de backend remoto en la V1; preserva la arquitectura y cumple el DoD.

