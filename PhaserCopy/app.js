var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});

var score = 0;
var lives = 3;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png',32,48);
	game.load.spritesheet('baddie', 'assets/baddie.png',32,32 );
}

function create(){
	//turn on physics
	game.physics.startSystem(Phaser.Physics.ARCADE); 

	//create sky
	game.add.sprite(0,0,'sky');
	//create a group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	//create ground
	var ground = platforms.create(0,550, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	//create ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-100, 250, 'ground');
	ledge.body.immovable = true;

	
	//setup text
	var style = {font: "bold 32px Arial", fill: "#fff"};

	//create and position score
	scoreLabel = game.add.text(300,560,"score: ", style);
	scoreText = game.add.text(420,560,"score: ", style);

	lifeLabel = game.add.text(10,5, "lives: ", style);
	lifeText = game.add.text(120,5,"Lives: ", style);


	//lesson 8

	player = game.add.sprite(32, 400, 'dude')
	player.animations.add('left', [0,1,2,3],10,true)
	player.animations.add('right', [0,1,2,3],10,true)
	game.physics.arcade.enable(player);
	player.body.gravity.y = 300;
	player.body.bounce.y = 0.2;
	player.body.collideWorldBounds = true;


	//create enemy
	enemy1 = game.add.sprite(760, 20, 'baddie')
	enemy1.animations.add('left',[0,1],10,true);
	enemy1.animations.add('right',[2,3],10,true);
	game.physics.arcade.enable(enemy1);
	enemy1.body.gravity.y = 500;
	enemy1.body.bounce.y = 0.2;
	enemy1.body.collideWorldBounds = true;

	enemy2 = game.add.sprite(450, 20, 'baddie')
	enemy2.animations.add('left',[0,1],10,true);
	enemy2.animations.add('right',[2,3],10,true);
	game.physics.arcade.enable(enemy2);
	enemy2.body.gravity.y = 500;
	enemy2.body.bounce.y = 0.2;
	enemy2.body.collideWorldBounds = true;
	
	enemy3 = game.add.sprite(760, 20, 'baddie')
	enemy3.animations.add('left',[0,1],10,true);
	enemy3.animations.add('right',[2,3],10,true);
	game.physics.arcade.enable(enemy3);
	enemy3.body.gravity.y = 500;
	enemy3.body.bounce.y = 0.2;
	enemy3.body.collideWorldBounds = true;



	//create stars
	stars = game.add.physicsGroup();
	stars.enableBody = true;
	//use a loop to create 12 stars
	for(var i = 0; i < 12; i++){
		var star = stars.create(i * 70,0, 'star');
		star.body.gravity.y = 200;
		star.body.bounce.y = 0.7 + Math.random()* 0.2;
	} 

	//create keyboard entries
	cursors = game.input.keyboard.createCursorKeys();


}



function update(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(stars, platforms);
	game.physics.arcade.collide(enemy1, platforms);

	//lesson 9
	game.physics.arcade.overlap(player, stars, collectStar);
	game.physics.arcade.overlap(player, enemy1, loseLife);

	//controls for the player
	player.body.velocity.x = 0;
	if(cursors.left.isDown){
		//move left
		player.body.velocity.x = -250;
		player.animations.play('left');
	} else if(cursors.right.isDown){
		//move right
		player.body.velocity.x = 250;
		player.animations.play('right');
	} else {
		player.animations.stop();
		player.frame = 4;
	}
		
	if(cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = -300;
	}


	//call functioj move Enemy
	moveEnemy();

	//check if the game is over
	if(lifes = 0){
		endGame();
	}

}


function endGame(){
	player.kill();
	scoreLabel.text = "GAME OVER! You scored " + score 
	scoreText.visible = false;
	lifeLabel.visible = false;
	lifeText.visible = false;
}

function moveEnemy(){
	if(enemy1.x > 711){
		enemy1.animations.play('left');
		enemy1.body.velocity.x = -120;
	} else if(enemy1.x < 405){
		enemy1.animations.play('right');
		enemy1.body.velocity.x = 120;
	}
}

function loseLife(player, enemy){
	lives -= 1; //same as lives = lives - 1
	lifeText.setText(lives);

	enemy.kill();
	enemy.reset(10, 20);
}

function collectStar(player, star){
	score += 1;
	scoreText.setText(score);
	star.kill();
	star.reset(Math.random()* 750, 0)
}