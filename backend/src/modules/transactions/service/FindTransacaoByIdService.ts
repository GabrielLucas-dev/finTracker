import { AppError } from "../../../utils/AppError.js";
import type { TransacoesRepository } from "../repository/transacoesRepository.js";

export class FindTransacaoById{
    private transacoesRepository: TransacoesRepository

    constructor(transacoesRepository: TransacoesRepository){
        this.transacoesRepository = transacoesRepository
    }

    async execute(id: number){
        if(!id) throw new AppError("ID não informado para busca", 400)
        const result = await this.transacoesRepository.findTransacaoById(id)
        if(!result) throw new AppError("Resultado inexistente", 400)
        
        return result
    }
}