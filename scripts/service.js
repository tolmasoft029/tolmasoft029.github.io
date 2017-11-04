var top_slot = {};

createTopSlot();

function animImage(MyImage, src) {
    MyImage.src = src;
}

function createTopSlot(){
	var upperDiv = document.createElement('div');
	div.style.position = 'absolute'; 
    div.style.cursor = 'pointer';

    var bg = upperDiv.createElement('img');
    bg.src = "../images/slot_top.png";
    bg.className = "locked";

    top_slot = upperDiv;

    document.body.appendChild(upperDiv);
}