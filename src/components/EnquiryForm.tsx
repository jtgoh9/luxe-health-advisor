import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Lang, t } from '@/data/translations';

interface EnquiryFormProps {
  lang: Lang;
}

const EnquiryForm = ({ lang }: EnquiryFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    preferredLang: lang === 'zh' ? 'zh' : lang === 'id' ? 'id' : 'en',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    console.log('Enquiry submitted:', form);
    setSubmitted(true);
  };

  return (
    <section id="enquiry" className="py-24 sm:py-32 bg-secondary">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="section-eyebrow justify-center mb-4">{t.enquiryEyebrow[lang]}</div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground leading-[1.15] mb-3">
            {t.enquiryTitle[lang]}
          </h2>
          <p className="text-base text-muted-foreground">{t.enquirySub[lang]}</p>
        </motion.div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 border border-border rounded-sm bg-card"
          >
            <CheckCircle className="w-12 h-12 text-green mx-auto mb-4" />
            <p className="text-lg font-serif text-foreground">{t.enquirySuccess[lang]}</p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="border border-border rounded-sm bg-card p-6 sm:p-8 space-y-5"
          >
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                {t.enquiryName[lang]}
              </label>
              <input
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                {t.enquiryEmail[lang]}
              </label>
              <input
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                {t.enquiryPhone[lang]}
              </label>
              <input
                type="tel"
                required
                maxLength={20}
                value={form.phone}
                onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              />
            </div>

            {/* Preferred Language */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                {t.enquiryLang[lang]}
              </label>
              <select
                value={form.preferredLang}
                onChange={e => setForm({ ...form, preferredLang: e.target.value })}
                className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
              >
                <option value="id">{t.enquiryLangId[lang]}</option>
                <option value="en">{t.enquiryLangEn[lang]}</option>
                <option value="zh">{t.enquiryLangZh[lang]}</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">
                {t.enquiryMessage[lang]}
              </label>
              <textarea
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 text-sm border border-border rounded-sm bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn-gold w-full flex items-center justify-center gap-2 text-sm py-3.5"
            >
              <Send className="w-4 h-4" />
              {t.enquirySubmit[lang]}
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default EnquiryForm;
