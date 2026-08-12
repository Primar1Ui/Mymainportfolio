import type { Automation } from '../types';

export const automationsEs: Automation[] = [
  {
    id: 'ai-appointment-booking',
    title: 'Asistente de reservas con IA',
    description:
      'Entrada por Gmail, análisis con Groq LLM, registros en Airtable, comprobación de disponibilidad en Google Calendar y confirmaciones condicionales.',
    image: '/images/automation-ai-appointment-booking.png',
    alt: 'Flujo n8n de reservas con IA: Gmail, Groq LLM, Airtable y Google Calendar',
    tags: ['n8n', 'Groq LLM', 'Google Calendar'],
  },
  {
    id: 'ai-customer-support',
    title: 'Automatización de soporte con IA',
    description:
      'Flujo de soporte disparado por Gmail con clasificación Groq, tickets en Airtable, respuestas IA condicionales y emails de seguimiento automáticos.',
    image: '/images/automation-ai-customer-support.png',
    alt: 'Flujo n8n de soporte con IA: Gmail, Groq LLM, Airtable y ramas de respuesta',
    tags: ['n8n', 'Groq LLM', 'Airtable + Gmail'],
  },
  {
    id: 'camjroberts-reminder',
    title: 'Recordatorio CamJRoberts',
    description:
      'Flujo n8n programado que lee filas de Google Sheets, filtra vencimientos, ejecuta lógica JavaScript y envía recordatorios por Gmail.',
    image: '/images/automation-camjroberts-reminder.png',
    alt: 'Flujo n8n CamJRoberts: programación, Google Sheets, filtro y Gmail',
    tags: ['n8n', 'Google Sheets', 'Gmail'],
  },
  {
    id: 'n8n-api-automation',
    title: 'Automatización API con n8n',
    description:
      'Conecta APIs externas, transforma datos entrantes y mueve resultados por flujos low-code fiables.',
    image: '/images/automation-n8n-api.png',
    alt: 'Flujo n8n con trigger manual, petición HTTP y editor de campos',
    tags: ['n8n', 'Integración API', 'Mapeo de datos'],
  },
  {
    id: 'content-operations',
    title: 'Operaciones de contenido automatizadas',
    description:
      'Programa pipelines de varios pasos que preparan contenido, actualizan hojas de cálculo y coordinan mensajes salientes.',
    image: '/images/automation-content-pipeline.png',
    alt: 'Flujo n8n de contenido con programación, Google Sheets y Gmail',
    tags: ['Programación', 'Google Sheets', 'Gmail'],
  },
  {
    id: 'ai-lead-qualification',
    title: 'Cualificación de leads con IA',
    description:
      'Enruta leads por cualificación asistida con IA, normaliza resultados, los guarda y avisa al equipo correcto.',
    image: '/images/automation-lead-qualification.png',
    alt: 'Flujo n8n de cualificación de leads con modelos de lenguaje, ramas, Sheets y Gmail',
    tags: ['Agentes IA', 'Scoring de leads', 'Notificaciones'],
  },
  {
    id: 'ai-inventory-restock',
    title: 'Inventario IA y reposición automática',
    description:
      'Sistema n8n programado que analiza inventario, actualiza Airtable y dispara emails de reposición automáticamente.',
    image: '/images/automation-inventory-restock.png',
    alt: 'Flujo n8n de inventario y reposición con Airtable y Gmail',
    tags: ['n8n', 'Airtable', 'Análisis IA'],
  },
  {
    id: 'ai-recruiting-funnel',
    title: 'Embudo de reclutamiento con IA',
    description:
      'Pipeline de candidatos que puntúa postulantes, avisa al equipo por Slack y email, y agenda entrevistas.',
    image: '/images/automation-recruiting-funnel.png',
    alt: 'Flujo n8n de reclutamiento con scoring, Slack, Gmail y programación',
    tags: ['n8n', 'Scoring IA', 'Slack + Gmail'],
  },
  {
    id: 'groq-content-routing',
    title: 'Enrutamiento de contenido con Groq',
    description:
      'Flujo n8n ramificado con cadenas Groq LLM, formateo de resultados, merge de rutas y registro en Google Sheets.',
    image: '/images/automation-groq-content-routing.png',
    alt: 'Flujo n8n con modelos Groq, cadenas LLM, ramas y Google Sheets',
    tags: ['n8n', 'Groq LLM', 'Ramificación'],
  },
  {
    id: 'zapier-rsvp-paths',
    title: 'Sistema RSVP con Zapier',
    description:
      'Sistema Zapier que busca registros, divide en rutas condicionales y crea registros o envía recordatorios por RSVP.',
    image: '/images/automation-zapier-rsvp-paths.png',
    alt: 'Sistema RSVP Zapier con Airtable, rutas y recordatorios Slack',
    tags: ['Zapier', 'Airtable', 'Rutas'],
  },
  {
    id: 'zapier-rsvp-slack',
    title: 'Alertas RSVP en Slack (Zapier)',
    description:
      'Las inscripciones a eventos llegan directo a un canal Slack con los datos del asistente formateados para el equipo.',
    image: '/images/automation-rsvp-slack.png',
    alt: 'Canal Slack recibiendo alertas de inscripción enviadas por Zapier',
    tags: ['Zapier', 'Slack', 'Notificaciones'],
  },
  {
    id: 'zapier-forms-sheets',
    title: 'Sync formulario a hoja (Zapier)',
    description:
      'Las respuestas de Google Forms se buscan y escriben en filas de Google Sheets sin entrada manual.',
    image: '/images/automation-zapier-forms-sheets.png',
    alt: 'Flujo Zapier sincronizando Google Forms con Google Sheets',
    tags: ['Zapier', 'Google Forms', 'Google Sheets'],
  },
];
