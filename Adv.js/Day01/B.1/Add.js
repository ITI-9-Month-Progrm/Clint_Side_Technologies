var err = new Error("This is Error, You must enter only two numbers");
function add(){
    if(arguments.length!=2){
        throw err;
    }
    else
        {
            return arguments[0]+arguments[1];
        }
}

function sum(){
    var str, res=0;
    str=document.getElementById("txt").value;
    if(str.length!=2){
        document.getElementById("error").innerHTML=err.message.fontcolor("red");
    }
    else{
        res=parseInt(str[0])+parseInt(str[1]);
        document.getElementById("error").innerHTML="resulte = "+res;
    }
}

function clearData(){
    document.getElementById("txt").value=" ";
   
}