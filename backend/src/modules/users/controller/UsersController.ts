import type { Request, Response } from "express";
import { FindUsersService } from "../service/FindUsersService.js";
import { UsersRepository } from "../repository/UsersRepository.js";

export class UserController{
  async handle(req: Request, res: Response){
    const usersRepository = new UsersRepository();
    const findUsersService = new FindUsersService(usersRepository);
    const result = await findUsersService.execute();

    return res.status(200).json(result)
  }
  
}

