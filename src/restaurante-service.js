const restaurantes = [];
let id = 1;

const salvar = ({ restaurante }) => {
    restaurante.id = id++;
    restaurantes.push(restaurante);
    return restaurante;
}

const editar = (id, { restaurante }) => {
    let restauranteBanco = buscarPorId(id);
    if (!restauranteBanco) {
        return null;
    }
    const indice = restaurantes.indexOf(restauranteBanco);
    restaurantes.splice(indice, 1);
    restauranteBanco = { ...restaurante, id };
    restaurantes.push(restauranteBanco);
    return restauranteBanco;
}

const excluir = id => {
    const restaurante = buscarPorId(id);
    if (!restaurante) {
        return null;
    }
    const indice = restaurantes.indexOf(restaurante);
    restaurantes.splice(indice, 1);
    return "restaurante excluido com sucesso!";
}

const buscarPorId = id => {
    const restaurante = restaurantes.find(x => x.id == id);
    if (!restaurante) {
        return null;
    }
    return restaurante;
}

const buscarTodos = () => {
    return restaurantes;
}

module.exports = { salvar, editar, excluir, buscarPorId, buscarTodos };
