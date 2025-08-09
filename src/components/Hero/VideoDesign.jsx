import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import { slideUp } from "../../utility/animation";
import { useNavigate } from "react-router-dom";
import heroVideo from '../../assets/hero_video.mp4';

const VideoDesign = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        setIsMuted(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-1 min-h-[700px] md:min-h-[600px] xl:mb-4 relative z-10">
          {/* Video section */}
          <div 
            className="flex justify-center items-center relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsMuted(!isMuted)}
          >
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full rounded-2xl"
            >
              <video 
                ref={videoRef}
                src={heroVideo} 
                autoPlay 
                loop 
                muted={isMuted} 
                className="w-full xl:h-[600px] object-cover rounded-2xl"
              />
            </motion.div>
            {isHovered && (
              <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 rounded-2xl cursor-pointer">
                <p className="text-white text-lg font-popr">Click for audio</p>
              </div>
            )}
          </div>
          {/* Text content section */}
          <div className="space-y-5 flex flex-col justify-center items-center text-center py-10 px-10 md:px-10">
            <motion.h1
              variants={slideUp(0.2)}
              initial="initial"
              animate="animate"
              className="text-4xl md:text-4xl xl:text-5xl tracking-tight font-judr text-blue-900"
            >
              Expert Legal Guidance in Intellectual Property Law for a World Driven by Creativity and Technology
            </motion.h1>
            <motion.p
              variants={slideUp(0.5)}
              initial="initial"
              animate="animate"
              className="text-sm xl:text-lg font-popr max-w-2xl text-[#1E293B]"
            >
              Securing Your Intellectual Property, Empowering Your Growth
            </motion.p>
            <motion.div 
              variants={slideUp(0.8)}
              initial="initial"
              animate="animate"
              className="flex flex-col sm:flex-row items-center justify-center md:justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 xl:text-lg text-md text-white bg-blue-900 rounded-full transition-all duration-300 border-blue-900 border-[2px] hover:bg-transparent hover:text-blue-900 shadow-lg w-full sm:w-auto font-popr"
                onClick={() => navigate('/contact')}
              >
                Schedule Your Consultation Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDesign;