import express from "express";
const router = express.Router();

import usersRouter from './routes/user.js';

// routes
router.use("/users", usersRouter);

export default router;
