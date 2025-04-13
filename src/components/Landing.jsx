import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Footer from "./Footer";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Refs for GSAP animations
  const landingRef = useRef(null);
  const textContentRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderTextRef = useRef(null);

  // Sample images for the slider - replace with your actual images
  const images = [
    { id: 1, url: "../img/1.jpg", alt: "Architectural design 1" },
    { id: 2, url: "../img/2.jpg", alt: "Interior design showcase" },
    { id: 3, url: "../img/3.jpg", alt: "Residential project" },
    { id: 4, url: "../img/4.jpg", alt: "Commercial building" },
  ];

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  // GSAP ScrollTrigger animations
  useEffect(() => {
    // Initial animation for the entire section
    gsap.fromTo(
      landingRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
      }
    );

    // Text content animations with ScrollTrigger
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      paragraphRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      buttonRef.current,
      { y: 20, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        delay: 0.5,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: textContentRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      }
    );

    // Slider animations
    gsap.fromTo(
      sliderRef.current,
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      sliderTextRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sliderTextRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    // Clean up ScrollTrigger instances when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Manual navigation functions
  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div>
      <div className="w-screen h-screen overflow-hidden overflow-x-hidden mt-20">
        <video
          className="w-full h-full object-cover"
          src="../vid/vid.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      <div
        ref={landingRef}
        className="flex flex-col md:flex-row justify-between items-center min-h-screen px-4 md:px-8 py-20"
      >
        {/* Left content section */}
        <div
          ref={textContentRef}
          className="p-4 md:p-8 rounded-lg w-full md:w-1/2 h-full flex items-center"
        >
          <div className="max-w-lg mx-auto">
            <motion.h1
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600"
              whileInView={{
                textShadow: [
                  "0px 0px 0px rgba(0,0,0,0)",
                  "0px 2px 4px rgba(0,0,0,0.1)",
                  "0px 0px 0px rgba(0,0,0,0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              Arch Point
            </motion.h1>

            <motion.p
              ref={paragraphRef}
              className="text-lg leading-relaxed text-gray-700"
            >
              Arch Point addresses new ways of understanding the often
              interrelations between the vital energy and built form. At Arch
              Point we provide Architectural, Interior and Residential services
              for which we are committed to holding your hands throughout the
              project to meet your unique specifications.
            </motion.p>

            <motion.button
              ref={buttonRef}
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md shadow-md transition duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </div>
        </div>

        {/* Right image slider section */}
        <div
          ref={sliderRef}
          className="p-4  w-full md:w-1/2 h-full relative mt-10 md:mt-0"
        >
          <motion.div
            className="relative h-64 md:h-96 overflow-hidden  "
            whileInView={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.5 }}
          >
            {/* Images */}
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                className="absolute top-0 left-0 w-full h-full"
                initial={{
                  opacity: 0,
                  scale: index === currentSlide ? 1.1 : 1,
                }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  scale: index === currentSlide ? 1 : 1.1,
                  zIndex: index === currentSlide ? 1 : 0,
                }}
                transition={{
                  opacity: { duration: 0.7, ease: "easeInOut" },
                  scale: { duration: 5, ease: "easeOut" },
                }}
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}

            {/* Navigation buttons */}
            <motion.button
              onClick={goToPrevSlide}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none z-10"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowLeft size={20} />
            </motion.button>

            <motion.button
              onClick={goToNextSlide}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-40 text-white p-2 rounded-full hover:bg-opacity-60 focus:outline-none z-10"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.6)" }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowRight size={20} />
            </motion.button>

            {/* Dots indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
              {images.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index ? "bg-white" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  animate={
                    currentSlide === index
                      ? {
                          scale: [1, 1.2, 1],
                          transition: { duration: 0.6 },
                        }
                      : {}
                  }
                />
              ))}
            </div>
          </motion.div>

          <motion.div ref={sliderTextRef} className="mt-6 text-center">
            <motion.h2
              className="text-2xl font-semibold text-blue-700"
              whileInView={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              Our Portfolio
            </motion.h2>
            <motion.p
              className="mt-2 text-gray-600"
              whileInView={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Swipe through our latest architectural and interior design
              projects
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
