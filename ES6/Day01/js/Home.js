//Q1: Swap the values of x and y using destructuring

var swapRes=function(num1,num2){
    return{
        num1:num2,
        num2:num1
    };
}
var res = swapRes(2,10); //num1:10 num2:2

//Q2: Using rest parameter and spread operator return max value from any array

var  createArray=function(...arr){ //array length is not fixed
   return arr;
}
var arrNum=createArray(1,2,3,4,-3,-10,11);
var maxNum=Math.max(...arrNum); //maxNum = 11
var minNum=Math.min(...arrNum); //minNum = -10

//return min and max value and display each of them separately after function call
var getMaxMin =function(arr){
    return{
        maxNum:Math.max(...arr),
        minNum:Math.min(...arr)
    };
}
var valuesRes=getMaxMin(arrNum);
console.log("Max_Value : " + valuesRes.maxNum);
console.log("Min_Value : " + valuesRes.minNum);

//Q3: Study new array api methods then create the following methods and apply it on this array
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//a. test that every element in the given array is a string
  console.log("Every : " +fruits.every((item) => {
  return typeof(item) === "string"
}
))

//b. test that some of array elements starts with "a"
console.log("Some : " + fruits.some((item)=>
   {
    return  item.startsWith("a") 
   }

))
//c. generate new array filtered from the given array with only elements that starts with "b" or "s"
console.log("Filter : " + fruits.filter((item)=>
   {
    return  item.startsWith("b") || item.startsWith("s")
   }))
//d. generate new array, each element of the new array contains a string declaring that you like the give fruit element
var newFruitsArr = fruits.map((item)=>{
    return "I Like " + item;
});   

//e. use forEach to display all elements of the new array from previouse point
newFruitsArr.forEach(element => {
    console.log(element);
});

//Q4: Create your own function that accepts multiple parameters to generate course information and display it.
function courseInfo (options={ courseName,courseDuration,courseOwner }){
   let defaultObject = {
    courseName:"javaScript",
    courseDuration: 3,
    courseOwner: "Mohammed",
    
   }
    //to check parameter name 
     if(Object.keys(options).some(namePar => !(namePar in defaultObject)))
            console.error("parameter name Error");
     else{
         objectRes = Object.assign({},defaultObject,options); //assign values 
         if(Object.length(objectRes)<=3){
             return objectRes;
         }else{
             console.error("Length Error")
         }
     }      

}

var newCourse = {courseName:"ES6",courseDuration:3,courseOwner:"ALi"};
var x =courseInfo(newCourse);

