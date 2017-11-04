var top_slot = {};

createTopSlot();

function animImage(MyImage, src) {
    MyImage.src = src;
}

function createTopSlot(){
	var upperDiv = document.createElement('div');
	upperDiv.style.position = 'absolute'; 
    upperDiv.style.cursor = 'pointer';

    var bg = document.createElement('img');
    bg.src = "../images/slot_top.png";
    bg.className = "locked";

    upperDiv.appendChild(bg);

    top_slot = upperDiv;

    document.body.appendChild(top_slot);
}