const Categoriaservico = require('../services/categorias');

const criar = async (req, res) => {
  try {

    if (!req.body) {
      return res.status(400).send({
        message: 'Sem dados para criar registro, verifique o body da requisicao',
      });
    }

    const novoCategoria = Categoriaservico.criar(req.body);
    res.send(novoCategoria);
    
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Algum erro ocorreu ao salvar' });
  }
};

const buscarTodos = async (req, res) => {

  try {
    const todosOsCategorias = await Categoriaservico.buscarTodos();
    res.send(todosOsCategorias);
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || 'Erro ao listar todos os documentos' });
  }
};

const buscarPorId = async (req, res) => {
  const id = req.params.id;

  try {

    const Categoria = await Categoriaservico.buscarPorId(id);
    if(Categoria){
      res.send(Categoria);
    }
    else{
      res.status(404).send({ message: 'Usuário não encontrada com  id: ' + id });
    }
    
  } catch (error) {
    res.status(500).send({ message: 'Erro ao buscar o Usuário id: ' + id });
  }
};

const editar = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Dados para atualizacao vazio',
    });
  }

  const id = req.params.id;

  try {

    const CategoriaEditado = await Categoriaservico.editar(id, req.body);
    res.status(200).send(CategoriaEditado);

  } catch (error) {
    res.status(500).send({ message: 'Erro ao atualizar a Usuário id: ' + id });
  }
};

const remover = async (req, res) => {
  const id = req.params.id;

  try {
    await Categoriaservico.remover(id);
    res.send({ message: 'Usuário excluido com sucesso' });
  } catch (error) {
    res
      .status(500)
      .send({ message: 'Nao foi possivel deletar o Usuário id: ' + id });
  }
};

module.exports = { criar, buscarTodos, buscarPorId, editar, remover };