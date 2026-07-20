# CEFEC BENIN — Site vitrine

Site vitrine premium pour **CEFEC BENIN** (Centre d'Étude en Froid, Énergie et
Climatisation), développé en React + Vite + Tailwind CSS + Framer Motion.

## 🎨 Identité

- **Bleu principal** `#005DA8` · **Bleu foncé** `#0A3D91` · **Bleu clair** `#27A9E1`
- **Orange** `#F7931E` · **Jaune solaire** `#FDB913`
- Typographies : **Sora** (titres) / **Inter** (texte) / **JetBrains Mono** (labels techniques)
- Signature visuelle : la **ligne thermique** — un dégradé bleu → orange qui symbolise
  le passage du froid maîtrisé (climatisation) à l'énergie solaire, cœur de métier de CEFEC.

## 📁 Arborescence

```
cefec-benin/
├── public/                  # favicon, robots.txt, sitemap.xml, _redirects
├── src/
│   ├── assets/               # logo.png + vos futurs visuels
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, boutons flottants, PageHero
│   │   ├── ui/                 # Reveal, SectionTitle, ServiceCard, ImageWithFallback
│   │   ├── home/               # Sections de la page d'accueil
│   │   └── contact/            # Formulaire de contact/devis, carte
│   ├── context/               # ThemeContext (mode sombre)
│   ├── data/                  # Contenu du site (services, FAQ, blog, images...)
│   ├── pages/                  # Une page par route
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🖼️ Remplacer les images et le logo

- Le logo est dans `src/assets/logo.png` — remplacez-le simplement par votre fichier
  (même nom) ou mettez à jour l'import dans `Navbar.jsx` et `Footer.jsx`.
- Toutes les images d'illustration (Unsplash, temporaires) sont centralisées dans
  `src/data/images.js`. Déposez vos photos dans `src/assets/`, importez-les, et
  remplacez les URLs correspondantes.
- Si une image distante ne charge pas, un dégradé de marque s'affiche automatiquement
  à la place (voir `ImageWithFallback.jsx`) — le site ne casse jamais visuellement.

## 🚀 Lancer le projet en local

**Prérequis** : [Node.js](https://nodejs.org) version 18 ou supérieure.

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
```

Le site est alors accessible sur **http://localhost:5173** avec rechargement à chaud.

## 📦 Générer la version de production

```bash
npm run build
```

Le dossier `dist/` contient alors le site optimisé et prêt à déployer.
Pour prévisualiser cette version en local avant déploiement :

```bash
npm run preview
```

## ☁️ Déploiement

### Vercel
1. Créez un compte sur [vercel.com](https://vercel.com) et connectez votre dépôt Git
   (GitHub/GitLab/Bitbucket) contenant ce projet.
2. Vercel détecte automatiquement Vite : Build Command `npm run build`, Output
   Directory `dist`. Cliquez sur **Deploy**.
3. Le fichier `vercel.json` inclus gère déjà la redirection SPA (React Router).

### Netlify
1. Sur [netlify.com](https://netlify.com), choisissez **Add new site → Import an
   existing project** et sélectionnez votre dépôt.
2. Build command : `npm run build` — Publish directory : `dist`.
3. Le fichier `netlify.toml` (et `public/_redirects`) gèrent déjà les redirections SPA.

### GitHub Pages
1. Ajoutez `"homepage": "https://<user>.github.io/<repo>"` dans `package.json`.
2. Installez `gh-pages` : `npm install gh-pages --save-dev`.
3. Ajoutez dans `package.json` :
   ```json
   "scripts": { "deploy": "vite build && gh-pages -d dist" }
   ```
4. Exécutez `npm run deploy`.
   > Pensez à définir `base: '/<repo>/'` dans `vite.config.js` si le site n'est pas
   > servi à la racine du domaine.

### Hostinger (hébergement mutualisé)
1. Générez le build : `npm run build`.
2. Connectez-vous à votre espace Hostinger (hPanel → Gestionnaire de fichiers ou FTP).
3. Copiez **tout le contenu** du dossier `dist/` (et non le dossier lui-même) dans
   `public_html/` (ou le sous-dossier de votre domaine).
4. Comme il s'agit d'une Single Page Application, ajoutez un fichier `.htaccess` à la
   racine de `public_html/` avec :
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## ✅ Fonctionnalités incluses

- 8 pages : Accueil, À propos, Services, Réalisations, Pourquoi nous, Blog (+ articles),
  FAQ, Contact
- Mode sombre persistant (localStorage)
- Galerie filtrable par catégorie
- Formulaire de contact / devis avec validation
- Bouton WhatsApp flottant + bouton retour en haut
- Animations d'apparition au scroll (Framer Motion)
- SEO : balises meta, Open Graph, données structurées, sitemap.xml, robots.txt
- Design 100% responsive (mobile / tablette / desktop)

## 🔌 Prochaines étapes recommandées

- Connecter `ContactForm.jsx` à un service d'envoi réel (Formspree, EmailJS, ou API
  backend interne) — actuellement la soumission est simulée côté client.
- Remplacer le numéro WhatsApp placeholder dans `WhatsAppButton.jsx`.
- Mettre à jour l'adresse dans `MapEmbed.jsx` et les coordonnées dans `Footer.jsx` /
  `Contact.jsx`.
