console.log("testing.... ")

var c = document.getElementById("myCanvas")

var ctx = c.getContext("2d");

//starting point
ctx.moveTo(0,0);
//end point 
ctx.lineTo(200,100);
//line color
ctx.strokeStyle = "green"
//draw line
ctx.stroke();

//draw rectangle
ctx.strokeRect(50,50, 200,200);

//change filled in color
ctx.fillStyle = "maroon";
//draw fill in rectangle
ctx.fillRect(100,100, 100,100);


//clear a rectangle
ctx.clearRect(100,100,30,30);
ctx.clearRect(170,100,30,30);


var c1 = document.getElementById("myCanvas1")
var ctx1 = c1.getContext("2d");

ctx1.fillRect(100,100,100,100);













