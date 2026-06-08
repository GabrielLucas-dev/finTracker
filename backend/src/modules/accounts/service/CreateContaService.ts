import type { contas } from "../../../../generated/prisma/browser.js";
import { AppError } from "../../../utils/AppError.js";
import type { ContasRepository } from "../repository/ContasRepository.js";
import { FindContaById } from "./FindContaByIdService.js";

export class CreateConta{
    private contasRepository: ContasRepository

    constructor(contasRepository: ContasRepository){
        this.contasRepository = contasRepository
    }

    async create(data: contas){
        if(!data) throw new AppError("Dado(s) faltando", 400)

        const existe = await this.contasRepository.findContaByInstituicao(data.instituicao)
        if(existe) throw new AppError("Instituição já registrada no banco de dados", 409)

        const conta = await this.contasRepository.createConta(data)
        
        return conta
    }
}