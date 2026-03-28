import { motion } from 'framer-motion';
import { Lang, t } from '@/data/translations';

interface TestimonialProps {
  lang: Lang;
}

const Testimonial = ({ lang }: TestimonialProps) => {
  return (
    <section className="py-20 sm:py-28 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-serif text-6xl text-primary leading-none">"</span>
          <blockquote className="font-serif text-xl sm:text-2xl text-foreground font-light leading-relaxed italic mt-2 mb-6">
            {t.testimonialQuote[lang]}
          </blockquote>
          <p className="text-sm text-muted-foreground">{t.testimonialAuthor[lang]}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
