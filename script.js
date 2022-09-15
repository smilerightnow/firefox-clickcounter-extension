
var element = document.querySelector("div");
var btn_clear = document.querySelector("button");

var i = 0;
element.onclick = function(){
	i++;
	element.innerHTML = i;
	browser.storage.local.set({"cc":i})
}

btn_clear.onclick = function(){
	browser.storage.local.set({"cc":"0"})
	element.innerHTML = "0";
	i = 0;
}

browser.storage.local.get("cc").then(function(result){
	if("cc" in result){
		element.innerHTML = result["cc"]
		i = result["cc"];
	}
})