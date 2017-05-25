var fs= require('fs')

var zlib = require('zlib')
var filepath= "file1.txt";
fs.createReadStream(filepath)
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream("file3.txt"))
console.log("compressed file")