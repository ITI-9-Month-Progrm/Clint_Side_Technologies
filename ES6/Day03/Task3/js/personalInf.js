//object Target 
let personInfo = {
        name:"AsmaaKh",
        address:"Giza-Egypt",
        age:22
}

let handler = {
    set:function(target,prop,value){
        switch(prop){
           
            case "name":
                if(value.length === 7){
                    target[prop]=value;
                }else{
                    throw 'This name is not valid'
                }
               break; 
        ////////////////////        
            case "address":
                 if(typeof(value)==="string"){
                    target[prop]=value;
                }else{
                    throw 'This address is not valid'
                }
               break;
        ////////////////////
         case "age":
            if(typeof(value)==="number"){
                target[prop]=value;
            }else{
                throw 'This age is not valid'
            }
            break;
         }
    }
}

let personalInfoProxy = new Proxy(personInfo,handler);