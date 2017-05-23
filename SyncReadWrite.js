var fs = require('fs')
var filepath="sample.txt"
var data = fs.readFileSync(filepath)
var syndata = fs.writeFileSync("SyncWrite.txt",data)