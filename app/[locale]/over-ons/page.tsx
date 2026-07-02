'use client';

import { Target, Zap, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Header from '../../headerAndFooter/header';
import Footer from '../../headerAndFooter/footer';
import { Link } from '../../../i18n/navigation';

export default function AboutUs() {
  const t = useTranslations('OverOns');

  const values = [
    {
      icon: Target,
      title: t('value1Title'),
      description: t('value1Description'),
      color: 'from-green-400 to-green-500'
    },
    {
      icon: Zap,
      title: t('value2Title'),
      description: t('value2Description'),
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Award,
      title: t('value3Title'),
      description: t('value3Description'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Sparkles,
      title: t('value4Title'),
      description: t('value4Description'),
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const steps = [
    {
      number: '1',
      title: t('step1Title'),
      description: t('step1Description')
    },
    {
      number: '2',
      title: t('step2Title'),
      description: t('step2Description')
    },
    {
      number: '3',
      title: t('step3Title'),
      description: t('step3Description')
    },
    {
      number: '4',
      title: t('step4Title'),
      description: t('step4Description')
    }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-12">
        {/* Header */}
        <div className="mb-12 mt-15 sm:mt-30 sm:mb-16 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white mb-4 sm:mb-6 uppercase tracking-tight leading-[0.95]">
            {t('title')}
          </h1>

        </div>

        {/* Wie ben ik - Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="flex-shrink-0 w-full lg:w-1/3">
              <img
                src="/1754993401113.jpeg"
                alt={t('photoAlt')}
                className="w-full rounded-2xl shadow-2xl border-2 border-white/10 object-cover"
              />
            </div>
            <div className="flex-1 space-y-4 text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-3xl leading-relaxed mx-auto px-2">
            <p>
              {t.rich('bioParagraph1', { br: () => <br /> })}
            </p>
            <p>
              {t.rich('bioParagraph2', {
                br: () => <br />,
                accent: (chunks) => <span className="text-green-300 font-semibold">{chunks}</span>,
              })}
            </p>

            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-8 tracking-tight leading-tight text-center">{t('valuesTitle')}</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mijn aanpak */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight leading-tight">{t('approachTitle')}</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            {t('approachText')}
          </p>

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center font-bold text-white text-lg sm:text-lg">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tight leading-tight">
            {t('ctaTitle')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-green-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            {t('ctaText')}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-green-500 px-6 sm:px-8 py-3 sm:py-4 rounded-none font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            {t('ctaButton')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
