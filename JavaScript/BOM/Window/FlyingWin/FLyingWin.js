var win,H=0,W=0,TH,timer,flag=0;
TH=window.outerHeight; //to get height of browser page

function openWin(){
    win = window.open("child.html","FLying","width=100,height=100");
   }

function forwardDir(){
    if(flag==0){
        win.moveBy(H,W);
        win.focus();
        H+=50;
        W+=50;
        if(H==300){flag=1;}
    }
    
}

function reverseDir(){
    if(flag==1){
        win.moveBy(-H,-W);
        win.focus();
        H-=50;
        W-=50;
        if(H==0){flag=0;}
    }
}

function fly(){
    forwardDir();
    reverseDir();
}

function stop(){
    clearInterval(timer);
    win.close();
}

 openWin();
 timer=setInterval(fly,100);