'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Mail, ArrowUpRight } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative w-full bg-[#070a11] text-white overflow-hidden border-t border-slate-800/60 pt-24">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <span className="text-xs font-semibold text-cyan-400 tracking-[0.2em] uppercase bg-cyan-500/10 border border-cyan-500/30 px-4 py-1.5 rounded-full backdrop-blur-md">
            GET IN TOUCH
          </span>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white">
            LET'S GET IN TOUCH
          </h2>

          <p className="text-slate-400 text-sm max-w-lg">
            Here are the contact details for Corner Pure Medical Devices and General Trading Company
          </p>
        </div>

        {/* 3 Info Cards (Matching the reference image style in dark UI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          
          {/* Card 1: Office Location */}
          <div className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col gap-6">
            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Office Location</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Empire World, Business Towers, T4, 20, 1 - Erbil.
              </p>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 mt-auto"
            >
              <span>View on Map</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Card 2: Phone & Email */}
          <div className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col gap-6">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <Phone size={26} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Phone & Email</h3>
              <div className="flex flex-col gap-1 text-xs text-slate-400">
                <a href="mailto:info@cornerpure.com" className="hover:text-cyan-400 transition">info@cornerpure.com</a>
                <a href="mailto:sales@cornerpure.com" className="hover:text-cyan-400 transition">sales@cornerpure.com</a>
              </div>
            </div>
            <a 
              href="mailto:info@cornerpure.com" 
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 mt-auto"
            >
              <span>Send Message</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Card 3: Business Hours */}
          <div className="group relative p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col gap-6">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <Clock size={26} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Business Hours</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                from 9:00 AM to 5:00 PM <br />
                <span className="text-slate-300 font-medium">Sunday to Thursday</span>
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 mt-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open Now</span>
            </div>
          </div>

        </div>

        {/* Main Footer Bottom Area */}
        <div className="border-t border-slate-800/80 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/50 flex items-center justify-center font-black text-cyan-400 text-lg">
                CP
              </div>
              <span className="font-extrabold text-xl text-white tracking-wider">
                CORNER<span className="text-cyan-400">PURE</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Pioneers in the importation and distribution of essential medical supplies, disposable medical devices, pharmaceuticals, and healthcare solutions in Erbil & Iraq.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col gap-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider mb-1">Quick Links</h4>
            <Link href="/" className="text-slate-400 hover:text-cyan-400 transition">Home Page</Link>
            <Link href="/#about" className="text-slate-400 hover:text-cyan-400 transition">About Company</Link>
            <Link href="/#categories" className="text-slate-400 hover:text-cyan-400 transition">Product Portfolios</Link>
            <Link href="/#blog" className="text-slate-400 hover:text-cyan-400 transition">Medical Insights</Link>
          </div>

          {/* Social Links */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-bold text-white uppercase tracking-wider mb-1 text-xs">Connect With Us</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
                <FaFacebookF size={14} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
                <FaInstagram size={15} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
                <FaLinkedinIn size={15} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
                <FaYoutube size={15} />
              </a>
            </div>
            <span className="text-[11px] text-slate-500 mt-2">
              © 2026 Corner Pure. All rights reserved.
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}