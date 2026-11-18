import React from 'react';
import { motion } from 'framer-motion';
import { webinarData } from '../data/webinarData';
import { Settings, Layers, ShieldCheck, TrendingUp } from 'lucide-react';
import { StaggerContainer, StaggerItem } from './animations/StaggerContainer';

export const LearningOutcomes = () => {
  const { learningOutcomes } = webinarData;

  const getCardIcon = (iconName) => {
    switch (iconName) {
      case 'Settings':
        return <Settings className="w-6 h-6 text-brand-600" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-brand-600" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-brand-600" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6 text-brand-600" />;
      default:
        return <Settings className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="learn" className="py-16 md:py-24 bg-surface-lavender/30 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact reference image double purple slash '//' */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-2.5">
            <span className="font-heading font-black text-2xl sm:text-3xl text-brand-600 tracking-tighter">
              //
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-extrabold text-navy-900 tracking-tight">
              What You'll Learn
            </h2>
          </div>
          <p className="mt-2 text-secondary text-sm sm:text-base max-w-xl">
            Practical takeaways tailored for engineering teams and manufacturing operations leaders.
          </p>
        </div>

        {/* 4 Equal-Height Premium Cards Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningOutcomes.map((item) => (
            <StaggerItem key={item.id} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="h-full flex flex-col p-6 sm:p-7 rounded-2xl bg-white border border-brand-100/90 hover:border-brand-300 hover:bg-surface-lavender/40 shadow-sm hover:shadow-hover-purple transition-all duration-300 group cursor-default"
              >
                {/* Purple Gradient Icon Surface */}
                <div className="w-12 h-12 rounded-xl bg-surface-purple border border-brand-200/60 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-100 transition-all duration-300 shadow-xs">
                  <div className="transition-transform duration-300 group-hover:rotate-6">
                    {getCardIcon(item.icon)}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-lg sm:text-xl font-heading font-bold text-navy-900 mb-2.5 group-hover:text-brand-700 transition-colors">
                  {item.title}
                </h3>

                {/* Card Description */}
                <p className="text-sm text-secondary leading-relaxed flex-grow">
                  {item.description}
                </p>

                {/* Subtitle / Long takeaway hint */}
                <div className="mt-4 pt-3 border-t border-brand-50 text-[12px] text-brand-800/80 font-medium">
                  {item.longDescription}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
