console.log("test");

var c = document.getElementById("canvas1");
var ctx = c.getContext('2d');

var img = new Image();
img.src = 'vegeta-new-form-dragon-ball-super--1075377-1280x0.jpg';
img.onload = function(){
	ctx.drawImage( img,300,200,100,200)
};