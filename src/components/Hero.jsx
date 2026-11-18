import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, ArrowRight, Sparkles } from 'lucide-react';
import { webinarData } from '../data/webinarData';
import { CalendarDropdown } from './CalendarDropdown';

export const Hero = () => {
  const { event } = webinarData;

  // Local images with verified CDN fallback
  const [heroRobotSrc, setHeroRobotSrc] = useState('/images/hero-robot.jpg');
  const [heroPlantSrc, setHeroPlantSrc] = useState('/images/hero-factory.jpg');

  const scrollToRegister = (e) => {
    e.preventDefault();
    const el = document.getElementById('register');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-gradient-to-b from-white via-surface-lavender/40 to-white">
      {/* Background Soft Purple Flowing Fluid Shapes */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden select-none -z-10">
        <div className="absolute top-12 right-0 w-[600px] h-[550px] bg-gradient-to-br from-brand-100/60 via-purple-100/30 to-transparent rounded-full blur-3xl transform translate-x-1/4 -translate-y-12" />
        <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-gradient-to-tr from-brand-50/70 via-surface-purple/40 to-transparent rounded-full blur-2xl transform -translate-x-1/3" />
        {/* Soft geometric flowing ribbon lines */}
        <svg 
          className="absolute top-16 right-0 w-[720px] h-[650px] text-brand-200/40 hidden lg:block"
          viewBox="0 0 720 650" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M200,50 C400,10 650,150 720,350 C750,450 680,550 550,600 C400,650 300,500 350,380 C400,280 550,250 650,300" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeDasharray="6 6"
            className="opacity-60"
          />
          <path 
            d="M320,0 C500,80 700,200 710,420" 
            stroke="url(#purpleGradLine)" 
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="purpleGradLine" x1="320" y1="0" x2="710" y2="420" gradientUnits="userSpaceOnUse">
              <stop stopColor="#A78BFA" stopOpacity="0.6"/>
              <stop offset="1" stopColor="#6D28D9" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-6 xl:col-span-6 z-10">
            {/* Live Webinar Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-600 fill-brand-600 animate-pulse" />
              <span>{event.badge}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-extrabold text-navy-900 tracking-tight leading-[1.08] mb-5"
            >
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-navy-900">
                {event.titleLine1}
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl text-navy-900">
                {event.titleLine2}
              </span>
            </motion.h1>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-secondary leading-relaxed max-w-xl mb-7"
            >
              {event.description}
            </motion.p>

            {/* Event Details Strip (Calendar, Time, Format) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-y-2 gap-x-4 sm:gap-x-6 text-xs sm:text-sm text-navy-900 font-medium mb-8 pb-1 border-b border-surface-border/50 lg:border-b-0"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-brand-50 flex items-center justify-center text-brand-700">
                  <Calendar className="w-4 h-4" />
                </div>
                <span>{event.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-brand-50 flex items-center justify-center text-brand-700">
                  <Clock className="w-4 h-4" />
                </div>
                <span>{event.time}</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md bg-brand-50 flex items-center justify-center text-brand-700">
                  <Video className="w-4 h-4" />
                </div>
                <span>{event.format}</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 relative"
            >
              {/* Primary Register Button */}
              <a
                href="#register"
                onClick={scrollToRegister}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-brand-700 hover:bg-brand-800 text-white font-heading font-semibold text-base shadow-soft-purple hover:shadow-hover-purple transition-all duration-200 group active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                <span>Register Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary Add to Calendar Floating Dropdown */}
              <CalendarDropdown />
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Composition matching reference */}
          <div className="lg:col-span-6 xl:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto max-w-[560px] lg:max-w-none"
            >
              {/* Decorative Purple Geometric Backing Plates */}
              <div className="absolute -top-6 -right-6 w-full h-full rounded-[2.5rem] bg-gradient-to-br from-brand-300/40 via-brand-200/20 to-transparent -z-10 transform rotate-1 hidden sm:block" />
              <div className="absolute -bottom-6 -left-6 w-3/4 h-3/4 rounded-[2rem] bg-gradient-to-tr from-brand-100/50 to-transparent -z-10 transform -rotate-1 hidden sm:block" />

              {/* Main Polygonal Asymmetric Hero Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-navy-900 group">
                {/* Main Manufacturing Line Photo with Orange Robot */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-navy-900">
                  <img
                    src={heroRobotSrc}
                    alt="Industrial smart manufacturing assembly line with orange robotic arm and automated inspection"
                    onError={() => setHeroRobotSrc('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80')}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle darkening overlay for tech HUD readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent pointer-events-none" />

                  {/* AI HUD Overlay matching exact reference image */}
                  <div className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-between pointer-events-none">
                    {/* Top Row: AI HUD Status Ticker */}
                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-navy-900/80 backdrop-blur-md border border-cyan-500/40 text-cyan-400 text-xs font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span>LIVE TELEMETRY // AI INSPECTION</span>
                      </div>
                      <div className="text-right text-[11px] font-mono text-cyan-300/80 hidden sm:block">
                        LINE: ROBOTIC-ARM-04 <br /> SPEED: 120 PPM
                      </div>
                    </div>

                    {/* Center Overlay: The Glowing Cyan "AI" Square & HUD Target Box */}
                    <div className="my-auto self-center relative">
                      <motion.div
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative p-5 rounded-2xl bg-cyan-950/60 backdrop-blur-md border-2 border-cyan-400/80 shadow-[0_0_35px_rgba(34,211,238,0.35)] flex flex-col items-center justify-center min-w-[130px] min-h-[110px]"
                      >
                        {/* Corner Target Markers */}
                        <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t-2 border-l-2 border-cyan-300" />
                        <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t-2 border-r-2 border-cyan-300" />
                        <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b-2 border-l-2 border-cyan-300" />
                        <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b-2 border-r-2 border-cyan-300" />

                        {/* Large "AI" Text */}
                        <span className="font-heading font-black text-3xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-white to-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                          AI
                        </span>
                        <span className="text-[10px] font-mono tracking-widest text-cyan-300 mt-1 uppercase">
                          PRECISION: 99.8%
                        </span>
                      </motion.div>
                    </div>

                    {/* Bottom HUD Analytics Strip */}
                    <div className="flex items-end justify-between">
                      <div className="bg-navy-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span>ANOMALY DETECTED: 0%</span>
                        </div>
                        <span className="text-cyan-500 hidden sm:inline">|</span>
                        <span className="text-slate-300 hidden sm:inline">CYCLE TIME: -18%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Secondary Floating Image Card (Bottom Right matching reference: Industrial Skyline / Facility) */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-8 -right-4 sm:-bottom-10 sm:-right-6 w-44 sm:w-56 md:w-64 aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group/sub z-20"
              >
                <img
                  src={heroPlantSrc}
                  alt="Modern high-tech industrial plant and manufacturing facility skyline"
                  onError={() => setHeroPlantSrc('https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80')}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover/sub:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2.5 right-2 text-white">
                  <p className="text-[11px] sm:text-xs font-heading font-bold text-white drop-shadow">
                    Next-Gen Connected Plants
                  </p>
                </div>
              </motion.div>

              {/* Decorative Floating Top Accent */}
              <div className="absolute -top-8 -left-4 sm:-top-10 sm:-left-6 w-24 sm:w-28 aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white/90 backdrop-blur-md p-2 hidden sm:flex items-center justify-center -z-10 opacity-70">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80" 
                  alt="Industrial microelectronics" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
