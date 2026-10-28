import express from 'express';
import { cadastrarProduto, listarProdutos, atualizarProduto, deletarProduto, buscarProdutoPorIndice } from '../controller/ProdutoController.js';

const router = express.Router();

router.post('/', cadastrarProduto);
router.get('/', listarProdutos);
router.get('/:indice', buscarProdutoPorIndice);
router.patch('/:indice', atualizarProduto);
router.delete('/:indice', deletarProduto);

export default router;
    