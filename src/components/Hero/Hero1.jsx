import React from "react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6"
import { ArrowUpRight } from 'lucide-react';
import { slideUp } from "../../utility/animation";
import { useNavigate } from "react-router-dom";
import ladyJustice from '../../assets/lady_justice.png';

const Hero1 = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      {/* Background Images */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:min-h-[600px] xl:mb-4 relative z-10">
          {/* Text content section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pl-0 md:py-14 md:px-10 xl:-ml-28 md:items-start md:col-span-2">
          <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl md:text-4xl xl:text-8xl tracking-tight font-judi text-blue-900"
            >
              Legal <span className="font-judr">Expertise Work with</span> Integrity  
              <span className="font-judr"> and Beneficial Results</span>
            </motion.h1>
            <motion.p
          variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm xl:text-lg max-w-2xl text-[#1E293B]"
            >
              With unwavering expertise, utmost integrity, and a proven track record, we specialize in safeguarding your trademarks, copyrights, industrial designs, and trade secrets, guiding you through every complexity.
            </motion.p>
            <motion.div 
            variants={slideUp(0.8)}
            initial="initial"
            animate="animate"
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
          <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 text-lg font-medium text-white bg-blue-900 rounded-full transition-all duration-300 border-blue-900 border-[2px] hover:bg-transparent hover:text-blue-900 shadow-lg w-full sm:w-auto font-popr"
          onClick={() => navigate("/contact")}>
            Get Started
          </motion.button>
          <motion.a className="flex items-center text-lg font-medium text-blue-900 font-popr">
            Book Consultation
            <ArrowUpRight size={20} className="ml-2" />
          </motion.a>
        </motion.div>
          </div>
          {/* Hero Video section */}
          <div className="flex justify-end items-center xl:mt-20">
            <motion.div
          initial={{
                opacity: 0,
                x: 100,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-[50%] md:w-[550px] xl:w-[750px] rounded-2xl"
            >
            <img src={ladyJustice} alt="lady justice" className="w-[100%] xl:ml-auto md:-mr-20 -translate-x-20 mt-4 contrast-150" />
            </motion.div>
          </div>
          {/* Arrow */}
        <div className='md:flex justify-center items-center -mt-12 translate-x-96 py-2 hidden text-blue-900'>
          <FaArrowDown className='p-[1vw] xl:text-7xl text-3xl cursor-pointer rounded-full hover:bg-zinc-300/30' onClick={() => {
            window.scrollBy({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;