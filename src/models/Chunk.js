const mongoose = require('mongoose')

//Aqui é o model pra guardar no banco, estou usando o MongoDB

const ChunkSchema = new mongoose.Schema({
    user: { type: String, required: true },
    data: { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Chunk', ChunkSchema)