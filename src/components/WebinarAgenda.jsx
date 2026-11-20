import React from 'react';
import { motion } from 'framer-motion';
import { webinarData } from '../data/webinarData';

export const WebinarAgenda = () => {
  const { agenda } = webinarData;

  return (
    <div className="h-full flex flex-col">
      {/* Title with exact reference '//' prefix */}
      <div className="flex items-center gap-2.5 mb-8">
        <span className="font-heading font-black text-2xl sm:text-3xl text-brand-600 tracking-tighter">
          //
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-900 tracking-tight">
          Webinar Agenda
        </h2>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-1 sm:pl-3 flex-1">
        {/* Continuous Vertical Purple Line centered with circular nodes */}
        <div className="absolute top-3.5 bottom-5 left-[13px] sm:left-[23px] w-0.5 bg-gradient-to-b from-brand-600 via-brand-400 to-brand-200" />

        <div className="space-y-6 sm:space-y-7">
          {agenda.map((item, index) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
              className="relative flex items-start gap-3.5 sm:gap-6 group"
            >
              {/* Circular Timeline Node */}
              <div className="relative z-10 flex-shrink-0 mt-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white border-2 border-brand-600 flex items-center justify-center shadow-sm group-hover:border-brand-500 group-hover:scale-110 transition-transform">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-600 group-hover:bg-brand-500" />
                </div>
              </div>

              {/* Agenda Entry Details */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 items-baseline">
                {/* Time */}
                <div className="sm:col-span-4">
                  <span className="text-sm sm:text-base font-heading font-bold text-navy-900 group-hover:text-brand-700 transition-colors">
                    {item.time}
                  </span>
                </div>

                {/* Topic / Title */}
                <div className="sm:col-span-8">
                  <p className="text-sm sm:text-base font-medium text-navy-900 leading-snug group-hover:text-brand-700 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-secondary mt-1">
                    {item.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
