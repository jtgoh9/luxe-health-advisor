import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Lang, t, waLink } from '@/data/translations';

interface NavProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const Nav = ({ lang, setLang }: NavProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const langs: { key: Lang; label: string }[] = [
    { key: 'id', label: 'ID' },
    { key: 'en', label: 'EN' },
    { key: 'zh', label: '中文' },
  ];

  const navLinks = [
    { href: '#marketplace', label: t.navPackages[lang] },
    { href: '#journey', label: t.navJourney[lang] },
    { href: '#european-wellness', label: t.navAbout[lang] },
    { href: '#enquiry', label: t.navContact[lang] },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-gold-line' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#" className="text-2xl font-serif font-semibold tracking-wide text-foreground">
          VITA<span className="text-primary">BRIDGE</span>
        </a>

        {/* Desktop: Nav links + Language + CTA */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-1 bg-secondary rounded-sm p-0.5">
            {langs.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setLang(key)}
                className={`px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 rounded-sm ${
                  lang === key
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <a href={waLink(lang)} target="_blank" rel="noopener noreferrer" className="btn-ghost text-sm">
            {t.contact[lang]}
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground py-2 border-b border-border"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-1 bg-secondary rounded-sm p-0.5 self-start mt-2">
                {langs.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => { setLang(key); setMobileOpen(false); }}
                    className={`px-3 py-2 text-sm font-medium tracking-wide transition-all rounded-sm ${
                      lang === key ? 'bg-primary text-primary-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <a href={waLink(lang)} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm text-center mt-2">
                {t.contact[lang]}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Nav;
