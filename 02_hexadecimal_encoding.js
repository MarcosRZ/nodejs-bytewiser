var bytes = process.argv.slice(2,process.argv.length)

var buffer = new Buffer(bytes)

console.log(buffer.toString('hex'))

