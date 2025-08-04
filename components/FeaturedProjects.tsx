'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Modern Villa Retreat',
    category: 'Residential',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    description: 'A contemporary villa that seamlessly blends with its natural surroundings.',
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    description: 'A striking office building that redefines workspace aesthetics.',
  },
  {
    id: 3,
    title: 'Luxury Penthouse',
    category: 'Interior',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    description: 'Sophisticated interior design with panoramic city views.',
  },
  {
    id: 4,
    title: 'Sustainable Complex',
    category: 'Mixed-Use',
    image: 'https://images.pexels.com/photos/2121121/pexels-photo-2121121.jpeg',
    description: 'An eco-friendly mixed-use development combining residential and commercial spaces.',
  },
  {
    id: 5,
    title: 'Cultural Center',
    category: 'Public',
    image: 'https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg',
    description: 'A dynamic cultural hub featuring fluid geometries and interactive spaces.',
  }
];

export default function FeaturedProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index : any) => {
    setCurrentIndex(index);
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Image Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
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
            Featured Projects
          </motion.span>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="text-center max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            key={`content-${currentProject.id}`}
          >
            {/* Category Badge */}
            <motion.div
              className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {currentProject.category}
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {currentProject.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              {currentProject.description}
            </motion.p>


          </motion.div>
        </div>

        {/* Bottom Controls */}
        <div className="flex items-center justify-between">
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <motion.button
              onClick={prevProject}
              className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              onClick={nextProject}
              className="p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex gap-3">
            {projects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToProject(index)}
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
                {/* Progress bar removed since no auto-play */}
              </motion.button>
            ))}
          </div>

          {/* Project Counter */}
          <div className="text-white/80 text-sm font-medium">
            <span className="text-white font-bold">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            {' / '}
            {String(projects.length).padStart(2, '0')}
          </div>
        </div>
      </div>


    </section>
  );
}