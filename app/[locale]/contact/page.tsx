'use client';

import { FormEvent, useState } from 'react';
import { Clock, Mail, Phone, MapPin, Send, Loader2, CheckCircle, ArrowUpRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslations } from 'next-intl';
import Header from '../../headerAndFooter/header';
import Footer from '../../headerAndFooter/footer';

export default function Contact() {
  const t = useTranslations('Contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    countryCode: '+32',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const SERVICE_ID = 'service_mhqkykm';
      const TEMPLATE_ID = 'template_ri4qbnc';
      const PUBLIC_KEY = '5ra9rhg-FAYFZnHaT';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || t('notProvided'),
        phone: `${formData.countryCode} ${formData.phone}`,
        service: formData.service,
        message: formData.message,
        to_email: 'sennedewit16@icloud.com'
      };

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '', company: '', countryCode: '+32' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const mapsUrl = 'https://www.google.com/maps/search/?api=1&query=Lommel%2C+Belgi%C3%AB';
  const mapsEmbedUrl = 'https://maps.google.com/maps?q=Lommel%2C%20Belgi%C3%AB&t=&z=12&ie=UTF8&iwloc=&output=embed';

  return (
    <>
    <Header />
    <div className="min-h-screen bg-slate-900">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-28 sm:pt-36 pb-12 sm:pb-20">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 uppercase tracking-tight leading-tight">
            {t('title')}
          </h1>
          <p className="text-slate-400 text-base sm:text-lg">
            {t('subtitle')}
          </p>
        </div>

        {/* Info cards row */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          <div className="flex items-center gap-4 p-5 bg-white/5 border border-white/10">
            <div className="w-11 h-11 bg-green-400/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-green-300" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wide text-slate-400">{t('responseTimeLabel')}</div>
              <div className="text-sm font-semibold text-white">{t('responseTimeValue')}</div>
            </div>
          </div>

          <a
            href="tel:+32471241912"
            className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-11 h-11 bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wide text-slate-400">{t('phone')}</div>
              <div className="text-sm font-semibold text-white">+32 471 24 19 12</div>
            </div>
          </a>

          <a
            href="mailto:Senne@sde-agency.com"
            className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
          >
            <div className="w-11 h-11 bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-purple-400" />
            </div>
            <div className="min-w-0">
              <div className="text-xs uppercase tracking-wide text-slate-400">{t('email')}</div>
              <div className="text-sm font-semibold text-white truncate">Senne@sde-agency.com</div>
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-white mb-6">{t('formTitle')}</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('formName')} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none"
                    placeholder={t('formNamePlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('formCompany')}
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none"
                    placeholder={t('formCompanyPlaceholder')}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('formEmail')} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none"
                    placeholder={t('formEmailPlaceholder')}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5">
                    {t('formPhone')} *
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.countryCode}
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                      className="w-24 px-3 py-2.5 bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-sm"
                    >
                      <option value="+32" className="bg-slate-800">+32</option>
                      <option value="+31" className="bg-slate-800">+31</option>
                      <option value="+33" className="bg-slate-800">+33</option>
                      <option value="+49" className="bg-slate-800">+49</option>
                      <option value="+44" className="bg-slate-800">+44</option>
                    </select>
                    <input
                      required
                      type="tel"
                      pattern="[0-9\s\-]+"
                      value={formData.phone}
                      onChange={(e) => {
                        const value = e.target.value.replace(/[^0-9\s\-]/g, '');
                        setFormData({ ...formData, phone: value });
                      }}
                      className="flex-1 px-4 py-2.5 bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none"
                      placeholder="123 45 67 89"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  {t('formInterest')} *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/20 text-white focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none"
                >
                  <option value="" className="bg-slate-800">{t('formInterestSelect')}</option>
                  <option value="website" className="bg-slate-800">{t('formInterestWebsite')}</option>
                  <option value="ai-automation" className="bg-slate-800">AI Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  {t('formMessage')} *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/20 text-white placeholder-slate-500 focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none resize-none"
                  placeholder={t('formMessagePlaceholder')}
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3">
                  <p className="font-medium flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4" />
                    {t('successMessage')}
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3">
                  <p className="font-medium text-sm">{t('errorTitle')}</p>
                  <p className="text-xs mt-1">{t('errorText')}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-green-400 to-green-500 text-white px-6 py-3 rounded-none font-medium flex items-center justify-center gap-2 hover:from-green-500 hover:to-green-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {t('sending')}
                  </>
                ) : (
                  <>
                    {t('formSubmit')}
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact details + map */}
          <div className="flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 p-6">
              <div className="inline-block bg-white/10 text-slate-300 px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-5">
                {t('contactDetailsTitle')}
              </div>

              <div className="mb-5">
                <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">{t('addressLabel')}</div>
                <div className="text-white font-medium">Lommel, België</div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wide text-slate-400 mb-1">{t('valuePropLabel')}</div>
                <div className="text-white font-medium">{t('valuePropValue')}</div>
              </div>
            </div>

            <div className="relative bg-white/5 border border-white/10 overflow-hidden">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 bg-slate-900/90 text-white text-xs font-semibold px-3 py-2 hover:bg-slate-900 transition-colors"
              >
                {t('openInMaps')}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <iframe
                src={mapsEmbedUrl}
                width="100%"
                height="220"
                style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SDE Agency - Lommel"
              />
            </div>

            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-5 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-5 h-5 text-green-300 flex-shrink-0 mt-0.5" />
              <div className="min-w-0">
                <div className="font-semibold text-white">SDE Agency</div>
                <div className="text-sm text-slate-400 mb-1">Lommel, België</div>
                <span className="text-sm text-green-400">{t('openInMaps')}</span>
              </div>
            </a>
          </div>
        </div>

        {/* Simple footer CTA */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-400 mb-3">
            {t('callInstead')}
          </p>
          <a
            href="tel:+32471241912"
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-none font-medium hover:bg-white/15 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            +32 471 24 19 12
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
