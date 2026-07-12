import React from 'react';
import { Shield, Sparkles, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface HUDProps {
  onLocationClick: (id: string) => void;
  activeLocationId: string | null;
}

export const HUD: React.FC<HUDProps> = ({ onLocationClick, activeLocationId }) => {
  return (
    <div className="w-full flex flex-col gap-2.5 md:gap-4 pointer-events-auto select-none">
      
      {/* HUD Top Bar: Stats, Banner, Resources */}
      <div className="w-full flex flex-col lg:flex-row lg:items-start lg:justify-center gap-4">
        
        {/* MAIN BANNER (Top Center) */}
        <motion.div 
          id="main-banner"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex-1 max-w-xl mx-auto flex flex-col items-center pointer-events-auto"
        >
          {/* Wood Panel Layout */}
          <div className="relative w-full wood-panel rounded-xl md:rounded-2xl px-4 py-2 md:px-6 md:py-4 text-center border-2 md:border-4 border-[#3b1c0c] flex flex-col items-center justify-center animate-float">
            
            {/* Vines and leaves background overlay decorations */}
            <div className="absolute -top-3 -left-3 text-sm md:text-lg pointer-events-none select-none filter drop-shadow">🍃</div>
            <div className="absolute -top-3 -right-3 text-sm md:text-lg pointer-events-none select-none filter drop-shadow">🌿</div>
            <div className="absolute -bottom-3 left-10 text-xs md:text-base pointer-events-none select-none">🍂</div>
            <div className="absolute -bottom-3 right-10 text-xs md:text-base pointer-events-none select-none">🍃</div>
            
            {/* Hanging Ropes hanging from top */}
            <div className="absolute -top-6 left-12 w-1.5 h-6 bg-amber-900 border-l border-amber-950 rounded shadow hidden md:block" />
            <div className="absolute -top-6 right-12 w-1.5 h-6 bg-amber-900 border-r border-amber-950 rounded shadow hidden md:block" />
            
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-base md:text-xl">🗺️</span>
              <h1 className="font-display font-extrabold text-lg md:text-2xl tracking-wide text-yellow-100 uppercase filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Shubham Rawat
              </h1>
            </div>
            <p className="font-mono text-[9px] md:text-[11px] font-bold text-amber-300 uppercase tracking-widest mt-0.5">
              Full Stack Developer
            </p>
            <p className="font-sans text-[9.5px] md:text-[11px] text-amber-200/95 mt-0.5 md:mt-1 leading-tight max-w-sm italic">
              "Building scalable products, one adventure at a time."
            </p>
          </div>
        </motion.div>
      </div>

      {/* CURRENT OBJECTIVE / QUEST PANEL */}
      <motion.div 
        id="quest-panel"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto w-full max-w-xl pointer-events-auto"
      >
        <div className="relative rounded-xl md:rounded-2xl bg-amber-950/20 border-2 border-amber-900/30 p-2 md:p-3 shadow-md backdrop-blur-sm">
          <div className="flex items-start gap-2 md:gap-2.5">
            <span className="text-base md:text-lg shrink-0 mt-0.5">📜</span>
            <div className="min-w-0">
              <h3 className="font-display text-[10px] md:text-[11px] font-bold text-amber-400 uppercase tracking-wider leading-none">
                Active Quest Portfolio
              </h3>
              <p className="font-sans text-[10.5px] md:text-xs text-amber-100/90 leading-tight md:leading-normal mt-1">
                Explore each destination on the map to discover my experience, projects, skills, credentials, education, and achievements.
              </p>
            </div>
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
