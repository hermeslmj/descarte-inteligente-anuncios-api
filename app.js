const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const categoriasRoutes = require('./routes/categorias');
const anunciosRoutes = require('./routes/anuncios');


const APP_PORT = process.env.PORT || 3002;

let options = {
  swaggerDefinition: {
      info: {
          description: 'API do Módulo de Anúncios',
          title: 'Descarte Inteligente - Anúncios',
          version: '1.0.0',
      },
      host: 'localhost:' + APP_PORT,
      basePath: '/',
      produces: [
          "application/json",
          "application/xml"
      ],
      schemes: ['http']
  },
  basedir: __dirname, //app absolute path
  files: ['./routes/*.js'] //Path to the API handle folder
};

/**
 * Faz a leitura do arquivo
 * ".env" por padrão
 */
dotenv.config();

const app = express();
const expressSwagger = require('express-swagger-generator')(app);
app.use(cors());
app.use(express.json());


app.use('/api/categorias', categoriasRoutes);
app.use('/api/anuncios', anunciosRoutes);

/**
 * Rota raiz
 */
app.get('/api/', (_, response) => {
    response.send({
      message:
        'Bem-vindo à API de Anúncios. Acesse /anuncio e siga as orientações',
    });
});



/**
 * Conexão ao Banco de Dados
 */
const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
mongoose.connect(
  DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);
expressSwagger(options);
const { connection } = mongoose;

connection.once('open', () => {
  connectedToMongoDB = true;
  console.log('Conectado ao MongoDB');

  /**
   * Definição de porta e
   * inicialização do app
   */
  
  app.listen(APP_PORT, () => {
    console.log(`Servidor iniciado na porta ${APP_PORT}`);
  });
});

