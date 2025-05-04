import React from 'react';
import { FaPaw, FaUserShield, FaHandHoldingHeart } from 'react-icons/fa';

function Service() {
  const services = [
    {
      icon: <FaPaw />,
      title: 'Pet Adoption',
      desc: 'Find your perfect furry friend from our wide range of adoptable pets.',
      bg: 'bg-gradient-to-r from-pink-400 to-red-500',
    },
    {
      icon: <FaUserShield />,
      title: 'Secure Screening',
      desc: 'We ensure each adoption is safe with verified home checks and follow-ups.',
      bg: 'bg-gradient-to-r from-blue-400 to-blue-600',
    },
    {
      icon: <FaHandHoldingHeart />,
      title: 'Post-Adoption Support',
      desc: 'We guide new pet parents with tips, care routines, and vet support.',
      bg: 'bg-gradient-to-r from-green-400 to-emerald-500',
    },
  ];

  return (
    <section className="py-16 px-6 md:px-16 bg-zinc-100 text-center">
      <h2 className="text-4xl font-bold text-sky-900 mb-4 underline decoration-sky-500 underline-offset-4">
        Our Services
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        We provide more than just adoption. Our team ensures safe adoptions, trusted homes, and post-adoption support for a happy life together.
      </p>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-zinc-100 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105"
          >
            <div className={`w-16 h-16 mx-auto flex items-center justify-center text-white text-2xl rounded-full mb-4 ${service.bg}`}>
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-sky-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Service;
