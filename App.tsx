import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero, SensoryWorkflow } from './components/Hero';
import { Features } from './components/Features';
import { Applications } from './components/Story';
import { Mission } from './components/Timeline';
import { Partners } from './components/Partners';
import { FounderStory } from './components/Media';
import { Press } from './components/Press';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="page-shell antialiased selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <SensoryWorkflow />
        <Partners />
        <Features />
        <Applications />
        <Mission />
        <FounderStory />
        <Press />
      </main>
      <Footer />
    </div>
  );
}

export default App;
