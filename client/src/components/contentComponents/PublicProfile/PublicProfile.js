/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import ProfileGame from '../ProfileGame/ProfileGame';
import './PublicProfile.css';

const PublicProfile = () => {
  const [userData, setUserData] = useState([]);
  const [played, setPlayed] = useState([]);
  const [wish, setWish] = useState([]);
  const [playing, setPlaying] = useState([]);

  const { name } = useParams();

  // const urlDev = 'http://localhost:8123';
  const url = 'https://gamehub-userserver.herokuapp.com';
  
  const getData = async () => {
    const data = await axios.get(`${url}/users/${name}`);
    if (data.data.length > 0 && data.data !== 'Ooops, something went wrong') {
      setUserData(data.data[0]);
      await handleLoad();
      return;
    }
    setUserData('No user to match your search!');
  };

  const getGameData = async ids => {
    // const urlDev = 'http://localhost:4123';
    const url = 'https://gamehub-gameserver.herokuapp.com';
    const gameData = await axios.post(`${url}/api/profile-games`, {idArray: ids});
    return gameData.data;
  }

  const handleLoad = async () => {
    // const urlDev = 'http://localhost:8123';
    const url = 'https://gamehub-userserver.herokuapp.com';

    if (userData === 'No user to match your search!' || userData === undefined) {
      return;
    }

    const userGames = await axios.get(`${url}/user/${name}`);
    if (!userGames.data) {
      return;
    };
    
    const playedGames = userGames.data.filter(game => game.status === 'played');
    const playedData = await getGameData(playedGames.map(game => game.gameid));
    setPlayed(playedData);
    const wishGames = userGames.data.filter(game => game.status === 'wish');
    const wishData = await getGameData(wishGames.map(game => game.gameid));
    setWish(wishData);
    const playingGames = userGames.data.filter(game => game.status === 'playing');
    const playingData = await getGameData(playingGames.map(game => game.gameid));
    setPlaying(playingData);
  };

  useEffect(() => {
    getData();
  }, [name]);

  return (
    <div>
      { typeof userData === "object" ?
        <>
          <div className="page-content__profile">
            <div className="profile__avatar">
              { userData.avatar ? 
                <img src={userData.avatar} alt={userData.username} className="profile__image" />
                :
                <FontAwesomeIcon icon={faUserCircle} className="profile__icon" />
              } 
            </div>
            <div className="profile__info">
              <h2 className="info__username">{userData.username}</h2>
              <p className="info__details">Games played: {played.length}</p>
              <p className="info__details">Games playing: {playing.length}</p>
              <p className="info__details">Wish to play: {wish.length}</p>
            </div>
          </div>
          <div className="page-content__profile-games">
            { played.length > 0 &&
            <>
              <h2 className="profile-games__title">Games marked as played</h2>
              <div className="profile-games__played">
                {played.map(game => <ProfileGame game={game} key={game.name} />)}
              </div>
            </> }
            { wish.length > 0 &&
            <>
              <h2 className="profile-games__title">Games marked as wish to play</h2>
              <div className="profile-games__wish">
                {wish.map(game => <ProfileGame game={game} key={game.name} />)}
              </div>
            </> }
            { playing.length > 0 &&
            <>
              <h2 className="profile-games__title">Games marked as playing</h2>
              <div className="profile-games__playing">
                {playing.map(game => <ProfileGame game={game} key={game.name} />)}
              </div>
            </> }
          </div>
        </>
        :
        <h2 className="no-user">{userData}</h2>
      }
    </div>
  );
};

export default PublicProfile;
