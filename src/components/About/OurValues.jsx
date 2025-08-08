import React from 'react';
import { motion } from 'framer-motion';
import { Award, Handshake, Lightbulb, TrendingUp, Users, Scale, Shield, Landmark } from 'lucide-react';

const OurValues = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0,transition: {
        duration: 0.8,} }
  };

  const values = [
    {
      id: 1,
      title: "Integrity",
      description: "We operate with the highest ethical standards and transparency, building a foundation of trust with every client.",
      icon: Handshake
    },
    {
      id: 2,
      title: "Expertise",
      description: "Our team brings deep, specialized knowledge in intellectual property law to provide you with strategic and effective counsel.",
      icon: Landmark
    },
    {
      id: 3,
      title: "Client-Centric",
      description: "Your needs are our priority. We tailor our approach to your unique goals, ensuring a personalized and successful partnership.",
      icon: Users
    },
    {
      id: 4,
      title: "Innovation",
      description: "We stay ahead of legal trends and technology to offer forward-thinking solutions that protect your future.",
      icon: Lightbulb
    }
  ];

    return (
    <div className="bg-[#F0F4F8] text-[#1E293B] font-popr">
      {/* Our Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <p className="text-sm uppercase text-sky-300 font-popr mb-2">Home/About/Values</p>
        <motion.h2
          className="text-3xl md:text-6xl xl:text-8xl font-judr text-start text-blue-900 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Core Values
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value) => (
            <motion.div
              key={value.id}
              variants={itemVariants}
              className="bg-white p-6 rounded-2xl shadow-sm text-center transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:border-b-2 hover:border-blue-900 border-b-2 border-white"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E6EAF0] text-blue-900 mx-auto mb-4">
                <value.icon size={32} />
              </div>
              <h3 className="text-xl font-popsb uppercase text-blue-900 mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurValues;
