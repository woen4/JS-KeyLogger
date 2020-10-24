const ActionOnWordType = require('./ActionOnWordType')

let timeout = null
let buffer = ''

module.exports = function handleKeyUp(key) {

    //Verifica se a pessoa digitou backspace, se sim coloca um asterisco no lugar
    // 65288 é o código do backspace
    if (key === 65288) {
        buffer += '*'
    } else {
        //Associa o código da tecla a o caractere que ela representa
        buffer += String.fromCharCode(key)
    }

    //Todos esses TimeOut's são para fazer um debounce, ignora
    clearTimeout(timeout)

    timeout = setTimeout(() => {
        // Chama a função após qualquer palavra ser digitada por completo
        ActionOnWordType((buffer + ' '))
        buffer = ''
    }, 1000)
}