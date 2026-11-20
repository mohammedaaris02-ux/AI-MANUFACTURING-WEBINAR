import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section for highlight
      const sections = ['overview', 'learn', 'speaker', 'register'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview', id: 'overview' },
    { name: "What You'll Learn", href: '#learn', id: 'learn' },
    { name: 'Speaker', href: '#speaker', id: 'speaker' },
    { name: 'Register', href: '#register', id: 'register' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-surface-border/60 py-3.5'
          : 'bg-white/70 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-2 group transition-transform duration-200 hover:scale-[1.02]"
          aria-label="Manvian Homepage"
        >
          <BrandLogo />
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-10">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative text-xs lg:text-[14px] xl:text-[15px] font-medium transition-colors duration-200 py-1 whitespace-nowrap ${
                  isActive ? 'text-brand-700 font-semibold' : 'text-secondary hover:text-navy-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600 rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Button matching reference: dark navy pill/rounded button with arrow */}
        <div className="hidden md:flex items-center">
          <a
            href="#register"
            onClick={(e) => handleNavClick(e, '#register')}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 lg:px-5 lg:py-2.5 rounded-lg bg-navy-900 text-white text-xs lg:text-sm font-heading font-semibold hover:bg-brand-700 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 whitespace-nowrap"
          >
            <span>Register Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-navy-900 hover:bg-surface-purple transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-white/98 backdrop-blur-xl border-b border-surface-border px-4 pt-3 pb-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-navy-900 hover:bg-surface-purple hover:text-brand-700 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#register"
                  onClick={(e) => handleNavClick(e, '#register')}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-navy-900 text-white text-base font-heading font-semibold hover:bg-brand-700 transition-all shadow-md"
                >
                  <span>Register Now</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
