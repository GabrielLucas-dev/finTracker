import type { transacoes } from "../../../../generated/prisma/client.js";
import { AppError } from "../../../utils/AppError.js";
import type { TransacoesRepository } from "../repository/TransacoesRepository.js";

export class UpdateTransacao{
    private transacoesRepository: TransacoesRepository

    constructor(transacoesRepository: TransacoesRepository){
        this.transacoesRepository = transacoesRepository
    }

    async update(id: number, data: transacoes){
        if(!id) throw new AppError("ID não informado para atualizar", 400)
        if(!data) throw new AppError("Dados faltando para atualizar transação", 400)
        const result = await this.transacoesRepository.updateTransacao(id, data)

        return result
    }
}