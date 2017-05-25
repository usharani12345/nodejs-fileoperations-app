var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();
emitter.on("radiation",function(ray){
	console.log(ray);
})
	setInterval(function(){
		emitter.emit("radiation","Gamma")
	},1000)