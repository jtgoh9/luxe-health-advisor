import { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { PackageCategory } from '@/data/providers';

interface CategoryAccordionProps {
  category: PackageCategory;
  defaultOpen?: boolean;
}

const CategoryAccordion = ({ category, defaultOpen = false }: CategoryAccordionProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const id = `cat-${category.name.replace(/\s/g, '-')}`;

  // "Everything in X, plus:" — render as a divider, not an accordion row
  if (category.tests.length === 0) {
    return (
      <div className="flex items-center gap-3 mb-4 mt-1">
        <div className="h-px flex-1 bg-border opacity-60" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-gold-text
          bg-primary/5 border border-primary/10 px-3 py-1 rounded-sm whitespace-nowrap flex-shrink-0">
          {category.name}
        </span>
        <div className="h-px flex-1 bg-border opacity-60" />
      </div>
    );
  }

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left py-2.5 group"
        aria-expanded={open}
        aria-controls={id}
      >
        <span className="text-sm font-medium text-foreground group-hover:text-gold-text transition-colors">
          {category.name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground font-medium">{category.tests.length}</span>
          <ChevronDown
            className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-3 pb-3 space-y-2">
              {category.tests.map((test, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-green shrink-0 mt-0.5" />
                  <span className="text-base text-muted-foreground leading-relaxed">{test}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryAccordion;
