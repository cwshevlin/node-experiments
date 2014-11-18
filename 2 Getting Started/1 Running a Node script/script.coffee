os = require('os')

message = "Node.js #{process.version} on a #{os.type()}-based operating system."

console.log(message)