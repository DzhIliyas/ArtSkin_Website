import React from 'react';

export const Partners: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black border-t border-brand-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500 gap-8">
           <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter">
             High Technology Park
           </span>
           <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter">
             Draper University
           </span>
           <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter">
             Silicon Valley Dive
           </span>
           <span className="text-2xl font-display font-bold text-white uppercase tracking-tighter">
             Unicorn KG
           </span>
        </div>
      </div>
    </section>
  );
};