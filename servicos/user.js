import fs from 'fs';

export function getUserValida(userValidacao) {
    const users = JSON.parse(fs.readFileSync('db/users.json'));

    const userFiltrado = users.filter(user => {
        return user.nome == userValidacao.nome
    })[0]

    if(userFiltrado.id == userValidacao.id){
        return userFiltrado
    } else{
        return null
    }

    
}

export function gravaUser(userNovo) {
    const users = JSON.parse(fs.readFileSync('db/users.json'));

    const novaListaDeUsers = [...users, userNovo]

    fs.writeFileSync('db/users.json', JSON.stringify(novaListaDeUsers))
}

export function deletarUsuario(id){
    let lista = JSON.parse(fs.readFileSync('db/users.json'));

    const indiceParaDeletar = lista.findIndex(user => user.id == id);

    if(indiceParaDeletar > -1){
        lista.splice(indiceParaDeletar, 1);
    }

    fs.writeFileSync('db/users.json', JSON.stringify(lista))
}