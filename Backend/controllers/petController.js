const petService = require('../services/petServices');


// POST /pets - Add a new pet
const addPet = async (req, res) => {
  try {
    // If file was uploaded, add the filename to the request body
    if (req.file) {
      req.body.image = req.file.filename;
    }
    
    const pet = await petService.createPet(req.body);
    res.status(201).json(pet);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /pets - Get all pets
const getAllPets = async (req, res) => {
  try {
    const pets = await petService.getAllPets();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /pets/:id - Get single pet
const getPetById = async (req, res) => {
  try {
    const pet = await petService.getPetById(req.params.id);
    if (!pet) return res.status(404).json({ error: 'Pet not found' });
    res.json(pet);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT /pets/:id - Update pet
const updatePet = async (req, res) => {
  try {
    // If file was uploaded, add the filename to the request body
    if (req.file) {
      req.body.image = req.file.filename;
    }
    
    const updated = await petService.updatePet(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: 'Pet not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// PATCH /pets/:id/adopt - Adopt pet
const adoptPet = async (req, res) => {
  try {
    const adopted = await petService.adoptPet(req.params.id);
    if (!adopted) return res.status(404).json({ error: 'Pet not found' });
    res.json({ message: 'Pet adopted successfully', pet: adopted });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE /pets/:id - Delete pet
const deletePet = async (req, res) => {
  try {
    const result = await petService.deletePet(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET /pets/filter?mood=Happy - Filter by mood
const filterPetsByMood = async (req, res) => {
  try {
    const pets = await petService.filterByMood(req.query.mood);
    res.json(pets);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  addPet,
  getAllPets,
  getPetById,
  updatePet,
  adoptPet,
  deletePet,
  filterPetsByMood
};
