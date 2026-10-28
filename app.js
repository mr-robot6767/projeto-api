import express from 'express';
import CategoriaRoutes from './routes/CategoriaRoutes.js';
import FornecedorRoutes from './routes/FornecedorRoutes.js';
import ProdutoRoutes from './routes/ProdutoRoutes.js';

const app = express();

app.use(express.json());
app.use('/categorias', CategoriaRoutes);
app.use('/fornecedores', FornecedorRoutes);
app.use('/produtos', ProdutoRoutes);

app.listen(3001, () => {
    console.log('Servidor rodando em http://localhost:3001');
});
