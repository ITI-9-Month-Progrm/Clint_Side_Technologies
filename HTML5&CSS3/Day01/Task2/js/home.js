var red,green,blue,redInput,greenInput,blueInput,rgbColor

document.getElementById("myRange1").addEventListener("change",changeColor);
document.getElementById("myRange2").addEventListener("input",changeColor);
document.getElementById("myRange3").addEventListener("input",changeColor);

function changeColor(){
     redInput=document.getElementById("myRange1");
     red=redInput.value;
     greenInput=document.getElementById("myRange2");
     green=greenInput.value;
     blueInput=document.getElementById("myRange3");
     blue=blueInput.value;
    
     rgbColor='rgb(' + red + ',' + green + ',' + blue + ')';
    
    document.getElementById("para").style.color=rgbColor;
}


   
