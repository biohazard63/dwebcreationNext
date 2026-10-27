// Pages « site internet pour [métier] à [ville] » : contenu propre à chaque métier
export interface Metier {
  slug: string
  name: string
  plural: string
  headline: string
  intro: string
  examples: string
  needs: { title: string; text: string }[]
  features: string[]
  offerId: string
  demoId?: string
  faq: { question: string; answer: string }[]
}

export const metiers: Metier[] = [
  {
    slug: 'artisan-batiment',
    name: 'Artisan du bâtiment',
    plural: 'artisans du bâtiment',
    headline: 'Un site qui remplit votre carnet de chantiers.',
    intro:
      'Menuisiers, plombiers, électriciens, maçons, couvreurs : vos clients comparent plusieurs artisans avant d’appeler. Un site clair, avec vos réalisations et votre zone d’intervention, fait la différence.',
    examples: 'Menuisier, plombier, électricien, maçon, peintre, couvreur, paysagiste…',
    needs: [
      {
        title: 'Montrer vos réalisations',
        text: 'Des photos avant / après, classées par type de travaux, rassurent bien plus qu’un long discours.',
      },
      {
        title: 'Être trouvé dans votre secteur',
        text: 'Votre site est optimisé pour les recherches du type « plombier + votre ville » dans toute votre zone d’intervention.',
      },
      {
        title: 'Recevoir des demandes qualifiées',
        text: 'Un formulaire de devis qui pose les bonnes questions : type de travaux, adresse, délai, photos.',
      },
    ],
    features: ['Galerie de chantiers', 'Formulaire de devis détaillé', 'Zone d’intervention', 'Appel en un clic', 'Certifications et assurances'],
    offerId: 'site-vitrine',
    demoId: 'menuiserie',
    faq: [
      {
        question: 'Je suis souvent sur les chantiers, comment gérer les demandes ?',
        answer:
          'Les demandes arrivent par email avec toutes les informations utiles (travaux, adresse, délai). Vous les traitez quand vous avez un moment, sans rater d’appel.',
      },
      {
        question: 'Puis-je ajouter mes nouvelles réalisations moi-même ?',
        answer:
          'C’est possible selon la solution choisie, et je peux aussi m’en charger pour vous. On en parle lors du premier échange.',
      },
    ],
  },
  {
    slug: 'restaurant',
    name: 'Restaurant',
    plural: 'restaurants et cafés',
    headline: 'Donnez faim avant même d’ouvrir la porte.',
    intro:
      'Avant de choisir où manger, on regarde la carte, les photos et les horaires sur son téléphone. Votre site doit donner envie et permettre de réserver en quelques secondes.',
    examples: 'Restaurant, bistrot, brasserie, pizzeria, café, bar, traiteur…',
    needs: [
      {
        title: 'Une carte toujours à jour',
        text: 'Plats du jour, menus de saison, prix : une carte lisible sur mobile, facile à modifier.',
      },
      {
        title: 'La réservation en ligne',
        text: 'Vos clients réservent même quand vous êtes en plein service, sans téléphone qui sonne.',
      },
      {
        title: 'Une ambiance qui se ressent',
        text: 'Le design reflète votre lieu : chaleureux, chic, convivial… pour attirer la bonne clientèle.',
      },
    ],
    features: ['Carte en ligne', 'Réservation de table', 'Horaires et accès', 'Galerie photos', 'Lien vers vos avis Google'],
    offerId: 'reservation-boutique',
    demoId: 'restaurant',
    faq: [
      {
        question: 'Puis-je changer la carte moi-même ?',
        answer:
          'Oui, la carte peut être pensée pour être modifiée facilement. Je vous montre comment faire à la mise en ligne.',
      },
      {
        question: 'La réservation en ligne est-elle compliquée à gérer ?',
        answer:
          'Non : chaque demande vous est notifiée par email, et l’on choisit ensemble la solution la plus simple pour votre organisation.',
      },
    ],
  },
  {
    slug: 'commerce',
    name: 'Commerce de proximité',
    plural: 'commerces de proximité',
    headline: 'Votre boutique, ouverte aussi en ligne.',
    intro:
      'Fleuristes, boulangeries, épiceries fines, boutiques de déco : un site vous fait connaître dans le quartier et peut vous permettre de vendre ou de prendre des commandes en ligne.',
    examples: 'Fleuriste, boulangerie, épicerie, caviste, boutique de vêtements, librairie…',
    needs: [
      {
        title: 'Être trouvé dans le quartier',
        text: 'Horaires, adresse, plan d’accès et fiche Google bien renseignée : on vous trouve facilement.',
      },
      {
        title: 'Vendre ou réserver en ligne',
        text: 'Click & collect, livraison locale ou simple catalogue : selon vos besoins et votre organisation.',
      },
      {
        title: 'Mettre en avant vos produits',
        text: 'Nouveautés, produits de saison, coups de cœur : une vitrine qui donne envie de passer en boutique.',
      },
    ],
    features: ['Catalogue produits', 'Click & collect', 'Paiement sécurisé', 'Horaires et plan d’accès', 'Actualités et nouveautés'],
    offerId: 'reservation-boutique',
    demoId: 'fleuriste',
    faq: [
      {
        question: 'Faut-il forcément vendre en ligne ?',
        answer:
          'Non. Beaucoup de commerces commencent par un site vitrine bien référencé, puis ajoutent la vente en ligne plus tard si besoin.',
      },
      {
        question: 'Comment sont gérés les paiements ?',
        answer:
          'Les paiements passent par une solution sécurisée reconnue. L’argent arrive directement sur votre compte.',
      },
    ],
  },
  {
    slug: 'beaute-bien-etre',
    name: 'Beauté & bien-être',
    plural: 'professionnels de la beauté et du bien-être',
    headline: 'Des rendez-vous pris même quand vous travaillez.',
    intro:
      'Coiffeurs, esthéticiennes, masseurs, praticiens : vos clients veulent réserver à toute heure. Un site élégant avec prise de rendez-vous en ligne vous fait gagner du temps chaque jour.',
    examples: 'Coiffeur, barbier, esthéticienne, onglerie, masseur, sophrologue, ostéopathe…',
    needs: [
      {
        title: 'La prise de rendez-vous en ligne',
        text: 'Choix de la prestation et du créneau en quelques clics, sans interrompre vos séances.',
      },
      {
        title: 'Des prestations et tarifs clairs',
        text: 'Une présentation lisible de vos soins ou coupes, avec durées et prix.',
      },
      {
        title: 'Une image soignée',
        text: 'Un design à l’image de votre institut, qui inspire confiance dès le premier regard.',
      },
    ],
    features: ['Rendez-vous en ligne', 'Prestations et tarifs', 'Galerie photos', 'Présentation de l’équipe', 'Bons cadeaux'],
    offerId: 'reservation-boutique',
    demoId: 'coiffeur',
    faq: [
      {
        question: 'J’utilise déjà un logiciel de réservation, peut-on le garder ?',
        answer:
          'Souvent oui : on peut intégrer votre outil existant au site. On vérifie ensemble lors du premier échange.',
      },
      {
        question: 'Puis-je proposer des bons cadeaux ?',
        answer: 'Oui, c’est une fonctionnalité qui peut être ajoutée à votre site.',
      },
    ],
  },
  {
    slug: 'profession-liberale',
    name: 'Profession libérale',
    plural: 'professions libérales',
    headline: 'Un site sobre qui inspire confiance.',
    intro:
      'Avocats, architectes, experts-comptables, consultants, thérapeutes : votre site doit présenter votre expertise avec clarté et faciliter la prise de contact.',
    examples: 'Avocat, architecte, expert-comptable, consultant, psychologue, coach…',
    needs: [
      {
        title: 'Présenter votre expertise',
        text: 'Vos domaines d’intervention, votre parcours et votre approche, expliqués simplement.',
      },
      {
        title: 'Rassurer avant le premier contact',
        text: 'Un design professionnel, des informations claires et les mentions propres à votre profession.',
      },
      {
        title: 'Faciliter la prise de rendez-vous',
        text: 'Formulaire, prise de rendez-vous en ligne ou appel direct : le visiteur choisit.',
      },
    ],
    features: ['Domaines d’expertise', 'Prise de rendez-vous', 'Articles et conseils', 'Formulaire sécurisé', 'Plan d’accès au cabinet'],
    offerId: 'site-vitrine',
    faq: [
      {
        question: 'Ma profession a des règles de communication, est-ce un problème ?',
        answer:
          'Non. Le contenu est adapté aux règles de votre profession, que vous validez avant toute mise en ligne.',
      },
      {
        question: 'Puis-je publier des articles ?',
        answer:
          'Oui, une rubrique d’articles peut être ajoutée. C’est aussi un excellent moyen d’améliorer votre référencement.',
      },
    ],
  },
  {
    slug: 'association',
    name: 'Association & club',
    plural: 'associations et clubs',
    headline: 'Rassemblez vos membres au même endroit.',
    intro:
      'Clubs sportifs, associations culturelles, comités des fêtes : un site centralise les informations, les événements et les inscriptions, et fait connaître votre structure.',
    examples: 'Club sportif, association culturelle, comité des fêtes, école de musique…',
    needs: [
      {
        title: 'Informer vos membres',
        text: 'Actualités, calendrier, résultats, documents : tout est accessible au même endroit.',
      },
      {
        title: 'Faciliter les inscriptions',
        text: 'Formulaires d’adhésion ou d’inscription aux événements, directement en ligne.',
      },
      {
        title: 'Attirer de nouveaux membres',
        text: 'Présentez vos activités et vos valeurs pour donner envie de vous rejoindre.',
      },
    ],
    features: ['Actualités et agenda', 'Inscriptions en ligne', 'Galerie d’événements', 'Espace documents', 'Contact des responsables'],
    offerId: 'site-vitrine',
    faq: [
      {
        question: 'Plusieurs bénévoles peuvent-ils mettre à jour le site ?',
        answer: 'C’est possible selon la solution choisie. On définit ensemble qui peut modifier quoi.',
      },
      {
        question: 'Le budget d’une association est limité, est-ce adapté ?',
        answer: 'Le devis est construit selon vos besoins réels : on peut commencer simple et faire évoluer le site ensuite.',
      },
    ],
  },
]

export function getMetier(slug: string) {
  return metiers.find((m) => m.slug === slug)
}
