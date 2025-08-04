'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Home, Building, Palette, Lightbulb } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Design',
    description: 'Creating homes that reflect your lifestyle and aspirations with thoughtful design and attention to detail.',
  },
  {
    icon: Building,
    title: 'Commercial Architecture',
    description: 'Innovative commercial spaces that enhance productivity and create memorable experiences for users.',
  },
  {
    icon: Palette,
    title: 'Interior Design',
    description: 'Transforming interiors with sophisticated color palettes, textures, and furnishings that complement the architecture.',
  },
  {
    icon: Lightbulb,
    title: 'Consultation',
    description: 'Expert architectural consultation to help you make informed decisions throughout your project journey.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-gray-50">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-midnight mb-6">
            Our <span className="text-golden">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive architectural services tailored to bring your vision to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="w-16 h-16 bg-golden/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-golden/20 transition-colors">
                <service.icon className="w-8 h-8 text-golden" />
              </div>
              <h3 className="text-xl font-medium text-midnight mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}