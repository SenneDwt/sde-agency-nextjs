'use client';

import { ArrowRight, Target, Code2, Zap, Bot, TrendingUp, Users, Sparkles, CheckCircle2, Smartphone, Search, Shield, Palette, Layers, BarChart3 } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../headerAndFooter/header';
import Footer from '../headerAndFooter/footer';

export default function SDEAgencyServices() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Code2,
      title: 'Website Ontwikkeling',
      description: 'Moderne, snelle websites gebouwd met Next.js en TypeScript. Geoptimaliseerd voor conversie en gebruikerservaring.',
      color: 'from-blue-500 to-cyan-500',
      features: ['Mobile-first design', 'SEO geoptimaliseerd', 'Supersnel', 'Maatwerk design'],
      link: '/WebsiteDevelopment'
    },
    {
      icon: Target,
      title: 'Meta Ads Management',
      description: 'Data-driven advertentiecampagnes op Facebook en Instagram die de juiste klanten aantrekken en conversies genereren.',
      color: 'from-orange-500 to-pink-500',
      features: ['Gerichte targeting', 'Dagelijkse optimalisatie', 'Transparante rapportage', 'Schaalbare campagnes'],
      link: '/Social-Media-Ads'
    },
    {
      icon: Bot,
      title: 'AI Automations',
      description: 'Slimme AI-oplossingen die repetitieve taken automatiseren en je team efficiënter maken.',
      color: 'from-purple-500 to-indigo-500',
      features: ['Procesautomatisering', 'AI chatbots', 'Data-analyse', 'Maatwerk oplossingen'],
      link: '/Contact'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Persoonlijk Contact',
      description: 'Direct contact met mij als specialist. Geen tussenpersonen, geen verborgen kosten.'
    },
    {
      icon: TrendingUp,
      title: 'Meetbare Resultaten',
      description: 'Focus op concrete resultaten en ROI. Ik werk alleen met strategieën die bewezen werken.'
    },
    {
      icon: Zap,
      title: 'Snelle Uitvoering',
      description: 'Snelle response tijd en efficiënte implementatie. Jouw project staat centraal.'
    },
    {
      icon: Sparkles,
      title: 'Totaaloplossing',
      description: 'Van website tot advertenties en AI-automatisering. Alles uit één hand voor maximale synergie.'
    }
  ];

  const approach = [
    {
      step: '01',
      title: 'Kennismaking',
      description: 'We bespreken jouw uitdagingen, doelen en verwachtingen in een vrijblijvend gesprek.'
    },
    {
      step: '02',
      title: 'Strategie',
      description: 'Ik maak een op maat gemaakte strategie die aansluit bij jouw bedrijf en budget.'
    },
    {
      step: '03',
      title: 'Implementatie',
      description: 'Ik zet de strategie om in concrete actie met regelmatige updates en transparante communicatie.'
    },
    {
      step: '04',
      title: 'Optimalisatie',
      description: 'Continue verbetering op basis van data en resultaten. Wat werkt wordt uitgebreid.'
    },
    {
      step: '05',
      title: 'Groei',
      description: 'Samen schalen we naar het volgende niveau met bewezen tactieken en strategieën.'
    }
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(148, 163, 184) 1px, transparent 0)',
              backgroundSize: '40px 40px',
              transform: `translateY(${scrollY * 0.5}px)`
            }}
          />
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }} />

          <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 md:pt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 md:mb-8 border border-white/20">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span className="text-xs sm:text-sm text-white/90 font-medium">SDE-Agency</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                Digitale groei voor <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-cyan-400 to-purple-400">ambitieuze bedrijven</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-3xl leading-relaxed mx-auto px-2">
                Van moderne websites tot Meta advertenties en slimme AI-automatisering. Alles wat je nodig hebt om online te groeien, uit één hand.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-20">
                <Link 
                  href="#diensten"
                  className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center text-center hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs"
                >
                  <span className="relative text-lg z-10">Ontdek de diensten</span>
                  <ArrowRight className="absolute right-6 sm:right-8 w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
                {[
                  { label: 'Respons tijd', value: '<24 uur' },
                  { label: 'Contact', value: '1 op 1' },
                  { label: 'Ervaring', value: '3+ jaar' },
                  { label: 'Aanpak', value: 'Maatwerk' }
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="diensten" className="py-24 bg-[#F2F2F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Onze Diensten
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Alles voor jouw <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">digitale succes</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Drie kernservices die perfect samenwerken om jouw bedrijf online te laten groeien
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-orange-200 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="p-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={service.link}
                      className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all"
                    >
                      Meer info
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Waarom SDE-Agency
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Wat maakt ons <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">anders</span>?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="text-center group"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-[#F2F2F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Onze Aanpak
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Van gesprek tot <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">groei</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Een bewezen proces voor maximale resultaten
              </p>
            </div>

            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {approach.map((item, index) => (
                <div 
                  key={index}
                  className="relative group"
                >
                  <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="text-orange-500 font-bold text-5xl mb-4 opacity-50">{item.step}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  {index < approach.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-orange-500 to-cyan-500 opacity-30" />
                  )}
                </div>
              ))}
            </div>

            <div className="md:hidden space-y-4">
              {approach.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-white border border-slate-200 rounded-2xl p-6">
                    <div className="text-orange-500 font-bold text-5xl mb-4 opacity-50">{item.step}</div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.description}</p>
                  </div>
                  {index < approach.length - 1 && (
                    <div className="flex justify-center py-2">
                      <div className="w-0.5 h-4 bg-gradient-to-b from-orange-500 to-cyan-500 opacity-30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-3 mb-6">
              <Code2 className="w-12 h-12 text-cyan-400" />
              <Target className="w-12 h-12 text-orange-400" />
              <Bot className="w-12 h-12 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Klaar om te groeien?
            </h2>
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Plan een vrijblijvend gesprek en ontdek hoe ik jouw bedrijf kan helpen groeien met de juiste digitale oplossingen.
            </p>
            <Link 
              href="/Contact"
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-12 py-6 rounded-full font-semibold text-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
            >
              Start je project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
