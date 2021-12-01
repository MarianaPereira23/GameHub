import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Results from './components/Results/Results';
import GameDetails from './components/GameDetails/GameDetails';
import './App.css';

const App = () => {
  return (
    <div className="main-container">
      <div className="main-container__wrapper">
        <Header />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results/:query" element={<Results />} />
            <Route path="/category/:query" element={<Results />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="/profile" element={<h2>User</h2>} />
            <Route path="/login" element={<h2>Login</h2>} />
            <Route path="/signup" element={<h2>Join</h2>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
