require('dotenv').config()
const mongoose = require('mongoose')
const so = require('os')
const Chunk = require('./models/Chunk')

//Conecta com o banco de dados na nuvem
mongoose.connect(process.env.MONGODB_STRING_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })

//Função que captura o usuário do sistema
function getCurrentUser() {
    return so.userInfo().username
}

//Função que guarda no banco de dados
async function StoreChunk(data) {
    await Chunk.create({ data, user: getCurrentUser() })
}

module.exports = StoreChunk