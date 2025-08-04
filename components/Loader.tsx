'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    // Replace with your actual image path
    img.src = '/images/hero-architecture.jpg'; // or whatever your image path is
    
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000); // Longer delay for dramatic effect
          return 100;
        }
        return prev + 1.5; // Slightly slower for more dramatic effect
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
      {/* Full-screen background image with zoom effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: imageLoaded 
            ? "url('/images/hero-architecture.jpg')" // Replace with your image
            : "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" // Fallback
        }}
        initial={{ scale: 1.05 }}
        animate={{ 
          scale: progress === 100 ? 1.1 : 1.05 // Subtle zoom effect that stays within bounds
        }}
        transition={{ 
          duration: progress === 100 ? 1.5 : 4,
          ease: "easeInOut"
        }}
      />

      {/* Dark overlay for better text readability */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: progress === 100 ? 0.8 : 0.6 }}
        transition={{ duration: 1 }}
      />

      {/* Simple tagline in center */}
      <motion.div
        className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-20 md:pb-24 lg:pb-28 z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="text-center px-6">
          <motion.p
            className="text-white text-4xl md:text-5xl lg:text-6xl font-light tracking-wide"
            initial={{ letterSpacing: "0.1em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 2, delay: 2 }}
          >
            Building smart homes and spaces
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="h-px w-32 bg-gradient-to-r from-transparent via-golden to-transparent mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />
        </div>
      </motion.div>

      {/* Particles/dots effect (optional) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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