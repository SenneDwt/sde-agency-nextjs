import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';
import { logos } from '../config/logos';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-900 text-white">
      <div className="h-px bg-gradient-to-r from-transparent via-green-400/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Image
              src={logos.small}
              alt="SDE Agency logo"
              height={32}
              className="h-8 w-auto mb-6"
            />
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {t('tagline')}
            </p>
            <div className="space-y-1 text-sm text-slate-400 mb-6">
              <p className="font-semibold text-white">SDE Agency</p>
              <p>Lommel, België</p>
              <p>BTW: BE1015587426</p>
            </div>
            <div className="space-y-1 text-sm text-slate-400">
              <p>
                <a href="mailto:Senne@sde-agency.com" className="hover:text-green-400 transition-colors">
                  Senne@sde-agency.com
                </a>
              </p>
              <p>
                <a href="tel:+32471241912" className="hover:text-green-400 transition-colors">
                  +32 471 24 19 12
                </a>
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-5">
              {t('servicesHeading')}
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/website-development"
                className="text-slate-300 hover:text-green-400 transition-colors font-medium w-fit"
              >
                {t('websiteDevelopment')}
              </Link>
              <Link
                href="/ai-automation"
                className="text-slate-300 hover:text-green-400 transition-colors font-medium w-fit"
              >
                {t('aiAutomation')}
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-5">
              {t('companyHeading')}
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/over-ons"
                className="text-slate-300 hover:text-green-400 transition-colors font-medium w-fit"
              >
                {t('about')}
              </Link>
              <Link
                href="/contact"
                className="text-slate-300 hover:text-green-400 transition-colors font-medium w-fit"
              >
                {t('contact')}
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-5">
              {t('legalHeading')}
            </h3>
            <div className="flex flex-col gap-4">
              <Link
                href="/privacybeleid"
                className="text-slate-300 hover:text-green-400 transition-colors font-medium w-fit"
              >
                {t('privacyPolicy')}
              </Link>
              <Link
                href="/algemene-voorwaarden"
                className="text-slate-300 hover:text-green-400 transition-colors font-medium w-fit"
              >
                {t('terms')}
              </Link>
              <Link
                href="/cookiebeleid"
                className="text-slate-300 hover:text-green-400 transition-colors font-medium w-fit"
              >
                {t('cookiePolicy')}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-slate-400 text-sm text-center md:text-left">
           © {new Date().getFullYear()} SDE Agency. {t('rightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
}
