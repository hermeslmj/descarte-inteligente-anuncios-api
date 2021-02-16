const AnunciosRepositorio = require('../repository/anuncios');

async function criar(dados) 
{
    try
    {
        const novoAnuncio = await AnunciosRepositorio.criar(dados);
        if(novoAnuncio) 
            return novoAnuncio;
        return false;
    }
    catch(error)
    {
        console.log(error);   
    }
}

async function editar(id, dados) {
    try 
    {
        const AnuncioAtualizado = await AnunciosRepositorio.editar(id, dados);

        if(AnuncioAtualizado)
            return AnuncioAtualizado
        return false;
    }
    catch(error) 
    {
        console.log(error);
    }
}

async function buscarPorId(id) {
    return await AnunciosRepositorio.buscarPorId(id);
}

async function buscarTodos() {
    return await AnunciosRepositorio.buscarTodos();
}

async function remover(id) {
    return await AnunciosRepositorio.remover(id);
}

module.exports = { criar, editar, buscarPorId, buscarTodos, remover }