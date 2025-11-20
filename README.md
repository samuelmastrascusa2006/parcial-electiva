#  Parcial Calidad de Software Avanzado

Proyecto de ejemplo para el parcial de Calidad de Software Avanzado implementando un pipeline CI/CD completo con GitHub Actions.
##  Descripción

Este proyecto demuestra la implementación de un pipeline de CI/CD que incluye:
-  Linter (ESLint)
-  Pruebas unitarias (Jest)
-  Reporte de cobertura (85% mínimo)
-  Build del proyecto
-  Ejecución local con nektos/act

##  Tecnologías Utilizadas

- **JavaScript** (Node.js)
- **ESLint** - Linter para análisis estático de código
- **Jest** - Framework de pruebas y cobertura
- **GitHub Actions** - CI/CD pipeline
- **nektos/act** - Ejecución local de GitHub Actions

##  Estructura del Proyecto

Métodos para Detectar Código Generado por IA
1. Análisis de Patrones de Estilo y Estructura
Descripción: Examinar características estilísticas del código

Herramientas: OpenAI Detector, GPTZero, Originality.ai

Indicadores:

Estructura excesivamente consistente

Comentarios genéricos o demasiado formales

Falta de idiosincrasias personales de codificación

Patrones de naming convention artificiales

Limitaciones: Desarrolladores consistentes pueden generar falsos positivos

2. Análisis de Metadata y Patrones de Comportamiento
Descripción: Examinar cómo se escribió el código, no solo el resultado

Herramientas: Análisis de commits, timestamps, patrones de edición

Indicadores:

Commits masivos sin iteración intermedia

Velocidad de escritura humana imposible

Falta de commits de "refactorización" o "debugging"

Patrón temporal no natural

Limitaciones: No aplica para código escrito fuera del VCS

Por qué no es posible asegurar al 100% la autoría
1. Problema de Falsos Positivos
Código limpio y bien estructurado puede ser detectado como IA

Desarrolladores novatos que siguen best practices pueden ser confundidos con IA

Estilos de coding consistentes son penalizados

2. Problema de Falsos Negativos
IA puede ser entrenada para imitar estilos humanos específicos

Fine-tuning con código personal puede eludir detectores

Edición manual mínima puede hacer indetectable el código generado

3. Carrera Armamentística Tecnológica
Los detectores siempre van detrás de los generadores

Nuevos modelos superan constantemente las capacidades de detección

Técnicas de evolución hacen la detección cada vez más difícil

4. Contexto Desconocido
No se puede distinguir entre "ayuda de IA" y "generación completa"

Línea borrosa entre investigación y copia

Aprendizaje legítimo vs. generación automática

Políticas Razonables de Uso de IA en Educación
 Política Propuesta: "Uso Transparente y Asistido"
1. Principio de Transparencia Total
 Declaración Obligatoria:

Documentar todas las herramientas de IA utilizadas

Especificar prompts y nivel de asistencia recibida

Describir contribuciones humanas vs. generadas
 Registro de Proceso:

Mantener historial de iteraciones con IA

Documentar problemas encontrados y soluciones

Explicar el razonamiento detrás del código final

2. Uso como Asistente, No como Solucionador
 Permitido:

Debugging asistido ("¿por qué falla este código?")

Explicaciones de conceptos y best practices

Sugerencias de refactorización

Ayuda con configuraciones complejas

 Prohibido:

Generación de código central del proyecto

Solución completa de ejercicios asignados

Escritura de pruebas unitarias sin comprensión

Sustitución del proceso de aprendizaje

3. Evaluación Adaptada y Centrada en Comprensión
 Defensas Orales:

Explicar línea por línea el código escrito

Responder preguntas sobre decisiones de implementación

Demostrar comprensión de conceptos subyacentes

 Ejercicios Controlados:

Sesiones de coding en entornos supervisados

Problemas que requieren adaptación creativa

Proyectos que integren múltiples conceptos

4. Educación sobre Limitaciones y Riesgos
 Concienciación:

Enseñar limitaciones actuales de la IA en programación

Mostrar ejemplos de errores en código generado

Discutir implicaciones éticas y profesionales

 Fomento del Pensamiento Crítico:

Análisis crítico de sugerencias de IA

Evaluación de calidad y seguridad del código generado

Desarrollo de criterio técnico independiente

5. Enfoque por Niveles y Contexto
 Nivel Introductorio:

Restricciones más estrictas

Enfoque en fundamentos y sintaxis

Evaluación principalmente en entornos controlados

nivel Avanzado:

Uso más permisivo como herramienta de productividad

Enfoque en arquitectura y diseño

Evaluación basada en resultados y comprensión

Contexto Profesional:

Enfoque en uso efectivo y responsable

Énfasis en productividad y calidad

Responsabilidad sobre el código entregado
