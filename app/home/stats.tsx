"use client";

import { TrendingUp, Zap, Award, MousePointer2 } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: TrendingUp,
      value: "€ 10K+",
      label: "GROEI",
      description: "Gerealiseerd voor recente partners",
      color: "text-orange-500",
    },
    {
      icon: MousePointer2,
      value: "120%",
      label: "CONVERSIE STIJGING",
      description: "Gerealiseerd voor recente partners",
      color: "text-cyan-500",
    },
    {
      icon: Zap,
      value: "< 2s",
      label: "LAADSNELHEID",
      description: "Geoptimaliseerd voor mobiel",
      color: "text-orange-500",
    },
    {
      icon: Award,
      value: "100%",
      label: "MAATWERK",
      description: "Geen standaard templates",
      color: "text-cyan-500",
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-50 rounded-2xl mb-4 group-hover:bg-slate-100 transition-colors">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-slate-900 font-bold">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 mt-1">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}