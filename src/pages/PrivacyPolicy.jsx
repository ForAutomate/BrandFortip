import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
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
          Disclaimer / <br/> Privacy Policy
        </motion.h1>

        {/* Disclaimer Section */}
        <motion.h1
          className="text-4xl md:text-5xl xl:text-6xl font-judr text-blue-900 text-start mb-12"
          variants={itemVariants}
        >
          Disclaimer
        </motion.h1>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            1. General Information Disclaimer
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            The content provided on this website, www.brandfortip.com, is for informational purposes only. It is not, nor is it intended to be, legal advice. BrandFort IP strives to offer accurate, updated information; however, the law is constantly evolving, and no information on this site should be taken as guaranteed to be current or applicable to specific individual cases.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            2. No Attorney-Client Relationship
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            Accessing or using this website, or any form of communication sent to BrandFort IP through this site or via email, does not establish an attorney-client relationship. An attorney-client relationship can only be created through a signed agreement with BrandFort IP. Without an attorney-client relationship, any communication sent through this website is not privileged or confidential. Potential clients are encouraged to reach out directly to discuss specific legal issues.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            3. No Reliance on Website Content
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            The materials on this website are meant for general informational purposes only. BrandFort IP cannot and does not guarantee that the information presented is accurate, complete, or applicable to individual circumstances. Visitors should not rely on the information here as a substitute for professional legal advice. We encourage readers to consult a licensed attorney regarding their specific legal matters.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            4. Limitation of Liability
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            BrandFort IP disclaims all liability for any loss or damages that may arise from reliance on information on this website. We are not responsible for any errors or omissions, nor for the results obtained from the use of this information. Any use of the information on this website is at the user’s own risk.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            5. External Links
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            This website may contain links to external sites for the convenience of our users. BrandFort IP is not responsible for the content of any external sites, nor does it endorse, guarantee, or approve any information or statements presented on those sites. Following links to external sites from www.brandfortip.com is at the user’s own discretion.
          </p>
        </motion.section>

        {/* Privacy Policy Section */}
        <motion.h1
          className="text-4xl md:text-5xl xl:text-6xl font-judr text-blue-900 text-start mb-12 mt-24"
          variants={itemVariants}
        >
          Privacy Policy
        </motion.h1>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            1. Introduction
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            At BrandFort IP, your privacy is of utmost importance. This Privacy Policy outlines our practices in handling, collecting, and using your personal information. By accessing our website or utilizing our legal services, you consent to the data practices described in this policy.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            2. Information We Collect
          </h2>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Personal Information
          </h3>
          <p className="leading-relaxed mb-4 font-popr">
            When you contact us, we may collect information such as your name, email address, phone number, and any other details you voluntarily provide.
          </p>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Professional Information
          </h3>
          <p className="leading-relaxed mb-4 font-popr">
            For legal purposes, we may collect professional information relevant to your case or inquiry, such as your business information if you are seeking advice related to intellectual property for an organization.
          </p>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Usage Data
          </h3>
          <p className="leading-relaxed font-popr">
            Our website may automatically collect information about your interactions with it, including your IP address, browser type, pages visited, and the dates and times of visits. This data helps us improve our website's functionality and user experience.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            3. How We Use Your Information
          </h2>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Service Provision
          </h3>
          <p className="leading-relaxed mb-4 font-popr">
            We use your personal information to provide, improve, and personalize our legal services, respond to your inquiries, and communicate with you about ongoing cases.
          </p>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Compliance
          </h3>
          <p className="leading-relaxed mb-4 font-popr">
            We may use collected information to meet legal and regulatory obligations, ensuring that our services comply with applicable law.
          </p>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Website Improvement
          </h3>
          <p className="leading-relaxed mb-4 font-popr">
            Usage data is collected to understand how visitors interact with our website. This information is used to enhance user experience, diagnose potential problems, and analyze trends.
          </p>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Marketing and Communication
          </h3>
          <p className="leading-relaxed font-popr">
            With your permission, we may send you updates, newsletters, or other communications related to our services or relevant legal topics. You may unsubscribe from these communications at any time.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            4. Information Sharing and Disclosure
          </h2>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Service Providers
          </h3>
          <p className="leading-relaxed mb-4 font-popr">
            We may share your information with third-party service providers who assist us in providing our services. These providers are obligated to protect your information and may only use it for the specific purposes we assign to them.
          </p>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Legal Compliance and Protection
          </h3>
          <p className="leading-relaxed mb-4 font-popr">
            In certain circumstances, we may disclose your information if required by law or to comply with legal processes. We may also disclose information to protect the rights, property, or safety of BrandFort IP, its clients, and others.
          </p>
          <h3 className="text-xl font-judr text-blue-900 mb-2">
            Consent-Based Sharing
          </h3>
          <p className="leading-relaxed font-popr">
            If you provide us explicit consent, we may share your information for purposes you approve of.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            5. Data Security
          </h2>
          <p className="leading-relaxed font-popr">
            BrandFort IP takes reasonable steps to protect the personal information you provide against unauthorized access, use, alteration, or destruction. Our data security measures include, but are not limited to, using secure servers, encryption, and restricted access to sensitive data. However, no online data transmission is entirely secure, and we cannot guarantee absolute security of your information.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <p className="leading-relaxed font-popr">
            Our website may use cookies and similar tracking technologies to analyze trends, administer the site, track users’ movements around the website, and gather demographic information. You can control the use of cookies through your browser settings, although disabling cookies may limit some functionality of the website.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            7. Your Data Rights
          </h2>
          <p className="leading-relaxed font-popr">
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc list-inside ml-4 leading-relaxed font-popr">
            <li>Access the personal information we hold about you</li>
            <li>Request corrections to any inaccuracies in your information</li>
            <li>Request deletion of your personal information, subject to certain conditions</li>
            <li>Withdraw your consent to data processing</li>
          </ul>
          <p className="leading-relaxed mt-4 font-popr">
            For requests or questions about these rights, please contact us at [Contact details].
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            8. Data Retention
          </h2>
          <p className="leading-relaxed font-popr">
            We retain personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law. Once data is no longer needed, it is securely deleted or anonymized.
          </p>
        </motion.section>

        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            9. Changes to This Policy
          </h2>
          <p className="leading-relaxed font-popr">
            We may update this Privacy Policy periodically to reflect changes in our practices, legal requirements, or services. Updates will be posted on our website with the effective date. We encourage you to review this policy periodically for any updates.
          </p>
        </motion.section>

        <motion.section variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-judr text-blue-900 mb-4">
            10. Contact Us
          </h2>
          <p className="leading-relaxed mb-4 font-popr">
            If you have any questions regarding our Disclaimer or Privacy Policy, please reach out to us at:
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

export default PrivacyPolicy;