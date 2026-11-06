'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Globe, HeartPulse, CheckCircle2 } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      title: 'Global Quality Standards',
      description: 'Importing top-tier medical devices complying with ISO and international health regulations.',
      highlight: 'from-cyan-500/20 to-cyan-500/0',
      borderColor: 'group-hover:border-cyan-500/50',
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      title: 'Widespread Distribution',
      description: 'Strategic logistics supply network delivering across Erbil, Kurdistan region, and Iraq.',
      highlight: 'from-emerald-500/20 to-emerald-500/0',
      borderColor: 'group-hover:border-emerald-500/50',
    },
    {
      icon: <HeartPulse className="w-8 h-8 text-purple-400" />,
      title: 'Healthcare Innovation',
      description: 'Providing hospitals and clinics with state-of-the-art surgical and diagnostic tools.',
      highlight: 'from-purple-500/20 to-purple-500/0',
      borderColor: 'group-hover:border-purple-500/50',
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 bg-[#070a11] text-white overflow-hidden border-t border-slate-800/60">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 backdrop-blur-md text-emerald-300 text-xs font-semibold tracking-wider">
            <span>ABOUT CORNER PURE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight max-w-3xl">
            Redefining Medical Distribution with{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Excellence & Precision
            </span>
          </h2>

          <p className="text-slate-400 text-sm md:text-base max-w-2xl font-normal leading-relaxed">
            Corner Pure for Medical Devices & General Trading is a trusted powerhouse in Iraq and Kurdistan, dedicated to connecting healthcare providers with cutting-edge medical supplies.
          </p>
        </div>

        {/* Main 2-Column Content Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: Interactive Image/Card Visual */}
          <motion.div 
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/70 bg-slate-900/60 backdrop-blur-xl p-2 shadow-2xl">
              {/* Decorative Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-3xl blur-md"></div>

              <div className="relative h-96 rounded-2xl overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1780&auto=format&fit=crop')` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-[#070a11] via-[#070a11]/40 to-transparent"></div>
                
                {/* Floating Glass Pill inside Image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/80 border border-slate-800 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white">Certified Supply Chain</h4>
                    <p className="text-xs text-slate-400">Directly partnered with global leaders</p>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold">
                    100%
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Text & Checklist */}
          <motion.div 
            className="lg:col-span-6 flex flex-col items-start gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug">
              Empowering Healthcare Institutions Across the Region
            </h3>
            
            <p className="text-slate-300 text-sm leading-relaxed">
              We focus on sourcing disposable medical devices, high-precision diagnostic systems, and pharmaceuticals that adhere strictly to international safety benchmarks. Our mission is to bridge the gap between world-class medical innovation and local healthcare access.
            </p>

            {/* Checklist */}
            <div className="flex flex-col gap-3 w-full my-2">
              {[
                'Authorized importer of surgical and disposable medical products.',
                'Rigorous quality control and temperature-controlled logistics.',
                'Full compliance with Ministry of Health regulations in Erbil & Iraq.',
                'Dedicated technical support team for medical equipment setups.'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-xs md:text-sm text-slate-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <a 
              href="#contact" 
              className="mt-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500 text-cyan-300 font-semibold text-xs tracking-wider uppercase transition backdrop-blur-md"
            >
              Learn More About Our Team
            </a>
          </motion.div>
        </div>

        {/* 3 Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className={`group relative p-8 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-xl transition duration-500 ${feature.borderColor} hover:shadow-2xl overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              {/* Card Gradient Background Hover */}
              <div className={`absolute inset-0 bg-gradient-to-b ${feature.highlight} opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none`}></div>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}