function addValue(num){
    document.querySelector("#txt1").value+=num.value;
}

function clearInput(){
    document.querySelector("#txt1").value="";
}

function deleteChar(){
    var str,len,newStr;
    str= document.querySelector("#txt1").value;
    len=str.length;
    newStr=str.substring(0,len-1);
   document.querySelector("#txt1").value=newStr;
}