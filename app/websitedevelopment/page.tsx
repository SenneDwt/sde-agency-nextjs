'use client';

import { ArrowRight, Code2, Zap, Smartphone, Search, Shield, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Layers, Palette, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import Header from '../headerAndFooter/header';
import Footer from '../headerAndFooter/footer';

export default function WebsiteDevelopment() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < features.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const prevSlide = () => {
    setCurrentSlide(Math.max(0, currentSlide - 1));
  };

  const nextSlide = () => {
    setCurrentSlide(Math.min(features.length - 1, currentSlide + 1));
  };

  const features = [
    {
      icon: Code2,
      title: 'Next.js & TypeScript',
      description: 'Moderne technologieën voor snelle, betrouwbare websites.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Blazing Fast',
      description: 'Geoptimaliseerd voor snelheid.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First',
      description: 'Perfect op alle apparaten. Mobile first design voor de beste gebruikerservaring.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Search,
      title: 'SEO Geoptimaliseerd',
      description: 'Gebouwd met SEO best practices voor betere vindbaarheid in zoekmachines.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Shield,
      title: 'Beveiligd & Betrouwbaar',
      description: 'SSL certificaten, regelmatige updates en backups voor maximale beveiliging.',
      color: 'from-red-500 to-rose-600'
    },
    {
      icon: Palette,
      title: 'Custom Design',
      description: 'Uniek design dat perfect aansluit bij jouw merk en doelgroep.',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  const process = [
    { step: '01', title: 'Analyse', description: 'We analyseren jouw doelen, doelgroep en concurrentie.', icon: Search },
    { step: '02', title: 'Planning', description: 'We maken een gedetailleerd plan voor jouw website.', icon: Layers },
    { step: '03', title: 'Ontwikkeling', description: 'We bouwen je website met moderne technologieën.', icon: Code2 },
    { step: '04', title: 'Testing', description: 'Uitgebreide tests op verschillende apparaten en browsers.', icon: CheckCircle2 },
    { step: '05', title: 'Launch', description: 'We lanceren je website en zorgen dat alles perfect werkt.', icon: Rocket }
  ];

  const benefits = [
    'Uniek design dat jouw merk versterkt',
    'Optimale snelheid en prestaties',
    'Geen overbodige code of functionaliteit',
    'Betere Google rankings',
    
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
            <Code2 className="w-4 h-4 text-orange-400" />
            <span className="text-xs sm:text-sm text-white/90 font-medium">Website Development</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Moderne websites die <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">aandacht</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-orange-400"> trekken</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-3xl leading-relaxed mx-auto px-2">
            Geoptimaliseerd voor snelheid en gebruikerservaring.
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
              { label: 'Website specialist', value: '100%' },
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

      {/* Features Grid/Slider with colored icons */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Wat We Bouwen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Websites die <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">indruk</span> maken
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              
              Snel, makkelijk en op maat gemaakt.
            </p>
          </div>

          {/* Mobile Slider */}
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
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
                        <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                          <feature.icon className="w-7 h-7 text-white" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {feature.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed">
                          {feature.description}
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
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-orange-500' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            Het Proces
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4">
            Van concept tot <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">live website</span> 
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mt-2">
            Ons stapsgewijze proces voor een succesvolle samenwerking
          </p>
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          {process.map((item, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="bg-[#F2F2F2] border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-orange-500 font-bold text-4xl opacity-50">{item.step}</div>
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
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
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-orange-500 font-bold text-4xl opacity-50">{item.step}</div>
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-cyan-500 opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      

      {/* Interactive Performance Dashboard */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Performance die <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">meetbaar</span> is
              </h2>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-2xl border-2 border-orange-200">
                <p className="text-slate-700 italic">
                  "Een snelle website is geen luxe meer, het is een noodzaak. Elke seconde telt voor jouw klanten."
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-3xl p-8 backdrop-blur-sm border-2 border-orange-300">
                <div className="bg-white rounded-2xl p-8 space-y-6">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">Performance Metrics</h4>
                  
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-orange-500" />
                        <span className="text-slate-600 font-medium">Laadtijd</span>
                      </div>
                      <span className="text-orange-600 font-bold text-lg">&lt; 2 sec</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-11/12 bg-gradient-to-r from-orange-500 to-cyan-500 rounded-full" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Search className="w-5 h-5 text-cyan-500" />
                        <span className="text-slate-600 font-medium">Google Score</span>
                      </div>
                      <span className="text-cyan-600 font-bold text-lg">95+</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-purple-500" />
                        <span className="text-slate-600 font-medium">Mobile Score</span>
                      </div>
                      <span className="text-purple-600 font-bold text-lg">100%</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-12 h-12 text-orange-500" />
            <Code2 className="w-12 h-12 text-cyan-500" />
            <Rocket className="w-12 h-12 text-orange-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Klaar om te starten?
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
           Samen bouwen aan jouw ideale website. <br />Plan geheel vrijblijvend een gesprek.
          </p>
           <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
                          <Link href="/contact"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-xl text-white px-12 py-6 rounded-full font-semibold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                          >
                            Start je project
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>
                          
                        </div>
        </div>
      </section>
      <Footer  />
    </>
  );
}

