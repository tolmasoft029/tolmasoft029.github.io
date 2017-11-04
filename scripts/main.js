var params = window.location.search.replace('?','').split('&').reduce(function(p,e){var a = e.split('=');
									p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);return p;},{});

VK.init(onInit, onError, '5.69'); 

function onInit(){
	VK.api("users.get", {user_ids:"112354918", fields:"photo_50"}, onPhoto);
}

function onError(){
	alert("onError");
}

function onPhoto(data){
	var link = data['response'][0]['photo_50'];
}