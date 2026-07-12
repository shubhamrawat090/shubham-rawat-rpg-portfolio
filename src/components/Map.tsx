import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, Sparkles, Trophy, Star, BookOpen, MapPin, ExternalLink, RefreshCw } from 'lucide-react';

interface LocationInfo {
  id: string;
  name: string;
  mobileName: string;
  subtitle: string;
  tooltip: string;
  badge: 'Featured' | 'New' | 'Explored';
  stars: number;
  x: number; // percentage from left
  y: number; // percentage from top
  color: string; // Tailwind color class
  hoverColor: string;
}

interface MapProps {
  onLocationClick: (id: string) => void;
  selectedLocationId: string | null;
}

const locations: LocationInfo[] = [
  {
    id: "experience",
    name: "Experience City",
    mobileName: "Experience",
    subtitle: "Busy offices & industrial workshops",
    tooltip: "Companies I've worked with.",
    badge: "Featured",
    stars: 3,
    x: 15,
    y: 33,
    color: "from-amber-600 to-amber-800 border-amber-900",
    hoverColor: "shadow-amber-500/40"
  },
  {
    id: "projects",
    name: "Projects Village",
    mobileName: "Projects",
    subtitle: "Innovation labs & creative windmills",
    tooltip: "Software I've built.",
    badge: "New",
    stars: 3,
    x: 45,
    y: 23,
    color: "from-emerald-500 to-emerald-700 border-emerald-900",
    hoverColor: "shadow-emerald-500/40"
  },
  {
    id: "skills",
    name: "Guild of Skills",
    mobileName: "Skills",
    subtitle: "Magical forges & core languages",
    tooltip: "My software spellbook.",
    badge: "Featured",
    stars: 3,
    x: 75,
    y: 23,
    color: "from-purple-500 to-purple-700 border-purple-900",
    hoverColor: "shadow-purple-500/40"
  },
  {
    id: "education",
    name: "Academy",
    mobileName: "Academy",
    subtitle: "University & clocktower libraries",
    tooltip: "My learning journey.",
    badge: "Explored",
    stars: 3,
    x: 86,
    y: 49,
    color: "from-indigo-500 to-indigo-700 border-indigo-900",
    hoverColor: "shadow-indigo-500/40"
  },
  {
    id: "achievements",
    name: "Achievement Castle",
    mobileName: "Achievements",
    subtitle: "Royal trophies & monument spires",
    tooltip: "Milestones unlocked.",
    badge: "Featured",
    stars: 3,
    x: 62,
    y: 78,
    color: "from-yellow-500 to-amber-600 border-amber-850",
    hoverColor: "shadow-yellow-400/40"
  },
  {
    id: "certificate",
    name: "Credentials Dock",
    mobileName: "Credentials",
    subtitle: "Certificates & credentials",
    tooltip: "Professional certifications.",
    badge: "New",
    stars: 3,
    x: 30,
    y: 76,
    color: "from-teal-500 to-teal-700 border-teal-900",
    hoverColor: "shadow-teal-400/40"
  }
];

