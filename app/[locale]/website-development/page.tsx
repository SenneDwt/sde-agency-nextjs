'use client';

import { ArrowRight, Code2, Zap, Smartphone, Search, Shield, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Layers, Palette, Rocket } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/navigation';

import Header from '../../headerAndFooter/header';
import Footer from '../../headerAndFooter/footer';

export default function WebsiteDevelopment() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const t = useTranslations('WebsiteDevelopment');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Code2,
      title: 'Next.js & TypeScript',
      description: t('features.feature1Description'),
      bgLight: 'bg-blue-50',
      iconText: 'text-blue-500'
    },
    {
      icon: Zap,
      title: t('features.feature2Title'),
      description: t('features.feature2Description'),
      bgLight: 'bg-green-50',
      iconText: 'text-green-500'
    },
    {
      icon: Smartphone,
      title: t('features.feature3Title'),
      description: t('features.feature3Description'),
      bgLight: 'bg-purple-50',
      iconText: 'text-purple-500'
    },
    {
      icon: Search,
      title: t('features.feature4Title'),
      description: t('features.feature4Description'),
      bgLight: 'bg-emerald-50',
      iconText: 'text-emerald-500'
    },
    {
      icon: Shield,
      title: t('features.feature5Title'),
      description: t('features.feature5Description'),
      bgLight: 'bg-red-50',
      iconText: 'text-red-500'
    },
    {
      icon: Palette,
      title: t('features.feature6Title'),
      description: t('features.feature6Description'),
      bgLight: 'bg-cyan-50',
      iconText: 'text-cyan-500'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < features.length - 1) {
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

  const process = [
    { step: '01', title: t('process.step1Title'), description: t('process.step1Description'), icon: Search },
    { step: '02', title: t('process.step2Title'), description: t('process.step2Description'), icon: Layers },
    { step: '03', title: t('process.step3Title'), description: t('process.step3Description'), icon: Code2 },
    { step: '04', title: t('process.step4Title'), description: t('process.step4Description'), icon: CheckCircle2 },
    { step: '05', title: t('process.step5Title'), description: t('process.step5Description'), icon: Rocket }
  ];

  const benefits = [
    t('benefits.item1'),
    t('benefits.item2'),
    t('benefits.item3'),
    t('benefits.item4'),
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl opacity-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 md:py-20 w-full text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight leading-[0.95] md:block">
            {t('hero.headingLine1')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-cyan-400">{t('hero.headingAccent1')}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-300"> {t('hero.headingAccent2')}</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-3xl leading-relaxed mx-auto px-2">
            {t('hero.description')}
          </p>

          {/* CTA Button - Properly Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-20">
            <Link
              href="/contact"
              className="group relative bg-gradient-to-r from-green-400 to-green-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-none font-semibold flex items-center justify-center text-center hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs"
            >
              <span className="relative text-lg z-10">{t('hero.cta')}</span>
              <ArrowRight className="absolute right-6 sm:right-8 w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { label: t('hero.stat1Label'), value: '<24 uur' },
              { label: t('hero.stat2Label'), value: '1 op 1' },
              { label: t('hero.stat3Label'), value: '100%' },
              { label: t('hero.stat4Label'), value: t('hero.stat4Value') }
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              {t.rich('features.heading', {
                accent: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-600">{chunks}</span>,
              })}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('features.subheading')}
            </p>
          </div>

          {/* Mobile Slider */}
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
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="p-8 bg-white rounded-2xl border border-slate-100 h-full">
                        <div className={`w-12 h-12 ${feature.bgLight} rounded-xl flex items-center justify-center mb-6`}>
                          <feature.icon className={`w-6 h-6 ${feature.iconText}`} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {feature.description}
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
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-none p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-6 h-6 text-slate-900" />
              </button>
              <button
                onClick={nextSlide}
                disabled={currentSlide === features.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-none p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-none transition-all ${
                      currentSlide === index ? 'bg-green-400 w-8' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-slate-100"
              >
                <div className={`w-12 h-12 ${feature.bgLight} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.iconText}`} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
            {t.rich('process.heading', {
              accent: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-600">{chunks}</span>,
            })}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {t('process.subheading')}
          </p>
        </div>

        {/* Mobile Stack */}
        <div className="md:hidden space-y-4">
          {process.map((item, index) => (
            <div
              key={index}
              className="relative"
            >
              <div className="bg-white border border-slate-100 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-green-400 font-bold text-4xl opacity-50">{item.step}</div>
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
              {index < process.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-green-400 to-cyan-500 opacity-30" />
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
              <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-green-400 font-bold text-4xl opacity-50">{item.step}</div>
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-green-400 to-cyan-500 opacity-30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Interactive Performance Dashboard */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                {t.rich('performance.heading', {
                  accent: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-600">{chunks}</span>,
                })}
              </h2>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-100">
                <p className="text-slate-700 italic">
                  {t('performance.quote')}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 space-y-6 border border-slate-100">
                  <h4 className="text-2xl font-bold text-slate-900 mb-6">{t('performance.dashboardTitle')}</h4>

                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Zap className="w-5 h-5 text-green-400" />
                        <span className="text-slate-600 font-medium">{t('performance.loadTime')}</span>
                      </div>
                      <span className="text-green-500 font-bold text-lg">&lt; 2 sec</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-11/12 bg-gradient-to-r from-green-400 to-cyan-500 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Search className="w-5 h-5 text-cyan-500" />
                        <span className="text-slate-600 font-medium">{t('performance.googleScore')}</span>
                      </div>
                      <span className="text-cyan-600 font-bold text-lg">95+</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-green-400 rounded-full" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Smartphone className="w-5 h-5 text-purple-500" />
                        <span className="text-slate-600 font-medium">{t('performance.mobileScore')}</span>
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
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-12 h-12 text-green-400" />
            <Code2 className="w-12 h-12 text-cyan-500" />
            <Rocket className="w-12 h-12 text-green-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4 tracking-tight leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          {t('cta.text')}
          </p>
           <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
                          <Link href="/contact"
                            className="group inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-xl text-white px-12 py-6 rounded-none font-semibold hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 hover:scale-105"
                          >
                            {t('hero.cta')}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </Link>

                        </div>
        </div>
      </section>
      <Footer  />
    </>
  );
}
