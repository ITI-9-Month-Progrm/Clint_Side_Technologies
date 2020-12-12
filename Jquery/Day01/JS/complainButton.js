$(function(){
    $("#complain").on("click",showComplainDiv);
});

var gname,gemail,gphone,gcom;

function showComplainDiv(){

    var flag;
    flag=1;
    
    if(flag){
        //to remove any thing inside center tag
    
        flag=0;
        send();
   }
  
    else
  {
      
      flag=1;
      returnDiv();
      
  }
}

function send(){
        document.getElementById("main").innerHTML="";
        var newDiv=$("<div></div>");
        var name=$("<lable>Name</lable>");
        var email=$("<lable>Email</lable>");
        var phone=$("<lable>Phone</lable>");
        var complain=$("<lable>Complain</lable>");
        var nameInput=$("<input><br><br>");
        var emailInput=$("<input><br><br>");
        var phoneInput=$("<input><br><br>");
        var phoneInput=$("<input><br><br>");
        var complainInput=$("<input><br><br>");
        var buttonInput=$("<button>Send</button>");
        
    
    
    $("center").append(newDiv);
    
    newDiv.append(name);
    newDiv.append(nameInput);
    newDiv.append(email);
    newDiv.append(emailInput);
    newDiv.append(phone);
    newDiv.append(phoneInput);
    newDiv.append(complain);
    newDiv.append(complainInput);
    newDiv.append(buttonInput);
    
    //set style for div
    newDiv.css("width","300px");
    newDiv.css("height","350px");
    newDiv.css("box-shadow", "20px 10px #ff80b3");
    newDiv.css("padding","50px");
    
    complainInput.css("width","150px");
    complainInput.css("height","100px");
    //nameInput.attr({"value":" "});
    
    gname=nameInput.val();
    gemail=emailInput.val();
    gphone=phoneInput.val();
    gcom=complainInput.val();
        
    buttonInput.on("click",returnDiv);
    
    }

function returnDiv(){
        document.getElementById("main").innerHTML="";
        var newDiv=$("<div></div>");
    
        var name=$("<lable>Name</lable>");
        var nameInput=$("<lable></lable><br><br>");
    
        var email=$("<lable>Email</lable>");
        var emailInput=$("<lable></lable><br><br>");
    
        var phone=$("<lable>Phone</lable>");
        var phoneInput=$("<lable></lable><br><br>");
    
        var complain=$("<lable>Complain</lable>");
        var complainInput=$("<lable></lable><br><br>");
        
       var buttonInput=$("<button>back to Edit</button>");
    
    
    $("center").append(newDiv);
    
    newDiv.append(name);
    newDiv.append(nameInput);
    newDiv.append(email);
    newDiv.append(emailInput);
    newDiv.append(phone);
    newDiv.append(phoneInput);
    newDiv.append(complain);
    newDiv.append(complainInput);
    newDiv.append(buttonInput);
    
    //set style for div
    newDiv.css("width","300px");
    newDiv.css("height","350px");
    newDiv.css("box-shadow", "20px 10px #ff80b3");
    newDiv.css("padding","50px");
    
    complainInput.css("width","150px");
    complainInput.css("height","100px");
    gname=nameInput.text();
    gemail=emailInput.text();
    gphone=phoneInput.text();
    gcom=complainInput.text();
    
    //put values
    nameInput.html(gname);
    emailInput.html(gemail);
    phoneInput.html(gphone);
    complainInput.html(gcom);
        
    buttonInput.on("click",send);
       
        
    }
