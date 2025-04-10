import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100,
        duration: 0.6
      }
    }
  };

  const linkVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  return (
    <footer className="bg-gray-900 text-white py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h2 
              className="text-2xl font-bold text-white mb-6 border-b border-gray-700 pb-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Archi-Build
            </motion.h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating exceptional architectural spaces that inspire and transform lives through innovative design and thoughtful execution.
            </p>
            <div className="pt-4">
              <div className="flex items-center space-x-3 text-gray-300 text-sm">
                <MapPin size={16} className="text-gray-400" />
                <span>123 Design Street, London, UK</span>
              </div>
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-3">
              {['Architectural Design', 'Interior Design', 'Project Management', 'Residential Design', 'Commercial Projects'].map((service, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* About Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">About</h3>
            <ul className="space-y-3">
              {['Our Team', 'Clients', 'Arch Point', 'Philosophy', 'Careers'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* News Section */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold mb-4 text-white">News & Achievements</h3>
            <ul className="space-y-3">
              {['All Updates', 'Recent News', 'Awards', 'Publications', 'Events'].map((item, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                  className="text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer text-sm"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-800 my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Bottom Footer */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6 pt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-2 text-gray-300">
              <Phone size={16} className="text-gray-400" />
              <span className="text-sm">+44 1234 567890</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={16} className="text-gray-400" />
              <span className="text-sm">contact@archi-build.com</span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex gap-5">
            <motion.a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-colors duration-300"
            >
              <Facebook size={16} />
            </motion.a>
            <motion.a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition-colors duration-300"
            >
              <Instagram size={16} />
            </motion.a>
            <motion.a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
              className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-500 transition-colors duration-300"
            >
              <Linkedin size={16} />
            </motion.a>
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center text-gray-500 text-xs mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          © {new Date().getFullYear()} Archi-Build. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;