import express from 'express';
import { config } from 'dotenv';
import { addUser } from './db.js';
import cors from 'cors';

config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post('/users/join', async (req, res) => {
  const newUser = req.body;
  const user = await addUser(newUser);
  res.status(201).json(user);
})

app.listen(5000, () => console.log('App is running on port 5000'));
