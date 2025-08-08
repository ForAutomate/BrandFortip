import React from 'react';
import { motion } from 'framer-motion';
import { Award, PenLine, Brush, LockKeyhole, ArrowRight, Globe } from 'lucide-react';
import trademark from '../../assets/trademark_img.jpg'
import industrial from '../../assets/industrial_img.png'
import copyright from '../../assets/copyright_img.jpg'
import geo_img from '../../assets/geographical_img.png'
import { useNavigate } from 'react-router-dom';

const ServicesPage = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: "Trademark Protection",
      tagline: "Your brand is your identity. Let's protect it.",
      description: "We secure and defend your brand identity, ensuring your business name, logo, and slogans are protected from infringement. Our services include comprehensive clearance searches, registration, portfolio management, and aggressive enforcement against unauthorized use to maintain your market distinction.",
      image: trademark,
      imagePosition: 'right', 
      offerings: [
        {
          heading: 'Trademark Clearance Searches',
          text: 'Perform thorough searches to ensure your desired trademark is available and does not infringe on existing marks.'
        },
        {
          heading: 'Trademark Filing & Registration',
          text: 'Prepare and file trademark applications with the appropriate authorities, guiding you through the registration process.'
        },
        {
          heading: 'Opposition & Cancellation Proceedings',
          text: 'Represent your interests in disputes over trademark registrations, defending your rights against opposition.'
        },
        {
          heading: 'Trademark Watch Services',
          text: 'Monitor the marketplace for potential infringements and unauthorized use of your trademarks.'
        },
        {
          heading: 'Trademark Licensing & Assignments',
          text: 'Manage the licensing and transfer of trademark rights to protect and monetize your brand assets.'
        },
        {
          heading: 'Trademark Objection',
          text: 'We handle objections from the Registrar or third parties, building a strong case to proceed with registration.'
        },
      ],
      secondaryImage: "src/assets/legal_protection.png",
      punchline: "Your legacy is built on trust, and we secure it."
    },
    {
      id: 2,
      title: "Industrial Design Protection",
      tagline: "Where creativity meets protection.",
      description: "We specialize in protecting the aesthetic and unique visual features of your products, such as shape, configuration, pattern, or ornamentation. Our services include preparing and filing design patent applications to secure exclusive rights over your industrial creations, giving you a crucial competitive edge in design-driven markets.",
      image: industrial,
      imagePosition: 'left', // 'right' or 'left'
      offerings: [
        {
          heading: 'Design Filing & Registration',
          text: 'We handle the entire process of filing and registering your industrial designs to secure exclusive rights.'
        },
        {
          heading: 'Design Portfolio Management',
          text: 'Manage and maintain your design rights portfolio to ensure continuous protection across different markets.'
        },
        {
          heading: 'Infringement Litigation',
          text: 'Representing your interests in court to defend against unauthorized use or copying of your designs.'
        },
        {
          heading: 'Design Searches',
          text: 'Conducting thorough searches to ensure the uniqueness and originality of your industrial design before filing.'
        },
        {
          heading: 'Design Renewal Services',
          text: 'Ensuring your design registrations are renewed in time to maintain their legal protection.'
        },
      ],
      secondaryImage: "src/assets/design_innovation.png",
      punchline: "The aesthetic of your innovation deserves our expertise."
    },
    {
      id: 3,
      title: "Copyright Protection",
      tagline: "Protecting the heart of your creation.",
      description: "Our team assists creators and businesses in protecting their original works of authorship, including literary, dramatic, musical, artistic, and architectural creations. We handle copyright registration, licensing agreements, and enforcement actions to prevent unauthorized reproduction or distribution, ensuring your creative rights are secure.",
      image: copyright,
      imagePosition: 'right', // 'right' or 'left'
      offerings: [
        {
          heading: 'Copyright Registration',
          text: 'Filing and managing copyright applications for your original works with the relevant authorities.'
        },
        {
          heading: 'Licensing & Assignments',
          text: 'Drafting and negotiating licensing agreements to monetize your creative works.'
        },
        {
          heading: 'Enforcement & Litigation',
          text: 'Taking legal action against unauthorized use or infringement of your copyrights.'
        },
        {
          heading: 'Copyright Searches',
          text: 'Performing due diligence to confirm the originality of your work and avoid potential conflicts.'
        },
        {
          heading: 'Consultation & Advisory',
          text: 'Providing expert legal advice on all matters related to copyright law and protection.'
        },
      ],
      secondaryImage: "src/assets/ip_security.png",
      punchline: "Your originality is your power; we're here to defend it."
    },
    {
      id: 4,
      title: "Geographical Indication",
      tagline: "Preserving the authenticity of your traditional products.",
      description: "We help producers and associations protect products whose quality, reputation, or other characteristics are linked to a specific geographical origin. Our services include advising on registration, managing applications, and enforcing rights to prevent misuse or imitation, thereby preserving the value and authenticity of your traditional products.",
      image: geo_img, 
      imagePosition: 'left',
      offerings: [
        {
          heading: 'Registration & Filing',
          text: 'Assisting with the entire process of filing and registering your Geographical Indication with the relevant authorities.'
        },
        {
          heading: 'Enforcement & Litigation',
          text: 'Representing your interests in legal disputes to prevent the unauthorized use or imitation of your Geographical Indication.'
        },
        {
          heading: 'Consultation & Advising',
          text: 'Providing strategic advice on the best practices for protecting, maintaining, and commercializing your GI rights.'
        },
        {
          heading: 'International Protection',
          text: 'Extending your Geographical Indication protection to international markets through various treaties and agreements.'
        },
        {
          heading: 'Audit & Compliance',
          text: 'Ensuring your product continues to meet the criteria required to maintain its Geographical Indication status.'
        },
      ],
      secondaryImage: "src/assets/heritage_img.png", 
      punchline: "The heritage of your product deserves our protection."
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="xl:px-36 px-4 my-20 md:my-28 xl:my-28">
      {/* Main Header Section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-start mb-12 md:mb-16 mt-10"
      >
        <h1 className="text-4xl md:text-6xl xl:text-8xl font-judr text-blue-900 leading-tight">
          Our Comprehensive <br/> Legal Services
        </h1>
        <p className="mt-4 text-lg text-[#212529] font-popr max-w-2xl">
          Discover tailored legal solutions crafted for your every need. We navigate the complexities and ensure success in every aspect of your legal journey.
        </p>
      </motion.div>

      {/* Services Sections */}
      {services.map((service, index) => (
        <motion.div
          key={index}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className={`py-12 md:py-16 border-t border-blue-200 ${index === services.length - 1 ? 'border-b' : ''}`}
        >
          {/* Main Hero Section for each service */}
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 ${service.imagePosition === 'left' ? 'md:grid-flow-col' : ''}`}>
            <motion.div 
              initial={{ opacity: 0, x: service.imagePosition === 'left' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`${service.imagePosition === 'left' ? 'md:col-start-2' : ''}`}>
              <p className="text-sm uppercase text-sky-300 mb-2">Home / Services / {service.title}</p>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-judr text-blue-900 leading-tight">
                {service.title}
              </h2>
              <p className="mt-2 text-lg text-[#212529] font-popr">"{service.tagline}"</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={` overflow-hidden rounded-[50px] shadow-xl ${service.imagePosition === 'left' ? 'md:col-start-1 md:row-start-1' : ''}`}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full xl:h-[400px] h-[250px] object-cover "
                onError={(e) => { e.target.src = 'https://placehold.co/1200x600'; }}
              />
            </motion.div>
          </div>

          {/* Detailed Offerings Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="my-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <h3 className="text-4xl font-judr text-blue-900 mb-4 md:col-span-2">Our Approach:</h3>
              {service.offerings.map((offering, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                  className="mb-6 p-6 border-s-4 border-blue-900 shadow-lg">
                  <h4 className="text-xl text-blue-900 mb-2">{offering.heading}</h4>
                  <p className="text-base text-[#212529]">{offering.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Concluding Section with Image and Punchline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={` overflow-hidden rounded-[50px] shadow-xl ${service.imagePosition === 'right' ? 'md:order-2' : 'md:order-1'}`}>
              <img
                src={service.secondaryImage}
                alt={service.title}
                className="w-full xl:h-[400px] h-[250px] object-cover "
                onError={(e) => { e.target.src = 'https://placehold.co/800x400'; }}
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: service.imagePosition === 'right' ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`${service.imagePosition === 'right' ? 'md:order-1' : 'md:order-2'} text-center md:text-left`}>
              <h3 className="text-2xl md:text-3xl font-judr text-blue-900 leading-tight">
                {service.punchline}
              </h3>
              <button onClick={() => navigate("/contact")} className="mt-2 inline-flex items-center font-popr text-blue-900 text-2xl border-2 py-4 px-6 rounded-full border-blue-900 hover:bg-blue-900 hover:text-white duration-500 transition-colors">
                Contact Us Now <ArrowRight size={16} className="ml-2" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesPage;