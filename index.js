const express = require('express');
const catalogo = require('./catalogo');
const app = express();
const PORT = 3000;


// Middleware para servir arquivos estáticos
app.use("/images", express.static("public/images"));


// Rota principal
app.get('/home', (req, res) => {
    res.send('API NO AR E FUNCIONANDO!');
});

app.get('/catalogo', (req, res) => {
    res.json(catalogo);
});

// Inicializar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});