import React from 'react';
import { Quote } from 'lucide-react';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-32 bg-brand-black relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          
          <div className="lg:w-5/12 relative">
             <div className="aspect-[3/4] overflow-hidden bg-gray-900 border border-brand-border grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://picsum.photos/600/800?grayscale" 
                  alt="Iliias Dzheentaev" 
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="mt-4 flex justify-between items-end border-b border-white pb-2">
                <div>
                  <h3 className="text-2xl font-display font-medium text-white uppercase tracking-wider">Iliias Dzheentaev</h3>
                  <p className="text-xs text-brand-accent font-mono uppercase mt-1">Founder / CTO</p>
                </div>
                <span className="text-xs text-gray-600 font-mono">EST. 2024</span>
             </div>
          </div>

          <div className="lg:w-7/12 pt-10">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-6 block">
              Origin Story
            </span>
            <h2 className="text-3xl md:text-5xl font-display text-white mb-10 leading-tight">
              "How does a robot know <br /> it is holding a hand?"
            </h2>
            
            <div className="text-gray-400 text-lg font-light space-y-8 max-w-2xl">
              <p>
                My background is in microelectronics. My first job was building robotic manipulators. I solved the mechanical problem of grip, but I couldn't solve the problem of <i>feeling</i>.
              </p>
              
              <p>
                When I started researching prosthetics, I was shocked. High-end bionic arms cost a fortune but provide zero sensory feedback. Users have to watch their hand to know if they are crushing a cup or dropping it. 
              </p>

              <div className="pl-6 border-l-2 border-white text-white italic font-display text-xl py-2">
                "The brain learns to use the tool, but never accepts it as part of the self."
              </div>

              <p>
                ArtSkin was born from 3 years of solitary research into the human nervous system. Today, backed by High Technology Park and Silicon Valley advisors, we are turning that research into clinical reality.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};