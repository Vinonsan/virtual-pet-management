const Pet = require('../models/petModel');
const { calculateMood } = require('../utils/moodLogic');

// Create a new pet
const createPet = async (data) => {
  const pet = new Pet(data);
  await pet.save();
  return pet;
};

// Get all pets with dynamic mood
const getAllPets = async () => {
  const pets = await Pet.find();
  return pets.map(pet => {
    const mood = calculateMood(pet.createdAt);
    return { ...pet.toObject(), mood };
  });
};

// Get single pet
const getPetById = async (id) => {
  const pet = await Pet.findById(id);
  if (!pet) return null;
  const mood = calculateMood(pet.createdAt);
  return { ...pet.toObject(), mood };
};

// Update pet
const updatePet = async (id, data) => {
  const pet = await Pet.findByIdAndUpdate(id, data, { new: true });
  return pet;
};

// Adopt pet
const adoptPet = async (id) => {
  const pet = await Pet.findById(id);
  if (!pet) return null;
  pet.adopted = true;
  pet.adoption_date = new Date();
  await pet.save();
  return pet;
};

// Delete pet
const deletePet = async (id) => {
  await Pet.findByIdAndDelete(id);
  return { message: 'Pet deleted successfully' };
};

// Filter pets by mood
const filterByMood = async (mood) => {
  const pets = await Pet.find();
  return pets.filter(pet => calculateMood(pet.createdAt) === mood)
             .map(pet => ({ ...pet.toObject(), mood }));
};

module.exports = {
  createPet,
  getAllPets,
  getPetById,
  updatePet,
  adoptPet,
  deletePet,
  filterByMood
};
