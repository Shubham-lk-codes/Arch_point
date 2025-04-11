import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ExpertiesPage() {
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
    {
      title: "Urban Design",
      imgSrc: "../img/5.jpg",
      subtitles: ["City Flow Planning", "Public Spaces", "Transport Links"],
    },
    {
      title: "Sustainable Design",
      imgSrc: "../img/6.jpg",
      subtitles: ["Energy Efficiency", "Eco Materials", "Low Impact Builds"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 px-4 md:px-20 py-10 pt-32">
        <h1 className="text-4xl font-bold mb-8">Experties</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {imageData.map((item, index) => (
            <div key={index} className="relative group overflow-hidden">
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
        <p className="text-[19px] pt-5">
          Architecture is not just about making impressive buildings on paper,
          but more importantly to deliver projects which are functional, safe,
          easy to maintain, sustainable and long lasting. We have been engaging
          with architecture in a holistic manner since the inception of the firm
          and have all allied services like Structure, Engineering, Project
          Management, Value Engineering and Green Building as an integral part
          of the organisation.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default ExpertiesPage;
