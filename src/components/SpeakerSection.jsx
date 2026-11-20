import React from 'react';
import { motion } from 'framer-motion';
import { webinarData } from '../data/webinarData';
import { Linkedin, Sparkles, Info } from 'lucide-react';

export const SpeakerSection = () => {
  const { speaker } = webinarData;

  return (
    <div className="h-full flex flex-col">
      {/* Title with exact reference '//' prefix */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2.5">
          <span className="font-heading font-black text-2xl sm:text-3xl text-brand-600 tracking-tighter">
            //
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-900 tracking-tight">
            Featured Speaker
          </h2>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200/60">
          <Info className="w-3 h-3" /> Sample Profile
        </span>
      </div>

      {/* Speaker Card matching reference */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        whileHover={{ y: -4 }}
        className="flex-1 p-6 sm:p-8 rounded-3xl bg-white border border-brand-100/90 shadow-soft-purple hover:shadow-hover-purple transition-all duration-300 flex flex-col justify-between group"
      >
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7">
          {/* Circular Portrait with Purple Neon Halo Glow matching reference */}
          <div className="relative flex-shrink-0">
            {/* Glowing gradient rings */}
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-600 via-brand-400 to-purple-300 blur-sm opacity-70 group-hover:opacity-100 transition-opacity" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-brand-700 to-violet-500" />
            
            {/* Photo frame */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-white shadow-md bg-surface-purple">
              <img
                src="/images/speaker-arjun.jpg"
                alt="Arjun Mehta - Head of AI & Digital Manufacturing"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80";
                }}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Keynote Badge Icon */}
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-brand-700 text-white flex items-center justify-center shadow-md border-2 border-white">
              <Sparkles className="w-4 h-4 fill-white" />
            </div>
          </div>

          {/* Speaker Details */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-navy-900 group-hover:text-brand-700 transition-colors">
              {speaker.name}
            </h3>
            <p className="text-sm sm:text-base font-semibold text-brand-700 mt-1">
              {speaker.role}
            </p>
            <p className="text-sm text-secondary leading-relaxed mt-3">
              {speaker.bio}
            </p>
            <p className="text-xs text-secondary/80 leading-relaxed mt-2 hidden sm:block">
              {speaker.extendedBio}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Provisional note & LinkedIn icon */}
        <div className="mt-6 pt-4 border-t border-brand-50 flex flex-col xs:flex-row items-center justify-between gap-3 text-center xs:text-left">
          <span className="text-[11px] text-secondary/70 italic">
            * Placeholder guest speaker profile for presentation demonstration
          </span>
          <a
            href={speaker.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${speaker.name} LinkedIn Profile`}
            className="w-9 h-9 rounded-lg bg-[#0077B5]/10 hover:bg-[#0077B5] text-[#0077B5] hover:text-white flex items-center justify-center transition-all duration-200 group/link flex-shrink-0"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};
