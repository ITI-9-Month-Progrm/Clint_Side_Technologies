var err = new Error("This is Error, You must enter only numbers");
function add(){
    var res=0;
   for(var i=0;i<arguments.length;i++){
       if(isFinite(arguments[i])){
           res+=arguments[i];
       }
       else{
           throw err;
       }
   }
    return res;
}

function sum(){
    var str, res=0,flag=1;
    str=document.getElementById("txt").value;
    for(var i=0;i<str.length;i++){
        if(isFinite(str[i])){
            res+=parseInt(str[i]);
        }
        else
            {flag=0;}
    }
    if(flag==0){
        document.getElementById("error").innerHTML=err.message.fontcolor("red");
    }
    else{
        
        document.getElementById("error").innerHTML="resulte = "+res;
    }
}

function clearData(){
    document.getElementById("txt").value=" ";
   
}