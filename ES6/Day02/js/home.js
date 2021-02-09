//Q1: Create a generator that returns fibonacci series that takes only one parameter

//function that take max number as parameter
function* getFibonacciByMax(maxElement)
{
    //start -> 0 
    //equation num(n+1)=num(n)+num(n-1)
    //end -> res <= 14
    var  res =[];
    res[0]=0;
    res[1]=1;
    yield res[0]
    yield res[1]
    for (let start=2 ;start<=maxElement;start++)
       {
           res[start]=res[start-1] + res[start-2];
           yield res[start];
       }
}

//function that take number of element as parameter
function *getFibonacciByNumElement(numElem){
     //start 0 numElem - 1
     //equation num(n+1)=num(n)+num(n-1)
     //end -> numElem == 0
     let res=[]
     res[0]=0;
     res[1]=1;
     numElem-=2;
     yield res[0]
     yield res[1]
     for(let start =2 ;numElem >= 0;start++,numElem--)
     {
        res[start]=res[start-1] + res[start-2];
        yield res[start];
     }
    }

//Q2: Create an iterable object by implementing @@iterator method
let customItrableObject={
    fname:"Asmaa",
    lname:"Khaled"
}
//to be object as iterable object
customItrableObject[Symbol.iterator]=function objectIterato(){
    let len = Object.keys(this).length;
    //let propArr =Object.keys(this); //["fname","lname"]
    let i = 0;
    return{
        
        next: ()=> {
            
            if(i>=len){
                return{
                    value:undefined,
                    done:true
                }
            }
            else{
                return{
                    
                    value:[Object.keys(this)[i],this[Object.keys(this)[i++]]],
                    done:false
                }
                
            }
        }
    }
}

//Answer Q1:a
let itFibonacciByMax = getFibonacciByMax(14);
for(let i =0 ;i<=16;i++ )
console.log( " i : " , i , " : " ,itFibonacciByMax.next());

//Answer Q1:b
let itgetFibonacciByNumElement = getFibonacciByNumElement(6);
for(let i =0 ;i<=10;i++ )
console.log( " j : " , i , " : " ,itgetFibonacciByNumElement.next());


//Answer Q2:
for (let item of customItrableObject) {
    console.log(item);
}




