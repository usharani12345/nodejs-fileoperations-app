var fs = require('fs');
var filepath = "./FileReadText.txt"
var readable=fs.createReadStream(filepath,{encoding:"utf-8",
										   highWaterMark : 32*1024})//works like event emitter
var writeable = fs.createWriteStream("WriteText.txt",{highWaterMark:16*1024});
readable.on("data",function(chunk){//data is a predefined event
	console.log(chunk.length)
	writeable.write(chunk);
})






















