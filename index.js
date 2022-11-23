require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.API_PORT;
const hemonucleoController = require('./controllers/HemonucleoController')

hemonucleoController.sincronizar()

app.get('/', hemonucleoController.sincronizar)
app.get('/encontrarhemonucleo', hemonucleoController.encontrarHemonucleo)
app.post('/hemonucleos', hemonucleoController.addHemonucleo)

app.listen(port, () => {
    console.log(`rodando na porta ${port}`)
})