var name,age;
function saveInfo(){
   name=document.getElementById("txt1").value;
   age=document.getElementById("txt2").value;
   localStorage.setItem("userAge",age);
   localStorage.setItem("userName",name);
   

}