
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var monster = this.add.image(80.393845, 74.42753, "textures", "monster");
		
		var coin = this.add.image(401.116, 118.869225, "textures", "coin");
		
		var score = this.add.text(662.9173, 13.756628, "Score: 0", {"fontFamily": "GNOMORIA_RUS REGULAR"});
		
		this.fMonster = monster;
		this.fCoin = coin;
		this.fScore = score;
		
	}
	
	
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.cursors = this.input.keyboard.createCursorKeys();
		
		this.physics.add.existing(this.fMonster);
		this.physics.add.existing(this.fCoin);
		
		this.score = 0;
		
		if(localStorage.getItem("score"))this.score = Number(localStorage.getItem("score"));
		
		
		this.physics.add.overlap(this.fMonster, this.fCoin, this.hit, null, this);
		//localStorage.clear();
		if(localStorage.getItem("todos") && localStorage.getItem("todos1")){
			console.log(localStorage);
			this.fCoin.x = Number(localStorage.getItem("todos1"));
			this.fCoin.y = Number(localStorage.getItem("todos"));
		}
		this.fScore.text = "Score: " + this.score;
		
	}

	update() {
		if(this.cursors.down.isDown && this.fMonster.y < 450-this.fMonster.height/2-3)this.fMonster.y += 3;
		if(this.cursors.up.isDown && this.fMonster.y > this.fMonster.height/2+3)this.fMonster.y -= 3;
		if(this.cursors.right.isDown && this.fMonster.x < 800-this.fMonster.width/2-3)this.fMonster.x += 3;
		if(this.cursors.left.isDown && this.fMonster.x > this.fMonster.width/2+3)this.fMonster.x -= 3;
	}
	
	hit(){
		this.fCoin.x = Phaser.Math.Between(100, 700);
		this.fCoin.y = Phaser.Math.Between(100, 350);
		
		this.score += 1;
		
		this.fScore.text = "Score: " + this.score;
		
		localStorage.setItem('todos', this.fCoin.y);
		localStorage.setItem('todos1', this.fCoin.x);
		localStorage.setItem('score', this.score);
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
