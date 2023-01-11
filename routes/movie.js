import { Router } from "express";
const router = Router();

import MovieController from "../controllers/MovieController.js";
import isSuperAdmin from "../middlewares/isSuperAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";

/* GET users listing. */
router.get("/movies", MovieController.getAll);

export default router;
