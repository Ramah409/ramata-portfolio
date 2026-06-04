import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { projects } from '../data/projects';

interface ProjectsSectionProps {
  onProjectClick: (projectId: string) => void;
}

export function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="portfolio"
      ref={ref}
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-[var(--portfolio-bg)] to-[var(--portfolio-bg-alt)] relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl mb-4 text-black relative inline-block">
            Mes réalisations web
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[var(--portfolio-accent)]" />
          </h2>
          <p className="text-base md:text-lg text-black mt-8 max-w-3xl mx-auto">
            Chaque projet m’a permis de développer ma logique, mon sens du détail et ma capacité à créer des interfaces claires.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="cursor-pointer group"
              onClick={() => onProjectClick(project.id)}
            >
              <div
                className="relative bg-white p-6 border-4 border-black shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ transform: `rotate(${project.rotation}deg)` }}
              >
                {/* Ruban decoratif */}
                <div className="absolute -top-3 right-8 w-20 h-6 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform -rotate-12" />
                
                {/* Couverture textuelle du projet */}
                <div
                  className="aspect-[4/3] border-2 border-black mb-4 overflow-hidden relative"
                  style={{
                    background: `linear-gradient(135deg, ${project.coverFrom} 0%, ${project.coverTo} 100%)`,
                  }}
                >
                  {project.image ? (
                    <div className="w-full h-full bg-white flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.imageAlt ?? project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_top_left,_white_0%,_transparent_45%)]" />
                      <div className="relative h-full flex flex-col justify-between p-5">
                        <span className="w-fit px-3 py-1 bg-white/80 border-2 border-black text-xs text-black uppercase tracking-[0.18em]">
                          {project.status}
                        </span>
                        <div className="space-y-2">
                          <p className="text-sm uppercase tracking-[0.18em] text-black/70">
                            {project.subtitle}
                          </p>
                          <h3 className="text-xl md:text-2xl text-black leading-tight">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Informations du projet */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl text-black mb-1">{project.title}</h3>
                    <p className="text-[var(--portfolio-accent-dark)]">{project.subtitle}</p>
                  </div>
                  
                  <p className="text-black text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Etiquettes */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[var(--portfolio-soft)] border-2 border-black text-xs text-black transform hover:rotate-3 transition-transform"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.demoUrl || project.repoUrl) && (
                    <div className="flex flex-wrap gap-3 pt-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="px-3 py-2 bg-[var(--portfolio-accent-dark)] text-white text-sm border-2 border-black hover:bg-[var(--portfolio-accent)] hover:text-black transition-colors"
                        >
                          {project.demoLabel || 'Voir le projet'}
                        </a>
                      )}

                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(event) => event.stopPropagation()}
                          className="px-3 py-2 bg-[var(--portfolio-soft)] text-black text-sm border-2 border-black hover:bg-[var(--portfolio-accent-mint)] transition-colors"
                        >
                          Voir le code
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Indicateur de clic */}
                <div className="mt-4 pt-4 border-t-2 border-black text-center">
                  <span className="text-sm text-black group-hover:underline">
                    Cliquer pour voir le projet →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
