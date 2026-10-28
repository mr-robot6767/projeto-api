import {Categoria} from '../model/categoria.js';
import { cadastrar, atualizar, deletar, listar, buscarPorIndice } from '../repository/Categoriarepository.js';

export function cadastrarCategoria(req, res) {
    const { nome, descricao } = req.body;
    const categoria = new Categoria(nome, descricao);
    cadastrar(categoria);
    res.status(201).json({ mensagem: 'Categoria cadastrada com sucesso!' });
}

export function listarCategorias(req, res) {
    const categorias = listar();
    res.status(200).json(categorias);
}

export function buscarCategoriaPorIndice(req, res) {
    const indice = Number(req.params.indice);
    const categoria = buscarPorIndice(indice);
    if (!categoria) {
        return res.status(404).json({ mensagem: 'Categoria não encontrada!' });
    }
    res.status(200).json(categoria);
}

export function atualizarCategoria(req, res) {
    const indice = Number(req.params.indice);
    const categoria = buscarPorIndice(indice);
    if (!categoria) {
         return res.status(404).json({ mensagem: 'Categoria não encontrada!' }); 
        }
    const { nome, descricao } = req.body;
    if (nome != undefined) {
        categoria.nome = nome;
    }
    if (descricao != undefined) {
        categoria.descricao = descricao;
    }
    atualizar(indice, categoria);
    res.status(200).json({ mensagem: 'Categoria atualizada com sucesso!' });
}

export function deletarCategoria(req, res) {
    const indice = Number(req.params.indice);
    const categoria = buscarPorIndice(indice);
    if (!categoria) {
        return res.status(404).json({ mensagem: 'Categoria não encontrada!' });
    }
    deletar(indice);
    res.status(200).json({ mensagem: 'Categoria deletada com sucesso!' });
}