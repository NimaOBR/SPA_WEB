'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Newspaper, ArrowRight, Calendar, Clock } from 'lucide-react';
import { CategoriesData } from '../products/data';

export default function BlogSection() {
  return (
    <section id="blog" className="relative w-full py-24 bg-[#070a11] text-white overflow-hidden border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 text-xs font-semibold tracking-wider mb-4">
              <Newspaper size={14} />
              <span>LATEST INSIGHTS</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
              Medical News & <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Articles</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Stay updated with clinical breakthroughs, regulatory standards, and company announcements.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {CategoriesData.blogPosts.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="h-full"
            >
              <Link
                href={`/blog/${blog.id}`}
                className="group relative flex flex-col h-full rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                {/* Image Banner */}
                <div className="relative h-52 w-full overflow-hidden flex-shrink-0">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{ backgroundImage: `url('${blog.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <span className="absolute top-4 left-4 bg-slate-950/80 border border-slate-800 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-cyan-400 uppercase tracking-wider">
                    {blog.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow gap-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-4 text-[11px] text-slate-400">
                      <span className="flex items-center gap-1"><Calendar size={13} className="text-cyan-400" /> {blog.date}</span>
                      <span className="flex items-center gap-1"><Clock size={13} className="text-emerald-400" /> {blog.readTime}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span>Read Full Article</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
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