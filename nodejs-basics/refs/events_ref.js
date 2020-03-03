const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        this.emit('message', `${message} ${Data.now()}`)
    }
}

const logger = new Logger ();

logger.on('message', data => {
    console.log(data)
})

logger.log('Hello');
logger.log('Hello1');
logger.log('Hello2');
