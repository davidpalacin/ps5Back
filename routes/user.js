import { Router } from 'express';
const router = Router();

import UserController from '../controllers/UserController.js';
import isSuperAdmin from '../middlewares/isSuperAdmin.js';
import verifyToken from '../middlewares/verifyToken.js';

/* GET users listing. */
router.get("/users", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/users/:name", UserController.getByName);
router.delete("/users/delete/:name", UserController.delete);

export default router;