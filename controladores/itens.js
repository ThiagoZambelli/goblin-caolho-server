import { getTodosOsLivros, getItemPorId } from "../servicos/itens.js"


export function getItens(req, res) {
    try {
        const listaItens = getTodosOsLivros()
        res.send(listaItens)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}
export function getItem(req, res) {
    try {
        const id = req.params.id;
        const item = getItemPorId(id)
        res.send(item)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

