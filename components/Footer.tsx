import React from 'react';
import { ArrowUpRight, Linkedin, Mail } from 'lucide-react';
import { Mark } from './Navbar';

export const Footer: React.FC = () => (
  <footer id="contact" className="section-rule bg-brand-dark pt-24">
    <div className="mx-auto max-w-[1480px] px-5 md:px-10">
      <div className="grid gap-12 pb-24 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <span className="eyebrow">Work with ArtSkin</span>
          <h2 className="mt-8 max-w-5xl font-display text-5xl font-medium leading-[.92] tracking-[-.06em] text-brand-white md:text-8xl">
            Add tactile feedback to the systems people already use<span className="text-brand-accent">.</span>
          </h2>
        </div>
        <a href="mailto:iliyasdzh@artskin.ai?subject=ArtSkin%20partnership" className="group grid h-28 w-28 place-items-center rounded-full bg-brand-accent text-brand-black transition hover:scale-105 hover:bg-brand-lime md:h-36 md:w-36">
          <span className="text-center text-[10px] font-bold uppercase tracking-[.12em]">Start a<br />conversation</span>
          <ArrowUpRight className="absolute h-5 w-5 translate-x-9 -translate-y-9 opacity-0 transition group-hover:translate-x-10 group-hover:-translate-y-10 group-hover:opacity-100" />
        </a>
      </div>

      <div className="grid gap-10 border-t border-brand-border py-10 md:grid-cols-[1fr_auto_auto] md:items-center md:gap-16">
        <Mark />
        <div className="flex flex-wrap gap-6 text-[10px] uppercase tracking-[.14em] text-gray-500">
          <a href="#platform" className="hover:text-white">Platform</a>
          <a href="#applications" className="hover:text-white">Applications</a>
          <a href="#mission" className="hover:text-white">Mission</a>
          <a href="#story" className="hover:text-white">Story</a>
          <a href="#press" className="hover:text-white">Press</a>
        </div>
        <div className="flex gap-3">
          <a href="mailto:iliyasdzh@artskin.ai" aria-label="Email Iliias at ArtSkin" className="grid h-10 w-10 place-items-center rounded-full border border-brand-border text-gray-500 transition hover:border-brand-accent hover:text-brand-accent"><Mail className="h-4 w-4" /></a>
          <a href="https://www.linkedin.com/in/iliias-dzheentaev/" target="_blank" rel="noreferrer" aria-label="Iliias Dzheentaev on LinkedIn" className="grid h-10 w-10 place-items-center rounded-full border border-brand-border text-gray-500 transition hover:border-brand-accent hover:text-brand-accent"><Linkedin className="h-4 w-4" /></a>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 border-t border-brand-border py-5 font-mono text-[9px] uppercase tracking-[.15em] text-gray-600 sm:flex-row">
        <span>© 2026 ArtSkin Inc. · Bishkek / Delaware</span>
        <span>Non-invasive sensory interfaces for prosthetics, robotics and XR</span>
      </div>
    </div>
  </footer>
);
