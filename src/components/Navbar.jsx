import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // GSAP animation for navbar on load
  useEffect(() => {
    const navbar = navbarRef.current;
    const logo = logoRef.current;

    gsap.fromTo(
      navbar,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    gsap.fromTo(
      logo,
      { scale: 0.5, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, delay: 0.3, ease: "elastic.out(1, 0.5)" }
    );
  }, []);

  // Desktop nav item variants for Framer Motion
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Mobile menu variants for Framer Motion
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  // Navigation items with their corresponding routes
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Expertise", path: "/experties" },
    { name: "News", path: "/news" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" }
  ];

  return (
    <motion.nav 
      ref={navbarRef}
      className="w-full bg-white shadow-lg fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0" ref={logoRef}>
            <Link to="/" className="flex items-center">
              <motion.span 
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Arch
                <motion.span 
                  className="text-blue-700"
                  animate={{ 
                    color: ["#1d4ed8", "#3b82f6", "#1e40af", "#1d4ed8"],
                  }}
                  transition={{ 
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Point
                </motion.span>
              </motion.span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-10 items-center">
            {navItems.map((item, i) => (
              <motion.div key={item.name}>
                <Link 
                  to={item.path}
                  className="text-base font-medium text-gray-700 hover:text-blue-700 transition duration-300"
                >
                  <motion.span
                    variants={navItemVariants}
                    initial="hidden"
                    animate="visible"
                    custom={i}
                    whileHover={{ scale: 1.1, color: "#1d4ed8" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.span>
                </Link>
              </motion.div>
            ))}
            <motion.div
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              custom={navItems.length}
            >
              <Link
                to="/contact"
                className="bg-blue-700 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-blue-800 transition duration-300 shadow-md"
              >
                <motion.span
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.span>
              </Link>
            </motion.div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-700 focus:outline-none"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9, rotate: 180 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white pb-6 px-4 overflow-hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col space-y-4 pt-2">
              {navItems.map((item) => (
                <motion.div key={item.name}>
                  <Link
                    to={item.path}
                    className="text-lg font-medium text-gray-700 hover:text-blue-700 transition duration-300 py-2 border-b border-gray-100 block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <motion.span
                      variants={menuItemVariants}
                      whileHover={{ x: 5, color: "#1d4ed8" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <Link
                  to="/contact"
                  className="bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-800 transition duration-300 mt-2 text-center shadow-md block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <motion.span
                    whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact Us
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;