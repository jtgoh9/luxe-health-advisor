import { motion } from 'framer-motion';
import { Lang, t, waLink } from '@/data/translations';

interface HeroProps {
  lang: Lang;
}

const Hero = ({ lang }: HeroProps) => {
  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-background pt-28 sm:pt-0">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow justify-center mb-5 sm:mb-8"
        >
          {t.heroEyebrow[lang]}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-foreground leading-[1.1] whitespace-pre-line mb-8"
        >
          {t.heroTitle[lang]}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed"
        >
          {t.heroSub[lang]}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#marketplace" className="btn-gold text-base px-10 py-4">
            {t.heroCta2[lang]}
          </a>
          <a href={waLink(lang)} target="_blank" rel="noopener noreferrer" className="btn-ghost text-base px-10 py-4">
            {t.heroCta1[lang]}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
