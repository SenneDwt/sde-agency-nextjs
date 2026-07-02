import { Code2, Bot, Zap, Workflow } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ServicesSection() {
  const t = useTranslations('Activiteiten');

  const boxes = [
    {
      icon: Code2,
      title: t('website.title'),
      description: t('website.subtitle'),
    },
    {
      icon: Bot,
      title: t('ai.title'),
      description: t('ai.subtitle'),
    },
    {
      icon: Zap,
      title: t('website.feature2Title'),
      description: t('website.feature2Text'),
    },
    {
      icon: Workflow,
      title: t('ai.feature2Title'),
      description: t('ai.feature2Text'),
    },
  ];

  return (
    <section id="diensten" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        {/* Centered Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            {t('heading')}
          </h2>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            {t('subheading')}
          </p>
        </div>

        {/* Boxes + Photo */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {boxes.map((box, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-slate-100"
              >
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                  <box.icon className="w-6 h-6 text-green-500" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {box.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {box.description}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1 relative rounded-2xl overflow-hidden min-h-[320px] lg:min-h-0">
            <Image
              src="/DienstenPhoto.jpg"
              alt={t('photoAlt')}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
