import { Router } from 'express'

const router = Router();

import * as DetalleCtr from '../controllers/detalle.controller'
const { checkToken } = require('../auth/token_validation');

router.get('/',  DetalleCtr.readAlldetalle);
router.get('/:id' , DetalleCtr.readDetalle);
router.delete('/:id' , DetalleCtr.delDetalle);
router.post('/', DetalleCtr.createDetalle);
router.put('/:id', DetalleCtr.updateDetalle);


export default router;