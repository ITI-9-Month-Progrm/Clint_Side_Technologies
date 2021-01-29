var c = document.getElementById("myCanvas");
var ctx=c.getContext("2d");
var linearGradient = ctx.createLinearGradient(0,0,0,200);
    linearGradient.addColorStop(0.5,"#80ccff");
    linearGradient.addColorStop(0.7,"white");
    linearGradient.addColorStop(1,"#009900");
    ctx.fillStyle=linearGradient;
    ctx.fillRect(50, 50, 300, 200);
    ctx.fillStyle="black";
    ctx.beginPath();
    //top 
    ctx.moveTo(100,120);
    ctx.lineTo(300,120);
    ctx.stroke();
    //left
    ctx.moveTo(100,120);
    ctx.lineTo(100,200);
    ctx.stroke();
    //right
    ctx.moveTo(300,120);
    ctx.lineTo(300,200);
    ctx.stroke();
      
 
