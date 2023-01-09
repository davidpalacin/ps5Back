import express from 'express';
let router = express.Router();

const UserController = require("../controllers/UserController");
const isSuperAdmin = require("../middelwares/isSuperAdmin");
const verifyToken = require("../middelwares/verifyToken");

/* GET users listing. */
router.get("/", verifyToken, isSuperAdmin, UserController.getAll);

export default router;