var os = require('os');

var message = 'Node.js ' + process.version +
			' on a ' + os.type() + '-based operating system.';

console.log(message);