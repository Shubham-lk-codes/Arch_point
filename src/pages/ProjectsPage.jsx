import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Project data
const projectsData = [
  {
    id: 1,
    title: "Modern Skyline Tower",
    category: "Commercial Project",
    image: "../img/1.jpg",
    slug: "modern-skyline-tower"
  },
  {
    id: 2,
    title: "Luxury Beach Resort",
    category: "Resort Project",
    image: "../img/1.jpg",
    slug: "luxury-beach-resort"
  },
  {
    id: 3,
    title: "Urban Heights Residences",
    category: "Residential Project",
    image: "../img/1.jpg",
    slug: "urban-heights-residences"
  },
  {
    id: 4,
    title: "Grand Central Hotel",
    category: "Hotel Project",
    image: "../img/1.jpg",
    slug: "grand-central-hotel"
  },
  {
    id: 5,
    title: "Riverside Township",
    category: "Township",
    image: "../img/1.jpg",
    slug: "riverside-township"
  },
  {
    id: 6,
    title: "Serenity Temple Complex",
    category: "Religious Projects",
    image: "../img/1.jpg",
    slug: "serenity-temple-complex"
  },
  {
    id: 7,
    title: "Oasis Shopping Mall",
    category: "Commercial Project",
    image: "../img/1.jpg",
    slug: "oasis-shopping-mall"
  },
  {
    id: 8,
    title: "Hillside Villa Community",
    category: "Residential Project",
    image: "../img/1.jpg",
    slug: "hillside-villa-community"
  }
];

// List of categories
const categories = [
  "All",
  "Commercial Project",
  "Hotel Project",
  "Residential Project",
  "Resort Project",
  "Township",
  "Religious Projects"
];

function ProjectCard({ project }) {
  const navigate = useNavigate();
  const cardRef = useRef(null);
  
  useEffect(() => {
    const card = cardRef.current;
    
    if (!card) return;
    
    // Create and store the hover animations to clean them up later
    const enterAnimation = () => {
      gsap.to(card, {
        y: -10,
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        duration: 0.3
      });
    };
    
    const leaveAnimation = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        duration: 0.3
      });
    };
    
    // Hover animation
    card.addEventListener('mouseenter', enterAnimation);
    card.addEventListener('mouseleave', leaveAnimation);
    
    return () => {
      if (card) {
        card.removeEventListener('mouseenter', enterAnimation);
        card.removeEventListener('mouseleave', leaveAnimation);
      }
    };
  }, []);
  
  const handleClick = () => {
    navigate(`/projects/${project.slug}`);
  };
  
  return (
    <div 
      ref={cardRef}
      onClick={handleClick}
      className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
    >
      <div className="h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-all duration-700 hover:scale-110"
          onError={(e) => {
            e.target.src = "../img/1.jpg"; // Fallback image
            e.target.onerror = null; // Prevent infinite loop
          }}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-sm text-gray-600">{project.category}</p>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [isLoaded, setIsLoaded] = useState(false);
  const projectsRef = useRef(null);
  const headerRef = useRef(null);
  const filtersRef = useRef(null);
  const animationsSetUpRef = useRef(false);
  
  // Filter projects when category changes
  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);
  
  // Handle animations
  useEffect(() => {
    // Set content as loaded
    setIsLoaded(true);
    
    // Prevent multiple animation setups
    if (animationsSetUpRef.current) return;
    
    if (headerRef.current && filtersRef.current) {
      // Header animation on page load - with reduced animation values
      gsap.fromTo(headerRef.current, 
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
      
      // Category filters animation - with reduced animation values
      gsap.fromTo(filtersRef.current.children, 
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.6, ease: "power1.out", delay: 0.2 }
      );
      
      animationsSetUpRef.current = true;
    }
    
    // Clean up any animations on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
      gsap.killTweensOf(headerRef.current);
      if (filtersRef.current && filtersRef.current.children) {
        gsap.killTweensOf(filtersRef.current.children);
      }
    };
  }, []);
  
  // Setup scroll animations after filtered projects have been rendered
  useEffect(() => {
    if (!projectsRef.current || !projectsRef.current.children.length) return;

    // Clear any existing ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    
    // Projects scroll animation with safer values
    const projectCards = Array.from(projectsRef.current.children);
    
    projectCards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1,
          duration: 0.5,
          delay: index * 0.05,
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=50",
            toggleActions: "play none none none"
          }
        }
      );
    });
    
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
    };
  }, [filteredProjects]);
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Fixed navbar at the top */}
      <Navbar />
      
      {/* Main content with proper top padding to account for navbar */}
      <main className="flex-grow pt-32 pb-12 px-4" style={{ visibility: isLoaded ? 'visible' : 'hidden' }}>
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div ref={headerRef} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Featured Projects</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our diverse portfolio of architectural excellence across various sectors and styles.
            </p>
          </div>
          
          {/* Category filters */}
          <div 
            ref={filtersRef}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Projects grid */}
          <div 
            ref={projectsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl text-gray-600">No projects found in this category.</h3>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default ProjectsPage;