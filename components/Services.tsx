// 'use client';

// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Building, Palette, Home, Zap, Trees, ClipboardList, Key, ArrowRight, Sparkles } from 'lucide-react';
// import { useRouter } from 'next/navigation';



// const services = [
//   {
//     icon: Building,
//     title: 'Architectural Design',
//     subtitle: 'Timeless & Context-Sensitive',
//     description: 'We design structures that are timeless, context-sensitive, and functionally optimized. Our architectural approach integrates cultural identity with innovative thinking, ensuring spaces are not just built—but belong.',
//     features: ['Concept to execution', 'Cultural integration', 'Spatial planning', 'Visual harmony'],
//     gradient: 'from-blue-500 to-cyan-500',
//     bgColor: 'bg-blue-50',
//     image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop&auto=format'
//   },
//   {
//     icon: Palette,
//     title: 'Interior Design',
//     subtitle: 'Aesthetic & Functional Balance',
//     description: 'We craft interiors that resonate with the architecture and the people who inhabit them. Our designs reflect a careful balance of aesthetics, utility, material richness, and cultural character.',
//     features: ['Material selection', 'Cultural character', 'Attention to detail', 'Purpose-driven design'],
//     gradient: 'from-purple-500 to-pink-500',
//     bgColor: 'bg-purple-50',
//     image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format'
//   },
//   {
//     icon: Home,
//     title: 'Structural Design',
//     subtitle: 'Safety & Durability First',
//     description: 'Our in-house structural engineering ensures safety, durability, and alignment with architectural intent. We develop smart structural systems tailored to site conditions, building type, and project scale.',
//     features: ['In-house engineering', 'Smart systems', 'Cost efficiency', 'Enhanced buildability'],
//     gradient: 'from-orange-500 to-red-500',
//     bgColor: 'bg-orange-50',
//     image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&auto=format'
//   },
//   {
//     icon: Zap,
//     title: 'MEP Design',
//     subtitle: 'Mechanical, Electrical & Plumbing',
//     description: 'We provide comprehensive MEP solutions that ensure comfort, efficiency, and sustainability. Our designs prioritize ease of maintenance, energy optimization, and compliance with modern building standards.',
//     features: ['Energy optimization', 'Modern standards', 'Easy maintenance', 'Seamless integration'],
//     gradient: 'from-yellow-500 to-orange-500',
//     bgColor: 'bg-yellow-50',
//     image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&auto=format'
//   },
//   {
//     icon: Trees,
//     title: 'Landscape Design',
//     subtitle: 'Nature & Architecture Harmony',
//     description: 'We design outdoor environments that elevate the built space and connect it meaningfully with nature. Emphasizing native vegetation, climate sensitivity, and spatial flow.',
//     features: ['Native vegetation', 'Climate sensitivity', 'Ecological value', 'Spatial flow'],
//     gradient: 'from-green-500 to-emerald-500',
//     bgColor: 'bg-green-50',
//     image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format'
//   },
//   {
//     icon: ClipboardList,
//     title: 'Project Management',
//     subtitle: 'End-to-End Excellence',
//     description: 'We offer end-to-end project management services to ensure timely, quality-driven, and cost-effective execution. Our team handles planning, procurement, scheduling, and on-site supervision.',
//     features: ['Single accountability', 'Transparency', 'Quality control', 'Timeline management'],
//     gradient: 'from-indigo-500 to-purple-500',
//     bgColor: 'bg-indigo-50',
//     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format'
//   },
//   {
//     icon: Key,
//     title: 'Turnkey Design & Build',
//     subtitle: 'Complete Solutions — Our Specialty',
//     description: 'We specialize in turnkey solutions — managing everything from the initial sketch to final delivery. Clients benefit from integrated services, streamlined processes, and one dedicated team.',
//     features: ['Initial sketch to delivery', 'Integrated services', 'Budget control', 'Design consistency'],
//     gradient: 'from-amber-500 to-golden',
//     bgColor: 'bg-amber-50',
//     image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&auto=format',
//     featured: true
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//       delayChildren: 0.2
//     }
//   }
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 60, scale: 0.9 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.16, 1, 0.3, 1]
//     }
//   }
// };


// export default function Services() {
//   const router = useRouter();

//   const handleRedirect = () => {
//     router.push('/contact');
//   };
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const [titleRef, titleInView] = useInView({
//     triggerOnce: true,
//     threshold: 0.8,
//   });

//   return (
//     <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
//       {/* Background Elements */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,183,77,0.05),transparent_50%)]" />
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)]" />

