import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Plus, Minus, ArrowUpRight } from 'lucide-react';
import { webinarData } from '../data/webinarData';

export const FAQSection = () => {
  const { faqs } = webinarData;
  const [openIds, setOpenIds] = useState(['free']); // default first one expanded or collapsible

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-surface-lavender/30 relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row matching reference */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 md:mb-12">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-700 flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-navy-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <a
            href="#register"
            className="inline-flex items-center gap-1 text-sm font-heading font-semibold text-brand-700 hover:text-brand-900 transition-colors group"
          >
            <span>View All FAQs</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* 2-Column FAQ Grid matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-brand-300 shadow-soft-purple'
                    : 'bg-white border-surface-border hover:border-brand-200 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  <span className="font-heading font-bold text-navy-900 text-base sm:text-[17px] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                    isOpen ? 'bg-brand-100 text-brand-700' : 'bg-surface-lavender text-secondary'
                  }`}>
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm sm:text-base text-secondary leading-relaxed border-t border-brand-50 mt-1">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
