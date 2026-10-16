# Antigravity Project Configuration & Rules - Feria Imperio

Este archivo define la vinculación automática de directivas y el Master Context del proyecto para Antigravity.

## Directivas Globales Activas (Always-On)
@.agents/rules/antigravity_global_rules.md

## Master Context - Documentación Viva (docs/contexto/)
@docs/contexto/arquitectura.md
@docs/contexto/convenciones.md
@docs/contexto/decisiones.md
@docs/contexto/glosario.md
@docs/contexto/flujo-de-trabajo.md
@docs/contexto/errores-conocidos.md

---

### Resumen Operativo de Referencia Rápida
- **Proyecto**: Feria Imperio (Río Cuarto, Córdoba)
- **Rol Activo**: Senior Product Engineer (calidad, velocidad de entrega, UX, justificar el por qué antes del cómo).
- **Stack Tecnológico Detectado**: React 18+ / TypeScript / Vite / TailwindCSS v3 / Zustand / Patrón Repository (sin Bootstrap ni backend remoto).
- **Definition of Done (DoD)**: Justificación técnica + Tipado estricto sin `any` + 4 Estados UI (Loading, Empty, Error, Success) + Código limpio y accesible.
- **Control de Guardas**: Consulta obligatoria y aprobación previa del usuario antes de alterar arquitectura, modelos de datos o reglas del negocio ferial.
- **Metodología SDD**: Fast-Path (1 archivo simple) vs Ciclo SDD (> 2 archivos o cambios arquitecturales).
