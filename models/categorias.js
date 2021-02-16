const mongoose = require("mongoose");

let schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    created_at: { 
            type: Date, 
            default: Date.now
    }
});


const CategoriasModel = mongoose.model('categorias', schema);

module.exports = CategoriasModel;