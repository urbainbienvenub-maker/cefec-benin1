// Chiffres clés affichés sur la page d'accueil
export const stats = [
  { value: '10+', label: "Années d'expertise cumulée" },
  { value: '250+', label: 'Projets réalisés' },
  { value: '98%', label: 'Clients satisfaits' },
  { value: '24/7', label: 'Astreinte technique' }
]

// Étapes du processus d'intervention CEFEC
export const process = [
  {
    title: 'Prise de contact',
    description: "Vous nous exposez votre besoin par téléphone, WhatsApp ou via le formulaire de devis en ligne."
  },
  {
    title: 'Diagnostic sur site',
    description: "Un technicien se déplace pour évaluer précisément votre installation et vos contraintes."
  },
  {
    title: 'Proposition technique',
    description: "Nous vous remettons un devis détaillé avec solution technique, délais et garanties."
  },
  {
    title: 'Réalisation',
    description: "Notre équipe qualifiée installe ou intervient dans le respect des normes et délais convenus."
  },
  {
    title: 'Suivi & maintenance',
    description: "Un contrat de suivi est proposé pour garantir la performance durable de vos équipements."
  }
]

// Avis clients
export const testimonials = [
  {
    name: 'Fabrice A.',
    role: 'Gérant, Supermarché — Cotonou',
    quote: "CEFEC a entièrement repensé notre chaîne du froid. Depuis, plus aucune rupture et une facture d'électricité en nette baisse.",
    rating: 5
  },
  {
    name: 'Marie-Claire H.',
    role: 'Directrice d\'hôtel — Porto-Novo',
    quote: "Installation solaire livrée dans les délais, équipe sérieuse et disponible même après la mise en service.",
    rating: 5
  },
  {
    name: 'Ibrahim S.',
    role: 'Responsable technique, Usine agroalimentaire',
    quote: "L'audit énergétique de CEFEC nous a permis d'identifier des économies concrètes que nous n'avions pas anticipées.",
    rating: 5
  },
  {
    name: 'Solange D.',
    role: 'Particulier — Calavi',
    quote: "Dépannage climatisation en moins de deux heures un samedi. Rapidité et professionnalisme au rendez-vous.",
    rating: 4
  }
]

// Partenaires / marques travaillées (placeholders textuels, à remplacer par vrais logos)
export const partners = [
  'Daikin', 'Schneider Electric', 'Carrier', 'Mitsubishi Electric', 'Legrand', 'Victron Energy'
]

// FAQ
export const faqs = [
  {
    question: "Quelles zones géographiques couvrez-vous au Bénin ?",
    answer: "Nous intervenons sur l'ensemble du territoire béninois, avec une présence renforcée à Cotonou, Porto-Novo, Calavi et Parakou. Pour les autres localités, contactez-nous pour valider la faisabilité et les délais d'intervention."
  },
  {
    question: "Proposez-vous des contrats de maintenance préventive ?",
    answer: "Oui. Nous proposons des contrats annuels ou semestriels adaptés à vos équipements (climatisation, froid, installations solaires) incluant visites planifiées, diagnostic et priorité d'intervention en cas de panne."
  },
  {
    question: "Combien de temps faut-il pour obtenir un devis ?",
    answer: "Pour la majorité des demandes, un devis préliminaire est transmis sous 48h après le diagnostic. Les projets complexes (audit énergétique, installations industrielles) nécessitent une étude plus approfondie."
  },
  {
    question: "Travaillez-vous avec des particuliers et des entreprises ?",
    answer: "Les deux. Nos équipes accompagnent aussi bien les particuliers pour une climatisation résidentielle que les entreprises et industries pour des projets de froid commercial, d'électricité ou d'énergie solaire à grande échelle."
  },
  {
    question: "Quelles garanties offrez-vous sur vos installations ?",
    answer: "Toutes nos installations bénéficient d'une garantie pièces et main d'œuvre dont la durée est précisée dans chaque devis, en complément des garanties constructeur des équipements posés."
  },
  {
    question: "Puis-je financer une installation solaire en plusieurs fois ?",
    answer: "Nous étudions au cas par cas des solutions de paiement échelonné pour les projets solaires. Contactez notre équipe commerciale pour évaluer les options disponibles."
  }
]

// Articles de blog (contenu de démonstration)
export const blogPosts = [
  {
    slug: 'choisir-climatiseur-adapte-climat-beninois',
    title: 'Comment choisir un climatiseur adapté au climat béninois',
    excerpt: "Puissance, type de fluide frigorigène, classe énergétique : les critères essentiels avant d'investir dans une climatisation performante et durable.",
    date: '2026-05-12',
    category: 'Climatisation',
    readTime: '5 min'
  },
  {
    slug: 'energie-solaire-entreprises-benin',
    title: "Énergie solaire : pourquoi les entreprises béninoises passent au photovoltaïque",
    excerpt: "Réduction des coûts, indépendance énergétique et image de marque : les raisons qui poussent de plus en plus d'entreprises à investir dans le solaire.",
    date: '2026-04-03',
    category: 'Énergie Solaire',
    readTime: '6 min'
  },
  {
    slug: 'entretien-preventif-chambre-froide',
    title: "5 gestes d'entretien préventif pour prolonger la vie de votre chambre froide",
    excerpt: "Un entretien régulier permet d'éviter les pannes coûteuses. Voici les vérifications essentielles à intégrer dans votre routine.",
    date: '2026-03-18',
    category: 'Maintenance',
    readTime: '4 min'
  },
  {
    slug: 'audit-energetique-etapes-cles',
    title: "Audit énergétique : les étapes clés d'un diagnostic réussi",
    excerpt: "De la collecte de données au plan d'action, découvrez comment se déroule un audit énergétique professionnel et ce qu'il peut révéler.",
    date: '2026-02-22',
    category: 'Audit',
    readTime: '7 min'
  }
]

// Galerie de réalisations — catégories utilisées pour le filtre
export const galleryItems = [
  { id: 1, category: 'Climatisation', title: 'Climatisation centrale — Immeuble tertiaire' },
  { id: 2, category: 'Solaire', title: 'Centrale solaire toiture — 40 kWc' },
  { id: 3, category: 'Froid', title: 'Chambre froide négative — Agroalimentaire' },
  { id: 4, category: 'Électricité', title: 'Tableau électrique industriel' },
  { id: 5, category: 'Climatisation', title: 'VRV multi-split — Hôtel' },
  { id: 6, category: 'Solaire', title: 'Kit solaire résidentiel hybride' },
  { id: 7, category: 'Maintenance', title: "Visite de maintenance préventive" },
  { id: 8, category: 'Froid', title: 'Vitrine réfrigérée — Supermarché' },
  { id: 9, category: 'Électricité', title: 'Éclairage professionnel — Entrepôt' }
]
