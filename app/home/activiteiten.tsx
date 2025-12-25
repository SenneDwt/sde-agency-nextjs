import { Code2, Zap, Target, TrendingUp, ArrowRight, Bot, Brain, Workflow } from 'lucide-react';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Onze Diensten
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Waar kan ik je mee <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-600">helpen</span>?
          </h2>
          
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Kies de dienst die perfect bij jouw doelen past
          </p>
        </div>

        {/* Three Service Columns */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Website Development */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            
            <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-orange-300 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-br from-orange-500 to-orange-600 p-4 rounded-2xl mb-4">
                  <Code2 className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">Websiteontwikkeling</h3>
                <p className="text-slate-600">Moderne websites die converteren</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Moderne Technologie</h4>
                      <p className="text-slate-600 text-sm">Next.js & TypeScript voor optimale prestaties</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Snelle Prestaties</h4>
                      <p className="text-slate-600 text-sm">Laadtijd onder 2 seconden & Google Score 95+</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">SEO geoptimaliseerd</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">100% Mobile responsive</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-sm">Maatwerk design</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link 
                href="/WebsiteDevelopment"
                className="group/btn w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105"
              >
                <span>Bekijk websiteontwikkeling</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Paid Ads (Meta) */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            
            <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-cyan-300 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-br from-cyan-500 to-cyan-600 p-4 rounded-2xl mb-4">
                  <Target className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">Paid Ads (Meta)</h3>
                <p className="text-slate-600">Facebook & Instagram advertenties</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Precisie Targeting</h4>
                      <p className="text-slate-600 text-sm">Bereik exact jouw ideale klanten op Meta platforms</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Meetbare Resultaten</h4>
                      <p className="text-slate-600 text-sm">Focus op ROI met transparante rapportages</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm">Dagelijkse optimalisatie</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm">Vanaf elk budget</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      <span className="text-sm">Weekelijks rapport</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link 
                href="/Social-Media-Ads"
                className="group/btn w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
              >
                <span>Bekijk Meta Ads</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* AI Automation */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            
            <div className="relative bg-white border-2 border-slate-200 rounded-3xl p-8 hover:border-purple-300 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="inline-block bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl mb-4">
                  <Bot className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-3">AI Automation</h3>
                <p className="text-slate-600">Slimme automatisering voor efficiëntie</p>
              </div>

              <div className="space-y-6 mb-8">
                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Slimme Assistenten</h4>
                      <p className="text-slate-600 text-sm">AI-chatbots en automatisering die 24/7 werken</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Workflow className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">Procesautomatisering</h4>
                      <p className="text-slate-600 text-sm">Bespaar 15+ uur per week op repetitieve taken</p>
                    </div>
                  </div>
                </div>

                <div className="bg-[#F2F2F2] rounded-xl p-6">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">+40% productiviteit</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">Data-gedreven inzichten</span>
                    </li>
                    <li className="flex items-center gap-2 text-slate-700">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                      <span className="text-sm">ROI binnen 3-6 maanden</span>
                    </li>
                  </ul>
                </div>
              </div>

              <Link 
                href="/Ai-Automation"
                className="group/btn w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
              >
                <span>Bekijk AI Automation</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}