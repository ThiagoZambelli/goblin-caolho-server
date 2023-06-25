import { getTodosOsLivros, getItemPorId, modificaLivro } from "../servicos/itens.js"


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

        if (id && Number(id)) {
            const item = getItemPorId(id)
            res.send(item)
        } else {
            res.status(422);
            res.send("ID invalido");
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export function patchItem(req, res) {
    try {
        const id = req.params.id;
        const modificacao = req.body;

        if (id && Number(id)) {
            res.status(202)
            modificaLivro(modificacao, id)
            res.send('Item Modificado com sucesso')
        } else {
            res.status(422);
            res.send("ID invalido");
        }
        
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

