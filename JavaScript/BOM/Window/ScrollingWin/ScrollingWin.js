var win,H=0,TH,timer;


function openWin(){
    win=window.open("child.html","ay7aga","width=150,height=200");
    win.focus();
    timer=setInterval(ScrollDownWin,200);
    
}

function ScrollDownWin(){
TH=win.outerHeight;    
    if(H<=TH){
        H+=20;
        win.scrollBy(0,H);
    }
        else{
            finish();
        }  
}

function finish(){
    clearInterval(timer);
    win.close();
}