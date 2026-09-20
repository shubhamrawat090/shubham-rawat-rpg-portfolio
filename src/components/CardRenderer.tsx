import React, { useState } from 'react';
import { 
  Mail, Linkedin, Github, Phone, Code, Sparkles, Trophy, BookOpen, Star, 
  ShieldAlert, Zap, Compass, Award, Terminal, Layers, Wrench, Cloud,
  CheckCircle2, Circle, ExternalLink, FileText, Navigation, Keyboard,
  ArrowRight, Clock, Coins, Briefcase, GraduationCap, Info, HelpCircle,
  Globe
} from 'lucide-react';
import { ExperienceQuest } from '../data/experience';
import { ProjectQuest } from '../data/projects';
import { AcademyScroll } from '../data/education';
import { AchievementTrophy } from '../data/achievements';
import { ContactPortal, resumeUrl } from '../data/contact';
import { CertificateScroll } from '../data/certificate';
import { SkillCategory } from '../data/skills';
import { profileBriefData, ProfileBrief } from '../data/profileBrief';
import { motion } from 'motion/react';

// Reusable tooltip for explaining RPG terminology in plain English
export const RpgTooltip: React.FC<{ term: string; explanation: string; children: React.ReactNode }> = ({
  term,
  explanation,
  children
}) => {
  const [show, setShow] = useState(false);

  return (
    <span 
      className="relative inline-flex items-center gap-1 group cursor-help"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      tabIndex={0}
      title={`${term}: ${explanation}`}
    >
      {children}
      <HelpCircle className="h-3 w-3 text-amber-400/70 group-hover:text-amber-300 shrink-0 transition-colors" />
      {show && (
        <span 
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 text-[10.5px] font-sans font-normal text-slate-100 bg-slate-950 border border-amber-500/50 rounded-lg shadow-2xl z-50 whitespace-nowrap pointer-events-none filter drop-shadow-lg"
        >
          <span className="text-amber-400 font-semibold">{term}:</span> {explanation}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
        </span>
      )}
    </span>
  );
};

// Map icon string to Lucide component
const getContactIcon = (name: string) => {
  switch (name) {
    case 'Globe': return Globe;
    case 'Mail': return Mail;
    case 'Linkedin': return Linkedin;
    case 'Github': return Github;
    case 'Phone': return Phone;
    case 'Code': return Code;
    default: return Compass;
  }
};

interface CardLinksProps {
  liveText?: string;
  liveLink?: string;
  githubText?: string;
  githubLink?: string;
  borderColorClass?: string;
}

