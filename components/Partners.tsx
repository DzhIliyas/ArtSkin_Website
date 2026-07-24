import React from 'react';

const names = ['TechCrunch Battlefield 200', 'Draper University', 'Constructor Start', 'High Technology Park'];

export const Partners: React.FC = () => (
  <section aria-label="Recognition" className="border-b border-brand-border bg-brand-black">
    <div className="mx-auto grid max-w-[1480px] md:grid-cols-[220px_1fr]">
      <div className="flex items-center border-b border-brand-border px-5 py-8 font-mono text-[10px] uppercase tracking-[.18em] text-gray-600 md:border-b-0 md:border-r md:px-10">
        Selected & supported by
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {names.map((name, index) => (
          <div key={name} className={`press-wordmark flex min-h-[92px] items-center border-brand-border px-5 font-display text-sm font-medium leading-tight text-gray-500 md:px-8 ${index % 2 ? 'border-l' : ''} ${index > 1 ? 'border-t lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l' : ''}`}>
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);
