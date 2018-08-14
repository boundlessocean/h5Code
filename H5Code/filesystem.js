const fs = require('fs');

console.log("1111");

fs.writeFile('my.js', '哈哈哈 中文网', function(err){
	if(err) console.log(err);
	else console.log("写入成功")
});
console.log("2222");

fs.readFile(__dirname+'/my.js',function(err,data){
	console.log(err + data);
});

console.log(__filename);