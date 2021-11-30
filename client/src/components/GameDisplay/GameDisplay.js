import React from 'react';
import logoImage from '../../images/logo.png';
import './GameDisplay.css';

const GameDisplay = ({ game }) => {
  return (
    <div className="results__display">
      <img src={!game.background_image ? logoImage : game.background_image} alt={game.name} className="display__image" />
      <h3 className="display__name">{game.name}</h3>
    </div>
  );
};

export default GameDisplay
