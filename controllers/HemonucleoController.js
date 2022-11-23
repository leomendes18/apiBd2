const Hemonucleo = require('../models/hemonucleo')

const addHemonucleo = async (request, response) => {
    const nome = request.body.nome
    const local = {coordenadas:[request.body.lat, request.body.lng]}

    console.log(local)

    const hemonucleo = Hemonucleo.build({nome, local})
    hemonucleo.save().then(() => {
        response.status(200).send('Hemonucleo salvo!')
    }).catch(err => {
        response.status(400).send('Falha ao salvar')
    })
}
let hemonucleos
const encontrarHemonucleo = async (request, response) => {
    hemonucleos = await Hemonucleo.findAll();
    response.send(hemonucleos)
}

const sincronizar = async (request, response) => {
    await Hemonucleo.sync();
}

module.exports = {addHemonucleo, encontrarHemonucleo, sincronizar, hemonucleos}