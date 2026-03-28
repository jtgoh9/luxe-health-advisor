import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lang } from '@/data/translations';

interface TestimonialProps {
  lang: Lang;
}

const testimonials = [
  {
    quote: {
      id: "VitaBridge membuat seluruh proses menjadi begitu mudah. Dari pemilihan paket hingga penerbangan pulang, semuanya teratur sempurna.",
      en: "VitaBridge made the entire process so effortless. From package selection to the flight home, everything was perfectly arranged.",
      zh: "VitaBridge让整个过程变得如此轻松。从选择方案到回程航班，一切都安排得井井有条。"
    },
    author: { id: "— Keluarga S., Jakarta", en: "— The S. Family, Jakarta", zh: "— S. 家族，雅加达" },
    provider: "DA MedSuites"
  },
  {
    quote: {
      id: "Concierge bahasa Indonesia sangat membantu. Saya merasa seperti di rumah sendiri di Singapura.",
      en: "The Indonesian-speaking concierge was incredible. I felt completely at home in Singapore.",
      zh: "印尼语礼宾服务非常出色。在新加坡我感觉就像在家一样。"
    },
    author: { id: "— Bapak T., Surabaya", en: "— Mr. T., Surabaya", zh: "— T. 先生，泗水" },
    provider: "Parkway Shenton"
  },
  {
    quote: {
      id: "Pemantauan 90 hari setelah skrining memberikan ketenangan pikiran yang luar biasa bagi keluarga kami.",
      en: "The 90-day follow-up after screening gave our family tremendous peace of mind.",
      zh: "筛查后的90天跟进为我们全家带来了极大的安心。"
    },
    author: { id: "— Ibu L., Beijing", en: "— Mrs. L., Beijing", zh: "— L. 女士，北京" },
    provider: "Raffles Medical"
  },
  {
    quote: {
      id: "European Wellness di Puteri Harbour adalah pengalaman yang mengubah hidup. Terapi sel punca benar-benar premium.",
      en: "European Wellness at Puteri Harbour was a life-changing experience. The stem cell therapy was truly premium.",
      zh: "Puteri Harbour的European Wellness是改变人生的体验。干细胞治疗确实非常高端。"
    },
    author: { id: "— Keluarga W., Medan", en: "— The W. Family, Medan", zh: "— W. 家族，棉兰" },
    provider: "European Wellness"
  },
];

const INTERVAL = 8000;

const Testimonial = ({ lang }: TestimonialProps) => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent(prev => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, INTERVAL);
    return () => clearInterval(interval);
  }, [paused, next]);

  const item = testimonials[current];

  return (
    <section
      className="py-24 sm:py-32 bg-secondary"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <span className="font-serif text-5xl sm:text-6xl text-primary leading-none">"</span>
        <div className="min-h-[180px] sm:min-h-[160px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground font-light leading-relaxed italic mb-6">
                {item.quote[lang]}
              </blockquote>
              <p className="text-base text-muted-foreground">{item.author[lang]}</p>
              <p className="text-sm text-gold-text mt-1">{item.provider}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'bg-primary w-6' : 'w-2 bg-border hover:bg-primary/40'
              }`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
