var EventEmitter = require("events").EventEmitter;
var fs = require('fs');
console.log(__dirname);
var path = require("path")
var filepath=path.join(__dirname,"emittor.json")
console.log(filepath);
var emitter = new EventEmitter();
emitter.on("start_reading",function(filepath){
	fs.readFile(filepath,"utf-8",function(err,data){
		console.log("start reading the file !!!!!")
		if(err){
			emitter.emit("error",err)
			return;
		}
		emitter.emit("print_content",data)
		
	})
})


emitter.on("print_content",function(data){
	console.log(data)
	emitter.emit("done","Successfully done reading the file")
})

emitter.on("error",function(message){
	console.log("There is an error")
	console.log(message)
})

emitter.on("done",function(message){
	console.log(message)
})

emitter.emit("start_reading",filepath)
