import React, { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { CategoriesData } from '../../data';
import { ArrowLeft, ChevronRight, ShieldCheck, PhoneCall } from 'lucide-react';

export async function generateStaticParams() {
  return CategoriesData.products.map((p) => ({
    category: p.categorySlug,
    id: p.id,
  }));
}

async function ProductDetailContent({ params }: { params: Promise<{ category: string; id: string }> }) {
  const { category: categorySlug, id: productId } = await params;

  const product = CategoriesData.products.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="text-center py-20 text-slate-400">
        Product not found.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <ChevronRight size={14} />
          <Link href={`/products/${categorySlug}`} className="hover:text-cyan-400 transition">{product.category}</Link>
          <ChevronRight size={14} />
          <span className="text-cyan-400 font-semibold">{product.name}</span>
        </div>

        <Link
          href={`/products/${categorySlug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition"
        >
          <ArrowLeft size={14} />
          Back to Category
        </Link>
      </div>

      {/* Product Details Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-800/80 p-4 backdrop-blur-xl">
          <div className="relative h-80 md:h-[420px] w-full rounded-2xl overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url('${product.image}')` }}
            />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-6">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-md">
              Ref: {product.id}
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mt-3 mb-2">
              {product.name}
            </h1>
            <p className="text-emerald-400 text-xs font-semibold">
              Category: {product.category}
            </p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed border-t border-b border-slate-800/80 py-4">
            {product.fullDetails}
          </p>

          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.specs.map((spec, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
                  <span className="text-slate-400 block mb-0.5">{spec.label}</span>
                  <span className="text-white font-semibold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-cyan-400" size={28} />
              <div>
                <h4 className="text-xs font-bold text-white">Inquire for Bulk Orders</h4>
                <p className="text-[11px] text-slate-400">Direct supply from Erbil distribution hub.</p>
              </div>
            </div>
            <a
              href="/#contact"
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase transition flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <PhoneCall size={14} />
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <Navbar />
      <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading product details...</div>}>
        <ProductDetailContent params={params} />
      </Suspense>
    </main>
  );
}