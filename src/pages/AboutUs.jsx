import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation variants for Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Reusable animated section component
const AnimatedSection = ({ children, className }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);
  
  return (
    <motion.section
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={controls}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Card component for team/advisors
const ProfileCard = ({ image, name, description }) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
  >
    <div className="h-64 overflow-hidden">
      <img
        src={image || "/api/placeholder/400/320"}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

// Testimonial card component
const TestimonialCard = ({ image, text, author }) => (
  <motion.div 
    variants={fadeInUp}
    className="bg-white rounded-lg shadow-md p-6"
  >
    <div className="flex items-center mb-4">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
        <img
          src={image || "/api/placeholder/400/320"}
          alt={author}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-gray-800">{author}</h3>
    </div>
    <p className="text-gray-600 italic">"{text}"</p>
  </motion.div>
);

function AboutUs() {
  const heroRef = useRef(null);
  const teamImagesRef = useRef(null);
  
  useEffect(() => {
    // Hero section animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 100,
      duration: 1,
      ease: "power3.out"
    });
    
    // Team images animation with ScrollTrigger
    const teamImages = teamImagesRef.current.querySelectorAll("img");
    gsap.from(teamImages, {
      opacity: 0,
      scale: 0.8,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: teamImagesRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
      <Navbar />
      
      {/* Hero Section */}
      <div ref={heroRef} className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About Our Company
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-2xl leading-relaxed"
          >
            We create innovative solutions that bring your vision to life with precision and style.
          </motion.p>
        </div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-12">
        {/* Featured Project Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
            Featured Project
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-96 overflow-hidden"
                >
                  <img
                    src="/api/placeholder/400/320"
                    alt="Featured project"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Project Excellence</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our flagship project demonstrates our commitment to quality, innovation, and client satisfaction. 
                  We've incorporated cutting-edge techniques and sustainable practices to deliver a result that exceeds expectations.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Project Details
                </motion.button>
              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* Directors Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
            Our Leadership
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ProfileCard 
              image="/api/placeholder/400/320"
              name="Sarah Johnson"
              description="With over 20 years of industry experience, Sarah leads our company with vision and purpose, driving innovation at every level."
            />
            <ProfileCard 
              image="/api/placeholder/400/320"
              name="Michael Chen"
              description="Michael brings his extensive background in design and strategy to ensure our projects achieve both aesthetic excellence and business objectives."
            />
          </div>
        </AnimatedSection>
        
        {/* Testimonials Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
            Client Experiences
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <TestimonialCard 
              image="/api/placeholder/400/320"
              author="David Williams"
              text="Working with this team was a game-changer for our business. They understood our needs and delivered beyond expectations."
            />
            <TestimonialCard 
              image="/api/placeholder/400/320"
              author="Emily Rodriguez"
              text="The attention to detail and commitment to quality was evident throughout our project. Highly recommend their services."
            />
            <TestimonialCard 
              image="/api/placeholder/400/320"
              author="Robert Kim"
              text="Their innovative approach helped us solve problems we didn't even know we had. A truly forward-thinking company."
            />
          </motion.div>
        </AnimatedSection>
        
        {/* Advisors Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
            Our Advisors
          </h2>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <ProfileCard 
              image="/api/placeholder/400/320"
              name="Dr. Alisha Patel"
              description="Technical innovation and research specialist with a focus on sustainable practices."
            />
            <ProfileCard 
              image="/api/placeholder/400/320"
              name="James Wilson"
              description="Financial strategy expert with 15+ years guiding growth for industry leaders."
            />
            <ProfileCard 
              image="/api/placeholder/400/320"
              name="Maria Gonzalez"
              description="Design thinking advocate bringing human-centered approaches to complex problems."
            />
            <ProfileCard 
              image="/api/placeholder/400/320"
              name="Thomas Lee"
              description="Operations efficiency consultant specializing in scaling organizations."
            />
          </motion.div>
        </AnimatedSection>
        
        {/* Team Section */}
        <AnimatedSection className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-500 pb-2 inline-block">
            Our Team
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              We pride ourselves on nurturing relationships beyond the boundaries of our 
              office environment. Our teams commit themselves ardently towards their projects. 
              With a splendid multi-disciplinary environment, various expertise such as Research 
              and Design Development, Architectural, Structural, Service and Sustainability Engineering
              along with Project Management harmonize a culture of understanding, appreciation and learning.
              This has been one of our core strengths that has worked well even for the Clients who 
              get all services under one roof. We are proud that our team continues to diversify and 
              amplify, bringing distinguished landmark projects to fruition.
            </p>
            
            <div ref={teamImagesRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <img
                    src="/api/placeholder/400/320"
                    alt={`Team member ${i+1}`}
                    className="w-full h-48 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </main>
      
      <footer className="bg-gray-800 text-white py-8">
        <Footer />
      </footer>
    </div>
  );
}

export default AboutUs;