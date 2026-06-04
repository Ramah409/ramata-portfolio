import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';
import { projectsById } from '../data/projects';

interface ProjectDetailsModalProps {
  projectId: string;
  onClose: () => void;
}

export function ProjectDetailsModal({
  projectId,
  onClose,
}: ProjectDetailsModalProps) {
  const project = projectsById[projectId];

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/70 z-50 overflow-y-auto"
        onClick={onClose}
      >
        <div className="min-h-screen px-4 py-12 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[var(--portfolio-bg)] border-4 border-black shadow-2xl max-w-4xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Bouton de fermeture */}
            <button
              onClick={onClose}
              aria-label="Fermer le projet"
              className="absolute -top-4 -right-4 w-12 h-12 bg-[var(--portfolio-accent)] border-4 border-black rounded-full flex items-center justify-center hover:bg-[var(--portfolio-accent-dark)] hover:text-white transition-colors z-10 shadow-lg"
            >
              <X size={24} className="text-black" />
            </button>

            {/* Ruban decoratif */}
            <div className="absolute -top-3 left-1/4 w-24 h-8 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform -rotate-12" />

            <div className="p-8 md:p-12 max-h-[80vh] overflow-y-auto">
              {/* En-tete */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl mb-2 text-black">{project.title}</h2>
                <p className="text-lg text-[var(--portfolio-accent-dark)] mb-4">{project.subtitle}</p>
                <div className="w-24 h-1 bg-black" />
              </div>

              {/* Description */}
              <div className="bg-white border-4 border-black p-6 mb-8 transform -rotate-1">
                <p className="text-base md:text-lg text-black leading-relaxed">{project.description}</p>
              </div>

              {/* Resume visuel du projet */}
              <div
                className="border-4 border-black mb-8 p-6"
                style={{
                  background: `linear-gradient(135deg, ${project.coverFrom} 0%, ${project.coverTo} 100%)`,
                }}
              >
                {project.image ? (
                  <div className="bg-white border-2 border-black overflow-hidden min-h-[18rem]">
                    <img
                      src={project.image}
                      alt={project.imageAlt ?? project.title}
                      className="w-full h-full min-h-[18rem] max-h-[26rem] object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.18em] text-black/70 mb-2">
                        {project.status}
                      </p>
                      <h3 className="text-xl md:text-2xl text-black">{project.title}</h3>
                      <p className="text-black/80 mt-2">{project.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 bg-white/80 border-2 border-black text-xs text-black"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="grid gap-8 lg:grid-cols-2">
                {/* Objectifs */}
                <div>
                  <h3 className="text-xl mb-4 text-black">Objectifs</h3>
                  <div className="bg-[var(--portfolio-soft)] border-4 border-black p-6">
                    <ul className="space-y-3">
                      {project.objectifs.map((objectif, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-[var(--portfolio-accent)] border-2 border-black rounded-full flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span className="text-black pt-1">{objectif}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Points cles */}
                <div>
                  <h3 className="text-xl mb-4 text-black">Points cles</h3>
                  <div className="bg-white border-4 border-black p-6">
                    <ul className="space-y-3">
                      {project.pointsCles.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[var(--portfolio-accent-dark)]">★</span>
                          <span className="text-black">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {(project.demoUrl || project.repoUrl) && (
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-[var(--portfolio-accent-dark)] text-white border-2 border-black hover:bg-[var(--portfolio-accent)] hover:text-black transition-colors"
                    >
                      <ExternalLink size={18} />
                      {project.demoLabel || 'Voir le projet'}
                    </a>
                  )}

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-[var(--portfolio-soft)] text-black border-2 border-black hover:bg-[var(--portfolio-accent-mint)] transition-colors"
                    >
                      <Github size={18} />
                      Voir le code
                    </a>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
