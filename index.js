function ts(d){
	var a="hello";
	var c=d+" debug";
	var b="test!";

	console.log(a+b);
	console.log(a+d+c);
}

var h=require("./dst/mon/h.js");
function ts2(params) {
	console.log("ts2 ...");
	h.dets();
}

ts2();