import { AppError } from "../../../utils/AppError.js";
import type { TransacoesRepository } from "../repository/TransacoesRepository.js";

export class FindTransacoes {
  private transacoesRepository: TransacoesRepository;

  constructor(transacoesReposiory: TransacoesRepository) {
    this.transacoesRepository = transacoesReposiory;
  }

  async execute() {
    const result = await this.transacoesRepository.findTransacoes();
    if (result.length <= 0)
      throw new AppError("Nenhuma transação registrada no banco de dados", 404);
    if (!result) throw new AppError("Erro interno", 400);

    return result;
  }
}
