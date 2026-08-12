import type { CaseStudy } from '../types';

export const caseStudiesEs: CaseStudy[] = [
  {
    id: 'smart-spend-dashboard',
    title: 'Panel de gastos y presupuesto',
    problem:
      'El cliente necesitaba una forma sencilla de registrar gastos y ver el avance del presupuesto sin depender de hojas de cálculo ni de una app financiera pesada.',
    solution:
      'Construí un panel con React y Next.js y Supabase para los datos. Los usuarios registran gastos, los agrupan por categoría y ven totales de presupuesto actualizados en tiempo real en escritorio y móvil.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    results:
      'El cliente obtuvo un registro privado de gastos para el día a día. La app carga rápido, funciona en móvil y está desplegada en Vercel para actualizaciones sencillas.',
    metrics: [
      'Despliegue en producción en Vercel',
      'Vistas de gastos y presupuesto en tiempo real',
      'Diseño del panel adaptado a móvil',
    ],
    github: 'https://github.com/Primar1Ui/smart-spend-dashboard',
    live: 'https://smart-spend-dashboard.vercel.app/',
    featured: true,
  },
  {
    id: 'ai-customer-support-automation',
    title: 'Automatización de soporte al cliente con IA',
    problem:
      'Los emails de soporte se acumulaban. El equipo necesitaba clasificar, registrar y responder mensajes entrantes más rápido, sin copiar las mismas respuestas todo el día.',
    solution:
      'Construí un flujo n8n disparado por Gmail. Groq clasifica cada mensaje, Airtable guarda el ticket y el flujo envía la respuesta adecuada o marca casos que requieren una persona. Los errores se registran para que nada se pierda en silencio.',
    techStack: ['n8n', 'Groq LLM', 'Gmail', 'Airtable', 'Supabase'],
    results:
      'La recepción de soporte quedó automatizada. Las preguntas frecuentes se resuelven rápido, los tickets siguen organizados y el equipo dedica menos tiempo a email repetitivo.',
    metrics: [
      'Flujo disparado por Gmail con ramas condicionales',
      'Clasificación con IA y almacenamiento estructurado de tickets',
      'Respuestas automáticas con escalado a humano',
    ],
    featured: true,
  },
  {
    id: 'baxauto-website',
    title: 'Sitio web de marketing BaxAuto',
    client: 'BaxAuto',
    problem:
      'BaxAuto necesitaba un sitio de marketing claro que explicara sus servicios y funcionara bien en móvil.',
    solution:
      'Diseñé y construí una landing con Next.js y Tailwind CSS. El diseño prioriza secciones de servicios, tiempos de carga rápidos y SEO básico para que el sitio sea fácil de encontrar y leer.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    results:
      'BaxAuto lanzó un sitio profesional acorde a su marca y con buen rendimiento en móvil. Velocidad y estructura formaron parte del proyecto desde el inicio.',
    metrics: [
      'Diseño responsive en distintos tamaños de pantalla',
      'Estructura de páginas orientada a SEO',
      'Entrega estática rápida vía Vercel',
    ],
    github: 'https://github.com/Primar1Ui/v0-baxauto-website-development',
    live: 'https://v0-baxauto-website-development-qyak.vercel.app/',
    featured: false,
  },
];
