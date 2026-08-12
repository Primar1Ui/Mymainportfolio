import type { BlogPost } from '../types';

export const blogPostsFr: BlogPost[] = [
  {
    slug: 'building-saas-with-nextjs',
    title: 'Construire un MVP SaaS avec Next.js et Supabase',
    description:
      'Guide pratique pour créer un MVP SaaS prêt pour la production avec Next.js App Router et Supabase pour l authentification et les données.',
    date: '2024-01-15',
    author: 'Bambi20',
    tags: ['Next.js', 'Supabase', 'SaaS'],
    featured: true,
    content: `
## Introduction

Si vous lancez un produit SaaS, le plus dur n est pas de choisir les outils. C est de livrer quelque chose assez petit pour le tester avec de vrais utilisateurs. Voici la stack que j utilise le plus souvent: **Next.js 14** avec App Router et **Supabase** pour l authentification et les données.

## Pourquoi Next.js + Supabase?

- **Next.js** offre les server components, les routes API et une bonne expérience de développement.
- **Supabase** apporte Postgres, l authentification et du temps réel sans monter un backend complet from scratch.

## Pour commencer

1. Créez une app Next.js avec \`create-next-app\`.
2. Ajoutez Supabase et configurez vos variables d environnement.
3. Configurez Supabase Auth avec email/mot de passe ou OAuth.
4. Construisez votre première route protégée et un tableau de bord simple.

## Points clés

- Utilisez les Server Components pour récupérer les données quand c est pertinent.
- Protégez les routes avec le middleware ou des vérifications côté serveur.
- Gardez la version 1 petite et livrez vite.

*D autres articles arrivent bientôt.*
    `.trim(),
  },
  {
    slug: 'portfolio-seo-and-performance',
    title: 'SEO et performance pour un portfolio développeur',
    description:
      'Comment rendre votre portfolio rapide, accessible et visible dans les moteurs de recherche.',
    date: '2024-01-10',
    author: 'Bambi20',
    tags: ['SEO', 'Next.js', 'Performance'],
    content: `
## Pourquoi c est important

Votre portfolio est souvent la première chose qu un client ou un recruteur voit. Si le site est lent ou difficile à trouver sur Google, vous perdez l attention avant qu on lise votre travail.

## Ce sur quoi je me concentre

- **Métadonnées**: titre, description, Open Graph et Twitter cards clairs.
- **Données structurées**: JSON-LD pour Person, WebSite et contenu FAQ.
- **Sitemap et robots.txt**: pour que les moteurs puissent crawler le site correctement.
- **Images**: composant \`Image\` de Next.js avec des tailles raisonnables et lazy loading.

## Performance

- Limitez le JavaScript côté client avec les Server Components.
- Respectez \`prefers-reduced-motion\` pour l accessibilité.
- Utilisez les animations avec parcimonie pour que le site reste rapide.

*D autres articles arrivent bientôt.*
    `.trim(),
  },
  {
    slug: 'n8n-automation-for-leads-and-content',
    title: 'Automatisation n8n pour leads, contenu et opérations',
    description:
      'Comment je conçois des workflows n8n qui connectent APIs, modèles IA, Google Sheets et Gmail pour la qualification de leads et les opérations de contenu.',
    date: '2026-07-16',
    author: 'Bambi20',
    tags: ['n8n', 'Automatisation', 'IA'],
    featured: true,
    content: `
## Pourquoi l automatisation compte

Le suivi manuel des leads et le travail répétitif sur le contenu ralentissent les équipes. Avec **n8n**, vous connectez APIs, modèles IA, feuilles de calcul et email dans des workflows à la demande ou planifiés.

## Trois modèles de workflow que j utilise

1. **Ingestion API**: déclencher un flux, récupérer des données externes, reformater les champs et passer au nœud suivant.
2. **Opérations de contenu**: pipelines planifiés qui préparent le contenu, mettent à jour Google Sheets et envoient des notifications.
3. **Qualification de leads par IA**: branchement sur conditions, scoring avec un LLM comme Groq, journalisation et alerte Gmail.

## Conseils d implémentation

- Chaque nœud doit avoir un rôle: récupérer, transformer, décider ou notifier.
- Utilisez des libellés de branche clairs pour maintenir les chemins true/false.
- Journalisez les résultats importants dans Sheets ou une base avant d envoyer des emails.
- Commencez avec un déclencheur manuel, puis planifiez les flux validés.

## Points clés

- L automatisation fonctionne mieux quand elle enlève le travail répétitif sans masquer les échecs.
- L IA se place au milieu du flux: après des entrées propres, avant stockage et alertes.
- Livrez d abord de petits flux observables, puis étendez.

*Besoin d un système similaire pour votre équipe? Utilisez le formulaire de contact et envoyez un brief court.*
    `.trim(),
  },
];
