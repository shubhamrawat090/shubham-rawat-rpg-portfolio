import React from 'react';
import { ShieldCheck, Music, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer 
      id="portfolio-footer"
      className="w-full flex flex-col md:flex-row items-center justify-between gap-4 py-4 px-6 mt-8 rounded-2xl bg-slate-950/70 border border-slate-900 backdrop-blur-md select-none text-slate-400"
    >
      <div className="flex items-center gap-2 text-xs">
        <ShieldCheck className="h-4 w-4 text-amber-500" />
        <span>
          © {new Date().getFullYear()} Shubham Rawat. Forged in React & Tailwind.
        </span>
      </div>

      {/* Decorative RPG visualizer & controls */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-[11px] font-mono text-amber-400">
          <Sparkles className="h-3 w-3 text-amber-500 animate-pulse" />
          <span>PORTFOLIO STATUS: ONLINE</span>
        </div>

        {/* Mini Audio Visualizer (Muted state placeholder) */}
        <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs">
          <Music className="h-3 w-3 text-slate-400 animate-bounce" />
          <div className="flex gap-0.5 items-end h-2.5 w-4 overflow-hidden">
            <span className="w-0.5 bg-amber-500 animate-[wave_1s_ease-in-out_infinite]" style={{ height: '70%' }} />
            <span className="w-0.5 bg-amber-500 animate-[wave_1.4s_ease-in-out_infinite]" style={{ height: '40%' }} />
            <span className="w-0.5 bg-amber-500 animate-[wave_0.8s_ease-in-out_infinite]" style={{ height: '90%' }} />
            <span className="w-0.5 bg-amber-500 animate-[wave_1.2s_ease-in-out_infinite]" style={{ height: '50%' }} />
          </div>
          <span className="font-mono text-[10px] text-slate-400 leading-none">Chiptune Ambient</span>
        </div>
      </div>
    </footer>
  );
};
