import express from 'express';
import { getGames, getHomeData } from './api.js';
import { config } from 'dotenv';
import cors from 'cors';

config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/api/games/:searchQuery', getGames);
app.get('/api/home', getHomeData);

app.listen(4000, () => console.log('App is running on port 4000'));
