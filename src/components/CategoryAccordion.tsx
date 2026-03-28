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

  if (category.tests.length === 0) {
    return (
      <div className="mb-2">
        <p className="text-sm font-medium text-foreground italic">{category.name}</p>
      </div>
    );
  }

  return (
    <div className="mb-2">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full text-left py-2 group"
      >
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {category.name}
        </span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">{category.tests.length}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pl-3 pb-3 space-y-1.5">
              {category.tests.map((test, i) => (
                <div key={i} className="flex items-start gap-2">
                  <Check className="w-3.5 h-3.5 text-green shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{test}</span>
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
