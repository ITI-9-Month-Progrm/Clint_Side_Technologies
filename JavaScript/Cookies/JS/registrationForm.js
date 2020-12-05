var username,userage,gender,color;

function registerNow(){
    username=document.getElementById("name").value;
    
    userage=document.getElementById("age").value;
    
   if(document.getElementById("male").checked){
       gender=document.getElementById("male").value;
   }
    if(document.getElementById("female").checked){
       gender=document.getElementById("female").value;
   }
   
    color = document.getElementById("color").value;
    
    setCookie("userName",username);
    setCookie("userAge",userage,1);
    setCookie("userGender",gender);
    setCookie("favouriteColor",color,1);
    
    location.replace("../HTML/loginPage.html");
    
    
}