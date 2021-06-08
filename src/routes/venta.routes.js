import { Router } from 'express'

const router = Router();

import * as VentaCtr from '../controllers/venta.controller'
const { checkToken } = require('../auth/token_validation');
router.post('/',  VentaCtr.createVenta);
router.put('/:id',  VentaCtr.updateVenta);

router.get('/',  VentaCtr.readAllventa);
router.get('/:id' , VentaCtr.readVenta);
router.delete('/:id' , VentaCtr.delVenta);


export default router;