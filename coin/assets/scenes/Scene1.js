
// You can write more code here

/* START OF COMPILED CODE */

class Scene1 extends Phaser.Scene {
	
	constructor() {
	
		super("Scene1");
		
	}
	
	_create() {
	
		var monster = this.add.image(80.393845, 74.42753, "textures", "monster");
		
		var coin = this.add.image(401.116, 118.869225, "textures", "coin");
		
		this.fMonster = monster;
		this.fCoin = coin;
		
	}
	
	
	
	/* START-USER-CODE */

	create() {
		this._create();
		this.cursors = this.input.keyboard.createCursorKeys();
		
		this.physics.add.existing(this.fMonster);
		this.physics.add.existing(this.fCoin);
		
		this.physics.add.overlap(this.fMonster, this.fCoin, this.hit, null, this);
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
	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
