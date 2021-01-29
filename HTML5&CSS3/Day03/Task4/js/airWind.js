var can = document.getElementById("myCanvas");
var context = can.getContext('2d');
var counter=0;
var counter1=0;
var x=21;
var i;

function repeat(){
    context.clearRect(0,0,can.width,can.height);
    context.fillStyle="rgba(66, 170, 245,0.4)";
    i =setInterval(()=>{
    counter1=0;
    if(counter==17)
    {
        clearInterval(i);
        reverse();
    }
    else
    {
        context.beginPath();
        context.translate(125,-130);
        context.rotate((x) * Math.PI / 180);
        context.opacity=0.5   
        context.fillRect(400,300,50,150);
        counter++;
        context.save();
        
    }
}, 300);
}
function reverse() {
    context.clearRect(0,0,can.width,can.height);
    context.fillStyle="rgba(66, 170, 245,0.4)";
    var r=setInterval(() => {
    counter=0;
    if(counter1==17)
    {
        clearInterval(r);
        repeat();
    }
    else
    {
        context.opacity=0.5;
        context.restore();  
        context.fillRect(400,300,50,150);
        counter1++;
       
    }
}, 300);
}
repeat();