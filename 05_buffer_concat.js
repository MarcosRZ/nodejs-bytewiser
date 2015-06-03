var buffers = []
process.stdin.on('data', function(buff){

	buffers.push(buff);
	
});

process.stdin.on('end', function(){ console.log(Buffer.concat(buffers))});
