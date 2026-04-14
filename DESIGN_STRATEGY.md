# Estrategia de Diseño - Diagnóstico Lexis 2.0

## 🎨 Filosofía de Diseño: "Profesionalismo Dinámico"

El sitio Diagnóstico Lexis 2.0 se construye bajo una filosofía de **profesionalismo dinámico**, donde la confianza corporativa se equilibra con interactividad moderna y accesibilidad. El diseño debe transmitir que Lexis Intelligent es un referente en transformación digital para abogados, mientras mantiene una experiencia de usuario fluida y sin fricción.

---

## 🎯 Principios de Diseño

### 1. **Confianza a Través del Minimalismo Inteligente**
- Uso estratégico de espacios en blanco para reducir ruido visual
- Paleta de colores corporativa limitada pero impactante
- Tipografía clara con jerarquía visual definida
- Eliminación de elementos decorativos innecesarios

### 2. **Progresión Visual Clara**
- El usuario siempre sabe dónde está en el flujo (barra de progreso, indicadores)
- Transiciones suaves entre secciones que guían la atención
- Microcopy estratégico que reduce fricción

### 3. **Accesibilidad como Estándar**
- Contraste suficiente entre texto y fondo
- Navegación clara con opciones de retroceso
- Formularios intuitivos sin campos ocultos

---

## 🎨 Paleta de Colores

### Colores Primarios
- **Azul Corporativo Oscuro**: `#1e3c72` - Confianza, profesionalismo, solidez
- **Azul Corporativo Medio**: `#2a5298` - Profundidad, énfasis
- **Amarillo/Naranja Dinámico**: `#ffc107` / `#ff9800` - Acción, urgencia, optimismo

### Colores Secundarios
- **Gris Claro**: `#f8f9fa` - Fondos, espacios de respiro
- **Gris Medio**: `#e0e0e0` - Bordes, separadores
- **Gris Oscuro**: `#333` / `#666` - Texto principal y secundario

### Psicología del Color
- El azul transmite confianza y profesionalismo, esencial para servicios jurídicos
- El amarillo/naranja crea urgencia sin agresividad, perfecto para CTAs
- Los grises proporcionan neutralidad y sofisticación

---

## 📝 Sistema Tipográfico

### Fuentes Seleccionadas
- **Display/Títulos**: Segoe UI Bold (700) - Claridad corporativa
- **Cuerpo**: Segoe UI Regular (400) - Legibilidad óptima
- **Énfasis**: Segoe UI Semibold (600) - Jerarquía visual

### Escala Tipográfica
```
H1 (Hero):     48px desktop / 32px mobile - Impacto inicial
H2 (Secciones): 36px - Separación clara entre temas
H3 (Preguntas):  22px - Legibilidad en quiz
Body:           16px - Confort de lectura
Small:          14px - Etiquetas, metadata
```

### Jerarquía Visual
1. **Títulos Principales** (H1): Máximo contraste, tamaño mayor
2. **Subtítulos** (H2): Contraste alto, tamaño medio
3. **Preguntas** (H3): Contraste medio, tamaño pequeño
4. **Cuerpo de Texto**: Contraste estándar, tamaño legible
5. **Metadata**: Contraste bajo, tamaño pequeño

---

## 🎬 Animaciones y Transiciones

### Filosofía de Movimiento
Las animaciones deben servir un propósito: guiar la atención, proporcionar retroalimentación o mejorar la percepción de velocidad. Nunca deben distraer.

### Transiciones Clave
- **Cambio de Pregunta**: Fade in suave (300ms) - El usuario siente que avanza
- **Selección de Opción**: Highlight con border color (200ms) - Confirmación visual
- **Progreso**: Barra de progreso animada (500ms) - Sensación de avance
- **Resultado**: Entrada suave con escala (400ms) - Revelación del resultado

### Duraciones Estándar
- Micro-interacciones: 150-200ms
- Transiciones de sección: 300-400ms
- Animaciones de entrada: 400-500ms

---

## 🎯 Estructura de Secciones

### 1. **Header Sticky**
- Logo "Lexis Intelligent" con tagline
- Gradiente azul corporativo
- Sombra sutil para separación
- Altura: 70px

