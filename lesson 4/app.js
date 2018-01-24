console.log("test");

var c = document.getElementById("canvas1");
var ctx = c.getContext('2d');

// var img = new Image();
// img.src = 'vegeta-new-form-dragon-ball-super--1075377-1280x0.jpg';
// img.onload = function(){
	// ctx.drawImage( img,50,150, 250,150)
// };

// var img2 = new Image();
// img2.src = 'image.jpg';
// img2.onload = function(){
	// ctx.drawImage( img2,100,10, 200,130)
// };

// ctx.fillText("Son Goku: The Strongest Saiyan", 10,30)
// ctx.strokeText("vegeta: the saiyan prince", 100, 150)

var c2 = document.getElementById("canvas1");
var ctx2 = c2.getContext('2d');

ctx2.fillStyle = "cyan";
ctx2.fillRect(0,0,800,500);

ctx2.fillStyle = "darkgreen";
ctx2.fillRect(0,450,800,400);


var img = new Image();
img.src = 'empire-clipart-tall-building-15.png';
img.onload = function(){
	ctx.drawImage(img,500,300, 200,300)
};

var img2 = new Image();
img2.src = '5272001-1676614945-son_g.png';
img2.onload = function(){
	ctx.drawImage(img2,100,200, 100,200)
};



