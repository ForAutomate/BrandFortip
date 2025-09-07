import React from 'react';
import { motion } from 'framer-motion';
import OurTeamPage from './OurTeamPage';
import aboutUs1 from '../../assets/aboutus_1.svg';
import aboutUs2 from '../../assets/aboutus_2.svg';
import aboutUsVid from '../../assets/aboutus_vid.webm';

const AboutUs = () => {
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
    <>
      <div className="max-w-7xl mx-auto my-8 md:my-16">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 mt-24">
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase text-sky-300 font-popr mb-2 ml-4">Home / About</p>
            <h1 className="text-4xl md:text-6xl xl:text-8xl font-judr text-blue-900 leading-tight ml-4">
              Your Trusted <span className='font-judi'>Legal Partner</span>
            </h1>
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="overflow-hidden"
          >
            <img
              src={aboutUs1}
              alt="Trusted Legal Partners"
              className="w-full p-4 rounded-[50px] h-auto object-cover pointer-events-none"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400'; }}
            />
          </motion.div>
        </motion.div>

        {/* About Section */}
        <div className="mb-16 px-4">
          <h2 className="text-4xl md:text-6xl font-judr text-blue-900 leading-tight mb-8 text-center">
            About Our Firm
          </h2>
          <motion.div
            className="max-w-3xl mx-auto"
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white shadow-sm rounded-xl p-8 hover:border-b-2 hover:border-blue-900 border-b-2 border-[#F0F4F8] transition-colors duration-500">
              <p className="text-xl  text-[#1E293B] mb-4">
                We are a boutique intellectual property law firm, based in NOIDA, INDIA focused exclusively on protecting and enforcing intellectual property rights. Our services cover the full spectrum of IP matters, including trademark filing and prosecution, opposition and cancellation actions, industrial design applications, copyright protection, and geographical indication cases.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team/Mission Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 bg-[#F0F4F8] p-8 rounded-lg">
          <motion.div
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden"
          >
            <img
              src={aboutUs2}
              alt="Our Dedicated Team"
              className="w-full h-auto object-cover pointer-events-none"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400'; }}
            />
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-judr text-blue-900 leading-tight mb-4">
              Our Team & Expertise
            </h2>
            <p className="text-[#1E293B] text-xl mb-6">
              Our team is composed of dedicated lawyers and IP professionals with extensive expertise in intellectual property law. We work hand in hand with the Intellectual Property Office to ensure your rights are safeguarded at every stage.
            </p>
            <p className="text-blue-900 italic text-right font-judi">
              - BrandFort Ip
            </p>
          </motion.div>
        </motion.div>

                {/* Our Mission Section */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32 px-4 text-center"
        >
           <h2 className="text-4xl md:text-6xl font-judr text-blue-900 leading-tight mb-4">Our Mission</h2>
           <p className="text-xl text-[#1E293B] max-w-4xl mx-auto">
             We believe every idea has value and deserves strong protection. For many innovators, the process of securing IP rights can feel overwhelming and that's where we step in. Our mission is to make the process clear, efficient, and tailored to your needs, while keeping costs practical and transparent.
           </p>
        </motion.div>

        {/* Our Client-Centric Approach Section */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 px-4 text-center"
        >
           <h2 className="text-4xl md:text-6xl font-judr text-blue-900 leading-tight mb-4">Our Client-Centric Approach</h2>
           <p className="text-xl text-[#1E293B] max-w-4xl mx-auto">
             While most firms highlight their technical expertise, what truly sets us apart is the way we engage with our clients. We see every matter as personal, treating your concerns as if they were our own. This genuine sense of ownership and partnership drives us to deliver the highest level of service and makes us proud of the work we do.
           </p>
        </motion.div>


        {/* video with Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 mb-16 p-2"
        >
          <div className="xl:rounded-[50px] rounded-3xl overflow-hidden shadow-xl">
            <video src={aboutUsVid} autoPlay loop muted className="w-full h-auto object-cover pointer-events-none"></video>
          </div>
        </motion.div>
      </div>

      <OurTeamPage />
    </>
  );
};

export default AboutUs;