import type { users } from "../../../../generated/prisma/client.js";
import { prisma } from "../../../config/db.js";

export class UsersRepository{
  
  async getUsers(){
    const users = await prisma.users.findMany();
    return users
  }

  async getUserById(id: number){
    const user = await prisma.users.findUnique({
      where: { id_user: id  }
    })
    return user
  }

  async createUser(user: users){
    const postUser = await prisma.users.create({
      data: { 
        nome: user.nome,
        email: user.email,
        senha: user.senha
       }
    })
  }

  async deleteUser(id: number){
    const deleteUser = await prisma.users.delete({
      where: { id_user: id }
    })
  }

  async getUserEmail(email: string): Promise<any> {
    const userEmail = await prisma.users.findFirst({
      where: { email: email  }
    })
  }
}
