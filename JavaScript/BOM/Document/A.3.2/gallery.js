var phototNumber,timer,flag=0;

phototNumber=1;

function nextPhoto(){
   
 if(phototNumber<6){
        phototNumber++;
         document.images[0].src="SlideShow/" + phototNumber + ".jpg";
    } 
    else{flag=1;}
}



function previousPhoto(){
    if(phototNumber>1){
        phototNumber--;
        document.images[0].src="SlideShow/" + phototNumber + ".jpg";
    }else{
        flag=0;
    }
}


function repeatePhoto(){
   if(flag==0){
     nextPhoto();
       }
    else {
        previousPhoto();
    }
}


function SlideShow(){
    timer=setInterval(repeatePhoto,1000);
}

function Stop(){
    clearInterval(timer);
    document.images[0].src="SlideShow/" + phototNumber + ".jpg";
}

