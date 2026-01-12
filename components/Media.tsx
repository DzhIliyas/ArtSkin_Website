import React from 'react';
import { ExternalLink, ArrowUpRight, Globe } from 'lucide-react';

const mediaItems = [
  {
    source: "High Tech Park",
    title: "ArtSkin Joins First Silicon Valley Cohort",
    description: "ArtSkin selected for the inaugural 'Dive into Silicon Valley' program, connecting with industry leaders at Stanford and Apple.",
    date: "NOV 2023",
    link: "#",
  },
  {
    source: "Draper University",
    title: "Unicorn Finalist: Revolutionizing Bionics",
    description: "Among top startups in the 'Unicorn from KG' program, participating in the prestigious Hero Training acceleration.",
    date: "MAR 2024",
    link: "#",
  },
  {
    source: "Tech Innovation",
    title: "Restoring Touch: The Engineer's Journey",
    description: "How founder Iliias Dzheentaev turned a robotic manipulator problem into a breakthrough for human prosthetics.",
    date: "JUN 2024",
    link: "#",
  }
];

export const Media: React.FC = () => {
  return (
    <section id="press" className="py-32 bg-brand-black border-t border-brand-border relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-2 block">
              In The News
            </span>
            <h2 className="text-4xl font-display text-white uppercase">
              Media Presence
            </h2>
          </div>
          <a href="#" className="hidden md:flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-brand-accent transition-colors mt-6 md:mt-0">
            View All Coverage <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <a 
              key={index} 
              href={item.link}
              className="group block bg-brand-surface border border-brand-border p-8 hover:border-brand-accent transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
            >
              {/* Hover Scanline */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>

              <div>
                <div className="flex justify-between items-start mb-8">
                  <span className="flex items-center gap-2 text-[10px] font-mono text-gray-400 uppercase tracking-widest border border-brand-border px-3 py-1 rounded-full group-hover:border-brand-accent group-hover:text-brand-accent transition-colors">
                    <Globe className="h-3 w-3" /> {item.source}
                  </span>
                  <ExternalLink className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors" />
                </div>
                
                <h3 className="text-2xl font-display font-medium text-white mb-4 leading-tight group-hover:text-brand-accent transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-brand-border flex justify-between items-center text-[10px] text-gray-600 font-mono uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                <span>Read Article</span>
                <span>{item.date}</span>
              </div>
            </a>
          ))}
        </div>
        
        {/* Mobile View All Link */}
        <div className="mt-8 md:hidden text-center">
           <a href="#" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-brand-accent transition-colors">
            View All Coverage <ArrowUpRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};