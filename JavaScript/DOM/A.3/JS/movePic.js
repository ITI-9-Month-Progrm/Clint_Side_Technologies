function move(){
    var image1,image2,image3;
    if(document.getElementById("Mover").value=="Go"){
        document.getElementById("Mover").value="Stop";
        image1=document.getElementsByClassName("img1");
        image2=document.getElementsByClassName("img2");
        image3=document.getElementsByClassName("img3");
        image3.style.top=(parseInt(getComputedStyle(image3).getPropertyValue('top')) - 10) + "px";
                         //(parseInt(getComputedStyle(image3).top) - 10) + "px";
        
        //console.log("tiger" + img.style.top);
        if(parseInt(image3.style.top)<=0){
            clearTimeout(timer);
        }
        var timer=setTimeout(move,50);
    }
}
function reset(){
    
}
function Stop(){
    
}