//       <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
//         {/* Enhanced Header */}
//         <motion.div
//           ref={titleRef}
//           initial={{ opacity: 0, y: 50 }}
//           animate={titleInView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
//           className="text-center mb-20"
//         >
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={titleInView ? { scale: 1, opacity: 1 } : {}}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 text-golden font-medium text-sm mb-6"
//           >
//             <Sparkles className="w-4 h-4" />
//             Complete Architectural Solutions
//           </motion.div>

//           <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
//             Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-golden to-amber-600 font-medium">Services</span>
//           </h2>

//           <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//             From concept to completion, we provide comprehensive architectural services
//             that transform visions into reality with precision, creativity, and excellence.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
//         >
//           {services.map((service, index) => (
//             <motion.div
//               key={service.title}
//               variants={itemVariants}
//               className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${service.featured ? 'xl:col-span-3 lg:col-span-2' : ''
//                 }`}
//             >
//               {/* Card Background Gradient */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

//               {/* Featured Badge */}
//               {service.featured && (
//                 <div className="absolute top-6 right-6 z-20">
//                   <div className="px-4 py-2 bg-gradient-to-r from-golden to-amber-500 text-white text-sm font-medium rounded-full shadow-lg">
//                     ⭐ Our Specialty
//                   </div>
//                 </div>
//               )}

//               <div className={`flex ${service.featured ? 'lg:flex-row' : 'flex-col'} h-full`}>
//                 {/* Image Section */}
//                 <div className={`relative overflow-hidden ${service.featured ? 'lg:w-1/2' : 'h-64'}`}>
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

//                   {/* Floating Icon */}
//                   <div className="absolute top-6 left-6">
//                     <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
//                       <service.icon className="w-8 h-8 text-golden" />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className={`p-8 ${service.featured ? 'lg:w-1/2' : ''} flex flex-col h-full`}>
//                   <div className="flex-1">
//                     <div className="mb-6">
//                       <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-golden transition-colors duration-500">
//                         {service.title}
//                       </h3>
//                       <p className="text-sm font-medium text-golden/80">
//                         {service.subtitle}
//                       </p>
//                     </div>

//                     <p className="text-gray-600 leading-relaxed mb-6 text-base">
//                       {service.description}
//                     </p>

