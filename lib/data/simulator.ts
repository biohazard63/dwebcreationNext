export interface SimOption {
  value: string
  label: string
  hint?: string
}

export interface SimQuestion {
  id: string
  title: string
  subtitle?: string
  multiple?: boolean
  options: SimOption[]
}

export const questions: SimQuestion[] = [
  {
    id: 'activite',
    title: 'Quelle est votre activité ?',
    options: [
      { value: 'batiment', label: 'Artisan du bâtiment', hint: 'Menuisier, plombier, électricien…' },
      { value: 'restaurant', label: 'Restaurant / café', hint: 'Bistrot, traiteur, bar…' },
      { value: 'commerce', label: 'Commerce de proximité', hint: 'Boutique, fleuriste, boulangerie…' },
      { value: 'beaute', label: 'Beauté & bien-être', hint: 'Coiffeur, esthéticienne, praticien…' },
      { value: 'liberal', label: 'Profession libérale', hint: 'Avocat, architecte, consultant…' },
      { value: 'autre', label: 'Autre activité' },
    ],
  },
  {
    id: 'existant',
    title: 'Avez-vous déjà un site ?',
    options: [
      { value: 'non', label: 'Non, pas encore' },
      { value: 'date', label: 'Oui, mais il est daté', hint: 'Design ancien, lent, mal adapté au mobile' },
      { value: 'invisible', label: 'Oui, mais il ne m’apporte pas de clients', hint: 'Peu de visites, mal référencé' },
    ],
  },
  {
    id: 'fonctions',
    title: 'De quoi avez-vous besoin ?',
    subtitle: 'Plusieurs choix possibles.',
    multiple: true,
    options: [
      { value: 'presentation', label: 'Présenter mes services' },
      { value: 'galerie', label: 'Galerie de réalisations' },
      { value: 'devis', label: 'Formulaire de demande de devis' },
      { value: 'reservation', label: 'Réservation / prise de rendez-vous' },
      { value: 'boutique', label: 'Vente en ligne' },
      { value: 'actualites', label: 'Actualités / blog' },
      { value: 'langues', label: 'Plusieurs langues' },
    ],
  },
  {
    id: 'pages',
    title: 'Combien de pages imaginez-vous ?',
    options: [
      { value: '1', label: 'Une seule page', hint: 'Tout sur une page qui défile' },
      { value: '3-5', label: '3 à 5 pages', hint: 'Accueil, services, réalisations, contact…' },
      { value: '6-10', label: '6 à 10 pages' },
      { value: '10+', label: 'Plus de 10 pages' },
    ],
  },
  {
    id: 'contenus',
    title: 'Où en sont vos textes et photos ?',
    options: [
      { value: 'prets', label: 'Tout est prêt' },
      { value: 'partiel', label: 'J’en ai une partie' },
      { value: 'zero', label: 'Je pars de zéro', hint: 'Je vous guide pour les préparer' },
    ],
  },
  {
    id: 'delai',
    title: 'Pour quand ?',
    options: [
      { value: 'vite', label: 'Dès que possible' },
      { value: '1-3', label: 'D’ici 1 à 3 mois' },
      { value: 'libre', label: 'Pas pressé' },
    ],
  },
]

export type Answers = Record<string, string[]>

// Tarifs indicatifs : laisser `null` pour ne pas afficher de prix.
// Exemple : base: { 'site-vitrine': 900, ... }, extras: { reservation: 300 }, pages: { '6-10': 400 }
export const pricing: {
  base: Record<string, number>
  extras: Record<string, number>
  pages: Record<string, number>
  margin: number
} | null = null

export function recommendOffer(answers: Answers) {
  const fonctions = answers.fonctions ?? []
  if (fonctions.includes('boutique') || fonctions.includes('reservation')) return 'reservation-boutique'
  if ((answers.existant ?? [])[0] && answers.existant[0] !== 'non') return 'refonte'
  return 'site-vitrine'
}

export function estimate(answers: Answers) {
  if (!pricing) return null
  const offer = recommendOffer(answers)
  let total = pricing.base[offer] ?? 0
  for (const f of answers.fonctions ?? []) total += pricing.extras[f] ?? 0
  total += pricing.pages[(answers.pages ?? [])[0]] ?? 0
  const low = Math.round((total * (1 - pricing.margin)) / 50) * 50
  const high = Math.round((total * (1 + pricing.margin)) / 50) * 50
  return { low, high }
}

export function labelsFor(questionId: string, values: string[] = []) {
  const q = questions.find((q) => q.id === questionId)
  return values.map((v) => q?.options.find((o) => o.value === v)?.label ?? v)
}

export function summaryText(answers: Answers) {
  return questions
    .map((q) => `${q.title} ${labelsFor(q.id, answers[q.id]).join(', ') || '—'}`)
    .join('\n')
}
