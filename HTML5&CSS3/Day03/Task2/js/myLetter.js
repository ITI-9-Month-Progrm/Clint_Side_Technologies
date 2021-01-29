var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//Dimensions
var X = c.width / 2;
var Y = c.height / 2;
var R = 240;

//first circle gradient
var gradient = ctx.createRadialGradient(470, 350, 350, X+250, Y, 200);
gradient.addColorStop(0, ' #0034cb');
gradient.addColorStop(0.3, ' #496ed9');
gradient.addColorStop(0.8, '#8b9fe8');
ctx.beginPath();
ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
ctx.fillStyle = gradient;
ctx.fill();

//second circle gradient

var gradient2 = ctx.createRadialGradient(X+150, Y+80, 20, X, Y, 200);
gradient2.addColorStop(0, ' #d1dbf6');
gradient2.addColorStop(0.5, ' #496ed9');
gradient2.addColorStop(0.7, '#214dd4');
ctx.beginPath();
ctx.arc(X, Y, 180, 0, 2 * Math.PI, false);
ctx.fillStyle = gradient2;
ctx.fill();

//text gradient

ctx.shadowColor = "rgb(190, 190, 190)";
ctx.shadowOffsetX = 10;
ctx.shadowOffsetY = 10
ctx.shadowBlur = 10;
ctx.font = "320px serif";
var gradient = ctx.createLinearGradient(0, 0, 150, 100);
gradient.addColorStop(0, "white");
gradient.addColorStop(1, "white");
ctx.fillStyle = gradient;
ctx.fillText("A", X-140, Y+110);