function checkTwoParameter(...para){
    if(para.length === 2){
        console.log(`The total number of function parameters is ${para.length}`)
    }
    else{
        throw 'The function parameters are not equal two'
    }
}
function checkParameter(){
    
    if(arguments.length === 2){
        console.log(`The total number of function parameters is ${arguments.length}`)
    }
    else{
        throw 'The function parameters are not equal two'
    }
}