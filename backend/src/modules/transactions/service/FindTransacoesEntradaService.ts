import type { TransacoesRepository } from "../repository/TransacoesRepository.js";

export class FindTransacoesEntrada {
  private transacoesRepositrory: TransacoesRepository;

  constructor(transacoesRepositrory: TransacoesRepository) {
    this.transacoesRepositrory = transacoesRepositrory;
  }

  async execute() {
    const result = await this.transacoesRepositrory.findTransacoesEntrada();
    return result;
  }
}
