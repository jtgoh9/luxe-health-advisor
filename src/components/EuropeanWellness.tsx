import { motion } from 'framer-motion';
import { Globe, Clock, Award, Lock, Leaf, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { Lang, t } from '@/data/translations';

interface EuropeanWellnessProps {
  lang: Lang;
}

const EuropeanWellness = ({ lang }: EuropeanWellnessProps) => {
  const stats = [
    { icon: Clock, value: t.ewStat1[lang] },
    { icon: Award, value: t.ewStat2[lang] },
    { icon: Globe, value: t.ewStat3[lang] },
    { icon: Lock, value: t.ewStat4[lang] },
  ];

  const therapyLabels = {
    stemCell:   { id: 'Terapi Sel Punca',      en: 'Stem Cell Therapy',     zh: '干细胞疗法' },
    antiAgeing: { id: 'Anti-Penuaan',           en: 'Anti-Ageing',           zh: '抗衰老' },
    detox:      { id: 'Program Detoksifikasi',  en: 'Detox Programs',        zh: '排毒方案' },
    immune:     { id: 'Peningkatan Imunitas',   en: 'Immune Boost',          zh: '免疫增强' },
    regen:      { id: 'Kedokteran Regeneratif', en: 'Regenerative Medicine', zh: '再生医学' },
    hormonal:   { id: 'Keseimbangan Hormonal',  en: 'Hormonal Balancing',    zh: '激素平衡' },
  };
  const therapies = [
    { icon: Sparkles,    label: therapyLabels.stemCell[lang] },
    { icon: Heart,       label: therapyLabels.antiAgeing[lang] },
    { icon: Leaf,        label: therapyLabels.detox[lang] },
    { icon: ShieldCheck, label: therapyLabels.immune[lang] },
    { icon: Sparkles,    label: therapyLabels.regen[lang] },
    { icon: Heart,       label: therapyLabels.hormonal[lang] },
  ];

  return (
    <section id="european-wellness" className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-eyebrow mb-4">{t.ewEyebrow[lang]}</div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-5">{t.ewTitle[lang]}</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">{t.ewSub[lang]}</p>

            {/* Therapy Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {therapies.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-text border border-primary/20 bg-primary/5 px-3 py-2 rounded-sm">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </div>

            <a
              href="https://european-wellness.eu/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm inline-flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              {lang === 'id' ? 'Kunjungi Website' : lang === 'zh' ? '访问官网' : 'Visit Website'}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-border rounded-sm bg-card overflow-hidden"
          >
            <div className="p-6 sm:p-8 space-y-0">
              {stats.map(({ icon: Icon, value }, i) => (
                <div key={i} className={`flex items-start gap-4 py-5 ${i > 0 ? 'border-t border-border' : ''}`}>
                  <div className="w-10 h-10 rounded-full border border-primary/20 bg-primary/5 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-serif text-lg sm:text-xl text-foreground leading-snug pt-2">{value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EuropeanWellness;
