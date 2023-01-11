import express from "express";
const router = express.Router();

import usersRouter from './routes/user.js';
import moviesRouter from './routes/movie.js';
import authRouter from './routes/auth.js';

// routes
router.use("/users", usersRouter);
router.use("/movies", moviesRouter);
router.use("/auth", authRouter);

export default router;
