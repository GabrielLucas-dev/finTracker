import type { users } from "../../../../generated/prisma/client.js";
import { AppError } from "../../../utils/AppError.js";
import type { UsersRepository } from "../repository/UsersRepository.js";
import bcrypt from 'bcrypt'

export class CreateUser{
    private usersRepository: UsersRepository

    constructor(usersRepository: UsersRepository){
        this.usersRepository = usersRepository
    }

    async execute(data: users){
        if(!data) throw new AppError("Dado(s) para a criação do usuário faltando", 400)    
        const doubleEmail = await this.usersRepository.getUserEmail(data.email)
        if(doubleEmail && doubleEmail > 0) throw new AppError("Email já existente no banco de dados")

        const hashSenha = await bcrypt.hash(data.senha, 6)
        data.senha = hashSenha

        const result = await this.usersRepository.createUser(data)

        return result
    }
}