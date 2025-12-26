'use client';

import React, { useState } from 'react';
import { Users, Shield, Zap, Target, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function WhyChooseUs() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const reasons = [
    {
      icon: Target,
      title: 'Focus op Resultaat',
      description: 'Geen vage marketingtermen of ingewikkelde rapporten. Ik focus me volledig op wat telt: meer conversies en meetbare groei voor jouw bedrijf.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100'
    },
    {
      icon: Users,
      title: 'Direct Contact',
      description: 'Je werkt niet met een accountmanager of stagiair, maar direct met mij. Korte lijnen, snelle schakeltijden en een persoonlijke aanpak.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100'
    },
    {
      icon: Zap,
      title: 'Maatwerk Strategie',
      description: 'Ik gebruik geen standaard templates. Elke website en campagne wordt vanaf een nieuwe basis opgebouwd om perfect aan te sluiten bij wat jij nodig hebt.',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-100'
    },
    {
      icon: Shield,
      title: 'Eerlijk & Transparant',
      description: 'Je houdt volledige controle over je eigen advertentie-accounts. Ik werk met open kaart over wat wel en niet werkt voor jouw business.',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-100'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < reasons.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchEnd) return;
    
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section id="waarom" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Waarom SDE AGENCY?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Waarom bedrijven met ons werken
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We staan voor resultaten, transparantie en partnerschap
          </p>
        </div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {reason.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Slider - Visible only on mobile */}
        <div className="md:hidden relative">
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                        <reason.icon className="w-7 h-7 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {reason.title}
                      </h3>

                      <p className="text-slate-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>
            <button
              onClick={nextSlide}
              disabled={currentSlide === reasons.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-orange-500 w-8' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}