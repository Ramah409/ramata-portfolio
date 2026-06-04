import { motion, useInView } from 'motion/react';
import {
  Briefcase,
  Code2,
  Database,
  Monitor,
  Palette,
  ServerCog,
  Store,
  type LucideIcon,
} from 'lucide-react';
import { useRef } from 'react';
import { Button } from '../components/ui/button';

type SkillCard = {
  icon: LucideIcon;
  title: string;
  content: string;
  description: string;
};

const skills: SkillCard[] = [
  {
    icon: Store,
    title: 'CMS et création de site',
    content: 'WordPress, WooCommerce, Elementor, Woodmart',
    description:
      "Je crée et personnalise des sites WordPress sur mesure pour présenter une activité, une marque ou une boutique en ligne.",
  },
  {
    icon: Palette,
    title: 'Identité visuelle et maquettes',
    content: 'Canva, Figma',
    description:
      "J’utilise Figma et Canva pour créer des visuels, organiser les idées et donner au projet une identité qui attire l’œil dès les premières secondes.",
  },
  {
    icon: Monitor,
    title: 'Interface web',
    content: 'HTML, CSS, JavaScript',
    description:
      "Une base solide pour construire des pages lisibles, harmonieuses et faciles à utiliser.",
  },
  {
    icon: Code2,
    title: 'Front-end',
    content: 'Angular 19, TypeScript',
    description:
      "J’utilise Angular pour organiser l’interface en composants, gérer la navigation et rendre l’expérience plus fluide.",
  },
  {
    icon: ServerCog,
    title: 'Back-end',
    content: 'Java, Spring Boot',
    description:
      "Je développe des fonctionnalités côté serveur : authentification, règles métier, sécurité et échanges avec le front-end.",
  },
  {
    icon: Database,
    title: 'Bases de données',
    content: 'PostgreSQL, pgAdmin',
    description:
      "Je structure et vérifie les données nécessaires au fonctionnement d’un site : comptes utilisateurs, contenus, informations enregistrées et contraintes en base.",
  },
  {
    icon: Briefcase,
    title: 'Bureautique',
    content: 'Pack Office',
    description:
      "Organisation des informations, création de documents clairs et suivi simple d’un projet.",
  },
];

const workTools = [
  'Visual Studio Code',
  'Git',
  'GitHub',
  'Postman',
  'PgAdmin4',
  'Figma',
  'Canva',
  'Docker',
  'Render',
  'Netlify',
];

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-4 md:px-8 bg-[var(--portfolio-bg-alt)] relative overflow-hidden"
    >
      {/* Elements decoratifs de fond */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[var(--portfolio-glow)] rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[var(--portfolio-glow)] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-black relative inline-block">
            Mes compétences techniques
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-black" />
          </h2>
          <p className="text-base md:text-lg text-black mt-8 max-w-3xl mx-auto">
            Mes compétences couvrent le front-end, le back-end, les bases de données, le CMS et les
            outils qui m’aident à concevoir, tester et organiser mes projets web.
          </p>
        </motion.div>

        {/* Grille des competences */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-4 border-black p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[var(--portfolio-accent)] border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-black" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg mb-1 text-black">{skill.title}</h3>
                    <p className="text-sm text-[var(--portfolio-accent-dark)]">{skill.content}</p>
                  </div>
                </div>
                <p className="text-black text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Environnement de travail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white border-4 border-black p-8 mb-8 relative transform -rotate-1"
        >
          {/* Ruban decoratif */}
          <div className="absolute -top-3 left-12 w-20 h-6 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform -rotate-6" />
          <div className="absolute -top-3 right-12 w-20 h-6 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform rotate-6" />

          <h3 className="text-xl mb-4 text-black text-center">Environnement de travail</h3>
          <p className="text-center text-black max-w-3xl mx-auto mb-6">
            Ces outils m’accompagnent dans le développement, les tests, la gestion des données et la
            préparation de mes projets web à la mise en ligne.
          </p>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {workTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-[var(--portfolio-soft)] border-2 border-black text-sm text-black"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Appel a l'action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center"
        >
          <a href="#portfolio">
            <Button
              size="lg"
              className="bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent-dark)] hover:text-white text-black border-4 border-black shadow-lg text-base px-6 py-5 transform hover:scale-105 transition-all"
            >
              Explorer mes projets →
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
