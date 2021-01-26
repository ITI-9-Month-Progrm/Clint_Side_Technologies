var convas = document.getElementById("convasID");
var ctx =convas.getContext("2d");
var x,y;
x=100,y=100;


function drawingLine(a,b){
   ctx.strokeStyle = "red";
   ctx.beginPath();
   ctx.moveTo(0,0);
   ctx.lineTo(a,b);
   ctx.stroke();
}
function mover(){
    if(x<=600){
       drawingLine(x,y);
       x=x+100;
       y=y+100;
    }
    else{
       alert("Line is arrived :) ");
    }
  }
var timer;
setInterval(mover,500);
clearInterval(timer);