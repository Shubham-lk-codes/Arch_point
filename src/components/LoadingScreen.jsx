// src/components/LoadingScreen.jsx
import React from 'react';
// import logo from '../img/logo.jpg'; // Adjust the path if needed

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative flex items-center justify-center w-32 h-32">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500 border-opacity-60"></div>
        <img
          src="../img/logo.jpg"
          alt="Company Logo"
          className="w-20 h-20 object-contain animate-pulse"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
