/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, useCallback } from 'react';
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
import { contactsList, resumeUrl } from './data/contact';
import { 
  ExperienceCard, 
  ProjectCard, 
  EducationCard, 
  AchievementCard, 
  ContactCard,
  CertificateCard,
  SkillsCard,
  RecruiterBriefCard,
  QuickTravelCard,
  KeyboardShortcutsCard
} from './components/CardRenderer';
import { Sparkles, Trophy, CheckCircle2, X, FileText, Navigation, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedLocationId, setSelectedLocationId] = useState<string>('experience');
  const [activeModalId, setActiveModalId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Persistent exploration progress (Feature 6)
  const [visitedLocationIds, setVisitedLocationIds] = useState<Set<string>>(new Set(['experience']));
  
  // Fast travel state (Feature 10)
  const [isFastTravel, setIsFastTravel] = useState(false);
  const [isTraveling, setIsTraveling] = useState(false);
  const travelTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Realm completion state (Feature 12)
  const [showCelebration, setShowCelebration] = useState(false);
  const [hasCelebrated, setHasCelebrated] = useState(false);

  // Scroll to top on initial load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle location navigation with optional fast travel (Feature 4 & 10)
  const handleLocationClick = useCallback((id: string, instant = false) => {
    // Clear any in-flight travel timer
    if (travelTimeoutRef.current) {
      clearTimeout(travelTimeoutRef.current);
      travelTimeoutRef.current = null;
    }

    setSelectedLocationId(id);

    // Track visited landmark
    setVisitedLocationIds(prev => {
      const next = new Set(prev);
      next.add(id);

      // Check for Realm Complete (all 6 landmarks visited)
      const majorLandmarks = ['experience', 'projects', 'skills', 'education', 'achievements', 'certificate'];
      const allExplored = majorLandmarks.every(l => next.has(l));
      if (allExplored && !hasCelebrated) {
        setShowCelebration(true);
        setHasCelebrated(true);
      }
      return next;
    });

    if (instant || isFastTravel) {
      setIsTraveling(false);
      setActiveModalId(id);
      setIsModalOpen(true);
    } else {
      setIsTraveling(true);
      travelTimeoutRef.current = setTimeout(() => {
        setIsTraveling(false);
        setActiveModalId(id);
        setIsModalOpen(true);
        travelTimeoutRef.current = null;
      }, 450);
    }
  }, [isFastTravel, hasCelebrated]);

  // Skip active travel animation (Space key / button)
  const skipTravelAnimation = useCallback(() => {
    if (isTraveling && travelTimeoutRef.current) {
      clearTimeout(travelTimeoutRef.current);
      travelTimeoutRef.current = null;
      setIsTraveling(false);
      setActiveModalId(selectedLocationId);
      setIsModalOpen(true);
    }
  }, [isTraveling, selectedLocationId]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setActiveModalId(null);
    }, 200);
  };

  // Keyboard accessibility (Feature 11)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === ' ' || e.code === 'Space') {
        if (isTraveling) {
          e.preventDefault();
          skipTravelAnimation();
        }
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        setActiveModalId('brief');
        setIsModalOpen(true);
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        setActiveModalId('codex');
        setIsModalOpen(true);
      } else if (e.key === '?') {
        e.preventDefault();
        setActiveModalId('shortcuts');
        setIsModalOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isTraveling, skipTravelAnimation]);

  // Modal details mapping
  const getModalDetails = () => {
    switch (activeModalId) {
      case 'brief':
        return {
          title: "⚔️ Guild Recruitment Brief",
          subtitle: "Executive 30-second summary for recruiters & engineering leaders",
          description: "A skimmable summary of Shubham Rawat's core technical proficiencies, high-throughput systems, and open-source impact.",
          category: 'brief' as const
        };
      case 'codex':
        return {
          title: "🧭 Universal Navigation Codex",
          subtitle: "Direct 1-click travel to any landmark or portal across the realm",
          description: "Teleport instantly to any destination without navigating the map canvas manually.",
          category: 'codex' as const
        };
      case 'shortcuts':
        return {
          title: "⌨️ Realm Control Keybindings",
          subtitle: "Keyboard shortcuts for high-speed navigation",
          description: "Explore the kingdom efficiently using standard accessibility keys.",
          category: 'shortcuts' as const
        };
      case 'experience':
        return {
          title: "⚔️ Experience City",
          subtitle: "Work Experience • 3 Professional Campaigns",
          description: "Inspect the archives of companies and projects I've engineered. Each experience represents a major guild contract unlocked and mastered.",
          category: 'experience' as const
        };
      case 'projects':
        return {
          title: "🔮 Projects Village",
          subtitle: "Projects & Demos • 11 Engineering Relics",
          description: "Browse software relics and algorithms forged. Click live demos or forge links to inspect source code incantations.",
          category: 'projects' as const
        };
      case 'skills':
        return {
          title: "⚡ Guild of Skills",
          subtitle: "Technical Skills • Languages, Frameworks, Tools & Cloud",
          description: "Inspect elemental skills and software mastery. Each level corresponds to production-tested real-world capability.",
          category: 'skills' as const
        };
      case 'education':
        return {
          title: "🎓 Sages Academy",
          subtitle: "Education & Academics • B.Tech in Computer Science",
          description: "Review academic history and credentials from JIMS Engineering Management Technical Campus (9.20 CGPA).",
          category: 'education' as const
        };
      case 'achievements':
        return {
          title: "🏆 Achievement Castle",
          subtitle: "Achievements & Open Source • Community Trophies",
          description: "Inspect trophies of legendary feats accomplished in open-source realms and VSCode extensions.",
          category: 'achievements' as const
        };
      case 'certificate':
        return {
          title: "📜 Credentials Dock",
          subtitle: "Certifications • Verified Industry Seals",
          description: "Inspect official seals of completion and expert certifications awarded by industrial boards (NASSCOM).",
          category: 'certificate' as const
        };
      case 'contact':
        return {
          title: "⚓ Harbor Message Portals",
          subtitle: "Contact Shubham • Transmit frequency or send courier pigeons",
          description: "Ready to summon Shubham for your next engineering quest? Open any communication portal below.",
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
        <LoadingScreen 
          onComplete={() => setIsLoading(false)} 
          onOpenRecruiterBrief={() => {
            setIsLoading(false);
            setActiveModalId('brief');
            setIsModalOpen(true);
          }}
        />
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
          <div className="w-full max-w-5xl flex flex-col gap-4 md:gap-6 z-10">
            
            {/* Top Navigation Row */}
            <header className="w-full flex justify-between items-center px-1 md:px-0 flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsLoading(true)}
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-950/20 hover:bg-amber-950/40 border border-amber-900/30 hover:border-amber-600/50 text-amber-200 hover:text-amber-100 transition-all text-[11px] md:text-xs font-sans font-bold shadow-md backdrop-blur-sm cursor-pointer select-none"
                  title="Return to startup screen"
                >
                  <span className="group-hover:-translate-x-0.5 transition-transform">👈</span> Start Screen
                </button>

                {/* Recruiter Brief Top CTA Button */}
                <button
                  onClick={() => {
                    setActiveModalId('brief');
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 hover:text-white transition-all text-[11px] md:text-xs font-display font-bold shadow-md backdrop-blur-sm cursor-pointer"
                >
                  <FileText className="h-3.5 w-3.5 text-amber-400" />
                  <span>Recruiter Brief</span>
                </button>
              </div>
              
              <div className="flex items-center gap-3 font-mono text-[10px] text-slate-400">
                {/* Skip Travel Indicator when active */}
                {isTraveling && (
                  <button
                    onClick={skipTravelAnimation}
                    className="flex items-center gap-1 px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400 text-amber-300 animate-pulse cursor-pointer"
                    title="Press Space or click to skip travel delay"
                  >
                    <span>⚡ Skip Travel [Space]</span>
                  </button>
                )}

                <div className="flex items-center gap-1.5 font-mono text-[9px] text-slate-500/80 tracking-widest uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  QUEST_ACTIVE
                </div>
              </div>
            </header>
            
            {/* Top HUD Display */}
            <HUD 
              onLocationClick={handleLocationClick} 
              activeLocationId={selectedLocationId}
              visitedLocations={visitedLocationIds}
              onOpenRecruiterBrief={() => {
                setActiveModalId('brief');
                setIsModalOpen(true);
              }}
              onOpenCodex={() => {
                setActiveModalId('codex');
                setIsModalOpen(true);
              }}
              onOpenShortcuts={() => {
                setActiveModalId('shortcuts');
                setIsModalOpen(true);
              }}
              isFastTravel={isFastTravel}
              onToggleFastTravel={() => setIsFastTravel(prev => !prev)}
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
            {/* RECRUITER BRIEF MODAL (Feature 1) */}
            {activeModalId === 'brief' && (
              <RecruiterBriefCard
                onExploreRealm={handleCloseModal}
                onOpenContact={() => handleLocationClick('contact', true)}
                onNavigateTo={(id) => handleLocationClick(id, true)}
              />
            )}

            {/* QUICK TRAVEL CODEX MODAL (Feature 4) */}
            {activeModalId === 'codex' && (
              <QuickTravelCard
                visitedLocations={visitedLocationIds}
                onTravelTo={(id) => handleLocationClick(id, isFastTravel)}
                isFastTravel={isFastTravel}
                onToggleFastTravel={() => setIsFastTravel(prev => !prev)}
                onOpenBrief={() => {
                  setActiveModalId('brief');
                  setIsModalOpen(true);
                }}
                onOpenContact={() => handleLocationClick('contact', true)}
              />
            )}

            {/* KEYBOARD SHORTCUTS MODAL (Feature 11) */}
            {activeModalId === 'shortcuts' && (
              <KeyboardShortcutsCard />
            )}

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

          {/* FINAL REALM COMPLETION TOAST / CELEBRATION (Feature 12) */}
          <AnimatePresence>
            {showCelebration && (
              <motion.aside
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-4 z-40 max-w-xl mx-auto inset-x-4 p-4 rounded-2xl bg-amber-950/95 border-2 border-amber-500 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 text-amber-100"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl animate-bounce">🏆</span>
                  <div>
                    <h4 className="font-display font-bold text-sm text-yellow-300 uppercase tracking-wide">
                      Realm Fully Discovered!
                    </h4>
                    <p className="font-sans text-xs text-amber-200/90">
                      You've explored Shubham's complete professional journey across all 6 landmarks.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => { setActiveModalId('brief'); setIsModalOpen(true); }}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-display text-xs font-bold transition-all cursor-pointer shadow"
                  >
                    Recruiter Brief
                  </button>
                  <button
                    onClick={() => { handleLocationClick('contact', true); }}
                    className="px-3 py-1.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-display text-xs font-bold transition-all cursor-pointer shadow"
                  >
                    Contact
                  </button>
                  <button
                    onClick={() => setShowCelebration(false)}
                    className="p-1 text-amber-300/80 hover:text-white rounded-lg cursor-pointer"
                    aria-label="Dismiss Celebration"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
