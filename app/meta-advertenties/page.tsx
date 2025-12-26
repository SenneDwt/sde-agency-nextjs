'use client';

import { ArrowRight, Target, TrendingUp, Users, BarChart3, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../headerAndFooter/header';
import Footer from '../headerAndFooter/footer';

export default function SocialMediaAds() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const features = [
    {
      icon: Target,
      title: 'Gerichte targeting',
      description: 'Ik bereik jouw ideale klant met geavanceerde targeting.'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Optimalisatie',
      description: 'Dagelijkse monitoring en optimalisatie van je campagnes. '
    },
    {
      icon: Users,
      title: 'Schaalbare Campagnes',
      description: 'Van kleine testbudgetten tot grote campagnes.'
    },
    {
      icon: BarChart3,
      title: 'Transparante Rapportage',
      description: 'Wekelijkse updates over je campagne prestaties. Je weet altijd precies wat er gebeurt en waarom.'
    }
  ];

  const process = [
    { 
      step: '01', 
      title: 'Kennismaking & Strategie', 
      description: 'We bespreken jouw doelen, doelgroep en budget. Ik maak een strategie specifiek voor jouw bedrijf.' 
    },
    { 
      step: '02', 
      title: 'Campagne Opzet', 
      description: 'Ik bouw je Meta campagnes op met professionele ad copy, visuals en de juiste targeting.' 
    },
    {
      step: '03', 
      title: 'Testen & lancering', 
      description: 'We starten met testen van verschillende advertenties om te zien wat het beste werkt voor jouw doelgroep.' 
    },
    { 
      step: '04', 
      title: 'Optimalisatie', 
      description: 'Dagelijkse monitoring en aanpassingen voor betere resultaten. Wat werkt blijft, wat niet werkt gaat eruit.' 
    },
    { 
      step: '05', 
      title: 'Schalen & Groeien', 
      description: 'Zodra we winnende campagnes hebben, schalen we op voor meer conversies en groei.' 
    }
  ];

  const benefits = [
    'Direct contact met mij als jouw specialist',
    'Transparante rapportages elke week',
    'Focus op échte resultaten voor jouw bedrijf',
    'Persoonlijke strategie',
    'Continue optimalisatie voor betere prestaties'
  ];

  return (
    <>
    <Header />
      {/* Hero Section - Dark Background */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 snap-start">
      {/* Background Effects */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 md:pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 md:mb-8 border border-white/20">
            <Target className="w-4 h-4 text-orange-400" />
            <span className="text-xs sm:text-sm text-white/90 font-medium">Meta-advertentiespecialist</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight md:block">
            Meta Ads die de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">juiste klanten</span> aanspreken
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-3xl leading-relaxed mx-auto px-2">
            Ik help bedrijven groeien met meta 
            advertenties die converteren
          </p>

          {/* CTA Button - Properly Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-20">
            <Link 
              href="/contact"
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center text-center hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs"
            >
              <span className="relative text-lg z-10">Start je project</span>
              <ArrowRight className="absolute right-6 sm:right-8 w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { label: 'Respons tijd', value: '<24 uur' },
              { label: 'Persoonlijk contact', value: '1 op 1' },
              { label: 'Meta specialist', value: '100%' },
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

      {/* Why Meta Section - White Background */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Waarom Meta Ads
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
               Meta Ads zijn perfect voor <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">jouw groei</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Met 3+ miljard actieve gebruikers bereik je precies de juiste mensen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-6">Wat maakt Meta Ads zo krachtig?</h3>
              <div className="space-y-4">
                {[
                  'Bereik miljoenen potentiële klanten op Facebook & Instagram',
                  'Targeting op basis van interesses, gedrag en demografische gegevens',
                  'Start vanaf elk budget',
                  'Meet snel je resultaten'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-200 text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Bereik jouw ideale klant</h4>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Met Meta Ads bereik je exact de mensen die interesse hebben in jouw product of dienst, op het juiste moment.
                </p>
              </div>

              <div className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Groei vanaf dag 1</h4>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Meta Ads leveren sneller resultaten dan traditionele marketing. Perfect voor bedrijven die snel willen groeien.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Mijn Aanpak
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Hoe ik jouw <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">campagnes</span> versterk
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Persoonlijke begeleiding en bewezen strategieën
            </p>
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 h-full">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
              disabled={currentSlide === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900" />
            </button>
            <button
              onClick={() => setCurrentSlide(Math.min(features.length - 1, currentSlide + 1))}
              disabled={currentSlide === features.length - 1}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-6 h-6 text-slate-900" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {features.map((_, index) => (
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

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Process Section */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
        Het Proces
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
        Van gesprek tot <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">groeiende campagnes</span>
      </h2>
      <p className="text-xl text-slate-600 max-w-2xl mx-auto">
        Stap voor stap naar succesvolle Meta advertenties
      </p>
    </div>

    {/* Mobile Stack */}
    <div className="md:hidden space-y-4">
      {process.map((item, index) => (
        <div key={index} className="relative">
          <div className="bg-[#F2F2F2] border border-slate-200 rounded-2xl p-6">
            <div className="text-orange-500 font-bold text-5xl mb-4 opacity-50">{item.step}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
          </div>
          {index < process.length - 1 && (
            <div className="flex justify-center py-2">
              <div className="w-0.5 h-4 bg-gradient-to-b from-orange-500 to-cyan-500 opacity-30" />
            </div>
          )}
        </div>
      ))}
    </div>

    {/* Desktop Grid */}
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-6">
      {process.map((item, index) => (
        <div 
          key={index}
          className="relative group"
        >
          <div className="bg-[#F2F2F2] border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full">
            <div className="text-orange-500 font-bold text-5xl mb-4 opacity-50">{item.step}</div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
            <p className="text-slate-600 text-lg leading-relaxed">{item.description}</p>
          </div>
          {index < process.length - 1 && (
            <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-cyan-500 opacity-30" />
          )}
        </div>
      ))}
    </div>
  </div>
</section> 

      {/* Why Work With Me Section */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-4xl font-bold text-slate-900 mb-6">
                Waarom <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">samenwerken</span> met mij?
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Vrijblijvend gesprek</h3>
              <p className="text-slate-300 mb-6">
                Benieuwd wat ik voor jou kan betekenen? Plan een gratis kennismakingsgesprek van 30 minuten.
              </p>
              <Link href="/contact"
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
              >
                Plan een gesprek
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}