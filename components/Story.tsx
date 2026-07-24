import React from 'react';
import { ArrowUpRight, Bot, Box, Hand, RadioTower } from 'lucide-react';

const markets = [
  {
    icon: Hand,
    label: 'First market',
    title: 'Prosthetics',
    copy: 'Provide spatially mapped tactile feedback without requiring an invasive implant.',
    status: 'Clinical pathway',
  },
  {
    icon: Box,
    label: 'Next interface',
    title: 'XR & spatial computing',
    copy: 'Translate virtual contact, pressure and object interaction into tactile feedback on the user’s skin.',
    status: 'Glove development',
  },
  {
    icon: RadioTower,
    label: 'Shared future',
    title: 'Robotics & teleoperation',
    copy: 'Return information about remote contact to the operator during manipulation and control.',
    status: 'Platform expansion',
  },
  {
    icon: Bot,
    label: 'Embodied intelligence',
    title: 'Humanoid robotics',
    copy: 'Capture physical contact across robotic surfaces to support interaction, manipulation and tactile data collection.',
    status: 'Tactile training layer',
  },
];

export const Applications: React.FC = () => (
  <section id="applications" className="section-rule bg-brand-black py-24 md:py-36">
    <div className="mx-auto max-w-[1480px] px-5 md:px-10">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <span className="eyebrow">Where it goes next</span>
          <h2 className="mt-7 max-w-3xl font-display text-5xl font-medium leading-[.95] tracking-[-.055em] text-brand-white md:text-7xl">
            Begin with prosthetics. Expand wherever touch is missing.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-relaxed text-gray-500">ArtSkin is initially being developed for prosthetics, where missing tactile feedback limits control and rehabilitation. The same interface architecture can later support virtual reality, teleoperation and robotic systems.</p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
        {markets.map(({ icon: Icon, label, title, copy, status }, index) => (
          <article key={title} className="market-card min-h-[440px] rounded-[1.5rem] border border-brand-border bg-brand-surface p-7 md:p-9">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[.17em] text-brand-accent">{label}</span>
              <span className="outline-number font-display text-4xl font-semibold">0{index + 1}</span>
            </div>
            <Icon className="mt-20 h-10 w-10 text-brand-white" strokeWidth={1.2} />
            <h3 className="mt-8 font-display text-3xl font-medium tracking-[-.04em] text-brand-white 2xl:text-4xl">{title}</h3>
            <p className="mt-5 text-base font-light leading-relaxed text-gray-400">{copy}</p>
            <div className="absolute bottom-10 left-9 flex items-center gap-2 text-[10px] uppercase tracking-[.14em] text-gray-500">
              <span className="signal-dot" /> {status}
            </div>
          </article>
        ))}
      </div>

      <a href="mailto:contact@artskin.ai?subject=ArtSkin%20integration" className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-brand-white transition hover:text-brand-accent">
        Discuss an integration <ArrowUpRight className="h-4 w-4" />
      </a>
    </div>
  </section>
);
