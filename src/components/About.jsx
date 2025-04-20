import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

function About() {
  // experties image
  const imageData = [
    {
      title: "Architecture",
      imgSrc: "../img/1.jpg",
      subtitles: ["Creative Design", "Modern Structure", "Detailed Blueprint"],
    },
    {
      title: "Interior Design",
      imgSrc: "../img/2.jpg",
      subtitles: [
        "Space Optimization",
        "Lighting Aesthetics",
        "Furniture Planning",
      ],
    },
    {
      title: "Project Planning",
      imgSrc: "../img/3.jpg",
      subtitles: [
        "Timeline Management",
        "Cost Estimation",
        "Team Coordination",
      ],
    },
    {
      title: "Landscape Design",
      imgSrc: "../img/4.jpg",
      subtitles: ["Green Zoning", "Water Features", "Outdoor Living Spaces"],
    },
  ];

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const imageRef = useRef(null);
  const galleryRef = useRef(null);
  const expertiseRef = useRef(null);
  const teamRef = useRef(null);
  const ctaRef = useRef(null);

  // GSAP animations setup
  useEffect(() => {
    // Hero section animation
    gsap.fromTo(
      heroRef.current.querySelector("h1"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      heroRef.current.querySelector(".divider"),
      { width: 0 },
      {
        width: "6rem",
        duration: 1.5,
        delay: 0.3,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      heroRef.current.querySelector("p"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      }
    );

    // Story section animations with ScrollTrigger
    const storyElements = storyRef.current.querySelectorAll(".animate-in");
    storyElements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: storyRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Image card animation
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9, rotationY: 5 },
      {
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    // Gallery section animation
    gsap.fromTo(
      galleryRef.current.querySelector("h2"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    const galleryItems = galleryRef.current.querySelectorAll(".gallery-item");
    galleryItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 + index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: galleryRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Expertise section animations
    gsap.fromTo(
      expertiseRef.current.querySelector("h2"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: expertiseRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    const expertiseCards =
      expertiseRef.current.querySelectorAll(".expertise-card");
    expertiseCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2 + index * 0.2,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: expertiseRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Team section animations
    gsap.fromTo(
      teamRef.current.querySelector("h2"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );

    const teamMembers = teamRef.current.querySelectorAll(".team-member");
    teamMembers.forEach((member, index) => {
      gsap.fromTo(
        member,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.1 + index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // CTA section animation
    gsap.fromTo(
      ctaRef.current,
      { opacity: 0, y: 50, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      }
    );
    

    // Clean up ScrollTrigger instances
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  const navigate = useNavigate();


  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 ">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative w-full h-64 md:h-96 lg:h-screen/2 overflow-hidden group"
      >
        <div className="absolute inset-0 bg-blue-900/80 flex items-center justify-center">
          {/* Background image with hover effect only on md+ screens */}
          <motion.img
            src="../img/1.jpg"
            alt="Architecture showcase"
            className="w-full h-full object-cover mix-blend-overlay opacity-60 transform transition-all duration-700 ease-in-out md:group-hover:scale-110 md:group-hover:brightness-75"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6, ease: "easeOut" }}
          />

          {/* Text fades in on hover only on md+ screens */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 ease-in-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center leading-tight ">
              About Arch Point
            </h1>
            <div className="h-1 w-24 bg-yellow-400 my-6 divider"></div>
            <p className="text-lg md:text-xl max-w-2xl text-center font-light">
              Creating exceptional architectural experiences since 2005
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <div
          ref={storyRef}
          className="flex flex-col lg:flex-row gap-12 items-start mb-24"
        >
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400  animate-in">
              Our Story
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 font-light animate-in">
              Arch Point Consultants Pvt. Ltd. is a premier architectural firm
              renowned for its excellence in architectural design and interior
              transformation. Founded on principles of innovation and
              sustainability, we've built our reputation by delivering projects
              that harmoniously blend aesthetics with functionality.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-light animate-in">
              Our team comprises seasoned professionals with decades of
              collective experience across diverse architectural disciplines. We
              pride ourselves on our collaborative approach, working closely
              with clients to turn their visions into remarkable spaces.
            </p>

            <div className="flex gap-4 animate-in">
              <motion.button
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-6 py-3 rounded-md shadow-md transition duration-300 flex items-center gap-2"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Our Portfolio
                <ArrowRight size={16} />
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-yellow-300 text-yellow-400 hover:bg-blue-50 font-medium px-6 py-3 rounded-md transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>

          <motion.div
            ref={imageRef}
            className="w-full lg:w-1/2 order-1 lg:order-2"
            whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-xl">
              <img
                src="../img/5.jpg"
                alt="Arch Point headquarters"
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className=" font-semibold text-xl text-yellow-400 mb-2">
                  Arch Point Consultants Pvt. Ltd.
                </h3>
                <p className="text-gray-600 font-light">
                  Transforming spaces since 2005
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div ref={galleryRef} className="my-16 overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400  ">
            Our Signature Projects
          </h2>

          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex w-max animate-scroll-faster space-x-3 px-2"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[
                {
                  title: "Azure Pavilion",
                  desc: "Contemporary commercial complex",
                  img: "../img/6.jpg",
                },
                {
                  title: "Meridian Residences",
                  desc: "Luxury residential project",
                  img: "../img/4.jpg",
                },
                {
                  title: "Serene Interiors",
                  desc: "Corporate office transformation",
                  img: "../img/1.jpg",
                },
                {
                  title: "Urban Vista",
                  desc: "Modern workspace revamp",
                  img: "../img/2.jpg",
                },
                {
                  title: "Cascade Towers",
                  desc: "Eco-friendly skyscraper",
                  img: "../img/5.jpg",
                },
                {
                  title: "Azure Pavilion",
                  desc: "Contemporary commercial complex",
                  img: "../img/6.jpg",
                },
                {
                  title: "Meridian Residences",
                  desc: "Luxury residential project",
                  img: "../img/4.jpg",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  className="group relative overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl w-[300px] h-[380px] flex-shrink-0"
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                >
                  <img
                    src={project.img}
                    alt={`Project showcase ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-xl font-bold ">{project.title}</h3>
                      <p className="text-sm mt-2 font-light">{project.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Expertise Section */}
  

        <div ref={expertiseRef} className="my-24">
  <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400">
    Our Expertise
  </h2>

  <div className="flex-1 py-10 pt-10">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
      {imageData.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden cursor-pointer"
          onClick={() => navigate("/projects")}
        >
          {/* Image */}
          <img
            src={item.imgSrc}
            alt={item.title}
            className="w-full h-[50vh] object-cover transform transition-all duration-500 group-hover:scale-110 group-hover:blur-sm group-hover:brightness-75"
          />

          {/* Overlay tint */}
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500" />

          {/* Always-visible title (top-left) */}
          <div className="absolute top-4 left-4 z-10">
            <h2 className="text-white text-4xl font-semibold px-3 py-1 rounded-md">
              {item.title}
            </h2>
          </div>

          {/* Hover-visible subtitles (below title) */}
          <div className="absolute top-20 left-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-500">
            <ul className="text-white text-sm space-y-1 px-3 py-2 rounded-md">
              {item.subtitles.map((sub, idx) => (
                <li key={idx}>{sub}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

        {/* Team Section */}
        <div ref={teamRef} className="my-24  sm:px-6 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-yellow-400 ">
            Our Leadership Team
          </h2>

          <div className="space-y-12 max-w-7xl mx-auto">
            {/* Team Member 1 */}
            <motion.div
              className="flex flex-col md:flex-row bg-white overflow-hidden group"
              whileHover={{
                y: -10,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
                <img
                  src="../img/p.jpg"
                  alt="Pranav Kulkarni"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="font-bold text-2xl text-yellow-400">
                  Ar. Poonam Jain
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-3">
                  Chief Architect
                </p>
                <p className="text-gray-600 text-sm font-light">
                  Raising the flag of women entrepreneurship, Ar. Poonam Jain is
                  making remarkable strides in the field of architecture and
                  design. With an extraordinary vision and relentless
                  dedication, she co-founded Arch Point Consultants Pvt. Ltd.
                  alongside his soulmate. With 18 + years of experience as a
                  passionate architect, she seamlessly balances her role as an
                  entrepreneur and Director of Arch Point Consultants Pvt. Ltd.
                  Beyond her professional achievements, she embraces an
                  integrated approach to life, drawing wisdom from Heartfulness
                  Organization.
                </p>
              </div>
            </motion.div>

            {/* Team Member 2 */}
            <motion.div
              className="flex flex-col md:flex-row bg-white shadow-md overflow-hidden group"
              whileHover={{
                y: -10,
                boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3 },
              }}
            >
              <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
                <img
                  src="../img/a.jpg"
                  alt="Anika Sharma"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="font-bold text-2xl text-yellow-400">
                  AMIT KHANDELWAL
                </h3>
                <p className="text-blue-600 text-sm font-medium mb-3">
                  Design Director
                </p>
                <p className="text-gray-600 text-sm font-light">
                  Ar. Amit Khandelwal, professionally Architect, author of the
                  book Creativity: “God’s gift for excellence” and Introspection
                  Diary for Self development is Director at Arch Point
                  Consultants Pvt Ltd.He is a strong believer of collaborative
                  approach and always works in synergy with his clients,
                  business partners, associates and his team members to bring
                  out mutually beneficial and innovative results. He is
                  developing expertise in Quantum Architecture and Aura Science
                  that involve build living spaces that optimise energy levels
                  of people staying in them. Amit Khandelwal is a rising star in
                  the area of creativity and inspired architecture. He is a
                  multi-dimensional personality and awarded by many
                  institutions. He is a man with vision having result oriented
                  approach. He is passionate about reaching out the world with
                  his innovative, path breaking ideas. He is a disciple of Shri
                  Kamlesh D. Patel (affectionately known as Daaji) global guide
                  of Heartfulness Institute
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          ref={ctaRef}
          className="my-16 bg-yellow-300 text-black  p-8 md:p-12 shadow-xl"
          whileHover={{
            boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.15)",
            transition: { duration: 0.5 },
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 ">
              Ready to Transform Your Space?
            </h2>
            <p className="text-lg text-black mb-8 font-light leading-relaxed">
              Let's collaborate to bring your architectural vision to life. Our
              team is ready to guide you through every step of the journey.
            </p>
            <motion.button
              className="bg-white text-blue-900 hover:bg-blue-100 font-bold px-8 py-4 rounded-lg transition duration-300 shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
