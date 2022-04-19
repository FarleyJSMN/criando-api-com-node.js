const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.json({titulo: 'Como criar API!'}) //Retorne um objeto
    res.send("Introducao a API") //Imprimindo a frase
});

app.listen(8080, () => {
    console.log("Servidor rodando iniciando na porta 8080: http://localhost:8080")
});