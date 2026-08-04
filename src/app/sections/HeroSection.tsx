import { motion } from 'motion/react';
import { Sparkles, Star } from 'lucide-react';
import ramataPhoto from 'figma:asset/Portrait Ramata.png';
import { Button } from '../components/ui/button';

const focusAreas = ['Disponible immédiatement', 'Basée en Île-de-France', 'Sur site ou à distance', 'Permis B · véhiculée'];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[var(--portfolio-bg)] via-[var(--portfolio-bg-alt)] to-[var(--portfolio-bg)]"
    >
      {/* Elements decoratifs */}
      <motion.div
        className="absolute top-20 left-10 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <Star size={80} className="text-[var(--portfolio-accent-dark)]" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-20 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <Sparkles size={60} className="text-[var(--portfolio-accent)]" />
      </motion.div>

      {/* Petites decorations de fond */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[var(--portfolio-accent)] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Contenu principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/85 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-2xl border-4 border-black"
          style={{ transform: 'rotate(-1deg)' }}
        >
          {/* Rubans decoratifs */}
          <div className="absolute -top-4 left-1/4 w-24 h-8 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform -rotate-12 shadow-sm" />
          <div className="absolute -top-4 right-1/4 w-24 h-8 bg-[var(--portfolio-tape)] border border-[var(--portfolio-tape-border)] transform rotate-12 shadow-sm" />

          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1
              className="text-2xl md:text-4xl mb-4 text-black"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              Ramata SISSOKO
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl text-[var(--portfolio-accent-dark)] tracking-wide">
              Développeuse web full stack
            </p>

            <div className="inline-block bg-[var(--portfolio-soft)] border-2 border-black px-6 py-3 transform rotate-1">
              <p className="text-base text-black italic">
                Disponible pour une opportunité professionnelle, un site vitrine, une boutique e-commerce ou une refonte.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white border-2 border-black text-sm text-black"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
              <a href="#portfolio">
                <Button
                  size="lg"
                  className="bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent-dark)] hover:text-white text-black border-4 border-black"
                >
                  Voir mes projets
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white text-black border-4 border-black"
                >
                  Me contacter pour un projet
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Signature visuelle */}
          <motion.div
            className="mt-8 flex justify-center"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-44 md:w-52 aspect-[3/5] bg-white border-4 border-black shadow-lg rounded-[1.75rem] overflow-hidden">
              <img
                src={ramataPhoto}
                alt="Photo de Ramata SISSOKO"
                className="w-full h-full rounded-[1.5rem] object-cover object-center bg-[var(--portfolio-photo-bg)]"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