export const Map: React.FC<MapProps> = ({ onLocationClick, selectedLocationId }) => {
  const [hoveredLocationId, setHoveredLocationId] = useState<string | null>(null);

  // Get active coordinates for the car position
  const activeLoc = locations.find(l => l.id === (selectedLocationId || 'experience')) || locations[0];

  return (
    <div 
      id="fantasy-map-container"
      className="relative w-full aspect-[16/10] md:aspect-[16/9] min-h-[360px] max-h-[640px] parchment-bg rounded-3xl p-2 overflow-hidden border-8 border-[#5c2d12] shadow-2xl select-none"
    >
      
      {/* 1. FLOATING CLOUDS IN THE SKY */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {/* Cloud 1 */}
        <motion.div
          animate={{ x: ['-20%', '120%'] }}
          transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
          className="absolute top-[8%] left-0 opacity-40"
        >
          <div className="w-24 h-8 bg-white/70 rounded-full blur-[1px] relative before:content-[''] before:absolute before:-top-4 before:left-4 before:w-12 before:h-12 before:bg-white/70 before:rounded-full after:content-[''] after:absolute after:-top-2 after:right-4 after:w-10 after:h-10 after:bg-white/70 after:rounded-full" />
        </motion.div>
        {/* Cloud 2 */}
        <motion.div
          animate={{ x: ['120%', '-20%'] }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute top-[18%] right-0 opacity-30"
        >
          <div className="w-32 h-10 bg-white/60 rounded-full blur-[2px] relative before:content-[''] before:absolute before:-top-5 before:left-6 before:w-16 before:h-16 before:bg-white/60 before:rounded-full" />
        </motion.div>
        {/* Cloud 3 */}
        <motion.div
          animate={{ x: ['-10%', '110%'] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear", delay: 20 }}
          className="absolute top-[40%] left-0 opacity-20"
        >
          <div className="w-20 h-6 bg-white/50 rounded-full blur-[1px] relative before:content-[''] before:absolute before:-top-3 before:left-3 before:w-10 before:h-10 before:bg-white/50 before:rounded-full" />
        </motion.div>
      </div>

      {/* 2. SVG LAYER: RIVERS, BRIDGES, ROADS (CONNECTED PATHS) */}
      <svg 
        id="map-roads-and-rivers"
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Water gradient */}
          <linearGradient id="river-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.8" />
          </linearGradient>
          {/* Sand path glow */}
          <filter id="road-glow">
            <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* --- BEAUTIFUL SPARKLING RIVER --- */}
        {/* The river flows windingly from top-center down to bottom-left */}
        <path 
          d="M 52,0 C 51,15 42,25 36,36 C 30,48 40,55 34,68 C 29,78 12,85 0,88 L 0,100 L 100,100 L 100,95 L 42,85 C 48,72 44,60 48,48 C 52,36 58,20 58,0 Z" 
          fill="url(#river-grad)"
          className="opacity-25"
        />
        {/* River current lines */}
        <path 
          d="M 53,4 Q 45,20 38,36 T 36,65" 
          stroke="#e0f2fe" 
          strokeWidth="0.4" 
          strokeDasharray="4,8" 
          fill="none" 
          className="opacity-40"
        />
        <path 
          d="M 55,12 Q 49,28 41,42 T 32,74" 
          stroke="#e0f2fe" 
          strokeWidth="0.3" 
          strokeDasharray="6,12" 
          fill="none" 
          className="opacity-30"
        />

        {/* --- WOODEN BRIDGE OVER RIVER --- */}
        {/* The road from Credentials Dock (30,76) to Castle (62,78) crosses the river around x:38, y:77.5 */}
        <g id="bridge-graphic" className="opacity-80">
          {/* Bridge base */}
          <rect x="36.5" y="76.5" width="4.5" height="2" rx="0.3" fill="#78350f" transform="rotate(-15 38.5 77.5)" />
          {/* Bridge rails */}
          <line x1="36.5" y1="76" x2="41" y2="77" stroke="#451a03" strokeWidth="0.3" />
          <line x1="36.8" y1="78.8" x2="41.3" y2="79.8" stroke="#451a03" strokeWidth="0.3" />
          {/* Bridge planks */}
          <line x1="37.5" y1="76.2" x2="37.3" y2="78.8" stroke="#f59e0b" strokeWidth="0.25" />
          <line x1="38.5" y1="76.5" x2="38.3" y2="79.1" stroke="#f59e0b" strokeWidth="0.25" />
          <line x1="39.5" y1="76.8" x2="39.3" y2="79.4" stroke="#f59e0b" strokeWidth="0.25" />
          <line x1="40.5" y1="77.1" x2="40.3" y2="79.7" stroke="#f59e0b" strokeWidth="0.25" />
        </g>

        {/* --- WINDING ROAD PATHS CONNECTING LOCATIONS --- */}
        {/* Experience City (15,33) to Projects Village (45,23) */}
        <path 
          d="M 15,33 C 22,25 34,19 45,23" 
          stroke="#78350f" 
          strokeWidth="0.8" 
          strokeDasharray="1.2,1.2" 
          fill="none" 
          className="opacity-70"
          filter="url(#road-glow)"
        />
        {/* Projects Village (45,23) to Guild of Skills (75,23) */}
        <path 
          d="M 45,23 C 55,19 65,19 75,23" 
          stroke="#78350f" 
          strokeWidth="0.8" 
          strokeDasharray="1.2,1.2" 
          fill="none" 
          className="opacity-70"
          filter="url(#road-glow)"
        />
        {/* Guild of Skills (75,23) to Academy (86,49) */}
        <path 
          d="M 75,23 C 82,29 88,39 86,49" 
          stroke="#78350f" 
          strokeWidth="0.8" 
          strokeDasharray="1.2,1.2" 
          fill="none" 
          className="opacity-70"
          filter="url(#road-glow)"
        />
        {/* Academy (86,49) to Achievement Castle (62,78) */}
        <path 
          d="M 86,49 C 82,61 74,71 62,78" 
          stroke="#78350f" 
          strokeWidth="0.8" 
          strokeDasharray="1.2,1.2" 
          fill="none" 
          className="opacity-70"
          filter="url(#road-glow)"
        />
        {/* Achievement Castle (62,78) to Credentials Dock (30,76) */}
        <path 
          d="M 62,78 C 52,80 40,80 30,76" 
          stroke="#78350f" 
          strokeWidth="0.8" 
          strokeDasharray="1.2,1.2" 
          fill="none" 
          className="opacity-70"
          filter="url(#road-glow)"
        />
        {/* Credentials Dock (30,76) to Experience City (15,33) */}
        <path 
          d="M 30,76 C 20,71 12,53 15,33" 
          stroke="#78350f" 
          strokeWidth="0.8" 
          strokeDasharray="1.2,1.2" 
          fill="none" 
          className="opacity-70"
          filter="url(#road-glow)"
        />

        {/* Tiny Decorative Footsteps on Map */}
        <circle cx="28" cy="26" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="33" cy="23" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="56" cy="21" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="63" cy="23" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="81" cy="43" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="78" cy="51" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="48" cy="78" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="55" cy="77" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="21" cy="58" r="0.3" fill="#78350f" className="opacity-40" />
        <circle cx="23" cy="48" r="0.3" fill="#78350f" className="opacity-40" />
      </svg>

      {/* 3. STATIC DECORATIVE MAP ELEMENTS (TREES, CAMPFIRE, LIGHTS) */}
      
      {/* Campfire in the center-ish area (x: 52%, y: 58%) */}
      <div 
        style={{ left: '52%', top: '58%' }} 
        className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-none flex flex-col items-center scale-75 md:scale-100"
      >
        {/* Animated flickering flame */}
        <div className="relative h-6 w-6 flex items-center justify-center">
          <div className="absolute bottom-0 w-3 h-3 rounded-full bg-orange-600 animate-flicker" />
          <div className="absolute bottom-0.5 w-2 h-2.5 rounded-full bg-yellow-400 animate-pulse" />
          {/* Campfire Embers */}
          <motion.div 
            animate={{ y: [0, -15], opacity: [0, 0.8, 0], scale: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
            className="absolute bottom-1 w-1 h-1 rounded-full bg-amber-400"
          />
          <motion.div 
            animate={{ y: [0, -10], x: [-2, 2], opacity: [0, 0.9, 0], scale: [0.3, 0.8, 0.3] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-1 w-1 h-1 rounded-full bg-red-400"
          />
        </div>
        {/* Logs */}
        <div className="flex gap-1 -mt-1 select-none pointer-events-none">
          <div className="w-3 h-1 bg-[#451a03] rounded rotate-12" />
          <div className="w-3 h-1 bg-[#451a03] rounded -rotate-12 -ml-1.5" />
        </div>
        {/* Campfire Label */}
        <span className="font-mono text-[8px] font-bold text-amber-800/60 mt-0.5 uppercase tracking-tight hidden md:inline">Camp</span>
      </div>

      {/* Wooden Signboards scattered across the map */}
      <div style={{ left: '30%', top: '38%' }} className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 select-none hidden md:block">
        <div className="flex flex-col items-center">
          <div className="wood-panel-light px-1 rounded border border-[#3b1c0c] text-[7px] font-bold text-yellow-100 shadow-sm leading-none whitespace-nowrap">
            👈 CITY
          </div>
          <div className="w-0.5 h-2 bg-[#5c2d12] border-x border-[#3b1c0c]" />
        </div>
      </div>
      <div style={{ left: '68%', top: '26%' }} className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 select-none hidden md:block">
        <div className="flex flex-col items-center">
          <div className="wood-panel-light px-1 rounded border border-[#3b1c0c] text-[7px] font-bold text-yellow-100 shadow-sm leading-none whitespace-nowrap">
            ACADEMY 👉
          </div>
          <div className="w-0.5 h-2 bg-[#5c2d12] border-x border-[#3b1c0c]" />
        </div>
      </div>

      {/* Pine Trees scattered around (using pure styled CSS) */}
      {/* Forest 1: near Experience City */}
      <div style={{ left: '10%', top: '43%' }} className="absolute pointer-events-none scale-75 animate-sway hidden md:block">
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-emerald-800" />
        <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[10px] border-b-emerald-800 -mt-2" />
        <div className="w-1.5 h-3 bg-amber-950 mx-auto -mt-0.5" />
      </div>
      <div style={{ left: '13%', top: '47%' }} className="absolute pointer-events-none scale-50 animate-sway delay-300 hidden md:block">
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-emerald-850" />
        <div className="w-1.5 h-3 bg-amber-950 mx-auto -mt-1" />
      </div>

      {/* Forest 2: near Academy */}
      <div style={{ left: '88%', top: '45%' }} className="absolute pointer-events-none scale-75 animate-sway delay-500 hidden md:block">
        <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-emerald-800" />
        <div className="w-1.5 h-3 bg-amber-950 mx-auto -mt-1" />
      </div>

      {/* Forest 3: near Castle */}
      <div style={{ left: '60%', top: '80%' }} className="absolute pointer-events-none scale-90 animate-sway delay-150 hidden md:block">
        <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-emerald-800" />
        <div className="w-2 h-4 bg-amber-950 mx-auto -mt-1" />
      </div>

      {/* Little sailboat near the harbor */}
      <motion.div 
        style={{ left: '26%', top: '84%' }}
        animate={{ y: [0, -3, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute pointer-events-none shrink-0 hidden md:block"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-950 drop-shadow">
          <path d="M4 15 L20 15 L17 19 L7 19 Z" fill="#78350f" />
          <path d="M12 4 L12 15 L18 10 Z" fill="#f8fafc" />
          <line x1="12" y1="4" x2="12" y2="15" stroke="#451a03" strokeWidth="1" />
        </svg>
      </motion.div>


      {/* 4. DYNAMIC INTERACTIVE LOCATION NODES */}
      {locations.map((loc) => {
        const isSelected = selectedLocationId === loc.id;
        const isHovered = hoveredLocationId === loc.id;

        return (
          <div
            key={loc.id}
            id={`node-${loc.id}`}
            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
            className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
          >
            {/* TOOLTIP DISPLAY */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 5, scale: 0.95 }}
                  className="absolute bottom-full mb-3 px-3 py-1.5 rounded-xl bg-slate-950/95 border border-amber-500/50 shadow-lg text-center pointer-events-none z-30 whitespace-nowrap shrink-0"
                >
                  <p className="font-display font-bold text-[11px] text-amber-400 uppercase tracking-wide">
                    {loc.name}
                  </p>
                  <p className="font-sans text-[9px] text-slate-300 mt-0.5 leading-none">
                    {loc.tooltip}
                  </p>
                  {/* Tooltip caret */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-950" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* LOCATION BUILDING RENDERER */}
            <button
              onClick={() => onLocationClick(loc.id)}
              onMouseEnter={() => setHoveredLocationId(loc.id)}
              onMouseLeave={() => setHoveredLocationId(null)}
              className="relative p-1.5 focus:outline-none transition-transform duration-300 active:scale-95"
              aria-label={`Inspect ${loc.name}`}
            >
              
              {/* Highlight Pulse Glow ring when selected */}
              {isSelected && (
                <div className="absolute inset-0 rounded-full border-4 border-amber-500 bg-amber-500/10 animate-ping opacity-70" />
              )}

              {/* Building Container with Hover Scale */}
              <motion.div
                animate={{
                  scale: isSelected ? 1.15 : isHovered ? 1.1 : 1,
                  filter: isHovered || isSelected ? 'brightness(1.1) drop-shadow(0 0 8px rgba(217,119,6,0.5))' : 'brightness(1) drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="w-11 h-11 md:w-16 md:h-16 rounded-full bg-amber-950/10 border-2 border-transparent flex items-center justify-center cursor-pointer"
              >
                {/* Visual rendering according to specific building details */}
                {loc.id === 'experience' && (
                  <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    {/* Experience City: Workshop with smoking chimneys */}
                    <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-12 md:h-12">
                      <rect x="12" y="24" width="40" height="28" rx="4" fill="#a16207" stroke="#451a03" strokeWidth="2" />
                      <polygon points="10,24 32,10 54,24" fill="#78350f" stroke="#451a03" strokeWidth="2" />
                      {/* Chimney */}
                      <rect x="42" y="12" width="6" height="14" fill="#5c2d12" stroke="#451a03" strokeWidth="2" />
                      {/* Animated Smoke */}
                      <div className="absolute top-[8px] right-[14px]">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-smoke" style={{ animationDelay: '0s' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-smoke" style={{ animationDelay: '1.2s' }} />
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-smoke" style={{ animationDelay: '2.4s' }} />
                      </div>
                      {/* Gears on facade */}
                      <circle cx="32" cy="34" r="6" fill="#ca8a04" stroke="#451a03" strokeWidth="2" />
                      <line x1="32" y1="26" x2="32" y2="42" stroke="#451a03" strokeWidth="2" />
                      <line x1="26" y1="34" x2="38" y2="34" stroke="#451a03" strokeWidth="2" />
                      {/* Windows/doors */}
                      <rect x="28" y="42" width="8" height="10" rx="1" fill="#451a03" />
                    </svg>
                  </div>
                )}

                {loc.id === 'projects' && (
                  <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    {/* Projects Village: Creative Windmill */}
                    <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-12 md:h-12">
                      {/* Windmill tower base */}
                      <path d="M 22,52 L 28,18 L 36,18 L 42,52 Z" fill="#047857" stroke="#064e3b" strokeWidth="2" />
                      {/* Roof cap */}
                      <path d="M 26,18 Q 32,8 38,18 Z" fill="#065f46" stroke="#064e3b" strokeWidth="2" />
                      {/* Tiny door */}
                      <rect x="29" y="44" width="6" height="8" rx="1" fill="#064e3b" />
                      
                      {/* Rotating windmill blades */}
                      <motion.g 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        style={{ transformOrigin: '32px 18px' }}
                      >
                        {/* Center hub */}
                        <circle cx="32" cy="18" r="3" fill="#fbc531" stroke="#064e3b" strokeWidth="1" />
                        {/* 4 Blades */}
                        <path d="M 32,18 L 32,2 M 31,6 L 33,6 L 33,2 L 31,2 Z" fill="#ca8a04" stroke="#064e3b" strokeWidth="1" />
                        <path d="M 32,18 L 32,34 M 31,30 L 33,30 L 33,34 L 31,34 Z" fill="#ca8a04" stroke="#064e3b" strokeWidth="1" />
                        <path d="M 32,18 L 48,18 M 44,17 L 44,19 L 48,19 L 48,17 Z" fill="#ca8a04" stroke="#064e3b" strokeWidth="1" />
                        <path d="M 32,18 L 16,18 M 20,17 L 20,19 L 16,19 L 16,17 Z" fill="#ca8a04" stroke="#064e3b" strokeWidth="1" />
                      </motion.g>
                    </svg>
                  </div>
                )}

                {loc.id === 'skills' && (
                  <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    {/* Skills Guild: Magical spire and library books */}
                    <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-12 md:h-12">
                      <rect x="22" y="24" width="20" height="28" fill="#6d28d9" stroke="#4c1d95" strokeWidth="2" />
                      <polygon points="18,24 32,10 46,24" fill="#5b21b6" stroke="#4c1d95" strokeWidth="2" />
                      <circle cx="32" cy="34" r="5" fill="#ca8a04" stroke="#4c1d95" strokeWidth="1.5" />
                      <path d="M 28,52 L 28,46 Q 32,43 36,46 L 36,52 Z" fill="#4c1d95" />
                      {/* Floating glowing particle */}
                      <motion.circle
                        cx="32"
                        cy="6"
                        r="2.5"
                        fill="#fbbf24"
                        animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                )}

                {loc.id === 'education' && (
                  <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    {/* Academy: Clocktower & library dome */}
                    <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-12 md:h-12">
                      <rect x="14" y="28" width="36" height="24" rx="2" fill="#4338ca" stroke="#1e1b4b" strokeWidth="2" />
                      {/* Clocktower */}
                      <rect x="26" y="8" width="12" height="28" fill="#312e81" stroke="#1e1b4b" strokeWidth="2" />
                      {/* Pointy roof spire */}
                      <polygon points="24,8 32,-2 40,8" fill="#1e1b4b" />
                      {/* Clock Circle */}
                      <circle cx="32" cy="16" r="3.5" fill="#ffffff" stroke="#1e1b4b" strokeWidth="1" />
                      {/* Clock hands */}
                      <line x1="32" y1="16" x2="32" y2="14" stroke="#1e1b4b" strokeWidth="0.8" />
                      <line x1="32" y1="16" x2="33.5" y2="16" stroke="#1e1b4b" strokeWidth="0.8" />
                      {/* Columns / Arch entry */}
                      <path d="M 28,52 L 28,42 Q 32,38 36,42 L 36,52 Z" fill="#1e1b4b" />
                    </svg>
                  </div>
                )}

                {loc.id === 'achievements' && (
                  <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    {/* Achievement Castle: Towers, golden spires */}
                    <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-12 md:h-12">
                      {/* Main wall */}
                      <rect x="18" y="26" width="28" height="26" fill="#b45309" stroke="#451a03" strokeWidth="2" />
                      {/* Left Tower */}
                      <rect x="12" y="14" width="8" height="38" fill="#92400e" stroke="#451a03" strokeWidth="2" />
                      <polygon points="10,14 16,2 22,14" fill="#d97706" stroke="#451a03" strokeWidth="1.5" />
                      {/* Right Tower */}
                      <rect x="44" y="14" width="8" height="38" fill="#92400e" stroke="#451a03" strokeWidth="2" />
                      <polygon points="42,14 48,2 54,14" fill="#d97706" stroke="#451a03" strokeWidth="1.5" />
                      {/* Castle Gate */}
                      <path d="M 27,52 L 27,40 Q 32,36 37,40 L 37,52 Z" fill="#451a03" />
                      {/* Floating glowing golden star above castle */}
                      <motion.g
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <path d="M 32,4 L 33.5,8 L 37.5,8 L 34.5,10.5 L 35.5,14.5 L 32,12 L 28.5,14.5 L 29.5,10.5 L 26.5,8 L 30.5,8 Z" fill="#fbbf24" stroke="#78350f" strokeWidth="0.8" />
                      </motion.g>
                    </svg>
                  </div>
                )}

                {loc.id === 'certificate' && (
                  <div className="relative w-10 h-10 md:w-14 md:h-14 flex items-center justify-center">
                    {/* Credentials Dock: Lighthouse & Docks */}
                    <svg viewBox="0 0 64 64" className="w-8 h-8 md:w-12 md:h-12">
                      {/* Docks base */}
                      <rect x="10" y="44" width="44" height="8" rx="2" fill="#0f766e" stroke="#115e59" strokeWidth="2" />
                      {/* Lighthouse/Credentials Tower */}
                      <path d="M 24,44 L 28,16 L 36,16 L 40,44 Z" fill="#0d9488" stroke="#115e59" strokeWidth="2" />
                      {/* Top cap / golden credential seal */}
                      <motion.circle 
                        cx="32" 
                        cy="14" 
                        r="4" 
                        fill="#fbbf24" 
                        stroke="#d97706" 
                        strokeWidth="1" 
                        animate={{ scale: [1, 1.12, 1] }} 
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
                      />
                      <path d="M 32,18 L 30,26 L 34,26 Z" fill="#d97706" />
                    </svg>
                  </div>
                )}
              </motion.div>
            </button>

            {/* STATUS BADGES & STARS */}
            <div className="flex flex-col items-center mt-1 text-center pointer-events-none">
              
              {/* Star Rating Panel (⭐ ⭐ ⭐) */}
              <div className="hidden md:flex items-center gap-0.5 mb-0.5 scale-90">
                {[...Array(loc.stars)].map((_, i) => (
                  <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-500 filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]" />
                ))}
              </div>

              {/* Wooden name sign */}
              <div className="wood-panel-light px-1 md:px-2.5 py-0.5 rounded border border-[#3b1c0c] flex items-center gap-0.5 md:gap-1 shadow-md">
                <span className="hidden md:inline font-display font-bold text-[9px] text-yellow-500 whitespace-nowrap leading-none uppercase tracking-wide">
                  {loc.name}
                </span>
                <span className="inline md:hidden font-display font-bold text-[7.5px] text-yellow-500 whitespace-nowrap leading-none uppercase tracking-wide">
                  {loc.mobileName}
                </span>
                {/* Small indicator */}
                <span className="inline-block h-1 w-1 md:h-1.5 md:w-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* Status Badge */}
              <span className={`mt-1 hidden md:inline-block px-1.5 py-0.5 rounded text-[8px] font-bold font-mono tracking-wider uppercase border shadow-sm ${
                loc.badge === 'Featured' ? 'bg-red-950/60 text-red-400 border-red-800' :
                loc.badge === 'New' ? 'bg-amber-950/60 text-amber-400 border-amber-800' :
                'bg-slate-950/60 text-slate-400 border-slate-800'
              }`}>
                {loc.badge}
              </span>
            </div>
          </div>
        );
      })}

      {/* 5. PLAYER CHARACTER (THE WANDERER IN A MINI VEHICLE / CAR) */}
      {/* Positioned absolutely, animating smoothly to the active node coordinates */}
      <motion.div
        id="player-car"
        animate={{
          left: `${activeLoc.x}%`,
          top: `${activeLoc.y + 5}%`, // Slightly lower offset so the car sits right next to the town
        }}
        transition={{ type: "spring", damping: 20, stiffness: 120 }}
        className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-col items-center select-none scale-[0.8] md:scale-100"
      >
        {/* Animated vehicle body */}
        <motion.div 
          animate={{
            y: [0, -3, 0],
            rotate: [-1, 2, -1],
          }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="relative filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
        >
          {/* A sweet adventurer car body using SVGs */}
          <svg viewBox="0 0 48 32" className="w-10 h-7 text-amber-500">
            {/* Main carriage body */}
            <rect x="6" y="8" width="36" height="16" rx="4" fill="#ca8a04" stroke="#451a03" strokeWidth="2" />
            {/* Top fabric canopy */}
            <path d="M 8,10 Q 24,0 40,10 Z" fill="#f8fafc" stroke="#451a03" strokeWidth="2" />
            <line x1="8" y1="10" x2="40" y2="10" stroke="#cbd5e1" strokeWidth="1" />
            {/* Mini flag at back */}
            <line x1="6" y1="8" x2="2" y2="0" stroke="#451a03" strokeWidth="1.5" />
            <polygon points="2,0 8,-2 4,3" fill="#ef4444" />
            
            {/* Left wheel */}
            <motion.circle 
              cx="14" 
              cy="25" 
              r="4.5" 
              fill="#1e293b" 
              stroke="#451a03" 
              strokeWidth="2"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '14px 25px' }}
            />
            {/* Left wheel spokes */}
            <line x1="14" y1="20.5" x2="14" y2="29.5" stroke="#451a03" strokeWidth="1" />

            {/* Right wheel */}
            <motion.circle 
              cx="34" 
              cy="25" 
              r="4.5" 
              fill="#1e293b" 
              stroke="#451a03" 
              strokeWidth="2"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: '34px 25px' }}
            />
            {/* Right wheel spokes */}
            <line x1="34" y1="20.5" x2="34" y2="29.5" stroke="#451a03" strokeWidth="1" />
          </svg>

          {/* Exhaust Smoke particle emission */}
          <div className="absolute -left-2 bottom-3">
            <motion.div
              animate={{ x: [0, -10], y: [0, -5], scale: [0.5, 1.2, 0], opacity: [0.8, 0.4, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "easeOut" }}
              className="w-2 h-2 rounded-full bg-slate-400 opacity-60 blur-[0.5px]"
            />
          </div>
        </motion.div>

        {/* Small pointer bubble labeled "YOU" */}
        <div className="bg-emerald-500 border border-emerald-900 rounded px-1.5 py-0.5 -mt-0.5 shadow">
          <span className="font-mono text-[8px] font-bold text-white tracking-widest leading-none block uppercase">
            Hero
          </span>
        </div>
      </motion.div>

    </div>
  );
};
