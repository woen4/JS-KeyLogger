const ioHook = require('iohook');
const handleKeyUp = require('./HandleKeyUp')

/*
  Faz o registro do listener, que fica escutando sempre que uma tecla é pressionada,
  quando isso acontece chama a função handleKeyUp passado o código da tecla
*/
ioHook.on('keyup', (event) => handleKeyUp(event.rawcode))


//Inicia o listener
ioHook.start();