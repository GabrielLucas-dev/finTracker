import { AppError } from "../../../utils/AppError.js"
import type { TransacoesRepository } from "../repository/transacoesRepository.js"

export class DeleteTransacao{
    private transacoesRepository: TransacoesRepository
    
        constructor(transacoesRepository: TransacoesRepository){
            this.transacoesRepository = transacoesRepository
        }
    
        async delete(id: number){
            if(!id) throw new AppError("ID não informado para deleção", 400)
            const result = await this.transacoesRepository.deleteTransacao(id)
            if(!result) throw new AppError("Resultado inexistente", 400)
            
            return result
        }
}