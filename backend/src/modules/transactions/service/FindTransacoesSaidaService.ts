import type { TransacoesRepository } from "../repository/TransacoesRepository.js";

export class FindTransacoesSaida {
  private transacoesRepository: TransacoesRepository;

  constructor(transacoesRepository: TransacoesRepository) {
    this.transacoesRepository = transacoesRepository;
  }

  async execute() {
    const result = await this.transacoesRepository.findTransacoesSaida();
    return result;
  }
}
