
if(getCookie("userGender")==="Male")
    {
    document.images[0].src="../genders/1.jpg";
   }
if(getCookie("userGender")==="Female"){
    document.images[0].src="../genders/2.jpg";
}


var name,num=1,color;

name = getCookie("userName");

color = getCookie("favouriteColor");




document.getElementById("txt").innerHTML="Welcome "+name.fontcolor(color)+" you have visited site "+num+" times :) "
