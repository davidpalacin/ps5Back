import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/database.js';
import routerUser from './routes/user.js';
import routerMovie from './routes/movie.js';
import routerAuth from './routes/auth.js';

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
app.use(routerUser);
app.use(routerMovie);
app.use(routerAuth);

db()
  .then(() => {
    app.listen(PORT, () => {
      console.log("App on port: " + PORT);
    });
  })
  .catch((error) => {
    console.log("Error Connecting to mongoDB", error);
  });