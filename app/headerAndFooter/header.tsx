'use client';

import { Menu, X, ChevronDown, Code2, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { NL, GB } from 'country-flag-icons/react/3x2';
import { Link, usePathname, useRouter } from '../../i18n/navigation';
import { logos } from '../config/logos';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showMobileLanguageDropdown, setShowMobileLanguageDropdown] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('Header');

  const languages = [
    { code: 'nl', label: 'Nederlands', Flag: NL },
    { code: 'en', label: 'English', Flag: GB },
  ] as const;

  const currentLanguage = languages.find((lang) => lang.code === locale) ?? languages[0];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowMobileServices(false);
    setShowMobileLanguageDropdown(false);
  }, [pathname]);

  const services = [
    {
      path: '/website-development',
      label: t('websiteDevLabel'),
      icon: Code2,
      description: t('websiteDevDescription')
    },
    {
      path: '/ai-automation',
      label: t('aiAutomationLabel'),
      icon: Bot,
      description: t('aiAutomationDescription')
    }
  ];

  const isActive = (path: string) => pathname === path;
  const isServiceActive = services.some(service => pathname === service.path);

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const changeLocale = (nextLocale: 'nl' | 'en') => {
    setShowLanguageDropdown(false);
    setShowMobileLanguageDropdown(false);
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <>
      <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'top-0 bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'top-4 sm:top-6 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-24">
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image
                src={logos.default}
                alt="SDE Agency logo"
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>

            <nav className="hidden md:flex items-center gap-1 lg:gap-3">
              <Link
                href="/"
                className={`px-3 lg:px-5 py-2 rounded-none transition-colors text-base lg:text-lg whitespace-nowrap ${
                  isActive('/')
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-white font-normal'
                }`}
              >
                {t('home')}
              </Link>

              {/* Diensten Dropdown - Desktop */}
              <div
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <button
                  className={`px-3 lg:px-5 py-2 rounded-none transition-colors text-base lg:text-lg whitespace-nowrap flex items-center gap-1 ${
                    isServiceActive
                      ? 'text-white font-bold'
                      : 'text-slate-400 hover:text-white font-normal'
                  }`}
                >
                  {t('services')}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    showServicesDropdown ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-lg rounded-none shadow-2xl border border-slate-700/50 overflow-hidden transition-all duration-200 ${
                  showServicesDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="py-3">
                    {services.map((service, index) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                          pathname === service.path
                            ? 'bg-green-400/20 text-white'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        } ${index === services.length - 1 ? '' : 'border-b border-slate-700/30'}`}
                      >
                        <div className={`w-10 h-10 rounded-none flex items-center justify-center flex-shrink-0 ${
                          pathname === service.path
                            ? 'bg-green-400'
                            : 'bg-slate-800'
                        }`}>
                          <service.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-semibold text-sm mb-0.5">{service.label}</div>
                          <div className="text-xs text-slate-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/over-ons"
                className={`px-3 lg:px-5 py-2 rounded-none transition-colors text-base lg:text-lg whitespace-nowrap ${
                  isActive('/over-ons')
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-white font-normal'
                }`}
              >
                {t('about')}
              </Link>

              {/* Language Dropdown - Desktop */}
              <div
                className="relative"
                onMouseEnter={() => setShowLanguageDropdown(true)}
                onMouseLeave={() => setShowLanguageDropdown(false)}
              >
                <button
                  className="ml-1 lg:ml-2 flex items-center gap-1.5 px-2.5 py-2 rounded-none text-slate-400 hover:text-white transition-colors text-sm font-medium"
                  aria-label={t('switchLanguage')}
                >
                  <currentLanguage.Flag className="w-4 h-auto rounded-[2px]" title={currentLanguage.label} />
                  {currentLanguage.code.toUpperCase()}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    showLanguageDropdown ? 'rotate-180' : ''
                  }`} />
                </button>

                <div className={`absolute top-full right-0 mt-2 w-36 bg-slate-900/95 backdrop-blur-lg rounded-none shadow-2xl border border-slate-700/50 overflow-hidden transition-all duration-200 ${
                  showLanguageDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLocale(lang.code)}
                        className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                          lang.code === locale
                            ? 'bg-green-400/20 text-white'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <lang.Flag className="w-4 h-auto rounded-[2px]" title={lang.label} />
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="ml-1 lg:ml-2 px-3 lg:px-5 py-2 text-green-400 hover:text-green-300 underline underline-offset-4 decoration-2 transition-colors font-semibold text-base lg:text-lg whitespace-nowrap"
              >
                {t('contact')}
              </Link>
            </nav>

            <div className="relative flex items-center gap-1 md:hidden">
              <button
                onClick={() => setShowMobileLanguageDropdown(!showMobileLanguageDropdown)}
                className="text-white p-2 hover:bg-white/10 rounded-none transition-colors flex items-center gap-1 text-sm font-medium"
                aria-label={t('switchLanguage')}
              >
                <currentLanguage.Flag className="w-4 h-auto rounded-[2px]" title={currentLanguage.label} />
                {currentLanguage.code.toUpperCase()}
              </button>

              <div className={`absolute top-full right-0 mt-1 w-32 bg-slate-900/95 backdrop-blur-lg rounded-none shadow-2xl border border-slate-700/50 overflow-hidden transition-all duration-200 z-50 ${
                showMobileLanguageDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                <div className="py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLocale(lang.code)}
                      className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                        lang.code === locale
                          ? 'bg-green-400/20 text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <lang.Flag className="w-4 h-auto rounded-[2px]" title={lang.label} />
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white p-2 hover:bg-white/10 rounded-none transition-colors"
                aria-label={t('menuToggle')}
              >
                {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/95 backdrop-blur-lg z-40 md:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <nav
          className={`flex flex-col h-full pt-24 pb-8 px-6 transition-transform duration-300 overflow-y-auto ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <Link
            href="/"
            className={`w-full text-center px-4 py-3 rounded-none transition-all ${
              isActive('/')
                ? 'text-white font-bold bg-white/10'
                : 'text-slate-300 hover:text-white hover:bg-white/5 font-normal'
            }`}
          >
            {t('home')}
          </Link>

          {/* Mobile Diensten Accordion */}
          <div className="w-full">
            <button
              onClick={() => setShowMobileServices(!showMobileServices)}
              className={`w-full text-center px-4 py-3 rounded-none transition-all flex items-center justify-center gap-2 ${
                isServiceActive
                  ? 'text-white font-bold bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5 font-normal'
              }`}
            >
              {t('services')}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                showMobileServices ? 'rotate-180' : ''
              }`} />
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${
              showMobileServices ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-1.5 bg-slate-800/30 rounded-none p-3 border border-slate-700/30">
                <div className="px-2 pb-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{t('ourServices')}</p>
                </div>
                {services.map((service, index) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-none transition-all ${
                      pathname === service.path
                        ? 'bg-green-400/20 text-white'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-none flex items-center justify-center flex-shrink-0 ${
                      pathname === service.path
                        ? 'bg-green-400'
                        : 'bg-slate-700'
                    }`}>
                      <service.icon className="w-4 h-4" />
                    </div>
                    <div className="text-left flex-1">
                      <div className="font-semibold text-sm">{service.label}</div>
                      <div className="text-xs opacity-75">{service.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/over-ons"
            className={`w-full text-center px-4 py-3 rounded-none transition-all ${
              isActive('/over-ons')
                ? 'text-white font-bold bg-white/10'
                : 'text-slate-300 hover:text-white hover:bg-white/5 font-normal'
            }`}
          >
            {t('about')}
          </Link>

          <Link
            href="/contact"
            className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white px-4 py-3 rounded-none hover:from-green-500 hover:to-green-600 transition-all font-semibold text-center shadow-lg shadow-green-400/30 mt-4"
          >
            {t('contact')}
          </Link>
        </nav>
      </div>
    </>
  );
}