//                     {/* Features List */}
//                     <div className="space-y-3 mb-8">
//                       {service.features.map((feature, idx) => (
//                         <motion.div
//                           key={idx}
//                           initial={{ opacity: 0, x: -20 }}
//                           animate={inView ? { opacity: 1, x: 0 } : {}}
//                           transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
//                           className="flex items-center gap-3"
//                         >
//                           <div className="w-2 h-2 rounded-full bg-golden flex-shrink-0" />
//                           <span className="text-gray-700 text-sm font-medium">{feature}</span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* CTA Button - Always at bottom */}
//                   <div className="mt-auto">
//                     <button   onClick={handleRedirect} className="group/btn w-full flex items-center justify-center gap-2 px-6 py-4 bg-golden text-white font-medium rounded-xl hover:bg-golden/90 transition-all duration-300 hover:scale-[1.02]">
//                       <span>Learn More</span>
//                       <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Hover Effect Border */}
//               <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-golden/20 transition-all duration-500 pointer-events-none" />
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Bottom CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="text-center mt-20"
//         >
//           <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 w-full max-w-4xl mx-auto">
//             <div className="text-left flex-1">
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Project?</h3>
//               <p className="text-gray-600">Let&apos;s discuss how we can bring your vision to life with our comprehensive services.</p>
//             </div>
//             <button className="px-8 py-4 bg-golden text-white font-semibold rounded-xl hover:bg-golden/90 transition-all duration-300 hover:scale-105 whitespace-nowrap">
//               Get Started Today
//             </button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Building, Palette, Home, Zap, Trees,
  ClipboardList, Key, ArrowRight, Sparkles
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const services = [
  {
    icon: Building,
    title: 'Architectural Design',
    subtitle: 'Timeless & Context-Sensitive',
    description: 'We design structures that are timeless, context-sensitive, and functionally optimized. Our architectural approach integrates cultural identity with innovative thinking, ensuring spaces are not just built—but belong.',
    features: ['Concept to execution', 'Cultural integration', 'Spatial planning', 'Visual harmony'],
    gradient: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=300&fit=crop&auto=format'
  },
  {
    icon: Palette,
    title: 'Interior Design',
    subtitle: 'Aesthetic & Functional Balance',
    description: 'We craft interiors that resonate with the architecture and the people who inhabit them. Our designs reflect a careful balance of aesthetics, utility, material richness, and cultural character.',
    features: ['Material selection', 'Cultural character', 'Attention to detail', 'Purpose-driven design'],
    gradient: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format'
  },
  {
    icon: Home,
    title: 'Structural Design',
    subtitle: 'Safety & Durability First',
    description: 'Our in-house structural engineering ensures safety, durability, and alignment with architectural intent. We develop smart structural systems tailored to site conditions, building type, and project scale.',
    features: ['In-house engineering', 'Smart systems', 'Cost efficiency', 'Enhanced buildability'],
    gradient: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=300&fit=crop&auto=format'
  },
  {
    icon: Zap,
    title: 'MEP Design',
    subtitle: 'Mechanical, Electrical & Plumbing',
    description: 'We provide comprehensive MEP solutions that ensure comfort, efficiency, and sustainability. Our designs prioritize ease of maintenance, energy optimization, and compliance with modern building standards.',
    features: ['Energy optimization', 'Modern standards', 'Easy maintenance', 'Seamless integration'],
    gradient: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop&auto=format'
  },
  {
    icon: Trees,
    title: 'Landscape Design',
    subtitle: 'Nature & Architecture Harmony',
    description: 'We design outdoor environments that elevate the built space and connect it meaningfully with nature. Emphasizing native vegetation, climate sensitivity, and spatial flow.',
    features: ['Native vegetation', 'Climate sensitivity', 'Ecological value', 'Spatial flow'],
    gradient: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format'
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    subtitle: 'End-to-End Excellence',
    description: 'We offer end-to-end project management services to ensure timely, quality-driven, and cost-effective execution. Our team handles planning, procurement, scheduling, and on-site supervision.',
    features: ['Single accountability', 'Transparency', 'Quality control', 'Timeline management'],
    gradient: 'from-indigo-500 to-purple-500',
    bgColor: 'bg-indigo-50',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop&auto=format'
  },
  {
    icon: Key,
    title: 'Turnkey Design & Build',
    subtitle: 'Complete Solutions — Our Specialty',
    description: 'We specialize in turnkey solutions — managing everything from the initial sketch to final delivery. Clients benefit from integrated services, streamlined processes, and one dedicated team.',
    features: ['Initial sketch to delivery', 'Integrated services', 'Budget control', 'Design consistency'],
    gradient: 'from-amber-500 to-golden',
    bgColor: 'bg-amber-50',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&auto=format',
    featured: true
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export default function Services() {
  const router = useRouter();

  const handleRedirect = () => {
    router.push('/contact');
  };

  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.8 });

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,183,77,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={titleInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-golden/10 text-golden font-medium text-sm mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Complete Architectural Solutions
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-golden to-amber-600 font-medium">Services</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            From concept to completion, we provide comprehensive architectural services
            that transform visions into reality with precision, creativity, and excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${service.featured ? 'xl:col-span-3 lg:col-span-2' : ''}`}
            >
              {/* Gradient Hover Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Featured Tag */}
              {service.featured && (
                <div className="absolute top-6 right-6 z-20">
                  <div className="px-4 py-2 bg-gradient-to-r from-golden to-amber-500 text-white text-sm font-medium rounded-full shadow-lg">
                    ⭐ Our Specialty
                  </div>
                </div>
              )}

              <div className={`flex ${service.featured ? 'lg:flex-row' : 'flex-col'} h-full`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${service.featured ? 'lg:w-1/2' : 'h-64'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                  {/* Icon Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <div className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                      <service.icon className="w-8 h-8 text-golden" />
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className={`p-8 ${service.featured ? 'lg:w-1/2' : ''} flex flex-col h-full z-10`}>
                  <div className="flex-1">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-golden transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-sm font-medium text-golden/80">
                        {service.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-base">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: index * 0.1 + idx * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-golden flex-shrink-0" />
                          <span className="text-gray-700 text-sm font-medium">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button
                      onClick={handleRedirect}
                      className="group/btn w-full flex items-center justify-center gap-2 px-6 py-4 bg-golden text-white font-medium rounded-xl hover:bg-golden/90 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Border on Hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-golden/20 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row items-center justify-between gap-6 p-8 bg-white rounded-3xl shadow-xl border border-gray-100 w-full max-w-4xl mx-auto">
            <div className="text-left flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Start Your Project?</h3>
              <p className="text-gray-600">Let&apos;s discuss how we can bring your vision to life with our comprehensive services.</p>
            </div>
            <button
              onClick={handleRedirect}
              className="px-8 py-4 bg-golden text-white font-semibold rounded-xl hover:bg-golden/90 transition-all duration-300 hover:scale-105 whitespace-nowrap"
            >
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
