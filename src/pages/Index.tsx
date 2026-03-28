import { useState } from 'react';
import { type Lang } from '@/data/translations';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ScreeningMarketplace from '@/components/ScreeningMarketplace';
import Journey from '@/components/Journey';
import AddOns from '@/components/AddOns';
import EuropeanWellness from '@/components/EuropeanWellness';
import Events from '@/components/Events';
import Testimonial from '@/components/Testimonial';
import EnquiryForm from '@/components/EnquiryForm';
import FooterCta from '@/components/FooterCta';
import Footer from '@/components/Footer';

const Index = () => {
  const [lang, setLang] = useState<Lang>('en');

  return (
    <div className="min-h-screen bg-background">
      <Nav lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <TrustBar lang={lang} />
      <ScreeningMarketplace lang={lang} />
      <Journey lang={lang} />
      <AddOns lang={lang} />
      <EuropeanWellness lang={lang} />
      <Events lang={lang} />
      <Testimonial lang={lang} />
      <EnquiryForm lang={lang} />
      <FooterCta lang={lang} />
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
