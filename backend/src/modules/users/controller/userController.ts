import type { Request, Response } from "express";
import * as userService from "../service/userService.js";

export async function getUsers(req: Request, res: Response) {
  try {
    const users = await userService.getUsers();
    res.status(200).json(users);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
}
