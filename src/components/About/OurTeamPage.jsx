import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const OurTeamPage = () => {
  const teamMembers = [
    {
      name: 'Sangeeta Kumari',
      title: 'Owner',
      expertise: 'Strategic Legal Planning, Business Law',
      image: 'src/assets/female_team-2.svg',
    },
    {
      name: 'Dhruv',
      title: 'Assistant Manager',
      expertise: 'Real Estate Law, Corporate Governance',
      image: 'src/assets/male_team-2.svg',
    },
    {
      name: 'Komal',
      title: 'Team Leader',
      expertise: 'Family Law, Mediation, Family Disputes',
      image: 'src/assets/female_team-2.svg',
    },
    {
      name: 'Lucky',
      title: 'Senior Associate',
      expertise: 'Litigation, Intellectual Property',
      image: 'src/assets/male_team-2.svg',
    },
    {
      name: 'Sanjana Sharma',
      title: 'Associate',
      expertise: 'Environmental Law, Public Policy',
      image: 'src/assets/female_team-2.svg',
    },
  ];

  const fadeIn = (direction, delay) => ({
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'up' ? -100 : direction === 'down' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      },
    },
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto my-8 md:my-16 py-10">
      {/* Header Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-12 md:mb-16 p-4">
        <motion.div
          variants={fadeIn('left', 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase text-sky-300 font-popr mb-2">Home / About / Team</p>
          <h1 className="text-4xl md:text-6xl xl:text-8xl font-judr text-blue-900 leading-tight">
            Meet Our Legal Experts
          </h1>
        </motion.div>
        <motion.div
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-start md:items-end text-right"
        >
          <p className="text-[#1E293B] md:mt-20 xl:mt-40">
            Meet the powerhouses of justice where seasoned attorneys converge to form a formidable force dedicated to safeguard your rights with excellence.
          </p>
        </motion.div>
      </div>

      {/* Team Members Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            variants={fadeIn('down', index * 0.2)}
            className="bg-[#f0f4f8] rounded-xl p-4"
          >
            <div className="rounded-e-[50px] rounded-ss-[50px] overflow-hidden mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[500px] object-cover"
                onError={(e) => { e.target.src = `https://placehold.co/400x500/e5e7eb/6b7280?text=${member.name.replace(' ', '+')}`; }}
              />
            </div>
            <div className="text-start">
              <h3 className="text-4xl md:text-3xl xl:text-5xl font-judr text-blue-900 mb-1">{member.name}</h3>
              <div className='w-full border-[1.6px] border-sky-300 my-4'></div>
              <p className="text-xl font-popr text-sky-300 mb-2">{member.title}</p>
              <p className="text-md font-popr text-gray-500">{member.expertise}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default OurTeamPage;
