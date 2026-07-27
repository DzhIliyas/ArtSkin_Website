import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const traces = [
  {
    input: 'M0 36 C30 36 34 35 52 36 S78 35 94 36 L108 34 L118 16 L128 28 L140 10 L151 30 L162 22 L174 35 C198 36 218 35 240 36',
    pulse: 'M0 38 L26 38 L26 12 L29 12 L29 38 L63 38 L63 20 L66 20 L66 38 L99 38 L99 8 L102 8 L102 38 L138 38 L138 15 L141 15 L141 38 L176 38 L176 24 L179 24 L179 38 L214 38 L214 11 L217 11 L217 38 L240 38',
    spikes: 'M0 38 L17 38 L17 22 L19 38 L31 38 L31 10 L33 38 L49 38 L49 28 L51 38 L68 38 L68 16 L70 38 L89 38 L89 7 L91 38 L113 38 L113 19 L115 38 L139 38 L139 12 L141 38 L168 38 L168 25 L170 38 L197 38 L197 9 L199 38 L226 38 L226 18 L228 38 L240 38',
    output: 'M0 37 C30 37 45 35 66 34 S105 21 123 17 S154 25 174 29 S211 34 240 35',
  },
  {
    input: 'M0 38 C24 38 36 37 53 35 C70 32 75 12 94 10 C112 8 121 30 139 33 C160 37 180 35 198 30 C215 25 222 21 240 23',
    pulse: 'M0 38 L18 38 L18 25 L21 25 L21 38 L43 38 L43 16 L46 16 L46 38 L66 38 L66 9 L69 9 L69 38 L89 38 L89 6 L92 6 L92 38 L112 38 L112 13 L115 13 L115 38 L142 38 L142 21 L145 21 L145 38 L176 38 L176 28 L179 28 L179 38 L218 38 L218 18 L221 18 L221 38 L240 38',
    spikes: 'M0 38 L12 38 L12 26 L14 38 L27 38 L27 15 L29 38 L43 38 L43 7 L45 38 L58 38 L58 19 L60 38 L75 38 L75 5 L77 38 L93 38 L93 11 L95 38 L116 38 L116 23 L118 38 L145 38 L145 14 L147 38 L178 38 L178 27 L180 38 L213 38 L213 18 L215 38 L240 38',
    output: 'M0 38 C34 38 48 34 68 26 S98 8 118 14 S143 31 166 33 S205 30 240 22',
  },
  {
    input: 'M0 36 C18 15 34 15 50 36 S82 57 98 36 S130 15 146 36 S178 57 194 36 S226 15 240 34',
    pulse: 'M0 38 L12 38 L12 10 L15 10 L15 38 L31 38 L31 10 L34 10 L34 38 L50 38 L50 10 L53 10 L53 38 L69 38 L69 10 L72 10 L72 38 L88 38 L88 10 L91 10 L91 38 L107 38 L107 10 L110 10 L110 38 L126 38 L126 10 L129 10 L129 38 L145 38 L145 10 L148 10 L148 38 L164 38 L164 10 L167 10 L167 38 L183 38 L183 10 L186 10 L186 38 L202 38 L202 10 L205 10 L205 38 L221 38 L221 10 L224 10 L224 38 L240 38',
    spikes: 'M0 38 L8 38 L8 13 L10 38 L18 38 L18 7 L20 38 L29 38 L29 17 L31 38 L40 38 L40 8 L42 38 L53 38 L53 12 L55 38 L68 38 L68 6 L70 38 L84 38 L84 15 L86 38 L102 38 L102 8 L104 38 L122 38 L122 17 L124 38 L144 38 L144 7 L146 38 L168 38 L168 13 L170 38 L194 38 L194 8 L196 38 L220 38 L220 16 L222 38 L240 38',
    output: 'M0 37 C15 19 32 18 48 35 S80 54 96 36 S129 17 145 35 S178 52 194 35 S225 20 240 33',
  },
];

const touchModes = [
  { key: 'tap', label: 'Tap', trace: 0 },
  { key: 'pressure', label: 'Pressure', trace: 1 },
  { key: 'hold', label: 'Hold', trace: 2 },
  { key: 'slide', label: 'Slide', trace: 0 },
] as const;

