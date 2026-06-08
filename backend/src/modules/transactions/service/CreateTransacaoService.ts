import type { transacoes } from "../../../../generated/prisma/client.js";
import { AppError } from "../../../utils/AppError.js";
import type { TransacoesRepository } from "../repository/TransacoesRepository.js";

export class CreateTransacao {
  private transacoesRepository: TransacoesRepository;

  constructor(transacoesRepository: TransacoesRepository) {
    this.transacoesRepository = transacoesRepository;
  }

  async create(data: transacoes) {
    if (!data) throw new AppError("Dado(s) faltando", 400);
    const result = await this.transacoesRepository.createTransacao(data);

    return result;
  }
}
