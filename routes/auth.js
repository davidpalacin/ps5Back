import { Router } from "express";
const router = Router();

import AuthController from "../controllers/AuthController.js";
import isSuperAdmin from "../middlewares/isSuperAdmin.js";
import verifyToken from "../middlewares/verifyToken.js";

router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);

export default router;
