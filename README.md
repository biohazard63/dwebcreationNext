# DWebCreation - Agence Web Moderne

Site web professionnel pour une agence de développement web moderne, construit avec Next.js 15, React 19 et TypeScript.

## 🚀 Technologies Utilisées

- **Framework :** Next.js 15 avec App Router
- **Frontend :** React 19, TypeScript
- **Styling :** Tailwind CSS v4, shadcn/ui
- **Email :** Gmail (SMTP via Nodemailer) ou Resend
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
   SMTP_USER=quentindevaulx63@gmail.com
   SMTP_PASS=mot-de-passe-d-application
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
│   └── api/contact/          # Envoi du formulaire (Gmail SMTP ou Resend)
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
| `lib/data/articles.ts` | Articles de la rubrique Conseils |
| `lib/data/testimonials.ts` | Vrais avis clients : la section apparaît dès qu'il y en a un |

### Couleurs et thème
Les couleurs (`night`, `mist`, `flame`, `blush`, `violet`) sont définies dans `tailwind.config.js`, les effets (dégradés, verre, animations) dans `app/globals.css`.

### Formulaire de Contact
Le formulaire envoie les emails via Gmail (SMTP) ou Resend : voir « Configuration Email » ci-dessous.

## 📧 Configuration Email

Le formulaire envoie deux emails : la demande (vers vous, « Répondre » écrit directement au client) et une confirmation au visiteur.

### Option 1 — Gmail (sans nom de domaine)
1. Activez la **validation en deux étapes** sur votre compte Google.
2. Créez un **mot de passe d'application** sur https://myaccount.google.com/apppasswords (nom : « Site web »).
3. Renseignez dans `.env.local` (et dans les variables d'environnement Vercel) :
   ```env
   SMTP_USER=quentindevaulx63@gmail.com
   SMTP_PASS=le-mot-de-passe-de-16-caracteres
   ```

### Option 2 — Resend (avec un nom de domaine)
1. Créez un compte sur https://resend.com et vérifiez votre domaine.
2. Renseignez `RESEND_API_KEY` et `CONTACT_FROM_EMAIL="D Web Créations <contact@votre-domaine.fr>"`.

Sans domaine vérifié, Resend n'envoie qu'à l'adresse de votre compte Resend : la demande arrive, mais pas l'email de confirmation au visiteur.

Si SMTP et Resend sont configurés tous les deux, SMTP est utilisé.

### Tester la configuration
```bash
npm run test:email
```
Cette commande vérifie les fichiers `.env` (nom, encodage — un fichier enregistré en UTF-16 par PowerShell est corrigé automatiquement), les variables lues (sans afficher le mot de passe), la connexion à Gmail, puis envoie un email de test.

## 🔎 Référencement (SEO)

En place : titres et descriptions uniques par page (raccourcis automatiquement pour Google), adresses canoniques, sitemap et robots.txt, fil d'Ariane, données structurées (entreprise locale, services, FAQ, fil d'Ariane, articles), pages par métier, rubrique Conseils, maillage interne.

- **Nom de domaine** : renseignez `SITE_URL=https://votre-domaine.fr` (Vercel → Environment Variables) ; toutes les adresses du site, du sitemap et des données structurées l'utilisent.
- **Nouvel article** : ajoutez-le dans `lib/data/articles.ts` (page, sitemap et liens générés automatiquement).
- **Audit** (après `npm run build`, site lancé) :
  ```bash
  npm run test:seo
  ```

## 🔒 Sécurité

Protections en place :
- **En-têtes HTTP** : Content-Security-Policy, HSTS, anti-iframe, nosniff, Referrer-Policy, Permissions-Policy, X-Powered-By masqué.
- **Formulaire** : validation et longueur maximale de chaque champ, taille de requête limitée (16 Ko), données échappées dans les emails, retours à la ligne bloqués (pas d'injection d'en-têtes), champ piège anti-robots.
- **Anti-abus** : demandes acceptées uniquement depuis le site lui-même et en JSON (pas de formulaire caché sur un autre site), 5 demandes / 10 min par IP, 30 emails de confirmation / heure au maximum, aucun contenu saisi par le visiteur dans l'email de confirmation.
- **Secrets** : uniquement dans `.env` / `.env.local` (exclus de Git) ou dans les variables d'environnement Vercel.

Tester (pendant que le site tourne) :
```bash
npm run test:security                                   # site local sur http://localhost:3000
BASE_URL=https://votre-site.fr npm run test:security    # site en ligne
```
Aucun email n'est envoyé par ces tests.

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