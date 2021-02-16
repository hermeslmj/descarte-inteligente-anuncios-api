const CategoriasModel = require('../models/categorias');

async function criar(dados) 
{
    const novoCategoria = new CategoriasModel(dados);
    await novoCategoria.save();
    return novoCategoria;
}

async function editar(id, dados) {
    const CategoriaAtualizado = await CategoriasModel.findByIdAndUpdate({ _id: id }, dados, { new: true });
    if(CategoriaAtualizado) {
        return CategoriaAtualizado;
    }
    return false;
}

async function buscarPorId(id) {
    const Categoria = await CategoriasModel.findById(id);
    if(Categoria) {
        return Categoria
    }
    return false;
}

async function buscarTodos() {
    const Categorias = await CategoriasModel.find();
    return Categorias;
}

async function remover(id) {
    await CategoriasModel.deleteOne({ _id: id });
}

module.exports = { criar, editar, buscarPorId, buscarTodos, remover }