const defaultSensorZones = [
  { x: 133, y: 706, label: 'Thumb tip' },
  { x: 292, y: 772, label: 'Thumb base' },
  { x: 431, y: 259, label: 'Index tip' },
  { x: 458, y: 472, label: 'Index base' },
  { x: 603, y: 191, label: 'Middle tip' },
  { x: 599, y: 456, label: 'Middle base' },
  { x: 774, y: 267, label: 'Ring tip' },
  { x: 731, y: 486, label: 'Ring base' },
  { x: 951, y: 447, label: 'Little tip' },
  { x: 859, y: 572, label: 'Little base' },
  { x: 783, y: 650, label: 'Upper palm right' },
  { x: 617, y: 650, label: 'Upper palm center' },
  { x: 451, y: 650, label: 'Upper palm left' },
  { x: 783, y: 808, label: 'Lower palm right' },
  { x: 617, y: 808, label: 'Lower palm center' },
  { x: 451, y: 808, label: 'Lower palm left' },
];

const braceletPairByPalmZone = [1, 3, 5, 7, 6, 8, 10, 12, 13, 15, 14, 9, 2, 16, 11, 4];
const zoneLayoutStorageKey = 'artskin-sensor-zone-layout-v8';

const TactileField: React.FC = () => {
  const stage = useRef<HTMLDivElement>(null);
  const handSvg = useRef<SVGSVGElement>(null);
  const draggingZone = useRef<number | null>(null);
  const [activeZones, setActiveZones] = useState<number[]>([]);
  const [touchMode, setTouchMode] = useState<(typeof touchModes)[number]['key']>('pressure');
  const [sensorZones, setSensorZones] = useState(defaultSensorZones);
  const [editZones, setEditZones] = useState(false);

  useEffect(() => {
    let frame = 0;
    try {
      const saved = window.localStorage.getItem(zoneLayoutStorageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length === defaultSensorZones.length) {
          frame = window.requestAnimationFrame(() => {
            setSensorZones(defaultSensorZones.map((zone, index) => ({ ...zone, x: parsed[index].x, y: parsed[index].y })));
          });
        }
      }
    } catch {
      // Keep the anatomical default if browser storage is unavailable.
    }
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const saveSensorZones = (zones: typeof defaultSensorZones) => {
    setSensorZones(zones);
    try {
      window.localStorage.setItem(zoneLayoutStorageKey, JSON.stringify(zones.map(({ x, y }) => ({ x, y }))));
    } catch {
      // Editing remains available for the current session.
    }
  };

  useEffect(() => {
    if (!editZones) return;
    try {
      window.localStorage.setItem(zoneLayoutStorageKey, JSON.stringify(sensorZones.map(({ x, y }) => ({ x, y }))));
    } catch {
      // Editing remains available for the current session.
    }
  }, [editZones, sensorZones]);

  const moveZone = (event: React.PointerEvent<SVGGElement>, index: number) => {
    if (!editZones || draggingZone.current !== index || !handSvg.current) return;
    const matrix = handSvg.current.getScreenCTM();
    if (!matrix) return;
    const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(matrix.inverse());
    setSensorZones((current) => current.map((zone, zoneIndex) => (
      zoneIndex === index
        ? { ...zone, x: Math.max(28, Math.min(1053, point.x)), y: Math.max(28, Math.min(1427, point.y)) }
        : zone
    )));
  };

  const finishZoneMove = (event: React.PointerEvent<SVGGElement>) => {
    if (!editZones || draggingZone.current === null) return;
    event.currentTarget.releasePointerCapture(event.pointerId);
    draggingZone.current = null;
  };

  const nudgeZone = (index: number, deltaX: number, deltaY: number) => {
    setSensorZones((current) => current.map((zone, zoneIndex) => (
      zoneIndex === index
        ? {
            ...zone,
            x: Math.max(24, Math.min(1057, zone.x + deltaX)),
            y: Math.max(24, Math.min(1431, zone.y + deltaY)),
          }
        : zone
    )));
  };

  const handlePointer = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`);
  };

  const mode = touchModes.find((item) => item.key === touchMode) ?? touchModes[0];
  const focus = (mode.trace + activeZones.reduce((sum, zone) => sum + zone, 0)) % traces.length;
  const activePairs = activeZones.map((zone) => braceletPairByPalmZone[zone]);
  const toggleZone = (zone: number) => {
    setActiveZones((current) =>
      current.includes(zone)
        ? current.filter((item) => item !== zone)
        : [...current, zone].sort((a, b) => a - b)
    );
  };
  const togglePair = (pair: number) => {
    const zone = braceletPairByPalmZone.indexOf(pair);
    if (zone >= 0) toggleZone(zone);
  };
  const selectionLabel = activeZones.length
    ? activeZones.map((zone) => `L${zone + 1}→B${braceletPairByPalmZone[zone]}`).join(' · ')
    : 'No zones selected';

  return (
    <div className="w-full max-w-[640px]">
      <div ref={stage} onPointerMove={handlePointer} className="tactile-stage tactile-stage--mapping relative min-h-[900px] w-full overflow-hidden rounded-t-[2rem] border border-brand-border md:min-h-[990px]">
        <div className="absolute left-5 right-5 top-5 z-20 flex items-center justify-between font-mono text-[9px] uppercase tracking-[.16em] text-gray-500 md:left-7 md:right-7 md:top-7">
          <span className="flex items-center gap-2"><span className="signal-dot" /> Human–machine connection</span>
          <span>ArtSkin / sensory feedback</span>
        </div>

        <div className="hand-map absolute left-[8%] right-[8%] top-[7%] z-10">
          <div className="mb-2 flex items-center justify-between font-mono text-[7px] uppercase tracking-[.14em] text-gray-600 md:text-[8px]">
            <span>Palm coordinate map</span>
            <span>{editZones ? 'Drag or use arrow keys' : '16 stimulation zones'}</span>
          </div>
          <div className="zone-editor">
            <button type="button" className={editZones ? 'is-active' : ''} onClick={() => setEditZones((current) => !current)}>
              {editZones ? 'Done' : 'Arrange zones'}
            </button>
            {editZones && (
              <button type="button" onClick={() => saveSensorZones(defaultSensorZones)}>Reset layout</button>
            )}
          </div>
          <svg ref={handSvg} viewBox="0 0 1081 1455" role="img" aria-label="Palm outline with 16 independently positionable stimulation zones">
            <image
              className="hand-illustration"
              href="/artskin-palm-outline.png"
              x="0"
              y="0"
              width="1081"
              height="1455"
              transform="translate(1081 0) scale(-1 1)"
            />
            {sensorZones.map((zone, index) => (
              <g
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${zone.label}, palm zone ${index + 1}, mapped to bracelet pair ${braceletPairByPalmZone[index]}`}
                aria-pressed={activeZones.includes(index)}
                className={`sensor-zone ${activeZones.includes(index) ? 'is-active' : ''} ${editZones ? 'is-editing' : ''}`}
                transform={`translate(${zone.x} ${zone.y})`}
                onPointerDown={(event) => {
                  if (!editZones) return;
                  draggingZone.current = index;
                  event.currentTarget.setPointerCapture(event.pointerId);
                }}
                onPointerMove={(event) => moveZone(event, index)}
                onPointerUp={finishZoneMove}
                onPointerCancel={finishZoneMove}
                onClick={() => {
                  if (!editZones) toggleZone(index);
                }}
                onKeyDown={(event) => {
                  if (editZones && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
                    event.preventDefault();
                    const step = event.shiftKey ? 10 : 2;
                    nudgeZone(
                      index,
                      event.key === 'ArrowLeft' ? -step : event.key === 'ArrowRight' ? step : 0,
                      event.key === 'ArrowUp' ? -step : event.key === 'ArrowDown' ? step : 0
                    );
                  } else if (!editZones && (event.key === 'Enter' || event.key === ' ')) {
                    event.preventDefault();
                    toggleZone(index);
                  }
                }}
              >
                <circle cx="0" cy="0" r="24" />
                <text x="0" y="2">{String(index + 1).padStart(2, '0')}</text>
              </g>
            ))}
          </svg>
        </div>

        <div className="mapping-readout absolute left-[8%] right-[8%] top-[49%] z-20">
          <div>
            <span>{selectionLabel}</span>
            <small>{activeZones.length} {activeZones.length === 1 ? 'coordinate' : 'coordinates'} selected</small>
          </div>
          <i />
          <button type="button" onClick={() => setActiveZones([])} disabled={!activeZones.length}>Clear</button>
        </div>

        <div className="electrode-band absolute left-[8%] right-[8%] top-[54%] z-10" aria-label="ArtSkin forearm sensory interface with four segments of four electrode pairs">
          <div className="mb-3 flex items-center justify-between px-1 font-mono text-[7px] uppercase tracking-[.14em] text-gray-600 md:text-[8px]">
            <span>Forearm sensory interface</span>
            <span>4 segments / 4 pairs each</span>
          </div>
          <div className="electrode-grid">
            {Array.from({ length: 4 }, (_, segment) => (
              <div className="electrode-segment" key={segment}>
                <span className="segment-label">S{segment + 1}</span>
                <div className="segment-pairs">
                  {Array.from({ length: 4 }, (_, pair) => {
                    const index = segment * 4 + pair;
                    return (
                      <button
                        type="button"
                        key={index}
                        onClick={() => togglePair(index + 1)}
                        aria-pressed={activePairs.includes(index + 1)}
                        aria-label={`Segment ${segment + 1}, electrode pair ${index + 1}`}
                        style={{ animationDelay: `${pair * 130}ms` }}
                        className={`electrode-pair ${activePairs.includes(index + 1) ? 'active' : ''}`}
                      >
                        <span>{String(index + 1).padStart(2, '0')}</span>
                        <b><i /><i /></b>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="touch-mode-panel absolute left-[8%] right-[8%] top-[76%] z-20">
          <div className="mb-3 flex items-center justify-between font-mono text-[7px] uppercase tracking-[.14em] text-gray-600 md:text-[8px]">
            <span>Touch type</span>
            <span className="text-brand-accent">{mode.label} / encoded pattern</span>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {touchModes.map((item) => (
              <button
                type="button"
                key={item.key}
                className={`touch-mode ${touchMode === item.key ? 'is-active' : ''}`}
                onClick={() => setTouchMode(item.key)}
                aria-pressed={touchMode === item.key}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="absolute bottom-5 left-5 right-5 z-20 grid grid-cols-3 border-t border-white/10 pt-4 font-mono text-[8px] uppercase tracking-[.12em] text-gray-500 md:bottom-7 md:left-7 md:right-7 md:text-[9px]">
          <span>Physical world</span>
          <span className="text-center text-brand-accent">ArtSkin</span>
          <span className="text-right">Human perception</span>
        </div>
      </div>

      <div className="neural-telemetry rounded-b-[2rem] border-x border-b border-brand-border bg-[#090c0b]">
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 font-mono text-[8px] uppercase tracking-[.14em] text-gray-600">
          <span>Signal pathway / conceptual</span>
          <span className="flex items-center gap-2 text-brand-accent"><i className="signal-dot !h-1.5 !w-1.5" /> {activeZones.length || 0} zones / {mode.label}</span>
        </div>
        <div className="grid grid-cols-2">
          {[
            ['01', 'Physical input', traces[focus].input],
            ['02', 'Pulse pattern', traces[focus].pulse],
            ['03', 'Afferent spikes', traces[focus].spikes],
            ['04', 'Perceived signal', traces[focus].output],
          ].map(([number, label, path], index) => (
            <div className="telemetry-cell" key={label}>
              <div className="flex items-center justify-between font-mono text-[7px] uppercase tracking-[.13em] text-gray-600">
                <span>{number} / {label}</span>
                <span className={index > 1 ? 'text-brand-accent' : ''}>{index === 0 ? 'contact' : index === 1 ? 'encoded' : index === 2 ? 'modeled' : 'mapped'}</span>
              </div>
              <svg viewBox="0 0 240 48" preserveAspectRatio="none" role="img" aria-label={`${label} conceptual trace`}>
                <path className="telemetry-gridline" d="M0 12H240 M0 24H240 M0 36H240" />
                <path className={`telemetry-trace trace-${index}`} d={path} />
              </svg>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 px-5 py-3 font-mono text-[7px] uppercase leading-relaxed tracking-[.11em] text-gray-600">
          Illustrative neural analogy — not device telemetry or measured receptor activity
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => (
  <section id="top" className="relative min-h-screen overflow-hidden border-b border-brand-border pt-28 md:pt-36">
    <div className="hero-noise pointer-events-none absolute inset-0" />
    <div className="mx-auto flex min-h-[calc(100vh-9rem)] max-w-[1480px] items-center px-5 pb-16 md:px-10 lg:pb-24">
      <div className="relative z-10 reveal-up">
        <div className="eyebrow mb-8">Non-invasive neurointerface</div>
        <h1 className="max-w-4xl font-display text-[clamp(4rem,8.6vw,9rem)] font-medium leading-[.83] tracking-[-.075em] text-brand-white">
          Bring touch
          <span className="block text-gray-500">back into</span>
          <span className="block">the loop<span className="text-brand-accent">.</span></span>
        </h1>
        <p className="mt-9 max-w-2xl text-lg font-light leading-relaxed text-gray-400 md:text-xl">
          ArtSkin is a non-invasive neurointerface designed to restore tactile feedback in prosthetics and extend it to robotics and virtual environments.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a href="#how-it-works" className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-white px-7 py-4 text-xs font-semibold uppercase tracking-[.14em] text-brand-black transition hover:bg-brand-accent">
            See how it works <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
          </a>
          <a href="mailto:contact@artskin.ai?subject=ArtSkin%20collaboration" className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-xs font-semibold uppercase tracking-[.14em] text-brand-white transition hover:border-brand-accent hover:text-brand-accent">
            Start a conversation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 flex items-center gap-5 text-xs text-gray-500">
          <span className="h-px w-12 bg-brand-border" />
          <span>Developed in Bishkek for human–machine interaction.</span>
        </div>
      </div>
    </div>
  </section>
);

const workflowSteps = [
  {
    number: '01',
    title: 'Contact sensing',
    copy: 'A flexible sensor surface detects where contact occurs on the prosthesis.',
  },
  {
    number: '02',
    title: 'Mapped stimulation',
    copy: 'ArtSkin links the sensing zone to a defined coordinate and delivers a corresponding stimulation pattern on the forearm.',
  },
  {
    number: '03',
    title: 'Learned sensory map',
    copy: 'Through repeated interaction, the user can learn the relationship between contact on the artificial surface and the sensation on the skin.',
  },
];

export const SensoryWorkflow: React.FC = () => (
  <section id="how-it-works" className="workflow-section section-rule bg-brand-black py-24 md:py-36">
    <div className="mx-auto max-w-[1480px] px-5 md:px-10">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-start lg:gap-16">
        <figure className="workflow-visual overflow-hidden rounded-[2rem] border border-brand-border bg-[#050a09]">
          <img
            src="/assets/artskin-sensory-workflow.webp"
            alt="ArtSkin sensory feedback workflow from touch on a prosthetic hand through the forearm sensory interface to learned perception"
            className="block h-auto w-full"
          />
          <figcaption className="flex items-center justify-between gap-4 border-t border-white/10 px-5 py-4 font-mono text-[8px] uppercase tracking-[.14em] text-gray-600 md:px-7">
            <span>Touch → Translation → Feedback → Perception</span>
            <span className="text-brand-accent">ArtSkin / 01</span>
          </figcaption>
        </figure>

        <div className="lg:sticky lg:top-28">
          <span className="eyebrow">How it works</span>
          <h2 className="mt-7 max-w-xl font-display text-5xl font-medium leading-[.95] tracking-[-.055em] text-brand-white md:text-7xl">
            From physical contact to human perception.
          </h2>
          <p className="mt-7 max-w-xl text-base font-light leading-relaxed text-gray-400 md:text-lg">
            When the sensor surface touches an object, ArtSkin identifies where the contact occurred and reproduces a corresponding stimulation pattern on the user’s skin.
          </p>
          <p className="mt-4 max-w-xl text-base font-light leading-relaxed text-gray-500 md:text-lg">
            The system is designed to convey the location and characteristics of contact in real time. Consistent sensor-to-skin mapping gives the user a sensory relationship that can be learned through repeated interaction.
          </p>

          <ol className="mt-10 border-t border-brand-border">
            {workflowSteps.map((step) => (
              <li key={step.number} className="workflow-step grid grid-cols-[3.25rem_1fr] gap-4 border-b border-brand-border py-6">
                <span className="font-mono text-[9px] tracking-[.16em] text-brand-accent">{step.number}</span>
                <div>
                  <h3 className="font-display text-xl font-medium tracking-[-.025em] text-brand-white">{step.title}</h3>
                  <p className="mt-2 max-w-lg text-sm font-light leading-relaxed text-gray-500">{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-2 flex justify-center lg:col-start-1">
          <TactileField />
        </div>
      </div>
    </div>
  </section>
);
