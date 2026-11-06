'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Layers } from 'lucide-react';
import { CategoriesData } from '../products/data';

export default function Categories() {
  return (
    <section id="categories" className="relative w-full py-24 bg-[#070a11] text-white overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wider mb-4">
              <Layers size={14} />
              <span>PRODUCT CATEGORIES</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Explore Our <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Medical Portfolios</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Select a category to view specialized equipment, surgical supplies, and pharmaceutical ranges.
          </p>
        </div>

        {/* Categories Grid with Grid Stretch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {CategoriesData.categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Link
                href={`/products/${cat.slug}`}
                className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Image Container */}
                <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url('${cat.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute top-4 right-4 bg-slate-950/80 border border-slate-800 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-cyan-400">
                    {cat.count}+ Items
                  </span>
                </div>

                {/* Content Area with Fixed Layout */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors flex items-start justify-between gap-2 min-h-[56px]">
                      <span className="line-clamp-2">{cat.title}</span>
                      <ArrowRight size={18} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mt-2">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}