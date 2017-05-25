var buffer = new Buffer("Hellooo...")
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
buffer.write("Welcome Good Morning")
console.log(buffer.toString())

buffer =new Buffer(10)
console.log(buffer.toString())
buffer.write("modeifiedto node js");
console.log(buffer.toString())

var buffer2 =new Buffer("Welcom")
console.log(buffer2.toString())
buffer2.write("angular js");
console.log(buffer2.toString())