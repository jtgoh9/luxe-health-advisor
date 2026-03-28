import { motion } from 'framer-motion';
import { Lang, t } from '@/data/translations';

interface EuropeanWellnessProps {
  lang: Lang;
}

const EuropeanWellness = ({ lang }: EuropeanWellnessProps) => {
  const stats = [
    { value: t.ewStat1[lang], label: '' },
    { value: t.ewStat2[lang], label: '' },
    { value: t.ewStat3[lang], label: '' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-eyebrow mb-4">{t.ewEyebrow[lang]}</div>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-foreground mb-4">{t.ewTitle[lang]}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.ewSub[lang]}</p>
            <div className="flex flex-wrap gap-2">
              {['Stem Cell Therapy', 'Anti-Ageing', 'Detox Programs', 'Immune Boost', 'Regenerative Medicine'].map(tag => (
                <span key={tag} className="text-[10px] font-medium text-primary border border-primary/20 bg-primary/5 px-3 py-1.5 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-border rounded-sm p-8 bg-card"
          >
            <div className="space-y-6">
              {stats.map((stat, i) => (
                <div key={i} className={`${i > 0 ? 'border-t border-border pt-6' : ''}`}>
                  <p className="font-serif text-xl text-foreground">{stat.value}</p>
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
