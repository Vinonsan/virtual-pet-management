import React, { useState } from 'react';
import { FaTimes, FaSmile, FaMeh, FaFrown, FaDog, FaCat, FaFish } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddPetForm({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    species: 'Cat',
    age: '',
    personality: 'geniu',
    image: '',
    mood: 'Happy',
    adopted: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Please enter a name');
      return false;
    }
    if (!formData.age || isNaN(formData.age) || formData.age < 0) {
      toast.error('Please enter a valid age');
      return false;
    }
    if (!formData.image.trim()) {
      toast.error('Please enter an image URL');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    console.log('Submitting form data:', formData);

    try {
      const result = await onSubmit(formData);
      if (result) {
        // Reset form after successful submission
        setFormData({
          name: '',
          species: 'Cat',
          age: '',
          personality: 'geniu',
          image: '',
          mood: 'Happy',
          adopted: false
        });
        toast.success('Pet added successfully! 🐾', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        onClose(); // Close the form after successful submission
      }
    } catch (err) {
      console.error('Form submission error:', err);
      toast.error('Failed to add pet. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-sky-900">Add New Pet</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-gray-700 transition-colors"
            disabled={isSubmitting}
          >
            <FaTimes size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              required
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Species</label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, species: 'Dog' })}
                className={`p-2 rounded-full ${formData.species === 'Dog' ? 'bg-sky-500 text-white' : 'bg-gray-200'}`}
                disabled={isSubmitting}
              >
                <FaDog size={24} />
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, species: 'Cat' })}
                className={`p-2 rounded-full ${formData.species === 'Cat' ? 'bg-sky-500 text-white' : 'bg-gray-200'}`}
                disabled={isSubmitting}
              >
                <FaCat size={24} />
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, species: 'Fish' })}
                className={`p-2 rounded-full ${formData.species === 'Fish' ? 'bg-sky-500 text-white' : 'bg-gray-200'}`}
                disabled={isSubmitting}
              >
                <FaFish size={24} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Age</label>
            <input
              type="number"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              required
              min="0"
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Mood</label>
            <div className="flex space-x-4 mt-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, mood: 'Happy' })}
                className={`p-2 rounded-full ${formData.mood === 'Happy' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                disabled={isSubmitting}
              >
                <FaSmile size={24} />
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, mood: 'Excited' })}
                className={`p-2 rounded-full ${formData.mood === 'Excited' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
                disabled={isSubmitting}
              >
                <FaMeh size={24} />
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, mood: 'Sad' })}
                className={`p-2 rounded-full ${formData.mood === 'Sad' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
                disabled={isSubmitting}
              >
                <FaFrown size={24} />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Image URL</label>
            <input
              type="url"
              value={formData.image}
              onChange={(e) => setFormData({ ...formData, image: e.target.value })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
              required
              disabled={isSubmitting}
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={formData.adopted}
              onChange={(e) => setFormData({ ...formData, adopted: e.target.checked })}
              className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
              disabled={isSubmitting}
            />
            <label className="ml-2 block text-sm text-gray-900">Adopted</label>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                isSubmitting ? 'bg-gray-400' : 'bg-sky-600 hover:bg-sky-700'
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Adding...' : 'Add Pet'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPetForm; 