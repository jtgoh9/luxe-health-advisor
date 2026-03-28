import { Lang, t } from '@/data/translations';

interface FooterProps {
  lang: Lang;
}

const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className="py-8 border-t border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-serif text-lg text-foreground tracking-wide">
          VITA<span className="text-primary">BRIDGE</span>
        </span>
        <p className="text-[10px] text-muted-foreground max-w-xl text-center sm:text-right leading-relaxed">
          {t.footerDisclaimer[lang]}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
