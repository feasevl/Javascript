const express = require('express');
const app = express();
const port = 3000;

app.get('/joyboy/elementos', (req, res) => {
    res.json(['elemento1', 'elemento2', 'elemento3', 'ele                mento4', 'elemento5']);
});

app.get('/joyboy/conceitos', (req, res) => {
    res.json(['conceito1', 'conceito2', 'conceito3', 'conceito4', 'conceito5']);
});

app.get('/joyboy/personagens', (req, res) => {
    res.json(['personagem1', 'personagem2', 'personagem3', 'personagem4', 'personagem5']);
});

app.listen(port, () => {
    console.log('Servidor rodando em http://localhost:' + port);
});
