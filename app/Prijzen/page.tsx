'use client';

import { ArrowLeft, Code2, Target, Bot, CheckCircle2, TrendingUp, Palette, Rocket, MessageCircle, Globe, ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../headerAndFooter/header';
import Footer from '../headerAndFooter/footer';

export default function Pricing() {
  const router = useRouter();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const websitePackages = [
    {
      name: 'Landing Page',
      price: '€400',
      description: 'Perfect voor een gerichte campagne',
      features: [
        '1 conversiegerichte pagina',
        'Mobielvriendelijk (responsive)',
        'Call-to-actions (formulier / knop / WhatsApp)',
        'Goede SEO',
        'Contact- of leadformulier'
      ],
      icon: Target,
      popular: false
    },
    {
      name: 'Starter Website',
      price: '€1.300',
      description: '5 pagina\'s voor startende ondernemers',
      features: [
        'Pagina\'s naar keuze (Home, Over ons, Diensten, Contact, Privacy)',
        'Modern design',
        'Mobiel & tablet vriendelijk',
        'Goede SEO',
        'Contactformulier'
      ],
      icon: Rocket,
      popular: true
    },
    {
      name: 'Professionele Website',
      price: '€2.400',
      description: 'Volledig op maat gemaakt',
      features: [
        'Volledig op maat',
        'Conversiegerichte structuur',
        'Performance optimalisatie (basis)',
        'Uitgebreidere SEO',
        'Meerdere formulieren of integraties'
      ],
      icon: Code2,
      popular: false
    }
  ];

  const adsPackages = [
    {
      name: 'Advertentie Setup',
      price: '€250',
      description: 'Eenmalige opstart & advies',
      features: [
        'Analyse van bedrijf en doelstellingen',
        'Doelgroep & targeting',
        'Advertentie-account + pixel setup',
        'Structuur van campagnes (1-2 campagnes)',
        'Basis tracking & conversies'
      ],
      icon: TrendingUp
    },
    {
      name: 'Advertenties Maken',
      price: 'Vanaf €100',
      description: 'Per advertentie',
      features: [
        'Copywriting (headline + advertentietekst)',
        'Beeld of eenvoudige video (bewerkt)',
        'Call-to-action',
        'Optioneel A/B-variant',
        'Pakket: 3 ads €250 / 5 ads €375'
      ],
      icon: Palette
    },
    {
      name: 'Complete Campagne',
      price: '€650',
      description: '1 maand volledig beheer',
      features: [
        '3 advertenties maken',
        'Hele campagne opzetten',
        'Tracking & pixel setup',
        'Wekelijkse rapportage',
        '1 maand advertentiebeheer'
      ],
      icon: Target,
      popular: true
    }
  ];

  const combiPackages = [
    {
      name: 'Landingpage + Ads Starter',
      price: '€950',
      description: 'Start direct met leads',
      features: [
        'Landing page',
        'Advertentie setup',
        '3 advertenties',
        '1 maand advertentiebeheer',
        'Wekelijkse rapportage'
      ],
      icon: Target
    },
    {
      name: 'Website + Groei Ads',
      price: '€2.000',
      description: 'Complete online aanwezigheid',
      features: [
        '5-pagina website',
        'Advertentie setup',
        '6 advertenties',
        '1 maand advertentiebeheer',
        'Wekelijkse rapportage'
      ],
      icon: Rocket
    }
  ];

  const extras = [
    { name: 'SEO uitbreiding', price: '€200' },
    { name: 'Website onderhoud', price: '€10/maand' },
    { name: 'Hosting', price: '€15/maand' },
    { name: 'Extra pagina\'s', price: 'Op aanvraag' },
    { name: 'Custom toevoegingen', price: 'Op aanvraag' }
  ];

  return (
    <>
    <Header />
    
    <div className="min-h-screen bg-slate-900">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/50 to-slate-900" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-6 sm:py-12">
        {/* Back button */}
      

        {/* Header */}
        <div className="mb-8 mt-15 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            Prijzen & Pakketten
          </h1>
          <p className="text-slate-400 text-base">
            Transparante prijzen voor al onze diensten
          </p>
        </div>

        {/* Website Packages */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Websiteontwikkeling</h2>
                <p className="text-sm text-slate-400">Van landing pages tot complete websites</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {websitePackages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white/5 border rounded-lg p-5 hover:bg-white/10 transition-colors ${
                  pkg.popular ? 'border-orange-500/50' : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Populair
                  </div>
                )}
                
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <pkg.icon className="w-5 h-5 text-orange-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                      <p className="text-sm text-slate-400">{pkg.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-white">{pkg.price}</div>
                    <div className="text-xs text-slate-400">eenmalig</div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ads Packages */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-cyan-600/5 border border-cyan-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Meta Ads</h2>
                <p className="text-sm text-slate-400">Facebook & Instagram advertenties</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {adsPackages.map((pkg, index) => (
              <div 
                key={index}
                className={`bg-white/5 border rounded-lg p-5 hover:bg-white/10 transition-colors ${
                  pkg.popular ? 'border-cyan-500/50' : 'border-white/10'
                }`}
              >
                {pkg.popular && (
                  <div className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    Populair
                  </div>
                )}
                
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <pkg.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                      <p className="text-sm text-slate-400">{pkg.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-white">{pkg.price}</div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <MessageCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Advertentiebeheer</h4>
                <p className="text-sm text-slate-300 mb-2">
                  Prijs afhankelijk van advertentie-uitgave. Inclusief: advertenties live zetten, budgetbeheer, 
                  optimalisaties (targeting & creatives), en wekelijks advertentierapport.
                </p>
                <p className="text-xs text-slate-400 italic">
                  * Dit is geen social media of community management
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Combination Packages */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Combinatiepakketten</h2>
                <p className="text-sm text-slate-400">Website + Ads bundels</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {combiPackages.map((pkg, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-purple-500/50 rounded-lg p-5 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <pkg.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                      <p className="text-sm text-slate-400">{pkg.description}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold text-white">{pkg.price}</div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-5">
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white mb-2">Professionele Website + Groei Ads</h4>
                <p className="text-sm text-slate-300 mb-2">
                  Professionele website + tracking & pixel setup + advertentie setup + 6 advertenties + 
                  1 maand advertentiebeheer + wekelijkse rapportage
                </p>
                <p className="text-base font-bold text-purple-400">Prijs op aanvraag</p>
              </div>
            </div>
          </div>
        </div>

        {/* AI Automation */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/5 border border-emerald-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                <Bot className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">AI Automation</h2>
                <p className="text-sm text-slate-400">Automatiseer je bedrijfsprocessen met AI</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 border border-emerald-500/50 rounded-lg p-6 hover:bg-white/10 transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Bot className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white mb-2">Op maat gemaakte AI-oplossingen</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Van chatbots en klantenservice automatisering tot data-analyse en workflow optimalisatie. 
                  Elke AI-oplossing wordt specifiek ontwikkeld voor jouw bedrijfsbehoeften.
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">AI Chatbots & assistenten</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Workflow automatisering</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Data-analyse & rapportage</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300">Custom AI-integraties</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <p className="text-base font-bold text-emerald-400">Prijs op aanvraag</p>
                  <p className="text-xs text-slate-400 mt-1">Afhankelijk van projectscope en complexiteit</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extras */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/30 rounded-xl p-6 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Extra diensten</h2>
                <p className="text-sm text-slate-400">Onderhoud en uitbreidingen</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {extras.map((extra, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-sm mb-0.5">{extra.name}</h4>
                    <p className="text-orange-400 font-semibold text-sm">{extra.price}</p>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-orange-400" />
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-400 text-center">
            Alle prijzen zijn indicatief en exclusief btw. Definitieve prijzen worden bepaald op basis van de projectscope.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/10 border-2 border-orange-500/50 rounded-xl p-8 text-center shadow-lg shadow-orange-500/20">
          <h3 className="text-2xl font-bold text-white mb-3">
            Vragen over prijzen?
          </h3>
          <p className="text-slate-300 text-base mb-6 max-w-2xl mx-auto">
            Plan een vrijblijvend gesprek en ontdek welk pakket perfect bij jou past
          </p>
          <a 
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Neem contact op
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      {/* Spacer before footer */}
      <div className="h-20"></div>
    </div>
    <Footer />
    </>
  );
}