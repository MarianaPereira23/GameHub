import { MongoClient } from 'mongodb';
import { getGames, getHomeData, getGenres, getGameByGenre, getGameInfo } from './api.js';
import { config } from 'dotenv';

config();

const uri = `mongodb+srv://mobsters:${process.env.MONGO_PASS}@cluster0.3c4ob.mongodb.net/Cluster0?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

const createGame = async game => {
  await client.connect();
  game.ratings = [];
  game.reviews = [];
  await client.db("GameHub").collection("games").insertOne(game);
  await client.close();
};

export const getOneGame = async (req, res) => {
  try {
    const { id } = req.params;
    await client.connect();
    let game = await client.db("GameHub").collection("games").findOne({ id: parseInt(id, 10) });
    if (!game) {
      game = await getGameInfo(id);
      await createGame(game);
    }
    await client.close();
    res.status(200).send(game);
  } catch (err) {
    console.log(err);
  } 
};

export const getProfileGames = async (req, res) => {
  try {
    const { idArray } = req.body;
    await client.connect();
    const games = await Promise.all(idArray.map(async id => {
      const game = await client.db("GameHub").collection("games").findOne({ id });
      const info = {id: game.id, name: game.name, background: game.background, ratings: game.ratings};
      return info;
    }));
    await client.close();
    res.status(200).send(games);
  } catch (err) {
    console.log(err);
  } 
};

export const updateRating = async (req, res) => {
  try {    
    const { rating, id, username } = req.body;
    await client.connect();
    await client.db("GameHub").collection("games").updateOne({ id }, { $push: { ratings: {user: username, rating} }});
    await client.close();
    res.status(201).send();
  } catch (err) {
    console.log(err);
  } 
};

export const updateReview = async (req, res) => {
  try {    
    const { review, id, user } = req.body;
    await client.connect();
    await client.db("GameHub").collection("games").updateOne({ id: parseInt(id, 10) }, { $push: { reviews: {user, review} }});
    await client.close();
    res.status(201).send();
  } catch (err) {
    console.log(err);
  } 
};
