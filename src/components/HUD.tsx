import React from 'react';
import { Shield, Sparkles, Star, Navigation, FileText, CheckCircle2, Circle, ArrowRight, Zap, Keyboard } from 'lucide-react';
import { motion } from 'motion/react';

interface HUDProps {
  onLocationClick: (id: string) => void;
  activeLocationId: string | null;
  visitedLocations: Set<string>;
  onOpenRecruiterBrief: () => void;
  onOpenCodex: () => void;
  onOpenShortcuts: () => void;
  isFastTravel: boolean;
  onToggleFastTravel: () => void;
}

const recommendedSteps = [
  { id: "experience", label: "Experience", fullLabel: "Work Experience", icon: "⚔️" },
  { id: "projects", label: "Projects", fullLabel: "Projects & Demos", icon: "🔮" },
  { id: "skills", label: "Skills", fullLabel: "Technical Skills", icon: "⚡" },
  { id: "achievements", label: "Achievements", fullLabel: "Achievements & Open Source", icon: "🏆" },
  { id: "contact", label: "Contact", fullLabel: "Contact Portals", icon: "✉️" },
];

export const HUD: React.FC<HUDProps> = ({ 
  onLocationClick, 
  activeLocationId,
  visitedLocations,
  onOpenRecruiterBrief,
  onOpenCodex,
  onOpenShortcuts,
  isFastTravel,
  onToggleFastTravel,
}) => {
  // Compute next recommended step along the journey
  const nextStep = recommendedSteps.find(step => !visitedLocations.has(step.id)) || recommendedSteps[recommendedSteps.length - 1];
  const isJourneyFinished = recommendedSteps.every(step => visitedLocations.has(step.id));
  const totalLandmarks = 6;
  const exploredLandmarksCount = Math.min(totalLandmarks, Array.from(visitedLocations).filter(id => id !== 'contact' && id !== 'brief').length);
  const progressPercent = Math.round((exploredLandmarksCount / totalLandmarks) * 100);

  return (
    <div className="w-full flex flex-col gap-2.5 md:gap-3.5 pointer-events-auto select-none">
      
      {/* 1. TOP HERO BANNER */}
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-4">
        <motion.div 
          id="main-banner"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 max-w-xl mx-auto flex flex-col items-center pointer-events-auto w-full"
        >
          {/* Wood Panel Layout */}
          <div className="relative w-full wood-panel rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-3.5 text-center border-2 md:border-4 border-[#3b1c0c] flex flex-col items-center justify-center animate-float">
            
            {/* Foliage decorations */}
            <div className="absolute -top-3 -left-3 text-sm md:text-lg pointer-events-none select-none filter drop-shadow">🍃</div>
            <div className="absolute -top-3 -right-3 text-sm md:text-lg pointer-events-none select-none filter drop-shadow">🌿</div>
            <div className="absolute -bottom-3 left-10 text-xs md:text-base pointer-events-none select-none">🍂</div>
            <div className="absolute -bottom-3 right-10 text-xs md:text-base pointer-events-none select-none">🍃</div>
            
            {/* Hanging Ropes */}
            <div className="absolute -top-6 left-12 w-1.5 h-6 bg-amber-900 border-l border-amber-950 rounded shadow hidden md:block" />
            <div className="absolute -top-6 right-12 w-1.5 h-6 bg-amber-900 border-r border-amber-950 rounded shadow hidden md:block" />
            
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-base md:text-xl">🗺️</span>
              <h1 className="font-display font-extrabold text-lg md:text-2xl tracking-wide text-yellow-100 uppercase filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Shubham Rawat
              </h1>
            </div>
            <p className="font-mono text-[9.5px] md:text-[11.5px] font-bold text-amber-300 uppercase tracking-widest mt-0.5">
              Full Stack Developer • Outscal
            </p>
            <p className="font-sans text-[9.5px] md:text-[11px] text-amber-200/95 mt-0.5 leading-tight max-w-sm italic">
              "Building scalable products, one adventure at a time."
            </p>
          </div>
        </motion.div>
      </div>

      {/* 2. PERSISTENT EXPLORATION PROGRESS & QUICK ACTION TOOLBAR */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="w-full max-w-xl mx-auto flex flex-wrap items-center justify-between gap-2 px-1"
      >
        {/* Exploration Progress Counter (Feature 6) */}
        <div className="flex items-center gap-2 bg-slate-900/90 border border-slate-800 rounded-xl px-2.5 py-1 text-xs shadow-sm">
          <span className="font-mono text-[10px] text-amber-400 font-bold uppercase tracking-wider">
            Realm Explored:
          </span>
          <div className="flex items-center gap-1">
            <span className="font-mono text-xs font-extrabold text-white">
              {exploredLandmarksCount} / {totalLandmarks}
            </span>
            <div className="w-14 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div 
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-500" 
                style={{ width: `${progressPercent}%` }} 
              />
            </div>
          </div>
        </div>

        {/* Quick Toolbar Buttons (Recruiter Brief, Quick Travel Codex, Fast Travel, Shortcuts) */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Recruiter Brief Quick Button */}
          <button
            onClick={onOpenRecruiterBrief}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-amber-950/30 hover:bg-amber-950/50 border border-amber-600/50 hover:border-amber-400 text-amber-200 hover:text-white text-[11px] font-display font-bold transition-all shadow-sm cursor-pointer"
            title="Open 30-second executive summary for recruiters"
          >
            <FileText className="h-3.5 w-3.5 text-amber-400" />
            <span>Recruiter Brief</span>
          </button>

          {/* Universal Codex / Quick Travel Button */}
          <button
            onClick={onOpenCodex}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xl bg-cyan-950/30 hover:bg-cyan-950/50 border border-cyan-700/50 hover:border-cyan-400 text-cyan-200 hover:text-white text-[11px] font-display font-bold transition-all shadow-sm cursor-pointer"
            title="Open Universal Codex with direct 1-click travel"
          >
            <Navigation className="h-3.5 w-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Quick Travel</span>
            <span className="sm:hidden">Codex</span>
          </button>

          {/* Fast Travel Toggle */}
          <button
            onClick={onToggleFastTravel}
            className={`flex items-center gap-1 px-2 py-1 rounded-xl border text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm ${
              isFastTravel
                ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
            }`}
            title="Toggle fast travel (0ms instant travel vs 450ms car transit)"
          >
            <Zap className={`h-3 w-3 ${isFastTravel ? 'text-amber-400 fill-amber-400' : 'text-slate-500'}`} />
            <span>Fast: {isFastTravel ? 'ON' : 'OFF'}</span>
          </button>

          {/* Keyboard Shortcuts (?) Button */}
          <button
            onClick={onOpenShortcuts}
            className="flex items-center justify-center h-6 w-6 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-mono font-bold transition-all cursor-pointer shadow-sm"
            title="Keyboard shortcuts (Press ?)"
          >
            ?
          </button>
        </div>
      </motion.div>

      {/* 3. CURRENT OBJECTIVE / RECOMMENDED JOURNEY PANEL (Feature 5) */}
      <motion.div 
        id="quest-panel"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto w-full max-w-xl pointer-events-auto"
      >
        <div className="relative rounded-xl md:rounded-2xl bg-amber-950/20 border-2 border-amber-900/30 p-2.5 md:p-3 shadow-md backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            
            {/* Step Guidance */}
            <div className="flex items-start gap-2">
              <span className="text-base md:text-lg shrink-0 mt-0.5">📜</span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-[10.5px] md:text-[11.5px] font-bold text-amber-400 uppercase tracking-wider leading-none">
                    {isJourneyFinished ? "🏆 All Quest Stops Discovered!" : "🧭 Recommended Journey:"}
                  </h3>
                  {!isJourneyFinished && (
                    <span className="font-mono text-[9px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                      Step {recommendedSteps.findIndex(s => s.id === nextStep.id) + 1} of {recommendedSteps.length}
                    </span>
                  )}
                </div>
                
                <p className="font-sans text-[11px] md:text-xs text-amber-100/90 leading-tight mt-1">
                  {!isJourneyFinished ? (
                    <>Next suggested stop: <strong className="text-yellow-200">{nextStep.icon} {nextStep.fullLabel}</strong></>
                  ) : (
                    "You've explored the complete recommended itinerary! Feel free to review the Recruiter Brief or Contact portals."
                  )}
                </p>
              </div>
            </div>

            {/* Travel Action Button */}
            {!isJourneyFinished && (
              <button
                onClick={() => onLocationClick(nextStep.id)}
                className="self-end sm:self-center shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-600/30 hover:bg-amber-600/50 border border-amber-500/60 text-amber-200 hover:text-white font-display text-xs font-bold transition-all shadow-md active:scale-95 cursor-pointer"
              >
                <span>Travel Now</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>

          {/* Interactive Stepper Checklist */}
          <div className="mt-2.5 pt-2 border-t border-amber-900/30 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar">
            {recommendedSteps.map((step, idx) => {
              const isDone = visitedLocations.has(step.id);
              const isCurrent = !isDone && step.id === nextStep.id;

              return (
                <button
                  key={step.id}
                  onClick={() => onLocationClick(step.id)}
                  className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-[10px] font-display transition-all cursor-pointer whitespace-nowrap ${
                    isDone 
                      ? 'text-emerald-400 bg-emerald-950/30 border border-emerald-900/40 hover:bg-emerald-950/50' 
                      : isCurrent 
                        ? 'text-amber-300 bg-amber-500/20 border border-amber-500/50 font-bold animate-pulse'
                        : 'text-slate-400 hover:text-slate-200'
                  }`}
                  title={`Jump to ${step.fullLabel}`}
                >
                  {isDone ? (
                    <CheckCircle2 className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                  ) : isCurrent ? (
                    <ArrowRight className="h-2.5 w-2.5 text-amber-400 shrink-0" />
                  ) : (
                    <Circle className="h-2.5 w-2.5 text-slate-500 shrink-0" />
                  )}
                  <span>{step.label}</span>
                </button>
              );
            })}
          </div>

          {/* Corner highlights */}
          <div className="absolute top-1.5 left-1.5 h-1.5 w-1.5 rounded-full bg-amber-500/40" />
          <div className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-amber-500/40" />
          <div className="absolute bottom-1.5 left-1.5 h-1.5 w-1.5 rounded-full bg-amber-500/40" />
          <div className="absolute bottom-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-amber-500/40" />
        </div>
      </motion.div>
      
    </div>
  );
};

