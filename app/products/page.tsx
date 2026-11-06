import React, { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import ContactFooter from '@/app/components/ContactFooter';
import { CategoriesData } from './data';
import { ChevronRight, ArrowRight } from 'lucide-react';

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-8">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <ChevronRight size={14} />
          <span className="text-cyan-400 font-semibold">Products Catalog</span>
        </div>

        {/* Page Header */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4">
            Product <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Categories</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            Explore our comprehensive line of certified medical devices, diagnostic machinery, pharmaceuticals, and surgical tools.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {CategoriesData.categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products/${cat.slug}`}
              className="group relative rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-800/80 p-6 backdrop-blur-xl hover:border-cyan-500/60 transition-all duration-300 flex flex-col justify-between h-72"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:scale-105 group-hover:opacity-40 transition duration-500"
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

              <div className="relative z-10">
                <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                  {cat.count} Items
                </span>
              </div>

              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition">
                  {cat.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {cat.description}
                </p>
                <div className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 mt-2">
                  <span>Browse Portfolio</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <ContactFooter />
    </main>
  );
}