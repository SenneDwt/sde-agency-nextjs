'use client';

import { Menu, X, ChevronDown, Code2, Target, Bot } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { logos } from '../config/logos';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileServices, setShowMobileServices] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setShowMobileServices(false);
  }, [pathname]);

  const services = [
    { 
      path: '/website-development', 
      label: 'Website Ontwikkeling',
      icon: Code2,
      description: 'Moderne, snelle websites'
    },
    { 
      path: '/meta-advertenties', 
      label: 'Meta Ads',
      icon: Target,
      description: 'Facebook / Instagram advertenties'
    },
    { 
      path: '/ai-automation', 
      label: 'AI Automation',
      icon: Bot,
      description: 'Slimme automatiseringen'
    }
  ];

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/prijzen', label: 'Prijzen' },
    { path: '/over-ons', label: 'Over ons' }
  ];

  const isActive = (path: string) => pathname === path;
  const isServiceActive = services.some(service => pathname === service.path);

  const handleLogoClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link 
              href="/" 
              onClick={handleLogoClick}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <Image 
                src={logos.default} 
                alt="SDE Agency logo" 
                height={32}
                className="h-8 w-auto"
                priority
              />
            </Link>
            
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              <Link 
                href="/"
                className={`px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base whitespace-nowrap ${
                  isActive('/')
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-white font-normal'
                }`}
              >
                Home
              </Link>
              
              {/* Diensten Dropdown - Desktop */}
              <div 
                className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <button
                  className={`px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base whitespace-nowrap flex items-center gap-1 ${
                    isServiceActive
                      ? 'text-white font-bold'
                      : 'text-slate-400 hover:text-white font-normal'
                  }`}
                >
                  Diensten
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    showServicesDropdown ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <div className={`absolute top-full left-0 mt-2 w-72 bg-slate-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-slate-700/50 overflow-hidden transition-all duration-200 ${
                  showServicesDropdown ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}>
                  <div className="py-3">
                    {services.map((service, index) => (
                      <Link
                        key={service.path}
                        href={service.path}
                        className={`flex items-start gap-3 px-4 py-3 transition-colors ${
                          pathname === service.path
                            ? 'bg-orange-500/20 text-white'
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        } ${index === services.length - 1 ? '' : 'border-b border-slate-700/30'}`}
                      >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          pathname === service.path
                            ? 'bg-orange-500'
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
                href="/prijzen"
                className={`px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base whitespace-nowrap ${
                  isActive('/prijzen')
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-white font-normal'
                }`}
              >
                Prijzen
              </Link>

              <Link 
                href="/over-ons"
                className={`px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base whitespace-nowrap ${
                  isActive('/over-ons')
                    ? 'text-white font-bold'
                    : 'text-slate-400 hover:text-white font-normal'
                }`}
              >
                Over ons
              </Link>

              <Link 
                href="/contact"
                className="ml-2 lg:ml-4 bg-orange-500 text-white px-4 lg:px-6 py-2 rounded-full hover:bg-orange-600 transition-colors font-semibold text-sm lg:text-base whitespace-nowrap"
              >
                Contact
              </Link>
            </nav>

            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Menu openen of sluiten"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
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
            className={`w-full text-center px-4 py-3 rounded-lg transition-all ${
              isActive('/')
                ? 'text-white font-bold bg-white/10'
                : 'text-slate-300 hover:text-white hover:bg-white/5 font-normal'
            }`}
          >
            Home
          </Link>

          {/* Mobile Diensten Accordion */}
          <div className="w-full">
            <button
              onClick={() => setShowMobileServices(!showMobileServices)}
              className={`w-full text-center px-4 py-3 rounded-lg transition-all flex items-center justify-center gap-2 ${
                isServiceActive
                  ? 'text-white font-bold bg-white/10'
                  : 'text-slate-300 hover:text-white hover:bg-white/5 font-normal'
              }`}
            >
              Diensten
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                showMobileServices ? 'rotate-180' : ''
              }`} />
            </button>
            
            <div className={`overflow-hidden transition-all duration-300 ${
              showMobileServices ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
            }`}>
              <div className="space-y-1.5 bg-slate-800/30 rounded-lg p-3 border border-slate-700/30">
                <div className="px-2 pb-1">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Onze Diensten</p>
                </div>
                {services.map((service, index) => (
                  <Link
                    key={service.path}
                    href={service.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      pathname === service.path
                        ? 'bg-orange-500/20 text-white'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      pathname === service.path
                        ? 'bg-orange-500'
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
            href="/prijzen"
            className={`w-full text-center px-4 py-3 rounded-lg transition-all ${
              isActive('/prijzen')
                ? 'text-white font-bold bg-white/10'
                : 'text-slate-300 hover:text-white hover:bg-white/5 font-normal'
            }`}
          >
            Prijzen
          </Link>

          <Link 
            href="/over-ons"
            className={`w-full text-center px-4 py-3 rounded-lg transition-all ${
              isActive('/over-ons')
                ? 'text-white font-bold bg-white/10'
                : 'text-slate-300 hover:text-white hover:bg-white/5 font-normal'
            }`}
          >
            Over ons
          </Link>

          <Link 
            href="/contact"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all font-semibold text-center shadow-lg shadow-orange-500/30 mt-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}