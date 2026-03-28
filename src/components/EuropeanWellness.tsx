import { motion } from 'framer-motion';
import { Globe, Clock, Award, Lock, Leaf, Heart, ShieldCheck, Sparkles, MessageCircle } from 'lucide-react';
import { Lang, t, WHATSAPP } from '@/data/translations';

interface EuropeanWellnessProps {
  lang: Lang;
}

const cardHeading = {
  id: 'Mengapa European Wellness',
  en: 'Why European Wellness',
  zh: '为什么选择 European Wellness',
};

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
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-[1.15] mb-5">{t.ewTitle[lang]}</h2>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">{t.ewSub[lang]}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {therapies.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 text-xs font-medium text-gold-text border border-primary/20 bg-primary/5 px-3 py-2 rounded-sm">
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </div>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                lang === 'id'
                  ? 'Halo VitaBridge, saya tertarik dengan program European Wellness di Puteri Harbour. Boleh saya tahu lebih lanjut?'
                  : lang === 'zh'
                  ? '您好VitaBridge，我对Puteri Harbour的European Wellness项目感兴趣，能了解更多信息吗？'
                  : 'Hello VitaBridge, I am interested in the European Wellness programmes at Puteri Harbour. Could I learn more?'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-sm inline-flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              {lang === 'id' ? 'Tanya Program EW' : lang === 'zh' ? '咨询EW项目' : 'Enquire About EW Programmes'}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-border rounded-sm bg-card overflow-hidden"
          >
            <div className="p-6 sm:p-8 space-y-0">
              <h3 className="font-serif text-lg text-foreground mb-2">{cardHeading[lang]}</h3>
              {stats.map(({ icon: Icon, value }, i) => (
                <div key={i} className={`flex items-start gap-4 py-5 ${i > 0 ? 'border-t border-border' : 'border-t border-border'}`}>
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
