var i,timer1,timer2;


function onMouseImage(){
    clearInterval(timer1);
    clearTimeout(timer2);
     if(i<4 && i>-1){
       document.images[i].src="marbels/marble3.jpg"
       
    }
    
    
}


i=0;
function nextPhoto(){
    document.images[i].src="marbels/marble3.jpg"
    timer2=setTimeout(checkCounter,500);
}

function checkCounter(){
    document.images[i].src="marbels/marble1.jpg"
    if(i===4){
        i=0;
    }
    else{
        i++;
    }
}



function onMouseOutImage(){
    timer1=setInterval(nextPhoto,1000);
}

timer1=setInterval(nextPhoto,1000);



