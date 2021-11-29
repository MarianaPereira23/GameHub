/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import './Burger.css';

const Burger = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const [onLoadSetter, setOnLoadSetter] = useState(false);

  useEffect(() => {
    setOnLoadSetter(true)
    console.log(onLoadSetter);
  }, [])

  const handleClick = e => {
    const classes = e.target.closest('div').classList;
    classes.toggle('active');
    classes.toggle('not-active');
    setDisplayMenu(!displayMenu);
  };

  return (
    <div className="page-header__burger">
      <div className="burger__burger-icon">
        <div className="burger-icon__button not-active" onClick={handleClick}>
          <span className="button__line"></span>
          <span className="button__line"></span>
          <span className="button__line"></span>
        </div>
      </div>
      <div className={`burger__menu ${displayMenu ? "show" : "hide"} ${onLoadSetter ? "" : "hidden"}`}>
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
