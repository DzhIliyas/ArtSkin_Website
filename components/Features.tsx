import React from 'react';
import { Fingerprint, Thermometer, Cpu, ScanLine } from 'lucide-react';
import { SimulationChart } from './SimulationChart';

export const Features: React.FC = () => {
  return (
    <section id="technology" className="py-32 bg-brand-surface border-t border-brand-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left: Specs & Text */}
          <div className="lg:w-1/2">
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase mb-4 block">
              Core Technology
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-8">
              BIONIC <br /> FEEDBACK LOOP
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-12 border-l border-brand-border pl-6">
              Current bionics are a one-way street: muscle signals go out, but sensation doesn't come back. ArtSkin closes the loop by stimulating the peripheral nervous system directly.
            </p>

            <div className="grid grid-cols-1 gap-0 border border-brand-border divide-y divide-brand-border bg-brand-black">
              <div className="p-6 flex items-start group hover:bg-white/5 transition-colors">
                <Fingerprint className="h-6 w-6 text-white mt-1 mr-4" />
                <div>
                  <h3 className="text-white font-display font-bold uppercase tracking-wider mb-2">Tactile Precision</h3>
                  <p className="text-sm text-gray-500">Detects grasping force for handling non-rigid objects without crushing.</p>
                </div>
              </div>

              <div className="p-6 flex items-start group hover:bg-white/5 transition-colors">
                <Thermometer className="h-6 w-6 text-white mt-1 mr-4" />
                <div>
                  <h3 className="text-white font-display font-bold uppercase tracking-wider mb-2">Thermal Sensing</h3>
                  <p className="text-sm text-gray-500">Real-time temperature gradient detection and environmental feedback.</p>
                </div>
              </div>

              <div className="p-6 flex items-start group hover:bg-white/5 transition-colors">
                <Cpu className="h-6 w-6 text-white mt-1 mr-4" />
                <div>
                  <h3 className="text-white font-display font-bold uppercase tracking-wider mb-2">Universal Neural Interface</h3>
                  <p className="text-sm text-gray-500">Compatible with major upper and lower limb prosthetic platforms.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Simulation / Visuals */}
          <div className="lg:w-1/2 flex flex-col gap-6">
             <div className="h-[400px] w-full">
                <SimulationChart />
             </div>
             
             <div className="grid grid-cols-2 gap-6">
                <div className="bg-brand-black border border-brand-border p-6 flex flex-col justify-between h-32 hover:border-white transition-colors">
                  <span className="text-xs text-gray-500 font-mono uppercase">Sensor Density</span>
                  <span className="text-4xl font-display text-white">32<span className="text-sm text-brand-accent">/unit</span></span>
                </div>
                <div className="bg-brand-black border border-brand-border p-6 flex flex-col justify-between h-32 hover:border-white transition-colors">
                   <span className="text-xs text-gray-500 font-mono uppercase">Latency</span>
                   <span className="text-4xl font-display text-white">&lt;15<span className="text-sm text-brand-accent">ms</span></span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};