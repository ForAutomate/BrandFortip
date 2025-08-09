import React from 'react';
import { motion } from 'framer-motion';
import OurTeamPage from './OurTeamPage';
import OurValues from './OurValues';
import aboutUs1 from '../../assets/aboutus_1.svg';
import aboutUs2 from '../../assets/aboutus_2.svg';
import aboutUsVid from '../../assets/aboutus_vid.mp4';

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
              className="w-full p-4 rounded-[50px] h-auto object-cover"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400'; }}
            />
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 px-4"
        >
          <motion.div
            variants={fadeIn('down', 0.2)}
            className="bg-white shadow-sm rounded-xl p-8 hover:border-b-2 hover:border-blue-900 border-b-2 border-[#F0F4F8] transition-colors duration-500"
          >
            <h3 className="text-lg font-popsb text-blue-900 mb-2 ">WORK INTEGRITY</h3>
            <p className="text-sm text-[#1E293B] mb-4">
              We uphold the highest ethical standards in all our legal
              consultations and dealings to make sure you get the most solid
              solutions.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            className="bg-white shadow-sm rounded-xl p-8  hover:border-b-2 hover:border-blue-900 border-b-2 border-[#F0F4F8] transition-colors duration-500"
          >
            <h3 className="text-lg font-popsb text-blue-900 mb-2 ">CLIENT-CENTRIC SERVICE</h3>
            <p className="text-sm text-[#1E293B] mb-4">
              Your trusted legal partner. We're here to guide you to achieve
              your goals in a client-centric way. We stand as more than attorneys,
              we are a legal compass guiding you through the complexities in times
              of legal need.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            className="bg-white shadow-sm rounded-xl p-8  hover:border-b-2 hover:border-blue-900 border-b-2 border-[#F0F4F8] transition-colors duration-500"
          >
            <h3 className="text-lg font-popsb text-blue-900 mb-2 ">COMMUNITY INVOLVEMENT</h3>
            <p className="text-sm text-[#1E293B] mb-4">
              We are a legal firm, we try our best to develop good faith in the
              communities we serve, supporting causes that make a difference for
              everyone.
            </p>
          </motion.div>
        </motion.div>

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
              className="w-full h-auto object-cover"
              onError={(e) => { e.target.src = 'https://placehold.co/600x400'; }}
            />
          </motion.div>
          <motion.div
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-judr text-blue-900 leading-tight mb-4">
              Empowering You with Legal Solutions
            </h2>
            <p className="text-[#1E293B] text-base mb-6">
              Our dedicated team is here to guide you through every step of the way
              within your legal complexities. We stand as more than attorneys; we
              are a legal compass guiding you through the complexities in times of
              legal need.
            </p>
            <p className="text-blue-900 italic text-right font-judi">
              - BrandFort Ip
            </p>
          </motion.div>
        </motion.div>

        {/* video with Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 mb-16 p-2"
        >
          <div className="xl:rounded-[50px] rounded-3xl overflow-hidden shadow-xl">
            <video src={aboutUsVid} autoPlay loop muted className="w-full h-auto object-cover"></video>
          </div>
        </motion.div>
      </div>

      <OurTeamPage />
      <OurValues/>
    </>
  );
};

export default AboutUs;