// src/pages/ProjectDetail.jsx

import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sample project data with unique images
const projectDetails = [
  {
    slug: "modern-skyline-tower",
    title: "Modern Skyline Tower",
    description: "A cutting-edge commercial tower in the heart of the city.",
    images: ["../img/1.jpg", "../img/1.jpg", "../img/1.jpg"],
  },
  {
    slug: "luxury-beach-resort",
    title: "Luxury Beach Resort",
    description: "A serene luxury resort by the ocean.",
    images: ["/img/p2-1.jpg", "/img/p2-2.jpg", "/img/p2-3.jpg"],
  },
  {
    slug: "urban-heights-residences",
    title: "Urban Heights Residences",
    description: "A modern residential complex with urban amenities.",
    images: ["/img/p3-1.jpg", "/img/p3-2.jpg", "/img/p3-3.jpg"],
  },
  {
    slug: "grand-central-hotel",
    title: "Grand Central Hotel",
    description: "A prestigious hotel in the downtown area.",
    images: ["/img/p4-1.jpg", "/img/p4-2.jpg", "/img/p4-3.jpg"],
  },
  {
    slug: "riverside-township",
    title: "Riverside Township",
    description: "A planned township along the scenic riverfront.",
    images: ["/img/p5-1.jpg", "/img/p5-2.jpg", "/img/p5-3.jpg"],
  },
  {
    slug: "serenity-temple-complex",
    title: "Serenity Temple Complex",
    description: "A peaceful religious space with architectural beauty.",
    images: ["/img/p6-1.jpg", "/img/p6-2.jpg", "/img/p6-3.jpg"],
  },
  {
    slug: "oasis-shopping-mall",
    title: "Oasis Shopping Mall",
    description: "A contemporary commercial mall.",
    images: ["/img/p7-1.jpg", "/img/p7-2.jpg", "/img/p7-3.jpg"],
  },
  {
    slug: "hillside-villa-community",
    title: "Hillside Villa Community",
    description: "An elite villa colony in the hills.",
    images: ["/img/p8-1.jpg", "/img/p8-2.jpg", "/img/p8-3.jpg"],
  },
  {
    slug: "sunset-business-park",
    title: "Sunset Business Park",
    description: "A modern business hub for startups.",
    images: ["/img/p9-1.jpg", "/img/p9-2.jpg", "/img/p9-3.jpg"],
  },
  {
    slug: "heritage-palace-hotel",
    title: "Heritage Palace Hotel",
    description: "A royal experience in a palace-themed hotel.",
    images: ["/img/p10-1.jpg", "/img/p10-2.jpg", "/img/p10-3.jpg"],
  },
];

function Project() {
  const { slug } = useParams();
  const project = projectDetails.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center text-xl text-gray-600">
          Project not found
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-1 gap-4 px-7 mt-28">
        {/* Left Big Image with overlay */}
        <div className="w-1/2 h-[90vh] relative group overflow-hidden">
          <img
            src={project.images[0]}
            alt="Main"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white text-center px-4">
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="text-sm mt-2">{project.description}</p>
          </div>
        </div>

        {/* Right Side with 2 stacked images */}
        <div className="w-1/2 flex flex-col gap-2">
          {[1, 2].map(i => (
            <div key={i} className="relative group h-1/2 overflow-hidden">
              <img
                src={project.images[i]}
                alt={`Detail ${i}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Project;
