export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  rating: number
  linkedin?: string
  date: string
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Marie Dubois",
    company: "EcoStyle",
    role: "Fondatrice",
    content: "DWebCreation a transformé notre vision en réalité. Leur équipe a créé un site web magnifique qui reflète parfaitement notre marque éco-responsable. Les performances sont exceptionnelles et le référencement nous a permis d'augmenter notre visibilité de 300%.",
    rating: 5,
    linkedin: "https://linkedin.com/in/marie-dubois",
    date: "2024-01-15"
  },
  {
    id: "2",
    name: "Thomas Martin",
    company: "TechStart",
    role: "CEO",
    content: "Excellente collaboration avec DWebCreation. Ils ont développé notre plateforme SaaS avec une expertise technique remarquable. Le code est propre, maintenable et les performances sont au rendez-vous.",
    rating: 5,
    linkedin: "https://linkedin.com/in/thomas-martin",
    date: "2024-02-20"
  },
  {
    id: "3",
    name: "Sophie Laurent",
    company: "ArtisanPlus",
    role: "Directrice Marketing",
    content: "Grâce à DWebCreation, notre boutique en ligne a vu ses ventes augmenter de 150% en 6 mois. L'interface utilisateur est intuitive et l'expérience client est optimale. Je recommande vivement !",
    rating: 5,
    linkedin: "https://linkedin.com/in/sophie-laurent",
    date: "2024-03-10"
  },
  {
    id: "4",
    name: "Pierre Moreau",
    company: "ConsultPro",
    role: "Consultant",
    content: "DWebCreation a créé mon site web professionnel avec un design moderne et élégant. Le processus de développement était transparent et les délais respectés. Résultat parfait !",
    rating: 5,
    linkedin: "https://linkedin.com/in/pierre-moreau",
    date: "2024-04-05"
  },
  {
    id: "5",
    name: "Julie Bernard",
    company: "WellnessCo",
    role: "Fondatrice",
    content: "Notre application de bien-être développée par DWebCreation est un succès ! L'équipe a parfaitement compris nos besoins et a livré une solution sur mesure. Les utilisateurs adorent l'interface.",
    rating: 5,
    linkedin: "https://linkedin.com/in/julie-bernard",
    date: "2024-05-12"
  },
  {
    id: "6",
    name: "Marc Durand",
    company: "FinanceLib",
    role: "Directeur Technique",
    content: "DWebCreation a modernisé notre infrastructure web avec des technologies de pointe. La migration s'est déroulée sans accroc et les performances se sont considérablement améliorées.",
    rating: 5,
    linkedin: "https://linkedin.com/in/marc-durand",
    date: "2024-06-18"
  }
]
