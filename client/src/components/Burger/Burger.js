import React, { useState } from 'react';
import './Burger.css';

const Burger = () => {
  const [isMounted, setMounted] = useState(false);
  const [displayMenu, setDisplayMenu] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () =>{
    setMounted(true);
    setBurgerOpen(!burgerOpen);
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="page-header__burger">
      <div className="burger__burger-icon" onClick={toggleBurger}>
        <div className={`burger-icon__button ${isMounted && `${burgerOpen ? "active" : "not-active"}`}`} >
          <span className="button__line"></span>
          <span className="button__line"></span>
          <span className="button__line"></span>
        </div>
      </div>
      <div className={`burger__menu ${!isMounted && "hidden"} ${displayMenu ? "show" : "hide"}`}>
        <ul className="menu__list">
          <li>Action</li>
          <li>Fantasy</li>
          <li>Adventure</li>
          <li>Simulation</li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
