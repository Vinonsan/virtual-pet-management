import React, { useState } from "react";
import { FaDog, FaCat, FaFish } from "react-icons/fa";

function Petlist({ pets = [] }) {
  const [moodFilter, setMoodFilter] = useState("all");

  // Function to filter pets by mood
  const filterPetsByMood = (pets, mood) => {
    if (mood === "all") return pets;
    return pets.filter((pet) => pet.mood?.toLowerCase() === mood.toLowerCase());
  };

  const filteredPets = filterPetsByMood(pets, moodFilter);

  return (
    <div className="p-6">
      {/* Filter Bar */}
      <div className="flex justify-center space-x-4 mb-6">
        <button onClick={() => setMoodFilter("all")} className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-800">All</button>
        <button onClick={() => setMoodFilter("happy")} className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-800">Happy</button>
        <button onClick={() => setMoodFilter("excited")} className="bg-yellow-600 text-white py-2 px-4 rounded-lg hover:bg-yellow-800">Excited</button>
        <button onClick={() => setMoodFilter("sad")} className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700">Sad</button>
      </div>

      {/* Pet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div key={pet.id} className="bg-white shadow-lg rounded-lg p-4">
              <div className="text-center">
                {/* Pet Image */}
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />

                {/* Animal Icon */}
                {pet.species === "Dog" && <FaDog className="text-4xl text-gray-700 mb-4" />}
                {pet.species === "Cat" && <FaCat className="text-4xl text-gray-700 mb-4" />}
                {pet.species === "Fish" && <FaFish className="text-4xl text-gray-700 mb-4" />}

                <h3 className="font-bold text-xl mb-2">{pet.name}</h3>
                <p className="text-gray-600">{pet.species}</p>
                <div className={`mt-2 py-1 px-4 rounded-full ${pet.mood === "Happy" ? "bg-green-500" : pet.mood === "Excited" ? "bg-yellow-500" : "bg-red-500"}`}>
                  <span className="text-white">{pet.mood}</span>
                </div>
                <p className={`mt-2 font-semibold ${pet.adopted ? "text-green-500" : "text-red-500"}`}>
                  {pet.adopted ? "Adopted" : "Available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No pets found for the selected mood.</p>
        )}
      </div>
    </div>
  );
}

// Mock data for testing with images
const mockPets = [
  { id: 1, name: "Buddy", species: "Dog", mood: "Happy", adopted: false, image: "https://via.placeholder.com/150?text=Dog" },
  { id: 2, name: "Whiskers", species: "Cat", mood: "Sad", adopted: false, image: "https://via.placeholder.com/150?text=Cat" },
  { id: 3, name: "Goldy", species: "Fish", mood: "Excited", adopted: true, image: "https://via.placeholder.com/150?text=Fish" },
  { id: 4, name: "Bella", species: "Dog", mood: "Sad", adopted: false, image: "https://via.placeholder.com/150?text=Dog" },
  { id: 5, name: "Fluffy", species: "Cat", mood: "Happy", adopted: true, image: "https://via.placeholder.com/150?text=Cat" },
  { id: 6, name: "Nibbles", species: "Fish", mood: "Excited", adopted: false, image: "https://via.placeholder.com/150?text=Fish" },
];

function App() {
  return <Petlist pets={mockPets} />;
}

export default App;
