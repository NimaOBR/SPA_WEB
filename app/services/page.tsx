import React, { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/app/components/Navbar';
import { ArrowLeft, ChevronRight, ShieldCheck, Truck, Headphones, Stethoscope, Cpu, Award } from 'lucide-react';

export default function ServicesPage() {
  const servicesList = [
    {
      id: 'medical-import',
      title: 'Global Medical Equipment Importation',
      description: 'Sourcing certified, state-of-the-art diagnostic and surgical machinery directly from world-renowned manufacturers.',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000&auto=format&fit=crop',
      icon: <Stethoscope className="w-8 h-8 text-cyan-400" />,
      features: ['Direct factory partnerships', 'Strict regulatory compliance', 'Full international warranties']
    },
    {
      id: 'supply-logistics',
      title: 'Secure Supply Chain & Logistics',
      description: 'Operating advanced temperature-controlled warehousing and rapid distribution networks across Erbil and Iraq.',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop',
      icon: <Truck className="w-8 h-8 text-emerald-400" />,
      features: ['Cold-chain pharmaceutical delivery', 'Real-time tracking', 'Express hospital dispatch']
    },
    {
      id: 'technical-support',
      title: 'Installation & Technical Support',
      description: 'Dedicated biomedical engineering team providing on-site equipment setup, calibration, and maintenance.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
      icon: <Headphones className="w-8 h-8 text-purple-400" />,
      features: ['24/7 emergency maintenance', 'Certified calibration services', 'Staff operational training']
    },
    {
      id: 'regulatory-consulting',
      title: 'Regulatory & Ministry Compliance',
      description: 'Navigating health ministry standards, approvals, and quality assurance benchmarks with total precision.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=1000&auto=format&fit=crop',
      icon: <ShieldCheck className="w-8 h-8 text-teal-400" />,
      features: ['ISO 13485 standards alignment', 'Ministry of Health paperwork', 'Quality assurance auditing']
    }
  ];

  return (
    <main className="min-h-screen bg-[#070a11] text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        {/* Breadcrumb Navigation & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-cyan-400 transition">Home</Link>
            <ChevronRight size={14} />
            <span className="text-cyan-400 font-semibold">Our Services</span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500 text-slate-300 hover:text-white transition shadow-lg"
          >
            <ArrowLeft size={14} />
            Back to Home
          </Link>
        </div>

        {/* Page Header */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-slate-800 p-8 md:p-12 mb-16 backdrop-blur-xl">
          <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-md">
              Professional Healthcare Solutions
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
              Comprehensive Medical Services & Support
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Corner Pure delivers end-to-end solutions for hospitals, clinics, and healthcare institutions across Iraq and Kurdistan, ensuring uncompromising clinical excellence.
            </p>
          </div>
        </div>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {servicesList.map((service, idx) => (
            <div 
              key={service.id}
              className="group relative rounded-3xl overflow-hidden bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl hover:border-cyan-500/50 transition-all duration-500 flex flex-col justify-between p-8 shadow-xl"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col gap-6">
                {/* Top Icon & Title */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-xs text-slate-400">Corner Pure Standard Service</span>
                  </div>
                </div>

                <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Image Preview */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition duration-700" 
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Features Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800 text-[11px] text-slate-300 font-medium text-center">
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <span className="text-xs text-cyan-400 font-semibold">Available for Hospitals & Clinics</span>
                <Link
                  href="/#contact"
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs uppercase transition shadow-lg shadow-cyan-500/20"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}