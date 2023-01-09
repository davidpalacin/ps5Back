import express from "express";
const router = express.Router();

const usersRouter = require("./routes/user");

// routes
router.use("/users", usersRouter);

export default router;
