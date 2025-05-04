import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';         // <-- Adjust path if needed
import Petlist from './pages/Petlistsort';   // <-- Already imported correctly

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/petlistsort" element={<Petlist />} />
      </Routes>
    </Router>
  );
}

export default App;
