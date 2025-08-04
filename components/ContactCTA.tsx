'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function ContactCTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-midnight text-white">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Ready to Start Your <span className="text-golden">Project?</span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can bring your architectural vision to life. Contact us today for a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-golden hover:bg-golden/90 text-midnight px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}