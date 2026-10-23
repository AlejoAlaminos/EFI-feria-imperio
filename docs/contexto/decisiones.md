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

---

### [ADR-008] · [2026-10-18 23:55] Consolidación del Documento de Investigación y Validación de Entrevista Guiada
- **Contexto**: El equipo de desarrollo (Alaminos, Fornasari, Leone, Quiroga - ITEC Río Cuarto, Programación II) presentó el documento de investigación formal y completó la entrevista guiada de 14 preguntas pedagógicas cubriendo identidad, wireframe, estilo visual, decisiones técnicas y criterios de calidad.
- **Decisión**: Validar que no existen ambigüedades ni requisitos contradictorios, consolidar las 14 respuestas en el Master Context vivo (`docs/contexto/`), ratificar los límites de la Versión 1 (coordinación directa vía WhatsApp, sin pasarelas de pago online ni backend remoto) y mantener la vinculación viva de directivas en `GEMINI.md`.
- **Consecuencias**: Base de conocimiento 100% alineada entre el marco académico y el código fuente. Queda establecido el estándar de ejecución para las siguientes fases de desarrollo.

---

### [ADR-009] · [2026-10-19 00:02] Auditoría y Poda Contextualizada de Skills
- **Contexto**: Se requería optimizar la biblioteca de skills en `.agents/skills/` evaluando el Master Context (`docs/contexto/`) para retener únicamente aquellas herramientas que potencien el stack (React 18, TypeScript, TailwindCSS v3, Zustand, A11y, DoD 4 Estados) y eliminar las superfluas o incompatibles.
- **Decisión**: Conservar 29 skills de ingeniería frontend, accesibilidad y SDD, y podar:
  1. `spec-to-code-compliance`: Orientada a auditorías de smart contracts y protocolos blockchain (fuera del dominio de Feria Imperio).
  2. `tailwind-patterns`: Orientada a Tailwind CSS v4 (`@theme`), incompatible con la configuración de TailwindCSS v3 del proyecto.
- **Consecuencias**: Conjunto de skills 100% afinado al proyecto, sin riesgo de alucinaciones sintácticas de Tailwind v4 ni reglas ajenas al ecosistema ferial.

---

### [ADR-010] · [2026-10-22 15:40] Integración del Logotipo Oficial y Favicon del Navegador
- **Contexto**: Se requería incorporar el logotipo oficial de Feria Imperio (isologo con monograma "R", gazebo con toldo multicolor, leyenda "Feria Imperio" y ondas alusivas al río y espacio verde) en la interfaz del portal y como favicon en la pestaña del navegador.
- **Decisión**: 
  1. Alojar el recurso gráfico en `public/logo.png` y `public/favicon.png` para entrega estática nativa en Vite.
  2. Actualizar `index.html` vinculando el favicon con `<link rel="icon" type="image/png" href="/logo.png" />`.
  3. Reemplazar el icono genérico en `NavBar.tsx`, `Footer.tsx` y `LoginModal.tsx` con el logo enmarcado en un contenedor con borde y contraste apto tanto para Modo Claro como Modo Oscuro.
  4. Limpiar dependencias e importaciones sin uso (DoD: compilación TypeScript estricta aprobada sin advertencias).
- **Consecuencias**: Identidad visual unificada, profesional y consistente en todas las vistas y en la pestaña del navegador.

---

### [ADR-011] · [2026-10-23 11:50] Incorporación de Políticas de Privacidad en Footer y Modal Accesible
- **Contexto**: Se solicitó incorporar "Políticas de Privacidad" como un nuevo ítem debajo de los existentes en la sección de navegación del pie de página.
- **Decisión**: Agregar el ítem `Políticas de Privacidad` en la lista de enlaces de `Footer.tsx` y conectar un modal interactivo y accesible (`PrivacyModal.tsx`) que detalla el marco legal (Ley 25.326 de la República Argentina), la privacidad de datos feriales, el almacenamiento local sin rastreadores invasivos y el trato directo productor-consumidor.
- **Consecuencias**: Cumplimiento ético y legal, transparencia institucional hacia feriantes y visitantes, y navegación unificada sin alterar rutas existentes.

---

