import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/database.js';
import router from './routes/user.js';

dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};


app.use(express.json());
app.use(cors(corsOptions));
app.use(router);

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App on port: " + PORT);
    });
  })
  .catch((error) => {
    console.log("Error Connecting to mongoDB", error);
  });