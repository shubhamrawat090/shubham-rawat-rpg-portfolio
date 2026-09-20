import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Sword, Play, Linkedin, Github, Twitter, Code2, Award, Mail, FileText, Globe, ExternalLink } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
  onOpenRecruiterBrief: () => void;
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
    name: "Portfolio",
    url: "https://portfolio.shubhamrawat.com",
    icon: Globe,
    label: "portfolio.shubhamrawat.com"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shubhamrawat090/",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    name: "GitHub",
    url: "https://github.com/shubhamrawat090",
    icon: Github,
    label: "GitHub"
  },
  {
    name: "X(Twitter)",
    url: "https://x.com/6rud9e",
    icon: Twitter,
    label: "X(Twitter)"
  },
  {
    name: "Email",
    url: "mailto:shubhamrawat.ofc@gmail.com",
    icon: Mail,
    label: "Email"
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/6rud9e/",
    icon: Code2,
    label: "LeetCode"
  },
  {
    name: "GeeksforGeeks",
    url: "https://www.geeksforgeeks.org/profile/shubhamshubhamrawat090?tab=activity",
    icon: Award,
    label: "GFG"
  }
];

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete, onOpenRecruiterBrief }) => {
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
    <div className="fixed inset-0 z-50 bg-[#0B1020] text-[#F5F1E6] flex flex-col items-center justify-center p-6 select-none overflow-y-auto">

      {/* Subtle monochromatic backdrop glow */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 50% 40%, rgba(245, 185, 66, 0.04) 0%, rgba(11, 16, 32, 0) 70%)"
        }}
      />

      <div className="w-full max-w-md flex flex-col items-center text-center relative z-10">

        {/* Animated Wizard Sword Icon */}
        <motion.div
          animate={{ rotate: [0, 8, -8, 0], y: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="p-4 rounded-2xl bg-[#121A2B] border border-[#263247] text-[#F5B942] mb-5 flex items-center justify-center shadow-sm"
        >
          <Sword className="h-7 w-7 text-[#F5B942]" />
        </motion.div>

        {/* Title */}
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-wider text-[#F5F1E6] uppercase">
          Adventurer's Codex
        </h2>
        <p className="font-mono text-xs text-[#F5B942] uppercase tracking-widest mt-1.5 font-medium">
          SHUBHAM RAWAT • LEVEL 3 DEV
        </p>

        {/* Progress Display */}
        <div className="mt-7 w-full">
          <AnimatePresence mode="wait">
            {!isDone ? (
              <motion.div
                key="loading-active"
                className="w-full flex flex-col items-center"
                exit={{ opacity: 0, y: -5 }}
              >
                {/* Active Loading step */}
                <span className="font-sans text-xs text-[#94A3B8] h-6 block">
                  {loadingSteps[stepIdx]}
                </span>

                {/* Progress bar border */}
                <div className="mt-3 w-full h-2 rounded-full bg-[#121A2B] border border-[#263247] overflow-hidden relative p-[1px]">
                  {/* Filled progress */}
                  <motion.div
                    className="h-full rounded-full bg-[#F5B942]"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
                {/* Percentage */}
                <span className="mt-2 font-mono text-[11px] text-[#F5B942] font-semibold">
                  {progress}% Syncing
                </span>
              </motion.div>
            ) : (
              <motion.div
                key="enter-prompt"
                initial={{ opacity: 0, scale: 0.95, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="w-full flex flex-col items-center gap-3"
              >
                <span className="font-sans text-xs text-[#94A3B8] font-medium uppercase tracking-wider flex items-center justify-center gap-1.5">
                  <span className="text-[#F5B942]">✨</span> Quest Codex Ready! Choose Your Journey:
                </span>

                {/* PROMINENT MAIN PORTFOLIO WEBSITE BUTTON */}
                <a
                  href="https://portfolio.shubhamrawat.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full max-w-sm group relative overflow-hidden rounded-xl bg-[#F5B942] hover:bg-[#D9A63B] text-[#0B1020] px-4 py-3 font-display font-bold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 border border-[#F5B942] cursor-pointer"
                  style={{
                    boxShadow: "0 0 24px rgba(245, 185, 66, 0.18)"
                  }}
                  title="Redirect to portfolio website: portfolio.shubhamrawat.com"
                >
                  <Globe className="h-4 w-4 text-[#0B1020] shrink-0" />
                  <span className="truncate font-extrabold uppercase">portfolio.shubhamrawat.com</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#0B1020] shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Two Primary Choices: Explore Realm OR Recruiter Brief */}
                <div className="w-full flex flex-col sm:flex-row gap-2.5 max-w-sm mt-1">
                  {/* Primary Choice 1: Explore Realm */}
                  <button
                    onClick={onComplete}
                    className="flex-1 group relative overflow-hidden rounded-xl border border-[#F5B942] bg-[#121A2B] hover:bg-[#172136] px-4 py-2.5 font-display font-bold text-[#F5F1E6] text-xs md:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Play className="h-3.5 w-3.5 text-[#F5B942] fill-[#F5B942] group-hover:scale-110 transition-transform" />
                    <span>Explore Realm</span>
                  </button>

                  {/* Primary Choice 2: Recruiter Brief */}
                  <button
                    onClick={onOpenRecruiterBrief}
                    className="flex-1 group relative overflow-hidden rounded-xl border border-[#263247] hover:border-[#F5B942] bg-transparent hover:bg-[#121A2B]/40 px-4 py-2.5 font-display font-bold text-[#F5F1E6] hover:text-[#F5B942] text-xs md:text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <FileText className="h-3.5 w-3.5 text-[#94A3B8] group-hover:text-[#F5B942] transition-colors" />
                    <span>Recruiter Brief</span>
                  </button>
                </div>

                <p className="font-sans text-[11px] text-[#94A3B8] text-center mt-1">
                  <span className="text-[#94A3B8]">⚔️</span> <strong className="text-[#F5F1E6] font-medium">Explore Realm</strong> opens interactive map • <span className="text-[#94A3B8]">📜</span> <strong className="text-[#F5F1E6] font-medium">Recruiter Brief</strong> gives 30-second summary
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Social / External Profiles Panel */}
        <div className="mt-7 w-full border-t border-[#263247] pt-5 flex flex-col items-center">
          <span className="font-mono text-[10px] text-[#D9A63B] uppercase tracking-widest mb-3 font-medium flex items-center gap-1.5">
            <span className="text-[#94A3B8]">⚔</span> Summon Adventurer Profiles <span className="text-[#94A3B8]">⚔</span>
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
                  className="group flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#263247] bg-transparent text-[#CBD5E1] hover:text-[#F5B942] hover:border-[#F5B942] hover:bg-[#121A2B] text-xs font-mono font-medium transition-all duration-200 cursor-pointer shadow-sm"
                  title={`Visit ${profile.name}`}
                >
                  <Icon className="h-3.5 w-3.5 text-[#94A3B8] group-hover:text-[#F5B942] transition-colors duration-200" />
                  <span>{profile.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Tip section */}
        <div className="mt-7 text-[11px] font-mono text-[#64748B] max-w-xs text-center flex items-center justify-center gap-1.5 leading-relaxed">
          <span className="text-[#F5B942]">💡</span>
          <span>TIP: Visit Experience City to inspect completed S-Tier and A-Tier professional milestones!</span>
        </div>

      </div>
    </div>
  );
};
