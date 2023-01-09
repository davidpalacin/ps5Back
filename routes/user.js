import { Router } from 'express';
const router = Router();

import UserController from '../controllers/UserController.js';
import isSuperAdmin from '../middlewares/isSuperAdmin.js';
import verifyToken from '../middlewares/verifyToken.js';

/* GET users listing. */
router.get("/", UserController.getAll);

export default router;