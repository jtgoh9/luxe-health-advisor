import { Lang, t, waLink, WHATSAPP } from '@/data/translations';

interface FooterProps {
  lang: Lang;
}

const footerLinks = {
  packages: { id: 'Paket', en: 'Packages', zh: '方案' },
  journey: { id: 'Perjalanan', en: 'Journey', zh: '旅程' },
  about: { id: 'European Wellness', en: 'European Wellness', zh: 'European Wellness' },
  contact: { id: 'Kontak', en: 'Contact', zh: '联系' },
  quickLinks: { id: 'Tautan Cepat', en: 'Quick Links', zh: '快速链接' },
  contactUs: { id: 'Hubungi Kami', en: 'Contact Us', zh: '联系我们' },
  aboutTagline: {
    id: 'Layanan concierge kesehatan premium yang menghubungkan Anda dengan penyedia terbaik di Singapura.',
    en: 'Premium health concierge connecting you with Singapore\'s top providers.',
    zh: '高端健康礼宾服务，为您连接新加坡顶级医疗机构。'
  },
  email: { id: 'Email', en: 'Email', zh: '邮箱' },
};

const Footer = ({ lang }: FooterProps) => {
  return (
    <footer className="py-14 border-t border-border bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <span className="font-serif text-xl font-light text-foreground tracking-[0.15em] block mb-3">
              VITA<span className="text-primary">BRIDGE</span>
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {footerLinks.aboutTagline[lang]}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-text mb-4">
              {footerLinks.quickLinks[lang]}
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#marketplace" className="text-base text-muted-foreground hover:text-foreground transition-colors">{footerLinks.packages[lang]}</a></li>
              <li><a href="#journey" className="text-base text-muted-foreground hover:text-foreground transition-colors">{footerLinks.journey[lang]}</a></li>
              <li><a href="#european-wellness" className="text-base text-muted-foreground hover:text-foreground transition-colors">{footerLinks.about[lang]}</a></li>
              <li><a href="#enquiry" className="text-base text-muted-foreground hover:text-foreground transition-colors">{footerLinks.contact[lang]}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold-text mb-4">
              {footerLinks.contactUs[lang]}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={waLink(lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground hover:text-foreground transition-colors"
                >
                  WhatsApp: +65 {WHATSAPP.slice(2, 6)} {WHATSAPP.slice(6)}
                </a>
              </li>
              <li>
                <a href="mailto:hello@vitabridge.sg" className="text-base text-muted-foreground hover:text-foreground transition-colors">
                  hello@vitabridge.sg
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} VitaBridge. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground max-w-xl text-center sm:text-right leading-relaxed">
            {t.footerDisclaimer[lang]}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
