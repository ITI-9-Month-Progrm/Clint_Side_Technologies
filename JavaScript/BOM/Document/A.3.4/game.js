var clickCounter,src1,src2,finishCounter;
clickCounter=0;
finishCounter=0;

//Chage Image
//imageNumber: 1 functuins: 0->11 
//imageNumber: 2 functuins: 1->4
//imageNumber: 3 functuins: 2->8
//imageNumber: 4 functuins: 5->6
//imageNumber: 5 functuins: 3->10
//imageNumber: 6 functuins: 7->9

function changeImage0(imgNum){
  clickCounter++;
   
  imgNum.src="memoryGame/1.gif"
     src1=imgNum.src;
    
}
function changeImage1(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/2.gif"
     src1=imgNum.src;
    
}
function changeImage2(imgNum){
  clickCounter++;
    
  imgNum.src="memoryGame/3.gif"
     src1=imgNum.src;
    
}
function changeImage3(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/5.gif"
     src1=imgNum.src;
    
}
function changeImage4(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/2.gif"
     src2=imgNum.src;
    
}
function changeImage5(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/4.gif"
     src1=imgNum.src;
    
}
function changeImage6(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/4.gif"
     src2=imgNum.src;
    
}
function changeImage7(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/6.gif"
     src1=imgNum.src;
    
}
function changeImage8(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/3.gif"
     src2=imgNum.src;
    
}
function changeImage9(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/6.gif"
     src2=imgNum.src;
    
}
function changeImage10(imgNum){
  clickCounter++;
  imgNum.src="memoryGame/5.gif"
     src2=imgNum.src;
    
}
function changeImage11(imgNum){
  clickCounter++;
   
  imgNum.src="memoryGame/1.gif"
     src2=imgNum.src;
    
}


function gameTrue(){
    
    if(clickCounter===2){
    if(src1!=src2){
        document.images[0].src="memory%2520Game/Moon.gif"
        document.images[2].src="memory%2520Game/Moon.gif"
            
    }
        else{
        finishCounter++;
    }
}
    
}

function stopPlaying(){
    if(finishCounter===6){
        alert("Congratulation:) You are Winner")
    }
}


