'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)', backgroundSize: '40px 40px', transform: `translateY(${scrollY * 0.5}px)` }} />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 md:mb-8 border border-white/20">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-xs sm:text-sm text-white/90">Jouw digitale partner</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight hidden md:block">
            Websites die <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">aandacht</span> trekken.
            <br />Meta Ads die <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">presteren</span>
          </h1>

          <h1 className="text-4xl font-bold text-white mb-6 tracking-tight leading-tight md:hidden">
            Websites die <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">opvallen</span>
            <br />Ads die <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400">presteren</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
            Moderne websites en advertentiecampagnes die jouw omzet laten groeien.
          </p>

          <a href="/contact" className="inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 relative">
            <span className="text-lg">Start je project</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto mt-12 md:mt-20">
            {[
              { label: 'Respons tijd', value: '<24 uur' },
              { label: 'Persoonlijk contact', value: '1 op 1' },
              { label: 'Inzet voor groei', value: '100%' },
              { label: 'Geen templates', value: 'Maatwerk' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

