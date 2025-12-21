'use client';

import { FormEvent, useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, Loader2, CheckCircle, Clock, User, Zap } from 'lucide-react';
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
      // Replace these with your actual EmailJS credentials
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

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-orange-400 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm sm:text-base">Terug</span>
        </button>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 border border-orange-500/20">
                <Zap className="w-4 h-4 text-orange-400" />
                <span className="text-xs sm:text-sm text-orange-400 font-medium">Snelle respons</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Klaar om te starten met jouw <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400">digitale project?</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
                Vertel ons over je plannen en laten we samen kijken hoe we jouw bedrijf online kunnen laten groeien.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href="mailto:Senne@sde-agency.com"
                className="group flex items-center gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Email ons</div>
                  <div className="text-base sm:text-lg font-semibold text-white group-hover:text-orange-400 transition-colors break-all">
                    Senne@sde-agency.com
                  </div>
                </div>
              </a>

              <a 
                href="tel:+32471241912"
                className="group flex items-center gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Bel direct</div>
                  <div className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    +32 471 24 19 12
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 sm:p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm text-slate-400 mb-1">Locatie</div>
                  <div className="text-base sm:text-lg font-semibold text-white">
                    Lommel, België
                  </div>
                </div>
              </div>
            </div>

            {/* USPs */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: Clock, label: '<24u respons', color: 'from-orange-500 to-orange-600' },
                { icon: User, label: '1-op-1 contact', color: 'from-cyan-500 to-cyan-600' },
                { icon: CheckCircle, label: '100% maatwerk', color: 'from-purple-500 to-purple-600' }
              ].map((item, i) => (
                <div key={i} className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3`}>
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">{item.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Box - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block bg-gradient-to-br from-orange-500 to-orange-600 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Vrijblijvend kennismakingsgesprek
              </h3>
              <p className="text-orange-50 mb-4 sm:mb-6 text-sm sm:text-base">
                Benieuwd wat we voor jou kunnen betekenen? Plan een gratis gesprek van 30 minuten en ontdek de mogelijkheden.
              </p>
              <a 
                href="tel:+32471241912" 
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors text-sm sm:text-base"
              >
                <Phone className="w-4 h-4" />
                Bel Nu
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 lg:p-10 rounded-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Stuur ons een bericht</h2>
            <p className="text-slate-400 mb-6 sm:mb-8 text-sm sm:text-base">Vul het formulier in en we nemen zo snel mogelijk contact met je op.</p>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Naam *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="Jouw naam"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="Jouw bedrijf (optioneel)"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Email * 
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  placeholder="jouw@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Telefoon *
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                    className="w-32 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                  >
                    <option value="+32" className="bg-slate-800">BE +32</option>
                    <option value="+31" className="bg-slate-800">NL +31</option>
                    <option value="+33" className="bg-slate-800">FR +33</option>
                    <option value="+49" className="bg-slate-800">DE +49</option>
                    <option value="+44" className="bg-slate-800">GB +44</option>
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
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                    placeholder="123 45 67 89"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Interesse in *
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
                >
                  <option value="" className="bg-slate-800">Selecteer een dienst</option>
                  <option value="website" className="bg-slate-800">Website Development</option>
                  <option value="meta-ads" className="bg-slate-800">Meta Ads Campagnes</option>
                  <option value="both" className="bg-slate-800">Website + Ads</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-white mb-2">
                  Bericht *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Vertel ons over je project..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-3 rounded-xl backdrop-blur-sm">
                  <p className="font-semibold flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Bedankt voor je bericht!
                  </p>
                  <p className="text-sm mt-1 text-green-300">We nemen binnen 24 uur contact met je op.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-3 rounded-xl backdrop-blur-sm">
                  <p className="font-semibold">Er ging iets mis</p>
                  <p className="text-sm mt-1 text-red-300">Probeer het later opnieuw of mail naar Senne@sde-agency.com</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Versturen...
                  </>
                ) : (
                  <>
                    Verstuur bericht
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* CTA Box - Shown on mobile at bottom */}
        <div className="lg:hidden mt-8 bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-white mb-3">
            Vrijblijvend kennismakingsgesprek
          </h3>
          <p className="text-orange-50 mb-4 text-sm">
            Benieuwd wat we voor jou kunnen betekenen? Plan een gratis gesprek van 30 minuten en ontdek de mogelijkheden.
          </p>
          <a 
            href="tel:+32471241912" 
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-5 py-2.5 rounded-full font-semibold hover:bg-orange-50 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            Bel Nu
          </a>
        </div>
      </div>
    </div>
  );
}