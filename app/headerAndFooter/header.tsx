'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { logos } from '../config/logos';


export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/websitedevelopment', label: 'Websiteontwikkeling' },
    { path: '/social-media-ads', label: 'Meta Ads' },
    { path: '/Over-ons', label: 'Over ons' }

  ];

  const isActive = (path: string) => pathname === path;

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
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  href={item.path}
                  className={`px-3 lg:px-4 py-2 rounded-lg transition-colors text-sm lg:text-base whitespace-nowrap ${
                    isActive(item.path)
                      ? 'text-white font-bold'
                      : 'text-slate-400 hover:text-white font-normal'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
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
          className={`flex flex-col items-center justify-center h-full space-y-2 px-8 transition-transform duration-300 ${
            isOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item, index) => (
            <Link 
              key={item.path}
              href={item.path}
              className={`w-full text-center px-6 py-4 rounded-xl transition-all text-lg ${
                isActive(item.path)
                  ? 'text-white font-bold bg-white/10 scale-105'
                  : 'text-slate-300 hover:text-white hover:bg-white/5 font-normal'
              }`}
              style={{ 
                transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
              }}
            >
              {item.label}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all font-semibold text-center text-lg shadow-lg shadow-orange-500/30 mt-4"
            style={{ 
              transitionDelay: isOpen ? `${navItems.length * 50}ms` : '0ms' 
            }}
          >
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
}