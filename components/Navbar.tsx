import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Mission', href: '#mission' },
    { name: 'Technology', href: '#technology' },
    { name: 'Story', href: '#story' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Press', href: '#press' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-brand-black/90 backdrop-blur-xl border-brand-border' 
          : 'bg-transparent border-transparent py-4'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
            <Hexagon className="h-6 w-6 text-white stroke-2 group-hover:text-brand-accent transition-colors" />
            <span className="text-xl font-display font-bold tracking-widest text-white uppercase">
              ArtSkin
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-medium tracking-widest uppercase text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                className="bg-white hover:bg-gray-200 text-black px-6 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300"
              >
                Inquire
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-brand-accent focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-brand-black border-b border-brand-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-sm font-display uppercase tracking-widest text-gray-300 hover:text-white border-b border-brand-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
             <a
                href="#contact"
                className="block px-3 py-4 mt-2 text-center text-sm font-bold uppercase tracking-widest bg-white text-black"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Inquire
              </a>
          </div>
        </div>
      )}
    </nav>
  );
};