import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!"); // Using alert for now, consider custom modal
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message. Please try again later."); // Using alert for now
        }
      );
  };

  return (
    <div className="bg-[#F0F4F8] py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* Top section: "We are ready to help you" and "Contact us now." */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
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

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center md:text-left">
          <div>
            <p className="text-sm font-sans text-sky-300 mb-1">Email Address</p>
            <p className="text-lg font-sans text-blue-900">info@brandfortip.com</p>
          </div>
          <div>
            <p className="text-sm font-sans text-sky-300 mb-1">Phone Number</p>
            <p className="text-lg font-sans text-blue-900">(+123) 456 - 7890</p>
          </div>
          <div>
            <p className="text-sm font-sans text-sky-300 mb-1">Company Address</p>
            <p className="text-lg font-sans text-blue-900">Plot no B-16, Saraswati enclave, sector 143  Noida (UP) Pincode:- 201306</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="space-y-4 mb-12">
          <p className="text-4xl md:text-5xl xl:text-7xl font-serif text-blue-900 leading-tight">
            Send Us a Message
          </p>
          <p className="text-slate-800 text-lg">
            We'll get back to you as soon as possible.
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="space-y-6 bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" name="user_name" placeholder="Name" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900" />
            <input type="email" name="user_email" placeholder="Email" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900" />
          </div>
          <textarea name="message" placeholder="Message" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900" rows="6"></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-10 py-4 text-lg font-medium text-white bg-blue-900 rounded-full transition-all duration-300 border-blue-900 border-[2px] hover:bg-transparent hover:text-blue-900 shadow-lg font-sans"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Email;
