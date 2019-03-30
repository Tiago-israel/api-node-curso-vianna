const mongoose = require('../database/index');

const RestauranteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    nota: {
        type: Number,
        required: false
    },
    distancia: {
        type: String,
        required: true
    }
})

const Restaurante = mongoose.model('Restaurante', RestauranteSchema);
module.exports = Restaurante;