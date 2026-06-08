import type { Request, Response } from "express";
import { TransacoesRepository } from "../repository/TransacoesRepository.js";
import { FindTransacoes } from "../service/FindTransacoesService.js";
import { CreateTransacao } from "../service/CreateTransacaoService.js";
import { FindTransacaoById } from "../service/FindTransacaoByIdService.js";
import { DeleteTransacao } from "../service/DeleteTransacaoService.js";
import { FindTransacoesEntrada } from "../service/FindTransacoesEntradaService.js";
import { FindTransacoesSaida } from "../service/FindTransacoesSaidaService.js";
import { UpdateTransacao } from "../service/UpdateTransacaoService.js";

export class TransacoesController {
  async findTransacoes(req: Request, res: Response) {
    const transacoesRepository = new TransacoesRepository();
    const findTransacoes = new FindTransacoes(transacoesRepository);
    const result = await findTransacoes.execute();

    return res.status(200).json(result);
  }

  async createTransacao(req: Request, res: Response) {
    const data = req.body;

    const transacoesRepository = new TransacoesRepository();
    const createTransacao = new CreateTransacao(transacoesRepository);
    const result = await createTransacao.create(data);

    return res.status(201).json(result);
  }

  async findTransacaoById(req: Request, res: Response) {
    const id = req.params.id_transacao;
    const idAsNumber = Number(id);

    const transacoesRepository = new TransacoesRepository();
    const findTransacaoById = new FindTransacaoById(transacoesRepository);
    const result = await findTransacaoById.execute(idAsNumber);

    return res.status(200).json(result);
  }

  async deleteTransacao(req: Request, res: Response) {
    const id = req.params.id_transacao;
    const idAsNumber = Number(id);

    const transacoesRepository = new TransacoesRepository();
    const deleteTransacao = new DeleteTransacao(transacoesRepository);
    const result = await deleteTransacao.delete(idAsNumber);

    return res.status(200).json(result);
  }

  async findTransacoesEntrada(req: Request, res: Response) {
    const transacoesRepository = new TransacoesRepository();
    const findTransacoesEntrada = new FindTransacoesEntrada(
      transacoesRepository,
    );
    const result = await findTransacoesEntrada.execute();

    return res.status(200).json(result);
  }

  async findTransacoesSaida(req: Request, res: Response) {
    const transacoesRepository = new TransacoesRepository();
    const findTransacoesSaida = new FindTransacoesSaida(transacoesRepository);
    const result = await findTransacoesSaida.execute();

    return res.status(200).json(result);
  }

  async updateTransacao(req: Request, res: Response){
    const id = req.params.id_transacao
    const idAsNumber = Number(id)
    const data = req.body

    const transacoesRepository = new TransacoesRepository()
    const updateTransacao = new UpdateTransacao(transacoesRepository)
    const result = await updateTransacao.update(idAsNumber, data)

    return res.status(204).json(result)
  }
}
