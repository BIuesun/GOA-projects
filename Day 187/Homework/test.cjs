const EventEmitter = require('node:events');

const emitter = new EventEmitter();


emitter.on('start', () => {
  console.log('System started');
});


emitter.on('data', (number) => {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
  } else {
    console.log(`${number} is odd`);
  }
});


emitter.on('end', () => {
  console.log('Process finished');
});


emitter.emit('start');
emitter.emit('data', 7);
emitter.emit('data', 10);
emitter.emit('end');