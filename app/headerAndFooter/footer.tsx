import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { logos } from '../config/logos';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Image 
                src={logos.small} 
                alt="SDE Agency logo" 
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="font-semibold text-slate-300">BTW: BE1015587426</p>
              <p>Lommel, België</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Diensten</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/Diensten" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Alle diensten
                </Link>
              </li>
              <li>
                <Link 
                  href="/WebsiteDevelopment" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Websiteontwikkeling
                </Link>
              </li>
              <li>
                <Link 
                  href="/Social-Media-Ads" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Social media ads
                </Link>
              </li>
              <li>
                <Link 
                  href="/Ai-Automation" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  AI Automations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Bedrijf</h3>
            <ul className="space-y-4">
              <li>
                <Link 
                  href="/Over-ons" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Over ons
                </Link>
              </li>
              <li>
                <Link 
                  href="/Prijzen" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Prijzen
                </Link>
              </li>
              <li>
                <Link 
                  href="/Contact" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:Senne@sde-agency.com" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Senne@sde-agency.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+32471241912" 
                  className="text-slate-400 hover:text-orange-500 transition-colors flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm">+32 471 24 19 12</span>
                </a>
              </li>
              <li>
                <div className="text-slate-400 flex items-center gap-3">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <span className="text-sm">Lommel, België</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Nog Vragen?</h3>
              <p className="text-orange-100">Neem vandaag nog contact op voor een vrijblijvend gesprek.</p>
            </div>
            <Link 
              href="/Contact"
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 whitespace-nowrap flex items-center gap-2"
            >
              Plan gesprek
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">
             © {new Date().getFullYear()} SDE Agency. Alle rechten voorbehouden.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <Link href="/Privacybeleid" className="hover:text-orange-500 transition-colors">
                Privacybeleid
              </Link>
              <Link href="/Algemene-Voorwaarden" className="hover:text-orange-500 transition-colors">
                Algemene Voorwaarden
              </Link>
              <Link href="/Cookiebeleid" className="hover:text-orange-500 transition-colors">
                Cookiebeleid
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}