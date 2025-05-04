import React from 'react';
import { FaShieldAlt, FaHome, FaHeart } from 'react-icons/fa';

function About() {
  return (
    <div className="bg-zinc-100 py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left Side - Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-sky-900 border-b-4 border-blue-500 inline-block pb-1 mb-4">
          Why Choose Our Pet Adoption?
        </h2>
        <p className="text-gray-600 mb-6">
          We believe every pet deserves a loving home. Our adoption process ensures safe, verified, and responsible pet ownership for families.
          We believe every pet deserves a loving home. Our adoption process ensures safe, verified, and responsible pet ownership for families.
          We believe every pet deserves a loving home. Our adoption process ensures safe, verified, and responsible pet ownership for families.
        </p>

        {/* Icon-based info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-blue-600 text-xl" />
            <span className="text-gray-700 font-medium">Safe & Trusted Adoption</span>
          </div>
          <div className="flex items-center gap-3">
            <FaHome className="text-green-600 text-xl" />
            <span className="text-gray-700 font-medium">Verified Loving Homes</span>
          </div>
          <div className="flex items-center gap-3">
            <FaHeart className="text-pink-500 text-xl" />
            <span className="text-gray-700 font-medium">Lifetime Support & Care</span>
          </div>
        </div>
      </div>

      {/* Right Side - Animated Image */}
      <div className="md:w-1/2 animate-bounce-slow">
      <img
  src="about.jpg"
  alt="Happy Pet"
  className="rounded-xl shadow-xl w-full max-w-md mx-auto h-96 object-cover"
/>
      </div>
    </div>
  );
}

export default About;
