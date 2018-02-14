console.log("test");

var c = document.getElementById("canvas1");
var ctx = c.getContext('2d');

var WIDTH = 1200;
var HEIGHT = 650;
//coordinates and movement
var s, y;
var mx, my;

//draw Shape
function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,6.28)
	ctx.closePath();
	ctx.strokeStyle = "maroon";
	ctx.stroke();
	ctx.fillStyle = "yellow"
	ctx.fill();
}

//initialize animation
function init(){
	x = 300;
	y = 200;
	mx = 5;
	my = 6;
	return setInterval(draw,10);
}

function random(){
	return Math.floor(Math.random()*255);
}


function draw(){
	clear();
	circle(x,y,60);
	ctx.fillStyle = "rgb("  + random() +  "," + random() + "," + random() + ")"
	ctx.fill();
	
	//bounce
	if(x+mx < 0 || x+mx > WIDTH){
		mx = -mx;
	}

	if(y+my < 0 || y+my > HEIGHT){
		my = -my;
	}

	//update x and y
	x = x + mx; //x+= mx
	y = y + my; //y+=my
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

init();





