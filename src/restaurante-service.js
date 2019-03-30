const Restaurante = require('./models/restaurante');
const restaurantes = [];
let id = 1;

const salvar = async (restaurante) => {
    const restauranteDb = await Restaurante.create(restaurante);
    return restauranteDb;
}

const editar = async (id, restaurante) => {
    let restauranteBanco = await buscarPorId(id);
    if (!restauranteBanco) {
        return null;
    }
    restauranteBanco = await Restaurante.findByIdAndUpdate(id,restaurante);
    return restauranteBanco;
}

const excluir = async id => {
    const restaurante = await buscarPorId(id);
    if (!restaurante) {
        return null;
    }
    await Restaurante.findByIdAndDelete(id);
    return "restaurante excluido com sucesso!";
}

const buscarPorId = async id => {
    const restaurante = await Restaurante.findById(id);
    if (!restaurante) {
        return null;
    }
    return restaurante;
}

const buscarTodos = async () => {
    return await Restaurante.find();
}

module.exports = { salvar, editar, excluir, buscarPorId, buscarTodos };
