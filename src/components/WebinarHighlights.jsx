import React from 'react';
import { motion } from 'framer-motion';
import { Users, Factory, Award, Radio } from 'lucide-react';
import { webinarData } from '../data/webinarData';

export const WebinarHighlights = () => {
  const { highlights } = webinarData;

  const getIcon = (name) => {
    switch (name) {
      case 'Users':
        return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />;
      case 'Factory':
        return <Factory className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />;
      case 'Award':
        return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />;
      case 'Radio':
        return <Radio className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600 animate-pulse" />;
      default:
        return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-brand-600" />;
    }
  };

  /**
   * Generates seamless border dividers for:
   * - 1 column (<420px mobile): horizontal dividers between stacked cards
   * - 2 columns (420px - 1023px tablets & medium mobile): 2x2 quadrant cross dividers
   * - 4 columns (>=1024px desktop & laptop): 3 centered vertical separators
   */
  const getItemBorderClasses = (idx) => {
    switch (idx) {
      case 0:
        return 'border-b xs:border-r xs:border-b lg:border-r lg:border-b-0 border-brand-200/70';
      case 1:
        return 'border-b xs:border-b xs:border-r-0 lg:border-r lg:border-b-0 border-brand-200/70';
      case 2:
        return 'border-b xs:border-b-0 xs:border-r lg:border-r lg:border-b-0 border-brand-200/70';
      case 3:
        return 'border-0';
      default:
        return '';
    }
  };

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-2xl sm:rounded-3xl bg-surface-lavender/90 backdrop-blur-md border border-brand-200/60 shadow-soft-purple p-2 sm:p-3 lg:p-4 overflow-hidden"
      >
        <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className={`p-3.5 xs:p-3 sm:p-4 lg:py-4 lg:px-4 xl:px-6 flex items-center gap-3 sm:gap-3.5 lg:gap-3.5 xl:gap-4 group cursor-default w-full h-full transition-colors hover:bg-white/40 ${getItemBorderClasses(
                idx
              )}`}
            >
              {/* Icon Container with subtle gradient and glow */}
              <div className="w-11 h-11 xs:w-10 xs:h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 xl:w-13 xl:h-13 rounded-xl sm:rounded-2xl bg-white border border-brand-100 flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105 group-hover:bg-brand-50 transition-all duration-200">
                <div className="transition-transform duration-200 group-hover:rotate-6">
                  {getIcon(item.icon)}
                </div>
              </div>

              {/* Text Info - No clipping or truncation, naturally responsive */}
              <div className="min-w-0 flex-1 flex flex-col justify-center">
                <p className="font-heading font-bold text-navy-900 text-sm xs:text-[13px] sm:text-base lg:text-[15px] xl:text-lg leading-tight group-hover:text-brand-700 transition-colors break-words">
                  {item.metric}
                </p>
                <p className="text-xs xs:text-[11px] sm:text-xs lg:text-[12px] xl:text-sm text-secondary font-medium leading-snug mt-0.5 break-words">
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
