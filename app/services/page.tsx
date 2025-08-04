'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { Home, Building, Palette, Lightbulb, Ruler, Settings } from 'lucide-react';

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
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Head>
        <title>Services - Studio Archtantra</title>
        <meta name="description" content="Explore our comprehensive architectural services including residential design, commercial architecture, interior design, and consultation." />
      </Head>
      
      <main>
        <Header />
        
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-24 bg-white">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-light text-midnight mb-6">
                Our <span className="text-golden">Services</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We offer comprehensive architectural services tailored to bring your vision to life. 
                From initial concept to final construction, we guide you through every step of the process.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="pb-24 bg-white">
          <div className="container-max section-padding">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? 'lg:grid-flow-col-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-golden/10 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="w-8 h-8 text-golden" />
                      </div>
                      <h2 className="text-3xl font-light text-midnight">{service.title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center">
                          <div className="w-2 h-2 bg-golden rounded-full mr-3" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-96 object-cover rounded-lg shadow-2xl"
                    />
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-golden/10 rounded-lg -z-10" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-midnight text-white">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                Ready to Discuss Your <span className="text-golden">Project?</span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let's explore how our services can bring your architectural vision to life. 
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