$(function(){
    $("#about").on("click",createTextDiv);
});

function createTextDiv(){
    //to remove any thing inside center tag
    document.getElementById("main").innerHTML="";
    
    //create new nodes
    var newDiv=$("<div></div>");
    var newP=$("<p></p>");
    
    //put nodes in specific position
    $("center").append(newDiv);
    newDiv.append(newP);
    
    //put some attributes
    newDiv.attr({
        "id":"aboutID",})
    
    //put value for paragraph
    newP.html("Hello,Here You Will find Story about snow man :)");
  
    //set style for div
    newDiv.css("width","300px");
    newDiv.css("height","250px");
    newDiv.css("box-shadow", "20px 10px #ff80b3");
    newDiv.css("padding","50px");
}





