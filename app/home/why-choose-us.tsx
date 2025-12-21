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
    <section id="waarom" className="py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
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
              className="group p-8 bg-slate-50 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className={`w-7 h-7 ${reason.color}`} />
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
        <div className="md:hidden">
          <div 
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                      <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6">
                        <reason.icon className={`w-7 h-7 ${reason.color}`} />
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

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reasons.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-orange-500 w-6' 
                    : 'bg-slate-300 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-2xl text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Klaar om je bedrijf te laten groeien?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Laten we kennismaken. 
            In een vrijblijvend gesprek bespreken we je doelen en hoe we je kunnen helpen.
          </p>
          <Link href="/contact" className="inline-block bg-orange-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-orange-600 transition-colors hover:shadow-lg hover:shadow-orange-500/50">
            Plan een kosteloos gesprek
          </Link>
        </div>
      </div>
    </section>
  );
}