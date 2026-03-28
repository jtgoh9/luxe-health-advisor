import { motion } from 'framer-motion';
import { Languages, Award, Shield, Phone } from 'lucide-react';
import { Lang, t } from '@/data/translations';

interface TrustBarProps {
  lang: Lang;
}

const TrustBar = ({ lang }: TrustBarProps) => {
  const items = [
    { icon: Languages, text: t.trust1[lang] },
    { icon: Award, text: t.trust2[lang] },
    { icon: Shield, text: t.trust3[lang] },
    { icon: Phone, text: t.trust4[lang] },
  ];

  return (
    <section className="bg-secondary py-10 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-border">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col sm:flex-row items-center gap-3 px-4 lg:px-6 py-2 text-center sm:text-left"
            >
              <item.icon className="w-6 h-6 text-primary shrink-0" />
              <span className="text-sm sm:text-base font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
