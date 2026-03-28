import { useState } from 'react';
import { type Lang } from '@/data/translations';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ScreeningMarketplace from '@/components/ScreeningMarketplace';
import YourExperience from '@/components/YourExperience';
import EuropeanWellness from '@/components/EuropeanWellness';
import Events from '@/components/Events';
import Testimonial from '@/components/Testimonial';
import EnquiryForm from '@/components/EnquiryForm';
import FooterCta from '@/components/FooterCta';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import BackToTop from '@/components/BackToTop';

const Index = () => {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <div className="min-h-screen bg-background">
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <ScreeningMarketplace lang={lang} />
      <YourExperience lang={lang} />
      <EuropeanWellness lang={lang} />
      <Events lang={lang} />
      <Testimonial lang={lang} />
      <EnquiryForm lang={lang} />
      <FooterCta lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
      <BackToTop />
    </div>
  );
};

export default Index;
