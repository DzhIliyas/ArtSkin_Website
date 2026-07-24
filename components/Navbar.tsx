import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { name: 'Platform', href: '#platform' },
  { name: 'Applications', href: '#applications' },
  { name: 'Mission', href: '#mission' },
  { name: 'Story', href: '#story' },
  { name: 'Press', href: '#press' },
];

export const Mark: React.FC<{ compact?: boolean }> = ({ compact = false }) => (
  <div className="flex items-center gap-3">
    <span className="logo-mark-crop" aria-hidden="true">
      <img src="/assets/artskin-logo.png" alt="" />
    </span>
    <span className="font-display text-lg font-semibold tracking-[-0.03em] text-brand-white">
      ArtSkin{!compact && <span className="text-brand-accent">.</span>}
    </span>
  </div>
);

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'glass border-brand-border' : 'border-transparent bg-transparent'}`}>
      <div className="mx-auto flex h-[76px] max-w-[1480px] items-center justify-between px-5 md:px-10">
        <a href="#top" aria-label="ArtSkin home"><Mark /></a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map(link => (
            <a key={link.name} href={link.href} className="text-[11px] font-medium uppercase tracking-[.16em] text-gray-400 transition-colors hover:text-brand-white">
              {link.name}
            </a>
          ))}
        </div>

        <a href="mailto:contact@artskin.tech?subject=ArtSkin%20partnership" className="hidden items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[.14em] text-brand-white transition hover:border-brand-accent hover:text-brand-accent md:flex">
          Partner with us <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        <button className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white md:hidden" onClick={() => setOpen(value => !value)} aria-label="Toggle navigation" aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-brand-border px-5 pb-6 pt-2 md:hidden">
          {links.map(link => (
            <a key={link.name} href={link.href} onClick={() => setOpen(false)} className="block border-b border-brand-border py-4 font-display text-xl text-brand-white">
              {link.name}
            </a>
          ))}
          <a href="mailto:contact@artskin.tech?subject=ArtSkin%20partnership" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-brand-black">
            Partner with us <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </nav>
  );
};
