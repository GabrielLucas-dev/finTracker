import { prisma } from "../../../config/db.js";

export async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}

export async function getUserById(id_user: number) {
  const user = await prisma.users.findUnique({
    where: { id_user },
  });
  return user;
}

type user = {
  nome: string;
  email: string;
  senha: string;
};

export function createUser(newUser: user) {
  return prisma.users.create({
    data: newUser,
  });
}
