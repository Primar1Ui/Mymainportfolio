import type { CaseStudy } from '../types';

export const caseStudiesFr: CaseStudy[] = [
  {
    id: 'smart-spend-dashboard',
    title: 'Tableau de bord dépenses et budget',
    problem:
      'Le client avait besoin d un moyen simple de suivre les dépenses et l avancement du budget sans jongler avec des feuilles de calcul ou une app financière lourde.',
    solution:
      'J ai construit un tableau de bord React et Next.js avec Supabase pour les données. Les utilisateurs enregistrent des dépenses, les regroupent par catégorie et voient les totaux de budget se mettre à jour en temps réel sur desktop et mobile.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Supabase'],
    results:
      'Le client dispose d un suivi privé des dépenses utilisable au quotidien. L app charge vite, fonctionne sur mobile et est déployée sur Vercel pour des mises à jour simples.',
    metrics: [
      'Déploiement en production sur Vercel',
      'Vues dépenses et budget en temps réel',
      'Mise en page du tableau de bord adaptée au mobile',
    ],
    github: 'https://github.com/Primar1Ui/smart-spend-dashboard',
    live: 'https://smart-spend-dashboard.vercel.app/',
    featured: true,
  },
  {
    id: 'ai-customer-support-automation',
    title: 'Automatisation du support client par IA',
    problem:
      'Les emails de support s accumulaient. L équipe devait classer, enregistrer et répondre plus vite aux messages entrants, sans copier les mêmes réponses toute la journée.',
    solution:
      'J ai construit un workflow n8n déclenché par Gmail. Groq classe chaque message, Airtable stocke le ticket et le flux envoie la bonne réponse ou signale les cas nécessitant un humain. Les erreurs sont journalisées pour qu aucun message ne se perde.',
    techStack: ['n8n', 'Groq LLM', 'Gmail', 'Airtable', 'Supabase'],
    results:
      'La réception du support est automatisée. Les questions courantes sont traitées rapidement, les tickets restent organisés et l équipe passe moins de temps sur des emails répétitifs.',
    metrics: [
      'Workflow déclenché par Gmail avec branchements',
      'Classification IA et stockage structuré des tickets',
      'Réponses automatiques avec passage à un humain',
    ],
    featured: true,
  },
  {
    id: 'baxauto-website',
    title: 'Site marketing BaxAuto',
    client: 'BaxAuto',
    problem:
      'BaxAuto avait besoin d un site marketing clair qui présente ses services et fonctionne bien sur mobile.',
    solution:
      'J ai conçu et construit une landing Next.js avec Tailwind CSS. La mise en page met l accent sur les services, des temps de chargement rapides et un SEO de base pour faciliter la découverte et la lecture.',
    techStack: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    results:
      'BaxAuto a lancé un site professionnel aligné sur sa marque, avec de bonnes performances mobile. Vitesse et structure faisaient partie du projet dès le départ.',
    metrics: [
      'Mise en page responsive sur toutes les tailles d écran',
      'Structure de pages favorable au SEO',
      'Livraison statique rapide via Vercel',
    ],
    github: 'https://github.com/Primar1Ui/v0-baxauto-website-development',
    live: 'https://v0-baxauto-website-development-qyak.vercel.app/',
    featured: false,
  },
];
