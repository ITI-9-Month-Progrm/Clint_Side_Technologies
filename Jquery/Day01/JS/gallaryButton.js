$(function(){
    $("#gallary").on("click",showGallaryDiv);
});

function showGallaryDiv(){
    //to remove any thing inside center tag
    document.getElementById("main").innerHTML="";
    
    //create Nodes
    var newImgC=$("<img>");
    var newImgL=$("<img>");
    var newImgR=$("<img>");
    
    //put nodes in specific position
    $("center").append(newImgL);
    $("center").append(newImgC);
    $("center").append(newImgR);
   
    //set atrr for imgs and div
    newImgL.attr({
       "id":"img1",
        "src":"../sonwManPic/left.png",
        "width":"100px",
        "height":"50px"
        
    });
    newImgL.css("margin-bottom","100px");
    
    newImgC.attr({
       "id":"imgc",
        "src":"../sonwManPic/1.jpg",
        "width":"300px",
        "height":"250px"
        
    });
    newImgC.css("margin-top","30px");
    
    newImgR.attr({
       "id":"img2",
        "src":"../sonwManPic/right.png",
        "width":"100px",
        "height":"50px"
        
    });
    newImgR.css("margin-bottom","100px");
    
    //handel events and affects
    //right >
    $("#img2").on("click",nextPic);
    //left < 
    $("#img1").click(previousPic);
    
    var i=1;
    function nextPic(){
        if(i<8){
            i++;
               // $("#imgc").attr("src","../sonwManPic/"+(i-1)+".jpg");
                $("#imgc").fadeOut(1000);
                
                $("#imgc").attr("src","../sonwManPic/"+i+".jpg");
                $("#imgc").fadeIn();
            
            
        }
    }
    
    function previousPic(){
        if(i>1){
            i--;
            $("#imgc").fadeOut(1000);
                
                $("#imgc").attr("src","../sonwManPic/"+i+".jpg");
                $("#imgc").fadeIn();
        }
    }
    
    
    
    
    
}