import { motion } from 'framer-motion';
import { Shield, Phone, Globe, Award } from 'lucide-react';
import { Lang, t } from '@/data/translations';

interface TrustBarProps {
  lang: Lang;
}

const TrustBar = ({ lang }: TrustBarProps) => {
  const items = [
    { icon: Globe, text: t.trust1[lang] },
    { icon: Award, text: t.trust2[lang] },
    { icon: Shield, text: t.trust3[lang] },
    { icon: Phone, text: t.trust4[lang] },
  ];

  return (
    <section className="bg-secondary py-6 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 lg:divide-x divide-border">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-3 px-4 lg:px-6 py-2"
            >
              <item.icon className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
