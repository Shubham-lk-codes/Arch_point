import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function CareerPage() {
  return (
    <div>
      <Navbar />
      <div className="w-full">
        {/* Full width/height image with text below */}
        <div className="relative w-full">
          <img src="/img/1.jpg" alt="Hero" className="w-full h-[80vh] object-cover" />
        </div>
        <h1 className="text-center px-4 py-8 text-lg md:text-xl bg-gray-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quis
          quaerat ad tenetur fugiat? Assumenda quod tempore eligendi corporis
          reiciendis, laboriosam sit consectetur cum quam maxime a error fugiat
          soluta.
        </h1>

        {/* 3 images in a row with text on top */}
        <div className="flex flex-col md:flex-row justify-center gap-4 px-4 py-8">
          {[1, 2, 3].map((item, index) => (
            <div className="relative w-full md:w-1/3" key={index}>
              <img src="/img/1.jpg" alt={`Image ${index}`} className="w-full h-60 object-cover rounded-lg" />
              <h2 className="absolute top-2 left-2 bg-black bg-opacity-50 text-white px-3 py-1 rounded">
                Heading {item}
              </h2>
            </div>
          ))}
        </div>

        {/* Background section with 2 rounded images and heading */}
        <div className="relative w-full mt-12">
          <img src="/img/1.jpg" alt="Background" className="w-full h-[400px] object-cover" />
          <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white text-3xl font-bold z-10">
            Join Our Team
          </h1>
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-6 z-10">
            <img src="/img/1.jpg" alt="Rounded 1" className="w-24 h-24 rounded-full object-cover border-4 border-white" />
            <img src="/img/1.jpg" alt="Rounded 2" className="w-24 h-24 rounded-full object-cover border-4 border-white" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CareerPage;
