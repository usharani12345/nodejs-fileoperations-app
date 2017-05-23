var fs = require('fs')
var filepath="sample.txt";
var data = fs.readFile(filepath,function(err,data){
	if(err){
		console.log("error page")
	}

	fs.writeFileSync("Simplefile.txt",data)
})

