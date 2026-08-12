import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HomeSelectedWork from '@/components/HomeSelectedWork';
import HomeFaq from '@/components/HomeFaq';
import LandingCTA from '@/components/LandingCTA';
import LegacyHashRedirect from '@/components/LegacyHashRedirect';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { generateDictionaryPageMetadata } from '@/lib/page-metadata';

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return generateDictionaryPageMetadata(params, 'home', '/');
}

export default function LocalizedHomePage() {
  return (
    <main id="main-content" className="min-h-screen" tabIndex={-1}>
      <LegacyHashRedirect />
      <Navbar />
      <Hero />
      <HomeSelectedWork />
      <HomeFaq />
      <LandingCTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
