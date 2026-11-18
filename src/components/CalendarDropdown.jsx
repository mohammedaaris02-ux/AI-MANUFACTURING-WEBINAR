import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from '@floating-ui/react';
import { Calendar, CalendarPlus, ChevronDown, Check } from 'lucide-react';
import { generateICS, getGoogleCalendarUrl } from '../lib/calendar';

export const CalendarDropdown = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  // Viewport-aware positioning via Floating UI
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(8),
      flip({
        fallbackPlacements: ['top-start', 'bottom-end', 'top-end'],
        padding: 12,
      }),
      shift({ padding: 12 }),
    ],
  });

  const dismiss = useDismiss(context, {
    outsidePress: true,
    escapeKey: true,
  });

  const role = useRole(context, { role: 'menu' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    dismiss,
    role,
  ]);

  const handleDownloadICS = (e) => {
    e.preventDefault();
    e.stopPropagation();
    generateICS();
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      setIsOpen(false);
    }, 1200);
  };

  return (
    <div className={`relative inline-block w-full sm:w-auto ${className}`}>
      {/* Trigger Button */}
      <button
        ref={refs.setReference}
        type="button"
        {...getReferenceProps({
          onClick: () => setIsOpen((prev) => !prev),
        })}
        className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-white border text-navy-900 font-heading font-semibold text-sm transition-all duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 ${
          isOpen
            ? 'border-brand-500 bg-brand-50/50 text-brand-800'
            : 'border-surface-border hover:border-brand-300 hover:bg-brand-50/40'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <CalendarPlus className="w-4 h-4 text-brand-700 flex-shrink-0" />
        <span>Add to Calendar</span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-secondary transition-transform duration-200 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-brand-700' : ''
          }`}
        />
      </button>

      {/* Floating Dropdown rendered in portal outside any clipping containers */}
      <FloatingPortal>
        <AnimatePresence>
          {isOpen && (
            <div
              ref={refs.setFloating}
              style={floatingStyles}
              {...getFloatingProps()}
              className="z-[9999] outline-none"
            >
              {/* Inner animated wrapper so transforms don't interfere with Floating UI coordinates */}
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{
                  duration: isOpen ? 0.18 : 0.14,
                  ease: 'easeOut',
                }}
                className="w-[240px] rounded-[14px] bg-white border border-[#E9E3FF] p-[6px] shadow-[0_12px_35px_rgba(31,20,75,0.14)] focus:outline-none select-none flex flex-col gap-0.5"
              >
                {/* Option 1: Google Calendar */}
                <a
                  href={getGoogleCalendarUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="menuitem"
                  tabIndex={0}
                  onClick={() => setIsOpen(false)}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[9px] bg-white hover:bg-[#F2EDFF] text-[#0B1230] hover:text-[#6D28D9] transition-all duration-180 flex items-center justify-start gap-[12px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:bg-[#F2EDFF]"
                >
                  <Calendar className="w-[18px] h-[18px] text-[#6D28D9] flex-shrink-0" />
                  <span className="font-sans font-medium text-[14px] leading-none whitespace-nowrap text-left text-[#0B1230] group-hover:text-[#6D28D9] transition-colors">
                    Google Calendar
                  </span>
                </a>

                {/* Option 2: Outlook / iCal (.ics) */}
                <button
                  type="button"
                  role="menuitem"
                  tabIndex={0}
                  onClick={handleDownloadICS}
                  className="w-full min-h-[44px] px-3.5 py-2.5 rounded-[9px] bg-white hover:bg-[#F2EDFF] text-[#0B1230] hover:text-[#6D28D9] transition-all duration-180 flex items-center justify-start gap-[12px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D28D9] focus-visible:bg-[#F2EDFF] text-left"
                >
                  <CalendarPlus className="w-[18px] h-[18px] text-[#6D28D9] flex-shrink-0" />
                  <span className="font-sans font-medium text-[14px] leading-none whitespace-nowrap text-left flex-1 text-[#0B1230] group-hover:text-[#6D28D9] transition-colors">
                    Outlook / iCal (.ics)
                  </span>
                  {downloaded && (
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 ml-auto animate-in zoom-in duration-150" />
                  )}
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </div>
  );
};
