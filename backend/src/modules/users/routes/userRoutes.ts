import * as userController from "../controller/userController.js";
import express from "express";

const router = express.Router();

router.get("/", userController.getUsers);

export default router;
