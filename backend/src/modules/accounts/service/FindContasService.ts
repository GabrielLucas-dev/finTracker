import { AppError } from "../../../utils/AppError.js";
import type { ContasRepository } from "../repository/ContasRepository.js";

export class FindContas{
    private contasRepository: ContasRepository

    constructor(contasRepository: ContasRepository){
        this.contasRepository = contasRepository
    }

    async execute(){
        const result = await this.contasRepository.findContas()
        if(!result || result.length == 0) throw new AppError("Nenhuma conta foi encontrada", 404)
        
        return result
    }
}