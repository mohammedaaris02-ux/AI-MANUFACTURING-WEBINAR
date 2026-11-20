import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { webinarData } from '../data/webinarData';
import { CheckCircle2, Cpu, Wrench, ShieldAlert, LineChart } from 'lucide-react';
import { RevealOnScroll } from './animations/RevealOnScroll';

// Ultra-reliable inline SVG fallback for offline or network-restricted environments
const fallbackFactorySvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><rect width="800" height="600" fill="%230B1230"/><g opacity="0.15"><line x1="0" y1="150" x2="800" y2="150" stroke="%238B5CF6" stroke-width="2"/><line x1="0" y1="300" x2="800" y2="300" stroke="%238B5CF6" stroke-width="2"/><line x1="0" y1="450" x2="800" y2="450" stroke="%238B5CF6" stroke-width="2"/><line x1="200" y1="0" x2="200" y2="600" stroke="%238B5CF6" stroke-width="2"/><line x1="400" y1="0" x2="400" y2="600" stroke="%238B5CF6" stroke-width="2"/><line x1="600" y1="0" x2="600" y2="600" stroke="%238B5CF6" stroke-width="2"/></g><rect x="180" y="240" width="440" height="200" rx="20" fill="%231E1B4B" stroke="%237C3AED" stroke-width="2"/><text x="400" y="330" fill="%23FFFFFF" font-family="sans-serif" font-size="22" font-weight="bold" text-anchor="middle">Smart Manufacturing Facility</text><text x="400" y="370" fill="%23A78BFA" font-family="sans-serif" font-size="14" text-anchor="middle">AI Edge Telemetry Active</text></svg>`;

const fallbackRobotSvg = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="600" height="450" fill="%23111827"/><path d="M150 400 L250 250 L380 300 L450 180" stroke="%23F97316" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="450" cy="180" r="18" fill="%2338BDF8"/><text x="300" y="420" fill="%23F8FAFC" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle">Precision Robotic Assembly</text></svg>`;

export const WebinarOverview = () => {
  const { overview } = webinarData;

  const [primarySrc, setPrimarySrc] = useState('/images/overview-engineer.jpg');
  const [secondarySrc, setSecondarySrc] = useState('/images/overview-robotics.jpg');

  const handlePrimaryError = () => {
    // If local asset fails or isn't reached, try live verified CDN, then embedded SVG
    if (primarySrc === '/images/overview-engineer.jpg') {
      setPrimarySrc('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=85');
    } else {
      setPrimarySrc(fallbackFactorySvg);
    }
  };

  const handleSecondaryError = () => {
    if (secondarySrc === '/images/overview-robotics.jpg') {
      setSecondarySrc('https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=85');
    } else {
      setSecondarySrc(fallbackRobotSvg);
    }
  };

  const pillarIcons = [
    <Cpu className="w-5 h-5 text-brand-600" />,
    <Wrench className="w-5 h-5 text-brand-600" />,
    <ShieldAlert className="w-5 h-5 text-brand-600" />,
    <LineChart className="w-5 h-5 text-brand-600" />
  ];

  return (
    <section id="overview" className="relative py-16 md:py-24 overflow-hidden bg-white">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-50/80 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 -z-10 pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Asymmetric Image Collage */}
          <div className="lg:col-span-6 relative pb-8 sm:pb-10 lg:pb-0">
            <RevealOnScroll direction="right" duration={0.7}>
              <div className="relative mx-auto max-w-[520px] lg:max-w-none">
                {/* Decorative angled background gradient card */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-brand-200/50 via-surface-purple to-transparent rounded-3xl -rotate-2 transform -z-10" />

                {/* Main Manufacturing Image: Industrial Engineer in Smart Factory */}
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-900 aspect-[4/3] group cursor-default">
                  <img
                    src={primarySrc}
                    alt="Industrial engineer analyzing smart factory telemetry and AI predictive models"
                    onError={handlePrimaryError}
                    className="w-full h-full object-cover object-center transition-transform duration-350 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  
                  {/* Subtle darkening gradient overlay for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-navy-950/10 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-80" />
                  
                  {/* Edge Analytics Status Pill on Primary Image */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-brand-100 shadow-sm flex items-center gap-2 pointer-events-none">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-heading font-bold text-navy-900">
                      Edge Analytics Active
                    </span>
                  </div>

                  {/* Caption Overlay on Primary Image */}
                  <div className="absolute bottom-4 left-5 right-5 pointer-events-none transition-transform duration-300 group-hover:translate-y-[-2px]">
                    <p className="text-xs font-heading font-bold text-white drop-shadow-md">
                      Smart Connected Facility
                    </p>
                    <p className="text-[11px] text-slate-200 drop-shadow">
                      Real-time telemetry & IoT vision inspection
                    </p>
                  </div>
                </div>

                {/* Overlapping Secondary Image: Robotic Arm Precision Manufacturing */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                  className="absolute -bottom-5 -right-1 xs:-bottom-6 xs:-right-2 sm:-bottom-8 sm:-right-4 w-[60%] sm:w-[55%] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-slate-900 group/arm cursor-default z-20"
                >
                  <img
                    src={secondarySrc}
                    alt="High-precision industrial robotic arm performing automated assembly and welding"
                    onError={handleSecondaryError}
                    className="w-full h-full object-cover object-center transition-transform duration-350 ease-out group-hover/arm:scale-[1.03]"
                    loading="lazy"
                  />
                  
                  {/* Gradient overlay for caption legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover/arm:opacity-90" />
                  
                  {/* Clean Caption Overlay matching design guidelines */}
                  <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3.5 right-2 sm:right-3 text-white pointer-events-none transition-transform duration-300 group-hover/arm:translate-y-[-2px]">
                    <p className="text-[11px] sm:text-sm font-heading font-bold text-white drop-shadow">
                      Autonomous Precision
                    </p>
                    <p className="text-[9px] sm:text-[11px] text-purple-200 drop-shadow break-words">
                      AI-Guided Robotic Calibration
                    </p>
                  </div>
                </motion.div>

              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6">
            <RevealOnScroll direction="left" duration={0.6}>
              {/* Badge */}
              <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-surface-purple border border-brand-200/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide mb-4">
                {overview.badge}
              </div>

              {/* Heading */}
              <h2 className="text-section-title font-heading font-extrabold text-navy-900 tracking-tight mb-5">
                {overview.heading}
              </h2>

              {/* Paragraph */}
              <p className="text-base sm:text-lg text-secondary leading-relaxed mb-8">
                {overview.paragraph}
              </p>

              {/* Key Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {overview.keyPillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-xl bg-surface-lavender/70 border border-brand-100/80 hover:border-brand-300 transition-colors"
                  >
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <div className="p-1.5 rounded-lg bg-white shadow-xs">
                        {pillarIcons[index] || <CheckCircle2 className="w-5 h-5 text-brand-600" />}
                      </div>
                      <h3 className="font-heading font-bold text-navy-900 text-sm sm:text-base">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};
