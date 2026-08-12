import type { BlogPost } from '../types';

export const blogPostsEs: BlogPost[] = [
  {
    slug: 'building-saas-with-nextjs',
    title: 'Construir un MVP SaaS con Next.js y Supabase',
    description:
      'Guía práctica para crear un MVP SaaS listo para producción con Next.js App Router y Supabase para autenticación y datos.',
    date: '2024-01-15',
    author: 'Bambi20',
    tags: ['Next.js', 'Supabase', 'SaaS'],
    featured: true,
    content: `
## Introducción

Si estás empezando un producto SaaS, lo más difícil no es elegir herramientas. Es lanzar algo lo bastante pequeño para probarlo con usuarios reales. Este es el stack que uso con más frecuencia: **Next.js 14** con App Router y **Supabase** para auth y datos.

## ¿Por qué Next.js + Supabase?

- **Next.js** te da server components, API routes y una buena experiencia de desarrollo.
- **Supabase** te da Postgres, auth y funciones en tiempo real sin montar un backend completo desde cero.

## Primeros pasos

1. Crea una app Next.js con \`create-next-app\`.
2. Añade Supabase y configura las variables de entorno.
3. Configura Supabase Auth con email/contraseña u OAuth.
4. Construye tu primera ruta protegida y un dashboard sencillo.

## Conclusiones clave

- Usa Server Components para obtener datos cuando tenga sentido.
- Protege rutas con middleware o comprobaciones en el servidor.
- Mantén la primera versión pequeña y lanza rápido.

*Pronto habrá más entradas.*
    `.trim(),
  },
  {
    slug: 'portfolio-seo-and-performance',
    title: 'SEO y rendimiento para tu portfolio de desarrollador',
    description:
      'Cómo hacer que tu portfolio sea rápido, accesible y fácil de encontrar en buscadores.',
    date: '2024-01-10',
    author: 'Bambi20',
    tags: ['SEO', 'Next.js', 'Rendimiento'],
    content: `
## Por qué importa

Tu portfolio suele ser lo primero que ve un cliente o un reclutador. Si el sitio va lento o cuesta encontrarlo en Google, pierdes atención antes de que lean tu trabajo.

## En qué me centro

- **Metadatos**: título, descripción, Open Graph y Twitter cards claros.
- **Datos estructurados**: JSON-LD para Person, WebSite y contenido FAQ.
- **Sitemap y robots.txt**: para que los buscadores puedan rastrear el sitio bien.
- **Imágenes**: \`Image\` de Next.js con tamaños razonables y lazy loading.

## Rendimiento

- Mantén poco JavaScript en el cliente con Server Components.
- Respeta \`prefers-reduced-motion\` por accesibilidad.
- Usa animaciones con moderación para que el sitio siga sintiéndose rápido.

*Pronto habrá más entradas.*
    `.trim(),
  },
  {
    slug: 'n8n-automation-for-leads-and-content',
    title: 'Automatización con n8n para leads, contenido y operaciones',
    description:
      'Cómo diseño flujos n8n que conectan APIs, modelos de IA, Google Sheets y Gmail para cualificar leads y operaciones de contenido.',
    date: '2026-07-16',
    author: 'Bambi20',
    tags: ['n8n', 'Automatización', 'IA'],
    featured: true,
    content: `
## Por qué importa la automatización

El seguimiento manual de leads y el trabajo repetitivo de contenido frenan a los equipos. Con **n8n** puedes conectar APIs, modelos de IA, hojas de cálculo y email en flujos que se ejecutan bajo demanda o con programación.

## Tres patrones de flujo que uso

1. **Ingesta por API**: dispara un flujo, obtiene datos externos, transforma campos y pasa el resultado al siguiente paso.
2. **Operaciones de contenido**: ejecuta pipelines programados que preparan contenido, actualizan Google Sheets y envían avisos.
3. **Cualificación de leads con IA**: ramifica según condiciones, puntúa leads con un LLM como Groq, registra resultados y avisa por Gmail.

## Consejos de implementación

- Cada nodo debe hacer una sola cosa: obtener, transformar, decidir o notificar.
- Usa etiquetas claras en las ramas para que los caminos true/false sean fáciles de mantener.
- Registra resultados importantes en Sheets o en una base de datos antes de enviar emails.
- Empieza con un trigger manual y pasa a programación cuando el flujo esté probado.

## Conclusiones clave

- La automatización funciona mejor cuando quita trabajo repetitivo sin ocultar fallos.
- La IA encaja en medio del flujo: después de datos limpios, antes de almacenar y avisar.
- Lanza flujos pequeños y observables primero, luego amplía.

*¿Necesitas algo similar para tu equipo? Usa el formulario de contacto y envía un brief corto.*
    `.trim(),
  },
];
