import React from 'react';
import { Hand, HeartHandshake, Layers3, Sparkles } from 'lucide-react';

const pillars = [
  {
    icon: Hand,
    index: '01',
    title: 'Mapped feedback',
    description: 'Each sensing zone is linked to a defined stimulation coordinate, preserving the spatial relationship between contact and sensation.',
  },
  {
    icon: HeartHandshake,
    index: '02',
    title: 'Individual calibration',
    description: 'Electrical response varies across users and skin conditions, so stimulation parameters are adjusted instead of applying one fixed profile.',
  },
  {
    icon: Layers3,
    index: '03',
    title: 'Modular integration',
    description: 'ArtSkin is being developed as a technology layer for prosthetics and other systems that manufacturers already build.',
  },
  {
    icon: Sparkles,
    index: '04',
    title: 'Configurable profiles',
    description: 'Spatial location, intensity, timing and waveform can be configured to study distinct tactile perceptions.',
  },
];

export const Features: React.FC = () => (
  <section id="platform" className="section-rule bg-brand-dark py-24 md:py-36">
    <div className="mx-auto max-w-[1480px] px-5 md:px-10">
      <div className="grid gap-12 border-b border-brand-border pb-16 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div>
          <span className="eyebrow">System design</span>
          <h2 className="mt-7 max-w-xl font-display text-5xl font-medium leading-[.95] tracking-[-.055em] text-brand-white md:text-7xl">
            Built for individual physiology.
          </h2>
        </div>
        <p className="max-w-2xl text-lg font-light leading-relaxed text-gray-400 lg:justify-self-end lg:text-xl">
          ArtSkin measures differences in electrical response and is designed to adjust stimulation parameters for each user. The resulting physiological and perceptual data will support personalized calibration models.
        </p>
      </div>

      <div className="grid border-x border-b border-brand-border md:grid-cols-2 xl:grid-cols-4">
        {pillars.map(({ icon: Icon, index, title, description }, itemIndex) => (
          <article key={title} className={`metric-card min-h-[310px] border-brand-border p-7 md:p-9 ${itemIndex ? 'border-t md:border-l md:border-t-0' : ''} ${itemIndex === 2 ? 'md:border-l-0 md:border-t xl:border-l xl:border-t-0' : ''}`}>
            <div className="flex items-start justify-between">
              <Icon className="h-6 w-6 text-brand-accent" strokeWidth={1.5} />
              <span className="font-mono text-[10px] tracking-widest text-gray-600">// {index}</span>
            </div>
            <h3 className="mt-20 font-display text-2xl font-medium tracking-[-.03em] text-brand-white">{title}</h3>
            <p className="mt-4 text-sm font-light leading-relaxed text-gray-500">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
