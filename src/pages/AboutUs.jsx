import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import gsap from "gsap";

function AboutUs() {
  const [isVisible, setIsVisible] = useState(false);
  const teamRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    setIsVisible(true);
    
    // GSAP animation for team member cards
    teamRefs.current.forEach((el, index) => {
      gsap.set(el, { y: 50, opacity: 0 });
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.1 * index,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=100",
        }
      });
    });

    // GSAP animation for image grid
    imageRefs.current.forEach((el, index) => {
      gsap.set(el, { scale: 0.9, opacity: 0 });
      gsap.to(el, {
        scale: 1,
        opacity: 1,
        duration: 0.7,
        delay: 0.15 * index,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: el,
          start: "top bottom-=50",
        }
      });
    });
  }, []);

  // Reset refs when team members change
  const setTeamRef = (el, index) => {
    teamRefs.current[index] = el;
  };

  // Reset refs for images
  const setImageRef = (el, index) => {
    imageRefs.current[index] = el;
  };

  const teamMembers = [
    { id: 1, imgSrc: "../img/2.jpg", name: "Team Member 1", role: "Architect" },
    { id: 2, imgSrc: "../img/2.jpg", name: "Team Member 2", role: "Designer" },
    { id: 3, imgSrc: "../img/2.jpg", name: "Team Member 3", role: "Project Manager" },
    { id: 4, imgSrc: "../img/2.jpg", name: "Team Member 4", role: "Engineer" },
    { id: 5, imgSrc: "../img/2.jpg", name: "Team Member 5", role: "Interior Designer" },
    { id: 6, imgSrc: "../img/2.jpg", name: "Team Member 6", role: "Architect" },
    { id: 7, imgSrc: "../img/2.jpg", name: "Team Member 7", role: "Designer" },
    { id: 8, imgSrc: "../img/2.jpg", name: "Team Member 8", role: "Project Manager" },
    { id: 9, imgSrc: "../img/2.jpg", name: "Team Member 9", role: "Engineer" },
    { id: 10, imgSrc: "../img/2.jpg", name: "Team Member 10", role: "Interior Designer" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen px-4 md:px-28">
        <img
          src="../img/2.jpg"
          alt="About Us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base md:text-xl font-light"
          >
            We are an award-winning interdisciplinary design practice that
            believes in delivering enriching design solutions through a
            value–driven process empowering all stakeholders and the environment.
          </motion.p>
        </div>
      </div>

      {/* Mid Image Grid Section */}
      <div className="w-full px-4 md:px-16 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => setImageRef(el, index)}
              whileHover={{ 
                scale: 1.03, 
                transition: { duration: 0.3 } 
              }}
              className="overflow-hidden"
            >
              <img
                src="../img/4.jpg"
                alt=""
                className={`w-full ${index > 2 ? 'h-[65vh]' : 'h-[50vh]'} object-cover shadow-md`}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Team Section */}
      <div className="py-16 px-4 md:px-28 bg-white">
        <div className="py-6 px-4 md:px-12 lg:px-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8 text-center md:text-left"
          >
            Our Team
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl font-light mb-12 text-gray-700 leading-relaxed"
          >
            At CPKA, we pride on nurturing our relations beyond the boundaries
            of our office environment. The different teams commit themselves
            ardently towards their projects. With a splendid multi-disciplinary
            environment, the various expertise such as{" "}
            <span className="text-blue-500 font-medium">
              Research and Design Development, Architectural, Structural,
              Service and Sustainability Engineering along with Project
              Management
            </span>{" "}
            harmonise a culture of understanding, appreciation and learning.
            This has been one of our core strengths that has worked well even
            for the Clients who get all services under one roof. We are proud
            that our team continues to diversify and amplify, bringing
            distinguished landmark projects to fuition.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                ref={(el) => setTeamRef(el, index)}
                whileHover={{ 
                  y: -10,
                  transition: { 
                    type: "spring", 
                    stiffness: 300 
                  } 
                }}
                className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="relative">
                  <motion.img
                    src={member.imgSrc}
                    alt={member.name}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="p-4">
                  <motion.h3 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                    className="text-lg font-semibold"
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                    className="text-gray-600 text-sm"
                  >
                    {member.role}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs;