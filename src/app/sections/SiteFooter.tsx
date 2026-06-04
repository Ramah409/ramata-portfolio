import { Heart } from 'lucide-react';
import ramataPhoto from 'figma:asset/Portrait Ramata.png';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f5a32] text-white py-12 px-4 relative overflow-hidden">
      {/* Elements decoratifs */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#8fcd48]" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Signature */}
          <div className="text-center md:text-left">
            <p className="text-lg mb-2">© {currentYear} Ramata SISSOKO</p>
            <p className="text-[#8fcd48]">Développeuse web full stack</p>
          </div>

          {/* Monogramme */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-14 bg-white border-2 border-white rounded-xl overflow-hidden p-1">
              <img
                src={ramataPhoto}
                alt="Photo de Ramata SISSOKO"
                className="w-full h-full object-contain rounded-lg bg-[#e5f4e7]"
              />
            </div>
            <div>
              <p className="text-sm">Opportunités professionnelles </p>
              <div className="flex items-center gap-1 text-[#8fcd48] text-sm">
                <Heart size={12} fill="currentColor" />
                <span> Sites web sur mesure</span>
              </div>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#about" className="hover:text-[#8fcd48] transition-colors">
              Profil
            </a>
            <span className="text-[#8fcd48]">•</span>
            <a href="#portfolio" className="hover:text-[#8fcd48] transition-colors">
              Projets
            </a>
            <span className="text-[#8fcd48]">•</span>
            <a href="#skills" className="hover:text-[#8fcd48] transition-colors">
              Competences
            </a>
            <span className="text-[#8fcd48]">•</span>
            <a href="#contact" className="hover:text-[#8fcd48] transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Note finale */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-[#8fcd48] italic">
            Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
