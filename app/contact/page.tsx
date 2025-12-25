'use client';

import { FormEvent, useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

export default function Contact() {
  const router = useRouter();
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
      const SERVICE_ID = 'service_zip21ga';
      const TEMPLATE_ID = 'template_ri4qbnc';
      const PUBLIC_KEY = '5ra9rhg-FAYFZnHaT';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Niet opgegeven',
        phone: `${formData.countryCode} ${formData.phone}`,
        service: formData.service,
        message: formData.message,
        to_email: 'Senne@sde-agency.com'
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

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-6 sm:py-12">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Terug</span>
        </button>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Neem contact op
          </h1>
          <p className="text-slate-400 text-base">
            We beantwoorden binnen 24 uur
          </p>
        </div>

        {/* Contact info cards - Simple stack */}
        <div className="space-y-3 mb-8">
          <a 
            href="mailto:Senne@sde-agency.com"
            className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-orange-400" />
            </div>
            <div className="min-w-0">
              <div className="text-xs text-slate-400">Email</div>
              <div className="text-sm font-medium text-white truncate">Senne@sde-agency.com</div>
            </div>
          </a>

          <a 
            href="tel:+32471241912"
            className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Telefoon</div>
              <div className="text-sm font-medium text-white">+32 471 24 19 12</div>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-lg">
            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-purple-400" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Locatie</div>
              <div className="text-sm font-medium text-white">Lommel, België</div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/5 border border-white/10 p-5 sm:p-6 rounded-lg">
          <h2 className="text-xl font-bold text-white mb-4">Stuur een bericht</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Naam *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Jouw naam"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Bedrijfsnaam
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="Optioneel"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Email * 
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                placeholder="jouw@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Telefoon *
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                  className="w-24 px-3 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none text-sm"
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
                  className="flex-1 px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="123 45 67 89"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Interesse in *
              </label>
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
              >
                <option value="" className="bg-slate-800">Selecteer een dienst</option>
                <option value="website" className="bg-slate-800">Websiteontwikkeling</option>
                <option value="meta-ads" className="bg-slate-800">Meta Ads Campagnes</option>
                <option value="both" className="bg-slate-800">Website + Ads</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Bericht *
              </label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none resize-none"
                placeholder="Vertel ons over je project..."
              />
            </div>

            {submitStatus === 'success' && (
              <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-lg">
                <p className="font-medium flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4" />
                  Bedankt! We nemen binnen 24 uur contact op.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg">
                <p className="font-medium text-sm">Er ging iets mis</p>
                <p className="text-xs mt-1">Probeer het later opnieuw of mail naar Senne@sde-agency.com</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:from-orange-600 hover:to-orange-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Versturen...
                </>
              ) : (
                <>
                  Verstuur bericht
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Simple footer CTA */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400 mb-3">
            Of bel direct voor een vrijblijvend gesprek
          </p>
          <a 
            href="tel:+32471241912" 
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-lg font-medium hover:bg-white/15 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            +32 471 24 19 12
          </a>
        </div>
      </div>
    </div>
  );
}