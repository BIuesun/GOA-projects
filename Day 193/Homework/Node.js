const os = require('os');

console.log('Operating System:', os.type());
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());

const freeMem = os.freemem();
const totalMem = os.totalmem();

console.log('\nFree Memory (bytes):', freeMem);
console.log('Total Memory (bytes):', totalMem);

const uptime = os.uptime();
console.log('\nSystem Uptime (seconds):', uptime);