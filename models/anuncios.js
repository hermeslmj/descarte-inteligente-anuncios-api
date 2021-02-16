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
    created_at: { 
        type: Date, 
        default: Date.now
    },
    categoria: {
        type: mongoose.Schema.Types.ObjectId
    }   
});


const AnunciosModel = mongoose.model('anuncios', schema);

module.exports = AnunciosModel;