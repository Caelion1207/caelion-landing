# CAELION Website - TODO

## Base de Datos
- [x] Crear esquema para artículos por categoría
- [x] Implementar tabla de comentarios/preguntas
- [x] Crear sistema de puntuación de calidad de preguntas
- [x] Implementar historial de interacciones del bot
- [x] Aplicar migraciones a la base de datos

## Navegación y Estructura
- [ ] Crear componente de navegación principal con enlaces a las 6 categorías (Filosofía, Biología, Matemáticas, Sistemas, Flujo Creativo, Literatura)
- [ ] Actualizar App.tsx con rutas para todas las páginas
- [ ] Implementar diseño responsive para navegación

## Página de Inicio (Nueva Implementación con Principios de Diseño)
- [x] Copiar las 6 imágenes generadas al directorio public del proyecto
- [x] Implementar Hero Section con imagen de cerebro transformándose en arquitectura
- [x] Implementar sección "El Problema Reconocido" con red neuronal colapsando
- [x] Implementar sección "Las 6 Dimensiones Convergentes" con grid horizontal e imágenes específicas por tema
- [x] Implementar sección "La Evidencia Empírica" (11 nov 2025, 5 LLMs)
- [x] Implementar sección "Bot HECATE-ARESK" con imagen de entidad fusionada
- [x] Implementar Footer con silueta contemplando cosmos y arquitectura CAELION
- [x] Aplicar paleta de colores (dos tonos: ámbar #d4a574 + azul neón #00d4ff)
- [x] Ajustar overlays más oscuros en tarjetas de dimensiones
- [x] Aumentar intensidad de efectos glow
- [x] Mejorar spacing dramático entre secciones
- [ ] Validar que cada elemento cumple: forma + pensamiento = encuentro

## Páginas de Categorías (Diseño de Revista Elevada)
- [ ] Crear página de Filosofía con grid de artículos
- [ ] Crear página de Biología con grid de artículos
- [ ] Crear página de Matemáticas con grid de artículos
- [ ] Crear página de Sistemas con grid de artículos
- [ ] Crear página de Flujo Creativo con grid de artículos
- [ ] Crear página de Literatura con grid de artículos
- [ ] Implementar componente reutilizable CategoryPage

## Sistema de Artículos
- [ ] Crear página de artículo individual con contenido rico
- [ ] Implementar componente de lectura con tipografía optimizada
- [ ] Añadir sistema de navegación entre artículos relacionados
- [ ] Implementar breadcrumbs (Inicio > Categoría > Artículo)

## Bot Simbiótico (Primer Bot Simbiótico del Mundo)
- [ ] Crear componente de interfaz de chat flotante
- [ ] Implementar endpoint API para procesar preguntas
- [ ] Desarrollar lógica de filtrado HECATE (detectar intención y coherencia)
- [ ] Integrar con API de LLM para generar respuestas
- [ ] Sistema de puntuación de calidad de preguntas (0-10)
- [ ] Sistema de rechazo automático de comentarios sin propósito
- [ ] Guardar todas las interacciones en base de datos
- [ ] Implementar respuestas contextuales basadas en la categoría actual

## Contenido Inicial
- [ ] Seed de las 6 categorías en base de datos
- [ ] Crear 3 artículos de ejemplo para Filosofía (extraídos de fundamentos)
- [ ] Crear 3 artículos de ejemplo para Biología (arquitectura simbiótica)
- [ ] Crear 3 artículos de ejemplo para Matemáticas (estructuras formales)
- [ ] Crear 3 artículos de ejemplo para Sistemas (protocolos operativos)
- [ ] Crear 3 artículos de ejemplo para Flujo Creativo (manifestaciones)
- [ ] Crear 3 artículos de ejemplo para Literatura (Código del Exiliado, Memorias)
- [ ] Implementar sistema de tags para referencias cruzadas

## Diseño Visual
- [ ] Implementar paleta de colores de CAELION (oscuro, dorado, fuego)
- [ ] Crear tipografía de revista (serif para títulos, sans-serif para cuerpo)
- [ ] Añadir efectos de hover y transiciones elegantes
- [ ] Implementar imágenes de categorías generadas con IA

## Investigación Académica
- [ ] Investigar sitios científicos relevantes para publicación de CAELION
- [ ] Analizar estándares de presentación de trabajos académicos en IA
- [ ] Documentar requisitos de formato y estructura para publicaciones
- [ ] Crear lista de journals y conferencias objetivo

## Efectos Visuales Avanzados
- [x] Implementar scroll parallax en imagen de fondo del hero
- [x] Implementar scroll parallax en imagen de fondo del footer
- [x] Crear hook useParallax para manejar el efecto de scroll

## Optimización Móvil
- [x] Ajustar tamaños de fuente responsivos (hero text-9xl → text-5xl en móvil)
- [x] Reducir intensidad del parallax en dispositivos táctiles (50% de velocidad)
- [x] Ajustar spacing vertical para móviles (py-40 → py-20 md:py-32 lg:py-40)
- [x] Verificar que todas las secciones sean legibles en pantallas pequeñas

## Animaciones de Entrada
- [x] Crear hook useInView con Intersection Observer
- [x] Definir clases CSS para animaciones fade-in y slide-up
- [x] Aplicar animaciones a tarjetas de las 6 dimensiones (delays escalonados 100-600ms)
- [x] Aplicar animaciones a textos clave (problema, evidencia, bot)
- [x] Ajustar delays escalonados para efecto cascada
