import type { transacoes } from "../../../../generated/prisma/client.js";
import { prisma } from "../../../config/db.js";

export class TransacoesRepository{
  async findTransacoes(){
    const transacoes = await prisma.transacoes.findMany()
    return transacoes
  }

  async createTransacao(transacao: transacoes){

    const dados = {
      tipo: transacao.tipo,
      valor: transacao.valor,
      descricao: transacao.descricao,
      ativo: transacao.ativo,
      forma_pagamento: transacao.forma_pagamento,
      data_transacao: new Date(transacao.data_transacao),
      // categoria_id: transacao.categoria_id,
      // conta_id: transacao.conta_id
    }

    const createTransacao = await prisma.transacoes.create({
      data: dados 
    })

    return createTransacao
  }

  async findTransacaoById(id: number){
    const transacao = await prisma.transacoes.findUnique({
      where: { id_transacao: id }
    })
    return transacao
  }

  async deleteTransacao(id: number){
    const deleteTransacao = await prisma.transacoes.delete({
      where: { id_transacao: id }
    })
    return deleteTransacao
  }

  async findTransacoesEntrada() {
    const transacoesEntrada = await prisma.transacoes.findMany({
      where: { tipo: "entrada" }
    })
    return transacoesEntrada
  }

  async findTransacoesSaida() {
    const transacoesSaida = await prisma.transacoes.findMany({
      where: { tipo: "saida" }
    })
    return transacoesSaida
  }

  async updateTransacao(id: number, transacao: transacoes){
    const updateTransacao = await prisma.transacoes.update({
      where: { id_transacao: id },
      data: {
        tipo: transacao.tipo,
        valor: transacao.valor,
        descricao: transacao.descricao,
        ativo: transacao.ativo,
        forma_pagamento: transacao.forma_pagamento,
        data_transacao: new Date(transacao.data_transacao),
      }
    })
    return updateTransacao
  }
}
