import { AppError } from "../../../utils/AppError.js";
import type { ContasRepository } from "../repository/ContasRepository.js";

export class FindContaById {
  private contasRepository: ContasRepository;

  constructor(contasRepository: ContasRepository) {
    this.contasRepository = contasRepository;
  }

  async execute(id: number){
    if(!id) throw new AppError("ID faltando para consulta", 400)
    const conta = await this.contasRepository.findContaById(id)
    if(!conta) throw new AppError("Conta não existe", 404)

    return conta
  }
}
