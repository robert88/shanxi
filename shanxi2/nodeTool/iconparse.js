
/*不压缩代码必须加载之前使用*/
process.argv[2]="-debug"

//文件操作
require("./rap.util.prototype.js")
var wake = require("./rap.filesystem.js")
var mergeParseJs = require("../../toolLib/mergeParseJs.js")
var data = wake.readData("index.css");
var str = data.match(/([^{]+)\{[^{}]+\}/gm);
var newstr = []
str.forEach(function(val){
	str = val.replace(/\{[^{}]+\}/,"").replace(/^\s+|\s+$/g,"").replace(/\./g," ").replace(/^\s+|\s+$/g,"");
	if(~str.indexOf(",")){
		str.split(",")
		newstr.concat(str);
	}else{
		newstr.push(str);
	}
});

newstr.forEach(function(val ){
	console.log("<div class='{0}'></div>".tpl(val));
	
});

