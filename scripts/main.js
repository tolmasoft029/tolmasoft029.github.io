VK.init(onInit, onError, '5.69'); 

function onInit(){
	VK.api("users.get", {user_ids:"112354918", fields:"photo_50"}, onPhoto);
}

function onError(){
	alert("onError");
}

function onPhoto(data){
	var pc = document.getElementById("pic_cntr");
var pic = document.createElement("IMG");
pic.src = data['response'][0]['photo_50'];
pc.appendChild(pic);

}