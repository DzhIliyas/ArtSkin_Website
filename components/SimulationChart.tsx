import React, { useState, useEffect } from 'react';
import { LineChart, Line, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Activity } from 'lucide-react';

const generateData = (count: number) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    data.push({
      time: i,
      amplitude: Math.abs(Math.sin(i * 0.2) * 100 + Math.random() * 40),
      pressure: Math.abs(Math.cos(i * 0.15) * 60 + 30),
    });
  }
  return data;
};

export const SimulationChart: React.FC = () => {
  const [data, setData] = useState(generateData(60));

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const newTime = prevData[prevData.length - 1].time + 1;
        const newDataPoint = {
          time: newTime,
          amplitude: Math.abs(Math.sin(newTime * 0.2) * 100 + Math.random() * 40),
          pressure: Math.abs(Math.cos(newTime * 0.15) * 60 + 30),
        };
        return [...prevData.slice(1), newDataPoint];
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-brand-black border border-brand-border h-full w-full relative overflow-hidden group">
      {/* Monitor Header */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-start z-10 border-b border-brand-border bg-brand-black/50 backdrop-blur-sm">
        <div className="flex flex-col">
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Signal Input</span>
          <span className="text-sm font-mono text-brand-accent flex items-center gap-2">
            <Activity className="h-3 w-3" /> LIVE FEED
          </span>
        </div>
        <div className="text-right">
          <span className="text-[10px] font-mono text-gray-500 uppercase block">Frequency</span>
          <span className="text-sm font-mono text-white">30-150Hz</span>
        </div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="h-full w-full pt-16">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F1F1F" vertical={false} />
            <XAxis dataKey="time" hide />
            <YAxis hide domain={[0, 160]} />
            <Line 
              type="step" 
              dataKey="amplitude" 
              stroke="#FFFFFF" 
              strokeWidth={1} 
              dot={false}
              isAnimationActive={false}
            />
             <Line 
              type="monotone" 
              dataKey="pressure" 
              stroke="#3B82F6" 
              strokeWidth={1} 
              dot={false} 
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-0 left-0 w-full p-2 border-t border-brand-border bg-brand-black flex gap-4 text-[10px] font-mono text-gray-500">
        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-white"></div> AMPLITUDE (mV)</span>
        <span className="flex items-center gap-1"><div className="w-2 h-2 bg-brand-accent"></div> PRESSURE (kPa)</span>
      </div>
    </div>
  );
};