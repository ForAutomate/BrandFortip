import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

// FAQ Section Component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "What types of intellectual property do you protect?",
      answer: "We specialize in a comprehensive range of intellectual property, including Trademarks, Copyrights, Industrial Designs, Trade Secrets, and Geographical Indications. Our expertise covers registration, enforcement, and strategic management for all these areas."
    },
    {
      id: 2,
      question: "How do I start the process of protecting my intellectual property?",
      answer: "The first step is typically a consultation where we assess your specific needs and the nature of your intellectual asset. We'll then guide you through the necessary searches, filings, and legal strategies tailored to your situation."
    },
    {
      id: 3,
      question: "What is the difference between a trademark and a copyright?",
      answer: "A trademark protects brand elements like names, logos, and slogans used to identify goods or services in the marketplace. A copyright protects original works of authorship, such as literary, dramatic, musical, and artistic works. While both are intellectual property, they protect different types of creations."
    },
    {
      id: 4,
      question: "How long does intellectual property protection last?",
      answer: "The duration of protection varies by type. Copyrights generally last for the life of the author plus 70 years. Trademarks can last indefinitely as long as they are continually used and renewed. Industrial designs and patents have specific term limits that vary by jurisdiction."
    },
    {
      id: 5,
      question: "Can you assist with international intellectual property protection?",
      answer: "Yes, we have extensive experience in assisting clients with securing and enforcing their intellectual property rights globally. We can navigate international treaties and conventions to protect your assets in multiple jurisdictions."
    },
    {
      id: 6,
      question: "What are trade secrets and how are they protected?",
      answer: "Trade secrets are confidential business information that provides a competitive edge, such as formulas, practices, designs, or compilations of information. Protection relies on maintaining secrecy through legal agreements (like NDAs) and robust internal security measures. We help you establish these frameworks and enforce your rights against misappropriation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      <>
          <div className="bg-[#F0F4F8] py-4 mt-10">
      <motion.div
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="text-sm uppercase text-sky-300 font-popr mb-2 ml-4 xl:-ml-44">Home / About / FAQ</p>
        <motion.h2
          className="text-4xl md:text-5xl xl:text-8xl font-judr text-blue-900 text-start xl:-ml-44 mb-12 xl:px-0 px-4"
          variants={itemVariants}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4 xl:px-0 px-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-100"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-popsb text-blue-900">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown
                    className={`text-blue-900`}
                    size={24}
                  />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-700 border-t border-sky-300">
                      <p className="font-popr">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>

    </div>
      {/* Top section: "We are ready to help you" and "Contact us now." */}
        <div className="flex flex-col px-8 xl:px-96 md:px-16 lg:px-24 mt-10 md:flex-row justify-between items-start md:items-end mb-16">
          <div className="md:w-2/3">
            <p className="text-4xl md:text-5xl xl:text-6xl font-serif text-blue-900 leading-tight mb-4 mt-8">
              We are ready to help you <br /> navigate any <span className="italic">legal difficulties.</span>
            </p>
          </div>
          <div className="md:w-1/3 text-left md:text-right mt-8 md:mt-0">
            <p className="text-3xl md:text-4xl xl:text-5xl font-serif text-blue-900 italic">
              → Contact us now.
            </p>
          </div>
        </div>
      </>
  );
};

export default FAQSection;
