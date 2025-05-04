import React, { useState } from "react";
import { FaDog, FaCat, FaFish } from "react-icons/fa";  // Import animal breed icons

function Hero() {
     // State for the popup visibility
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle the popup visibility
  const togglePopup = () => setShowPopup(!showPopup);
  return (
    <>
 <div className="relative w-full h-screen bg-cover bg-center bg-[url('hero.jpg')]">
      <div className="absolute inset-0 bg-red-900 bg-opacity-50 flex items-center justify-center text-white">
        <div className="text-center p-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to the Virtual Pet Adoption Center
          </h1>
          <p className="text-lg mb-6">
            Find your perfect companion today!
          </p>
          {/* Animal Breeds Section */}
          <div className="flex justify-center space-x-8 mb-6">
            <div className="flex flex-col items-center">
              <FaDog className="text-4xl mb-2" />
              <span>Dog</span>
            </div>
            <div className="flex flex-col items-center">
              <FaCat className="text-4xl mb-2" />
              <span>Cat</span>
            </div>
            <div className="flex flex-col items-center">
              <FaFish className="text-4xl mb-2" />
              <span>Fish</span>
            </div>
          </div>
          <button className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300" onClick={togglePopup}>
            Contact Us
          </button>
        </div>
      </div>
      
      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-xl font-semibold mb-4">Thank you for reaching out!</h2>
            <p className="mb-6">We will get back to you as soon as possible.</p>
            <button className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-lg transition duration-300" onClick={togglePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </>
  )
}

export default Hero