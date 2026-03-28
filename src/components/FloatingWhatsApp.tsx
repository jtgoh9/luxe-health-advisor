import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { Lang, waLink } from '@/data/translations';

interface FloatingWhatsAppProps {
  lang: Lang;
}

const FloatingWhatsApp = ({ lang }: FloatingWhatsAppProps) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(hideTimer); };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {showTooltip && !dismissed && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="bg-card border border-border shadow-lg rounded-sm px-4 py-3 max-w-[220px] relative"
          >
            <button
              onClick={() => setDismissed(true)}
              className="absolute top-1 right-1 text-muted-foreground hover:text-foreground"
              aria-label="Close"
            >
              <X className="w-3.5 h-3.5" />
            </button>
            <p className="text-sm text-foreground leading-snug pr-4">
              {lang === 'id' ? 'Ada pertanyaan? Chat kami!' : lang === 'zh' ? '有问题？联系我们！' : 'Have questions? Chat with us!'}
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={waLink(lang)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{ background: 'hsl(153, 42%, 30%)' }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </motion.a>
    </div>
  );
};

export default FloatingWhatsApp;
