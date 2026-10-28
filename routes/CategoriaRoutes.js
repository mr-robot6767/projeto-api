import express from 'express';
import { cadastrarCategoria, listarCategorias, atualizarCategoria, deletarCategoria, buscarCategoriaPorIndice } from '../controller/CategoriaController.js';

const router = express.Router();

router.post('/', cadastrarCategoria);
router.get('/', listarCategorias);
router.get('/:indice', buscarCategoriaPorIndice);
router.patch('/:indice', atualizarCategoria);
router.delete('/:indice', deletarCategoria);

export default router;
    