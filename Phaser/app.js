var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});

var score = 0;
var lives = 3;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('groung', 'assets/platforms.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude',32,48);
	game.load.spritesheet('baddie', 'assets/baddie',32,32 );
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
	var ground = platforms.create(0,550 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	//create ledges
	var ledge = platforms.create(400, 400, 'gound');
	ledge.body.immovable = true;
	ledge = platforms.create(100, 200, 'ground');
	ledge.body.immovable = true;

	//setup text
	var style = {font: "bol 32px Arial", fill: "#fff"};

	//create and position score
	scoreLabel = game.add.text(300,560,"score: ", style);
	scoreText = game.add.text(420,560,"score: ", style);

	lifeLabel = game.add.text(10,5, "lives: ", style);
	lifeText = game.add.text(120,5,"Lives: ", style);
}
}

function update(){

}