import { motion } from 'framer-motion';
import { Lang } from '@/data/translations';

interface TestimonialProps {
  lang: Lang;
}

const founderQuote = {
  id: "Saya membangun VitaBridge karena saya menyaksikan klien-klien premium berjuang sendirian di sistem kesehatan asing — membawa laporan sendiri, menavigasi klinik yang tidak familiar, tanpa ada yang membantu menerjemahkan atau memperjuangkan kepentingan mereka. Anda layak mendapatkan yang lebih baik. Satu panggilan. Semua kami urus.",
  en: "I built VitaBridge because I watched high-net-worth clients struggle alone through a foreign healthcare system — carrying their own reports, navigating unfamiliar clinics, with no one to translate or advocate for them. You deserve better than that. One call. We handle everything.",
  zh: "我创立VitaBridge，因为我亲眼见证高净值客户独自在陌生医疗体系中挣扎——自带报告、独自摸索陌生诊所、没有人翻译或代为发声。您值得拥有更好的体验。一个电话，我们全程负责。"
};

const founderAttribution = {
  id: "— JT Goh, Pendiri · VitaBridge",
  en: "— JT Goh, Founder · VitaBridge",
  zh: "— JT Goh，创始人 · VitaBridge"
};

const eyebrow = {
  id: "DARI PENDIRI",
  en: "FROM THE FOUNDER",
  zh: "创始人寄语"
};

const Testimonial = ({ lang }: TestimonialProps) => {
  return (
    <section className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-16 h-px bg-primary mx-auto mb-8" />

          <div className="section-eyebrow justify-center mb-6">{eyebrow[lang]}</div>

          <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed italic text-foreground mb-6">
            "{founderQuote[lang]}"
          </blockquote>

          <p className="text-base text-muted-foreground mt-6">
            {founderAttribution[lang]}
          </p>

          <div className="w-16 h-px bg-primary mx-auto mt-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
