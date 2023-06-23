import express from 'express';
import rotaItens from './rotas/itens.js';

const app = express();

app.use('/itens', rotaItens);
const port = 8000;



app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
})
