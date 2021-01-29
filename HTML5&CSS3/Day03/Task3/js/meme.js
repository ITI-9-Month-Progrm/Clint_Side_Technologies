var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var x,y;
x=c.width;
y=c.height;
var text;
text="it's gonna be ok sweetheart";
var img = new Image();
img.src="../../images/1.jpg";
img.onload = function(){
   ctx.drawImage(img,0,0,x,y);
   ctx.shadowColor = "rgb(242, 242, 242)";
   ctx.shadowOffsetX = 5;
   ctx.shadowOffsetY = 5;
   ctx.shadowBlur = 3;
   ctx.font = "40px Impact";
   ctx.fillStyle="white";
   ctx.fillText(text, 0, 350);
  
}