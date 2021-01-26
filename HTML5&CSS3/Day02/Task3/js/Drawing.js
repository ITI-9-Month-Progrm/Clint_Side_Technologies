var convas = document.getElementById("convasID");
var ctx=convas.getContext("2d");
function drawCircle(x,y,rad,startAngle,endAngle,diraction,color){
         //ANGLES in radians.
         var startAngleRadians = startAngle * (Math.PI/180);
         var endAngleRadians   = endAngle   * (Math.PI/180);
   
         // RADIUS.
         var radius = rad;
   
         // ATTRIBUTES.
         ctx.strokeStyle = "white";
         ctx.fillStyle   = color;
        
       
         // SHAPE.
         ctx.beginPath();
         ctx.arc(x, y,radius,startAngleRadians, endAngleRadians,diraction);
         ctx.fill();
         ctx.stroke(); }
         var i=0;
 function move(){
            if(i<=10){
                if(i%2==0 && i!=10 ){
                    drawCircle(150,150,50,0,180,false,"white");
                    drawCircle(150,150,50,0,180,true,"red");
                    console.log(i);
                }
                //Bonus
                else if(i == 10){
                    drawCircle(150,150,50,0,360,true,"red");
                    
                    console.log(i);
                }
                
                else{
                    drawCircle(150,150,50,0,180,true,"white");
                    drawCircle(150,150,50,0,180,false,"red");
                    console.log(i);
                }
            }
            i=i+1;
         }


var timer;
setInterval(move,1000);
