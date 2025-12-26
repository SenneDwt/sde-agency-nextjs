'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Camera, Wand2 } from 'lucide-react';

export default function ProductShowcaseSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  if (!isDragging) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
  const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
  setSliderPosition(percent);
};

const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const touch = e.touches[0];
  const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
  const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
  setSliderPosition(percent);
};

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Voorbeelden
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Van product naar{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">
              wow-factor
            </span>
          </h2>
          
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Zie hoe wij jouw productfoto's transformeren in advertenties die écht opvallen
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-cyan-500/10 rounded-3xl blur-3xl"></div>
            
            <div className="relative bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Comparison Container */}
              <div 
                className="relative w-full aspect-[4/3] md:aspect-[16/9] select-none cursor-ew-resize touch-none"
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseUp}
                onTouchStart={(e) => {
                  setIsDragging(true);
                  handleTouchMove(e);
                }}
                onTouchEnd={() => setIsDragging(false)}
                onTouchMove={handleTouchMove}
              >
                {/* After Image (Background) - NA versie */}
                <div className="absolute inset-0">
                  <Image 
                    src="/Nikeafter.jpg"
                    alt="Nike product advertentie na bewerking"
                    fill
                    // Horizontale positie aanpassen: verander left/right percentage (bijv. left_20% = naar rechts, right_20% = naar links)
                    // Verticale positie aanpassen: verander het percentage (bijv. 20% = omhoog, 50% = center, 80% = omlaag)
                    className="object-cover object-[left_10%_top_20%]"
                    priority
                  />
                 
                  {/* After Label - alleen zichtbaar als slider naar rechts gaat */}
                  <div 
                    className="absolute top-4 right-4 md:top-6 md:right-6 bg-gradient-to-r from-orange-500 to-cyan-600 px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 z-10 transition-opacity duration-200"
                    style={{ opacity: sliderPosition < 95 ? 1 : 0 }}
                  >
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    <span className="text-white font-semibold text-xs md:text-sm">Na</span>
                  </div>
                </div>

                {/* Before Image (Foreground with clip) - VOOR versie */}
                <div 
                  className="absolute inset-0"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <Image 
                    src="/Nikebefore.jpg"
                    alt="Nike product foto voor bewerking"
                    fill
                    // Verticale positie aanpassen: verander het percentage (bijv. 20% = omhoog, 50% = center, 80% = omlaag)
                    className="object-cover object-[center_65%]"
                    priority
                  />
                  
                  {/* Before Label */}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-slate-800/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center gap-2 z-10">
                    <Camera className="w-3 h-3 md:w-4 md:h-4 text-slate-400" />
                    <span className="text-white font-semibold text-xs md:text-sm">Voor</span>
                  </div>
                </div>

                {/* Slider Handle */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="flex gap-1">
                      <div className="w-0.5 h-3 md:h-4 bg-slate-400 rounded-full"></div>
                      <div className="w-0.5 h-3 md:h-4 bg-slate-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction - buiten de slider container */}
            <div className="mt-6 text-center">
              <p className="text-slate-600 text-sm md:text-base font-medium">← Sleep om te vergelijken →</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#F2F2F2] rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Professionele Bewerking</h3>
            <p className="text-slate-600">Van simpele productfoto naar eye-catching advertentie</p>
          </div>

          <div className="bg-[#F2F2F2] rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center mb-4">
              <Wand2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Creatieve Concepten</h3>
            <p className="text-slate-600">Unieke visuele stijlen die jouw merk laten opvallen</p>
          </div>

          <div className="bg-[#F2F2F2] rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Hogere Conversie</h3>
            <p className="text-slate-600">Advertenties die stoppen, boeien en converteren</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a 
            href="/meta-advertenties"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 group"
          >
            <span>Ontdek wat we voor jou kunnen doen</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}