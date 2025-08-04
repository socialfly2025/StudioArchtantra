
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-light text-golden">
      {count}{suffix}
    </span>
  );
};

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { number: 50, suffix: '+', label: 'Projects Completed', delay: 0 },
    { number: 12, suffix: '+', label: 'Years Experience', delay: 0.2 },
    { number: 25, suffix: '+', label: 'Awards Won', delay: 0.4 },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-golden/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-midnight/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 bg-golden/10 text-golden text-sm font-medium rounded-full tracking-wide uppercase">
                About Us
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-5xl md:text-6xl lg:text-7xl font-light text-midnight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Studio{' '}
              <span className="relative">
                <span className="text-golden">Archtantra</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-golden to-yellow-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: '100%' } : {}}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h2>

            {/* Description Paragraphs */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <p className="text-xl text-gray-700 leading-relaxed">
                At Studio Archtantra, architecture is not just about constructing buildings - it&apos;s about{' '}
                <span className="text-golden font-medium">shaping experiences</span>, stirring emotion, and crafting stories in stone, glass, and light.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                We are a young studio with bold ambitions, fuelled by passion, precision, and a deep respect for design that endures. 
                Though new to the industry, we are driven by an uncompromising commitment to excellence and a fresh perspective 
                that dares to challenge the conventional.
              </p>

              <div className="flex items-start space-x-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-golden/10 shadow-lg">
                <div className="w-3 h-3 bg-golden rounded-full mt-2 flex-shrink-0" />
                <p className="text-gray-700 italic leading-relaxed">
                  &quot;Our strength lies not in how long we&apos;ve existed, but in how fearlessly we create - with clarity, 
                  creativity, and a vision that pushes boundaries.&quot;
                </p>
              </div>
            </motion.div>

            {/* Animated Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + stat.delay }}
                >
                  <div className="relative">
                    <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                    <motion.div
                      className="w-12 h-1 bg-gradient-to-r from-golden to-yellow-400 mx-auto mt-3 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={inView ? { scaleX: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.2 + stat.delay }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-3 font-medium tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image */}
            <div className="relative group">
              <motion.div
                className="relative overflow-hidden rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Studio Archtantra Office"
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/20 via-transparent to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-8 -right-8 w-24 h-24 bg-golden/20 rounded-2xl backdrop-blur-sm border border-golden/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-midnight/10 rounded-full backdrop-blur-sm"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Overlay Badge */}
              <motion.div
                className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-midnight text-sm font-medium shadow-lg"
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
              >
                ✨ Design Excellence
              </motion.div>
            </div>

            {/* Additional Decorative Elements */}
            <div className="absolute top-1/2 -right-12 w-4 h-4 bg-golden rounded-full opacity-60" />
            <div className="absolute top-1/3 -left-6 w-2 h-2 bg-midnight rounded-full opacity-40" />
            <div className="absolute bottom-1/4 -right-8 w-3 h-3 bg-golden/60 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}