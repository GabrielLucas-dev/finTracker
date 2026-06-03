import express from "express";
import { UserController } from "../controller/UsersController.js";

const router = express.Router();

const userController = new UserController()

router.get("/", userController.getUsers);
router.post("/", userController.createUser)
router.get("/id_user", userController.getUserById)
router.delete("/id_user", userController.deleteUser)

export default router;
