import { Router } from 'express';
const router = Router();

import UserController from '../controllers/UserController.js';
import isSuperAdmin from '../middlewares/isSuperAdmin.js';
import verifyToken from '../middlewares/verifyToken.js';

/* Routes users listing. */
router.get("/users", verifyToken, isSuperAdmin, UserController.getAll);
router.get("/users/:name", UserController.getByName);
router.delete("/users/delete/:name", UserController.delete);
router.delete("/users/:id/deleteMovie/:movieId", UserController.deleteMovie);
router.patch('/users/update/:id', UserController.updateUserMovies);
router.patch('/users/:id/check/:movieId', UserController.checkAsViewed);

export default router;