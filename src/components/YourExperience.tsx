import { motion } from 'framer-motion';
import { Car, Hotel, Bus, Languages, FileText, Activity } from 'lucide-react';
import { Lang, t } from '@/data/translations';

interface YourExperienceProps {
  lang: Lang;
}

const YourExperience = ({ lang }: YourExperienceProps) => {
  const steps = [
    { num: '01', title: t.step1[lang], desc: t.step1Desc[lang] },
    { num: '02', title: t.step2[lang], desc: t.step2Desc[lang] },
    { num: '03', title: t.step3[lang], desc: t.step3Desc[lang] },
    { num: '04', title: t.step4[lang], desc: t.step4Desc[lang] },
  ];

  const addons = [
    { icon: Car, title: t.addon1[lang], desc: t.addon1Desc[lang] },
    { icon: Hotel, title: t.addon2[lang], desc: t.addon2Desc[lang] },
    { icon: Bus, title: t.addon3[lang], desc: t.addon3Desc[lang] },
    { icon: Languages, title: t.addon4[lang], desc: t.addon4Desc[lang] },
    { icon: FileText, title: t.addon5[lang], desc: t.addon5Desc[lang] },
    { icon: Activity, title: t.addon6[lang], desc: t.addon6Desc[lang] },
  ];

  return (
    <section id="journey" className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Journey Steps */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-eyebrow justify-center mb-4">{t.journeyEyebrow[lang]}</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">{t.journeyTitle[lang]}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-5">
                <span className="font-serif text-lg text-gold-text font-semibold">{step.num}</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mb-3">{step.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Concierge Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-eyebrow justify-center mb-4">{t.addOnsEyebrow[lang]}</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">{t.addOnsTitle[lang]}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-border rounded-sm p-6 sm:p-7 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <item.icon className="w-6 h-6 text-primary mb-5" />
              <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YourExperience;
