import React, { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { CategoriesData } from '@/app/products/data';
import { ArrowLeft, ChevronRight, Calendar, Clock, Share2 } from 'lucide-react';

export async function generateStaticParams() {
  return CategoriesData.blogPosts.map((blog) => ({
    id: blog.id,
  }));
}

async function BlogDetailContent({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = CategoriesData.blogPosts.find(b => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-20 text-slate-400">
        Article not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 md:px-12 py-12">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
          <ChevronRight size={14} />
          <Link href="/#blog" className="hover:text-cyan-400 transition">Blog</Link>
          <ChevronRight size={14} />
          <span className="text-cyan-400 font-semibold truncate max-w-[200px]">{blog.title}</span>
        </div>

        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition"
        >
          <ArrowLeft size={14} />
          Back to Articles
        </Link>
      </div>

      {/* Article Header */}
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider">
            {blog.category}
          </span>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="flex items-center gap-1"><Calendar size={14} className="text-cyan-400" /> {blog.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} className="text-emerald-400" /> {blog.readTime}</span>
          </div>
        </div>

        <h1 className="text-3xl md:text-5xl font-black text-white leading-tight">
          {blog.title}
        </h1>
      </div>

      {/* Featured Banner Image */}
      <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 mb-10 h-72 md:h-[420px]">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url('${blog.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070a11] via-transparent to-transparent opacity-60" />
      </div>

      {/* Article Content Body */}
      <div className="bg-slate-900/40 border border-slate-800/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl flex flex-col gap-6 text-slate-300 text-sm md:text-base leading-relaxed">
        <p className="text-lg font-semibold text-cyan-300 border-l-4 border-cyan-500 pl-4">
          {blog.excerpt}
        </p>

        <p>
          {blog.content}
        </p>

        <p>
          Corner Pure remains committed to advancing medical standards across Erbil and Iraq. By partnering with world-renowned manufacturers, we ensure that every healthcare facility has uninterrupted access to certified diagnostic and therapeutic devices.
        </p>

        {/* Share / Footer inside article */}
        <div className="pt-8 mt-6 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400">Published by Corner Pure Editorial Team</span>
          <button className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500 text-cyan-400 transition">
            <Share2 size={14} />
            Share Article
          </button>
        </div>
      </div>
    </div>
  );
}

export default function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <Navbar />
      <Suspense fallback={<div className="text-center py-20 text-slate-500">Loading article...</div>}>
        <BlogDetailContent params={params} />
      </Suspense>
    </main>
  );
}