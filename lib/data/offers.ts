export interface Offer {
  id: string
  name: string
  pitch: string
  forWho: string
  includes: string[]
}

export const offers: Offer[] = [
  {
    id: 'site-vitrine',
    name: 'Site vitrine',
    pitch: 'Présenter votre savoir-faire et être facilement trouvé et contacté.',
    forWho: 'Artisans, indépendants, professions libérales',
    includes: [
      'Design sur mesure, à votre image',
      'Adapté aux téléphones et tablettes',
      'Pages services, réalisations et contact',
      'Formulaire de demande de devis',
      'Référencement local de base (ville, zone d’intervention)',
      'Mise en ligne et suivi après livraison',
    ],
  },
  {
    id: 'reservation-boutique',
    name: 'Réservation ou boutique',
    pitch: 'Laisser vos clients réserver, prendre rendez-vous ou acheter en ligne.',
    forWho: 'Restaurants, salons, commerces de proximité',
    includes: [
      'Tout ce que contient le site vitrine',
      'Prise de rendez-vous ou réservation en ligne',
      'Catalogue produits et paiement sécurisé',
      'Notifications par email à chaque demande',
      'Gestion simple de vos disponibilités ou produits',
    ],
  },
  {
    id: 'refonte',
    name: 'Refonte & référencement',
    pitch: 'Votre site existe mais ne vous apporte pas de clients ? On le remet à niveau.',
    forWho: 'Entreprises avec un site daté ou lent',
    includes: [
      'Audit de votre site actuel',
      'Nouveau design moderne et lisible',
      'Amélioration de la vitesse de chargement',
      'Optimisation pour Google et la recherche locale',
      'Aide à la configuration de votre fiche Google Business Profile',
    ],
  },
]

export const sectors = [
  {
    name: 'Artisans du bâtiment',
    text: 'Montrez vos chantiers, votre zone d’intervention et recevez des demandes de devis qualifiées.',
  },
  {
    name: 'Restaurants & cafés',
    text: 'Menu à jour, horaires, accès et réservation : tout ce que vos clients cherchent avant de venir.',
  },
  {
    name: 'Commerces de proximité',
    text: 'Faites connaître votre boutique dans le quartier et proposez vos produits en ligne.',
  },
  {
    name: 'Beauté & bien-être',
    text: 'Prestations, tarifs et prise de rendez-vous en ligne, disponibles même quand vous êtes occupé.',
  },
  {
    name: 'Professions libérales',
    text: 'Un site sobre et rassurant qui présente votre expertise et facilite la prise de contact.',
  },
  {
    name: 'Associations & clubs',
    text: 'Actualités, événements et informations pratiques réunis au même endroit.',
  },
]

export const steps = [
  {
    title: 'Premier échange',
    text: 'On discute de votre activité, de vos clients et de vos objectifs. C’est gratuit et sans engagement.',
  },
  {
    title: 'Devis détaillé',
    text: 'Vous recevez une proposition claire : ce qui est inclus, le prix et le planning. Pas de surprise.',
  },
  {
    title: 'Conception',
    text: 'Je crée la maquette de votre site, vous la validez, puis je la développe. Vous suivez chaque étape.',
  },
  {
    title: 'Mise en ligne & suivi',
    text: 'Votre site est publié, référencé et je reste votre interlocuteur pour les évolutions.',
  },
]

export const faq = [
  {
    question: 'Combien coûte un site internet ?',
    answer:
      'Le prix dépend de vos besoins : nombre de pages, réservation en ligne, boutique… Après un premier échange gratuit, je vous envoie un devis détaillé et sans engagement. Vous savez exactement ce que vous payez avant de commencer.',
  },
  {
    question: 'Combien de temps faut-il pour créer mon site ?',
    answer:
      'Cela dépend de la taille du projet et de la disponibilité de vos contenus (textes, photos). Le planning est fixé ensemble dans le devis, et je vous tiens informé à chaque étape.',
  },
  {
    question: 'Je n’ai ni textes ni photos, est-ce un problème ?',
    answer:
      'Non. Je vous guide pour rassembler les bons contenus : ce qu’il faut dire, quelles photos prendre et comment présenter vos services pour donner envie de vous contacter.',
  },
  {
    question: 'Mon site sera-t-il visible sur Google ?',
    answer:
      'Chaque site est construit pour le référencement : pages rapides, adaptées au mobile, structure claire et optimisation locale (votre ville, votre zone d’intervention). Personne ne peut honnêtement garantir la première place, mais votre site part avec toutes les bases pour être bien positionné.',
  },
  {
    question: 'Que se passe-t-il après la mise en ligne ?',
    answer:
      'Je reste votre interlocuteur pour les modifications, les évolutions et les questions techniques. Vous n’êtes pas laissé seul une fois le site livré.',
  },
  {
    question: 'Travaillez-vous uniquement à Clermont-Ferrand ?',
    answer:
      'Je suis basé à Clermont-Ferrand et j’accompagne en priorité les entreprises du Puy-de-Dôme et d’Auvergne. Pour les projets plus éloignés, tout peut se faire à distance.',
  },
]
