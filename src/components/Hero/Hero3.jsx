import React from 'react';
import { motion } from 'framer-motion';
import { Award, PenLine, Brush, Globe } from 'lucide-react'; 
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import trademarkImg from '../../assets/trademark_img.jpg';
import copyrightImg from '../../assets/copyright_img.jpg';
import industrialImg from '../../assets/industrial_img.png';
import geoImg from '../../assets/geographical_img_dark.png';

const Hero3 = () => {
  const navigate = useNavigate();
  const practiceAreas = [
  {
    id: 1,
    title: "Trademark Protection",
    coverTitle: "Trademark Protection",
    coverText: "Safeguarding your brand identity and reputation in the market.",
    description: "We secure and defend your brand identity, ensuring your business name, logo, and slogans are protected from infringement. Our services include comprehensive clearance searches, registration, portfolio management, and aggressive enforcement against unauthorized use to maintain your market distinction.",
    icon: Award, 
    bgImage: trademarkImg
  },
  {
    id: 2,
    title: "Copyright Protection",
    coverTitle: "Copyright Protection",
    coverText: "Protecting your original creative works and artistic expressions.",
    description: "Our team assists creators and businesses in protecting their original works of authorship, including literary, dramatic, musical, artistic, and architectural creations. We handle copyright registration, licensing agreements, and enforcement actions to prevent unauthorized reproduction or distribution, ensuring your creative rights are secure.",
    icon: PenLine, 
    bgImage: copyrightImg
  },
  {
    id: 3,
    title: "Industrial Design Protection",
    coverTitle: "Industrial Design",
    coverText: "Securing the unique aesthetic and visual appeal of your products.",
    description: "We specialize in protecting the aesthetic and unique visual features of your products, such as shape, configuration, pattern, or ornamentation. Our services include preparing and filing design patent applications to secure exclusive rights over your industrial creations, giving you a crucial competitive edge in design-driven markets.",
    icon: Brush, 
    bgImage: industrialImg
  },
{
  id: 5,
  title: "Geographical Indication",
  coverTitle: "Geographical Indication",
  coverText: "Protecting products with a specific geographical origin and quality.",
  description: "We help producers and associations protect products whose quality, reputation, or other characteristics are linked to a specific geographical origin. Our services include advising on registration, managing applications, and enforcing rights to prevent misuse or imitation, thereby preserving the value and authenticity of your traditional products.",
  icon: Globe, 
  bgImage: geoImg
}
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="max-w-[80%] mx-auto p-6 mb-40">
      {/* Header */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex justify-between items-start mb-12">
        <motion.div variants={cardVariants}>
          <h1 className="text-3xl md:text-4xl xl:text-8xl font-judr text-blue-900 mb-2">
            Our Legal
          </h1>
          <h2 className="text-3xl md:text-4xl xl:text-8xl font-judr text-blue-900">
            Practice Areas  
          </h2>
        </motion.div>
        <motion.button 
        onClick={() => navigate("/services")}
        variants={cardVariants}
        className="xl:px-10 px-4 xl:py-4 py-2 md:px-6 md:py-4 border-[2px] border-blue-900 rounded-full xl:text-md text-sm font-popr text-blue-900 hover:text-white hover:bg-blue-900 xl:mt-32 mt-10 duration-300 transition-colors ">
          Read More About Our Practice Areas
        </motion.button>
      </motion.div>

      {/* Grid with Framer Motion animations */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {practiceAreas.map((area) => {
          const IconComponent = area.icon;
          return (
            <motion.div
              key={area.id}
              variants={cardVariants}
              className="group relative h-64 md:h-72 xl:h-96 hover:rounded-se-[190px] overflow-hidden cursor-pointer transition-all duration-300"
              style={{
                backgroundImage: `url(${area.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              whileHover={{ scale: 1.03 }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-[#bae9ff] bg-opacity-100 group-hover:bg-opacity-0 transition-all duration-300"></div>
              
              {/* Cover content (visible by default) */}
              <div className="absolute inset-0 flex flex-col justify-end font-popr transition-opacity duration-300 group-hover:opacity-0 p-6">
                <div className="text-left text-blue-900">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center border-blue-900 border">
                      <IconComponent size={28} className="text-blue-900"/>
                    </div>
                  </div>
                  <h3 className="text-xl md:text-3xl xl:text-5xl font-judr mb-2">
                    {area.coverTitle}
                  </h3>
                  <p className="text-sm xl:text-lg font-popr text-[#212529]">
                    {area.coverText}
                  </p>
                </div>
              </div>

              {/* Main content (visible on hover) */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6 md:p-8 flex flex-col justify-between bg-slate-800/50">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl md:text-3xl xl:text-4xl font-judr text-white mb-4">
                    {area.title}
                  </h3>
                </div>
                
                <div>
                  <p className="text-white text-sm md:text-base leading-relaxed mb-4">
                    {area.description}
                  </p>
                </div>  
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Hero3;