import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/project" />
        <Route path="/contact" />
      </Routes>
    </Router>
  )
}

export default App