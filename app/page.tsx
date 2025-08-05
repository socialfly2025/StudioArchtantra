'use client';

import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import FeaturedProjects from '@/components/FeaturedProjects';
import Testimonials from '@/components/Testimonials';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000); // or after assets load
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="relative">
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full z-50">
          <Loader onComplete={() => {}} />
        </div>
      )}

      {/* Always rendered */}
      <Header />
      <Hero />
      <About />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
}
