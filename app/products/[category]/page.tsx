import React, { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { CategoriesData } from '../data';
import { ArrowLeft, ChevronRight, PackageCheck } from 'lucide-react';

export async function generateStaticParams() {
  return CategoriesData.categories.map((cat) => ({
    category: cat.slug,
  }));
}

// کامپوننت داخلی برای نمایش محتوا به همراه Suspense
async function CategoryContent({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;

  const currentCategory = CategoriesData.categories.find(c => c.slug === categorySlug);
  const categoryProducts = CategoriesData.products.filter(p => p.categorySlug === categorySlug);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Navigation Breadcrumb */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <ChevronRight size={14} />
          <Link href="/#categories" className="hover:text-cyan-400 transition">Categories</Link>
          <ChevronRight size={14} />
          <span className="text-cyan-400 font-semibold">{currentCategory?.title || 'Products'}</span>
        </div>

        <Link
          href="/#categories"
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition"
        >
          <ArrowLeft size={14} />
          Back to Categories
        </Link>
      </div>

      {/* Category Header */}
      <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-2">
            {currentCategory?.title || 'Category Portfolio'}
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl">
            {currentCategory?.description || 'Browse high-grade solutions engineered for clinical excellence.'}
          </p>
        </div>
        <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-bold text-xs">
          Showing {categoryProducts.length} Items
        </span>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {categoryProducts.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-3xl overflow-hidden bg-slate-900/50 border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 flex flex-col justify-between h-full"
          >
            <div>
              <div className="h-48 w-full overflow-hidden relative">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-500" 
                  style={{ backgroundImage: `url('${product.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              </div>

              <div className="p-5">
                <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-2 py-0.5 rounded">
                  {product.id}
                </span>
                <h3 className="text-base font-bold text-white mt-2 mb-1 group-hover:text-cyan-300 transition line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>
            </div>

            <div className="p-5 pt-0">
              <Link
                href={`/products/${categorySlug}/${product.id}`}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
              >
                Details
                <PackageCheck size={14} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CategoryProductsPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <Navbar />
      <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading products...</div>}>
        <CategoryContent params={params} />
      </Suspense>
    </main>
  );
}