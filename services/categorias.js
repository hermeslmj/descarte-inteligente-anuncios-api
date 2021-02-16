const CategoriasRepositorio = require('../repository/categorias');

async function criar(dados) 
{
    try
    {
        const novoCategoria = await CategoriasRepositorio.criar(dados);
        if(novoCategoria) 
            return novoCategoria;
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
        const CategoriaAtualizado = await CategoriasRepositorio.editar(id, dados);

        if(CategoriaAtualizado)
            return CategoriaAtualizado
        return false;
    }
    catch(error) 
    {
        console.log(error);
    }
}

async function buscarPorId(id) {
    return await CategoriasRepositorio.buscarPorId(id);
}

async function buscarTodos() {
    return await CategoriasRepositorio.buscarTodos();
}

async function remover(id) {
    return await CategoriasRepositorio.remover(id);
}

module.exports = { criar, editar, buscarPorId, buscarTodos, remover }