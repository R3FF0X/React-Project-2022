import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Pokemon from './pages/Pokemon';
import Home from './pages/Home';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/accueil" element={<Home />} />
        <Route path="/pokemon" element={<Pokemon />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>

  );
};
export default App;