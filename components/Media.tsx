import React from 'react';
import { ArrowUpRight, Cpu, MapPin, Network } from 'lucide-react';

const milestones = [
  ['2024', 'ArtSkin presented at Draper University Hero Training Demo Day.'],
  ['JUL 2025', 'US provisional patent filed for the core sensory-interface technology.'],
  ['SEP 2025', 'ArtSkin Inc. incorporated as a Delaware C‑Corporation.'],
  ['2026', 'Product development, research preparation and expansion toward XR.'],
];

export const FounderStory: React.FC = () => (
  <section id="story" className="section-rule bg-brand-dark py-24 md:py-36">
    <div className="mx-auto max-w-[1480px] px-5 md:px-10">
      <div className="grid gap-14 lg:grid-cols-[.82fr_1.18fr] lg:items-center">
        <figure className="relative">
          <div className="overflow-hidden rounded-[1.6rem] border border-brand-border bg-brand-surface">
            <img src="/assets/iliias-dzhentaev.png" alt="Iliias Dzhentaev, founder and CEO of ArtSkin" className="aspect-[4/5] h-full w-full object-cover object-[50%_38%]" />
          </div>
          <figcaption className="mt-4 flex items-center justify-between border-b border-brand-border pb-4 text-[10px] uppercase tracking-[.15em] text-gray-500">
            <span>Iliias Dzhentaev</span>
            <span>Founder & CEO</span>
          </figcaption>
        </figure>

        <div>
          <span className="eyebrow">Story</span>
          <h2 className="mt-7 max-w-4xl font-display text-5xl font-medium leading-[.95] tracking-[-.055em] text-brand-white md:text-7xl">
            From robotic grip to the missing sense.
          </h2>
          <div className="mt-9 max-w-3xl space-y-6 text-base font-light leading-relaxed text-gray-400 md:text-lg">
            <p>
              Before ArtSkin, Iliias spent a decade building hardware and industrial automation systems across more than 30 deployed sites. Work on robotic manipulation exposed a fundamental gap: a machine could grasp an object, but neither the machine nor its operator could truly feel the contact.
            </p>
            <p>
              Research into prosthetics revealed the same broken loop. Modern devices can translate muscle activity into movement, yet the user still has to watch the prosthesis to understand what it is touching. ArtSkin began as an engineering attempt to build the missing return channel.
            </p>
          </div>

          <blockquote className="mt-9 border-l-2 border-brand-accent pl-6 font-display text-2xl leading-snug tracking-[-.03em] text-brand-white md:text-3xl">
            “A machine can touch the world. The person operating it should be able to feel that contact.”
          </blockquote>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="border-t border-brand-border pt-4"><Cpu className="h-5 w-5 text-brand-accent" /><p className="mt-4 text-xs uppercase tracking-[.13em] text-gray-500">10+ years engineering</p></div>
            <div className="border-t border-brand-border pt-4"><Network className="h-5 w-5 text-brand-accent" /><p className="mt-4 text-xs uppercase tracking-[.13em] text-gray-500">Technical founder</p></div>
            <div className="border-t border-brand-border pt-4"><MapPin className="h-5 w-5 text-brand-accent" /><p className="mt-4 text-xs uppercase tracking-[.13em] text-gray-500">Bishkek · Delaware</p></div>
          </div>
        </div>
      </div>

      <div className="mt-24 grid overflow-hidden rounded-[1.75rem] border border-brand-border bg-brand-black lg:grid-cols-[1.2fr_.8fr]">
        <figure className="relative min-h-[420px] overflow-hidden border-b border-brand-border lg:border-b-0 lg:border-r">
          <img src="/assets/demo-day-2024.jpg" alt="Iliias Dzhentaev with Tim Draper at Draper University Hero Training Demo Day in 2024" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
          <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-xs leading-relaxed text-white/80 md:p-8">
            Iliias Dzhentaev with Tim Draper · Draper University Hero Training Demo Day · 2024
          </figcaption>
        </figure>

        <div className="p-8 md:p-12">
          <span className="font-mono text-[10px] uppercase tracking-[.18em] text-brand-accent">Company journey</span>
          <div className="mt-8">
            {milestones.map(([year, event]) => (
              <div key={year} className="grid gap-3 border-t border-brand-border py-6 sm:grid-cols-[90px_1fr]">
                <span className="font-mono text-[9px] uppercase tracking-[.14em] text-brand-accent">{year}</span>
                <p className="text-sm font-light leading-relaxed text-gray-400">{event}</p>
              </div>
            ))}
          </div>
          <a href="mailto:contact@artskin.ai?subject=Conversation%20with%20ArtSkin" className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-brand-white transition hover:text-brand-accent">
            Connect with Iliias <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </section>
);
