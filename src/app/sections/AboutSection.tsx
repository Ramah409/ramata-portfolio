import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { BadgeCheck, GraduationCap, Heart } from 'lucide-react';
import ramataPhoto from 'figma:asset/Portrait Ramata.png';
import { useRef } from 'react';
import { trackEvent } from '../lib/analytics';

const formationItems = [
 
  {
    title: 'Conceptrice Développeuse d’Application - Bac+3',
    details: '2025 - 2026 DesCoDeuses à Paris Formation intensive',
  },
  {
    title: 'Certification CMS : WordPress, Web : Interface',
    details: 'Depuis 2025 Konexio-Simplon',
  },
  {
    title: 'BTS Gestion de la PME',
    details: 'De 2023 à 2024 Lycée Voillaume à Aulnay-sous-Bois',
  },
  {
    title: 'Bac Professionnel ARCU',
    details: 'De 2020 à 2021 Lycée Arthur Rimbaud - La Courneuve',
  },
];

type ProfileHighlight = {
  icon: typeof BadgeCheck | typeof Heart;
  title: string;
  items?: string[];
  text?: string;
};

const profileHighlights: ProfileHighlight[] = [
  {
    icon: BadgeCheck,
    title: 'SAVOIR-ÊTRE',
    items: ['Souci du détail', 'Adaptabilité', 'Autonomie',],
  },
  
  {
    icon: Heart,
    title: 'CENTRES D’INTÉRÊT',
    items: ['Voyages', 'Pâtisserie', 'Couture']
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 md:px-8 bg-[var(--portfolio-bg)] relative overflow-hidden"
    >
      {/* Texture de fond */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1706790608211-4c03fd4f4d33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMHRleHR1cmUlMjB2aW50YWdlfGVufDF8fHx8MTc2Mjk3MTQ0Mnww&ixlib=rb-4.1.0&q=80&w=1080)',
          backgroundSize: 'cover',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl mb-12 text-center text-black relative inline-block left-1/2 transform -translate-x-1/2">
            À propos de moi
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--portfolio-accent)]" />
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Carte profil */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white p-8 border-4 border-black shadow-xl transform -rotate-2">
              {/* Coin en ruban adhesif */}
              <div className="absolute -top-3 -left-3 w-16 h-8 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform rotate-45" />

              <div className="aspect-square bg-[var(--portfolio-soft)] border-2 border-black rounded-lg flex flex-col items-center justify-center relative overflow-hidden p-6">
                <div className="w-full max-w-[17rem] aspect-[3/5] border-4 border-black bg-white shadow-lg rounded-[1.75rem] overflow-hidden p-2">
                  <img
                    src={ramataPhoto}
                    alt="Photo de Ramata SISSOKO"
                    className="w-full h-full object-contain rounded-[1.1rem] bg-[var(--portfolio-photo-bg)]"
                  />
                </div>

                <div className="absolute top-4 left-4 text-2xl">💻</div>
                <div className="absolute bottom-4 right-4 text-2xl">✨</div>
                <div className="absolute top-4 right-4 text-2xl">🚀</div>

                <div className="mt-6 text-center">
                  <p className="text-lg text-black">Ramata SISSOKO</p>
                  <div className="mt-2 flex flex-col items-center gap-2">
                    <a
                      href="https://github.com/Ramah409?tab=repositories"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent('github_profile_click', {
                          destination: 'github',
                          section: 'about',
                        })
                      }
                      className="inline-block text-sm text-black/70 uppercase tracking-[0.25em] hover:text-black"
                    >
                      Voir mon GitHub
                    </a>
                    <a
                      href="/documents/ramata-cv.pdf"
                      target="_blank"
                      rel="noreferrer"
                      onClick={() =>
                        trackEvent('cv_view_click', {
                          destination: 'cv',
                          section: 'about',
                        })
                      }
                      className="inline-block text-sm text-black/70 uppercase tracking-[0.25em] hover:text-black"
                    >
                      Voir mon CV
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center bg-[var(--portfolio-soft)] border-2 border-black p-3">
                <p className="text-sm text-black italic">
                  Développeuse web full stack · disponible immédiatement
                </p>
              </div>
            </div>
          </motion.div>

          {/* Texte de presentation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 border-4 border-black shadow-lg transform rotate-1 relative">
              {/* Ruban decoratif */}
              <div className="absolute -top-2 right-12 w-20 h-6 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform -rotate-6" />

              <p className="text-lg text-black leading-relaxed mb-4">
                Mon parcours ne commence pas directement par le <strong>code.</strong>
                <br></br>
                Avant de me réorienter vers le développement web,
                j’ai suivi un BTS Gestion de la PME afin de mieux comprendre l’organisation d’une entreprise, le suivi administratif et la relation client.
              </p>

              <p className="text-lg text-black leading-relaxed mb-4">
                Après avoir été formée chez DesCoDeuses en tant que  <strong> conceptrice développeuse d’applications web </strong>, 
                j’ai confirmé mon intérêt pour la création de sites modernes, clairs et utiles.
                Aujourd’hui, je construis mon parcours professionnel dans le <strong> développement web full stack </strong>, 
                Je recherche une première opportunité en entreprise, tout en restant ouverte aux projets web adaptés à mes compétences.
                
              </p>

              <div className="mt-6 p-4 bg-[var(--portfolio-soft)] border-2 border-black transform -rotate-1">
                <p className="text-black italic">
                  Créer des interfaces claires, utiles et bien pensées.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white border-4 border-black p-5 shadow-lg">
                <GraduationCap className="text-black mb-3" size={24} />
                <p className="text-sm uppercase tracking-[0.2em] text-black/60 mb-4">
                  PARCOURS DE FORMATION
                </p>

                <div className="space-y-4">
                  {formationItems.map((item, index) => (
                    <div
                      key={item.title}
                      className={
                        index === formationItems.length - 1
                          ? 'border-l-4 border-[var(--portfolio-accent)] pl-4'
                          : 'border-l-4 border-[var(--portfolio-accent)] pl-4 pb-4 border-b border-black/10'
                      }
                    >
                      <p className="text-base md:text-lg text-black">
                        {item.title}
                      </p>
                      <p className="text-sm text-black/70 mt-1">
                        {item.details}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

               
              <div className="grid gap-4 sm:grid-cols-2">
              {profileHighlights.map((item) => {
  const Icon = item.icon;
  return (
    <div
      key={item.title}
      className="bg-white border-4 border-black p-4 shadow-lg"
    >
      <Icon className="text-black mb-3" size={24} />
      <p className="text-sm uppercase tracking-[0.2em] text-black/60 mb-2">
        {item.title}
      </p>

      {item.items ? (
        <div className="space-y-1 text-sm text-black">
          {item.items.map((value) => (
            <p key={value}>{value}</p>
          ))}
        </div>
      ) : (
        <p className="text-sm text-black">{item.text}</p>
      )}
    </div>
  );
})}
              </div>
            </div>

            {/* Competences mises en avant */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-[var(--portfolio-accent-mint)] p-6 border-4 border-black shadow-lg transform -rotate-2"
            >
              <p className="text-black mb-4">
                <span className="text-xl">💡</span> Voici les principaux
                langages que j’utilise pour développer mes projets web.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
