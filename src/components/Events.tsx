import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { Lang, t, WHATSAPP } from '@/data/translations';

interface EventsProps {
  lang: Lang;
}

const Events = ({ lang }: EventsProps) => {
  const events = [
    {
      title: t.event1[lang],
      desc: t.event1Desc[lang],
      date: lang === 'id' ? 'Q3 2026 · Singapura'
          : lang === 'zh' ? 'Q3 2026 · 新加坡'
          : 'Q3 2026 · Singapore',
      waMsg: lang === 'id'
        ? 'Halo VitaBridge, saya tertarik menghadiri Health & Longevity Dinner. Boleh saya daftar minat?'
        : lang === 'zh'
        ? '您好VitaBridge，我对健康长寿晚宴感兴趣，能帮我登记吗？'
        : 'Hello VitaBridge, I am interested in attending the Health & Longevity Dinner. Could I register my interest?',
    },
    {
      title: t.event2[lang],
      desc: t.event2Desc[lang],
      date: lang === 'id' ? 'Q3 2026 · Singapura'
          : lang === 'zh' ? 'Q3 2026 · 新加坡'
          : 'Q3 2026 · Singapore',
      waMsg: lang === 'id'
        ? 'Halo VitaBridge, saya tertarik menghadiri Seminar Kesehatan VitaBridge. Boleh saya daftar minat?'
        : lang === 'zh'
        ? '您好VitaBridge，我对健康研讨会感兴趣，能帮我登记吗？'
        : 'Hello VitaBridge, I am interested in attending the Health Seminar. Could I register my interest?',
    },
    {
      title: t.event3[lang],
      desc: t.event3Desc[lang],
      date: lang === 'id' ? 'Q4 2026 · Puteri Harbour, JB'
          : lang === 'zh' ? 'Q4 2026 · Puteri Harbour, JB'
          : 'Q4 2026 · Puteri Harbour, JB',
      waMsg: lang === 'id'
        ? 'Halo VitaBridge, saya tertarik menghadiri Open Day European Wellness Puteri Harbour. Boleh saya daftar minat?'
        : lang === 'zh'
        ? '您好VitaBridge，我对European Wellness Puteri Harbour开放日感兴趣，能帮我登记吗？'
        : 'Hello VitaBridge, I am interested in the European Wellness Puteri Harbour Open Day. Could I register my interest?',
    },
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
          <div className="section-eyebrow justify-center mb-4">{t.eventsEyebrow[lang]}</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-[1.15]">
            {t.eventsTitle[lang]}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-sm p-7 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-md flex flex-col"
            >
              <div className="flex items-center gap-1.5 text-xs font-medium text-gold-text mb-4">
                <Calendar className="w-3.5 h-3.5 shrink-0" />
                <span>{event.date}</span>
              </div>

              <h3 className="font-serif text-xl text-foreground mb-3">{event.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{event.desc}</p>

              <a
                href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(event.waMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm flex items-center justify-center gap-2 mt-auto"
              >
                <MessageCircle className="w-4 h-4" />
                {t.registerInterest[lang]}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
