'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';

const projects = [
  {
    id: 1,
    title: 'Modern Villa Retreat',
    category: 'residential',
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    description: 'A contemporary villa that seamlessly blends with its natural surroundings.',
    year: '2023',
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'commercial',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg',
    description: 'A striking office building that redefines workspace aesthetics.',
    year: '2023',
  },
  {
    id: 3,
    title: 'Luxury Penthouse',
    category: 'interior',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    description: 'Sophisticated interior design with panoramic city views.',
    year: '2022',
  },
  {
    id: 4,
    title: 'Sustainable Housing Complex',
    category: 'residential',
    image: 'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg',
    description: 'Eco-friendly residential complex with innovative green technologies.',
    year: '2022',
  },
  {
    id: 5,
    title: 'Cultural Center',
    category: 'commercial',
    image: 'https://images.pexels.com/photos/161758/governor-office-building-georgia-161758.jpeg',
    description: 'A modern cultural center that celebrates community and arts.',
    year: '2021',
  },
  {
    id: 6,
    title: 'Boutique Hotel Interior',
    category: 'interior',
    image: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
    description: 'Elegant interior design creating a memorable hospitality experience.',
    year: '2021',
  },
];

const categories = ['all', 'residential', 'commercial', 'interior'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      <Head>
        <title>Projects - Studio Archtantra</title>
        <meta name="description" content="Explore our portfolio of architectural projects including residential, commercial, and interior design work." />
      </Head>
      
      <main>
        <Header />
        
        <section className="pt-32 pb-24 bg-white">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-light text-midnight mb-6">
                Our <span className="text-golden">Projects</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Discover our portfolio of exceptional architectural projects that showcase our commitment to design excellence and innovation
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <div className="flex justify-center mb-12">
              <div className="flex flex-wrap gap-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-golden text-midnight'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm text-golden">{project.category}</span>
                        <span className="text-sm text-white/80">{project.year}</span>
                      </div>
                      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}