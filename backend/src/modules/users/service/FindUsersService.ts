import { AppError } from "../../../utils/AppError.js";
import type { UsersRepository } from "../repository/UsersRepository.js";

export class FindUsersService{
    private usersRepository: UsersRepository

    constructor(usersRepository: UsersRepository){
      this.usersRepository = usersRepository;
    }

    async execute(){
      const users = await this.usersRepository.getUsers();
      if(!users || users.length === 0) throw new AppError("Nenhum usuário foi encontrado", 404);

      return users
    }
  }
