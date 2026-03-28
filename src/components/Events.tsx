import { motion } from 'framer-motion';
import { Calendar, MessageCircle } from 'lucide-react';
import { Lang, t, waLink } from '@/data/translations';

interface EventsProps {
  lang: Lang;
}

const Events = ({ lang }: EventsProps) => {
  const events = [
    { title: t.event1[lang], desc: t.event1Desc[lang] },
    { title: t.event2[lang], desc: t.event2Desc[lang] },
    { title: t.event3[lang], desc: t.event3Desc[lang] },
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
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground">{t.eventsTitle[lang]}</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-sm p-7 bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-md"
            >
              <Calendar className="w-6 h-6 text-primary mb-5" />
              <h3 className="font-serif text-xl text-foreground mb-3">{event.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{event.desc}</p>
              <a
                href={waLink(lang)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm flex items-center justify-center gap-2"
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
