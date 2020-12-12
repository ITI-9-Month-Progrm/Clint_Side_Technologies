$(function(){
    $("#services").on("click",showServicesDiv);
});
function showServicesDiv(){
    //to remove any thing inside center tag
    document.getElementById("main").innerHTML="";
    
    //create new nodes
     //var newDiv=$("<div></div>");
     var newList=$("<ul></ul>");
     var newItem1=$("<li>item#1</li>");
     var newItem2=$("<li>item#2</li>");
     var newItem3=$("<li>item#3</li>");
    
    
    //put nodes in specific position
    $("center").append(newList);
     //newDiv.append(newList);    
     newList.append(newItem1);
     newList.append(newItem2);
     newList.append(newItem3);
    //put attr
    newList.attr({"id":"menu"});
    newList.css("list-style-type", "none");
    //newItem1.css("background-color","red");
    newItem1.css("width","50px");
    newItem1.css("background-color"," palevioletred");
    newItem1.css("margin-bottom","5px");
    newItem1.css("box-shadow","5px 5px #888888");
    
    newItem2.css("width","50px");
    newItem2.css("background-color"," palevioletred");
    newItem2.css("margin-bottom","5px");
    newItem2.css("box-shadow","5px 5px #888888");
    
    newItem3.css("width","50px");
    newItem3.css("background-color"," palevioletred");
     newItem3.css("box-shadow","5px 5px #888888");
   $("#menu").slideDown(2000);
    
}