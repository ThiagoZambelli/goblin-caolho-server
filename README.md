<div align="center">

![Alt text](assets/logoLithtleZ.svg)

&nbsp;

---

&nbsp;

</div>


<img align="left" width="40%" style="margin-top:-20px" src="assets/eu.png">

</br>
</br>

<div dsplay="inline-block">

<h1 align="justify">API Goblin-Caolho</h1>
<h2 align="justify">Feito por : Thiago Zambelli</h2>
<h3 align="justify">Minha primeira API</h3>
 
  <a href="https://www.linkedin.com/in/thiagozambelli">
    <img width="80px" src="https://i.ibb.co/RyZx12b/linkedin.png" alt="linkedin" style="vertical-align:top;">
  </a>

</div>

- [Projeto](#projeto)
- [Componentes](#componentes)
- [Problemas e Soluções](#problemas__solucoes)


&nbsp;

---

# Projeto -> <div id="projeto"></div>

## ->  Users:

- getUser :
    > https - `http://localhost:8000/users`
    ~~~JSON
    > body = {
        "nome": "Nome",
        "id": "id"
    }
    ~~~~

    > Retorna se o usuario existe ou não.

&nbsp;

- postUser :
    > https - `http://localhost:8000/users`
     ~~~JSON
    > body = {
        "nome": "Nome",
        "id": "id"
    }
    ~~~~

    > Cadastra um novo usuario.

- deletUser :
    > https - `http://localhost:8000/users/id`    

    > Deleta o usuario pelo id enviado

---

## ->  Itens:

- getItens :
    > https - `http://localhost:8000/itens`    

    > Retorna Todos os itens.

&nbsp;

- getItem :
    > https - `http://localhost:8000/itens/id`  

    > Retorna o tem expecifico filtrado pelo ID.

- patchItem :
    > https - `http://localhost:8000/users/id`

     ~~~JSON
    > body = {
        "Campo a ser modificado": "Valor"
    }
    ~~~~   

    > Modifica um campo ja existente