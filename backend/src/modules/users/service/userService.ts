import * as userRepository from "../repository/userRepository.js";

export async function getUsers() {
  const users = await userRepository.getUsers();
  if (!users || users.length === 0) throw new Error("Não há usuários");

  return users;
}

export async function getUserById(id: number) {
  const user = await userRepository.getUserById(id);
  if (!user) throw new Error("Usuário não encontrado");

  return user;
}
