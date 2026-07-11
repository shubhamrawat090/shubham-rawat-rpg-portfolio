import React from 'react';
import { Mail, Linkedin, Github, Phone, Code, Sparkles, Trophy, BookOpen, Star, ShieldAlert, Zap, Compass, Award, Terminal, Layers, Wrench, Cloud } from 'lucide-react';
import { ExperienceQuest } from '../data/experience';
import { ProjectQuest } from '../data/projects';
import { AcademyScroll } from '../data/education';
import { AchievementTrophy } from '../data/achievements';
import { ContactPortal } from '../data/contact';
import { CertificateScroll } from '../data/certificate';
import { SkillCategory } from '../data/skills';
import { motion } from 'motion/react';

// Map icon string to Lucide component
const getContactIcon = (name: string) => {
  switch (name) {
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
    'S-Tier': 'border-red-500 text-red-400 bg-red-950/40 shadow-red-900/30',
    'A-Tier': 'border-amber-500 text-amber-400 bg-amber-950/40 shadow-amber-900/30',
    'B-Tier': 'border-cyan-500 text-cyan-400 bg-cyan-950/40 shadow-cyan-900/30',
  };

  return (
    <motion.div
      id={`exp-${quest.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative rounded-2xl border-2 border-amber-900/40 bg-slate-900/80 p-5 shadow-lg backdrop-blur-sm md:p-6"
    >
      {/* Corner Brackets */}
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-amber-500/50" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-amber-500/50" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-amber-500/50" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-amber-500/50" />

      {/* Quest Header */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className={`inline-block rounded px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider border ${tierColors[quest.questTier]}`}>
            {quest.questTier} Quest
          </span>
          <h4 className="mt-2 font-display text-xl font-bold tracking-tight text-amber-100">{quest.role}</h4>
          <p className="font-sans text-sm font-medium text-amber-400/90">@ {quest.company}</p>
        </div>
        <div className="text-right sm:text-right">
          <span className="font-mono text-xs text-amber-200/60 bg-amber-950/30 border border-amber-900/50 rounded-lg px-2 py-1">
            ⏳ {quest.period}
          </span>
        </div>
      </div>

      {/* Quest Steps (Bullet points) */}
      <div className="mt-5 space-y-3">
        <h5 className="font-display text-xs font-semibold uppercase tracking-wider text-amber-500/80">Quest Objectives:</h5>
        <ul className="space-y-2 font-sans text-sm text-slate-300 leading-relaxed">
          {quest.bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack / Spell Requirements */}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {quest.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border border-slate-700 bg-slate-850 px-2 py-0.5 font-mono text-[11px] text-slate-300 shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Quest Rewards */}
      <div className="mt-6 border-t border-amber-900/30 pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-teal-400">⚡ EXP</span>
              <span className="font-mono text-sm font-bold text-white">+{quest.rewards.xp}</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm font-bold text-amber-400">🪙 Gold</span>
              <span className="font-mono text-sm font-bold text-white">+{quest.rewards.gold}</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Loot Unlocked:</span>
            {quest.rewards.loot.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded bg-amber-950/30 border border-amber-700/40 px-2 py-0.5 text-xs text-amber-300 font-display"
              >
                💎 {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <CardLinks
        liveText={quest.liveText}
        liveLink={quest.liveLink}
        githubText={quest.githubText}
        githubLink={quest.githubLink}
        borderColorClass="border-amber-700 bg-amber-900/30 text-amber-200 hover:bg-amber-800 hover:text-white"
      />
    </motion.div>
  );
};

export const ProjectCard: React.FC<{ project: ProjectQuest }> = ({ project }) => {
  const complexityColors = {
    'Legendary': 'border-purple-500 text-purple-400 bg-purple-950/40 shadow-purple-900/20',
    'Epic': 'border-amber-500 text-amber-400 bg-amber-950/40 shadow-amber-900/20',
    'Rare': 'border-blue-500 text-blue-400 bg-blue-950/40 shadow-blue-900/20',
  };

  return (
    <motion.div
      id={`proj-${project.id}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="relative rounded-2xl border-2 border-amber-900/40 bg-slate-900/80 p-5 shadow-lg backdrop-blur-sm md:p-6"
    >
      <div className="absolute top-2 left-2 h-2 w-2 border-t-2 border-l-2 border-amber-500/50" />
      <div className="absolute top-2 right-2 h-2 w-2 border-t-2 border-r-2 border-amber-500/50" />
      <div className="absolute bottom-2 left-2 h-2 w-2 border-b-2 border-l-2 border-amber-500/50" />
      <div className="absolute bottom-2 right-2 h-2 w-2 border-b-2 border-r-2 border-amber-500/50" />

      {/* Title & Stats */}
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <span className={`inline-block rounded px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider border ${complexityColors[project.stats.complexity]}`}>
            ✨ {project.stats.complexity} Relic
          </span>
          <h4 className="mt-2 font-display text-xl font-bold tracking-tight text-amber-100">{project.title}</h4>
          <p className="font-mono text-xs text-amber-400/80 mt-1">⌛ Transmuted: {project.period}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded bg-indigo-950/50 border border-indigo-900 px-2 py-1">
            <Zap className="h-3 w-3 text-indigo-400" />
            <span className="font-mono text-xs text-indigo-200">{project.stats.manaCost} MP</span>
          </div>
          <div className="flex items-center gap-1 rounded bg-slate-950/50 border border-slate-800 px-2 py-1">
            <span className="font-mono text-xs text-slate-300">{project.stats.cooldownSec}s CD</span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 font-sans text-sm text-slate-300 leading-relaxed">
        {project.description}
      </p>

      {/* Special Ability Box */}
      <div className="mt-4 rounded-xl border border-indigo-900/50 bg-indigo-950/20 p-3">
        <div className="flex gap-2 items-start">
          <Sparkles className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <span className="block font-display text-[11px] font-bold uppercase tracking-wider text-indigo-400">Passive Special Ability:</span>
            <span className="font-sans text-xs italic text-indigo-200">{project.stats.specialAbility}</span>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded bg-slate-850 border border-slate-700 px-2 py-0.5 font-mono text-[11px] text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action / Source Code Link */}
      <CardLinks
        liveText={project.liveText}
        liveLink={project.liveLink}
        githubText={project.githubText || (project.link ? "Forge Link (Github)" : undefined)}
        githubLink={project.githubLink || project.link}
        borderColorClass="border-amber-700 bg-amber-900/30 text-amber-200 hover:bg-amber-800 hover:text-white"
      />
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
