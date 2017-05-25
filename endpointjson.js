var express= require("express");
var app = express();
var router = express.Router();

//app.get('/',function(request,response){
//	response.json({message:"Hello Bengaluru !! "})
//})

router.get('/',function(request,response){
  response.json({message:"Hello Bengaluru !! "})
})
app.use("/api",router)
app.use("/api/user",router)
app.listen(1337,function(){
	console.log("Server listing at port  !!"+PORT)
})

var PORT = process.env.port || 1337;


/*app.get('/user',function(request,response){
	response.json({
		message:"This is my user endpoint"
	})
})*/
router.get('/user',function(request,response){

  response.json({message:"This is my user endpoint "})
})


app.get('/customer',function(request,response){
	var customer = [{
	name:"usha",
	id:1
},{
	name:"alekya",
	id:2
}
]
	response.json(
		customer

	)
})