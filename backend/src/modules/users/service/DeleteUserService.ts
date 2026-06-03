import { UsersRepository } from "../repository/UsersRepository.js";

export class DeleteUser{
    private usersRepository: UsersRepository

    constructor(usersRepository: UsersRepository){
        this.usersRepository = usersRepository
    }

    async delete(id: number){
        const deleteUser = await this.usersRepository.deleteUser(id)
        return deleteUser
    }
}