VK.init(onInit, onError, '5.69'); 

function onInit(){
	VK.api("users.get", {user_ids:"112354918", fields:"photo_50"}, onPhoto);
}

function onError(){

}

function onPhoto(data){
	var div = document.createElement('IMG');
	div.src = data[0]['photo_50'];
	var parentElem = document.body;

	parentElem.appendChild(div);
}