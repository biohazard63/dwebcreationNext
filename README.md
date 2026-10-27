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
├── app/                    # Pages Next.js 15 (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── about/             # Page À propos
│   ├── services/          # Page Services
│   ├── portfolio/         # Page Portfolio
│   ├── blog/              # Page Blog
│   ├── contact/           # Page Contact
│   └── api/               # API Routes
│       └── contact/       # Formulaire de contact
├── components/            # Composants React
│   ├── ui/               # Composants shadcn/ui
│   └── sections/         # Sections de pages
├── lib/                  # Utilitaires et configurations
│   ├── utils.ts          # Fonctions utilitaires
│   ├── seo.ts            # Configuration SEO
│   └── data/             # Données statiques
├── content/              # Contenu MDX (blog, portfolio)
├── public/               # Assets statiques
└── styles/               # Styles globaux
```

## 🎨 Personnalisation

### Couleurs et Thème
Les couleurs sont définies dans `tailwind.config.js` et `app/globals.css`. Modifiez les variables CSS pour personnaliser le thème.

### Contenu
- **Témoignages :** `lib/data/testimonials.ts`
- **SEO :** `lib/seo.ts`
- **Métadonnées :** Chaque page exporte ses propres métadonnées

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