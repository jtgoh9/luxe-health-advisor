import { motion } from 'framer-motion';
import { MessageCircle, Clock } from 'lucide-react';
import { Lang, t, waLink } from '@/data/translations';

interface FooterCtaProps {
  lang: Lang;
}

const FooterCta = ({ lang }: FooterCtaProps) => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-5">
            {t.footerCtaTitle[lang]}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-4">{t.footerCtaSub[lang]}</p>
          <div className="flex items-center justify-center gap-2 text-sm text-gold-text mb-10">
            <Clock className="w-4 h-4" />
            {lang === 'id' ? 'Kami merespons dalam 2 jam' : lang === 'zh' ? '我们将在2小时内回复' : 'We respond within 2 hours'}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={waLink(lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 text-base font-medium tracking-wide transition-all duration-300 rounded-sm text-white"
              style={{ background: 'hsl(153, 42%, 30%)' }}
            >
              <MessageCircle className="w-4 h-4" />
              {t.footerCtaBtn[lang]}
            </a>
            <a href="#enquiry" className="btn-ghost text-base">
              {lang === 'id' ? 'Isi Formulir' : lang === 'zh' ? '填写表格' : 'Fill Enquiry Form'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterCta;
