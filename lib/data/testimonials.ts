export interface Testimonial {
  name: string
  company: string
  role?: string
  content: string
  source?: string
}

// Ajouter ici uniquement de vrais avis clients (avec leur accord).
// La section « Avis clients » s'affiche automatiquement dès qu'un avis est présent.
export const testimonials: Testimonial[] = []
