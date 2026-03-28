import { motion } from 'framer-motion';
import { Car, Hotel, Bus, Languages, FileText, Activity } from 'lucide-react';
import { Lang, t } from '@/data/translations';

interface AddOnsProps {
  lang: Lang;
}

const AddOns = ({ lang }: AddOnsProps) => {
  const items = [
    { icon: Car, title: t.addon1[lang], desc: t.addon1Desc[lang] },
    { icon: Hotel, title: t.addon2[lang], desc: t.addon2Desc[lang] },
    { icon: Bus, title: t.addon3[lang], desc: t.addon3Desc[lang] },
    { icon: Languages, title: t.addon4[lang], desc: t.addon4Desc[lang] },
    { icon: FileText, title: t.addon5[lang], desc: t.addon5Desc[lang] },
    { icon: Activity, title: t.addon6[lang], desc: t.addon6Desc[lang] },
  ];

  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-border rounded-sm p-7 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <item.icon className="w-6 h-6 text-primary mb-5" />
              <h3 className="font-serif text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOns;
