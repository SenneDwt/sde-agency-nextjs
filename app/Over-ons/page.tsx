'use client';

import { ArrowLeft, Target, Zap, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Header from '../headerAndFooter/header';
import Footer from '../headerAndFooter/footer';

export default function AboutUs() {
  const router = useRouter();
  
  const values = [
    {
      icon: Target,
      title: 'Focus op Groei',
      description: 'Elk project start met één doel: jouw bedrijf laten groeien. Van het eerste gesprek tot de lancering en daarna.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Zap,
      title: 'Moderne Technologie',
      description: 'Ik werk met de nieuwste tools en frameworks zodat je een razendsnelle website krijgt. ',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Award,
      title: 'Persoonlijke Aandacht',
      description: 'Direct contact met mij, de eigenaar. Geen tussenpersonen, geen verkopers. Alleen iemand die écht betrokken is bij jouw succes.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Sparkles,
      title: '100% Maatwerk',
      description: 'Geen templates of standaardoplossingen. Elk project is uniek en volledig afgestemd op jouw merk en doelen.',
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const steps = [
    {
      number: '1',
      title: 'Kennismaking',
      description: 'We plannen een vrijblijvend gesprek waarin ik jouw bedrijf, doelgroep en ambities leer kennen. Wat wil je bereiken? Wat zijn je uitdagingen?'
    },
    {
      number: '2',
      title: 'Strategie & Offerte',
      description: 'Ik werk een strategie uit die perfect aansluit bij jouw doelen. Je krijgt een heldere offerte met tijdlijn en investeringsbedrag.'
    },
    {
      number: '3',
      title: 'Ontwikkeling',
      description: 'Ik ga aan de slag met bouwen en optimaliseren. Je blijft op de hoogte via regelmatige updates en previews.'
    },
    {
      number: '4',
      title: 'Lancering & Groei',
      description: 'Na de lancering blijf ik monitoren en optimaliseren. Bij Meta Ads campagnes krijg je wekelijkse rapportages en constante verbeteringen.'
    }
  ];

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back button */}
        
        

        {/* Header */}
        <div className="mb-12 mt-15 sm:mt-30 sm:mb-16 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 border border-orange-500/20">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-xs sm:text-sm text-orange-400 font-medium">Over SDE AGENCY</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Wie ben ik?
          </h1>
          
        </div>

        {/* Wie ben ik - Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-12">
          
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
            <div className="flex-shrink-0 w-full lg:w-1/3">
              <img 
                src="/1754993401113.jpeg" 
                alt="Senne - Eigenaar van SDE Agency" 
                className="w-full rounded-2xl shadow-2xl border-2 border-white/10 object-cover"
              />
            </div>
            <div className="flex-1 space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
            Hey daar! <br /><br />Ik ben Senne, eigenaar van SDE. Ik help ambitieuze ondernemers met moderne websites en strategische Meta Ads campagnes die écht conversies opleveren. <br /><br />
            Ik ben gepassioneerd over online marketing en webdevelopment. Bij SDE draait alles om één ding: <span className="text-orange-400 font-semibold">resultaat</span>. <br /><br />Ik bouw geen websites om mooi te zijn (hoewel dat zeker meezit), maar om bezoekers om te zetten in klanten. Mijn Meta Ads campagnes zijn niet gemaakt om likes te verzamelen, maar om jouw doelgroep te bereiken en te converteren.
            </p> 
          
            
               
              
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">Wat maakt SDE anders?</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mijn aanpak */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Mijn aanpak</h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
            Elk project is uniek, maar mijn proces is altijd helder en gestructureerd:
          </p>
          
          <div className="space-y-6 sm:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center font-bold text-white text-lg sm:text-xl">
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 sm:p-10 lg:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Klaar om te groeien?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-orange-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Laten we kennismaken en kijken hoe ik jouw bedrijf kan helpen groeien met een moderne website en strategische Meta Ads.
          </p>
          <a 
            href="/Contact"
            className="inline-flex items-center gap-2 bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            Plan een vrijblijvend gesprek
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}