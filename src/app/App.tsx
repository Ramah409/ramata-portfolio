import { useState } from 'react';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { TechMarquee } from './sections/TechMarquee';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ContactSection } from './sections/ContactSection';
import { SiteFooter } from './sections/SiteFooter';
import { ProjectDetailsModal } from './modals/ProjectDetailsModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="bg-[var(--portfolio-bg)] min-h-screen">
      <HeroSection />
      <AboutSection />
      <TechMarquee />
      <ProjectsSection onProjectClick={setSelectedProject} />
      <SkillsSection />
      <ContactSection />
      <SiteFooter />
      
      {/* Affiche la fiche detaillee du projet selectionne. */}
      {selectedProject && (
        <ProjectDetailsModal 
          projectId={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}
