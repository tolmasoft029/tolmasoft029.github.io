VK.init(onInit, onError, '5.69'); 

function onInit(){
	alert(VK.viewer_id)
	VK.api("users.get", {user_ids:"112354918", fields:"photo_50"}, onPhoto);
}

function onError(){
	alert("onError");
}

function onPhoto(data){
	var link = data['response'][0]['photo_50'];
}