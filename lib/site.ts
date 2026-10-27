// Informations centrales du site : à mettre à jour ici uniquement.
export const siteConfig = {
  name: 'D Web Créations',
  owner: 'Quentin',
  tagline: 'Sites internet pour artisans, commerçants et indépendants',
  description:
    'Développeur web indépendant à Clermont-Ferrand. Je crée des sites internet clairs, rapides et bien référencés pour les artisans, commerçants et indépendants du Puy-de-Dôme.',
  url: process.env.SITE_URL || 'https://dwebcreation.com',
  email: 'quentindevaulx63@gmail.com',
  phone: '+33 6 11 38 62 37',
  phoneHref: 'tel:+33611386237',
  city: 'Clermont-Ferrand',
  region: 'Puy-de-Dôme',
  country: 'FR',
  hours: 'Du lundi au vendredi, 9 h – 17 h',
  hoursSpec: { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
  responseTime: 'Réponse sous 24 h ouvrées',
  social: [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/quentin-dwebcreation' },
    { name: 'Instagram', href: 'https://instagram.com/dwebcreation' },
    { name: 'Facebook', href: 'https://facebook.com/dwebcreation' },
  ],
  // Mentions légales obligatoires : remplacer les valeurs « À compléter »
  legal: {
    publisher: 'À compléter (nom et prénom)',
    status: 'À compléter (ex. entrepreneur individuel)',
    siret: 'À compléter',
    address: 'À compléter',
    host: 'À compléter (nom, adresse et site de l’hébergeur)',
  },
}

export const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Démos', href: '/demos' },
  { name: 'Simulateur', href: '/simulateur' },
  { name: 'Réalisations', href: '/portfolio' },
  { name: 'À propos', href: '/about' },
  { name: 'Contact', href: '/contact' },
]
