/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Map } from './components/Map';
import { HUD } from './components/HUD';
import { Modal } from './components/Modal';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { experiences } from './data/experience';
import { projects } from './data/projects';
import { educationList } from './data/education';
import { achievementsList } from './data/achievements';
import { certificatesList } from './data/certificate';
import { skillsList } from './data/skills';
import { contactsList } from './data/contact';
import { 
  ExperienceCard, 
  ProjectCard, 
  EducationCard, 
  AchievementCard, 
  ContactCard,
  CertificateCard,
  SkillsCard
} from './components/CardRenderer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocationId, setSelectedLocationId] = useState<string>('experience');
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-completion sound and loading sequence hook
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  const handleLocationClick = (id: string) => {
    setSelectedLocationId(id);
    
    // We add a tiny delay of 450ms for the little car to slide/drive over the path to the clicked node before opening the scroll detail!
    setTimeout(() => {
      setActiveModalId(id);
      setIsModalOpen(true);
    }, 450);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Slight delay before clearing active ID to allow exit animations to complete smoothly
    setTimeout(() => {
      setActiveModalId(null);
    }, 200);
  };

  // Get active modal text details based on selection
  const getModalDetails = () => {
    switch (activeModalId) {
      case 'experience':
        return {
          title: "⚔️ Experience Guild Achievements",
          subtitle: "Completed professional campaigns and contracts",
          description: "Inspect the archives of companies and projects I've worked on. Each experience represents a major guild quest unlocked and mastered.",
          category: 'experience' as const
        };
      case 'projects':
        return {
          title: "🔮 Innovation Spellbook & Relics",
          subtitle: "Active software creations and engineering spells",
          description: "Browse the special relics and magical artifacts I've forged. Click the forge links to inspect the core incantations (source code).",
          category: 'projects' as const
        };
      case 'skills':
        return {
          title: "⚡ Sages Spellbook of Skills",
          subtitle: "Languages, Frameworks, Tools, and Cloud Masteries",
          description: "Inspect the elemental skills and magical incantations I have learned throughout my journey. Each skill level corresponds to a higher stat multiplier in live production realms.",
          category: 'skills' as const
        };
      case 'education':
        return {
          title: "🎓 Sages Academy Scroll",
          subtitle: "Academic archives and wisdom milestones",
          description: "Review academic history and credentials from JIMS Engineering Management Technical Campus. High intelligence stat multipliers unlocked here.",
          category: 'education' as const
        };
      case 'achievements':
        return {
          title: "🏆 Royal Halls of Prestige",
          subtitle: "Community contributions and conquered bugs",
          description: "Inspect trophies of legendary feats accomplished in open source realms and VSCode extensions. Community prestige multiplier high.",
          category: 'achievements' as const
        };
      case 'certificate':
        return {
          title: "📜 Grand Credentials Scroll",
          subtitle: "Verified professional accomplishments and seals",
          description: "Inspect the official seals of completion and expert certifications awarded by industrial boards.",
          category: 'certificate' as const
        };
      case 'contact':
        return {
          title: "⚓ Harbor Message Portals",
          subtitle: "Transmit letters, establish magic portals, or send ravens",
          description: "Ready to summon me for your next legendary quest? Open any communication portal below to instantly dispatch a messenger pigeon.",
          category: 'contact' as const
        };
      default:
        return {
          title: "Quest Detail",
          subtitle: "Loading scroll...",
          description: "",
          category: '' as const
        };
    }
  };

  const modalDetails = getModalDetails();

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div 
          id="main-adventure-layout"
          className="min-h-screen bg-[#090d16] text-slate-100 flex flex-col items-center p-4 md:p-6 overflow-x-hidden select-none selection:bg-amber-950 selection:text-amber-300"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 30%, rgba(20, 30, 55, 0.5) 0%, rgba(9, 13, 22, 1) 100%)"
          }}
        >
          {/* Decorative cosmic starry particles in background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,24,48,0.3)_0%,rgba(0,0,0,0)_60%)] pointer-events-none" />

          {/* Core Content Shell */}
          <div className="w-full max-w-5xl flex flex-col gap-6 z-10">
            
            {/* Top HUD Display */}
            <HUD 
              onLocationClick={handleLocationClick} 
              activeLocationId={selectedLocationId} 
            />

            {/* Game Adventure Map */}
            <main id="game-map-viewport" className="w-full">
              <Map 
                onLocationClick={handleLocationClick} 
                selectedLocationId={selectedLocationId} 
              />
            </main>

            {/* Interactive Footer */}
            <Footer />
          </div>

          {/* REUSABLE GAME MODAL DETAILS */}
          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            title={modalDetails.title}
            subtitle={modalDetails.subtitle}
            description={modalDetails.description}
            category={modalDetails.category}
          >
            {activeModalId === 'experience' && (
              <div id="modal-experience-list" className="space-y-6">
                {experiences.map((quest) => (
                  <ExperienceCard key={quest.id} quest={quest} />
                ))}
              </div>
            )}

            {activeModalId === 'projects' && (
              <div id="modal-projects-list" className="space-y-6">
                {projects.map((proj) => (
                  <ProjectCard key={proj.id} project={proj} />
                ))}
              </div>
            )}

            {activeModalId === 'skills' && (
              <div id="modal-skills-list" className="space-y-6">
                {skillsList.map((cat) => (
                  <SkillsCard key={cat.id} category={cat} />
                ))}
              </div>
            )}

            {activeModalId === 'education' && (
              <div id="modal-education-list" className="space-y-6">
                {educationList.map((school) => (
                  <EducationCard key={school.id} school={school} />
                ))}
              </div>
            )}

            {activeModalId === 'achievements' && (
              <div id="modal-achievements-list" className="space-y-6">
                {achievementsList.map((ach) => (
                  <AchievementCard key={ach.id} achievement={ach} />
                ))}
              </div>
            )}

            {activeModalId === 'certificate' && (
              <div id="modal-certificate-list" className="space-y-6">
                {certificatesList.map((cert) => (
                  <CertificateCard key={cert.id} certificate={cert} />
                ))}
              </div>
            )}

            {activeModalId === 'contact' && (
              <div id="modal-contact-list" className="grid grid-cols-1 gap-4">
                {contactsList.map((con) => (
                  <ContactCard key={con.id} contact={con} />
                ))}
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  );
}
