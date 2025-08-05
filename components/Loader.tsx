'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [desktopImageLoaded, setDesktopImageLoaded] = useState(false);
  const [mobileImageLoaded, setMobileImageLoaded] = useState(false);

  useEffect(() => {
    // Preload both images
    const desktopImg = new Image();
    const mobileImg = new Image();

    desktopImg.onload = () => setDesktopImageLoaded(true);
    mobileImg.onload = () => setMobileImageLoaded(true);

    desktopImg.src = '/images/hero-architecture.jpg';
    mobileImg.src = '/images/hero-architecture-mobile.jpg';

    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1.5;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: progress === 100 ? 0 : 1 }}
      transition={{ duration: 1, delay: progress === 100 ? 0.5 : 0 }}
    >

      {/* Desktop Image */}
      <div className="absolute inset-0 hidden md:block w-full h-full z-0">
        {desktopImageLoaded ? (
          <motion.img
            src="/images/hero-architecture.jpg"
            alt="Desktop Loader Background"
            className="w-full h-full object-cover"
            initial={{ scale: 1.05 }}
            animate={{ scale: progress === 100 ? 1.1 : 1.05 }}
            transition={{ duration: progress === 100 ? 1.5 : 4, ease: 'easeInOut' }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800" />
        )}
      </div>

      {/* Mobile Image */}
      <div className="absolute inset-0 block md:hidden w-full h-full z-0">
        {mobileImageLoaded ? (
          <motion.img
            src="/images/hero-architecture-mobile.jpg"
            alt="Mobile Loader Background"
             className="w-full h-full md:object-cover object-center"
            initial={{ scale: 1.05 }}
            animate={{ scale: progress === 100 ? 1.1 : 1.05 }}
            transition={{ duration: progress === 100 ? 1.5 : 4, ease: 'easeInOut' }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800" />
        )}
      </div>

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-black/40 z-10"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: progress === 100 ? 0.8 : 0.6 }}
        transition={{ duration: 1 }}
      />

      {/* Tagline */}
      <motion.div
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-20 md:pb-24 lg:pb-28 z-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center px-6">
          <motion.p
            className="text-white text-3xl md:text-5xl lg:text-6xl font-light tracking-wide"
            initial={{ letterSpacing: '0.1em' }}
            animate={{ letterSpacing: '0.05em' }}
            transition={{ duration: 2, delay: 2 }}
          >
            Designing Spaces, Defining Legacies
          </motion.p>

          <motion.div
            className="h-px w-32 bg-gradient-to-r from-transparent via-golden to-transparent mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
        </div>
      </motion.div>

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-30">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-golden/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: Math.random() * 2,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
