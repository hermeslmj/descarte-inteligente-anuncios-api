const express = require('express');
const CategoriaController = require('../controllers/categorias');
const router = express.Router();

/**
 * @typedef Categoria
 * @property {string} nome.required
 */


/**
 * Crir um Categoria novo na base de dados
 * @route POST /api/categorias
 * @group Categorias
 * @param {Categoria.model} Categoria.body.required
 * @returns {object} 200 - Um registro de usuário
 * @returns {Error}  default - Unexpected error
 */

router.post('/', CategoriaController.criar);

/**
 * Get para retornar todos os usuários da base
 * @route GET /api/categorias
 * @group Categorias
 * @returns {object} 200 - Um array com todos os usuários da base, sem paginação
 * @returns {Error}  default - Unexpected error
 */
router.get('/', CategoriaController.buscarTodos);

/**
 * Get para retornar todos os usuários da base
 * @route GET /api/categorias/{id}
 * @group Categorias
 * @param {string} id.path.required
 * @returns {object} 200 - Um array com o usuários correspondente ao ID pesquisado
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', CategoriaController.buscarPorId);


/**
 * Retorna um Categoria atualizado pelo ID dele
 * @route PUT /api/categorias/{id}
 * @group Categorias
 * @param {string} id.path.required
 * @param {Categoria.model} Categoria.body.required
 * @returns {object} 200 - Um registro de usuário
 * @returns {Error}  default - Unexpected error
 */

router.put('/:id', CategoriaController.editar);

/**
 * Get para retornar todos os usuários da base
 * @route DELETE /api/categorias/{id}
 * @group Categorias
 * @param {string} id.path.required
 * @returns {object} 200 - Um objeto com o usuário apagado
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', CategoriaController.remover);

module.exports = router;