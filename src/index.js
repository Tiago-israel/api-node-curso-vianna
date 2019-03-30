const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { salvar, editar, excluir, buscarPorId, buscarTodos } = require('./restaurante-service');
const allowCors = require('./cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCors);

app.get('/restaurantes',async (req, res) => {
    res.send(await buscarTodos());
});

app.get('/restaurantes/:id',async (req, res) => {
    const id = req.params.id;
    const restaurante = await buscarPorId(id);
    if (!restaurante) {
        res.status(404).send("Restaurante não encontrado.");
    }
    res.send(restaurante);
});

app.post('/restaurantes', async (req, res) => {
    console.log(req.body)
    const restaurante = await salvar(req.body)
    res.send(restaurante);
});

app.delete('/restaurantes/:id', async (req, res) => {
    const id = req.params.id;
    const resp = await excluir(id);
    if (!resp) {
        res.status(404).send("Restaurante não encontrado.");
    }
    res.send(resp);
});

app.put('/restaurantes/:id', async (req, res) => {
    const id = req.params.id;
    let restaurante = await editar(id, req.body);
    if (!restaurante) {
        res.status(404).send("Restaurante não encontrado.");
    }
    res.send(restaurante);
})

app.listen(3000, () => {
    console.log('aplicação executando na porta 3000')
});