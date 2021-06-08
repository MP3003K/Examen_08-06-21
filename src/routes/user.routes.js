import { Router } from 'express'

const router = Router();

import * as userCtr from '../controllers/user.controller'
const { checkToken } = require('../auth/token_validation');
router.post('/', checkToken, userCtr.createUser);
router.put('/:id', checkToken, userCtr.updateUser);

router.get('/',  userCtr.readAllUsers);
router.get('/:id',  userCtr.readUser);
router.delete('/:id', checkToken, userCtr.delUser);


export default router;