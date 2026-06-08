import type { Request, Response } from "express";
import { ContasRepository } from "../repository/ContasRepository.js";
import { FindContas } from "../service/FindContasService.js";
import { CreateConta } from "../service/CreateContaService.js";
import { FindContaById } from "../service/FindContaByIdService.js";

export class ContasController{
    async findContas(req: Request, res: Response){
        const contasRepository = new ContasRepository()
        const findContas = new FindContas(contasRepository)
        const result = await findContas.execute()

        return res.status(200).json(result)
    }

    async createConta(req: Request, res: Response){
        const dados = req.body
        
        const contasRepository = new ContasRepository()
        const createConta = new CreateConta(contasRepository)
        const result = await createConta.create(dados)

        return res.status(201).json(result)
    }

    async findContaById(req: Request, res: Response){
        const id = req.params
        const idAsNumber = Number(id)

        const contasRepository = new ContasRepository()
        const findContaById = new FindContaById(contasRepository)
        const result = await findContaById.execute(idAsNumber)

        return res.status(200).json(result)
    }
}