import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Handshake, Users, Scale, TrendingUp, Compass } from 'lucide-react';

// "What Makes Us Stand Out" component
const WhatMakesUsStandOut = () => {
  const features = [
    {
      id: 1,
      title: "Unwavering Integrity",
      description: "We operate with the highest ethical standards, providing honest advice and transparent communication in every client relationship.",
      icon: Handshake
    },
    {
      id: 2,
      title: "Client-Focused Approach",
      description: "Your goals are our priority. We take the time to understand your unique needs, crafting tailored strategies to achieve beneficial outcomes.",
      icon: Users
    },
    {
      id: 3,
      title: "Specialized Expertise",
      description: "Our team consists of seasoned attorneys with focused knowledge in intellectual property, ensuring your valuable assets are in capable hands.",
      icon: Lightbulb
    },
    {
      id: 4,
      title: "Proven Track Record",
      description: "We have a history of delivering successful results for our clients, providing you with the confidence that your case is in a position to win.",
      icon: TrendingUp
    },
    {
      id: 5,
      title: "Clear Communication",
      description: "We believe in keeping our clients fully informed. We simplify complex legal issues and ensure you always know the status of your case.",
      icon: Compass
    },
    {
      id: 6,
      title: "Fair & Transparent Pricing",
      description: "We offer clear, competitive pricing structures, so you can focus on your case without worrying about unexpected costs or hidden fees.",
      icon: Scale
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-6 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Left-hand side: Header and text */}
        <motion.div
          className="lg:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
            What Makes Us Stand Out
          </h2>
          <p className="text-md md:text-lg text-gray-600 font-sans">
            Our firm is built on a foundation of integrity, expertise, and a deep commitment to our clients. We don't just handle cases; we build relationships.
          </p>
        </motion.div>

        {/* Right-hand side: Grid of features */}
        <motion.div
          className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="p-6 bg-white rounded-2xl shadow-lg border border-stone-100 transition-shadow duration-300 hover:shadow-xl"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-100 text-yellow-800 mr-4">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="text-xl font-semibold font-serif text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600 font-sans">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
