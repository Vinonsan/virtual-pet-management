import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* About Us Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-lg">
            We are a virtual pet adoption center dedicated to helping pets find their forever homes. 
            Join us today and give a pet the love they deserve.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/" className="text-lg text-gray-300 hover:text-white transition duration-300">Home</a></li>
            <li><a href="/pets" className="text-lg text-gray-300 hover:text-white transition duration-300">View Pets</a></li>
            <li><a href="/adopt" className="text-lg text-gray-300 hover:text-white transition duration-300">Adopt a Pet</a></li>
            <li><a href="/contact" className="text-lg text-gray-300 hover:text-white transition duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
          <p className="text-lg">Email: <a href="mailto:info@petadoption.com" className="text-blue-400 hover:underline">info@petadoption.com</a></p>
          <p className="text-lg">Phone: <a href="tel:+1234567890" className="text-blue-400 hover:underline">+1 (234) 567-890</a></p>
          <p className="text-lg">Address: 123 Pet Street, Pet City, PC 12345</p>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="text-gray-300 hover:text-white text-2xl">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-gray-300 hover:text-white text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-gray-300 hover:text-white text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-white text-2xl">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-400">
        <p className="text-lg">&copy; 2025 Virtual Pet Adoption Center. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
