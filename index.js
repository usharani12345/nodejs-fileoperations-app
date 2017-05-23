var fs = require('fs');
var filepath="sample.text";
var data = fs.readFile(filepath,function(err,data){
	if(err){
		console.log("Error")
	}
	console.log(data.toString());
	console.log("file reading completed");
})