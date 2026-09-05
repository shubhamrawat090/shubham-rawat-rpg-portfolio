import React, { useEffect, useRef } from 'react';
import { X, Sparkles, Trophy, Backpack, Compass, Star, FileText, Navigation, Keyboard } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  description?: string;
  category: 'experience' | 'projects' | 'achievements' | 'education' | 'contact' | 'skills' | 'certificate' | 'brief' | 'codex' | 'shortcuts' | '';
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  category,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Handle clicking backdrop to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  // Get matching icons for categories
  const getCategoryIcon = () => {
    switch (category) {
      case 'experience':
        return <Backpack className="h-5 w-5 text-amber-400" />;
      case 'projects':
        return <Sparkles className="h-5 w-5 text-indigo-400" />;
      case 'achievements':
        return <Trophy className="h-5 w-5 text-amber-500 animate-bounce" />;
      case 'education':
        return <Star className="h-5 w-5 text-teal-400" />;
      case 'skills':
        return <Sparkles className="h-5 w-5 text-purple-400" />;
      case 'certificate':
        return <Trophy className="h-5 w-5 text-teal-400" />;
      case 'contact':
        return <Compass className="h-5 w-5 text-emerald-400" />;
      case 'brief':
        return <FileText className="h-5 w-5 text-amber-300" />;
      case 'codex':
        return <Navigation className="h-5 w-5 text-cyan-400" />;
      case 'shortcuts':
        return <Keyboard className="h-5 w-5 text-slate-300" />;
      default:
        return null;
    }
  };

  const getBorderColor = () => {
    switch (category) {
      case 'experience': return 'border-amber-500/40';
      case 'projects': return 'border-indigo-500/40';
      case 'achievements': return 'border-amber-600/40';
      case 'education': return 'border-indigo-500/40';
      case 'skills': return 'border-purple-500/40';
      case 'certificate': return 'border-teal-500/40';
      case 'contact': return 'border-teal-500/40';
      case 'brief': return 'border-amber-400/50 shadow-amber-500/20';
      case 'codex': return 'border-cyan-500/40 shadow-cyan-500/20';
      case 'shortcuts': return 'border-slate-600/50';
      default: return 'border-slate-800';
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          id="modal-backdrop"
          onClick={handleBackdropClick}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            ref={modalRef}
            id="modal-content-wrapper"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className={`relative w-full max-w-3xl max-h-[85vh] flex flex-col rounded-3xl border-2 ${getBorderColor()} glass-modal shadow-2xl overflow-hidden select-none pointer-events-auto`}
          >
            {/* Top Glowing Gradient Accent */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

            {/* Modal Header */}
            <div className="relative p-5 md:p-6 border-b border-slate-800/80 flex items-start justify-between bg-slate-950/40">
              <div className="flex gap-3 items-center">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getCategoryIcon()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 id="modal-title" className="font-display text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
                      {title}
                    </h2>
                    <span className="hidden sm:inline-block font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      Quest Codex
                    </span>
                  </div>
                  <p className="font-sans text-xs text-slate-400 mt-1">
                    {subtitle}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                id="close-modal-button"
                onClick={onClose}
                aria-label="Close Quest Details"
                className="rounded-full p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-100 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-500/50"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Description intro banner */}
            {description && (
              <div className="bg-slate-950/60 px-6 py-2.5 border-b border-slate-900 font-sans text-[11px] text-slate-400 leading-relaxed italic">
                📜 {description}
              </div>
            )}

            {/* Scrollable Body Content */}
            <div 
              id="modal-body-scroll"
              className="flex-1 overflow-y-auto p-5 md:p-6 space-y-6 no-scrollbar"
              style={{ scrollbarWidth: 'none' }}
            >
              {children}
            </div>

            {/* Footer with RPG controls */}
            <div className="p-4 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
                <span>Ready for Recruitment</span>
              </div>
              <button
                id="modal-footer-close-btn"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-bold text-slate-200 hover:text-slate-100 font-display transition-all"
              >
                Close Scroll
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
