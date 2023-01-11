import express from "express";
const router = express.Router();

import usersRouter from './routes/user.js';
import moviesRouter from './routes/movie.js';

// routes
router.use("/users", usersRouter);
router.use("/movies", moviesRouter);

export default router;
