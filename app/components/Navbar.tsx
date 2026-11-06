'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, MapPin, Menu, X, ArrowUpRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur-xl bg-[#0b0f19]/80 border-b border-slate-800/60">
      {/* Top Bar */}
      <div className="bg-[#0f172a]/90 text-slate-400 text-xs py-2 px-4 md:px-12 flex flex-col md:flex-row justify-between items-center border-b border-slate-800/40 gap-2">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6">
          <a href="mailto:info@cornerpure.com" className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
            <Mail size={13} className="text-cyan-400" />
            <span>info@cornerpure.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={13} className="text-cyan-400" />
            <span>Empire World, Business Towers, Erbil</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-slate-400">
          <a href="#" className="hover:text-cyan-400 transition-colors"><FaFacebookF size={12} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><FaInstagram size={13} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><FaLinkedinIn size={13} /></a>
          <a href="#" className="hover:text-cyan-400 transition-colors"><FaYoutube size={13} /></a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-11 h-11 bg-slate-900 rounded-xl border border-slate-700/80 flex items-center justify-center font-extrabold text-cyan-400 text-xl tracking-tighter">
              CP
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-wider text-white">
              CORNER<span className="text-cyan-400">PURE</span>
            </span>
            <span className="text-[9px] text-slate-400 font-medium tracking-widest uppercase">
              Medical Supplies & General Trading
            </span>
          </div>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-slate-300">
          <Link href="/" className="text-cyan-400 font-semibold hover:text-cyan-300 transition">Home</Link>
          <Link href="/#categories" className="hover:text-cyan-400 transition">Products</Link>
          <Link href="/services" className="hover:text-cyan-400 transition">Services</Link>
          <Link href="/#about" className="hover:text-cyan-400 transition">About Us</Link>
          <Link href="/#blog" className="hover:text-cyan-400 transition">Blog</Link>
          <Link href="/#contact" className="hover:text-cyan-400 transition">Contact</Link>
        </div>

        {/* Glowing Button */}
        <div className="hidden md:block">
          <a
            href="/#contact"
            className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-semibold rounded-xl group bg-gradient-to-br from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/20 transition duration-300"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
              Get In Touch
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-6 py-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-cyan-400 font-semibold">Home</Link>
          <Link href="/#categories" onClick={() => setMobileMenuOpen(false)} className="text-slate-300">Products</Link>
          <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-slate-300">Services</Link>
          <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300">About Us</Link>
          <Link href="/#blog" onClick={() => setMobileMenuOpen(false)} className="text-slate-300">Blog</Link>
          <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300">Contact</Link>
        </div>
      )}
    </header>
  );
}