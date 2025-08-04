'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/hero-architecture.mp4" // Replace with your video path
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-midnight/60" />
      </div>

      {/* Content - Positioned near bottom */}
      <div className="relative z-10 text-center text-white container-max section-padding pb-24 md:pb-32 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            Crafting Spaces<br />
            <span className="gradient-text">That Inspire</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where architectural vision meets artistic expression, creating environments that transcend the ordinary
          </p>
          <a href='/contact'>
          <motion.button
            className="bg-golden hover:bg-golden/90 text-midnight px-8 py-4 text-lg font-medium tracking-wide transition-all duration-300 hover:scale-105 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Work
          </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}