'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Activity, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-[#070a11] text-white overflow-hidden flex items-center justify-center py-20 px-6 md:px-12">
      
      {/* 1. Background Image with Increased Visibility (Opacity 40%) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-100 scale-105 filter contrast-110"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1775947933085-30050ddad6b3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')` 
        }}
      ></div>

      {/* Lighter Gradient Overlay so background photo is much clearer */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070a11]/75 via-[#070a11]/60 to-[#070a11]/90 z-0"></div>

      {/* 2. Vibrant Glowing Neon Orbs (Blur Background Effect) */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-500/30 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-emerald-500/25 rounded-full blur-[160px] pointer-events-none"></div>

      {/* 3. Main Content Container */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column Text Content */}
        <motion.div 
          className="lg:col-span-7 flex flex-col items-start gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/40 bg-cyan-500/15 backdrop-blur-md text-cyan-300 text-xs font-semibold tracking-wide shadow-lg shadow-cyan-500/10">
            <Sparkles size={14} className="text-cyan-400" />
            <span>PIONEERS IN MEDICAL INNOVATION</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-white drop-shadow-md">
            Corner Pure <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Medical Solutions
            </span>
          </h1>

          <p className="text-slate-200 text-base md:text-lg max-w-2xl font-normal leading-relaxed drop-shadow">
            Elevating healthcare standards across the region. We are leading importers and distributors of premium medical devices, pharmaceuticals, and essential healthcare supplies.
          </p>

          {/* Feature Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-xl my-2">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/80 backdrop-blur-xl shadow-lg">
              <ShieldCheck className="text-cyan-400 flex-shrink-0" size={24} />
              <span className="text-xs text-slate-200 font-medium">Certified International Quality</span>
            </div>
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/70 border border-slate-700/80 backdrop-blur-xl shadow-lg">
              <Activity className="text-emerald-400 flex-shrink-0" size={24} />
              <span className="text-xs text-slate-200 font-medium">Advanced Healthcare Tech</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#products" 
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-sm tracking-wider uppercase transition shadow-xl shadow-cyan-500/30 flex items-center gap-2"
            >
              Explore Products
              <ArrowRight size={18} />
            </a>

            <a 
              href="#contact" 
              className="px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700 font-bold text-sm tracking-wider uppercase transition backdrop-blur-md shadow-lg"
            >
              Contact Team
            </a>
          </div>
        </motion.div>

        {/* Right Column: Dynamic Glassmorphism Card Showcase */}
        <motion.div 
          className="lg:col-span-5 relative flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md">
            
            {/* Glowing Border Behind Glass Box */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-teal-500 to-purple-600 rounded-3xl blur-xl opacity-60 animate-pulse"></div>

            {/* Glass Card Container */}
            <div className="relative bg-slate-900/85 backdrop-blur-2xl border border-slate-700/80 p-8 rounded-3xl shadow-2xl flex flex-col gap-6">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></div>
                  <span className="text-xs font-semibold text-slate-200 uppercase tracking-widest">Erbil Headquarters</span>
                </div>
                <span className="text-xs text-cyan-400 font-mono">T4-Tower</span>
              </div>

              {/* Stats Block inside Card */}
              <div className="grid grid-cols-2 gap-4 my-2">
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80">
                  <div className="text-3xl font-black text-cyan-400">100+</div>
                  <div className="text-xs text-slate-300 mt-1">Medical Products</div>
                </div>
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/80">
                  <div className="text-3xl font-black text-emerald-400">24/7</div>
                  <div className="text-xs text-slate-300 mt-1">Supply Support</div>
                </div>
              </div>

              {/* Decorative Quote */}
              <p className="text-xs text-slate-300 italic leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-slate-800">
                "Pioneering distribution of high-grade surgical items, medical devices, and pharmaceuticals across Iraq & Kurdistan."
              </p>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}