### [ADR-012] · [2026-10-23 12:08] Actualización de Copyright y Redes Sociales SVG en Barra Inferior del Footer
- **Contexto**: Se requería actualizar la firma legal a `Copyright © -2026- Vertex Solutions S.A.S.`, remover el bloque "Hecho con amor" y reemplazarlo en el extremo derecho por iconos vectoriales SVG de redes sociales (Facebook, Instagram y YouTube).
- **Decisión**: En `Footer.tsx`, se actualizó el texto de copyright, se eliminó la dependencia de `Heart` y se implementaron botones de enlace con SVGs inline nativos optimizados, accesibles (`aria-label`) y con estilos consistentes a los tokens de tema claro/oscuro.
- **Consecuencias**: Código limpio sin assets externos pesados, estética institucional profesional y compatibilidad visual en todos los dispositivos.

---

### [ADR-013] · [2026-10-23 12:16] Creación de Columna Exclusiva "Guías" en Footer con Modal Integrado
- **Contexto**: Para mejorar la jerarquía de contenidos y no saturar la columna de Navegación, se solicitó independizar las guías en su propia sección dedicada dentro del pie de página.
- **Decisión**: Reestructurar el grid del footer a 4 columnas responsivas (`sm:grid-cols-2 lg:grid-cols-4`), crear la columna independiente `Guías` con accesos a `Guía de Usuario` y `Guía de Feriante`, y preservar en `Navegación` únicamente los enlaces estructurales y de privacidad. Ambas guías abren el componente interactivo [`GuidesModal.tsx`](file:///c:/iTec/programacion_2/EFI/src/components/common/GuidesModal.tsx) sincronizando automáticamente la pestaña correspondiente.
- **Consecuencias**: Mayor legibilidad, distribución visual equilibrada y navegación intuitiva en dispositivos móviles, tablets y monitores.

---

### [ADR-014] · [2026-10-23 12:35] Autenticación Dual (Comprador / Feriante) y Centralización de Barra de Búsqueda
- **Contexto**: Los visitantes y vecinos de Río Cuarto necesitaban identificarse como usuarios compradores para personalizar sus listas de compras, consultas y experiencia ferial, además de requerir una barra y botón de búsqueda centralizados y destacados en la barra de navegación.
- **Decisión**:
  1. Extender `useAuthStore` y los tipos (`UsuarioComprador`, `RolUsuario`) admitiendo rol dual (`feriante` | `comprador`) con persistencia en `localStorage`.
  2. Rediseñar `LoginModal` incorporando pestañas adaptativas `[Soy Comprador]` (Portal Vecinos) y `[Soy Feriante]` (Acceso Ferial), con soporte de perfiles demo en 1 click para ambos roles y los 4 estados de UI.
  3. Rediseñar `NavBar` estructurando el header con la barra de búsqueda y botón "Buscar" situados en el centro geométrico de la pantalla (Desktop y Mobile).
  4. Agregar menú desplegable específico para compradores (`Mi Lista de Compras`, `Explorar Puestos`, `Cerrar Sesión`) y personalizar el mensaje de WhatsApp del carrito con el nombre del comprador conectado.
- **Consecuencias**: Experiencia de usuario inmersiva para toda la comunidad ferial (vecinos y puesteros), navegación más simétrica y clara, y control de acceso contextual sin fricción.

---

### [ADR-015] · [2026-10-23 13:05] Integración de Identidad Visual (Logo Oficial) en Barra de Navegación, Título Principal y Pestaña Web
- **Contexto**: Se requería unificar la identidad gráfica sustituyendo los iconos genéricos por el logo oficial de Feria Imperio tanto en la cabecera (junto al buscador) como en el banner principal (hero) y el pie de página, además de actualizar el lema principal eliminando la frase "disponible 24/7".
- **Decisión**:
  1. Incorporar el asset `logo.png` en `public/` y referenciarlo como favicon principal y `apple-touch-icon` en `index.html`.
  2. Sustituir el icono genérico de tienda en `NavBar.tsx` por el isotipo oficial en contenedor responsivo estilizado.
  3. En `HeroBanner.tsx`, integrar el logo emblemático sobre el título principal y ajustar el título de cabecera a *"El corazón de las ferias de Río Cuarto"* con énfasis tipográfico en terracota, suprimiendo *"disponible 24/7"*.
  4. Sincronizar la marca en la columna principal de `Footer.tsx` para mantener total coherencia de diseño.
- **Consecuencias**: Identidad visual corporativa cohesiva, mayor reconocimiento de marca en el portal web y reducción de ruido textual en la propuesta de valor ferial.
