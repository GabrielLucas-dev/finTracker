import type { contas } from "../../../../generated/prisma/client.js";
import { prisma } from "../../../config/db.js";

export class ContasRepository{
    async findContas(){
        const contas = await prisma.contas.findMany()
        return contas
    }

    async createConta(conta: contas){
        const createConta = await prisma.contas.create({
            data: {
                instituicao: conta.instituicao,
                tipo: conta.tipo
            }
        })
    }

    async findContaById(id: number){
        const conta = await prisma.contas.findMany({
            where: { id_conta: id }
        })
        return conta
    }

     async findContaByInstituicao(instituicao: string){
        const [conta] = await prisma.contas.findMany({
            where: { instituicao: instituicao }
        })
        const contaFormatada = conta?.instituicao.toUpperCase()
        return contaFormatada
    }
}