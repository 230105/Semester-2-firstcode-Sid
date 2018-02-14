console.log("test");

var c = document.getElementById("canvas1");
var ctx = c.getContext('2d');

//width and height of canvas
var WIDTH = 600;
var HEIGHT = 600;


//position and sie of player
var x = 300;
var y = 300;
var w = 70;
var h = 80;

//speed in x and y direction
var mx = 0;
var my = 0;

//position and size of circle
var circleX;
var circleY;
var circleW = 50;
var circleH = 50;

//track if collision 
var circleCollision = false;

var score = 0;

//import changes
function drawPlayer(){
	var player = new Image();
	player.src = "pennywise_by_mrgrieves21-db41nz1.png"
	ctx.drawImage(player, x, y, w, h)
}

function drawCircle(){
	var circle = new Image();
	circle.src = "Circle-PNG-File.png"
	ctx.drawImage(circle, circleX, circleY, circleW, circleH)
}


//wipe canvas
function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

//initialize to kick off game
function init(){
	//set up keyboard
	window.onkeydown = keydownControl;
	//circle in random position
	circleX = Math.floor(Math.random()*(WIDTH - circleW));
	circleY = Math.floor(Math.random()*(HEIGHT - circleH));

	//update every 10ms
	return setInterval(draw, 10);

}


function draw(){
	clear();
	drawPlayer();
	drawCircle();
	//make sprite bounce off walls
	if(x + mx > WIDTH - w || x + mx < 0){
		mx = -mx; 
	} else if(y + my > HEIGHT - h || y + my < 0){
		my = -my;
	}

	//move player
	x += mx;
	y += my;

	//Is there a collision?
	collisionCheck();
	collisionHandle();

}


function keydownControl(e){
//37=left, 38=up, 39=right, 40=down
	if(e.keyCode == 37){
		mx = -4;
		my = 0;
	} else if(e.keyCode == 38){
		mx = 0;
		my = -4;
	}else if(e.keyCode == 39){
		mx = 4;
		my = 0;
	}else if(e.keyCode == 40){
		mx = 0;
		my = 4;
	}
}

function collisionCheck(){
	if ((x+w >= circleX) && (x <= circleX + circleW && (y+h >= circleY) && (y <= circleY + circleH))){
		circleCollision = true;
	} else {
		circleCollision = false;
	}
}

function collisionHandle(){
	if(circleCollision){
	circleX = Math.floor(Math.random()*(WIDTH - circleW));
	circleY = Math.floor(Math.random()*(HEIGHT - circleH));
		score += 1;
		document.getElementById("scoreDisplay").innerHTML = 
		"Score: " + score;
	}
}



init();















