import React from 'react';
import { ArrowUpRight, Award, Mic2, Newspaper, Trophy } from 'lucide-react';

const coverage = [
  {
    source: 'The Times of Central Asia',
    date: 'Aug 2025',
    title: 'ArtSkin: Prosthetics with a Sense of Touch from Kyrgyzstan',
    type: 'Feature',
    url: 'https://timesca.com/artskin-prosthetics-with-a-sense-of-touch-from-kyrgyzstan/',
  },
  {
    source: 'THE TECH',
    date: 'Dec 2024',
    title: 'ArtSkin — a startup developing artificial skin for prosthetics',
    type: 'Founder story',
    url: 'https://the-tech.kz/artskin-startap-kotoryj-razrabatyvaet-iskusstvennuyu-kozhu-dlya-protezov/',
  },
  {
    source: 'Limon.kg',
    date: 'Oct 2025',
    title: 'AP TALKS #7: Iliias Dzheentaev, founder of ArtSkin',
    type: 'Podcast',
    url: 'https://limon.kg/ru/news:85151',
  },
  {
    source: 'Limon.kg',
    date: 'Aug 2025',
    title: 'ArtSkin selected to represent Central Eurasia at TechCrunch',
    type: 'News',
    url: 'https://limon.kg/ru/news:84827',
  },
];

const recognition = [
  {
    icon: Trophy,
    year: '2026',
    title: '2nd place · SCO Young Innovators',
    text: 'ArtSkin took second place at the 5th Youth Innovation and Entrepreneurship Competition of the SCO member states.',
    url: 'https://egov.kg/ru/ministry/science/news/23935',
  },
  {
    icon: Award,
    year: '2025',
    title: 'TechCrunch Startup Battlefield 200',
    text: 'Selected for TechCrunch’s global cohort of early-stage technology startups.',
    url: 'https://limon.kg/ru/news:84827',
  },
  {
    icon: Award,
    year: '2024',
    title: '2nd place · Draper Hero Training',
    text: 'Recognized at the Silicon Valley program’s Demo Day after five weeks of founder training.',
    url: 'https://the-tech.kz/kyrgyzstanskij-startap-zanyal-vtoroe-mesto-na-pitchinge-draper-university-v-ssha/',
  },
];

export const Press: React.FC = () => (
  <section id="press" className="section-rule bg-brand-black py-24 md:py-36">
    <div className="mx-auto max-w-[1480px] px-5 md:px-10">
      <div className="grid gap-10 lg:grid-cols-[1fr_.65fr] lg:items-end">
        <div>
          <span className="eyebrow">Press & recognition</span>
          <h2 className="mt-7 max-w-4xl font-display text-5xl font-medium leading-[.95] tracking-[-.055em] text-brand-white md:text-7xl">
            A deep-tech story emerging from Central Asia.
          </h2>
        </div>
        <p className="max-w-lg text-base font-light leading-relaxed text-gray-500 lg:justify-self-end">
          Independent coverage, long-form conversations and milestones from ArtSkin’s path from Bishkek to the international technology ecosystem.
        </p>
      </div>

      <div className="mt-16 border-t border-brand-border">
        {coverage.map((item, index) => (
          <a
            key={item.url}
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="group grid gap-5 border-b border-brand-border py-7 transition-colors hover:bg-brand-surface/50 md:grid-cols-[70px_1fr_1.35fr_90px] md:items-center md:px-4"
          >
            <span className="font-mono text-[10px] text-gray-700">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[.16em] text-brand-accent">{item.source}</p>
              <p className="mt-2 text-xs text-gray-600">{item.date} · {item.type}</p>
            </div>
            <h3 className="max-w-2xl font-display text-xl font-medium tracking-[-.025em] text-brand-white transition-colors group-hover:text-brand-accent md:text-2xl">
              {item.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 text-gray-600 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-brand-accent md:justify-self-end" />
          </a>
        ))}
      </div>

      <div className="mt-20 flex items-center gap-3">
        <Newspaper className="h-5 w-5 text-brand-accent" strokeWidth={1.4} />
        <h3 className="font-display text-2xl font-medium tracking-[-.03em] text-brand-white">Selected recognition</h3>
      </div>
      <div className="mt-7 grid gap-5 lg:grid-cols-3">
        {recognition.map(({ icon: Icon, year, title, text, url }) => (
          <a key={title} href={url} target="_blank" rel="noreferrer" className="market-card group rounded-[1.5rem] border border-brand-border bg-brand-surface p-7 md:p-8">
            <div className="flex items-start justify-between">
              <Icon className="h-6 w-6 text-brand-accent" strokeWidth={1.4} />
              <span className="font-mono text-[9px] uppercase tracking-[.15em] text-gray-600">{year}</span>
            </div>
            <h4 className="mt-12 font-display text-2xl font-medium tracking-[-.035em] text-brand-white transition-colors group-hover:text-brand-accent">{title}</h4>
            <p className="mt-4 text-sm font-light leading-relaxed text-gray-500">{text}</p>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-col justify-between gap-6 border-t border-brand-border pt-8 sm:flex-row sm:items-center">
        <p className="flex items-center gap-2 text-sm text-gray-500"><Mic2 className="h-4 w-4" /> For interviews, speaking and media requests.</p>
        <a href="mailto:contact@artskin.ai?subject=ArtSkin%20media%20inquiry" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] text-brand-white transition hover:text-brand-accent">
          Media inquiry <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
