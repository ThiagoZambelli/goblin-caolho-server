import fs from 'fs';

export function getUserValida(userValidacao) {
    const users = JSON.parse(fs.readFileSync('db/users.json'));

    const userFiltrado = users.filter(user => {
        return user.nome == userValidacao.nome
    })[0]

    if (userFiltrado.id == userValidacao.id) {
        return userFiltrado
    } else {
        return null
    }
}

export function gravaUser(userNovo) {
    const users = JSON.parse(fs.readFileSync('db/users.json'));
    const testar = testarExistencia(userNovo.email, "email");
    const id = verificaId()

    if (testar !== undefined) {
        const erro = "Este email ja esta cadastrado"
        return erro
    } else {
        const novaListaDeUsers = [...users, { ...userNovo, id: id }];
        fs.writeFileSync('db/users.json', JSON.stringify(novaListaDeUsers));
        return null
    }
}

export function deletarUsuario(id) {
    let lista = JSON.parse(fs.readFileSync('db/users.json'));
    const indiceParaDeletar = lista.findIndex(user => user.id == id);

    if (indiceParaDeletar > -1) {
        lista.splice(indiceParaDeletar, 1);
    };

    fs.writeFileSync('db/users.json', JSON.stringify(lista));
}

function testarExistencia(info, tipo) {
    const listaUser = JSON.parse(fs.readFileSync('db/users.json'));
    const temNaLista = listaUser.filter(user => {
        return user[tipo] == info;
    })

    return temNaLista[0];
}
function verificaId() {
    const lista = JSON.parse(fs.readFileSync('db/users.json'));
    if (lista.length > 0) {
        const id = lista.length + 1;
        return id
    } else {
        const id = 1;
        return id
    }
}