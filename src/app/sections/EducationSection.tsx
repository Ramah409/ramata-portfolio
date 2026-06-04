import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';
import { useRef } from 'react';

const formations = [
  {
    icon: GraduationCap,
    title: 'Bachelor Développeur Web – Année 2',
    details: '2026-2027 HETIC Bachelor Développeur Web – Année 2',
  },
  {
    icon: GraduationCap,
    title: 'Conceptrice Développeuse d’Application - Bac+3',
    details: '2025 – 2026 DesCoDeuses à Paris Formation intensive',
  },
  {
    icon: Award,
    title: 'Certification CMS : WordPress, Web : Interface',
    details: 'Depuis 2025 Konexio-Simplon',
  },
  {
    icon: GraduationCap,
    title: 'BTS Gestion de la PME',
    details: 'De 2023 à 2024 Lycée Voillaume à Aulnay-sous-bois',
  },
  {
    icon: GraduationCap,
    title: 'Bac Professionnel ARCU',
    details: 'De 2020 à 2021 Lycée Arthur Rimbaud - La Courneuve',
  },
];

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="parcours"
      ref={ref}
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-[var(--portfolio-bg-alt)] to-[var(--portfolio-bg)] relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-black relative inline-block">
            Parcours de formation
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--portfolio-accent)]" />
          </h2>
          <p className="text-base md:text-lg text-black mt-8">
            Mes formations, de la plus recente a la plus ancienne.
          </p>
        </motion.div>

        {/* Liste des formations */}
        <div className="max-w-4xl mx-auto bg-white border-4 border-black shadow-xl p-6 md:p-8">
          {formations.map((formation, index) => {
            const Icon = formation.icon;
            return (
              <motion.div
                key={formation.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={index === formations.length - 1 ? 'relative' : 'relative border-b-2 border-black/10 pb-6 mb-6'}
              >
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 bg-[var(--portfolio-soft)] border-2 border-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={24} className="text-black" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl text-black mb-2">
                      {formation.title}
                    </h3>
                    <p className="text-black leading-relaxed">
                      {formation.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
