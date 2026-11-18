import React from 'react';
import { WebinarAgenda } from './WebinarAgenda';
import { SpeakerSection } from './SpeakerSection';

export const AgendaAndSpeaker = () => {
  return (
    <section id="speaker" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Agenda (6 cols) */}
          <div className="lg:col-span-6">
            <WebinarAgenda />
          </div>

          {/* Right Column: Featured Speaker (6 cols) */}
          <div className="lg:col-span-6">
            <SpeakerSection />
          </div>
        </div>
      </div>
    </section>
  );
};
