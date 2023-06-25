import { Router } from 'express';
import { getItens, getItem, patchItem} from '../controladores/itens.js';

const router = Router();

router.get('/', getItens )
router.get('/:id', getItem )

router.patch('/:id', patchItem)

router.delete('/', (req, res) => {
    res.send("Você fez um Delet")
})

export default router;