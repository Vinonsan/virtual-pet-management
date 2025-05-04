function calculateMood(createdAt) {
    const now = new Date();
    const timeDiff = now - new Date(createdAt); // in milliseconds
    const days = timeDiff / (1000 * 60 * 60 * 24); // convert to days
  
    if (days < 1) return 'Happy';
    else if (days >= 1 && days <= 3) return 'Excited';
    else return 'Sad';
  }
  
  module.exports = { calculateMood };
  