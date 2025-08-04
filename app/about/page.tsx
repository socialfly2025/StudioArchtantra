'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { Award, Users, Clock, Target } from 'lucide-react';

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Principal Architect',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    bio: 'With over 15 years of experience, Sarah leads our design vision and ensures every project meets our high standards.',
  },
  {
    name: 'David Chen',
    role: 'Design Director',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    bio: 'David brings innovative design solutions and sustainable practices to every project he oversees.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Project Manager',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg',
    bio: 'Emily ensures seamless project execution from concept to completion with her exceptional organizational skills.',
  },
];

const values = [
  {
    icon: Target,
    title: 'Innovation',
    description: 'We push the boundaries of architectural design to create unique and forward-thinking spaces.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their needs and exceed their expectations.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We maintain the highest standards of quality in every aspect of our work.',
  },
  {
    icon: Clock,
    title: 'Timelessness',
    description: 'We design spaces that will remain beautiful and functional for generations to come.',
  },
];

export default function About() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      <Head>
        <title>About Us - Studio Archtantra</title>
        <meta name="description" content="Learn about Studio Archtantra's history, team, and commitment to architectural excellence." />
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
                About <span className="text-golden">Studio Archtantra</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                Founded in 2010, Studio Archtantra has been at the forefront of architectural innovation, 
                creating spaces that inspire and endure. Our multidisciplinary approach combines artistic 
                vision with technical expertise to deliver exceptional results.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-3xl font-light text-midnight mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  What started as a small design studio has grown into a renowned architectural firm 
                  known for pushing creative boundaries while maintaining practical functionality. Our 
                  journey has been marked by continuous learning, innovation, and a deep commitment 
                  to sustainable design practices.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Today, we continue to shape the built environment with projects that reflect our 
                  core values of innovation, sustainability, and human-centered design. Each project 
                  is an opportunity to create something meaningful and lasting.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                  alt="Studio Archtantra Office"
                  className="w-full h-96 object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-golden/10 rounded-lg -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-24 bg-gray-50">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-midnight mb-6">
                Our <span className="text-golden">Values</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These core principles guide every decision we make and every project we undertake
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-20 h-20 bg-golden/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-10 h-10 text-golden" />
                  </div>
                  <h3 className="text-xl font-medium text-midnight mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-24 bg-white">
          <div className="container-max section-padding">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-light text-midnight mb-6">
                Meet Our <span className="text-golden">Team</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our talented team of architects, designers, and project managers work collaboratively 
                to bring your vision to life
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 object-cover rounded-full mx-auto shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-golden/20 rounded-full" />
                  </div>
                  <h3 className="text-xl font-medium text-midnight mb-2">{member.name}</h3>
                  <p className="text-golden mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
