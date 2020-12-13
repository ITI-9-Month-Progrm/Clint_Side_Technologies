var timer,image1,image2,image3;
function move(){
    document.getElementById("Mover").style.display="none";
    document.getElementById("Stop").style.display="inline";
    
    
        //document.getElementById("Mover").value="Stop";
        image1=document.getElementsByClassName("img1")[0];
        image2=document.getElementsByClassName("img2")[0];
        image3=document.getElementsByClassName("img3")[0];
        
    
    
        image1.style.left=(parseInt(getComputedStyle(image1).getPropertyValue('left')) + 10) + "px";
        image2.style.left=(parseInt(getComputedStyle(image2).getPropertyValue('left')) - 10) + "px";
        image3.style.top=(parseInt(getComputedStyle(image3).getPropertyValue('top')) - 15) + "px";
         console.log("img1" + image1.style.left);
         console.log("img2" + image2.style.left);
         console.log("img3" + image3.style.top);
        if ((parseInt(getComputedStyle(image1).getPropertyValue('left')) >= 216) && 
            (parseInt(getComputedStyle(image2).getPropertyValue('left')) <= 10) && 
            (parseInt(getComputedStyle(image3).getPropertyValue('top')) <= 12)
           ){
            
            clearTimeout(timer);
        }
         else
         timer=setTimeout(move,50);
   }
function reset(){
    image1.style.position="absolute";
    image1.style.top="125px";
    
    image2.style.position="absolute";
    image2.style.top="125px";
    image2.style.left="215px";
    
    image3.style.position="absolute";
    image3.style.top="320px";
    image2.style.left="125px";
}
function Stop(){
   document.getElementById("Mover").style.display="inline";
    document.getElementById("Stop").style.display="none";
clearTimeout(timer);
}