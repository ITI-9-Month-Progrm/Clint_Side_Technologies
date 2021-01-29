var txt1,txt2,span1,span2;
txt1=document.getElementById("txt1");
txt2=document.getElementById("txt2");
txt1.onchange=function(){
    if(txt1.value.length>=5){
        span1=document.getElementById("span1");
        span1.style.visibility="hidden";
    }
}
txt2.onchange=function(){
    if(txt2.value.includes("@") && txt2.value.includes(".") ){
        span2=document.getElementById("span2");
        span2.style.visibility="hidden";
    }
}
