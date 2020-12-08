//factory declaration

 function User(name,age){
    Name=name,
    Age=age
   
}

 function Employee(id,loc,add){
     Id=id,
     LocationE=loc,
     Address=add
             
}
var setObj={
   getSetGen: function (){
       var that=this; ///to access object Caller inside inner function 
    for(var prop in that){
         ///IIFE To access all properities
        
       (function (prop){
            that["set"+prop]=function (val){
                                        that[prop]=val;
                                           }
            
            ///////////getter Function///////////////////
            
           that["get"+prop]=function(){
                                 return that[prop];
                                      }
       }
         
       )(prop);
    }
}
}

