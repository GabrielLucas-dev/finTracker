import type { Request, Response } from "express";
import { FindUsersService } from "../service/FindUsersService.js";
import { UsersRepository } from "../repository/UsersRepository.js";
import { FindUserById } from "../service/FindUserByIdService.js";
import { CreateUser } from "../service/CreateUserService.js";
import { DeleteUser } from "../service/DeleteUserService.js";

export class UserController{
  async getUsers(req: Request, res: Response){
    const usersRepository = new UsersRepository();
    const findUsersService = new FindUsersService(usersRepository);
    const result = await findUsersService.execute();

    return res.status(200).json(result)
  }

  async getUserById(req: Request, res: Response){
    const id = req.params.id_user
    const idAsNumber = Number(id)

    const usersRepository = new UsersRepository();
    const findUserByIdService = new FindUserById(usersRepository)
    const result = await findUserByIdService.execute(idAsNumber);

    return res.status(200).json(result)
  }
  
  async createUser(req: Request, res: Response){
    const data = req.body

    const usersRepository = new UsersRepository()
    const createUserService = new CreateUser(usersRepository);
    const result = await createUserService.execute(data)

    return res.status(201).json(result)
  }

  async deleteUser(req: Request, res: Response){
    const id = req.params.id_user
    const idAsNumber = Number(id)

    const usersRepository = new UsersRepository();
    const deleteUsersService = new DeleteUser(usersRepository)
    const result = await deleteUsersService.delete(idAsNumber)

    return res.status(200).json(result)
  }
}

