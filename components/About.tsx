'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-midnight mb-6">
              About <span className="text-golden">Studio Archtantra</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded on the principle that architecture should not merely shelter but inspire, 
              Studio Archtantra has been creating extraordinary spaces for over a decade. Our 
              approach combines timeless design principles with contemporary innovation.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Each project is a unique journey of discovery, where we collaborate closely with 
              our clients to understand their vision and transform it into architectural reality 
              that exceeds expectations.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-light text-golden mb-2">50+</h3>
                <p className="text-sm text-gray-600">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light text-golden mb-2">12+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light text-golden mb-2">25+</h3>
                <p className="text-sm text-gray-600">Awards Won</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
              alt="Studio Archtantra Office"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-golden/10 rounded-lg -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}