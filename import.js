var string = "Hello Iam from Import";
var wish = function(name){
	return "Hello inside function"+name;
}
var displaymsg = function(){
	return "This is to display msg"
}
/*module.exports = {
	wish:wish,
	displaymsg:displaymsg,
	string:string
};*/
module.exports.display = function(){
	return "This is my new function"
}