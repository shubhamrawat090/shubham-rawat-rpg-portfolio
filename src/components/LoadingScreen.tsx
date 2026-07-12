import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sword, Play, Linkedin, Github, Twitter, Code2, Award, Mail } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const loadingSteps = [
  "Summoning full-stack server nodes...",
  "Synthesizing active coffee resource...",
  "Casting AWS SQS pipeline charms...",
  "Preparing O(1) LRU Cache spellbook...",
  "Unlocking Experience City gates...",
  "Calibrating AI Roast motivator witty response matrices...",
  "Grooming Harbor mail pigeons...",
  "Readying your character..."
];

const socialProfiles = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shubhamrawat090/",
    icon: Linkedin,
    color: "hover:border-blue-500 hover:text-blue-400 hover:bg-blue-950/20",
    label: "LinkedIn"
  },
  {
    name: "GitHub",
    url: "https://github.com/shubhamrawat090",
    icon: Github,
    color: "hover:border-slate-400 hover:text-slate-200 hover:bg-slate-800/20",
    label: "GitHub"
  },
  {
    name: "X(Twitter)",
    url: "https://x.com/6rud9e",
    icon: Twitter,
    color: "hover:border-sky-400 hover:text-sky-300 hover:bg-sky-950/20",
    label: "X(Twitter)"
  },
  {
    name: "Email",
    url: "mailto:shubhamrawat.ofc@gmail.com",
    icon: Mail,
    color: "hover:border-rose-500 hover:text-rose-400 hover:bg-rose-950/20",
    label: "Email"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/6rud9e/",
    icon: Code2,
    color: "hover:border-amber-500 hover:text-amber-400 hover:bg-amber-950/20",
    label: "LeetCode"
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/shubhamshubhamrawat090?tab=activity",
    icon: Award,
    color: "hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-950/20",
    label: "GFG"
  }
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [isDone, setIsDone] = useState(false);

  // Increment progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDone(true);
          return 100;
        }
        // randomized increment to feel realistic
        const increment = Math.floor(Math.random() * 15) + 5;
        return Math.min(100, prev + increment);
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  // Cycle loading steps
  useEffect(() => {
    if (progress < 100) {
      const stepInterval = setInterval(() => {
        setStepIdx((prev) => (prev + 1) % loadingSteps.length);
      }, 700);
      return () => clearInterval(stepInterval);
    }
  }, [progress]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0f172a] text-slate-100 flex flex-col items-center justify-center p-6 select-none">

      {/* Background radial gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.12)_0%,rgba(15,23,42,0)_80%)] pointer-events-none" />

      <div className="w-full max-w-md flex flex-col items-center text-center">

        {/* Animated Wizard Sword Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0], y: [0, -4, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="p-5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-400 mb-6 flex items-center justify-center shadow-lg"
        >
          <Sword className="h-8 w-8 filter drop-shadow-[0_2px_4px_rgba(245,158,11,0.5)]" />
        </motion.div>

        {/* Title */}
        <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-wider text-yellow-100 uppercase filter drop-shadow-[0_2px_2px_rgba(0,0,0,0.6)]">
          Adventurer's Codex
        </h2>
        <p className="font-mono text-xs text-amber-500 uppercase tracking-widest mt-1">
          SHUBHAM RAWAT • LEVEL 3 DEV
        </p>

        {/* Progress Display */}
        <div className="mt-8 w-full">
          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.div
                key="loading-active"
                className="w-full flex flex-col items-center"
                exit={{ opacity: 0, y: -5 }}
              >
                {/* Active Loading step */}
                <span className="font-sans text-xs text-slate-400 h-6 block italic">
                  {loadingSteps[stepIdx]}
                </span>

                {/* Progress bar border */}
                <div className="mt-3 w-full h-3 rounded-full bg-slate-900 border border-slate-800 overflow-hidden relative p-[2px]">
                  {/* Filled progress */}
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                {/* Percentage */}
                <span className="mt-2 font-mono text-[10px] text-amber-400 font-bold">
                  {progress}% Syncing
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="enter-prompt"
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full flex flex-col items-center"
              >
                <span className="font-sans text-xs text-emerald-400 font-semibold uppercase tracking-wider block h-6">
                  Quest Book Ready!
                </span>

                {/* Start Game Button */}
                <button
                  onClick={onComplete}
                  className="mt-3 w-full max-w-xs group relative overflow-hidden rounded-2xl border-4 border-[#3b1c0c] wood-panel px-6 py-4 font-display font-bold text-yellow-100 text-lg uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
                >
                  <Play className="h-5 w-5 text-yellow-100 fill-yellow-100 group-hover:scale-110 transition-transform" />
                  <span>Start Quest</span>
                  {/* Hover sparkle */}
                  <span className="absolute right-4 text-xs group-hover:animate-bounce">✨</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social / External Profiles Panel */}
        <div className="mt-8 w-full border-t border-slate-800/60 pt-5 flex flex-col items-center">
          <span className="font-mono text-[9px] text-amber-500/80 uppercase tracking-widest mb-3">
            ⚔️ Summon Adventurer Profiles ⚔️
          </span>
          <div className="flex flex-wrap justify-center gap-2 max-w-sm">
            {socialProfiles.map((profile) => {
              const Icon = profile.icon;
              return (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/50 text-slate-300 text-xs font-mono font-medium transition-all ${profile.color} hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer`}
                  title={`Visit ${profile.name}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{profile.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Tip section */}
        <div className="mt-8 text-[10px] font-mono text-slate-500 max-w-xs">
          💡 TIP: Visit Experience City to inspect completed S-Tier and A-Tier professional milestones!
        </div>

      </div>
    </div>
  );
};
