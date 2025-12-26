'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function BeforeAfterSlider() {
  const [slider1Position, setSlider1Position] = useState(50);
  const [slider2Position, setSlider2Position] = useState(50);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);

  const handleMove = (
    clientX: number, 
    rect: DOMRect, 
    setPosition: (pos: number) => void
  ) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setPosition(percent);
  };

  // Slider 1 handlers
  const handleMouseMove1 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging1) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect, setSlider1Position);
  };

  const handleTouchMove1 = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect, setSlider1Position);
  };

  // Slider 2 handlers
  const handleMouseMove2 = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging2) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect, setSlider2Position);
  };

  const handleTouchMove2 = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!e.touches[0]) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect, setSlider2Position);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Voorbeelden
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">Demo</span> ontwerpen
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Van concept tot conversie
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {/* Construction Project */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 border-b border-slate-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Bouw advertentie</h3>
                  <p className="text-slate-600">Advertentie in de bouwsector voor een meta campagne</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                    Bouw
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Voltooid
                  </span>
                </div>
              </div>
            </div>
            
            <div
              className="relative w-full aspect-[4/3] cursor-col-resize select-none bg-slate-100"
              onMouseDown={() => setIsDragging1(true)}
              onMouseUp={() => setIsDragging1(false)}
              onMouseMove={handleMouseMove1}
              onMouseLeave={() => setIsDragging1(false)}
              onTouchStart={() => setIsDragging1(true)}
              onTouchEnd={() => setIsDragging1(false)}
              onTouchMove={handleTouchMove1}
            >
              {/* After Image (base layer - left side) */}
              <div className="absolute inset-0">
                <img 
                  src="/Bouwafter.jpg" 
                  alt="Na bouw"
                  className="w-full h-full object-contain pointer-events-none"
                  draggable="false"
                />
              </div>

              {/* Before Image (revealed by slider - right side) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - slider1Position}% 0 0)` }}
              >
                <img 
                  src="/Bouwbefore.jpg" 
                  alt="Voor bouw"
                  className="w-full h-full object-contain pointer-events-none"
                  draggable="false"
                />
              </div>

              {/* Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10 pointer-events-none"
                style={{ left: `${slider1Position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-orange-500 pointer-events-auto cursor-col-resize">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-5 bg-slate-700"></div>
                    <div className="w-0.5 h-5 bg-slate-700"></div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>

          {/* Nike Project */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
            <div className="p-6 sm:p-8 border-b border-slate-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Voorbeeld productfoto (Nike)</h3>
                  <p className="text-slate-600">Demostratie voor social media content of advertenties</p>
                </div>
                <div className="flex gap-2">
                  <span className="px-4 py-2 bg-slate-100 text-slate-900 rounded-full text-sm font-semibold">
                    Retail
                  </span>
                  <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Voltooid
                  </span>
                </div>
              </div>
            </div>
            
            <div
              className="relative w-full aspect-[4/3] cursor-col-resize select-none bg-slate-100"
              onMouseDown={() => setIsDragging2(true)}
              onMouseUp={() => setIsDragging2(false)}
              onMouseMove={handleMouseMove2}
              onMouseLeave={() => setIsDragging2(false)}
              onTouchStart={() => setIsDragging2(true)}
              onTouchEnd={() => setIsDragging2(false)}
              onTouchMove={handleTouchMove2}
            >
              {/* After Image (base layer - left side) */}
              <div className="absolute inset-0">
                <img 
                  src="/Nikeafter.jpg" 
                  alt="Na Nike"
                  className="w-full h-full object-contain pointer-events-none"
                  draggable="false"
                />
              </div>

              {/* Before Image (revealed by slider - right side) */}
              <div
                className="absolute inset-0"
                style={{ clipPath: `inset(0 ${100 - slider2Position}% 0 0)` }}
              >
                <img 
                  src="/Nikebefore.jpg" 
                  alt="Voor Nike"
                  className="w-full h-full object-contain pointer-events-none"
                  draggable="false"
                />
              </div>

              {/* Slider Line & Handle */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-10 pointer-events-none"
                style={{ left: `${slider2Position}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-slate-900 pointer-events-auto cursor-col-resize">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-5 bg-slate-700"></div>
                    <div className="w-0.5 h-5 bg-slate-700"></div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105">
            Start jouw project
          </button>
        </div>
      </div>
    </section>
  );
}