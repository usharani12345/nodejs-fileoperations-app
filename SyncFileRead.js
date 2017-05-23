var fs = require('fs')
var filepath="sample.txt";
var data = fs.readFileSync(filepath)
console.log(data.toString())

var data1 = fs.writeFile("welcome.txt",data,function(err){
	if(err){
		console.log("error page")
	}
})