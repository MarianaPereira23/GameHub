import React from 'react';
import logoImage from '../../images/logo.png';
import './GameCard.css';

const GameCard = ({ game }) => {
  return (
    <div className="results__card">
      <img src={!game.background_image ? logoImage : game.background_image} alt={game.name} className="card__image" />
      <h3 className="card__name">{game.name}</h3>
    </div>
  );
};

export default GameCard;
