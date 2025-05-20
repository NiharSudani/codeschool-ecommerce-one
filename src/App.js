import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './common/Navbar';
import Footer from './common/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Signup from './pages/Signup';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="signup" element={<Signup />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
