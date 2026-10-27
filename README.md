# DWebCreation - Agence Web Moderne

Site web professionnel pour une agence de développement web moderne, construit avec Next.js 15, React 19 et TypeScript.

## 🚀 Technologies Utilisées

- **Framework :** Next.js 15 avec App Router
- **Frontend :** React 19, TypeScript
- **Styling :** Tailwind CSS v4, shadcn/ui
- **Email :** Resend
- **SEO :** next-sitemap, Metadata API
- **UI Components :** Radix UI, Lucide React
- **Qualité :** ESLint, Prettier, Husky

## 📦 Installation

1. **Cloner le projet**
   ```bash
   git clone https://github.com/votre-username/dwebcreationNext.git
   cd dwebcreationNext
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de l'environnement**
   ```bash
   cp .env.example .env.local
   ```
   
   Puis éditer `.env.local` avec vos variables :
   ```env
   SITE_URL=https://dwebcreation.com
   RESEND_API_KEY=your_resend_api_key_here
   CONTACT_FROM_EMAIL="D Web Créations <contact@dwebcreation.com>"
   CONTACT_TO_EMAIL=quentindevaulx63@gmail.com
   GOOGLE_SITE_VERIFICATION=   # optionnel
   ```

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 🏗️ Structure du Projet

```
dwebcreationNext/
├── app/                      # Pages (App Router)
│   ├── page.tsx              # Accueil
│   ├── services/             # Formules
│   ├── demos/                # Démos interactives (+ une page par démo)
│   ├── simulateur/           # Simulateur de projet
│   ├── site-internet/        # Pages par métier (référencement local)
│   ├── portfolio/            # Réalisations (masquée tant qu'elle est vide)
│   ├── about/  contact/      # À propos, Contact
│   ├── mentions-legales/  confidentialite/
│   └── api/contact/          # Envoi du formulaire (Resend)
├── components/
│   ├── home/                 # Sections de l'accueil, mini-sites de démo
│   ├── demos/  simulator/  contact/
│   ├── layout/               # En-tête, pied de page, barre mobile
│   ├── shared/               # Blocs communs (titres, FAQ, méthode, CTA…)
│   └── ui/                   # Boutons, champs
└── lib/
    ├── site.ts               # Coordonnées, menu, mentions légales
    ├── seo.ts                # Métadonnées et données structurées
    └── data/                 # Tous les contenus modifiables
```

## 🎨 Personnalisation

### Contenus à modifier
| Fichier | Contenu |
|---|---|
| `lib/site.ts` | Nom, email, téléphone, horaires, réseaux sociaux, **mentions légales à compléter** |
| `lib/data/offers.ts` | Formules, métiers de l'accueil, méthode, FAQ |
| `lib/data/metiers.ts` | Pages « Site internet pour [métier] à Clermont-Ferrand » |
| `lib/data/demos.ts` | Textes des démos (les mini-sites sont dans `components/home/concepts.tsx`) |
| `lib/data/simulator.ts` | Questions du simulateur et **tarifs indicatifs** (`pricing`, vide = pas de prix affiché) |
| `lib/data/projects.ts` | Vraies réalisations : la page et la section apparaissent dès qu'il y en a une |
| `lib/data/testimonials.ts` | Vrais avis clients : la section apparaît dès qu'il y en a un |

### Couleurs et thème
Les couleurs (`night`, `mist`, `flame`, `blush`, `violet`) sont définies dans `tailwind.config.js`, les effets (dégradés, verre, animations) dans `app/globals.css`.

### Formulaire de Contact
Le formulaire utilise Resend pour l'envoi d'emails. Configurez votre clé API dans `.env.local`.

## 📧 Configuration Email

1. Créez un compte sur [Resend](https://resend.com)
2. Obtenez votre clé API
3. Ajoutez-la dans `.env.local`
4. Configurez votre domaine d'envoi dans Resend

## 🚀 Déploiement

### Vercel (Recommandé)
1. Connectez votre repo GitHub à Vercel
2. Ajoutez vos variables d'environnement
3. Déployez automatiquement

### Autres Plateformes
Le projet est compatible avec toutes les plateformes supportant Next.js :
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📝 Scripts Disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Vérification ESLint
npm run format       # Formatage Prettier
npm run type-check   # Vérification TypeScript
```

## 🔧 Configuration Avancée

### SEO
- Sitemap automatique avec `next-sitemap`
- Métadonnées optimisées pour chaque page
- Open Graph et Twitter Cards

### Performance
- Images optimisées avec Next.js Image
- Code splitting automatique
- Optimisation des bundles

### Accessibilité
- Composants Radix UI pour l'accessibilité
- Navigation au clavier
- Contraste et lisibilité optimisés

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email : contact@dwebcreation.com
- Site web : https://dwebcreation.com

---

**DWebCreation** - Agence web moderne et performante 🚀