'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { ChevronLeft, ChevronRight, Home, Building, Palette, Lightbulb, Ruler, Settings } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Creating homes that reflect your lifestyle and aspirations with thoughtful design and attention to detail.',
    features: ['Custom Home Design', 'Renovation & Remodeling', 'Landscape Integration', 'Interior Planning'],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
  },
  {
    icon: Building,
    title: 'Commercial Architecture',
    description: 'Innovative commercial spaces that enhance productivity and create memorable experiences for users.',
    features: ['Office Buildings', 'Retail Spaces', 'Hospitality Design', 'Mixed-Use Development'],
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Transforming interiors with sophisticated color palettes, textures, and furnishings that complement the architecture.',
    features: ['Space Planning', 'Material Selection', 'Furniture Design', 'Lighting Design'],
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
  },
  {
    icon: Ruler,
    title: 'Master Planning',
    description: 'Comprehensive planning solutions for large-scale developments and urban design projects.',
    features: ['Site Analysis', 'Zoning Compliance', 'Infrastructure Planning', 'Community Design'],
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
  },
  {
    icon: Settings,
    title: 'Project Management',
    description: 'End-to-end project management ensuring timely delivery and quality control throughout the process.',
    features: ['Construction Administration', 'Vendor Coordination', 'Quality Control', 'Timeline Management'],
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
  },
  {
    icon: Lightbulb,
    title: 'Consultation',
    description: 'Expert architectural consultation to help you make informed decisions throughout your project journey.',
    features: ['Design Review', 'Feasibility Studies', 'Code Compliance', 'Sustainability Planning'],
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
  },
];

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToService = (index: number) => {
    setCurrentIndex(index);
  };

  const currentService = services[currentIndex];

  return (
    <>
      <Head>
        <title>Services - Studio Archtantra</title>
        <meta name="description" content="Explore our comprehensive architectural services including residential design, commercial architecture, interior design, and consultation." />
      </Head>
      
      <main>
        <Header />
        
        {/* Full Screen Services Carousel */}
        <section className="relative h-screen w-full overflow-hidden">
          {/* Full Screen Image Background */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.title}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <img
                src={currentService.image}
                alt={currentService.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/50" />
            </motion.div>
          </AnimatePresence>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 pt-32">
            {/* Header */}
            <motion.div
              ref={ref}
              className="text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span 
                className="inline-block px-6 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-medium rounded-full mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Our Services
              </motion.span>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                className="text-center max-w-5xl mx-auto text-white"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                key={`content-${currentService.title}`}
              >
                {/* Service Icon */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-md rounded-full mb-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <currentService.icon className="w-10 h-10 text-white" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  {currentService.title}
                </motion.h2>

                {/* Description */}
                <motion.p
                  className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  {currentService.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      className="flex items-center justify-center px-4 py-3 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-center">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Bottom Controls */}
            <div className="flex items-center justify-between">
              {/* Navigation Arrows */}
              <div className="flex gap-4">
                <motion.button
                  onClick={prevService}
                  className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  onClick={nextService}
                  className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-3">
                {services.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToService(index)}
                    className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-12 h-3' : 'w-3 h-3'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <div className={`w-full h-full rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white' 
                        : 'bg-white/40 hover:bg-white/60'
                    }`} />
                  </motion.button>
                ))}
              </div>

              {/* Service Counter */}
              <div className="text-white/80 text-sm font-medium">
                <span className="text-white font-bold">
                  {String(currentIndex + 1).padStart(2, '0')}
                </span>
                {' / '}
                {String(services.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-midnight text-white">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Ready to Discuss Your <span className="text-golden">Project?</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s explore how our services can bring your architectural vision to life. 
                Contact us today for a personalized consultation.
              </p>
              <a
                href="/contact"
                className="inline-block bg-golden hover:bg-golden/90 text-midnight px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}