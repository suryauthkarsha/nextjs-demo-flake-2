/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  PieChart, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2,
  ChevronRight
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

const chartData = [
  { name: 'Jan', revenue: 4000, users: 2400 },
  { name: 'Feb', revenue: 5500, users: 3398 },
  { name: 'Mar', revenue: 4800, users: 5800 },
  { name: 'Apr', revenue: 7780, users: 4908 },
  { name: 'May', revenue: 6890, users: 6800 },
  { name: 'Jun', revenue: 8390, users: 7800 },
  { name: 'Jul', revenue: 10490, users: 9300 },
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">DataFlow</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#solutions" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Solutions</a>
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Pricing</a>
              <div className="flex items-center gap-4 ml-4">
                <button className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">Log in</button>
                <button className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors shadow-sm shadow-indigo-200">
                  Start Free Trial
                </button>
              </div>
            </div>

            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
            <a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Features</a>
            <a href="#solutions" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Solutions</a>
            <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-indigo-600 hover:bg-slate-50">Pricing</a>
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2">
              <button className="w-full text-left px-3 py-2 text-base font-medium text-slate-700 hover:text-indigo-600">Log in</button>
              <button className="w-full bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700">Start Free Trial</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-6 border border-indigo-100">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              New: AI-Powered Predictive Analytics
            </div>
            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1] mb-6">
              Turn your raw data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">actionable growth.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Unify your data sources, visualize trends in real-time, and make smarter decisions faster with our enterprise-grade analytics platform built for modern teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex justify-center items-center gap-2 bg-indigo-600 text-white px-6 py-3.5 rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5">
                Start your free trial <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex justify-center items-center gap-2 bg-white text-slate-700 border border-slate-200 px-6 py-3.5 rounded-full font-medium hover:bg-slate-50 transition-all hover:-translate-y-0.5">
                Book a demo
              </button>
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-8 h-8 rounded-full border-2 border-white" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                ))}
              </div>
              <p>Trusted by <span className="font-semibold text-slate-700">10,000+</span> data teams</p>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-violet-50 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
            <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                </div>
                <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">Revenue Overview</div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-end mb-6">
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">Total Revenue</p>
                    <h3 className="text-3xl font-bold text-slate-900">$104,900</h3>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    +24.5%
                  </div>
                </div>
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b', fontSize: 12 }} />
                      <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ color: '#0f172a', fontWeight: 500 }}
                      />
                      <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="border-y border-slate-200 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">Powering data-driven companies</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Placeholder logos using text for simplicity, normally these would be SVGs */}
            <div className="text-xl font-bold font-serif">Acme Corp</div>
            <div className="text-xl font-bold tracking-tighter">GLOBAL<span className="font-light">SYS</span></div>
            <div className="text-xl font-black italic">TechFlow</div>
            <div className="text-xl font-semibold uppercase tracking-widest">Nexus</div>
            <div className="text-xl font-bold text-slate-800">Quantum</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Everything you need to scale</h2>
            <p className="text-lg text-slate-600">Stop guessing and start knowing. Our platform provides all the tools you need to understand your business performance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-6 h-6 text-amber-500" />,
                title: "Real-time Insights",
                desc: "Monitor your KPIs as they happen. No more waiting for end-of-month reports to make critical decisions."
              },
              {
                icon: <PieChart className="w-6 h-6 text-indigo-500" />,
                title: "Advanced Visualization",
                desc: "Transform complex datasets into beautiful, easy-to-understand charts and interactive dashboards."
              },
              {
                icon: <Shield className="w-6 h-6 text-emerald-500" />,
                title: "Enterprise Security",
                desc: "Bank-grade encryption, role-based access control, and SOC2 compliance built-in from day one."
              },
              {
                icon: <Globe className="w-6 h-6 text-blue-500" />,
                title: "Multi-source Integration",
                desc: "Connect seamlessly with Salesforce, Stripe, Shopify, and 100+ other tools in just a few clicks."
              },
              {
                icon: <TrendingUp className="w-6 h-6 text-rose-500" />,
                title: "Predictive Modeling",
                desc: "Leverage our AI engine to forecast revenue, predict churn, and identify growth opportunities."
              },
              {
                icon: <BarChart3 className="w-6 h-6 text-violet-500" />,
                title: "Custom Reporting",
                desc: "Build tailored reports for different stakeholders and schedule automated email deliveries."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Feature Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-indigo-600 rounded-3xl transform -rotate-3 scale-105 opacity-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Data Analytics Dashboard" 
                  className="relative rounded-2xl shadow-xl border border-slate-200 object-cover aspect-[4/3]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating stat card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase">Conversion Rate</p>
                    <p className="text-xl font-bold text-slate-900">+14.2%</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Connect all your data in minutes, not months.</h2>
              <p className="text-lg text-slate-600 mb-8">
                Say goodbye to complex ETL pipelines and data engineering bottlenecks. Our zero-code connectors pull data from your favorite tools instantly.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "100+ native integrations available out of the box",
                  "Automated data cleaning and normalization",
                  "Real-time sync ensures you're always looking at fresh data"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 shrink-0" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
                View all integrations <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-600/20 blur-[120px]"></div>
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your business?</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Join thousands of companies using DataFlow to make better decisions and accelerate their growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 transition-colors shadow-xl">
              Start your 14-day free trial
            </button>
            <button className="bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-700 transition-colors">
              Talk to Sales
            </button>
          </div>
          <p className="mt-6 text-sm text-slate-400">No credit card required. Cancel anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl tracking-tight text-slate-900">DataFlow</span>
              </div>
              <p className="text-slate-500 mb-6 max-w-xs">
                Making advanced business analytics accessible to teams of all sizes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Features</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Changelog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Blog</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Help Center</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">About Us</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Careers</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Legal</a></li>
                <li><a href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} DataFlow Analytics, Inc. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-400 hover:text-slate-600">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-600">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
