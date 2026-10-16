# Registro de Errores y Prevención de Gotchas - Feria Imperio

## 1. Trampas Comunes de Maquetado (Gotchas Prevenidos)

| ID | Gotcha de Maquetado | Riesgo / Síntoma | Solución Técnica Aplicada |
|---|---|---|---|
| **GOT-001** | Scroll Horizontal en Móviles | Desplazamiento lateral indeseado por paddings fijos o elementos con `w-screen`. | Uso estricto de `w-full`, contención con `overflow-x-hidden` en el contenedor raíz y testeo en viewport de 360px. |
| **GOT-002** | Contraste deficiente de Texto | Textos ilegibles sobre fondo Terracota (`#c85a32`) o Verde Bosque (`#2f5233`). | Asegurar relación de contraste mínima 4.5:1 (WCAG AA). Uso de texto blanco puro `#ffffff` sobre botones primarios y validación en ambos modos (claro y oscuro). |
| **GOT-003** | Imágenes Rotas o con Carga Lenta | Tarjetas vacías o saltos visuales si falla una URL externa de ImgBB / Unsplash. | Atributo `alt` descriptivo obligatorio, relación de aspecto fija (`aspect-square` o `aspect-video`) y componente con fallback / placeholder gráfico elegante. |
| **GOT-004** | Solapamiento de NavBar Fijo | Al hacer clic en un enlace de navegación interna (ancla), el título de la sección queda oculto detrás de la barra superior fija. | Implementación de `scroll-mt-20` (scroll margin top) en los contenedores de sección de destino. |
| **GOT-005** | Fuga de Estado al Alternar Tema | Parpadeo (*flash*) blanco al recargar en modo oscuro. | Sincronización de clase `.dark` en el elemento `<html>` directamente desde la inicialización del store en `localStorage`. |

---

## 2. Historial de Incidencias Resueltas

| ID | Fecha | Descripción del Error | Causa Raíz | Solución Aplicada |
|---|---|---|---|---|
| ERR-001 | 2026-10-15 | Inicialización del sistema de reglas | N/A (Configuración inicial) | Configurado sistema Antigravity OS con reglas permanentes. |
| ERR-002 | 2026-10-15 | Definición del contexto base | Adopción de arquitectura inicial | Documentada la especificación completa de Feria Imperio en `docs/contexto/`. |
| ERR-003 | 2026-10-15 | Monolito estático sin reactividad ni tipos | Archivos `.jsx` heredados sin entorno de build | Creada arquitectura Vite + React 18 + TS + Zustand + Patrón Repository y 4 estados de UI. |
