const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hola mundo desde Node y Docker')
});

app.listen (3001, () => {
    console.log('Servidor corriendo en el puerto https://localhost:3001');
});