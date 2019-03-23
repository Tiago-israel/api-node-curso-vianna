const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { salvar, editar, excluir, buscarPorId, buscarTodos } = require('./restaurante-service');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/restaurantes', (req, res) => {
    res.send(buscarTodos());
});

app.get('/restaurantes/:id', (req, res) => {
    const id = req.params.id;
    const restaurante = buscarPorId(id);
    if (!restaurante) {
        res.status(404).send("Restaurante não encontrado.");
    }
    res.send(restaurante);
});

app.post('/restaurantes', (req, res) => {
    const restaurante = salvar(req.body)
    res.send(restaurante);
});

app.delete('/restaurantes/:id', (req, res) => {
    const id = req.params.id;
    const resp = excluir(id);
    if (!resp) {
        res.status(404).send("Restaurante não encontrado.");
    }
    res.send(resp);
});

app.put('/restaurantes/:id', (req, res) => {
    const id = req.params.id;
    let restaurante = editar(id, req.body);
    if (!restaurante) {
        res.status(404).send("Restaurante não encontrado.");
    }
    res.send(restaurante);
})

app.listen(3000, () => {
    console.log('aplicação executando na porta 3000')
});