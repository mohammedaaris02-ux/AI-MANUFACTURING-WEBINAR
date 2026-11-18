import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WebinarHighlights } from './components/WebinarHighlights';
import { WebinarOverview } from './components/WebinarOverview';
import { LearningOutcomes } from './components/LearningOutcomes';
import { AgendaAndSpeaker } from './components/AgendaAndSpeaker';
import { RegistrationSection } from './components/RegistrationSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-secondary font-sans antialiased overflow-x-hidden selection:bg-brand-600 selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* Section 2: Hero */}
        <Hero />

        {/* Section 3: Webinar Highlights */}
        <WebinarHighlights />

        {/* Section 4: Webinar Overview */}
        <WebinarOverview />

        {/* Section 5: What You'll Learn */}
        <LearningOutcomes />

        {/* Section 6 & 7: Agenda & Featured Speaker side-by-side */}
        <AgendaAndSpeaker />

        {/* Section 8: Registration Section */}
        <RegistrationSection />

        {/* Section 9: FAQ */}
        <FAQSection />
      </main>

      {/* Section 10: Footer */}
      <Footer />
    </div>
  );
}

export default App;
