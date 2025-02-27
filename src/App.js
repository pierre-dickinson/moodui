import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import MoodboardPage from './pages/Moodboard.js';

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />} />
         
      <Route path="/moodboard" element={<MoodboardPage />} />
    </Routes>
  );
}

export default App;
