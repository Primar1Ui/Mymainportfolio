import type { Automation } from '../types';

export const automationsFr: Automation[] = [
  {
    id: 'ai-appointment-booking',
    title: 'Assistant de prise de rendez-vous IA',
    description:
      'Réception Gmail, analyse Groq LLM, enregistrements Airtable, vérif de dispo Google Calendar et confirmations conditionnelles.',
    image: '/images/automation-ai-appointment-booking.png',
    alt: 'Workflow n8n de réservation IA: Gmail, Groq LLM, Airtable et Google Calendar',
    tags: ['n8n', 'Groq LLM', 'Google Calendar'],
  },
  {
    id: 'ai-customer-support',
    title: 'Automatisation support client IA',
    description:
      'Flux support déclenché par Gmail avec classification Groq, tickets Airtable, réponses IA conditionnelles et emails de suivi automatiques.',
    image: '/images/automation-ai-customer-support.png',
    alt: 'Workflow n8n support IA: Gmail, Groq LLM, Airtable et branches de réponse',
    tags: ['n8n', 'Groq LLM', 'Airtable + Gmail'],
  },
  {
    id: 'camjroberts-reminder',
    title: 'Rappel CamJRoberts',
    description:
      'Workflow n8n planifié qui lit Google Sheets, filtre les échéances, exécute du JavaScript et envoie des rappels Gmail.',
    image: '/images/automation-camjroberts-reminder.png',
    alt: 'Workflow n8n CamJRoberts: planification, Google Sheets, filtre et Gmail',
    tags: ['n8n', 'Google Sheets', 'Gmail'],
  },
  {
    id: 'n8n-api-automation',
    title: 'Automatisation API n8n',
    description:
      'Connecte des APIs externes, reformate les données entrantes et fait circuler les résultats dans des workflows low-code fiables.',
    image: '/images/automation-n8n-api.png',
    alt: 'Workflow n8n avec trigger manuel, requête HTTP et éditeur de champs',
    tags: ['n8n', 'Intégration API', 'Mapping données'],
  },
  {
    id: 'content-operations',
    title: 'Opérations de contenu automatisées',
    description:
      'Planifie des pipelines multi-étapes qui préparent le contenu, mettent à jour des feuilles et coordonnent les envois.',
    image: '/images/automation-content-pipeline.png',
    alt: 'Workflow n8n contenu avec planification, Google Sheets et Gmail',
    tags: ['Planification', 'Google Sheets', 'Gmail'],
  },
  {
    id: 'ai-lead-qualification',
    title: 'Qualification de leads IA',
    description:
      'Route les leads via qualification IA, normalise les résultats, les enregistre et alerte la bonne équipe.',
    image: '/images/automation-lead-qualification.png',
    alt: 'Workflow n8n qualification leads avec LLM, branches, Sheets et Gmail',
    tags: ['Agents IA', 'Scoring leads', 'Notifications'],
  },
  {
    id: 'ai-inventory-restock',
    title: 'Inventaire IA et réappro auto',
    description:
      'Système n8n planifié qui analyse l inventaire, met à jour Airtable et déclenche des emails de réapprovisionnement.',
    image: '/images/automation-inventory-restock.png',
    alt: 'Workflow n8n inventaire et réappro avec Airtable et Gmail',
    tags: ['n8n', 'Airtable', 'Analyse IA'],
  },
  {
    id: 'ai-recruiting-funnel',
    title: 'Entonnoir recrutement IA',
    description:
      'Pipeline candidats qui score les postulants, alerte l équipe via Slack et email, et planifie les entretiens.',
    image: '/images/automation-recruiting-funnel.png',
    alt: 'Workflow n8n recrutement avec scoring, Slack, Gmail et planification',
    tags: ['n8n', 'Scoring IA', 'Slack + Gmail'],
  },
  {
    id: 'groq-content-routing',
    title: 'Routage contenu avec Groq',
    description:
      'Flux n8n ramifié avec chaînes Groq LLM, formatage, fusion de chemins et journalisation dans Google Sheets.',
    image: '/images/automation-groq-content-routing.png',
    alt: 'Workflow n8n avec modèles Groq, chaînes LLM, branches et Google Sheets',
    tags: ['n8n', 'Groq LLM', 'Branchement'],
  },
  {
    id: 'zapier-rsvp-paths',
    title: 'Système RSVP Zapier',
    description:
      'Système Zapier qui cherche des enregistrements, divise en chemins conditionnels et crée des lignes ou envoie des rappels RSVP.',
    image: '/images/automation-zapier-rsvp-paths.png',
    alt: 'Système RSVP Zapier avec Airtable, chemins et rappels Slack',
    tags: ['Zapier', 'Airtable', 'Chemins'],
  },
  {
    id: 'zapier-rsvp-slack',
    title: 'Alertes RSVP Slack (Zapier)',
    description:
      'Les inscriptions événement arrivent directement dans un canal Slack avec les détails participant formatés pour l équipe.',
    image: '/images/automation-rsvp-slack.png',
    alt: 'Canal Slack recevant des alertes d inscription via Zapier',
    tags: ['Zapier', 'Slack', 'Notifications'],
  },
  {
    id: 'zapier-forms-sheets',
    title: 'Sync formulaire vers feuille (Zapier)',
    description:
      'Les réponses Google Forms sont recherchées et écrites dans Google Sheets sans saisie manuelle.',
    image: '/images/automation-zapier-forms-sheets.png',
    alt: 'Workflow Zapier synchronisant Google Forms vers Google Sheets',
    tags: ['Zapier', 'Google Forms', 'Google Sheets'],
  },
];
