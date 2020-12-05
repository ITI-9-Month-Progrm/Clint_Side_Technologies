

function showAscii(evt){
    
    if(evt.altKey){
        document.getElementById("txt").innerHTML="This is ALT key";}
    else if(evt.ctrlKey){
        document.getElementById("txt").innerHTML="This is CTRL key";}
    else if(evt.shiftKey){
        document.getElementById("txt").innerHTML="This is SHIFT key";}
    else {
        
        document.getElementById("txt").innerHTML=evt.charCode;
    }
    
}