export const CardLinks: React.FC<CardLinksProps> = ({
  liveText,
  liveLink,
  githubText,
  githubLink,
  borderColorClass = "border-amber-700 bg-amber-900/30 text-amber-200 hover:bg-amber-800 hover:text-white"
}) => {
  if (!liveText && !githubText) return null;

  // Strip hover classes for non-clickable display
  const nonClickableClass = borderColorClass
    .split(" ")
    .filter(c => !c.startsWith("hover:"))
    .join(" ");

  return (
    <div className="mt-5 border-t border-slate-800/40 pt-4 flex items-center justify-between gap-4 w-full">
      {/* Live Link on the LEFT */}
      <div className="flex-1 flex justify-start">
        {liveText && (
          liveLink ? (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 text-xs font-bold font-display transition-all cursor-pointer ${borderColorClass}`}
            >
              🌐 {liveText}
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 text-xs font-bold font-display opacity-40 select-none cursor-default ${nonClickableClass}`}
            >
              🌐 {liveText}
            </span>
          )
        )}
      </div>

      {/* GitHub Link on the RIGHT */}
      <div className="flex-1 flex justify-end">
        {githubText && (
          githubLink ? (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 text-xs font-bold font-display transition-all cursor-pointer ${borderColorClass}`}
            >
              ⚔️ {githubText}
            </a>
          ) : (
            <span
              className={`inline-flex items-center gap-1.5 rounded-lg border-2 px-3 py-1.5 text-xs font-bold font-display opacity-40 select-none cursor-default ${nonClickableClass}`}
            >
              ⚔️ {githubText}
            </span>
          )
        )}
      </div>
    </div>
  );
};

export const ExperienceCard: React.FC<{ quest: ExperienceQuest }> = ({ quest }) => {
  const tierColors = {
    'S-Tier': 'border-red-500/80 text-red-400 bg-red-950/40 shadow-red-900/30',
    'A-Tier': 'border-amber-500/80 text-amber-400 bg-amber-950/40 shadow-amber-900/30',
    'B-Tier': 'border-cyan-500/80 text-cyan-400 bg-cyan-950/40 shadow-cyan-900/30',
  };

  const tierExplanations = {
    'S-Tier': 'Core strategic production system with high scale, fault tolerance, and direct business impact',
    'A-Tier': 'Fullstack enterprise application featuring real-time workflows and automation',
    'B-Tier': 'Foundational engineering role delivering modular UI components and responsive data grids',
  };

  return (
    <motion.div
      id={`exp-${quest.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative rounded-2xl border-2 border-amber-900/40 bg-slate-900/90 p-5 shadow-lg backdrop-blur-sm md:p-6"
    >
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-amber-500/50" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-amber-500/50" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-amber-500/50" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-amber-500/50" />

      {/* 1. PRIMARY: Role, Company, Period */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">{quest.role}</h4>
            <RpgTooltip term={`${quest.questTier} Quest`} explanation={tierExplanations[quest.questTier]}>
              <span className={`inline-block rounded px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider border ${tierColors[quest.questTier]}`}>
                {quest.questTier}
              </span>
            </RpgTooltip>
          </div>
          <p className="font-sans text-base font-semibold text-amber-300 mt-1">@ {quest.company}</p>
        </div>
        <div className="text-left sm:text-right shrink-0">
          <span className="inline-flex items-center gap-1 font-mono text-xs text-amber-200/90 bg-amber-950/40 border border-amber-800/60 rounded-lg px-2.5 py-1">
            <Clock className="h-3 w-3 text-amber-400" /> {quest.period}
          </span>
        </div>
      </div>

      {/* 2. PRIMARY: Key Contributions & Measurable Results */}
      <div className="mt-5 space-y-2.5">
        <h5 className="font-display text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
          <Briefcase className="h-3.5 w-3.5 text-amber-400" />
          <span>Key Responsibilities & Engineering Deliverables:</span>
        </h5>
        <ul className="space-y-2 font-sans text-sm text-slate-200 leading-relaxed">
          {quest.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5 bg-slate-950/30 rounded-lg p-2 border border-slate-800/60">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. PRIMARY: Core Technologies Stack */}
      <div className="mt-4">
        <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1.5">Technologies Used:</span>
        <div className="flex flex-wrap gap-1.5">
          {quest.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-slate-700 bg-slate-800 px-2 py-0.5 font-mono text-xs text-slate-200 font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* 4. PRIMARY: Project & Verification Links */}
      <CardLinks
        liveText={quest.liveText}
        liveLink={quest.liveLink}
        githubText={quest.githubText}
        githubLink={quest.githubLink}
        borderColorClass="border-amber-700 bg-amber-900/30 text-amber-200 hover:bg-amber-800 hover:text-white"
      />

      {/* 5. SECONDARY FLAVOR: RPG Quest Rewards & Loot */}
      <div className="mt-5 border-t border-slate-800/80 pt-3 bg-amber-950/10 rounded-xl p-3 border border-amber-900/20">
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <RpgTooltip term="EXP" explanation="Experience points earned representing engineering mastery and senior problem-solving.">
              <div className="flex items-center gap-1">
                <span className="font-bold text-teal-400">⚡ EXP</span>
                <span className="font-mono font-bold text-white">+{quest.rewards.xp}</span>
              </div>
            </RpgTooltip>
            
            <RpgTooltip term="Gold" explanation="Contract value and computational resource output generated.">
              <div className="flex items-center gap-1">
                <span className="font-bold text-amber-400">🪙 Gold</span>
                <span className="font-mono font-bold text-white">+{quest.rewards.gold}</span>
              </div>
            </RpgTooltip>
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <RpgTooltip term="Loot Items" explanation="Key functional systems, frameworks, and tools forged during this contract.">
              <span className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">Loot Forged:</span>
            </RpgTooltip>
            {quest.rewards.loot.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded bg-amber-950/30 border border-amber-700/40 px-2 py-0.5 text-[11px] text-amber-300 font-display"
              >
                💎 {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectCard: React.FC<{ project: ProjectQuest }> = ({ project }) => {
  const complexityColors = {
    'Legendary': 'border-purple-500 text-purple-300 bg-purple-950/40 shadow-purple-900/20',
    'Epic': 'border-amber-500 text-amber-300 bg-amber-950/40 shadow-amber-900/20',
    'Rare': 'border-blue-500 text-blue-300 bg-blue-950/40 shadow-blue-900/20',
  };

  const complexityExplanations = {
    'Legendary': 'Multi-tiered fullstack system or algorithmic visualizer with high algorithmic depth',
    'Epic': 'Advanced interactive application with specialized state management or AI integration',
    'Rare': 'Specialized browser extension, utility platform, or interactive gameplay prototype',
  };

  return (
    <motion.div
      id={`proj-${project.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative rounded-2xl border-2 border-indigo-900/40 bg-slate-900/90 p-5 shadow-lg backdrop-blur-sm md:p-6"
    >
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-indigo-500/50" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-indigo-500/50" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-indigo-500/50" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-indigo-500/50" />

      {/* 1. PRIMARY: Project Title & Time Period */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <h4 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">{project.title}</h4>
            <RpgTooltip term={project.stats.complexity} explanation={complexityExplanations[project.stats.complexity]}>
              <span className={`inline-block rounded px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider border ${complexityColors[project.stats.complexity]}`}>
                ✨ {project.stats.complexity} Relic
              </span>
            </RpgTooltip>
          </div>
          <p className="font-mono text-xs text-amber-300/80 mt-1">Timeline: {project.period}</p>
        </div>
      </div>

      {/* 2. PRIMARY: Problem Solved & Engineering Architecture */}
      <p className="mt-4 font-sans text-sm text-slate-200 leading-relaxed bg-slate-950/30 p-3 rounded-xl border border-slate-800/60">
        {project.description}
      </p>

      {/* 3. PRIMARY: Tech Stack Badges */}
      <div className="mt-4">
        <span className="block font-mono text-[10px] text-slate-400 uppercase tracking-wider mb-1.5">Tech Stack & Tools:</span>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-slate-800 border border-slate-700 px-2 py-0.5 font-mono text-xs font-medium text-slate-200 shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* 4. PRIMARY: Live Demo and Forge (GitHub) Links */}
      <CardLinks
        liveText={project.liveText}
        liveLink={project.liveLink}
        githubText={project.githubText || (project.link ? "Forge Link (Github)" : undefined)}
        githubLink={project.githubLink || project.link}
        borderColorClass="border-indigo-700 bg-indigo-900/30 text-indigo-200 hover:bg-indigo-800 hover:text-white"
      />

      {/* 5. SECONDARY FLAVOR: RPG Stats & Passive Special Ability */}
      <div className="mt-5 border-t border-slate-800/80 pt-3 bg-indigo-950/20 rounded-xl p-3 border border-indigo-900/30 space-y-2">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <span className="font-mono text-[10px] text-indigo-300/80 uppercase tracking-wider font-semibold">Relic Mechanics:</span>
          <div className="flex items-center gap-2">
            <RpgTooltip term="Mana Cost" explanation="Represents the architectural complexity, compute weight, and development investment.">
              <div className="flex items-center gap-1 rounded bg-indigo-950/80 border border-indigo-800 px-2 py-0.5">
                <Zap className="h-3 w-3 text-indigo-400" />
                <span className="font-mono text-xs text-indigo-200">{project.stats.manaCost} MP</span>
              </div>
            </RpgTooltip>

            <RpgTooltip term="Cooldown" explanation="Turnaround latency, caching interval, and pipeline processing cycle time.">
              <div className="flex items-center gap-1 rounded bg-slate-950/80 border border-slate-800 px-2 py-0.5">
                <Clock className="h-3 w-3 text-slate-400" />
                <span className="font-mono text-xs text-slate-300">{project.stats.cooldownSec}s CD</span>
              </div>
            </RpgTooltip>
          </div>
        </div>

        <div className="flex gap-2 items-start pt-1">
          <Sparkles className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <RpgTooltip term="Passive Ability" explanation="The primary functional differentiator or algorithmic superpower of this software relic.">
              <span className="font-display text-[10.5px] font-bold uppercase tracking-wider text-indigo-300 block">
                Passive Ability:
              </span>
            </RpgTooltip>
            <span className="font-sans text-xs italic text-indigo-100">{project.stats.specialAbility}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const EducationCard: React.FC<{ school: AcademyScroll }> = ({ school }) => {
  return (
    <motion.div
      id={`edu-${school.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="relative rounded-2xl border-2 border-indigo-900/40 bg-slate-900/80 p-5 shadow-lg backdrop-blur-sm md:p-6"
    >
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-indigo-500/40" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-indigo-500/40" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-indigo-500/40" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-indigo-500/40" />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <BookOpen className="h-4 w-4 text-indigo-400" />
            <span className="font-mono text-xs font-bold text-indigo-400 uppercase tracking-wide">Arch-Academy Codex</span>
          </div>
          <h4 className="mt-2 font-display text-lg font-bold text-indigo-100">{school.institution}</h4>
          <p className="font-sans text-sm font-semibold text-indigo-300">{school.degree}</p>
        </div>
        <div className="text-right sm:text-right flex flex-col items-end">
          <span className="rounded-lg border border-indigo-950 bg-indigo-950/60 px-2.5 py-0.5 font-mono text-xs font-bold text-indigo-200">
            {school.gpa}
          </span>
          <span className="mt-1 font-mono text-[10px] text-slate-400">{school.period}</span>
        </div>
      </div>

      {/* Intelligence Boost Stat */}
      <div className="mt-4 flex items-center gap-3">
        <div className="h-2 w-full rounded-full bg-slate-800 border border-slate-700 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            style={{ width: `${Math.min(100, school.stats.intelligenceBoost * 2)}%` }}
          />
        </div>
        <span className="font-mono text-xs font-bold text-indigo-300 shrink-0">
          +{school.stats.intelligenceBoost} INT
        </span>
      </div>

      {/* Wisdom Quote Box */}
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/40 p-3 italic font-sans text-xs text-slate-300 leading-relaxed border-l-4 border-l-indigo-500">
        &ldquo;{school.stats.wisdomGained}&rdquo;
      </div>

      {/* Spellbook Additions (Skills) */}
      <div className="mt-4 space-y-2">
        <h5 className="font-display text-xs font-bold uppercase tracking-wider text-indigo-400/80">Spells Acquired (Core Courses):</h5>
        <div className="flex flex-wrap gap-1.5">
          {school.stats.skillsUnlocked.map((skill) => (
            <span
              key={skill}
              className="rounded border border-indigo-950 bg-indigo-950/30 px-2 py-0.5 font-mono text-[10px] text-indigo-200"
            >
              📜 {skill}
            </span>
          ))}
        </div>
      </div>

      <CardLinks
        liveText={school.liveText}
        liveLink={school.liveLink}
        githubText={school.githubText}
        githubLink={school.githubLink}
        borderColorClass="border-indigo-700 bg-indigo-900/30 text-indigo-200 hover:bg-indigo-800 hover:text-white"
      />
    </motion.div>
  );
};

export const AchievementCard: React.FC<{ achievement: AchievementTrophy }> = ({ achievement }) => {
  const rarityColors = {
    'Mythic': 'border-red-600 text-red-400 bg-red-950/40 shadow-red-900/30 animate-pulse',
    'Legendary': 'border-amber-500 text-amber-400 bg-amber-950/40 shadow-amber-900/30',
    'Rare': 'border-indigo-500 text-indigo-400 bg-indigo-950/40 shadow-indigo-900/30',
  };

  return (
    <motion.div
      id={`ach-${achievement.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative rounded-2xl border-2 border-amber-900/30 bg-slate-900/80 p-5 shadow-lg backdrop-blur-sm md:p-6"
    >
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-amber-500/50" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-amber-500/50" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-amber-500/50" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-amber-500/50" />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="text-3xl filter drop-shadow-[0_2px_4px_rgba(245,158,11,0.4)]">
            {achievement.rewards.badgeIcon}
          </span>
          <div>
            <span className={`inline-block rounded px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border ${rarityColors[achievement.rarity]}`}>
              🛡️ {achievement.rarity} Badge
            </span>
            <h4 className="mt-1 font-display text-lg font-bold text-amber-100">{achievement.title}</h4>
          </div>
        </div>
        <div className="text-right sm:text-right">
          <span className="font-mono text-xs text-slate-400 bg-slate-950/60 border border-slate-800 rounded px-2 py-1">
            🏆 {achievement.date}
          </span>
        </div>
      </div>

      <p className="mt-4 font-sans text-sm text-slate-300 leading-relaxed">
        {achievement.description}
      </p>

      {/* Reward Seal */}
      <div className="mt-4 flex items-center justify-between border-t border-amber-900/20 pt-3">
        <div>
          <span className="block font-display text-[10px] font-bold uppercase tracking-wider text-slate-400">Title Bestowed:</span>
          <span className="font-display text-sm font-semibold text-amber-400">
            称号: &ldquo;{achievement.rewards.titleAwarded}&rdquo;
          </span>
        </div>
        <div className="text-right">
          <span className="block font-display text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono">Prestige Multiplier</span>
          <span className="font-mono text-sm font-bold text-teal-400">
            +{achievement.rewards.prestigeGained} PRG
          </span>
        </div>
      </div>

      <CardLinks
        liveText={achievement.liveText}
        liveLink={achievement.liveLink}
        githubText={achievement.githubText || (achievement.link ? "Authenticate Triumph" : undefined)}
        githubLink={achievement.githubLink || achievement.link}
        borderColorClass="border-amber-700 bg-amber-900/30 text-amber-200 hover:bg-amber-800 hover:text-white"
      />
    </motion.div>
  );
};

export const ContactCard: React.FC<{ contact: ContactPortal }> = ({ contact }) => {
  const IconComponent = getContactIcon(contact.iconName);

  return (
    <motion.div
      id={`con-${contact.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      className="relative rounded-2xl border-2 border-teal-900/30 bg-slate-900/80 p-5 shadow-lg backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-4"
    >
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-teal-500/40" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-teal-500/40" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-teal-500/40" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-teal-500/40" />

      <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
        <div className="p-3.5 rounded-2xl bg-teal-950/60 border border-teal-800 text-teal-400">
          <IconComponent className="h-6 w-6" />
        </div>
        <div>
          <h4 className="font-display text-lg font-bold text-teal-100">{contact.name}</h4>
          <p className="font-sans text-xs text-slate-400">{contact.label}</p>
          <p className="font-mono text-sm text-slate-200 mt-0.5 selection:bg-teal-950 selection:text-teal-300">{contact.value}</p>
        </div>
      </div>

      <a
        href={contact.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full md:w-auto text-center inline-flex justify-center items-center gap-2 rounded-xl border-2 border-teal-600 bg-teal-900/40 hover:bg-teal-800 hover:text-white px-5 py-2.5 text-xs font-bold font-display text-teal-200 transition-all shadow-md"
      >
        <span>⚡ {contact.questAction}</span>
      </a>

      <CardLinks
        liveText={contact.liveText}
        liveLink={contact.liveLink}
        githubText={contact.githubText}
        githubLink={contact.githubLink}
        borderColorClass="border-teal-700 bg-teal-900/40 text-teal-200 hover:bg-teal-800 hover:text-white"
      />
    </motion.div>
  );
};

export const CertificateCard: React.FC<{ certificate: CertificateScroll }> = ({ certificate }) => {
  return (
    <motion.div
      id={`cert-${certificate.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3, transition: { duration: 0.2 } }}
      className="relative rounded-2xl border-2 border-teal-900/40 bg-slate-900/80 p-5 shadow-lg backdrop-blur-sm md:p-6"
    >
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-teal-500/40" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-teal-500/40" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-teal-500/40" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-teal-500/40" />

      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <Award className="h-4 w-4 text-teal-400" />
            <span className="font-mono text-xs font-bold text-teal-400 uppercase tracking-wide">Elite Credential Scroll</span>
          </div>
          <h4 className="mt-2 font-display text-lg font-bold text-teal-100">{certificate.title}</h4>
          <p className="font-sans text-sm font-semibold text-teal-300">{certificate.issuer}</p>
        </div>
        <div className="text-right sm:text-right flex flex-col items-end shrink-0">
          <span className="rounded-lg border border-teal-950 bg-teal-950/60 px-2.5 py-0.5 font-mono text-xs font-bold text-teal-200">
            {certificate.period}
          </span>
          <span className="mt-1 font-mono text-[10px] text-slate-400">{certificate.location}</span>
        </div>
      </div>

      {/* Relic Seal Display */}
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/40 p-3">
        <Sparkles className="h-4 w-4 text-yellow-400 shrink-0" />
        <span className="font-mono text-xs text-yellow-200 font-semibold uppercase tracking-wider">
          Artifact Unlocked: {certificate.relicName}
        </span>
      </div>

      {/* Wisdom Quote Box */}
      <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950/40 p-3 italic font-sans text-xs text-slate-300 leading-relaxed border-l-4 border-l-teal-500">
        &ldquo;{certificate.wisdomGained}&rdquo;
      </div>

      {/* Skills Unlocked */}
      <div className="mt-4 space-y-2">
        <h5 className="font-display text-xs font-bold uppercase tracking-wider text-teal-400/80">Traits & Capabilities Fortified:</h5>
        <div className="flex flex-wrap gap-1.5">
          {certificate.skillsUnlocked.map((skill) => (
            <span
              key={skill}
              className="rounded border border-teal-950 bg-teal-950/30 px-2 py-0.5 font-mono text-[10px] text-teal-200"
            >
              🛡️ {skill}
            </span>
          ))}
        </div>
      </div>

      <CardLinks
        liveText={certificate.liveText}
        liveLink={certificate.liveLink}
        githubText={certificate.githubText}
        githubLink={certificate.githubLink}
        borderColorClass="border-teal-700 bg-teal-900/40 text-teal-200 hover:bg-teal-800 hover:text-white"
      />
    </motion.div>
  );
};

export const SkillsCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
  // Map category icon strings to actual icons
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Terminal': return Terminal;
      case 'Layers': return Layers;
      case 'Wrench': return Wrench;
      case 'Cloud': return Cloud;
      default: return Sparkles;
    }
  };

  const IconComponent = getCategoryIcon(category.iconName);

  return (
    <motion.div
      id={`skills-cat-${category.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-2xl border-2 border-purple-900/40 bg-slate-900/80 p-5 shadow-lg backdrop-blur-sm md:p-6"
    >
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-purple-500/40" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-purple-500/40" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-purple-500/40" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-purple-500/40" />

      {/* Category Header */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-2xl bg-purple-950/60 border border-purple-800 text-purple-400 shrink-0">
          <IconComponent className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-display text-lg font-bold text-purple-100">{category.categoryName}</h4>
          <p className="font-sans text-xs text-slate-400 mt-0.5">{category.description}</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.skills.map((skill, index) => (
          <div 
            key={index} 
            className="p-3 rounded-xl bg-slate-950/40 border border-slate-850 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-slate-100">{skill.name}</span>
                <span className="font-mono text-[9px] font-bold text-purple-400 uppercase tracking-tight bg-purple-950/50 px-1.5 py-0.5 rounded border border-purple-900/40">
                  {skill.type}
                </span>
              </div>
              <p className="font-sans text-xs text-slate-400 mt-1.5 leading-relaxed">{skill.description}</p>
            </div>
            
            {/* Stars Mastery Rating Bar */}
            <div className="mt-3 flex items-center justify-between border-t border-slate-900 pt-2">
              <span className="font-mono text-[9px] font-bold text-slate-500 uppercase tracking-widest">Mastery</span>
              <div className="flex gap-0.5 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-3 w-3 ${i < skill.level ? 'fill-yellow-500 text-yellow-500' : 'text-slate-800 fill-transparent'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <CardLinks
        liveText={category.liveText}
        liveLink={category.liveLink}
        githubText={category.githubText}
        githubLink={category.githubLink}
        borderColorClass="border-purple-700 bg-purple-900/30 text-purple-200 hover:bg-purple-800 hover:text-white"
      />
    </motion.div>
  );
};

// ==========================================
// FEATURE 1: RECRUITER BRIEF CARD
// ==========================================
interface RecruiterBriefCardProps {
  onExploreRealm: () => void;
  onOpenContact: () => void;
  onNavigateTo: (id: string) => void;
}

export const RecruiterBriefCard: React.FC<RecruiterBriefCardProps> = ({
  onExploreRealm,
  onOpenContact,
  onNavigateTo,
}) => {
  const brief = profileBriefData;

  return (
    <motion.div
      id="recruiter-brief-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 select-none"
    >
      {/* Hero Executive Card */}
      <div className="relative rounded-2xl border-2 border-amber-500/50 bg-slate-900/90 p-5 md:p-6 shadow-2xl backdrop-blur-md">
        <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-amber-400" />
        <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-amber-400" />
        <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-amber-400" />
        <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-amber-400" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
          <div>
            <span className="inline-block font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold mb-2">
              ⚔️ Guild Recruitment Brief
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              {brief.name}
            </h3>
            <p className="font-sans text-sm md:text-base font-semibold text-amber-300 mt-0.5">
              {brief.title} • {brief.currentCompany} ({brief.yearsOfExperience})
            </p>
          </div>

          {/* Quick Direct Actions */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Prominent Portfolio Website Button */}
            <a
              href="https://portfolio.shubhamrawat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:to-yellow-200 text-slate-950 font-display text-xs font-black transition-all shadow-md shadow-amber-500/25 border-2 border-yellow-100 ring-2 ring-amber-400/40 hover:scale-105 active:scale-95 cursor-pointer"
              title="Open portfolio: portfolio.shubhamrawat.com"
            >
              <Globe className="h-4 w-4 text-slate-950 shrink-0" />
              <span>portfolio.shubhamrawat.com</span>
              <ExternalLink className="h-3 w-3 text-slate-900 shrink-0" />
            </a>

            <a
              href={brief.resumeUrl || resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 border border-amber-400/50 text-amber-200 hover:text-white font-display text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <FileText className="h-4 w-4" />
              <span>Resume / Profile</span>
            </a>
            <button
              onClick={onOpenContact}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600/30 hover:bg-teal-600/50 border border-teal-500/50 text-teal-200 hover:text-white font-display text-xs font-bold transition-all shadow-md cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              <span>Contact</span>
            </button>
          </div>
        </div>

        {/* Executive Summary Narrative */}
        <p className="font-sans text-sm text-slate-200 mt-4 leading-relaxed">
          {brief.summary}
        </p>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5">
          {brief.quickStats.map((stat, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-center flex flex-col justify-center"
            >
              <span className="font-display text-lg md:text-xl font-extrabold text-amber-400">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                {stat.label}
              </span>
              <span className="font-mono text-[9px] text-amber-400/60 italic mt-0.5">
                {stat.rpgFlavor}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Core Engineering Strengths */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-sm">
        <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2 mb-3">
          <ShieldAlert className="h-4 w-4 text-amber-400" />
          <span>Core Engineering Competencies:</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {brief.coreStrengths.map((str, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-200 bg-slate-950/40 p-2 rounded-lg border border-slate-850">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{str}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Career & Open-Source Highlights */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-sm">
        <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2 mb-3">
          <Trophy className="h-4 w-4 text-amber-400" />
          <span>Proven Career & Open-Source Milestones:</span>
        </h4>
        <div className="space-y-2.5">
          {brief.highlights.map((hl, idx) => (
            <div key={idx} className="bg-slate-950/40 p-3 rounded-xl border border-slate-850">
              <span className="font-display text-xs font-bold text-amber-200 block mb-1">
                ⭐ {hl.label}
              </span>
              <p className="font-sans text-xs text-slate-300 leading-relaxed">
                {hl.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Core Tech Stack Cloud */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 backdrop-blur-sm">
        <h4 className="font-display text-sm font-bold uppercase tracking-wider text-amber-300 flex items-center gap-2 mb-3">
          <Zap className="h-4 w-4 text-amber-400" />
          <span>Primary Technologies:</span>
        </h4>
        <div className="flex flex-wrap gap-1.5">
          {brief.keyTechnologies.map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-800 border border-slate-700 px-2.5 py-1 font-mono text-xs text-slate-200 font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Exploration Footer & Map Launchers */}
      <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-800/40 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span className="font-display text-xs font-bold text-amber-300 block">
            Ready to inspect the live code & relics?
          </span>
          <span className="font-sans text-[11px] text-amber-200/70">
            Dive into the interactive map to inspect each milestone with live demos.
          </span>
        </div>
        <button
          onClick={onExploreRealm}
          className="w-full sm:w-auto px-5 py-2.5 rounded-xl wood-panel border border-amber-600 text-yellow-100 font-display text-xs font-bold uppercase tracking-wider hover:scale-105 active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>⚔️ Explore Realm Map</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  );
};

// ==========================================
// FEATURE 4: CODEX & QUICK TRAVEL CARD
// ==========================================
interface QuickTravelCardProps {
  visitedLocations: Set<string>;
  onTravelTo: (id: string) => void;
  isFastTravel: boolean;
  onToggleFastTravel: () => void;
  onOpenBrief: () => void;
  onOpenContact: () => void;
}

const quickDestinations = [
  { id: "experience", name: "Experience City", plainName: "Work Experience", icon: "⚔️", count: "3 Quests • Outscal, SayaCare, ESMSYS" },
  { id: "projects", name: "Projects Village", plainName: "Projects & Live Demos", icon: "🔮", count: "11 Relics • Rate Limiter, AI Roast, Chess" },
  { id: "skills", name: "Guild of Skills", plainName: "Technical Skills", icon: "⚡", count: "4 Categories • Languages, Frameworks, Tools, Cloud" },
  { id: "education", name: "Academy", plainName: "Education & Academics", icon: "🎓", count: "JIMS B.Tech (9.20 CGPA) & High School" },
  { id: "achievements", name: "Achievement Castle", plainName: "Achievements & Open Source", icon: "🏆", count: "Stylelint Fix & 100xDevs Hacktoberfest" },
  { id: "certificate", name: "Credentials Dock", plainName: "Certifications", icon: "📜", count: "NASSCOM Professional Seal" },
];

export const QuickTravelCard: React.FC<QuickTravelCardProps> = ({
  visitedLocations,
  onTravelTo,
  isFastTravel,
  onToggleFastTravel,
  onOpenBrief,
  onOpenContact,
}) => {
  return (
    <motion.div
      id="quick-travel-codex"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 select-none"
    >
      {/* Top Banner & Fast Travel Mode Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-cyan-950/30 border border-cyan-800/40">
        <div>
          <h4 className="font-display text-sm font-bold text-cyan-200 uppercase tracking-wider flex items-center gap-1.5">
            <Navigation className="h-4 w-4 text-cyan-400" />
            <span>Universal Navigation Codex</span>
          </h4>
          <p className="font-sans text-xs text-slate-300 mt-0.5">
            Instant jump to any landmark without navigating the map canvas manually.
          </p>
        </div>

        {/* Fast Travel Toggle Pill */}
        <button
          onClick={onToggleFastTravel}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border font-mono text-xs transition-all cursor-pointer shadow-sm ${
            isFastTravel
              ? 'bg-amber-500/20 border-amber-500 text-amber-300'
              : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
          }`}
          title="Toggle fast travel to bypass vehicle transit animation"
        >
          <Zap className={`h-3.5 w-3.5 ${isFastTravel ? 'text-amber-400 fill-amber-400' : 'text-slate-400'}`} />
          <span className="font-bold">Fast Travel: {isFastTravel ? 'ON (0ms)' : 'OFF (450ms)'}</span>
        </button>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {quickDestinations.map((dest) => {
          const isVisited = visitedLocations.has(dest.id);

          return (
            <button
              key={dest.id}
              onClick={() => onTravelTo(dest.id)}
              className="p-4 rounded-2xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-cyan-500/50 text-left transition-all hover:scale-[1.02] active:scale-[0.98] group flex flex-col justify-between shadow-md cursor-pointer"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl">{dest.icon}</span>
                  <div>
                    <span className="font-display font-bold text-sm text-white group-hover:text-cyan-200 transition-colors block">
                      {dest.name}
                    </span>
                    <span className="font-sans text-xs font-medium text-cyan-400">
                      {dest.plainName}
                    </span>
                  </div>
                </div>

                {/* Visited Indicator */}
                <span
                  className={`inline-flex items-center gap-1 font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                    isVisited
                      ? 'bg-emerald-950/60 border-emerald-700/60 text-emerald-400'
                      : 'bg-slate-950/60 border-slate-800 text-slate-500'
                  }`}
                >
                  {isVisited ? (
                    <>
                      <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                      <span>Explored</span>
                    </>
                  ) : (
                    <>
                      <Circle className="h-2.5 w-2.5 text-slate-500" />
                      <span>Unexplored</span>
                    </>
                  )}
                </span>
              </div>

              <p className="font-sans text-[11px] text-slate-400 mt-2.5 line-clamp-1">
                {dest.count}
              </p>

              <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-display font-semibold text-cyan-300 group-hover:translate-x-1 transition-transform">
                <span>Teleport to Location</span>
                <span>➔</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Standalone Portals: Portfolio, Brief, Contact, Resume */}
      <div className="border-t border-slate-800/80 pt-4 flex flex-col gap-2.5">
        {/* Prominent Featured Portfolio Button */}
        <a
          href="https://portfolio.shubhamrawat.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-xl bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 hover:from-amber-300 hover:to-yellow-200 text-slate-950 flex items-center justify-between gap-3 text-xs font-display font-black shadow-lg shadow-amber-500/25 border-2 border-yellow-100 ring-2 ring-amber-400/40 hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer"
          title="Redirect to portfolio website: portfolio.shubhamrawat.com"
        >
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-slate-950 shrink-0" />
            <span className="font-extrabold">Official Portfolio Website (portfolio.shubhamrawat.com)</span>
          </div>
          <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-slate-900 bg-amber-200/80 px-2 py-0.5 rounded">
            <span>Visit</span>
            <ExternalLink className="h-3 w-3 text-slate-950" />
          </div>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={onOpenBrief}
            className="p-3 rounded-xl bg-amber-950/20 hover:bg-amber-950/40 border border-amber-800/50 text-amber-200 flex items-center gap-2 text-xs font-display font-bold transition-all cursor-pointer"
          >
            <FileText className="h-4 w-4 text-amber-400" />
            <span>Recruiter Brief (30s)</span>
          </button>

          <button
            onClick={onOpenContact}
            className="p-3 rounded-xl bg-teal-950/20 hover:bg-teal-950/40 border border-teal-800/50 text-teal-200 flex items-center gap-2 text-xs font-display font-bold transition-all cursor-pointer"
          >
            <Mail className="h-4 w-4 text-teal-400" />
            <span>Contact Shubham</span>
          </button>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl bg-indigo-950/20 hover:bg-indigo-950/40 border border-indigo-800/50 text-indigo-200 flex items-center gap-2 text-xs font-display font-bold transition-all cursor-pointer"
          >
            <ExternalLink className="h-4 w-4 text-indigo-400" />
            <span>Download / Resume</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ==========================================
// FEATURE 11: KEYBOARD SHORTCUTS CARD
// ==========================================
export const KeyboardShortcutsCard: React.FC = () => {
  const shortcuts = [
    { key: "Esc", desc: "Close any active scroll, modal, or codex" },
    { key: "Enter", desc: "Activate and explore focused landmark or button" },
    { key: "Space", desc: "Instantly skip in-transit vehicle travel animation" },
    { key: "R", desc: "Open Guild Recruitment Brief (30s skimmable summary)" },
    { key: "C", desc: "Open Universal Codex & Quick Travel navigation" },
    { key: "?", desc: "Toggle this keyboard shortcuts cheatsheet" },
    { key: "Tab", desc: "Cycle keyboard focus across landmarks and buttons" },
  ];

  return (
    <motion.div
      id="shortcuts-reference-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4 select-none"
    >
      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs font-sans text-slate-300 leading-relaxed">
        ⌨️ Power-user keyboard controls for rapid, accessible navigation across the fantasy realm.
      </div>

      <div className="divide-y divide-slate-800/80 rounded-2xl border border-slate-800 bg-slate-900/80 overflow-hidden">
        {shortcuts.map((item, idx) => (
          <div key={idx} className="p-3 flex items-center justify-between gap-4">
            <span className="font-sans text-xs text-slate-200">{item.desc}</span>
            <kbd className="px-2.5 py-1 rounded bg-slate-950 border border-slate-700 font-mono text-xs font-bold text-amber-300 shadow-inner shrink-0">
              {item.key}
            </kbd>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
