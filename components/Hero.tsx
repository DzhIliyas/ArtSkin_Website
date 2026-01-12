import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-tech-grid bg-[length:40px_40px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center mt-20">
        
        {/* Overhead Label */}
        <span className="inline-block text-brand-accent text-xs font-bold tracking-[0.2em] uppercase mb-6 animate-pulse">
          Next Generation Prosthetics
        </span>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-display font-medium tracking-tighter text-white mb-8 leading-none">
          SENSATION <br />
          <span className="text-gray-500">RESTORED.</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-xl text-lg text-gray-400 mb-12 font-light leading-relaxed">
          ArtSkin bridges the biological gap. We engineer artificial skin that allows amputees to feel pressure, texture, and temperature.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#technology" className="group min-w-[200px] border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all duration-300">
            Technology
          </a>
          <a href="#story" className="group flex items-center text-gray-400 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors">
            Our Mission <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
        <span className="text-[10px] uppercase tracking-widest text-gray-500 mb-2">Scroll</span>
        <ChevronDown className="h-4 w-4 text-white" />
      </div>
    </div>
  );
};