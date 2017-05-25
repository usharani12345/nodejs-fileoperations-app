var fs = require('fs')

var filepath="file1.txt";
var file2 = "file2.txt";

var fileread = fs.createReadStream(filepath);
var filewrite = fs.createWriteStream(file2);
fileread.pipe(filewrite)

