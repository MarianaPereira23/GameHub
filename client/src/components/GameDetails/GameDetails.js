import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './GameDetails.css';

const GameDetails = () => {
  const [gameInfo, setGameInfo] = useState([]);

  const { id } = useParams();
  
  const getGameInfo = async gameId => {
    const data = await axios.get(`http://localhost:4000/api/game/${gameId}`);
    setGameInfo(data.data);
  }

  useEffect(() => {
    getGameInfo(id);
  }, [])

  console.log(gameInfo);

  return (
    <div className="page-content__game-container">
      {gameInfo.length === 0 && <p>Loading...</p>}
      {gameInfo.length > 0 && (
        <>
          <img className="game-container__image" src={gameInfo[2] ? gameInfo[2].image : gameInfo[0].background} alt={gameInfo[0].name}/>
          <h2 className="game-container__name">{gameInfo[0].name}</h2>
          <p className="game-container__info">{gameInfo[0].description}</p>
          <p className="game-container__info">{gameInfo[0].year}</p>
          <p className="game-container__info">{gameInfo[0].platforms}</p>
          <p className="game-container__info">{gameInfo[0].genres}</p>
          {/* <p>{gameInfo[2].videos}</p> */}
          <p className="game-container__info">{gameInfo[1] && gameInfo[1].gameplayMain}</p>
          <p className="game-container__info">{gameInfo[1] && gameInfo[1].gameplayMainExtra}</p>
          <p className="game-container__info">{gameInfo[1] && gameInfo[1].gameplayCompletionist}</p>
        </>
      
      
      
      
      )}
    </div>
  );
};

export default GameDetails;
