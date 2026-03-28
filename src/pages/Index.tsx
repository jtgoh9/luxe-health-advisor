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
import SectionTransition from '@/components/SectionTransition';

const Index = () => {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <div className="min-h-screen bg-background">
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <SectionTransition />
      <TrustBar lang={lang} />
      <SectionTransition reverse />
      <ScreeningMarketplace lang={lang} />
      <SectionTransition />
      <YourExperience lang={lang} />
      <SectionTransition reverse />
      <EuropeanWellness lang={lang} />
      <SectionTransition />
      <Events lang={lang} />
      <Testimonial lang={lang} />
      <SectionTransition reverse />
      <EnquiryForm lang={lang} />
      <SectionTransition />
      <FooterCta lang={lang} />
      <Footer lang={lang} />
      <FloatingWhatsApp lang={lang} />
      <BackToTop />
    </div>
  );
};

export default Index;
