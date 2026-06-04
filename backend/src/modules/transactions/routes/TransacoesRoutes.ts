import express from 'express'
import { TransacoesController } from '../controller/TransacoesController.js'

const router = express.Router()

const transacoesController = new TransacoesController()

router.get('/', transacoesController.findTransacoes)
router.post('/', transacoesController.createTransacao)
router.get('/entradas', transacoesController.findTransacoesEntrada)
router.get('/saidas', transacoesController.findTransacoesSaida)
router.get('/:id_transacao', transacoesController.findTransacaoById)
router.delete('/:id_transacao', transacoesController.deleteTransacao)

export default router