var fs= require("fs") //require a file system
var filepath="hello.txt" //getting file path
console.log("start reading file !!!!") 
var data = fs.readFile(filepath,function(err,data){//reads file form the path we defined in a asynchronous way
	if(err){
		console.log(err);
	}
	fs.writeFile("sample.txt",data,function(err){
		if(err){
			console.log(err);
		}

	})
})

console.log("Done reading file !!!")