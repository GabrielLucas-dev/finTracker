import { prisma } from "../../../config/db.js";

export class UsersRepository{
  async getUsers(){
    const users = await prisma.users.findMany();
    return users
  }
}
