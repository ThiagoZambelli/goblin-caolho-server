import { Router } from 'express';
import {getUser, postUser, deletUser} from '../controladores/user.js';


const router = Router();

router.get('/', getUser)

router.post('/', postUser)

router.delete('/:id', deletUser)

export default router;