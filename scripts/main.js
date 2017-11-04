var params = window.location.search.replace('?','').split('&').reduce(function(p,e){var a = e.split('=');
									p[ decodeURIComponent(a[0])] = decodeURIComponent(a[1]);return p;},{});

VK.init(onInit, onError, '5.69'); 

function onInit(){
	alert('Init');
	VK.api("users.get", {user_ids:"112354918", fields:"photo_50"}, onPhoto);
}

function onError(){
	alert("onError");
}

function onPhoto(data){
	alert(data['response'][0]['photo_50']);
	var link = data['response'][0]['photo_50'];

	var myDiv = document.getElementById("kek");
	var divClone = myDiv.cloneNode(true);

	divClone.style.top = 100+'px';

	document.body.appendChild(divClone);
	
	myDiv.top_mask.src = link;
	/*divClone.kek.src = link;*/
	console.log(myDiv);
}