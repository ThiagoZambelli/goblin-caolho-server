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
export function modificaLivro(modificacao, id) {
    let lista = JSON.parse(fs.readFileSync('db/itensM.json'));

    const idicie = lista.findIndex(item => item.id == id)

    const conteudoMudado = {...lista[idicie], ...modificacao};

    lista[idicie] = conteudoMudado;

    fs.writeFileSync('db/itensM.json', JSON.stringify(lista))
}
