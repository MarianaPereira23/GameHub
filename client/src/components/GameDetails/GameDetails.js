import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import './GameDetails.css';

const GameDetails = () => {
  const [gameInfo, setGameInfo] = useState({});

  const { id } = useParams();
  
  const getGameInfo = async gameId => {
    const data = await axios.get(`http://localhost:4000/api/game/${gameId}`);
    setGameInfo(data.data);
  }

  useEffect(() => {
    getGameInfo(id);
  }, [])

  return (
    <div>
      
    </div>
  );
};

export default GameDetails;
