var message="Hello Java Script :) ";
var l=message.length;
var win,timer1,i=0;

function openWin(){
    win = window.open("child.html","Typing","width=500,height=300");
    win.focus();
    timer1 = setInterval(printChar,300);

}

function printChar(){
    if(i>=0 && i!=l){
        win.document.write(message[i]);i++;  
    }
    else{
         finsh();
    }   
}

function finsh(){
    clearInterval(timer1);
        win.close();
}






