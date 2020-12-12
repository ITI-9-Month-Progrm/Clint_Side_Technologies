function move(){
    var image1,image2,image3,timer;
    
        document.getElementById("Mover").value="Stop";
        image1=document.getElementsByClassName("img1")[0];
        image2=document.getElementsByClassName("img2")[0];
        image3=document.getElementsByClassName("img3")[0];
        
    
    
        image1.style.left=(parseInt(getComputedStyle(image1).getPropertyValue('left')) + 10) + "px";
        image2.style.left=(parseInt(getComputedStyle(image2).getPropertyValue('left')) - 10) + "px";
        image3.style.top=(parseInt(getComputedStyle(image3).getPropertyValue('top')) - 10) + "px";
         console.log("img1" + image1.style.left);
         console.log("img2" + image2.style.left);
         console.log("img3" + image3.style.top);
        if ((parseInt(getComputedStyle(image1).getPropertyValue('left')) >= 250) && 
            (parseInt(getComputedStyle(image2).getPropertyValue('left')) <= 0) && 
            (parseInt(getComputedStyle(image3).getPropertyValue('top')) <= 0)
           ){
            clearTimeout(timer);
        }
         else
         timer=setTimeout(move,50);
   



}
function reset(){
    
}
function Stop(){
    
}