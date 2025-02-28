import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import ListTryout from './components/tryout/ListTryout';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ListTryout />} />
      </Routes>
    </Router>
  );
};

export default App;

