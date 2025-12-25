'use client';

import { ArrowRight, Bot, Zap, Clock, TrendingUp, Users, Sparkles, CheckCircle2, Brain, Workflow, MessageSquare, BarChart3, Database, Shield, Cpu, GitBranch } from 'lucide-react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../headerAndFooter/header';
import Footer from '../headerAndFooter/footer';


export default function AIAutomations() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: MessageSquare,
      title: 'AI Chatbots',
      description: 'Intelligente chatbots die 24/7 je klanten helpen, vragen beantwoorden en leads genereren.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Workflow,
      title: 'Procesautomatisering',
      description: 'Automatiseer repetitieve taken zoals data-invoer, e-mails en rapportage.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Data-analyse',
      description: 'AI die jouw data analyseert en waardevolle inzichten genereert voor betere beslissingen.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Brain,
      title: 'Slimme Assistenten',
      description: 'AI-assistenten die je team ondersteunen bij complexe taken en klantenservice.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: BarChart3,
      title: 'Voorspellende Analyse',
      description: 'Machine learning modellen die trends voorspellen en je helpen strategisch te plannen.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: GitBranch,
      title: 'Integraties',
      description: 'Naadloze integratie met je bestaande tools en systemen voor maximale efficiëntie.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const useCases = [
    {
      icon: MessageSquare,
      title: 'Klantenservice Automatisering',
      description: 'AI-chatbots die veelgestelde vragen beantwoorden en complexe cases doorsturen naar je team.',
      results: ['80% minder support tickets', 'Directe antwoorden', '24/7 beschikbaarheid']
    },
    {
      icon: Clock,
      title: 'Tijdbesparende Workflows',
      description: 'Automatiseer data-invoer, factuurverwerking, e-mail follow-ups en andere repetitieve taken.',
      results: ['15+ uur per week bespaard', 'Minder fouten', 'Focus op belangrijke werk']
    },
    {
      icon: Database,
      title: 'Slimme Data-verwerking',
      description: 'AI die automatisch data verzamelt, categoriseert en rapportages genereert.',
      results: ['Real-time inzichten', 'Betere beslissingen', 'Geen handmatig werk']
    },
    {
      icon: TrendingUp,
      title: 'Lead Generatie & Kwalificatie',
      description: 'AI die potentiële klanten identificeert, kwalificeert en automatisch follow-up verzorgt.',
      results: ['Meer gekwalificeerde leads', 'Hogere conversie', 'Geautomatiseerde follow-up']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Analyse & Inventarisatie',
      description: 'We analyseren je huidige processen en identificeren kansen voor automatisering.',
      icon: Search
    },
    {
      step: '02',
      title: 'Strategie & Design',
      description: 'Ik ontwerp een AI-oplossing die perfect aansluit bij jouw bedrijfsprocessen.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Ontwikkeling & Training',
      description: 'Ik bouw en train de AI-modellen specifiek voor jouw use case.',
      icon: Cpu
    },
    {
      step: '04',
      title: 'Testing & Finetuning',
      description: 'Uitgebreide tests en optimalisatie om de beste resultaten te garanderen.',
      icon: CheckCircle2
    },
    {
      step: '05',
      title: 'Implementatie & Support',
      description: 'Naadloze integratie in je werkprocessen met training en doorlopende ondersteuning.',
      icon: Shield
    }
  ];

  const benefits = [
    'Bespaar 10-20 uur per week op repetitieve taken',
    'Verhoog de productiviteit van je team met 40%',
    'Betere klanttevredenheid door snellere response',
    'Schaalbaar zonder extra personeel',
    'Data-gedreven beslissingen met AI-inzichten',
    'ROI zichtbaar binnen 3-6 maanden'
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
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative z-10 min-h-screen flex items-center justify-center pt-24 md:pt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 w-full text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-6 md:mb-8 border border-white/20">
              <Bot className="w-4 h-4 text-purple-400" />
              <span className="text-xs sm:text-sm text-white/90 font-medium">AI Automation Specialist</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              AI-automatisering die <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">tijd bespaart</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-12 max-w-3xl leading-relaxed mx-auto px-2">
              Laat AI het zware werk doen. Ik bouw slimme automatiseringen die je team efficiënter maken en je bedrijf helpen groeien.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 md:mb-20">
              <Link 
                href="/Contact"
                className="group relative bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold flex items-center justify-center text-center hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto max-w-xs"
              >
                <span className="relative text-lg z-10">Start je project</span>
                <ArrowRight className="absolute right-6 sm:right-8 w-5 h-5 group-hover:translate-x-1 transition-transform z-10" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
              {[
                { label: 'Tijdsbesparing', value: '15+ uur' },
                { label: 'Productiviteit', value: '+40%' },
                { label: 'AI Specialist', value: '100%' },
                { label: 'ROI periode', value: '3-6 mnd' }
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

      {/* Why AI Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Waarom AI Automatisering
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              AI is geen toekomst meer, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">het is nu</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Bedrijven die AI inzetten groeien sneller, werken efficiënter en maken betere beslissingen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-10 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-white mb-6">Wat kan AI voor jouw bedrijf doen?</h3>
              <div className="space-y-4">
                {[
                  'Automatiseer repetitieve taken en bespaar 15+ uur per week',
                  'Verbeter klantenservice met 24/7 beschikbare AI-assistenten',
                  'Analyseer data en krijg waardevolle inzichten voor groei',
                  'Schaal je bedrijf zonder proportioneel meer personeel'
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-200 text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Snellere Groei</h4>
                <p className="text-lg text-slate-600">
                  AI helpt je team focussen op wat echt belangrijk is: strategie en groei, terwijl repetitief werk geautomatiseerd wordt.
                </p>
              </div>

              <div className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-600" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-3">Meetbare Impact</h4>
                <p className="text-lg text-slate-600">
                  Concrete resultaten binnen 3-6 maanden: minder kosten, hogere productiviteit en betere klanttevredenheid.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Onze AI-oplossingen
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Van chatbots tot <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">data-analyse</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Maatwerk AI-oplossingen voor elk bedrijfsproces
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-purple-200 hover:-translate-y-1"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Praktijkvoorbeelden
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Hoe bedrijven <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">AI inzetten</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div 
                key={index}
                className="bg-[#F2F2F2] p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{useCase.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.results.map((result, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" />
                      <span className="text-slate-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Het Proces
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Van idee tot <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">werkende AI</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Een bewezen aanpak voor succesvolle AI-implementatie
            </p>
          </div>

          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((item, index) => (
              <div 
                key={index}
                className="relative group"
              >
                <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-500 font-bold text-4xl opacity-50">{item.step}</div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30" />
                )}
              </div>
            ))}
          </div>

          <div className="md:hidden space-y-4">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-purple-500 font-bold text-4xl opacity-50">{item.step}</div>
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="flex justify-center py-2">
                    <div className="w-0.5 h-4 bg-gradient-to-b from-purple-500 to-cyan-500 opacity-30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Wat levert <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-600">AI-automatisering</span> op?
              </h2>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-lg leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-4">Gratis AI-Scan</h3>
              <p className="text-slate-300 mb-6">
                Benieuwd welke processen in jouw bedrijf geautomatiseerd kunnen worden? Ik doe een gratis analyse en laat je zien waar AI impact kan maken.
              </p>
              <Link 
                href="/Contact"
                className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/50 transition-all"
              >
                Vraag de AI-Scan aan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#F2F2F2] from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Bot className="w-12 h-12 text-purple-400 animate-pulse" />
            <Sparkles className="w-12 h-12 text-cyan-400" />
            <Brain className="w-12 h-12 text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Klaar voor AI?
          </h2>
          <p className="text-slate-600 text-xl leading-relaxed mb-10">
            Plan een vrijblijvend gesprek en ontdek hoe AI jouw bedrijf kan transformeren. Inclusief gratis analyse van automatiseringskansen.
          </p>
          <Link 
            href="/Contact"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-12 py-6 rounded-full font-semibold text-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105"
          >
            Start je AI-project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}

// Import statement voor Search icon die ontbreekt
import { Search } from 'lucide-react';