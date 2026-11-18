import React from 'react';
import { motion } from 'framer-motion';
import { Users, Factory, Award, Radio } from 'lucide-react';
import { webinarData } from '../data/webinarData';

export const WebinarHighlights = () => {
  const { highlights } = webinarData;

  const getIcon = (name) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 sm:w-7 sm:h-7 text-brand-600" />;
      case 'Factory':
        return <Factory className="w-6 h-6 sm:w-7 sm:h-7 text-brand-600" />;
      case 'Award':
        return <Award className="w-6 h-6 sm:w-7 sm:h-7 text-brand-600" />;
      case 'Radio':
        return <Radio className="w-6 h-6 sm:w-7 sm:h-7 text-brand-600 animate-pulse" />;
      default:
        return <Award className="w-6 h-6 sm:w-7 sm:h-7 text-brand-600" />;
    }
  };

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl sm:rounded-3xl bg-surface-lavender/90 backdrop-blur-md border border-brand-200/60 shadow-soft-purple p-4 sm:p-6 lg:p-7"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 divide-y-0 lg:divide-x lg:divide-brand-200/70">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className={`flex items-center gap-3.5 sm:gap-4 group cursor-default px-2 sm:px-4 lg:px-6 ${
                idx !== 0 ? 'lg:pl-8' : ''
              }`}
            >
              {/* Icon Container with subtle gradient and glow */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border border-brand-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105 group-hover:bg-brand-50 transition-all duration-200">
                <div className="transition-transform duration-200 group-hover:rotate-6">
                  {getIcon(item.icon)}
                </div>
              </div>

              {/* Text Info */}
              <div className="min-w-0">
                <p className="font-heading font-bold text-navy-900 text-base sm:text-lg leading-tight group-hover:text-brand-700 transition-colors">
                  {item.metric}
                </p>
                <p className="text-xs sm:text-sm text-secondary font-medium leading-snug mt-0.5 truncate">
                  {item.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