### 2. **Hero Section**
- Fondo: Gradiente azul (135deg: #1e3c72 → #2a5298)
- Contenido centrado con máximo 900px
- Badge de "Diagnóstico Gratuito" con borde amarillo
- Título provocador en blanco
- Subtítulo con propuesta de valor
- Padding: 80px vertical

### 3. **Quiz Section**
- Fondo blanco con sombra elevada
- Margen negativo (-60px top) para sobreposición con hero
- Barra de progreso visual
- Preguntas con opciones de selección clara
- Botones de navegación (Anterior/Siguiente)

### 4. **Results Section**
- Índice visual grande (72px)
- Barra de progreso del score
- Recomendaciones personalizadas
- Opción de enviar informe por email

### 5. **Value Section**
- Fondo blanco
- 3 tarjetas de valor con bordes izquierdos amarillos
- Vista previa del informe con métricas
- Padding: 80px vertical

### 6. **Social Proof**
- Fondo gris claro (#f8f9fa)
- 3 testimonios en grid responsivo
- Avatares con iniciales
- Especialidades jurídicas específicas

### 7. **CTA Final**
- Fondo: Gradiente azul (mismo que hero)
- Texto blanco
- Botón naranja prominente
- Padding: 60px vertical

### 8. **Footer**
- Fondo oscuro (#1a1a1a)
- Texto gris (#999)
- Información de copyright

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px
- **Desktop**: > 1024px

### Adaptaciones Principales
- **Tipografía**: Reduce 25% en mobile
- **Padding**: 40px en mobile, 80px en desktop
- **Grid**: 1 columna en mobile, 3 en desktop
- **Botones**: Full-width en mobile, inline en desktop

---

## ✨ Elementos Especiales

### Barra de Progreso
- Altura: 8px
- Fondo: Gris claro (#e0e0e0)
- Relleno: Gradiente naranja (#ffc107 → #ff9800)
- Animación: Suave transición de ancho

### Tarjetas de Opción
- Padding: 15px 20px
- Border: 2px solid #e0e0e0
- Hover: Borde azul, fondo azul claro
- Selected: Borde amarillo, fondo amarillo claro
- Transición: 300ms ease

### Botones
- **Primario**: Gradiente naranja, texto blanco, sombra al hover
- **Secundario**: Gris claro, texto oscuro, sin sombra
- **Hover**: Elevación (transform translateY -2px), sombra aumentada

---

## 🎨 Activos Visuales Necesarios

### Imágenes de Alto Impacto
1. **Hero Background** (opcional): Patrón abstracto o gradiente sutil
2. **Sección de Valor**: Iconografía o ilustraciones de proceso
3. **Testimonios**: Avatares con iniciales (generados automáticamente)

### Iconografía
- Utilizar Lucide React para iconos consistentes
- Tamaño: 20-24px para inline, 40-48px para destacados
- Color: Azul corporativo o amarillo según contexto

---

## 🚀 Optimizaciones de Rendimiento

### Carga Inicial
- Lazy loading de imágenes
- CSS crítico inline
- Minificación de JavaScript
- Compresión de assets

### Interactividad
- Debouncing en inputs
- Memoización de componentes
- Evitar re-renders innecesarios

---

## ♿ Accesibilidad

### Contraste
- Texto oscuro sobre fondo claro: Ratio 7:1
- Texto claro sobre fondo oscuro: Ratio 7:1
- Botones: Ratio mínimo 4.5:1

### Navegación
- Teclado completamente funcional
- Focus visible en todos los elementos interactivos
- Orden de tabulación lógico

### Semántica
- Uso correcto de etiquetas HTML (h1, h2, button, etc.)
- ARIA labels donde sea necesario
- Descripciones de imágenes

---

## 📊 Comparativa: Diseño Anterior vs. Nuevo

| Aspecto | Anterior | Nuevo |
|--------|----------|-------|
| **Tipografía** | Uniforme | Jerarquía clara |
| **Espaciado** | Compacto | Respiradero |
| **Animaciones** | Ninguna | Transiciones suaves |
| **Colores** | Básicos | Psicología aplicada |
| **Mobile** | No optimizado | Totalmente responsive |
| **Accesibilidad** | Básica | WCAG 2.1 AA |

---

## 🎯 Métricas de Éxito del Diseño

- **Tasa de Finalización del Quiz**: > 70%
- **Tiempo en Página**: 2-3 minutos
- **Bounce Rate**: < 30%
- **Mobile Engagement**: > 60% del total
- **Accesibilidad Score**: > 95 (Lighthouse)

---

**Documento preparado por:** Manus AI - Design Engineer
**Fecha:** Abril 14, 2026
**Versión:** 1.0
