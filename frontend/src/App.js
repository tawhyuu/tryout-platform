import React from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
      </Routes>
    </Router>
  );
}

export default App;

