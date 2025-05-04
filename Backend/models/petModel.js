const mongoose = require('mongoose');

// Create a counter schema to track IDs for each species
const counterSchema = new mongoose.Schema({
  species: {
    type: String,
    required: true,
    unique: true
  },
  count: {
    type: Number,
    default: 0
  }
});

const Counter = mongoose.model('Counter', counterSchema);

const petSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  species: {
    type: String,
    required: true,
    enum: ['Dog', 'Cat', 'Fish']
  },
  age: {
    type: Number,
    required: true
  },
  personality: {
    type: String,
    required: true
  },
  image: {
    type: String, // You can also use multer or base64, but URL is simple
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  mood: {
    type: String,
    default: 'Happy'
  },
  adopted: {
    type: Boolean,
    default: false
  },
  adoption_date: {
    type: Date,
    default: null
  }
});

// Pre-save hook to generate custom ID based on species
petSchema.pre('save', async function(next) {
  if (!this.id) {
    try {
      // Get the first 3 letters of the species in uppercase
      const speciesPrefix = this.species.slice(0, 3).toUpperCase();
      
      // Find or create counter for this species
      let counter = await Counter.findOne({ species: this.species });
      if (!counter) {
        counter = new Counter({ species: this.species, count: 0 });
      }
      
      // Increment the counter
      counter.count += 1;
      await counter.save();
      
      // Generate the ID with padded number
      const paddedNumber = counter.count.toString().padStart(3, '0');
      this.id = `${speciesPrefix}${paddedNumber}`;
      
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model('Pet', petSchema);
