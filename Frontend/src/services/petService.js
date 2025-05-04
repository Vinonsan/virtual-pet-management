import axios from 'axios';

const API_URL = 'http://localhost:4000/api/pets';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createPet = async (petData) => {
  try {
    console.log('Sending pet data:', petData);
    const response = await api.post('/', petData);
    console.log('Response from server:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating pet:', error.response?.data || error.message);
    throw error;
  }
};

export const getAllPets = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    console.error('Error fetching pets:', error.response?.data || error.message);
    throw error;
  }
}; 