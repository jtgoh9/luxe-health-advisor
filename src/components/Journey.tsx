import { motion } from 'framer-motion';
import { Lang, t } from '@/data/translations';

interface JourneyProps {
  lang: Lang;
}

const Journey = ({ lang }: JourneyProps) => {
  const steps = [
    { num: '01', title: t.step1[lang], desc: t.step1Desc[lang] },
    { num: '02', title: t.step2[lang], desc: t.step2Desc[lang] },
    { num: '03', title: t.step3[lang], desc: t.step3Desc[lang] },
    { num: '04', title: t.step4[lang], desc: t.step4Desc[lang] },
  ];

  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="section-eyebrow justify-center mb-4">{t.journeyEyebrow[lang]}</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">{t.journeyTitle[lang]}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full border-2 border-primary flex items-center justify-center mx-auto mb-5">
                <span className="font-serif text-base text-primary font-semibold">{step.num}</span>
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
