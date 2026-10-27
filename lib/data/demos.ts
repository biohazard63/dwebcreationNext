// Démos de sites (entreprises fictives) : données utilisées par l'accueil et les pages /demos
export interface Demo {
  id: string
  label: string
  business: string
  sector: string
  metier: string
  offerId: string
  feature: string
  intro: string
  includes: string[]
}

export const demos: Demo[] = [
  {
    id: 'menuiserie',
    label: 'Menuisier',
    business: 'Atelier Chêne & Co',
    sector: 'Menuiserie et agencement',
    metier: 'artisan-batiment',
    offerId: 'site-vitrine',
    feature: 'Galerie de réalisations filtrable et demande de devis.',
    intro:
      'Pour un artisan, les photos de chantiers sont le meilleur argument. Ce concept les met au premier plan, classées par type de travaux, avec un accès direct à la demande de devis.',
    includes: [
      'Galerie de réalisations filtrable par catégorie',
      'Mise en avant du savoir-faire et de l’atelier',
      'Zone d’intervention et référencement local',
      'Bouton de demande de devis sur chaque page',
    ],
  },
  {
    id: 'restaurant',
    label: 'Restaurant',
    business: 'Le Comptoir Vert',
    sector: 'Bistrot de saison',
    metier: 'restaurant',
    offerId: 'reservation-boutique',
    feature: 'Carte consultable par onglets et réservation de table.',
    intro:
      'Avant de venir, vos clients veulent voir la carte, les horaires et réserver. Ce concept leur donne tout cela en quelques secondes, avec une ambiance qui donne faim.',
    includes: [
      'Carte facile à mettre à jour, classée par onglets',
      'Réservation de table en ligne',
      'Horaires, accès et informations pratiques',
      'Design qui reflète l’ambiance du lieu',
    ],
  },
  {
    id: 'coiffeur',
    label: 'Coiffeur',
    business: 'Studio Lune',
    sector: 'Salon de coiffure',
    metier: 'beaute-bien-etre',
    offerId: 'reservation-boutique',
    feature: 'Choix de la prestation et prise de rendez-vous en ligne.',
    intro:
      'Les rendez-vous se prennent aussi le soir et le dimanche. Ce concept permet de choisir sa prestation et son créneau en quelques clics, sans décrocher le téléphone.',
    includes: [
      'Prise de rendez-vous en ligne par prestation',
      'Présentation des prestations et tarifs',
      'Galerie de coupes et de l’équipe',
      'Rappels et notifications par email',
    ],
  },
  {
    id: 'fleuriste',
    label: 'Fleuriste',
    business: 'Pavot',
    sector: 'Fleuriste',
    metier: 'commerce',
    offerId: 'reservation-boutique',
    feature: 'Boutique en ligne avec panier.',
    intro:
      'Vendre aussi en ligne, sans perdre l’âme de la boutique. Ce concept présente les créations du moment et permet de commander en quelques clics.',
    includes: [
      'Catalogue de produits avec panier',
      'Paiement en ligne sécurisé',
      'Retrait en boutique ou livraison locale',
      'Mise en avant des créations de saison',
    ],
  },
]

export function getDemo(id: string) {
  return demos.find((d) => d.id === id)
}
