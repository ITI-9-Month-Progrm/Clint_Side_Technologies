function reversArr(){
    var arr = new Array();
    for(var i=0;i<arguments.length;i++){
        arr[i]=arguments[arguments.length-i-1];
    }
    return arr;
}


function reversArr2(){
    return [].reverse.call(arguments);
}