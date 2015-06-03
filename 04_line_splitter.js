var fs = require('fs')
var nl = '\n'.charCodeAt(0)
var pos = 0
var newLine = '\n'.charCodeAt(0)

fs.readFile(process.argv[2], function(err, file){
    
    for (var i = 0; i < file.length; i++) {
      if (file[i] === newLine) {
        console.log(file.slice(pos, i))
        i++
        pos = i
      }
    }

    console.log(file.slice(pos, i))	
});

