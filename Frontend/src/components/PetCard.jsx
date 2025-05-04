import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import { FaDog, FaCat, FaFish } from 'react-icons/fa'; // Animal icons

function PetCard({ pet, onClick }) {
  const navigate = useNavigate();
  
  if (!pet) {
    return <div>Loading...</div>;
  }

  const petImage = pet.image || "https://via.placeholder.com/150";

  return (
    <div
      className="bg-zinc-300 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transform transition duration-300 hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={petImage}
        alt={pet.name}
        className="w-full h-60 object-cover"
      />
      <div className="p-4 text-sky-900">
        {pet.species === "Dog" && <FaDog className="text-3xl text-sky-900 mb-2" />}
        {pet.species === "Cat" && <FaCat className="text-3xl text-sky-900 mb-2" />}
        {pet.species === "Fish" && <FaFish className="text-3xl text-sky-900 mb-2" />}

        <h3 className="font-bold text-xl mb-2">{pet.name}</h3>
        <p className="text-zinc-900">{pet.species}</p>

        <div className={`mt-2 py-1 px-4 rounded-full ${
          pet.mood === "Happy" ? "bg-green-500"
          : pet.mood === "Excited" ? "bg-yellow-500"
          : "bg-red-500"
        }`}>
          <span className="text-white">{pet.mood}</span>
        </div>

        <p className={`mt-2 font-semibold ${pet.adopted ? "text-green-700" : "text-red-700"}`}>
          {pet.adopted ? "Adopted" : "Available"}
        </p>
      </div>
    </div>
  );
}

const mockPets = [
  { id: 1, name: "Buddy", species: "Dog", mood: "Happy", adopted: false, image: "dog1.jpg" },
  { id: 2, name: "Whiskers", species: "Cat", mood: "Sad", adopted: false, image: "cat.jpg" },
  { id: 3, name: "Goldy", species: "Fish", mood: "Excited", adopted: true, image: "fish1.jpg" },
  { id: 4, name: "Bella", species: "Dog", mood: "Sad", adopted: false, image: "hero.jpg" },
  { id: 5, name: "Fluffy", species: "Cat", mood: "Happy", adopted: true, image: "cat.jpg" },
  { id: 6, name: "Nibbles", species: "Fish", mood: "Excited", adopted: false, image: "fish2.jpg" },
];

function App() {
  const navigate = useNavigate();
  
  const handleClick = (pet) => {
    console.log(`Viewing details for: ${pet.name}`);
  };

  const handleViewAll = () => {
    navigate("/petlist");
  };

  return (
    <div className="p-6 bg-zinc-100 min-h-ssortcreen flex flex-col items-center">

      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-8 underline decoration-blue-500 underline-offset-4">
        Meet Our Lovely Pets
      </h2>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        {mockPets.map(pet => (
          <PetCard key={pet.id} pet={pet} onClick={() => handleClick(pet)} />
        ))}
      </div>

      {/* View All Button */}
      <button
         onClick={handleViewAll}
        className="bg-red-800 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
      >
        View All
      </button>
    </div>
  );
}

export default App;
