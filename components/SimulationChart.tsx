import React from 'react';
import { Activity } from 'lucide-react';

const primary = 'M0 126 L22 124 L34 86 L48 146 L62 113 L80 117 L96 42 L112 159 L128 108 L146 113 L162 71 L178 139 L195 112 L212 116 L228 52 L244 154 L260 109 L276 112 L293 78 L310 137 L326 108 L344 111 L360 58 L376 151 L392 105 L410 110 L426 73 L442 140 L458 107 L476 109 L492 46 L508 158 L524 104 L540 108 L558 82 L576 133 L594 103 L612 107 L628 61 L646 148 L664 102 L682 106 L700 76 L720 136';
const adaptive = 'M0 178 C42 171, 58 141, 95 151 S158 196, 203 162 S268 129, 312 152 S374 186, 420 159 S486 132, 528 152 S590 181, 634 155 S690 135, 720 147';

export const SimulationChart: React.FC = () => (
  <div className="relative h-full min-h-[420px] overflow-hidden border border-brand-border bg-brand-black">
    <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-brand-border bg-brand-black/80 p-5 backdrop-blur-sm md:p-6">
      <div>
        <span className="font-mono text-[9px] uppercase tracking-[.17em] text-gray-600">Signal translation</span>
        <span className="mt-1 flex items-center gap-2 font-mono text-xs text-brand-accent"><Activity className="h-3.5 w-3.5" /> ACTIVE MODEL</span>
      </div>
      <div className="text-right font-mono text-[9px] uppercase tracking-[.15em] text-gray-600">
        <span className="block">Input / contact</span>
        <span className="mt-1 block text-brand-white">Output / perception</span>
      </div>
    </div>

    <svg className="absolute inset-x-0 bottom-10 top-20 h-[calc(100%-7.5rem)] w-full" viewBox="0 0 720 220" preserveAspectRatio="none" aria-label="Conceptual contact-to-feedback signal visualization" role="img">
      <defs>
        <pattern id="signalGrid" width="48" height="40" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V40" fill="none" stroke="rgba(244,245,239,.07)" strokeWidth="1" />
        </pattern>
        <linearGradient id="fadeStroke" x1="0" x2="1">
          <stop offset="0" stopColor="#7FFFD4" stopOpacity=".15" />
          <stop offset=".25" stopColor="#7FFFD4" />
          <stop offset="1" stopColor="#D8FF66" />
        </linearGradient>
      </defs>
      <rect width="720" height="220" fill="url(#signalGrid)" />
      <path d={primary} fill="none" stroke="#F4F5EF" strokeOpacity=".78" strokeWidth="1.6" vectorEffect="non-scaling-stroke" />
      <path d={adaptive} fill="none" stroke="url(#fadeStroke)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      <line x1="530" y1="0" x2="530" y2="220" stroke="#7FFFD4" strokeOpacity=".65" strokeWidth="1" vectorEffect="non-scaling-stroke" className="animate-[pulse_2s_ease-in-out_infinite]" />
      <circle cx="530" cy="152" r="5" fill="#D8FF66" />
      <circle cx="530" cy="152" r="14" fill="none" stroke="#D8FF66" strokeOpacity=".32" />
    </svg>

    <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-5 border-t border-brand-border bg-brand-black px-5 py-4 font-mono text-[9px] uppercase tracking-[.13em] text-gray-600 md:px-6">
      <span className="flex items-center gap-2"><i className="h-px w-5 bg-brand-white" /> Contact signal</span>
      <span className="flex items-center gap-2"><i className="h-px w-5 bg-brand-accent" /> Adaptive output</span>
      <span className="ml-auto hidden text-brand-accent sm:inline">Conceptual visualization</span>
    </div>
  </div>
);
