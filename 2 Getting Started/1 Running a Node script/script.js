var os = require('os');

var message = 'YES! TIGHT! Node.js ' + process.version +
			' on a ' + os.type() + '-based operating system.';

console.log(message);