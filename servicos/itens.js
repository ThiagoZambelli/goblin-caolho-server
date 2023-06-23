import fs from 'fs';

export function getTodosOsLivros () {
    return JSON.parse(fs.readFileSync('db/itensM.json'))
}

export function getItemPorId (id) {
    const lista = JSON.parse(fs.readFileSync('db/itensM.json'))

    const livroFiltrado = lista.filter(item => {
        return item.id == id;
    })[0]

    return livroFiltrado
}