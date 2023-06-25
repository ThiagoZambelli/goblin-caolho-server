import express from 'express';
import rotaItens from './rotas/itens.js';
import rotaUsers from './rotas/user.js';

const app = express();
app.use(express.json());
app.use('/itens', rotaItens);
app.use('/users', rotaUsers);


const port = 8000;



app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})
