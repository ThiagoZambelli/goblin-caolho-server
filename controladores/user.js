import { getUserValida, gravaUser, deletarUsuario } from "../servicos/user.js"


export function getUser(req, res) {
    try {
        const validacao = req.body;
        const item = getUserValida(validacao)
        if (item !== null) {
            res.status(200);
            res.send(item);
        } else {
            res.status(200);
            res.send('Usuario não existe')
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export function postUser(req, res) {
    try {
        const userNovo = req.body;

        if (req.body.nome && req.body.id) {
            gravaUser(userNovo)
            res.status(201)
            res.send("User Cadastrado")
        } else {
            res.status(400)
            res.send("Formato Invalido")
        }



    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

export function deletUser(req, res) {
    try {
        const id = req.params.id;

        if (id && Number(id)) {
            deletarUsuario(id);
            res.status(203);
            res.send('Ususario Deletado')
        } else {
            res.status(422);
            res.send("ID invalido");
        }

    } catch {
        res.status(500)
        res.send(error.message)
    }
}