import { offers } from '@/lib/data/offers'

// Types de projet proposés dans le formulaire (et acceptés par l'API)
export const projectTypes = [
  ...offers.map((offer) => ({ value: offer.id, label: offer.name })),
  { value: 'autre', label: 'Autre / je ne sais pas encore' },
]
