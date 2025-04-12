// components/FloatingContactButtons.jsx
import React from "react";

const FloatingContactButtons = () => {
  return (
    <div className="fixed bottom-5 left-5 flex flex-col items-start gap-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918668209442?text=Hi%2C%20I%20visited%20your%20website%20and%20want%20to%20connect."
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        title="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.375 0 0 5.375 0 12c0 2.1.55 4.05 1.5 5.75L0 24l6.4-1.675C8.075 23.45 10 24 12 24c6.625 0 12-5.375 12-12S18.625 0 12 0zm0 21.975c-1.825 0-3.5-.5-5-1.375l-.35-.2-3.8 1 1-3.7-.25-.375C3.325 15.9 2.85 14 2.85 12 2.85 6.975 6.975 2.85 12 2.85S21.15 6.975 21.15 12c0 5.025-4.125 9.15-9.15 9.15zM17.4 14.325c-.275-.125-1.65-.8-1.9-.9-.25-.1-.425-.125-.6.125s-.675.9-.825 1.075-.3.15-.575.025c-.275-.125-1.175-.45-2.25-1.45-.825-.75-1.375-1.675-1.525-1.95s-.017-.425.108-.55c.112-.112.25-.275.375-.412.125-.137.162-.225.25-.375.087-.15.037-.275-.012-.4-.05-.125-.6-1.45-.825-1.975-.225-.525-.45-.45-.6-.45h-.5c-.15 0-.4.05-.6.275s-.8.775-.8 1.875c0 1.1.825 2.162.937 2.312.112.15 1.625 2.487 3.95 3.487 2.325 1 2.325.675 2.75.637.425-.038 1.35-.55 1.537-1.087.188-.538.188-1 .137-1.1-.05-.1-.25-.15-.525-.275z" />
        </svg>
      </a>

      {/* Call Button */}
      <a
        href="tel:+918668209442"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
        title="Call Now"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h2l3.6 7.59a1 1 0 00.91.41h6.17a1 1 0 00.91-.41L19 5H5m5 13a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </a>
    </div>
  );
};

export default FloatingContactButtons;
