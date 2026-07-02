import { useTranslations } from 'next-intl';

export default function SocialProof() {
  const t = useTranslations('SocialProof');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <section className="relative bg-white py-16 md:py-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-8 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight leading-tight">
              {t('heading')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-md">
              {t('subheading')}
            </p>
          </div>

          <div className="flex flex-col items-end gap-8 md:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="text-right">
                <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-none tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-slate-500 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
