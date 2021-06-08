import { Router } from 'express'

const router = Router();

import * as VentaCtr from '../controllers/venta.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/',  VentaCtr.readAllventa);
router.get('/:id' , VentaCtr.readVenta);
router.delete('/:id' , VentaCtr.delVenta);

router.post('/',  VentaCtr.createVenta);
router.put('/:id',  VentaCtr.updateVenta);

export default router;