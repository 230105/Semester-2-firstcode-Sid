console.log("test");

var c = document.getElementById("canvas1");
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle ="blue";
ctx.moveTo(150,20);
ctx.lineTo(100,270);
ctx.lineTo(200,270);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

ctx.beginPath();
ctx.arc(150,50,60,0,6.28);
ctx.closePath();

ctx.stroke();
ctx.fill();






console.log("test");

var c2 = document.getElementById("canvas2");
var ctx = c2.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle ="red";
ctx.moveTo(100,20);
ctx.lineTo(100,270);
ctx.lineTo(150,270);
ctx.closePath();
ctx.beginPath();
ctx.stroke();
ctx.lineWidth = 2;
ctx.strokeStyle ="red";
ctx.moveTo(200,40);
ctx.lineTo(100,270);
ctx.lineTo(150,270);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();
ctx2.fillRect(100,100,100,100)

console.log("test");

var c2 = document.getElementById("canvas2");
var ctx = c2.getContext('2d');

ctx2.fillRect(100,100,100,100)

