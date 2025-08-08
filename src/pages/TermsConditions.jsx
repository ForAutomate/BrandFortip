import React from 'react';
import { motion } from 'framer-motion';

const TermsConditions = () => {
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
    <div className="bg-[#F0F4F8] text-gray-700 font-popr py-16 md:py-24">
      <motion.div
        className="container mx-auto px-6 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Heading */}
        <motion.h1  
          className="text-6xl md:text-7xl xl:text-8xl font-judr text-blue-900 text-start mb-12 mt-10"
          variants={itemVariants}
        >
          Terms & Conditions
        </motion.h1>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            1. Introduction
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            Welcome to BrandFort IP. These Terms and Conditions ("Terms") govern your use of our website, www.brandfortip.com, and the services we provide. By accessing our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our website.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            2. Use of the Website
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            The content on this website is for informational purposes only and does not constitute legal advice. Your use of this website does not create an attorney-client relationship between you and BrandFort IP.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            3. Intellectual Property Rights
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            All content on this website, including text, graphics, logos, and images, is the property of BrandFort IP or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on this website without our prior written permission.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            4. Prohibited Uses
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            You agree not to use the website for any unlawful purpose or in any way that could damage, disable, overburden, or impair the website. You agree not to attempt to gain unauthorized access to any part of the website or to any of our systems or networks.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            5. Disclaimers
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            The information on our website is provided "as is" without any warranties, express or implied. BrandFort IP does not warrant that the information is accurate, complete, or current.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            6. Limitation of Liability
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            BrandFort IP will not be liable for any damages of any kind arising from the use of this website, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            7. Indemnification
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            You agree to indemnify, defend, and hold harmless BrandFort IP, its officers, directors, employees, agents, and third parties, for any losses, costs, liabilities, and expenses (including reasonable attorney's fees) relating to or arising out of your use of or inability to use the website or services.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            8. Governing Law
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which BrandFort IP operates, without regard to its conflict of law provisions.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            9. Changes to These Terms
          </h2>
          <p className="leading-relaxed font-popr">
            We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the website after any such changes constitutes your acceptance of the new Terms.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            10. Contact Us
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="leading-relaxed font-popsb text-blue-900">
            BrandFort IP
          </p>
          <ul className="list-disc list-inside ml-4 leading-relaxed font-popr">
            <li>By email: info@brandfortip.com</li>
            <li>By phone: (+123) 456 - 7890</li>
            <li>By mail: Plot no B-16, Saraswati enclave, sector 143  Noida (UP) Pincode:- 201306</li>
          </ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default TermsConditions;