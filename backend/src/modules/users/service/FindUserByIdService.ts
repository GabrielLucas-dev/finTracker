import { AppError } from "../../../utils/AppError.js";
import type { UsersRepository } from "../repository/UsersRepository.js";

export class FindUserById{
    private usersRepository: UsersRepository

    constructor(usersRepository: UsersRepository){
        this.usersRepository = usersRepository;
    }

    async execute(id: number){
        if(!id) throw new AppError("Parametro 'id' faltando", 400)
        const user = await this.usersRepository.getUserById(id)
        if(!user) throw new AppError("Usuário não encontrado", 404)

        return user
    }
}