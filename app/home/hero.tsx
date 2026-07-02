'use client';

import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const t = useTranslations('Hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-900">
      <div className="absolute inset-0" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <Image
          src="/BackgroundHero.jpg"
          alt={t('imageAlt')}
          fill
          priority
          className="object-cover object-center"
        />
      </div>
      <div className="absolute inset-0 bg-slate-900/45" />

      <div className="relative z-10 min-h-screen flex flex-col justify-center pt-24 md:pt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-12 md:py-20 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 uppercase leading-[0.95] tracking-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]">
            {t.rich('headline', {
              br: () => <br />,
            })}
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-2xl leading-relaxed">
            {t('subheading')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-white px-8 py-4 rounded-none font-semibold hover:shadow-2xl hover:shadow-green-400/50 transition-all duration-300 hover:scale-105"
            >
              {t('cta')}
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <a
              href="#diensten"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white px-8 py-4 rounded-none font-semibold hover:bg-white/10 transition-all duration-300"
            >
              {t('secondaryCta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
