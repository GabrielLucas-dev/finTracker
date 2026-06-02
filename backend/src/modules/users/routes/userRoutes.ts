import express from "express";
import { UserController } from "../controller/UsersController.js";

const router = express.Router();

const userController = new UserController()

router.get("/", userController.handle);

export default router;
