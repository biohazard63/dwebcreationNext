// Articles de la rubrique « Conseils » : chaque article cible une question que se posent les clients.
export interface ArticleSection {
  title: string
  paragraphs: string[]
  list?: string[]
}

export interface Article {
  slug: string
  title: string
  // Titre court affiché dans Google (60 caractères max)
  seoTitle: string
  description: string
  date: string
  keywords: string[]
  intro: string
  sections: ArticleSection[]
  related: { label: string; href: string }[]
}

export const articles: Article[] = [
  {
    slug: 'combien-coute-un-site-internet',
    title: 'Combien coûte un site internet pour un artisan ou un commerçant ?',
    seoTitle: 'Combien coûte un site internet pour un artisan ?',
    description:
      'Site vitrine, réservation, boutique en ligne : ce qui fait varier le prix d’un site internet, les coûts à prévoir chaque année et les points à vérifier dans un devis.',
    date: '2026-10-27',
    keywords: ['prix site internet', 'coût site internet artisan', 'devis site internet'],
    intro:
      'C’est souvent la première question, et la réponse honnête est : « ça dépend ». Pas pour esquiver, mais parce qu’un site d’une page pour un plombier et une boutique en ligne pour un fleuriste n’ont rien à voir. Voici ce qui fait réellement varier le prix, pour que vous puissiez comparer les devis sereinement.',
    sections: [
      {
        title: 'Ce qui fait varier le prix',
        paragraphs: ['Quatre éléments pèsent plus que tout le reste dans le prix d’un site :'],
        list: [
          'Le nombre de pages et la quantité de contenu à mettre en forme.',
          'Les fonctionnalités : prise de rendez-vous, réservation de table, vente en ligne, espace client…',
          'Le niveau de personnalisation du design : modèle adapté ou création sur mesure.',
          'L’accompagnement : aide à la rédaction des textes, référencement local, formation, suivi après la mise en ligne.',
        ],
      },
      {
        title: 'Les trois grandes options',
        paragraphs: [
          'Les créateurs de sites en ligne (avec abonnement mensuel) sont les moins chers au départ, mais demandent du temps, et le résultat dépend entièrement de vous. L’abonnement court aussi longtemps que le site existe.',
          'Un développeur indépendant offre un site sur mesure avec un interlocuteur unique, souvent plus réactif et à un tarif plus accessible qu’une agence pour un projet de petite ou moyenne taille.',
          'Une agence web convient aux projets plus importants qui mobilisent plusieurs métiers (graphiste, rédacteur, développeur, chef de projet), avec un budget en conséquence.',
        ],
      },
      {
        title: 'Les coûts à prévoir chaque année',
        paragraphs: [
          'Le prix de création n’est pas le seul à considérer. Un site a aussi quelques frais récurrents, à faire préciser dans le devis :',
        ],
        list: [
          'Le nom de domaine (votre adresse, par exemple votre-entreprise.fr), renouvelé chaque année.',
          'L’hébergement, c’est-à-dire le serveur qui rend le site accessible.',
          'La maintenance : mises à jour de sécurité, sauvegardes, petites modifications.',
        ],
      },
      {
        title: 'Les questions à poser avant de signer',
        paragraphs: ['Un bon devis répond clairement à ces questions :'],
        list: [
          'Qu’est-ce qui est inclus exactement, et qu’est-ce qui sera facturé en plus ?',
          'Le nom de domaine et le site seront-ils à mon nom ?',
          'Le site sera-t-il adapté aux téléphones et optimisé pour Google ?',
          'Que se passe-t-il après la mise en ligne si j’ai besoin d’une modification ?',
          'Quel est le planning, et qu’attendez-vous de moi (textes, photos, validations) ?',
        ],
      },
      {
        title: 'En résumé',
        paragraphs: [
          'Le bon prix, c’est celui d’un site qui vous rapporte des clients. Un site bon marché qui n’apparaît pas sur Google ou qui se charge mal coûte finalement plus cher qu’un site bien fait. Prenez le temps de comparer ce qui est inclus, pas seulement le montant en bas du devis.',
        ],
      },
    ],
    related: [
      { label: 'Estimer votre projet avec le simulateur', href: '/simulateur' },
      { label: 'Voir les formules', href: '/services' },
    ],
  },
  {
    slug: 'apparaitre-sur-google-maps-clermont-ferrand',
    title: 'Comment apparaître sur Google Maps à Clermont-Ferrand',
    seoTitle: 'Apparaître sur Google Maps à Clermont-Ferrand',
    description:
      'Fiche Google Business Profile, avis, catégories, photos : le guide pas à pas pour apparaître sur Google Maps et dans les résultats locaux à Clermont-Ferrand.',
    date: '2026-10-27',
    keywords: ['Google Maps', 'Google Business Profile', 'référencement local Clermont-Ferrand'],
    intro:
      'Quand quelqu’un cherche « boulangerie Clermont-Ferrand » ou « électricien près de moi », Google affiche d’abord une carte avec trois entreprises. Y figurer, c’est souvent la différence entre un téléphone qui sonne et un téléphone qui reste muet. Bonne nouvelle : c’est gratuit, et l’essentiel se fait en une heure.',
    sections: [
      {
        title: '1. Créer ou récupérer votre fiche Google Business Profile',
        paragraphs: [
          'Rendez-vous sur business.google.com avec un compte Google. Si votre entreprise apparaît déjà sur Maps, revendiquez la fiche ; sinon, créez-la. Google vous demandera de confirmer que vous êtes bien le propriétaire, généralement par téléphone, email ou vidéo.',
        ],
      },
      {
        title: '2. Remplir la fiche à 100 %',
        paragraphs: ['Une fiche complète inspire confiance et ressort mieux. Renseignez soigneusement :'],
        list: [
          'La catégorie principale : la plus précise possible (« Plombier » plutôt que « Entreprise »).',
          'Votre adresse, ou votre zone d’intervention si vous vous déplacez chez vos clients.',
          'Vos horaires, y compris les jours fériés et les fermetures exceptionnelles.',
          'Votre téléphone et le lien vers votre site internet.',
          'Une description claire de votre activité et de vos services.',
        ],
      },
      {
        title: '3. Des coordonnées identiques partout',
        paragraphs: [
          'Google vérifie la cohérence de vos informations sur le web. Votre nom, votre adresse et votre téléphone doivent être écrits exactement de la même façon sur votre site, votre fiche Google, PagesJaunes, vos réseaux sociaux et les annuaires où vous êtes inscrit.',
        ],
      },
      {
        title: '4. Les avis : le facteur le plus important',
        paragraphs: [
          'Le nombre, la qualité et la régularité des avis comptent énormément dans le classement local, et ce sont eux qui convainquent les clients.',
        ],
        list: [
          'Demandez un avis à chaque client satisfait, juste après la prestation.',
          'Envoyez-lui le lien direct vers votre fiche (disponible dans Google Business Profile).',
          'Répondez à tous les avis, y compris les négatifs, avec calme et professionnalisme.',
          'N’achetez jamais de faux avis : c’est interdit et Google les supprime.',
        ],
      },
      {
        title: '5. Faire vivre la fiche',
        paragraphs: [
          'Ajoutez régulièrement des photos de vos réalisations, de votre équipe ou de votre boutique, et publiez de temps en temps une actualité ou une offre. Une fiche active montre que l’entreprise est bien vivante.',
        ],
      },
      {
        title: '6. Un site qui renforce votre fiche',
        paragraphs: [
          'Votre fiche Google et votre site se renforcent mutuellement. Un site rapide, adapté au mobile, qui mentionne clairement votre ville et votre zone d’intervention, aide Google à comprendre où et pour qui vous travaillez.',
        ],
      },
    ],
    related: [
      { label: 'Formule « Refonte & référencement »', href: '/services#refonte' },
      { label: 'Sites pour artisans du bâtiment', href: '/site-internet/artisan-batiment' },
    ],
  },
  {
    slug: 'erreurs-qui-font-fuir-les-clients',
    title: '7 erreurs qui font fuir les clients de votre site internet',
    seoTitle: '7 erreurs qui font fuir les clients de votre site',
    description:
      'Site lent, numéro introuvable, informations périmées… Les erreurs les plus fréquentes qui font fuir les visiteurs, et comment les corriger simplement.',
    date: '2026-10-27',
    keywords: ['erreurs site internet', 'améliorer son site', 'site internet professionnel'],
    intro:
      'Un visiteur décide en quelques secondes s’il reste sur votre site ou s’il retourne sur Google pour appeler un concurrent. Voici les erreurs que l’on rencontre le plus souvent sur les sites d’artisans et de commerçants, et la façon de les éviter.',
    sections: [
      {
        title: '1. Un site trop lent',
        paragraphs: [
          'Sur mobile, chaque seconde d’attente fait partir des visiteurs. Les coupables habituels : des photos beaucoup trop lourdes, trop d’extensions, un hébergement bas de gamme. Testez votre site avec l’outil gratuit PageSpeed Insights de Google.',
        ],
      },
      {
        title: '2. Un site illisible sur téléphone',
        paragraphs: [
          'Texte minuscule, boutons trop petits, page qui déborde sur le côté : si votre site n’est pas pensé pour le mobile, vous perdez la majorité de vos visiteurs, et Google le pénalise.',
        ],
      },
      {
        title: '3. Un numéro de téléphone introuvable',
        paragraphs: [
          'Le visiteur veut vous joindre, maintenant. Votre numéro doit être visible sur toutes les pages, et cliquable sur mobile pour appeler en un geste.',
        ],
      },
      {
        title: '4. On ne comprend pas ce que vous faites',
        paragraphs: [
          'En arrivant sur votre page d’accueil, on doit comprendre immédiatement votre métier, votre zone et ce que vous proposez. Un slogan vague ou une page remplie de généralités fait fuir.',
        ],
      },
      {
        title: '5. Des informations périmées',
        paragraphs: [
          'Des horaires faux, une promotion de l’an dernier, un copyright « 2019 » en bas de page : autant de signaux qui font douter que l’entreprise soit encore active.',
        ],
      },
      {
        title: '6. Pas de preuves de votre savoir-faire',
        paragraphs: [
          'Photos de vos réalisations, avis clients, certifications : ce sont eux qui rassurent. Privilégiez toujours vos propres photos aux images de banque d’images, que les visiteurs repèrent tout de suite.',
        ],
      },
      {
        title: '7. Aucune action proposée',
        paragraphs: [
          'Chaque page devrait se terminer par une invitation claire : appeler, demander un devis, réserver. Sans cela, le visiteur lit… puis repart.',
        ],
      },
      {
        title: 'Et maintenant ?',
        paragraphs: [
          'Si vous reconnaissez votre site dans plusieurs de ces points, une refonte peut changer beaucoup de choses. Souvent, quelques corrections bien choisies suffisent déjà à transformer davantage de visites en demandes.',
        ],
      },
    ],
    related: [
      { label: 'Comparer un ancien site et sa version modernisée', href: '/#avant-apres' },
      { label: 'Formule « Refonte & référencement »', href: '/services#refonte' },
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

// Temps de lecture estimé (environ 200 mots par minute)
export function readingTime(article: Article) {
  const text = [article.intro, ...article.sections.flatMap((s) => [s.title, ...s.paragraphs, ...(s.list ?? [])])].join(' ')
  return Math.max(1, Math.round(text.split(/\s+/).length / 200))
}
