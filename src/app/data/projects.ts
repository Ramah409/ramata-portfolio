import ecommerceLogo from '../../assets/LOGO.png';
import soramtfrLogo from '../../assets/soramtfr logo.png';
import staticInterfaceImage from '../../assets/Interface statique.png';
import traceProjectImage from '../../assets/image.png';


export type PortfolioProject = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  demoUrl?: string;
  demoLabel?: string;
  repoUrl?: string;
  rotation: number;
  status: string;
  coverFrom: string;
  coverTo: string;
  objectifs: string[];
  pointsCles: string[];
};

export const projects: PortfolioProject[] = [

  {
    id: "SITE E-COMMERCE",
    title: "Projet e-commerce",
    subtitle: "Site web full-stack",
    description:
      "Un site e-commerce complet avec inscription, connexion, gestion des utilisateurs, catalogue produits et espace administrateur. Le projet repose sur un front-end Angular, une API Spring Boot sécurisée et une base de données PostgreSQL.",
    stack: ["Angular 19", "TypeScript", "HTML", "CSS", "Spring Boot","Java 21","Spring Security","JWT","BCrypt","PostgreSQL"],
    image: ecommerceLogo,
    imageAlt: "Logo du projet e-commerce",
    demoUrl: "https://soramtfr-projet.netlify.app",
    repoUrl: "https://github.com/Ramah409",
    rotation: 1,
    status: "PROJET FULL-STACK FINALISÉ",
    coverFrom: "#edf7ea",
    coverTo: "#9bc48f",
    objectifs: [
      "Créer un site e-commerce clair pour présenter des produits d’autodéfense légaux et responsables.",
      "Mettre en place un parcours utilisateur complet : inscription, connexion, catalogue, recherche, panier, favoris et profil.",
      "Relier le front-end Angular à une API Spring Boot avec une base de données PostgreSQL.",
    ],
    pointsCles: [
      "Site full-stack finalisé avec séparation front-end / back-end.",
      "Authentification sécurisée avec JWT, BCrypt et gestion des rôles.",
      "Projet testé avec Postman et vérifié avec PgAdmin.",
      "Déploiement travaillé avec GitHub, Render et Netlify.",
    ],
  },
  {
    id: "Boutique e-commerce – Soramtfr",
    title: "Création d’une boutique en ligne pour une marque",
    subtitle: "Création d’une boutique en ligne",
    description:
      "Création d’une boutique en ligne pour Soramtfr, pensée autour d’un univers doux, discret et élégant. Le site met en avant les collections, l’identité de la marque et un parcours simple pour découvrir les pièces, consulter les produits et accéder au panier.",
    stack: ["WordPress", "WooCommerce", "Elementor", "Woodmart","Stripe","PayPal", "Tidio Chat","Packlink"],
    image: soramtfrLogo,
    imageAlt: "Logo du projet WordPress",
    demoUrl: "https://www.soramtfr.com/",
    rotation: -1,
    status: "Projet CMS",
    coverFrom: "#e8f4eb",
    coverTo: "#89b497",
    objectifs: [
      "Créer une boutique en ligne avec WordPress et WooCommerce.",
      "Organiser les produits, les pages et la navigation.",
      "Personnaliser l’identité visuelle et l’expérience d’achat.",
    ],
    pointsCles: [
      "Boutique construite avec WordPress et WooCommerce.",
      "Mise en page personnalisée avec Elementor et WoodMart.",
      "Gestion des produits, paiements, formulaires, cookies et maintenance.",
    ],
  },
  {
    id: "PROJET FRONT-END",
    title: "Interface e-commerce statique",
    subtitle: "Site de montres et accessoires",
    description:
      "Une interface e-commerce statique réalisée en HTML, CSS et JavaScript pour présenter l’univers d’une marque de montres. Le projet met l’accent sur la mise en page, le visuel d’accueil, les catégories produits et l’intégration d’un design inspiré d’une boutique en ligne.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: staticInterfaceImage,
    imageAlt: "Capture du projet interface e-commerce statique",
    demoUrl: "file:///Users/ramah/Downloads/Mes%20projet/Test%20fronted%20Easy%20Tech%202/index.html",
    repoUrl: "",
    rotation: -2,
    status: "Projet front-end",
    coverFrom: "#eef7e8",
    coverTo: "#bfd99a",
    objectifs: [
      "Construire une page d’accueil inspirée d’une boutique en ligne.",
      "Travailler la structure HTML, la mise en forme CSS et les effets JavaScript.",
      "Mettre en valeur une marque de montres avec une présentation claire et visuelle.",
    ],
    pointsCles: [
      "Interface statique centrée sur l’intégration front-end.",
      "Univers visuel autour des montres, bijoux et accessoires.",
      "Header, visuel principal, catégories et mise en page e-commerce.",
    ],
  },
  {
    id: "PROJET EN COURS",
    title: "Projet en cours",
    subtitle: "Plateforme de suivi professionnel",
    description:
      "Trace est un projet de plateforme web actuellement en phase d’étude et de conception. Son objectif est d’aider les candidats, étudiants et alternants à centraliser le suivi de leurs candidatures, entretiens et échanges avec les entreprises.",
    stack: ["React", "TypeScript", "Node.js", "Express","PostgreSQL","Prisma"],
    image: traceProjectImage,
    imageAlt: "Capture du projet Trace",
    demoUrl: "/documents/trace-concept.pdf",
    demoLabel: "Découvrir le concept",
    repoUrl: "",
    rotation: -2,
    status: "Projet en cours",
    coverFrom: "#edf7ee",
    coverTo: "#a8c8a0",
    objectifs: [
      "Centraliser le suivi des candidatures, entretiens et relances.",
      "Conserver un historique des démarches professionnelles.",
      "Étudier la mise en place d’indicateurs liés aux pratiques de recrutement et au suivi des candidatures.",
    ],
    pointsCles: [
      "Projet actuellement en phase d’étude de marché et de conception.",
      "Réflexion autour d’un espace candidat dédié au suivi des démarches professionnelles.",
      "Réflexion autour d’un espace entreprise permettant de compléter certaines informations.",
      "Tableau de bord envisagé pour visualiser les candidatures et les retours reçus.",
    ],
  },
  
];

export const projectsById: Record<string, PortfolioProject> =
  Object.fromEntries(
    projects.map((project) => [project.id, project]),
  ) as Record<string, PortfolioProject>;
