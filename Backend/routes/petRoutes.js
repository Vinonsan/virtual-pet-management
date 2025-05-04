const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const upload = require('../config/multerConfig');

// Add a new pet with image upload
router.post('/', upload.single('image'), petController.addPet);

// View all pets
router.get('/', petController.getAllPets);

// Filter pets by mood
router.get('/filter', petController.filterPetsByMood);

// View a single pet
router.get('/:id', petController.getPetById);

// Update a pet with optional image upload
router.put('/:id', upload.single('image'), petController.updatePet);

// Adopt a pet
router.patch('/:id/adopt', petController.adoptPet);

// Delete a pet
router.delete('/:id', petController.deletePet);

module.exports = router;
