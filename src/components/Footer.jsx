import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Mail, Phone, Linkedin, Youtube } from 'lucide-react';
import { webinarData } from '../data/webinarData';

export const Footer = () => {
  const { brand } = webinarData;

  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800/80">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 3-Column Footer Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand Logo & Tagline */}
          <div className="md:col-span-5 space-y-3">
            <BrandLogo light textClassName="text-2xl text-white" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {brand.tagline}
            </p>
            <p className="text-xs text-slate-500 pt-2">
              Accelerating Industrial 4.0 adoption through predictive analytics, machine learning, and automated inspection architectures.
            </p>
          </div>

          {/* Column 2: Contact Information */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-heading font-semibold text-white tracking-wide uppercase">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-sm">
              <a
                href={`mailto:${brand.contactEmail}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{brand.contactEmail}</span>
              </a>

              <a
                href={`tel:${brand.contactPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-400 group-hover:text-white group-hover:bg-brand-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{brand.contactPhone}</span>
              </a>
            </div>
          </div>

          {/* Column 3: Follow Us & Socials */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-heading font-semibold text-white tracking-wide uppercase">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href={brand.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Manvian LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-600 border border-white/10 text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* YouTube */}
              <a
                href={brand.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Manvian YouTube"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-red-600 border border-white/10 text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
              >
                <Youtube className="w-4 h-4" />
              </a>

              {/* X / Twitter */}
              <a
                href={brand.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Manvian X"
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-brand-700 border border-white/10 text-white flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{brand.copyright}</p>
          <div className="flex items-center gap-6">
            <a href="#register" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#register" className="hover:text-slate-300 transition-colors">Terms of Attendance</a>
            <span>•</span>
            <a href="#register" className="hover:text-slate-300 transition-colors">Code of Conduct</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
