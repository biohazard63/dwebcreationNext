export interface Project {
  title: string
  sector: string
  description: string
  url?: string
  image?: string
  results?: string
}

// Ajouter ici les vraies réalisations : la page Réalisations et la section
// de l'accueil s'affichent automatiquement dès qu'un projet est présent.
export const projects: Project[] = []
