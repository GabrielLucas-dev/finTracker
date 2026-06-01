import { prisma } from '../config/db.js'

export async function getTransacoes() {
    const transacoes = await prisma.transacoes.findMany();
    return transacoes
}