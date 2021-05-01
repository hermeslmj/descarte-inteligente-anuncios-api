const mongoose = require("mongoose");

let schema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true,
    },
    criado_em: { 
        type: Date, 
        default: Date.now
    },
    atualizado_em: { 
        type: Date, 
        default: Date.now
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    publicado_por: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
    status: {
        type: Number,
        required: true
    }
});


const AnunciosModel = mongoose.model('anuncios', schema);

module.exports = AnunciosModel;