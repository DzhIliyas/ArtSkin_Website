import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Story } from './components/Story';
import { Timeline } from './components/Timeline';
import { Partners } from './components/Partners';
import { Media } from './components/Media';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="antialiased selection:bg-brand-accent selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Partners />
        <Story />
        <Timeline />
        <Media />
      </main>
      <Footer />
    </div>
  );
}

export default App;