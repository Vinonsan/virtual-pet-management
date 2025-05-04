import React, { useState } from "react";

const AddPetForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [age, setAge] = useState("");
  const [personality, setPersonality] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!name || !species || !age || !personality) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setLoading(true);

    // Create the new pet object
    const newPet = { name, species, age, personality };

    // Send the data to the backend API (replace with your actual API URL)
    try {
      await fetch("https://your-api-url.com/pets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPet),
      });
      setLoading(false);
      onSubmit(newPet); // Callback to handle successful form submission
    } catch (error) {
      setLoading(false);
      setError("Failed to add pet. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Add a New Pet</h2>

      {/* Error Message */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Pet Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md mt-2"
            placeholder="Enter pet's name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="species" className="block text-lg font-medium text-gray-700">Species</label>
          <select
            id="species"
            value={species}
            onChange={(e) => setSpecies(e.target.value)}
            className="w-full p-2 border rounded-md mt-2"
          >
            <option value="">Select species</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Fish">Fish</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-lg font-medium text-gray-700">Age</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full p-2 border rounded-md mt-2"
            placeholder="Enter pet's age"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="personality" className="block text-lg font-medium text-gray-700">Personality</label>
          <textarea
            id="personality"
            value={personality}
            onChange={(e) => setPersonality(e.target.value)}
            className="w-full p-2 border rounded-md mt-2"
            placeholder="Describe pet's personality"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Pet"}
        </button>
      </form>
    </div>
  );
};

export default AddPetForm;
