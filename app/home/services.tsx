'use client';

import { Code2, Palette, Megaphone, BarChart3, Rocket, Zap, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Services() {
  const [servicesSlide, setServicesSlide] = useState(0);

  const services = [
    { icon: Code2, title: 'Website Development', description: 'Razendsnelle, responsieve websites gebouwd met moderne technologie.', features: ['React & TypeScript', 'SEO geoptimaliseerd', 'Blazing fast'] },
    { icon: Palette, title: 'Web Design', description: 'Unieke designs die jouw merk versterken en bezoekers omzetten naar klanten.', features: ['Custom design', 'Brand identity', 'Responsive design'] },
    { icon: Megaphone, title: 'Meta Ads Campagnes', description: 'Creatieve Meta advertentiecampagnes die jouw doelgroep bereiken en converteren.', features: ['Facebook & Instagram Ads', 'doelgroep targeting', 'Creative testing'] },
    { icon: BarChart3, title: 'Meta Analytics & Tracking', description: 'Volledig inzicht in je Meta campagne performance.', features: ['Conversie tracking', 'Pixel setup', 'Wekelijkse rapportages'] },
    { icon: Rocket, title: 'Website + Ads Strategy', description: 'Geïntegreerde strategie voor maximale ROI.', features: ['Funnel optimalisatie', 'Audience segmentatie', 'Groei planning'] },
    { icon: Zap, title: 'Setup & Optimalisatie', description: 'Wij zetten alles op en optimaliseren constant.', features: ['Ongoing optimalisatie', 'Budget management', 'Maandelijk advies'] }
  ];

  return (
    <section id="diensten" className="py-24 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Onze Diensten</div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Alles wat je nodig hebt om te groeien</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">Van concept tot conversie. We pakken het volledig voor je aan.</p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${servicesSlide * 100}%)` }}>
              {services.map((service, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />{f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setServicesSlide(Math.max(0, servicesSlide - 1))} disabled={servicesSlide === 0} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={() => setServicesSlide(Math.min(services.length - 1, servicesSlide + 1))} disabled={servicesSlide === services.length - 1} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center disabled:opacity-50">
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, i) => (
              <button key={i} onClick={() => setServicesSlide(i)} className={`w-2 h-2 rounded-full transition-all ${servicesSlide === i ? 'bg-orange-500 w-6' : 'bg-slate-300'}`} />
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-orange-200 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((f, j) => (
                  <li key={j} className="flex items-center text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3" />{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

