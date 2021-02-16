const AnunciosModel = require('../models/anuncios');

async function criar(dados) 
{
    const novoAnuncio = new AnunciosModel(dados);
    await novoAnuncio.save();
    return novoAnuncio;
}

async function editar(id, dados) {
    const AnuncioAtualizado = await AnunciosModel.findByIdAndUpdate({ _id: id }, dados, { new: true });
    if(AnuncioAtualizado) {
        return AnuncioAtualizado;
    }
    return false;
}

async function buscarPorId(id) {
    const Anuncio = await AnunciosModel.findById(id);
    if(Anuncio) {
        return Anuncio
    }
    return false;
}

async function buscarTodos() {
    const Anuncios = await AnunciosModel.find();
    return Anuncios;
}

async function remover(id) {
    await AnunciosModel.deleteOne({ _id: id });
}

module.exports = { criar, editar, buscarPorId, buscarTodos, remover }