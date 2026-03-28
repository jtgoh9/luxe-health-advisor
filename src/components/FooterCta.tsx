import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Lang, t, waLink } from '@/data/translations';

interface FooterCtaProps {
  lang: Lang;
}

const FooterCta = ({ lang }: FooterCtaProps) => {
  return (
    <section className="py-20 sm:py-28 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4">
            {t.footerCtaTitle[lang]}
          </h2>
          <p className="text-sm text-muted-foreground mb-8">{t.footerCtaSub[lang]}</p>
          <a
            href={waLink(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 text-sm font-medium tracking-wide transition-all duration-300 rounded-sm"
            style={{ background: 'hsl(153, 42%, 30%)', color: '#fff' }}
          >
            <MessageCircle className="w-4 h-4" />
            {t.footerCtaBtn[lang]}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCta;
