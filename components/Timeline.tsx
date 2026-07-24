import React from 'react';

export const Mission: React.FC = () => (
  <section id="mission" className="section-rule bg-brand-black py-24 md:py-36">
    <div className="mx-auto max-w-[1480px] px-5 md:px-10">
      <div className="grid gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <span className="eyebrow">Long-term mission</span>
          <h2 className="mt-7 max-w-4xl font-display text-5xl font-medium leading-[.93] tracking-[-.06em] text-brand-white md:text-8xl">
            Build a sensory layer between humans and machines<span className="text-brand-accent">.</span>
          </h2>
        </div>

        <div className="lg:pt-16">
          <p className="text-xl font-light leading-relaxed text-gray-300 md:text-2xl">
            Prosthetics is the first application: a field where the absence of tactile feedback directly limits control and makes users rely on vision.
          </p>
          <p className="mt-7 text-base font-light leading-relaxed text-gray-500">
            The same technical architecture can later extend to virtual environments, teleoperation and robotics—anywhere a person needs to feel what a machine touches.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-brand-border bg-brand-border">
            <div className="bg-brand-surface p-5 md:p-7">
              <span className="font-mono text-[9px] uppercase tracking-[.17em] text-brand-accent">Company</span>
              <p className="mt-3 font-display text-xl text-brand-white">ArtSkin Inc.</p>
              <p className="mt-1 text-xs text-gray-500">Delaware C‑Corporation</p>
            </div>
            <div className="bg-brand-surface p-5 md:p-7">
              <span className="font-mono text-[9px] uppercase tracking-[.17em] text-brand-accent">R&D base</span>
              <p className="mt-3 font-display text-xl text-brand-white">Bishkek</p>
              <p className="mt-1 text-xs text-gray-500">Kyrgyz Republic</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
