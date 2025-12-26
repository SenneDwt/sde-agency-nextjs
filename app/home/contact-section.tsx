'use client';

import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', countryCode: '+32', phone: '', service: '', message: ''
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Nieuw bericht van ${formData.name}`);
    const body = encodeURIComponent(`Naam: ${formData.name}\nBedrijf: ${formData.company}\nEmail: ${formData.email}\nTelefoon: ${formData.countryCode} ${formData.phone}\nInteresse: ${formData.service}\n\n${formData.message}`);
    window.location.href = `mailto:Senne@sde-agency.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div>
            <div className="inline-block bg-cyan-100 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Contact</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">Klaar om te groeien?</h2>
            <p className="text-lg sm:text-xl text-slate-600 mb-8">Laten we kennismaken en bespreken hoe we jouw bedrijf kunnen helpen groeien.</p>

            {/* Contact Info */}
            <div className="space-y-4 sm:space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-slate-900 mb-1">Email</div>
                  <a href="mailto:Senne@sde-agency.com" className="text-slate-600 hover:text-orange-600 break-all">Senne@sde-agency.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Telefoon</div>
                  <a href="tel:+32471241912" className="text-slate-600 hover:text-orange-600">+32 471 24 19 12</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Locatie</div>
                  <div className="text-slate-600">Lommel, België</div>
                </div>
              </div>
            </div>

            {/* CTA Box - Hidden on mobile, shown on desktop */}
            <div className="hidden lg:block bg-gradient-to-br from-slate-900 to-slate-800 p-8 xl:p-10 rounded-2xl text-white">
              <h3 className="text-2xl xl:text-3xl font-bold mb-3 xl:mb-4">Vrijblijvend gesprek</h3>
              <p className="text-slate-300 mb-6 xl:mb-8 text-base xl:text-lg">Plan een gratis kennismakingsgesprek van 30 minuten.</p>
              <a href="tel:+32471241912" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 xl:px-8 py-3 xl:py-4 rounded-full font-semibold hover:shadow-2xl transition-all">
                Bel Nu <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-[#F2F2F2] p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Naam *</label>
                  <input 
                    type="text" 
                    required 
                    value={formData.name} 
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none placeholder:text-slate-400" 
                    placeholder="Jouw naam" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Bedrijfsnaam</label>
                  <input 
                    type="text" 
                    value={formData.company} 
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none placeholder:text-slate-400" 
                    placeholder="Jouw bedrijf" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none placeholder:text-slate-400" 
                    placeholder="naam@voorbeeld.com" 
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Telefoonnummer *</label>
                  <div className="flex gap-2">
                    <select 
                      value={formData.countryCode} 
                      onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })} 
                      className="w-24 sm:w-32 px-2 sm:px-3 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-slate-900 text-sm"
                    >
                      <option value="+32">+32</option>
                      <option value="+31">+31</option>
                      <option value="+33">+33</option>
                      <option value="+49">+49</option>
                      <option value="+44">+44</option>
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
                      className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none placeholder:text-slate-400" 
                      placeholder="471 24 19 12" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Interesse in *</label>
                  <select 
                    required 
                    value={formData.service} 
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-slate-900"
                  >
                    <option value="">Selecteer</option>
                    <option value="website">Website</option>
                    <option value="meta-ads">Meta Ads</option>
                    <option value="both">Beide</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Bericht *</label>
                  <textarea 
                    required 
                    value={formData.message} 
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                    rows={5} 
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none resize-none placeholder:text-slate-400" 
                    placeholder="Vertel me over je project..." 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                >
                  Verstuur bericht <Send className="w-5 h-5" />
                </button>
              </div>
            </form>

            <div className="lg:hidden mt-6 bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Vrijblijvend gesprek</h3>
              <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
                Plan een gratis kennismakingsgesprek van 30 minuten.
              </p>
              <a
                href="tel:+32471241912"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-2xl transition-all text-sm w-full sm:w-auto mx-auto"
              >
                Bel Nu <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}