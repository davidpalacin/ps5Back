import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import db from './config/database.js'

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App on port: " + PORT);
    });
  })
  .catch((error) => {
    console.log("Error Connecting to mongoDB", error);
  });