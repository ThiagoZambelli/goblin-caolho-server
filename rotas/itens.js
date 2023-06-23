import { Router } from 'express';
import { getItens, getItem } from '../controladores/itens.js';

const router = Router();

router.get('/', getItens )
router.get('/:id', getItem )

router.post('/', (req, res) => {
    res.send("Você fez um POST")
})
router.delete('/', (req, res) => {
    res.send("Você fez um Delet")
})

export default router;