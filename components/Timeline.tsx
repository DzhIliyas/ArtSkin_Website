import React from 'react';

const milestones = [
  {
    phase: "PHASE 01",
    year: "2021-2023",
    title: "Research & Validation",
    description: "Deep dive into human physiology. Validation of neural signal transduction models.",
    active: false,
  },
  {
    phase: "PHASE 02",
    year: "2024",
    title: "Silicon Valley Acceleration",
    description: "Cerebra/Apple mentorship. Team expansion to 5 engineers. Lab setup.",
    active: false,
  },
  {
    phase: "PHASE 03",
    year: "JAN 2025",
    title: "Prototype V2",
    description: "32-Sensor flexible array. Temperature & pressure integration. <15ms latency.",
    active: true,
  },
  {
    phase: "PHASE 04",
    year: "2025 Q3",
    title: "Clinical Trials",
    description: "Human subject testing with surgeon Sultan Tukeshov. Patent filing.",
    active: false,
  }
];

export const Timeline: React.FC = () => {
  return (
    <section id="roadmap" className="py-32 bg-brand-surface border-t border-brand-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-brand-border pb-8">
          <div>
             <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-2 block">Roadmap</span>
             <h2 className="text-4xl font-display text-white">EXECUTION PLAN</h2>
          </div>
          <p className="text-gray-500 max-w-md text-right hidden md:block">
            Milestones toward total sensory restoration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="relative group">
              <div className={`h-1 w-full mb-6 ${item.active ? 'bg-brand-accent' : 'bg-brand-border group-hover:bg-white transition-colors'}`}></div>
              
              <span className={`text-[10px] font-mono tracking-widest uppercase block mb-2 ${item.active ? 'text-brand-accent' : 'text-gray-600'}`}>
                {item.phase} // {item.year}
              </span>
              
              <h3 className="text-xl font-display font-bold text-white mb-4 uppercase">
                {item.title}
              </h3>
              
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};