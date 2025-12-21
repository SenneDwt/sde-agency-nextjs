'use client';

import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/websitedevelopment', label: 'Website Development' },
    { path: '/social-media-ads', label: 'Meta Ads' }
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-white hover:text-orange-500 transition-colors">
            SDE Agency
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

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'text-white font-bold bg-white/10'
                    : 'text-slate-400 hover:text-white font-normal'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors font-semibold text-center"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}