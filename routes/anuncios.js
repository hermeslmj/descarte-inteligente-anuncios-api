const express = require('express');
const AnuncioController = require('../controllers/anuncios');
const router = express.Router();

/**
 * @typedef Anuncio
 * @property {string} titulo.required
 * @property {string} descricao.required
 * @property {string} categoria.required
 * @property {string} publicado_por.required
 */


/**
 * Crir um Anuncio novo na base de dados
 * @route POST /api/anuncios
 * @group Anuncios
 * @param {Anuncio.model} Anuncio.body.required
 * @returns {object} 200 - Um registro de usuário
 * @returns {Error}  default - Unexpected error
 */

router.post('/', AnuncioController.criar);

/**
 * Get para retornar todos os usuários da base
 * @route GET /api/anuncios
 * @group Anuncios
 * @returns {object} 200 - Um array com todos os usuários da base, sem paginação
 * @returns {Error}  default - Unexpected error
 */
router.get('/', AnuncioController.buscarTodos);

/**
 * Get para retornar todos os usuários da base
 * @route GET /api/anuncios/{id}
 * @group Anuncios
 * @param {string} id.path.required
 * @returns {object} 200 - Um array com o usuários correspondente ao ID pesquisado
 * @returns {Error}  default - Unexpected error
 */
router.get('/:id', AnuncioController.buscarPorId);


/**
 * Retorna um Anuncio atualizado pelo ID dele
 * @route PUT /api/anuncios/{id}
 * @group Anuncios
 * @param {string} id.path.required
 * @param {Anuncio.model} Anuncio.body.required
 * @returns {object} 200 - Um registro de usuário
 * @returns {Error}  default - Unexpected error
 */

router.put('/:id', AnuncioController.editar);

/**
 * Get para retornar todos os usuários da base
 * @route DELETE /api/anuncios/{id}
 * @group Anuncios
 * @param {string} id.path.required
 * @returns {object} 200 - Um objeto com o usuário apagado
 * @returns {Error}  default - Unexpected error
 */
router.delete('/:id', AnuncioController.remover);

module.exports = router;