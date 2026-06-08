import express from 'express'
import { ContasController } from '../controller/ContasController.js'

const router = express.Router()

const contasController = new ContasController()

router.get('/', contasController.findContas)
router.post('/', contasController.createConta)
router.get('/:id_conta', contasController.findContaById)

export default router