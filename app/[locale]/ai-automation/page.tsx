'use client';

import { ArrowRight, Zap, Clock, TrendingUp, CheckCircle2, Brain, Workflow, MessageSquare, Shield, Cpu, GitBranch, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '../../../i18n/navigation';
import Header from '../../headerAndFooter/header';
import Footer from '../../headerAndFooter/footer';


export default function AIAutomations() {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const t = useTranslations('AiAutomation');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: t('features.feature1Title'),
      description: t('features.feature1Description'),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Workflow,
      title: t('features.feature2Title'),
      description: t('features.feature2Description'),
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: GitBranch,
      title: t('features.feature3Title'),
      description: t('features.feature3Description'),
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: t('useCases.case1Title'),
      description: t('useCases.case1Description'),
      results: [t('useCases.case1Result1'), t('useCases.case1Result2'), t('useCases.case1Result3')]
    },
    {
      icon: Clock,
      title: t('useCases.case2Title'),
      description: t('useCases.case2Description'),
      results: [t('useCases.case2Result1'), t('useCases.case2Result2'), t('useCases.case2Result3')]
    },
    {
      icon: TrendingUp,
      title: t('useCases.case3Title'),
      description: t('useCases.case3Description'),
      results: [t('useCases.case3Result1'), t('useCases.case3Result2'), t('useCases.case3Result3')]
    }
  ];

  const process = [
    {
      step: '01',
      title: t('process.step1Title'),
      description: t('process.step1Description'),
      icon: Search
    },
    {
      step: '02',
      title: t('process.step2Title'),
      description: t('process.step2Description'),
      icon: Brain
    },
    {
      step: '03',
      title: t('process.step3Title'),
      description: t('process.step3Description'),
      icon: Cpu
    },
    {
      step: '04',
      title: t('process.step4Title'),
      description: t('process.step4Description'),
      icon: CheckCircle2
    },
    {
      step: '05',
      title: t('process.step5Title'),
      description: t('process.step5Description'),
      icon: Shield
    }
  ];

  const benefits = [
    t('benefits.item1'),
    t('benefits.item2'),
    t('benefits.item3'),
    t('benefits.item4')
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

  return (
    <>
    <Header />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)',
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 md:pt-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 md:py-20 w-full text-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-6 uppercase tracking-tight leading-[0.95]">
              {t('hero.headingLine1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">{t('hero.headingAccent')}</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-3xl leading-relaxed mx-auto px-2">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-20">
              <Link
                href="/contact"
                className="group relative bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-none font-semibold flex items-center justify-center text-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs"
              >
                <span className="relative text-lg z-10">{t('hero.cta')}</span>
                <ArrowRight className="absolute right-6 sm:right-8 w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                { label: t('hero.stat1Label'), value: '24/7' },
                { label: t('hero.stat2Label'), value: '+40%' },
                { label: t('hero.stat3Label'), value: '100%' },
                { label: t('hero.stat4Label'), value: '100%' }
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

      {/* Why AI Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              {t.rich('why.heading', {
                accent: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">{chunks}</span>,
              })}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('why.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-6">{t('why.cardTitle')}</h3>
              <div className="space-y-4">
                {[
                  t('why.point1'),
                  t('why.point2'),
                  t('why.point3')
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-200 text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{t('why.growthTitle')}</h4>
                <p className="text-lg text-slate-600">
                  {t('why.growthText')}
                </p>
              </div>

              <div className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">{t('why.impactTitle')}</h4>
                <p className="text-lg text-slate-600">
                  {t('why.impactText')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              {t.rich('features.heading', {
                accent: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">{chunks}</span>,
              })}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('features.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-purple-200 hover:-translate-y-1"
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

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              {t.rich('useCases.heading', {
                accent: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">{chunks}</span>,
              })}
            </h2>
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
                  {useCases.map((useCase, index) => (
                    <div
                      key={index}
                      className="w-full flex-shrink-0 px-2"
                    >
                      <div className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 h-full">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                          <useCase.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                        <p className="text-slate-600 leading-relaxed mb-6">{useCase.description}</p>
                        <div className="space-y-2">
                          {useCase.results.map((result, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                              <span className="text-slate-700 font-medium">{result}</span>
                            </div>
                          ))}
                        </div>
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
                disabled={currentSlide === useCases.length - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-none p-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center gap-2 mt-6">
                {useCases.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-none transition-all ${
                      currentSlide === index ? 'bg-purple-500 w-8' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              {t.rich('process.heading', {
                accent: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">{chunks}</span>,
              })}
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('process.subheading')}
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-500 font-bold text-4xl opacity-50">{item.step}</div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30" />
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-4">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-purple-500 font-bold text-4xl opacity-50">{item.step}</div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                {t.rich('benefits.heading', {
                  accent: (chunks) => <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">{chunks}</span>,
                })}
              </h2>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">{t('benefits.scanTitle')}</h3>
              <p className="text-slate-300 mb-6">
                {t('benefits.scanText')}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-none font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all"
              >
                {t('benefits.scanCta')}
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
    <Footer />
    </>
  );
}
