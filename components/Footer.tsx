import React from 'react';
import { Hexagon, Instagram, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-black border-t border-brand-border pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start mb-20">
          <div>
            <div className="flex items-center space-x-2 mb-6">
               <Hexagon className="h-8 w-8 text-white stroke-1" />
               <span className="text-2xl font-display font-bold tracking-widest text-white uppercase">
                ArtSkin
              </span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm">
              Engineering the interface between biology and silicon.
            </p>
          </div>

          <div className="flex gap-16 mt-10 md:mt-0">
            <div>
               <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Explore</h4>
               <ul className="space-y-4 text-sm text-gray-500">
                 <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Mission</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
               </ul>
            </div>
            <div>
               <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Social</h4>
               <div className="flex gap-4">
                  <a href="#" className="text-gray-500 hover:text-white"><Instagram className="h-5 w-5" /></a>
                  <a href="#" className="text-gray-500 hover:text-white"><Linkedin className="h-5 w-5" /></a>
                  <a href="mailto:contact@artskin.tech" className="text-gray-500 hover:text-white"><Mail className="h-5 w-5" /></a>
               </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-600 uppercase tracking-widest">
          <p>© 2024 ArtSkin Technologies. Bishkek, KG.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};