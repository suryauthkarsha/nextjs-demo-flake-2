"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  Database, 
  Lock, 
  Zap, 
  ArrowUpRight, 
  BarChart3, 
  Terminal,
  Cpu,
  Network
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

// Generate some realistic looking telemetry data
const generateData = () => {
  const data = [];
  let current = 1000;
  for (let i = 0; i < 24; i++) {
    current = current + (Math.random() * 400 - 150);
    data.push({
      time: `${i}:00`,
      events: Math.floor(Math.max(200, current)),
      latency: Math.floor(Math.random() * 15 + 2)
    });
  }
  return data;
};

export default function Page() {
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    setChartData(generateData());
    // Simulate live data updates
    const interval = setInterval(() => {
      setChartData(prev => {
        const newData = [...prev.slice(1)];
        const last = prev[prev.length - 1];
        newData.push({
          time: 'Now',
          events: Math.floor(Math.max(200, last.events + (Math.random() * 400 - 150))),
          latency: Math.floor(Math.random() * 15 + 2)
        });
        return newData;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-emerald-500/30">
      {/* Navigation */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <Activity className="w-5 h-5 text-black" />
          </div>
          <span className="font-display font-bold tracking-tight text-white text-lg">DATAFLOW</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-neutral-400">
          <a href="#platform" className="hover:text-white transition-colors">Platform</a>
          <a href="#infrastructure" className="hover:text-white transition-colors">Infrastructure</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
        <button className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors">
          Initialize
        </button>
      </nav>

      {/* Hero Section */}
      <section className="pt-48 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center relative">
        {/* Abstract background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full"
        >
          <div className="inline-flex items-center gap-2 font-mono text-emerald-400 text-xs mb-8 uppercase tracking-widest border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            System Online • v2.4.0
          </div>
          
          <h1 className="font-display text-6xl md:text-8xl lg:text-[140px] font-bold tracking-tighter text-white leading-[0.85] mb-8">
            MEASURE <br/> <span className="text-neutral-600">EVERYTHING.</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-400 font-light leading-relaxed mb-12">
            High-frequency telemetry and analytics for modern engineering teams. 
            Ingest millions of events per second with zero latency.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 text-black px-8 py-4 rounded-full font-medium hover:bg-emerald-400 transition-colors">
              Deploy Now <ArrowUpRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/5 transition-colors">
              <Terminal className="w-4 h-4" /> View Documentation
            </button>
          </div>
        </motion.div>
      </section>

      {/* Live Chart Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-4 md:p-8 shadow-2xl overflow-hidden relative"
        >
          {/* Decorative grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
            <div>
              <div className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-1">Live Telemetry</div>
              <div className="font-display text-2xl text-white">Global Event Ingestion</div>
            </div>
            <div className="flex items-center gap-6 font-mono text-xs">
              <div className="flex flex-col">
                <span className="text-neutral-500 uppercase tracking-wider">Events/sec</span>
                <span className="text-emerald-400 text-lg">24,892</span>
              </div>
              <div className="flex flex-col">
                <span className="text-neutral-500 uppercase tracking-wider">Avg Latency</span>
                <span className="text-white text-lg">4.2ms</span>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] w-full relative z-10">
            {chartData.length > 0 && (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorEvents" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff10" />
                  <XAxis 
                    dataKey="time" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#737373', fontSize: 12, fontFamily: 'monospace' }} 
                    dy={10} 
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#737373', fontSize: 12, fontFamily: 'monospace' }} 
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#050505', 
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: '8px',
                      fontFamily: 'monospace'
                    }}
                    itemStyle={{ color: '#10b981' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="events" 
                    stroke="#10b981" 
                    strokeWidth={2} 
                    fillOpacity={1} 
                    fill="url(#colorEvents)" 
                    isAnimationActive={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>
      </section>

      {/* Bento Grid Features */}
      <section id="platform" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Architected for scale.</h2>
          <p className="text-xl text-neutral-400 font-light max-w-2xl">
            Built from the ground up to handle massive throughput without compromising on query performance or data integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:bg-neutral-900 transition-colors group">
            <Database className="w-8 h-8 text-emerald-400 mb-6" />
            <h3 className="font-display text-2xl text-white mb-3">Infinite Retention</h3>
            <p className="text-neutral-400 leading-relaxed max-w-lg">Store petabytes of event data without worrying about sampling or aggressive retention policies. Our cold storage architecture keeps historical data instantly queryable.</p>
            
            <div className="mt-8 pt-6 border-t border-white/10 font-mono text-xs text-neutral-500 flex justify-between items-center">
              <span>Storage Tier: Cold/Hot Hybrid</span>
              <span className="text-emerald-400 group-hover:underline cursor-pointer">View Architecture</span>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:bg-neutral-900 transition-colors">
            <Zap className="w-8 h-8 text-emerald-400 mb-6" />
            <h3 className="font-display text-2xl text-white mb-3">Sub-millisecond</h3>
            <p className="text-neutral-400 leading-relaxed">Query engine optimized for speed. Get answers before you finish typing your SQL.</p>
          </div>
          
          {/* Feature 3 */}
          <div className="rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:bg-neutral-900 transition-colors">
            <Lock className="w-8 h-8 text-emerald-400 mb-6" />
            <h3 className="font-display text-2xl text-white mb-3">E2E Encrypted</h3>
            <p className="text-neutral-400 leading-relaxed">Your data never leaves your VPC. Enterprise-grade security by default.</p>
          </div>
          
          {/* Feature 4 */}
          <div className="md:col-span-2 rounded-3xl border border-white/10 bg-[#0a0a0a] p-8 hover:bg-neutral-900 transition-colors flex flex-col justify-between">
            <div>
              <BarChart3 className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="font-display text-2xl text-white mb-3">Composable Dashboards</h3>
              <p className="text-neutral-400 leading-relaxed max-w-md">Build complex views using our declarative JSON schema or drag-and-drop interface. Share with your team instantly.</p>
            </div>
            <div className="mt-8 font-mono text-xs text-emerald-400/70 bg-black/50 p-4 rounded-xl border border-white/5 overflow-x-auto">
              <pre><code>{`{
  "type": "timeseries",
  "query": "SELECT count() FROM events WHERE type = 'checkout'",
  "refresh_interval": "1s",
  "visualization": {
    "theme": "dark",
    "color": "#10b981"
  }
}`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-24 border-y border-white/10 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-8">Seamlessly integrates with your stack</h2>
          <div className="flex flex-wrap justify-center gap-12 opacity-50">
            <div className="flex items-center gap-2 font-display text-xl font-bold"><Cpu className="w-6 h-6"/> AWS</div>
            <div className="flex items-center gap-2 font-display text-xl font-bold"><Network className="w-6 h-6"/> KUBERNETES</div>
            <div className="flex items-center gap-2 font-display text-xl font-bold"><Database className="w-6 h-6"/> POSTGRES</div>
            <div className="flex items-center gap-2 font-display text-xl font-bold"><Terminal className="w-6 h-6"/> CLI</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 max-w-7xl mx-auto border-t border-white/10 mt-24">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-emerald-400" />
            <span className="font-display font-bold tracking-tight text-white">DATAFLOW</span>
          </div>
          <div className="font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} DataFlow Systems Inc. All rights reserved.
          </div>
          <div className="flex gap-6 font-mono text-xs uppercase tracking-widest text-neutral-400">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Status</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
